import { shaderMaterial } from '@react-three/drei';

export const ParticleRenderMaterial = shaderMaterial(
  {
    positions: null,
    rotations: null,
    rayOrigin: null,
    rayDirection: null,
    debugDistanceToMouse: null,
  },
  `attribute vec2 pindex;
uniform sampler2D positions;
uniform sampler2D rotations;

varying float distanceToMouse;
uniform vec3 rayOrigin;
uniform vec3 rayDirection;

vec3 quat_transform( vec4 q, vec3 v )
{
    return v + 2.*cross( q.xyz, cross( q.xyz, v ) + q.w*v ); 
}

void main() {
    vec3 offset = texture2D( positions, pindex.xy ).xyz;
    vec4 rotation = texture2D( rotations, pindex.xy ).xyzw;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( quat_transform(rotation, position) + offset, 1.0 );

    vec3 positionRelativeToOrigin = offset - rayOrigin;
    vec3 distanceAlongRay = rayDirection * dot(rayDirection, positionRelativeToOrigin);
    vec3 closestPointOnRay = rayOrigin + distanceAlongRay;
    vec3 distanceFromRay = closestPointOnRay - offset;
    distanceToMouse = sqrt(dot(distanceFromRay, distanceFromRay));
}`,
  `
varying float distanceToMouse;
uniform bool debugDistanceToMouse;

void main(){
    if (debugDistanceToMouse) {
      gl_FragColor = vec4( 1., 1., distanceToMouse / 20., 1. );
    } else {
      gl_FragColor = vec4( 1., 1., 1., 1. );
    }
}`
);
