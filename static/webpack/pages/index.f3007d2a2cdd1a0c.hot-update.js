"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/hero/index.tsx":
/*!***********************************!*\
  !*** ./components/hero/index.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Hero: function() { return /* binding */ Hero; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/core/OrbitControls.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/index-99983b2d.esm.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Hero_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Hero.module.scss */ \"./components/hero/Hero.module.scss\");\n/* harmony import */ var _Hero_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_Hero_module_scss__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _webgl_gpgpu_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webgl/gpgpu/data */ \"./components/hero/webgl/gpgpu/data.ts\");\n/* harmony import */ var _webgl_initializers_random__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./webgl/initializers/random */ \"./components/hero/webgl/initializers/random.ts\");\n/* harmony import */ var _webgl_initializers_random_rotation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./webgl/initializers/random_rotation */ \"./components/hero/webgl/initializers/random_rotation.ts\");\n/* harmony import */ var _webgl_shaders_passthru__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./webgl/shaders/passthru */ \"./components/hero/webgl/shaders/passthru.ts\");\n/* harmony import */ var _webgl_shaders_positions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./webgl/shaders/positions */ \"./components/hero/webgl/shaders/positions.ts\");\n/* harmony import */ var _webgl_shaders_render__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./webgl/shaders/render */ \"./components/hero/webgl/shaders/render.ts\");\n/* harmony import */ var _webgl_shaders_rotations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./webgl/shaders/rotations */ \"./components/hero/webgl/shaders/rotations.ts\");\n/* harmony import */ var _webgl_utils_create_and_initialize_gpu_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./webgl/utils/create_and_initialize_gpu_data */ \"./components/hero/webgl/utils/create_and_initialize_gpu_data.ts\");\n/* harmony import */ var _webgl_utils_gen_data_texture__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./webgl/utils/gen_data_texture */ \"./components/hero/webgl/utils/gen_data_texture.ts\");\n/* harmony import */ var _webgl_utils_write_texture__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./webgl/utils/write_texture */ \"./components/hero/webgl/utils/write_texture.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_12__.e)({\n    ParticleRenderMaterial: _webgl_shaders_render__WEBPACK_IMPORTED_MODULE_7__.ParticleRenderMaterial\n});\nfunction Hero() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Hero_module_scss__WEBPACK_IMPORTED_MODULE_13___default().canvasHolder),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_14__.Canvas, {\n            camera: {\n                position: [\n                    0,\n                    0,\n                    100\n                ]\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ambientLight\", {\n                    intensity: 0.01\n                }, void 0, false, {\n                    fileName: \"/Users/tomasreimers/Desktop/clientside/components/hero/index.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"directionalLight\", {\n                    position: [\n                        0,\n                        0,\n                        4\n                    ],\n                    intensity: 2\n                }, void 0, false, {\n                    fileName: \"/Users/tomasreimers/Desktop/clientside/components/hero/index.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Particles, {}, void 0, false, {\n                    fileName: \"/Users/tomasreimers/Desktop/clientside/components/hero/index.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_15__.OrbitControls, {\n                    target: [\n                        0,\n                        0,\n                        99\n                    ]\n                }, void 0, false, {\n                    fileName: \"/Users/tomasreimers/Desktop/clientside/components/hero/index.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/tomasreimers/Desktop/clientside/components/hero/index.tsx\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/tomasreimers/Desktop/clientside/components/hero/index.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_c = Hero;\nfunction Particles() {\n    _s();\n    const gl = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_12__.A)((state)=>state.gl);\n    const [particles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>initParticles(gl));\n    // TODO: We should take into account the delta in time and move it by that much\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_12__.C)((param)=>{\n        let { gl, scene, camera } = param;\n        particles.update(gl);\n        // Render frame\n        gl.setRenderTarget(null);\n        gl.render(scene, camera);\n    }, 1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"instancedMesh\", {\n        args: [\n            undefined,\n            undefined,\n            particles.total\n        ],\n        frustumCulled: false,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"cylinderGeometry\", {\n                args: [\n                    0.1,\n                    0.1,\n                    0.01,\n                    5\n                ],\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"instancedBufferAttribute\", {\n                    attach: \"attributes-pindex\",\n                    args: [\n                        particles.indicies,\n                        2\n                    ]\n                }, void 0, false, {\n                    fileName: \"/Users/tomasreimers/Desktop/clientside/components/hero/index.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tomasreimers/Desktop/clientside/components/hero/index.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"particleRenderMaterial\", {\n                positions: particles.output.positions.data.texture,\n                rotations: particles.output.rotations.data.texture\n            }, void 0, false, {\n                fileName: \"/Users/tomasreimers/Desktop/clientside/components/hero/index.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tomasreimers/Desktop/clientside/components/hero/index.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n}\n_s(Particles, \"p89kA7OhQgxynDa6BSVB/MNDy9s=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_12__.A,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_12__.C\n    ];\n});\n_c1 = Particles;\nfunction initParticles(renderer) {\n    const width = 64;\n    const height = 64;\n    const l = width * height;\n    const indicies = new Float32Array(l * 2);\n    for(let i = 0; i < l; i++){\n        const i3 = i * 2;\n        indicies[i3] = i % width / width;\n        indicies[i3 + 1] = i / width / height;\n    }\n    const newPositions = (0,_webgl_utils_create_and_initialize_gpu_data__WEBPACK_IMPORTED_MODULE_9__.createAndInitializeGPUData)({\n        width,\n        height,\n        renderer,\n        gen: (0,_webgl_utils_gen_data_texture__WEBPACK_IMPORTED_MODULE_10__.genDataTexture)({\n            width,\n            height,\n            gen: (0,_webgl_initializers_random__WEBPACK_IMPORTED_MODULE_3__.initRandom)(-100, 100)\n        })\n    });\n    const velocity = (0,_webgl_utils_create_and_initialize_gpu_data__WEBPACK_IMPORTED_MODULE_9__.createAndInitializeGPUData)({\n        width,\n        height,\n        renderer,\n        gen: (0,_webgl_utils_gen_data_texture__WEBPACK_IMPORTED_MODULE_10__.genDataTexture)({\n            width,\n            height,\n            gen: (0,_webgl_initializers_random__WEBPACK_IMPORTED_MODULE_3__.initRandom)(-0.02, 0.02)\n        })\n    });\n    const newRotations = (0,_webgl_utils_create_and_initialize_gpu_data__WEBPACK_IMPORTED_MODULE_9__.createAndInitializeGPUData)({\n        width,\n        height,\n        renderer,\n        gen: (0,_webgl_utils_gen_data_texture__WEBPACK_IMPORTED_MODULE_10__.genDataTexture)({\n            width,\n            height,\n            gen: (0,_webgl_initializers_random_rotation__WEBPACK_IMPORTED_MODULE_4__.initRandomRotation)(0, 2)\n        })\n    });\n    const spins = (0,_webgl_utils_create_and_initialize_gpu_data__WEBPACK_IMPORTED_MODULE_9__.createAndInitializeGPUData)({\n        width,\n        height,\n        init: (0,_webgl_utils_write_texture__WEBPACK_IMPORTED_MODULE_11__.writeTexture)(renderer, (0,_webgl_utils_gen_data_texture__WEBPACK_IMPORTED_MODULE_10__.genDataTexture)({\n            width,\n            height,\n            gen: (0,_webgl_initializers_random_rotation__WEBPACK_IMPORTED_MODULE_4__.initRandomRotation)(-0.02, 0.02)\n        }))\n    });\n    const oldPositions = new _webgl_gpgpu_data__WEBPACK_IMPORTED_MODULE_2__.GPUData({\n        width,\n        height\n    });\n    const oldRotations = new _webgl_gpgpu_data__WEBPACK_IMPORTED_MODULE_2__.GPUData({\n        width,\n        height\n    });\n    const positionSimulation = (0,_webgl_shaders_positions__WEBPACK_IMPORTED_MODULE_6__.updatePositionsFn)();\n    const rotationSimulation = (0,_webgl_shaders_rotations__WEBPACK_IMPORTED_MODULE_8__.updateRotationsFn)();\n    const loopback = (0,_webgl_shaders_passthru__WEBPACK_IMPORTED_MODULE_5__.passThruFn)();\n    return {\n        // necessary\n        total: height * width,\n        indicies,\n        update: (gl)=>{\n            // Positions\n            loopback({\n                inputs: {\n                    srcdata: newPositions.data.texture\n                },\n                renderer: gl,\n                output: oldPositions.data\n            });\n            positionSimulation({\n                inputs: {\n                    velocity: velocity.data.texture,\n                    positions: oldPositions.data.texture\n                },\n                renderer: gl,\n                output: newPositions.data\n            });\n            // Rotations\n            loopback({\n                inputs: {\n                    srcdata: newRotations.data.texture\n                },\n                renderer: gl,\n                output: oldRotations.data\n            });\n            rotationSimulation({\n                inputs: {\n                    rotations: oldRotations.data.texture,\n                    spins: spins.data.texture\n                },\n                renderer: gl,\n                output: newRotations.data\n            });\n        },\n        output: {\n            positions: newPositions,\n            rotations: oldRotations\n        }\n    };\n}\nvar _c, _c1;\n$RefreshReg$(_c, \"Hero\");\n$RefreshReg$(_c1, \"Particles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UWtCLGFBQWFqQixJQUFJO1lBQzNCO1lBQ0FtQixtQkFBbUI7Z0JBQ2pCRSxRQUFRO29CQUNObkIsV0FBV2UsYUFBYWpCLElBQUksQ0FBQ0MsT0FBTztvQkFDcENhLE9BQU9BLE1BQU1kLElBQUksQ0FBQ0MsT0FBTztnQkFDM0I7Z0JBQ0FFLFVBQVV2QjtnQkFDVm1CLFFBQVFjLGFBQWFiLElBQUk7WUFDM0I7UUFDRjtRQUNBRCxRQUFRO1lBQ05ELFdBQVdZO1lBQ1hSLFdBQVdlO1FBQ2I7SUFDRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVyby9pbmRleC50c3g/M2IxMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSAnQHJlYWN0LXRocmVlL2RyZWknO1xuaW1wb3J0IHtcbiAgdHlwZSBOb2RlIGFzIFRocmVlTm9kZSxcbiAgQ2FudmFzLFxuICBleHRlbmQsXG4gIHVzZUZyYW1lLFxuICB1c2VUaHJlZSxcbn0gZnJvbSAnQHJlYWN0LXRocmVlL2ZpYmVyJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbmltcG9ydCBzIGZyb20gJy4vSGVyby5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBHUFVEYXRhIH0gZnJvbSAnLi93ZWJnbC9ncGdwdS9kYXRhJztcbmltcG9ydCB7IGluaXRSYW5kb20gfSBmcm9tICcuL3dlYmdsL2luaXRpYWxpemVycy9yYW5kb20nO1xuaW1wb3J0IHsgaW5pdFJhbmRvbVJvdGF0aW9uIH0gZnJvbSAnLi93ZWJnbC9pbml0aWFsaXplcnMvcmFuZG9tX3JvdGF0aW9uJztcbmltcG9ydCB7IHBhc3NUaHJ1Rm4gfSBmcm9tICcuL3dlYmdsL3NoYWRlcnMvcGFzc3RocnUnO1xuaW1wb3J0IHsgdXBkYXRlUG9zaXRpb25zRm4gfSBmcm9tICcuL3dlYmdsL3NoYWRlcnMvcG9zaXRpb25zJztcbmltcG9ydCB7IFBhcnRpY2xlUmVuZGVyTWF0ZXJpYWwgfSBmcm9tICcuL3dlYmdsL3NoYWRlcnMvcmVuZGVyJztcbmltcG9ydCB7IHVwZGF0ZVJvdGF0aW9uc0ZuIH0gZnJvbSAnLi93ZWJnbC9zaGFkZXJzL3JvdGF0aW9ucyc7XG5pbXBvcnQgeyBjcmVhdGVBbmRJbml0aWFsaXplR1BVRGF0YSB9IGZyb20gJy4vd2ViZ2wvdXRpbHMvY3JlYXRlX2FuZF9pbml0aWFsaXplX2dwdV9kYXRhJztcbmltcG9ydCB7IGdlbkRhdGFUZXh0dXJlIH0gZnJvbSAnLi93ZWJnbC91dGlscy9nZW5fZGF0YV90ZXh0dXJlJztcbmltcG9ydCB7IHdyaXRlVGV4dHVyZSB9IGZyb20gJy4vd2ViZ2wvdXRpbHMvd3JpdGVfdGV4dHVyZSc7XG5cbmV4dGVuZCh7XG4gIFBhcnRpY2xlUmVuZGVyTWF0ZXJpYWwsXG59KTtcblxuZGVjbGFyZSBtb2R1bGUgJ0ByZWFjdC10aHJlZS9maWJlcicge1xuICBpbnRlcmZhY2UgVGhyZWVFbGVtZW50cyB7XG4gICAgcGFydGljbGVSZW5kZXJNYXRlcmlhbDogVGhyZWVOb2RlPFxuICAgICAge1xuICAgICAgICBwb3NpdGlvbnM6IFRIUkVFLlRleHR1cmU7XG4gICAgICAgIHJvdGF0aW9uczogVEhSRUUuVGV4dHVyZTtcbiAgICAgIH0sXG4gICAgICB0eXBlb2YgUGFydGljbGVSZW5kZXJNYXRlcmlhbFxuICAgID47XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEhlcm8oKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3MuY2FudmFzSG9sZGVyfT5cbiAgICAgIDxDYW52YXMgY2FtZXJhPXt7IHBvc2l0aW9uOiBbMCwgMCwgMTAwXSB9fT5cbiAgICAgICAgPGFtYmllbnRMaWdodCBpbnRlbnNpdHk9ezAuMDF9IC8+XG4gICAgICAgIDxkaXJlY3Rpb25hbExpZ2h0IHBvc2l0aW9uPXtbMCwgMCwgNF19IGludGVuc2l0eT17Mn0gLz5cbiAgICAgICAgPFBhcnRpY2xlcyAvPlxuICAgICAgICA8T3JiaXRDb250cm9scyB0YXJnZXQ9e1swLCAwLCA5OV19IC8+XG4gICAgICA8L0NhbnZhcz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gUGFydGljbGVzKCkge1xuICBjb25zdCBnbCA9IHVzZVRocmVlKChzdGF0ZSkgPT4gc3RhdGUuZ2wpO1xuICBjb25zdCBbcGFydGljbGVzXSA9IHVzZVN0YXRlKCgpID0+IGluaXRQYXJ0aWNsZXMoZ2wpKTtcblxuICAvLyBUT0RPOiBXZSBzaG91bGQgdGFrZSBpbnRvIGFjY291bnQgdGhlIGRlbHRhIGluIHRpbWUgYW5kIG1vdmUgaXQgYnkgdGhhdCBtdWNoXG4gIHVzZUZyYW1lKCh7IGdsLCBzY2VuZSwgY2FtZXJhIH0pID0+IHtcbiAgICBwYXJ0aWNsZXMudXBkYXRlKGdsKTtcblxuICAgIC8vIFJlbmRlciBmcmFtZVxuICAgIGdsLnNldFJlbmRlclRhcmdldChudWxsKTtcbiAgICBnbC5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG4gIH0sIDEpO1xuXG4gIHJldHVybiAoXG4gICAgPGluc3RhbmNlZE1lc2hcbiAgICAgIGFyZ3M9e1t1bmRlZmluZWQsIHVuZGVmaW5lZCwgcGFydGljbGVzLnRvdGFsXX1cbiAgICAgIGZydXN0dW1DdWxsZWQ9e2ZhbHNlfVxuICAgID5cbiAgICAgIDxjeWxpbmRlckdlb21ldHJ5IGFyZ3M9e1swLjEsIDAuMSwgMC4wMSwgNV19PlxuICAgICAgICA8aW5zdGFuY2VkQnVmZmVyQXR0cmlidXRlXG4gICAgICAgICAgYXR0YWNoPVwiYXR0cmlidXRlcy1waW5kZXhcIlxuICAgICAgICAgIGFyZ3M9e1twYXJ0aWNsZXMuaW5kaWNpZXMsIDJdfVxuICAgICAgICAvPlxuICAgICAgPC9jeWxpbmRlckdlb21ldHJ5PlxuICAgICAgPHBhcnRpY2xlUmVuZGVyTWF0ZXJpYWxcbiAgICAgICAgcG9zaXRpb25zPXtwYXJ0aWNsZXMub3V0cHV0LnBvc2l0aW9ucy5kYXRhLnRleHR1cmV9XG4gICAgICAgIHJvdGF0aW9ucz17cGFydGljbGVzLm91dHB1dC5yb3RhdGlvbnMuZGF0YS50ZXh0dXJlfVxuICAgICAgLz5cbiAgICA8L2luc3RhbmNlZE1lc2g+XG4gICk7XG59XG5cbmZ1bmN0aW9uIGluaXRQYXJ0aWNsZXMocmVuZGVyZXI6IFRIUkVFLldlYkdMUmVuZGVyZXIpIHtcbiAgY29uc3Qgd2lkdGggPSA2NDtcbiAgY29uc3QgaGVpZ2h0ID0gNjQ7XG5cbiAgY29uc3QgbCA9IHdpZHRoICogaGVpZ2h0O1xuICBjb25zdCBpbmRpY2llcyA9IG5ldyBGbG9hdDMyQXJyYXkobCAqIDIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgIGNvbnN0IGkzID0gaSAqIDI7XG4gICAgaW5kaWNpZXNbaTNdID0gKGkgJSB3aWR0aCkgLyB3aWR0aDtcbiAgICBpbmRpY2llc1tpMyArIDFdID0gaSAvIHdpZHRoIC8gaGVpZ2h0O1xuICB9XG5cbiAgY29uc3QgbmV3UG9zaXRpb25zID0gY3JlYXRlQW5kSW5pdGlhbGl6ZUdQVURhdGEoe1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICByZW5kZXJlcixcbiAgICBnZW46IGdlbkRhdGFUZXh0dXJlKHsgd2lkdGgsIGhlaWdodCwgZ2VuOiBpbml0UmFuZG9tKC0xMDAsIDEwMCkgfSksXG4gIH0pO1xuICBjb25zdCB2ZWxvY2l0eSA9IGNyZWF0ZUFuZEluaXRpYWxpemVHUFVEYXRhKHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG5cbiAgICByZW5kZXJlcixcbiAgICBnZW46IGdlbkRhdGFUZXh0dXJlKHsgd2lkdGgsIGhlaWdodCwgZ2VuOiBpbml0UmFuZG9tKC0wLjAyLCAwLjAyKSB9KSxcbiAgfSk7XG4gIGNvbnN0IG5ld1JvdGF0aW9ucyA9IGNyZWF0ZUFuZEluaXRpYWxpemVHUFVEYXRhKHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG5cbiAgICByZW5kZXJlcixcbiAgICBnZW46IGdlbkRhdGFUZXh0dXJlKHsgd2lkdGgsIGhlaWdodCwgZ2VuOiBpbml0UmFuZG9tUm90YXRpb24oMCwgMikgfSksXG4gIH0pO1xuICBjb25zdCBzcGlucyA9IGNyZWF0ZUFuZEluaXRpYWxpemVHUFVEYXRhKHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgaW5pdDogd3JpdGVUZXh0dXJlKFxuICAgICAgcmVuZGVyZXIsXG4gICAgICBnZW5EYXRhVGV4dHVyZSh7IHdpZHRoLCBoZWlnaHQsIGdlbjogaW5pdFJhbmRvbVJvdGF0aW9uKC0wLjAyLCAwLjAyKSB9KVxuICAgICksXG4gIH0pO1xuXG4gIGNvbnN0IG9sZFBvc2l0aW9ucyA9IG5ldyBHUFVEYXRhKHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gIH0pO1xuXG4gIGNvbnN0IG9sZFJvdGF0aW9ucyA9IG5ldyBHUFVEYXRhKHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gIH0pO1xuXG4gIGNvbnN0IHBvc2l0aW9uU2ltdWxhdGlvbiA9IHVwZGF0ZVBvc2l0aW9uc0ZuKCk7XG4gIGNvbnN0IHJvdGF0aW9uU2ltdWxhdGlvbiA9IHVwZGF0ZVJvdGF0aW9uc0ZuKCk7XG4gIGNvbnN0IGxvb3BiYWNrID0gcGFzc1RocnVGbigpO1xuXG4gIHJldHVybiB7XG4gICAgLy8gbmVjZXNzYXJ5XG4gICAgdG90YWw6IGhlaWdodCAqIHdpZHRoLFxuICAgIGluZGljaWVzLFxuICAgIHVwZGF0ZTogKGdsOiBUSFJFRS5XZWJHTFJlbmRlcmVyKSA9PiB7XG4gICAgICAvLyBQb3NpdGlvbnNcbiAgICAgIGxvb3BiYWNrKHtcbiAgICAgICAgaW5wdXRzOiB7IHNyY2RhdGE6IG5ld1Bvc2l0aW9ucy5kYXRhLnRleHR1cmUgfSxcbiAgICAgICAgcmVuZGVyZXI6IGdsLFxuICAgICAgICBvdXRwdXQ6IG9sZFBvc2l0aW9ucy5kYXRhLFxuICAgICAgfSk7XG4gICAgICBwb3NpdGlvblNpbXVsYXRpb24oe1xuICAgICAgICBpbnB1dHM6IHtcbiAgICAgICAgICB2ZWxvY2l0eTogdmVsb2NpdHkuZGF0YS50ZXh0dXJlLFxuICAgICAgICAgIHBvc2l0aW9uczogb2xkUG9zaXRpb25zLmRhdGEudGV4dHVyZSxcbiAgICAgICAgfSxcbiAgICAgICAgcmVuZGVyZXI6IGdsLFxuICAgICAgICBvdXRwdXQ6IG5ld1Bvc2l0aW9ucy5kYXRhLFxuICAgICAgfSk7XG5cbiAgICAgIC8vIFJvdGF0aW9uc1xuICAgICAgbG9vcGJhY2soe1xuICAgICAgICBpbnB1dHM6IHsgc3JjZGF0YTogbmV3Um90YXRpb25zLmRhdGEudGV4dHVyZSB9LFxuICAgICAgICByZW5kZXJlcjogZ2wsXG4gICAgICAgIG91dHB1dDogb2xkUm90YXRpb25zLmRhdGEsXG4gICAgICB9KTtcbiAgICAgIHJvdGF0aW9uU2ltdWxhdGlvbih7XG4gICAgICAgIGlucHV0czoge1xuICAgICAgICAgIHJvdGF0aW9uczogb2xkUm90YXRpb25zLmRhdGEudGV4dHVyZSxcbiAgICAgICAgICBzcGluczogc3BpbnMuZGF0YS50ZXh0dXJlLFxuICAgICAgICB9LFxuICAgICAgICByZW5kZXJlcjogZ2wsXG4gICAgICAgIG91dHB1dDogbmV3Um90YXRpb25zLmRhdGEsXG4gICAgICB9KTtcbiAgICB9LFxuICAgIG91dHB1dDoge1xuICAgICAgcG9zaXRpb25zOiBuZXdQb3NpdGlvbnMsXG4gICAgICByb3RhdGlvbnM6IG9sZFJvdGF0aW9ucyxcbiAgICB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbIk9yYml0Q29udHJvbHMiLCJDYW52YXMiLCJleHRlbmQiLCJ1c2VGcmFtZSIsInVzZVRocmVlIiwidXNlU3RhdGUiLCJzIiwiR1BVRGF0YSIsImluaXRSYW5kb20iLCJpbml0UmFuZG9tUm90YXRpb24iLCJwYXNzVGhydUZuIiwidXBkYXRlUG9zaXRpb25zRm4iLCJQYXJ0aWNsZVJlbmRlck1hdGVyaWFsIiwidXBkYXRlUm90YXRpb25zRm4iLCJjcmVhdGVBbmRJbml0aWFsaXplR1BVRGF0YSIsImdlbkRhdGFUZXh0dXJlIiwid3JpdGVUZXh0dXJlIiwiSGVybyIsImRpdiIsImNsYXNzTmFtZSIsImNhbnZhc0hvbGRlciIsImNhbWVyYSIsInBvc2l0aW9uIiwiYW1iaWVudExpZ2h0IiwiaW50ZW5zaXR5IiwiZGlyZWN0aW9uYWxMaWdodCIsIlBhcnRpY2xlcyIsInRhcmdldCIsImdsIiwic3RhdGUiLCJwYXJ0aWNsZXMiLCJpbml0UGFydGljbGVzIiwic2NlbmUiLCJ1cGRhdGUiLCJzZXRSZW5kZXJUYXJnZXQiLCJyZW5kZXIiLCJpbnN0YW5jZWRNZXNoIiwiYXJncyIsInVuZGVmaW5lZCIsInRvdGFsIiwiZnJ1c3R1bUN1bGxlZCIsImN5bGluZGVyR2VvbWV0cnkiLCJpbnN0YW5jZWRCdWZmZXJBdHRyaWJ1dGUiLCJhdHRhY2giLCJpbmRpY2llcyIsInBhcnRpY2xlUmVuZGVyTWF0ZXJpYWwiLCJwb3NpdGlvbnMiLCJvdXRwdXQiLCJkYXRhIiwidGV4dHVyZSIsInJvdGF0aW9ucyIsInJlbmRlcmVyIiwid2lkdGgiLCJoZWlnaHQiLCJsIiwiRmxvYXQzMkFycmF5IiwiaSIsImkzIiwibmV3UG9zaXRpb25zIiwiZ2VuIiwidmVsb2NpdHkiLCJuZXdSb3RhdGlvbnMiLCJzcGlucyIsImluaXQiLCJvbGRQb3NpdGlvbnMiLCJvbGRSb3RhdGlvbnMiLCJwb3NpdGlvblNpbXVsYXRpb24iLCJyb3RhdGlvblNpbXVsYXRpb24iLCJsb29wYmFjayIsImlucHV0cyIsInNyY2RhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/hero/index.tsx\n"));

