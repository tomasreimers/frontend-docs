import type * as THREE from 'three';

import { fragmentShaderFunction } from './fragment_shader_fn';

export const updateVelocityFn = fragmentShaderFunction<{
  positions: THREE.Texture;
  velocity: THREE.Texture;
  delta: number;
  rayOrigin: THREE.Vector3;
  rayDirection: THREE.Vector3;
  applyGravity: boolean;
}>(
  {
    positions: null,
    velocity: null,
    delta: null,
    rayOrigin: null,
    rayDirection: null,
    applyGravity: null,
  },
  `precision highp float;
precision highp sampler2D;

varying vec2 vUv;
uniform sampler2D velocity;
uniform sampler2D positions;
uniform float delta;
uniform vec3 rayOrigin;
uniform vec3 rayDirection;
uniform bool applyGravity;

void main() {
  vec3 offset = texture2D( positions, vUv ).xyz;
  vec3 vel = texture2D( velocity, vUv ).xyz;

  if (!applyGravity) {
    gl_FragColor = vec4(vel, 0.);
  } else {
    vec3 positionRelativeToOrigin = offset - rayOrigin;
    vec3 distanceAlongRay = rayDirection * dot(rayDirection, positionRelativeToOrigin);
    vec3 closestPointOnRay = rayOrigin + distanceAlongRay;
    vec3 distanceFromRay = closestPointOnRay - offset;
    float distanceToMouse = sqrt(dot(distanceFromRay, distanceFromRay));

    gl_FragColor = vec4(mix(vel, (rayDirection * 16. + rayOrigin - offset) * 100. * delta, max(0., min(1., 4. - distanceToMouse))), 1.);
  }
}
`
);
