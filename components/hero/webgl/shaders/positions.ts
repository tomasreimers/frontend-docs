import { shaderMaterial } from '@react-three/drei';

export const ParticlePositionSimulationMaterial = shaderMaterial(
  {
    positions: null,
    velocity: null,
  },
  `varying vec2 vUv;

void main() {
    vUv = vec2(uv.x, uv.y);
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
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