/***/ }),

/***/ "./components/hero/webgl/utils/create_and_initialize_gpu_data.ts":
/*!***********************************************************************!*\
  !*** ./components/hero/webgl/utils/create_and_initialize_gpu_data.ts ***!
  \***********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAndInitializeGPUData: function() { return /* binding */ createAndInitializeGPUData; }\n/* harmony export */ });\n/* harmony import */ var _gpgpu_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gpgpu/data */ \"./components/hero/webgl/gpgpu/data.ts\");\n/* harmony import */ var _gen_data_texture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gen_data_texture */ \"./components/hero/webgl/utils/gen_data_texture.ts\");\n/* harmony import */ var _write_texture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./write_texture */ \"./components/hero/webgl/utils/write_texture.ts\");\n\n\n\nfunction createAndInitializeGPUData(param) {\n    let { width, height, renderer, gen } = param;\n    return new _gpgpu_data__WEBPACK_IMPORTED_MODULE_0__.GPUData({\n        width,\n        height,\n        init: (0,_write_texture__WEBPACK_IMPORTED_MODULE_2__.writeTexture)(renderer, (0,_gen_data_texture__WEBPACK_IMPORTED_MODULE_1__.genDataTexture)({\n            width,\n            height,\n            gen\n        }))\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlcm8vd2ViZ2wvdXRpbHMvY3JlYXRlX2FuZF9pbml0aWFsaXplX2dwdV9kYXRhLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFd0M7QUFDWTtBQUNMO0FBRXhDLFNBQVNHLDJCQUEyQixLQVUxQztRQVYwQyxFQUN6Q0MsS0FBSyxFQUNMQyxNQUFNLEVBQ05DLFFBQVEsRUFDUkMsR0FBRyxFQU1KLEdBVjBDO0lBV3pDLE9BQU8sSUFBSVAsZ0RBQU9BLENBQUM7UUFDakJJO1FBQ0FDO1FBQ0FHLE1BQU1OLDREQUFZQSxDQUFDSSxVQUFVTCxpRUFBY0EsQ0FBQztZQUFFRztZQUFPQztZQUFRRTtRQUFJO0lBQ25FO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZXJvL3dlYmdsL3V0aWxzL2NyZWF0ZV9hbmRfaW5pdGlhbGl6ZV9ncHVfZGF0YS50cz85NWRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG5pbXBvcnQgeyBHUFVEYXRhIH0gZnJvbSAnLi4vZ3BncHUvZGF0YSc7XG5pbXBvcnQgeyBnZW5EYXRhVGV4dHVyZSB9IGZyb20gJy4vZ2VuX2RhdGFfdGV4dHVyZSc7XG5pbXBvcnQgeyB3cml0ZVRleHR1cmUgfSBmcm9tICcuL3dyaXRlX3RleHR1cmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQW5kSW5pdGlhbGl6ZUdQVURhdGEoe1xuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICByZW5kZXJlcixcbiAgZ2VuLFxufToge1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgcmVuZGVyZXI6IFRIUkVFLldlYkdMUmVuZGVyZXI7XG4gIGdlbjogKGlkeDogbnVtYmVyKSA9PiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbn0pIHtcbiAgcmV0dXJuIG5ldyBHUFVEYXRhKHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgaW5pdDogd3JpdGVUZXh0dXJlKHJlbmRlcmVyLCBnZW5EYXRhVGV4dHVyZSh7IHdpZHRoLCBoZWlnaHQsIGdlbiB9KSksXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIkdQVURhdGEiLCJnZW5EYXRhVGV4dHVyZSIsIndyaXRlVGV4dHVyZSIsImNyZWF0ZUFuZEluaXRpYWxpemVHUFVEYXRhIiwid2lkdGgiLCJoZWlnaHQiLCJyZW5kZXJlciIsImdlbiIsImluaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/hero/webgl/utils/create_and_initialize_gpu_data.ts\n"));

/***/ })

});