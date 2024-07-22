import * as THREE from 'three';

export class Edge {
  private scene: THREE.Scene;
  private camera: THREE.Camera;

  constructor({ material }: { material: THREE.ShaderMaterial }) {
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
      -1,
      1,
      1,
      -1,
      1 / Math.pow(2, 53),
      1
    );

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

    this.scene = scene;
    this.camera = camera;

    this.run = this.run.bind(this);
  }

  public run(
    renderer: THREE.WebGLRenderer,
    target: THREE.WebGLRenderTarget | null
  ) {
    renderer.setRenderTarget(target);
    renderer.render(this.scene, this.camera);
  }
}
