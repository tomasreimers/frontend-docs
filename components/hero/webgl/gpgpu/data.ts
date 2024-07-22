import * as THREE from 'three';

import { PassThruShaderMaterial } from '../shaders/passthru';
import { Edge } from './edge';

export class GPUData {
  data: THREE.WebGLRenderTarget;

  constructor({
    width,
    height,
    init,
  }: {
    width: number;
    height: number;
    init?: {
      dataGen: (idx: number) => [number, number, number, number];
      renderer: THREE.WebGLRenderer;
    };
  }) {
    const options = {
      minFilter: THREE.NearestFilter, //important as we want to sample square pixels
      magFilter: THREE.NearestFilter, //
      format: THREE.RGBAFormat,
      type: THREE.FloatType, //important as we need precise coordinates (not ints)
      generateMipMaps: false,
    };
    const target = new THREE.WebGLRenderTarget(width, height, options);
    this.data = target;

    if (init) {
      const data = new Float32Array(width * height * 4);
      for (let i = 0; i < width * height; i++) {
        const [x, y, z, w] = init.dataGen(i);

        const idx = i * 4;
        data[idx] = x;
        data[idx + 1] = y;
        data[idx + 2] = z;
        data[idx + 3] = w;
      }

      const texture = new THREE.DataTexture(
        data,
        width,
        height,
        THREE.RGBAFormat,
        THREE.FloatType
      );
      texture.needsUpdate = true;

      this.loadInitialData({ renderer: init.renderer, texture });
    }
  }

  private loadInitialData({
    renderer,
    texture,
  }: {
    renderer: THREE.WebGLRenderer;
    texture: THREE.Texture;
  }) {
    const passThroughNode = new Edge({
      material: new PassThruShaderMaterial({
        uniforms: {
          srcdata: { value: texture },
        },
      }),
    });

    passThroughNode.run(renderer, this.data);
  }
}
