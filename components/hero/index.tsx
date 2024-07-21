import {
  type Node as ThreeNode,
  Canvas,
  extend,
  useFrame,
  useThree,
} from '@react-three/fiber';
import { useState } from 'react';
import * as THREE from 'three';

import s from './Hero.module.scss';
import { Edge } from './webgl/graph/edge';
import { Node } from './webgl/graph/node';
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
      typeof ParticleRenderMaterial,
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
      </Canvas>
    </div>
  );
}

function Particles() {
  const gl = useThree((state) => state.gl);
  const [particles] = useState(() => initParticles(gl));

  // TODO: We should take into account the delta in time and move it by that much
  useFrame(({ gl, scene, camera }) => {
    particles.simulations.position.run(gl, particles.outputs.position.data);
    particles.loopbacks.position.run(gl, particles.data.positions.data);

    particles.simulations.rotation.run(gl, particles.outputs.rotations.data);
    particles.loopbacks.rotations.run(gl, particles.data.rotations.data);

    // Render frame
    gl.setRenderTarget(null);
    gl.render(scene, camera);
  }, 1);

  return (
    <instancedMesh args={[undefined, undefined, particles.total]}>
      {/* <circleGeometry args={[0.1, 5]}>
        <instancedBufferAttribute
          attach="attributes-pindex"
          args={[particles.indicies, 2]}
        />
      </circleGeometry> */}
      <cylinderGeometry args={[0.1, 0.1, 0.01, 5]}>
        <instancedBufferAttribute
          attach="attributes-pindex"
          args={[particles.indicies, 2]}
        />
      </cylinderGeometry>
      <particleRenderMaterial
        positions={particles.outputs.position.data.texture}
        rotations={particles.outputs.rotations.data.texture}
        sides={THREE.DoubleSide}
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

  const positions = new Node({
    width,
    height,
    renderer,
    init: () => {
      return [
        (Math.random() * 2 - 1) * 100,
        (Math.random() * 2 - 1) * 100,
        (Math.random() * 2 - 1) * 100,
        (Math.random() * 2 - 1) * 100,
      ];
    },
  });
  const velocity = new Node({
    width,
    height,
    renderer,
    init: () => {
      return [
        (Math.random() * 2 - 1) * 0.02,
        (Math.random() * 2 - 1) * 0.02,
        (Math.random() * 2 - 1) * 0.02,
        (Math.random() * 2 - 1) * 0.02,
      ];
    },
  });
  const rotations = new Node({
    width,
    height,
    renderer,
    init: () => {
      // https://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm
      const axisX = Math.random() * 2 - 1;
      const axisY = Math.random() * 2 - 1;
      const axisZ = Math.random() * 2 - 1;
      const axisLength = Math.sqrt(
        axisX * axisX + axisY * axisY + axisZ * axisZ
      );

      const normalizedAxisX = axisX / axisLength;
      const normalizedAxisY = axisY / axisLength;
      const normalizedAxisZ = axisZ / axisLength;

      const rotation = Math.random() * 2 * Math.PI;

      const sineOfAngle = Math.sin(rotation / 2);

      const w = Math.cos(rotation / 2);
      const x = normalizedAxisX * sineOfAngle;
      const y = normalizedAxisY * sineOfAngle;
      const z = normalizedAxisZ * sineOfAngle;

      return [x, y, z, w];
    },
  });
  const spins = new Node({
    width,
    height,
    renderer,
    init: () => {
      const axisX = Math.random() * 2 - 1;
      const axisY = Math.random() * 2 - 1;
      const axisZ = Math.random() * 2 - 1;
      const axisLength = Math.sqrt(
        axisX * axisX + axisY * axisY + axisZ * axisZ
      );

      const normalizedAxisX = axisX / axisLength;
      const normalizedAxisY = axisY / axisLength;
      const normalizedAxisZ = axisZ / axisLength;

      const rotation = (2 * Math.random() - 1) * 0.02 * Math.PI;

      const sineOfAngle = Math.sin(rotation / 2);

      const w = Math.cos(rotation / 2);
      const x = normalizedAxisX * sineOfAngle;
      const y = normalizedAxisY * sineOfAngle;
      const z = normalizedAxisZ * sineOfAngle;

      return [x, y, z, w];
    },
  });

  const positionSimulation = new Edge({
    material: new ParticlePositionSimulationMaterial({
      precision: 'highp',
      uniforms: {
        velocity: { value: velocity.data.texture },
        positions: { value: positions.data.texture },
      },
    }),
  });

  const rotationSimulation = new Edge({
    material: new ParticleRotationSimulationMaterial({
      precision: 'highp',
      uniforms: {
        rotations: { value: rotations.data.texture },
        spins: { value: spins.data.texture },
      },
    }),
  });

  const positionOutput = new Node({
    width,
    height,
    renderer,
    init: () => {
      return [0, 0, 0, 0];
    },
  });

  const rotationOutput = new Node({
    width,
    height,
    renderer,
    init: () => {
      return [0, 0, 0, 0];
    },
  });

  return {
    total: height * width,
    indicies,
    data: {
      positions,
      rotations,
      velocity,
      spins,
    },
    loopbacks: {
      position: new Edge({
        material: new PassThruShaderMaterial({
          uniforms: {
            srcdata: { value: positionOutput.data.texture },
          },
        }),
      }),
      rotations: new Edge({
        material: new PassThruShaderMaterial({
          uniforms: {
            srcdata: { value: rotationOutput.data.texture },
          },
        }),
      }),
    },
    outputs: {
      position: positionOutput,
      rotations: rotationOutput,
    },
    simulations: {
      position: positionSimulation,
      rotation: rotationSimulation,
    },
  };
}
