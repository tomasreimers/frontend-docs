import {
  type Node as ThreeNode,
  Canvas,
  extend,
  useFrame,
  useThree,
} from '@react-three/fiber';
import {
  Bloom,
  ChromaticAberration,
  EffectComposer,
} from '@react-three/postprocessing';
import { Link } from 'nextra-theme-docs';
import { type MutableRefObject, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

import s from './Hero.module.scss';
import { createGPUData } from './webgl/gpgpu/data';
import { initRandom } from './webgl/initializers/random';
import { initRandomRotation } from './webgl/initializers/random_rotation';
import { passThruFn } from './webgl/shaders/passthru';
import { updatePositionsFn } from './webgl/shaders/positions';
import { ParticleRenderMaterial } from './webgl/shaders/render';
import { updateRotationsFn } from './webgl/shaders/rotations';
import { updateVelocityFn } from './webgl/shaders/velocity';
import { createAndInitializeGPUData } from './webgl/utils/create_and_initialize_gpu_data';

extend({
  ParticleRenderMaterial,
});

declare module '@react-three/fiber' {
  interface ThreeElements {
    particleRenderMaterial: ThreeNode<
      THREE.Material & {
        positions: THREE.Texture;
        rotations: THREE.Texture;
        rayOrigin: THREE.Vector3;
        rayDirection: THREE.Vector3;
        debugDistanceToMouse: boolean;
      },
      typeof ParticleRenderMaterial
    >;
  }
}

export function Hero() {
  const [offset] = useState(() => new THREE.Vector2(1e-3, 5e-4));
  const element = useRef<HTMLDivElement>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const [initialRender, setInitialRender] = useState(() => performance.now());
  useEffect(() => {
    if (element.current) {
      const handler = (ev: MouseEvent) => {
        if (element.current) {
          pointer.current = {
            x:
              ((ev.clientX - element.current.clientLeft) /
                element.current.clientWidth) *
                2 -
              1,
            y:
              1 -
              2 *
                ((ev.clientY - element.current.clientTop) /
                  element.current.clientHeight),
          };
        }
      };

      element.current.addEventListener('mousemove', handler);
      return () => element.current?.removeEventListener('mousemove', handler);
    }
  }, []);

  return (
    <div className={s.hero} ref={element}>
      <div className={s.canvasHolder}>
        <Canvas camera={{ position: [0, 0, -1] }}>
          <Particles pointer={pointer} initialRender={initialRender} />
          <EffectComposer>
            <ChromaticAberration
              radialModulation={true}
              modulationOffset={0.5}
              offset={offset}
            />
            <Bloom
              luminanceThreshold={0.5}
              luminanceSmoothing={0.7}
              radius={0.9}
              mipmapBlur={true}
            />
          </EffectComposer>
        </Canvas>
      </div>
      <div className={s.heroContent}>
        <div className={s.heroTitle}>Learn frontend</div>
        <div className={s.heroSubtitle}>
          A ~20-page guide on frontend development for backend developers.
        </div>
        <div className={s.heroCTA}>
          <Link className={s.heroCTAButton} href="/foreword">
            Get started &rsaquo;
          </Link>
          <div
            className={s.heroCTAButtonSecondary}
            onClick={() => setInitialRender(performance.now())}
          >
            Do the animation again
          </div>
        </div>
      </div>
    </div>
  );
}

function easeOutCubic(x) {
  return 1 - Math.pow(1 - x, 3);
}

function Particles({
  pointer,
  initialRender,
}: {
  pointer: MutableRefObject<{
    x: number;
    y: number;
  }>;
  initialRender: number;
}) {
  const gl = useThree((state) => state.gl);
  const [particles] = useState(() => initParticles(gl));
  const renderMaterialRef = useRef<
    THREE.Material & {
      positions: THREE.Texture;
      rotations: THREE.Texture;
      rayOrigin: THREE.Vector3;
      rayDirection: THREE.Vector3;
      debugDistanceToMouse: boolean;
    }
  >(null);

  // TODO: We should take into account the delta in time and move it by that much
  useFrame(({ gl, scene, camera }, delta) => {
    const secondsSinceRender = (performance.now() - initialRender) / 1000;
    const easeIn = easeOutCubic(Math.min(secondsSinceRender / 4, 1));
    const zoomOut = 100 * (1 - easeIn);

    // Update camera
    camera.position.set(0, 0, -zoomOut);
    camera.rotation.set(
      -1 * pointer.current.y * Math.PI * 0.1,
      Math.PI + -1 * pointer.current.x * Math.PI * 0.1,
      0
    );

    // Update particles
    particles.update({ gl, delta });

    // Render frame
    gl.setRenderTarget(null);
    gl.render(scene, camera);
  }, 1);

  const [geometry] = useState(() => {
    const geometry = new THREE.CylinderGeometry(0.1, 0.1, 0.01, 5);

    // Unfortunately the only way to do flat shading
    // https://discourse.threejs.org/t/flatshading-on-buffergeometry-or-imported-model/24241
    const nonIndexedGeometry = geometry.toNonIndexed();
    nonIndexedGeometry.computeVertexNormals();
    const attr = new THREE.InstancedBufferAttribute(particles.indicies, 2);
    nonIndexedGeometry.setAttribute('pindex', attr);

    return nonIndexedGeometry;
  });

  return (
    <instancedMesh
      args={[undefined, undefined, particles.total]}
      frustumCulled={false}
      geometry={geometry}
    >
      <particleRenderMaterial
        ref={renderMaterialRef}
        positions={particles.output.positions.texture}
        rotations={particles.output.rotations.texture}
      />
    </instancedMesh>
  );
}

function initParticles(renderer: THREE.WebGLRenderer) {
  const width = 128;
  const height = 128;

  const l = width * height;
  const indicies = new Float32Array(l * 2);
  for (let i = 0; i < l; i++) {
    const i3 = i * 2;
    indicies[i3] = (i % width) / width;
    indicies[i3 + 1] = i / width / height;
  }

  const newPositions = createAndInitializeGPUData({
    width,
    height,
    renderer,
    gen: initRandom(-127, 128),
  });
  const newVelocity = createAndInitializeGPUData({
    width,
    height,
    renderer,
    gen: initRandom(-1, 1),
  });
  const newRotations = createAndInitializeGPUData({
    width,
    height,
    renderer,
    gen: initRandomRotation(-0.5, 0.5),
  });
  const spins = createAndInitializeGPUData({
    width,
    height,
    renderer,
    gen: initRandom(-0.5, 0.5),
  });

  const oldVelocity = createGPUData({
    width,
    height,
  });
  const oldPositions = createGPUData({
    width,
    height,
  });
  const oldRotations = createGPUData({
    width,
    height,
  });

  const velocitySimulation = updateVelocityFn();
  const positionSimulation = updatePositionsFn();
  const rotationSimulation = updateRotationsFn();
  const loopback = passThruFn();

  return {
    // necessary
    total: height * width,
    indicies,
    update: ({ gl, delta }: { gl: THREE.WebGLRenderer; delta: number }) => {
      // Velocity
      loopback({
        inputs: { srcdata: newVelocity.texture },
        renderer: gl,
        output: oldVelocity,
      });
      loopback({
        inputs: { srcdata: newPositions.texture },
        renderer: gl,
        output: oldPositions,
      });
      loopback({
        inputs: { srcdata: newRotations.texture },
        renderer: gl,
        output: oldRotations,
      });

      velocitySimulation({
        inputs: {
          velocity: oldVelocity.texture,
          positions: oldPositions.texture,
          delta,
        },
        renderer: gl,
        output: newVelocity,
      });
      positionSimulation({
        inputs: {
          /**
           * Warning: Yes, it looks like this should be new velocities; for whatever reason,
           * when I change this to be new velocities, I do not see points converging on the
           * gravitational center.
           *
           * This doesn't make sense to me. We just computed the velocity to converge... Alas.
           */
          velocity: oldVelocity.texture,
          positions: oldPositions.texture,
          delta,
        },
        renderer: gl,
        output: newPositions,
      });
      rotationSimulation({
        inputs: {
          rotations: oldRotations.texture,
          spins: spins.texture,
          delta,
        },
        renderer: gl,
        output: newRotations,
      });
    },
    output: {
      positions: newPositions,
      rotations: newRotations,
    },
  };
}
