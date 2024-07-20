import { shaderMaterial } from '@react-three/drei';
import { type Node, Canvas, extend, useFrame } from '@react-three/fiber';
import { useState } from 'react';
import * as THREE from 'three';

import s from './Hero.module.scss';

const ParticlePositionSimulationMaterial = shaderMaterial(
  {
    positions: null,
    velocity: null,
  },
  `varying vec2 vUv;

void main() {
    vUv = vec2(uv.x, uv.y);
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  // For reasons I do not understand, if you swap velocity and positions,
  // velocity seems to be a very high number (even when init'd to zero),
  // I wonder if positions is somehow overflowing when we copy texture...
  `precision highp float;
  precision highp sampler2D;
  
  varying vec2 vUv;
  uniform sampler2D velocity;
  uniform sampler2D positions;

void main() {
    vec4 vel = texture2D( velocity, vUv ).rgba;
    vec4 pos = texture2D( positions, vUv ).rgba;
    gl_FragColor = vec4(pos.r + vel.r, pos.g + vel.g, pos.b + vel.b, pos.a + vel.a);
}
`
);

const ParticleRotationSimulationMaterial = shaderMaterial(
  {
    spins: null,
    rotations: null,
  },
  `varying vec2 vUv;

void main() {
    vUv = vec2(uv.x, uv.y);
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  // Same as above, rotations above spins creates an issue... still don't know why
  `precision highp float;
  precision highp sampler2D;

  varying vec2 vUv;
  uniform sampler2D spins;
  uniform sampler2D rotations;
  
vec4 qmul(vec4 q1, vec4 q2) {
	return vec4(
		q2.xyz * q1.w + q1.xyz * q2.w + cross(q1.xyz, q2.xyz),
		q1.w * q2.w - dot(q1.xyz, q2.xyz)
	);
}

void main() {
    vec4 rot = texture2D( rotations, vUv );
    vec4 sp = texture2D( spins, vUv );
    // TODO
    // gl_FragColor = qmul(sp, rot);
    gl_FragColor = rot;
}
`
);

const ParticleRenderMaterial = shaderMaterial(
  {
    positions: null,
    rotations: null,
  },
  `attribute vec2 pindex;
uniform sampler2D positions;
uniform sampler2D rotations;

vec3 quat_transform( vec4 q, vec3 v )
{
    return v + 2.*cross( q.xyz, cross( q.xyz, v ) + q.w*v ); 
}

void main() {
    vec3 offset = texture2D( positions, pindex.xy ).xyz;
    vec4 rotation = texture2D( rotations, pindex.xy ).xyzw;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( quat_transform(rotation, position) + offset, 1.0 );
}`,
  `void main(){
    gl_FragColor = vec4( vec3( 1. ), .25 );
}`
);
extend({
  ParticlePositionSimulationMaterial,
  ParticleRotationSimulationMaterial,
  ParticleRenderMaterial,
});

declare module '@react-three/fiber' {
  interface ThreeElements {
    particlePositionSimulationMaterial: Node<
      typeof ParticlePositionSimulationMaterial,
      typeof ParticlePositionSimulationMaterial
    >;
    particleRotationSimulationMaterial: Node<
      typeof ParticleRotationSimulationMaterial,
      typeof ParticleRotationSimulationMaterial
    >;
    particleRenderMaterial: Node<
      typeof ParticleRenderMaterial,
      typeof ParticleRenderMaterial
    >;
  }
}

export function Hero() {
  return (
    <div className={s.canvasHolder}>
      <Canvas camera={{ position: [0, 0, 128] }}>
        <ambientLight intensity={0.01} />
        <directionalLight position={[0, 0, 128]} intensity={2} />
        <Particles />
      </Canvas>
    </div>
  );
}

function Particles() {
  const [particles] = useState(() => initParticles());

  // TODO: We should take into account the delta in time and move it by that much
  useFrame(({ gl, scene, camera }) => {
    const originalRenderTarget = gl.getRenderTarget();

    // Simulate velocity
    gl.setRenderTarget(particles.simulations.position.target);
    gl.render(
      particles.simulations.position.scene,
      particles.simulations.position.camera
    );
    gl.copyFramebufferToTexture(
      particles.simulations.position.material.uniforms.positions.value
    );

    // Simulate spin
    gl.setRenderTarget(particles.simulations.rotation.target);
    gl.render(
      particles.simulations.rotation.scene,
      particles.simulations.rotation.camera
    );
    gl.copyFramebufferToTexture(
      particles.simulations.rotation.material.uniforms.rotations.value
    );

    // Render frame
    gl.setRenderTarget(originalRenderTarget);
    gl.render(scene, camera);
  }, 1);

  return (
    <instancedMesh args={[undefined, undefined, particles.total]}>
      <circleGeometry args={[0.1, 5]}>
        <instancedBufferAttribute
          attach="attributes-pindex"
          args={[particles.indicies, 2]}
        />
      </circleGeometry>
      <particleRenderMaterial
        positions={particles.simulations.position.target.texture}
        rotations={particles.simulations.rotation.target.texture}
      />
    </instancedMesh>
  );
}

function initParticles() {
  const width = 64;
  const height = 64;

  const l = width * height;
  const indicies = new Float32Array(l * 2);
  for (let i = 0; i < l; i++) {
    const i3 = i * 2;
    indicies[i3] = (i % width) / width;
    indicies[i3 + 1] = i / width / height;
  }

  //returns an array of random 3D coordinates
  function getRandomData(width, height) {
    let len = width * height * 4;
    const data = new Float32Array(len);
    while (len--) data[len] = (Math.random() * 2 - 1) * 128;
    return data;
  }

  function getRandomVelocity(width, height) {
    let len = width * height * 4;
    const data = new Float32Array(len);
    while (len--) data[len] = (Math.random() * 2 - 1) * 0.02;
    return data;
  }

  //then you convert it to a Data texture:
  const positionsData = getRandomData(width, height);
  const positions = new THREE.DataTexture(
    positionsData,
    width,
    height,
    THREE.RGBAFormat,
    THREE.FloatType
  );
  positions.needsUpdate = true;

  function getRandomRotationData(width, height) {
    const data = new Float32Array(width * height * 4);
    for (let i = 0; i < width * height; i++) {
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

      const idx = i * 4;
      data[idx] = x;
      data[idx + 1] = y;
      data[idx + 2] = z;
      data[idx + 3] = w;
    }
    return data;
  }

  function getRandomSpinData(width, height) {
    const data = new Float32Array(width * height * 4);
    for (let i = 0; i < width * height; i++) {
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

      const idx = i * 4;
      data[idx] = x;
      data[idx + 1] = y;
      data[idx + 2] = z;
      data[idx + 3] = w;
    }
    return data;
  }

  const rotationsData = getRandomRotationData(width, height);
  const rotations = new THREE.DataTexture(
    rotationsData,
    width,
    height,
    THREE.RGBAFormat,
    THREE.FloatType
  );
  rotations.needsUpdate = true;

  const velocityData = getRandomVelocity(width, height);
  const velocity = new THREE.DataTexture(
    velocityData,
    width,
    height,
    THREE.RGBAFormat,
    THREE.FloatType
  );
  velocity.needsUpdate = true;

  const spinData = getRandomSpinData(width, height);
  const spin = new THREE.DataTexture(
    spinData,
    width,
    height,
    THREE.RGBAFormat,
    THREE.FloatType
  );
  spin.needsUpdate = true;

  return {
    total: height * width,
    indicies,
    data: {
      positions,
      rotations,
      velocity,
      spin,
    },
    simulations: {
      position: initSimulation({
        height,
        width,
        material: new ParticlePositionSimulationMaterial({
          precision: 'highp',
          uniforms: {
            velocity: { value: velocity },
            positions: { value: positions },
          },
        }),
      }),
      rotation: initSimulation({
        height,
        width,
        material: new ParticleRotationSimulationMaterial({
          precision: 'highp',
          uniforms: {
            rotations: { value: rotations },
            spins: { value: spin },
          },
        }),
      }),
    },
  };
}

function initSimulation({
  width,
  height,
  material,
}: {
  width: number;
  height: number;
  material: THREE.ShaderMaterial;
}) {
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(
    -1,
    1,
    1,
    -1,
    1 / Math.pow(2, 53),
    1
  );

  //4 create a target texture
  const options = {
    minFilter: THREE.NearestFilter, //important as we want to sample square pixels
    magFilter: THREE.NearestFilter, //
    format: THREE.RGBAFormat,
    type: THREE.FloatType, //important as we need precise coordinates (not ints)
  };
  const target = new THREE.WebGLRenderTarget(width, height, options);

  //5 the simulation:
  //create a bi-unit quadrilateral and uses the simulation material to update the Float Texture
  const geom = new THREE.BufferGeometry();
  geom.setAttribute(
    'position',
    new THREE.BufferAttribute(
      new Float32Array([
        -1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0,
      ]),
      3
    )
  );
  geom.setAttribute(
    'uv',
    new THREE.BufferAttribute(
      new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0]),
      2
    )
  );
  scene.add(new THREE.Mesh(geom, material));

  return {
    scene,
    camera,
    target,
    material,
  };
}
