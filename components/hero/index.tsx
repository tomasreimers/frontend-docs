import { OrbitControls } from '@react-three/drei';
import {
  type Node as ThreeNode,
  Canvas,
  extend,
  useFrame,
  useThree,
} from '@react-three/fiber';
import { useRef, useState } from 'react';
import type * as THREE from 'three';

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
  return (
    <div className={s.canvasHolder}>
      <Canvas camera={{ position: [0, 0, 100] }}>
        <ambientLight intensity={0.01} />
        <directionalLight position={[0, 0, 4]} intensity={2} />
        <Particles />
        <OrbitControls target={[0, 0, 99]} />
      </Canvas>
    </div>
  );
}

function Particles() {
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
  useFrame(({ gl, scene, camera, pointer, raycaster }, delta) => {
    raycaster.setFromCamera(pointer, camera);
    if (renderMaterialRef.current) {
      renderMaterialRef.current.rayOrigin = raycaster.ray.origin;
      renderMaterialRef.current.rayDirection = raycaster.ray.direction;
    }

    particles.update({ gl, delta, ray: raycaster.ray });

    // Render frame
    gl.setRenderTarget(null);
    gl.render(scene, camera);
  }, 1);

  return (
    <instancedMesh
      args={[undefined, undefined, particles.total]}
      frustumCulled={false}
    >
      <cylinderGeometry args={[0.1, 0.1, 0.01, 5]}>
        <instancedBufferAttribute
          attach="attributes-pindex"
          args={[particles.indicies, 2]}
        />
      </cylinderGeometry>
      <particleRenderMaterial
        ref={renderMaterialRef}
        positions={particles.output.positions.texture}
        rotations={particles.output.rotations.texture}
        debugDistanceToMouse={false}
      />
    </instancedMesh>
  );
}

function initParticles(renderer: THREE.WebGLRenderer) {
  const width = 64;
  const height = 64;

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
    gen: initRandom(-100, 100),
  });
  const newVelocity = createAndInitializeGPUData({
    width,
    height,
    renderer,
    gen: initRandom(-4, 4),
  });
  const newRotations = createAndInitializeGPUData({
    width,
    height,
    renderer,
    gen: initRandomRotation(-1, 1),
  });
  const spins = createAndInitializeGPUData({
    width,
    height,
    renderer,
    gen: initRandom(-2, 2),
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
    update: ({
      gl,
      delta,
      ray,
    }: {
      gl: THREE.WebGLRenderer;
      delta: number;
      ray: THREE.Ray;
    }) => {
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
          rayOrigin: ray.origin,
          rayDirection: ray.direction,
          delta,
          applyGravity: false,
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
