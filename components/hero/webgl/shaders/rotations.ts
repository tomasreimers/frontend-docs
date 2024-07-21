import { shaderMaterial } from '@react-three/drei';

export const ParticleRotationSimulationMaterial = shaderMaterial(
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
    gl_FragColor = qmul(sp, rot);
}
`
);
