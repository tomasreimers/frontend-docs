import { shaderMaterial } from '@react-three/drei';

export const PassThruShaderMaterial = shaderMaterial(
  {
    srcdata: null,
  },
  `varying vec2 vUv;

void main() {
    vUv = vec2(uv.x, uv.y);
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  `precision highp float;
  precision highp sampler2D;
  
  varying vec2 vUv;
  uniform sampler2D srcdata;

void main() {
    gl_FragColor = texture2D( srcdata, vUv );
}`
);
