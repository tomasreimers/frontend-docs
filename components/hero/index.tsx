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
import { GPUData } from './webgl/gpgpu/data';
import { Edge } from './webgl/gpgpu/edge';
import { initRandom } from './webgl/initializers/random';
import { initRandomRotation } from './webgl/initializers/random_rotation';
import { PassThruShaderMaterial } from './webgl/shaders/passthru';
import { ParticlePositionSimulationMaterial } from './webgl/shaders/positions';
import { ParticleRenderMaterial } from './webgl/shaders/render';
import { ParticleRotationSimulationMaterial } from './webgl/shaders/rotations';

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
  useFrame(({ gl, scene, camera }) => {
    particles.update(gl);

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
        positions={particles.output.positions.data.texture}
        rotations={particles.output.rotations.data.texture}
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

  const newPositions = new GPUData({
    width,
    height,
    init: {
      renderer,
      dataGen: initRandom(-100, 100),
    },
  });
  const velocity = new GPUData({
    width,
    height,
    init: {
      renderer,
      dataGen: initRandom(-0.02, 0.02),
    },
  });
  const newRotations = new GPUData({
    width,
    height,
    init: {
      renderer,
      dataGen: initRandomRotation(0, 2),
    },
  });
  const spins = new GPUData({
    width,
    height,
    init: {
      renderer,
      dataGen: initRandomRotation(-0.02, 0.02),
    },
  });

  const oldPositions = new GPUData({
    width,
    height,
  });

  const oldRotations = new GPUData({
    width,
    height,
  });

  const positionSimulation = new Edge({
    material: new ParticlePositionSimulationMaterial({
      precision: 'highp',
      uniforms: {
        velocity: { value: velocity.data.texture },
        positions: { value: oldPositions.data.texture },
      },
    }),
  });

  const rotationSimulation = new Edge({
    material: new ParticleRotationSimulationMaterial({
      precision: 'highp',
      uniforms: {
        rotations: { value: oldRotations.data.texture },
        spins: { value: spins.data.texture },
      },
    }),
  });

  const positionLoopback = new Edge({
    material: new PassThruShaderMaterial({
      uniforms: {
        srcdata: { value: newPositions.data.texture },
      },
    }),
  });
  const rotationLoopback = new Edge({
    material: new PassThruShaderMaterial({
      uniforms: {
        srcdata: { value: newRotations.data.texture },
      },
    }),
  });

  return {
    // necessary
    total: height * width,
    indicies,
    update: (gl: THREE.WebGLRenderer) => {
      // Positions
      positionLoopback.run(gl, oldPositions.data);
      positionSimulation.run(gl, newPositions.data);

      // Rotations
      rotationLoopback.run(gl, oldRotations.data);
      rotationSimulation.run(gl, newRotations.data);
    },
    output: {
      positions: newPositions,
      rotations: oldRotations,
    },
  };
}
