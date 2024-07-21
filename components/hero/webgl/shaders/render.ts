import { shaderMaterial } from '@react-three/drei';

export const ParticleRenderMaterial = shaderMaterial(
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
    gl_FragColor = vec4( vec3( 1. ), 1. );
}`
);
