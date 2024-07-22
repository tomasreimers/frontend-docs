import { OrbitControls } from '@react-three/drei';
import {
  type Node as ThreeNode,
  Canvas,
  extend,
  useFrame,
  useThree,
} from '@react-three/fiber';
import { useState } from 'react';
import type * as THREE from 'three';

import s from './Hero.module.scss';
import { createGPUData } from './webgl/gpgpu/data';
import { initRandom } from './webgl/initializers/random';
import { initRandomRotation } from './webgl/initializers/random_rotation';
import { passThruFn } from './webgl/shaders/passthru';
import { updatePositionsFn } from './webgl/shaders/positions';
import { ParticleRenderMaterial } from './webgl/shaders/render';
import { updateRotationsFn } from './webgl/shaders/rotations';
import { createAndInitializeGPUData } from './webgl/utils/create_and_initialize_gpu_data';

extend({
  ParticleRenderMaterial,
});

declare module '@react-three/fiber' {
  interface ThreeElements {
    particleRenderMaterial: ThreeNode<
      {
        positions: THREE.Texture;
        rotations: THREE.Texture;
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

  // TODO: We should take into account the delta in time and move it by that much
  useFrame(({ gl, scene, camera }, delta) => {
    particles.update(gl, delta);

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
        positions={particles.output.positions.texture}
        rotations={particles.output.rotations.texture}
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
  const velocity = createAndInitializeGPUData({
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

  const oldPositions = createGPUData({
    width,
    height,
  });

  const oldRotations = createGPUData({
    width,
    height,
  });

  const positionSimulation = updatePositionsFn();
  const rotationSimulation = updateRotationsFn();
  const loopback = passThruFn();

  return {
    // necessary
    total: height * width,
    indicies,
    update: (gl: THREE.WebGLRenderer, delta: number) => {
      // Positions
      loopback({
        inputs: { srcdata: newPositions.texture },
        renderer: gl,
        output: oldPositions,
      });
      positionSimulation({
        inputs: {
          velocity: velocity.texture,
          positions: oldPositions.texture,
          delta,
        },
        renderer: gl,
        output: newPositions,
      });

      // Rotations
      loopback({
        inputs: { srcdata: newRotations.texture },
        renderer: gl,
        output: oldRotations,
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
      rotations: oldRotations,
    },
  };
}
