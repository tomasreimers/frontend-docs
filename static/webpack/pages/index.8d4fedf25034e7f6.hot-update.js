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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Hero: function() { return /* binding */ Hero; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/core/OrbitControls.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/index-99983b2d.esm.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Hero_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Hero.module.scss */ \"./components/hero/Hero.module.scss\");\n/* harmony import */ var _Hero_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Hero_module_scss__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _webgl_gpgpu_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webgl/gpgpu/data */ \"./components/hero/webgl/gpgpu/data.ts\");\n/* harmony import */ var _webgl_initializers_random__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./webgl/initializers/random */ \"./components/hero/webgl/initializers/random.ts\");\n/* harmony import */ var _webgl_initializers_random_rotation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./webgl/initializers/random_rotation */ \"./components/hero/webgl/initializers/random_rotation.ts\");\n/* harmony import */ var _webgl_shaders_passthru__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./webgl/shaders/passthru */ \"./components/hero/webgl/shaders/passthru.ts\");\n/* harmony import */ var _webgl_shaders_positions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./webgl/shaders/positions */ \"./components/hero/webgl/shaders/positions.ts\");\n/* harmony import */ var _webgl_shaders_render__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./webgl/shaders/render */ \"./components/hero/webgl/shaders/render.ts\");\n/* harmony import */ var _webgl_shaders_rotations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./webgl/shaders/rotations */ \"./components/hero/webgl/shaders/rotations.ts\");\n/* harmony import */ var _webgl_utils_gen_data_texture__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./webgl/utils/gen_data_texture */ \"./components/hero/webgl/utils/gen_data_texture.ts\");\n/* harmony import */ var _webgl_utils_write_texture__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./webgl/utils/write_texture */ \"./components/hero/webgl/utils/write_texture.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_11__.e)({\n    ParticleRenderMaterial: _webgl_shaders_render__WEBPACK_IMPORTED_MODULE_7__.ParticleRenderMaterial\n});\nfunction Hero() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Hero_module_scss__WEBPACK_IMPORTED_MODULE_12___default().canvasHolder),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_13__.Canvas, {\n            camera: {\n                position: [\n                    0,\n                    0,\n                    100\n                ]\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ambientLight\", {\n                    intensity: 0.01\n                }, void 0, false, {\n                    fileName: \"/Users/tomasreimers/Desktop/clientside/components/hero/index.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"directionalLight\", {\n                    position: [\n                        0,\n                        0,\n                        4\n                    ],\n                    intensity: 2\n                }, void 0, false, {\n                    fileName: \"/Users/tomasreimers/Desktop/clientside/components/hero/index.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Particles, {}, void 0, false, {\n                    fileName: \"/Users/tomasreimers/Desktop/clientside/components/hero/index.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_14__.OrbitControls, {\n                    target: [\n                        0,\n                        0,\n                        99\n                    ]\n                }, void 0, false, {\n                    fileName: \"/Users/tomasreimers/Desktop/clientside/components/hero/index.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/tomasreimers/Desktop/clientside/components/hero/index.tsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/tomasreimers/Desktop/clientside/components/hero/index.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_c = Hero;\nfunction Particles() {\n    _s();\n    const gl = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_11__.A)((state)=>state.gl);\n    const [particles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>initParticles(gl));\n    // TODO: We should take into account the delta in time and move it by that much\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_11__.C)((param)=>{\n        let { gl, scene, camera } = param;\n        particles.update(gl);\n        // Render frame\n        gl.setRenderTarget(null);\n        gl.render(scene, camera);\n    }, 1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"instancedMesh\", {\n        args: [\n            undefined,\n            undefined,\n            particles.total\n        ],\n        frustumCulled: false,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"cylinderGeometry\", {\n                args: [\n                    0.1,\n                    0.1,\n                    0.01,\n                    5\n                ],\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"instancedBufferAttribute\", {\n                    attach: \"attributes-pindex\",\n                    args: [\n                        particles.indicies,\n                        2\n                    ]\n                }, void 0, false, {\n                    fileName: \"/Users/tomasreimers/Desktop/clientside/components/hero/index.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tomasreimers/Desktop/clientside/components/hero/index.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"particleRenderMaterial\", {\n                positions: particles.output.positions.data.texture,\n                rotations: particles.output.rotations.data.texture\n            }, void 0, false, {\n                fileName: \"/Users/tomasreimers/Desktop/clientside/components/hero/index.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tomasreimers/Desktop/clientside/components/hero/index.tsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_s(Particles, \"p89kA7OhQgxynDa6BSVB/MNDy9s=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_11__.A,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_11__.C\n    ];\n});\n_c1 = Particles;\nfunction initParticles(renderer) {\n    const width = 64;\n    const height = 64;\n    const l = width * height;\n    const indicies = new Float32Array(l * 2);\n    for(let i = 0; i < l; i++){\n        const i3 = i * 2;\n        indicies[i3] = i % width / width;\n        indicies[i3 + 1] = i / width / height;\n    }\n    const newPositions = createAndInitializeGPUData({\n        width,\n        height,\n        renderer,\n        gen: (0,_webgl_utils_gen_data_texture__WEBPACK_IMPORTED_MODULE_9__.genDataTexture)({\n            width,\n            height,\n            gen: (0,_webgl_initializers_random__WEBPACK_IMPORTED_MODULE_3__.initRandom)(-100, 100)\n        })\n    });\n    const velocity = new _webgl_gpgpu_data__WEBPACK_IMPORTED_MODULE_2__.GPUData({\n        width,\n        height,\n        init: (0,_webgl_utils_write_texture__WEBPACK_IMPORTED_MODULE_10__.writeTexture)(renderer, (0,_webgl_utils_gen_data_texture__WEBPACK_IMPORTED_MODULE_9__.genDataTexture)({\n            width,\n            height,\n            gen: (0,_webgl_initializers_random__WEBPACK_IMPORTED_MODULE_3__.initRandom)(-0.02, 0.02)\n        }))\n    });\n    const newRotations = new _webgl_gpgpu_data__WEBPACK_IMPORTED_MODULE_2__.GPUData({\n        width,\n        height,\n        init: (0,_webgl_utils_write_texture__WEBPACK_IMPORTED_MODULE_10__.writeTexture)(renderer, (0,_webgl_utils_gen_data_texture__WEBPACK_IMPORTED_MODULE_9__.genDataTexture)({\n            width,\n            height,\n            gen: (0,_webgl_initializers_random_rotation__WEBPACK_IMPORTED_MODULE_4__.initRandomRotation)(0, 2)\n        }))\n    });\n    const spins = new _webgl_gpgpu_data__WEBPACK_IMPORTED_MODULE_2__.GPUData({\n        width,\n        height,\n        init: (0,_webgl_utils_write_texture__WEBPACK_IMPORTED_MODULE_10__.writeTexture)(renderer, (0,_webgl_utils_gen_data_texture__WEBPACK_IMPORTED_MODULE_9__.genDataTexture)({\n            width,\n            height,\n            gen: (0,_webgl_initializers_random_rotation__WEBPACK_IMPORTED_MODULE_4__.initRandomRotation)(-0.02, 0.02)\n        }))\n    });\n    const oldPositions = new _webgl_gpgpu_data__WEBPACK_IMPORTED_MODULE_2__.GPUData({\n        width,\n        height\n    });\n    const oldRotations = new _webgl_gpgpu_data__WEBPACK_IMPORTED_MODULE_2__.GPUData({\n        width,\n        height\n    });\n    const positionSimulation = (0,_webgl_shaders_positions__WEBPACK_IMPORTED_MODULE_6__.updatePositionsFn)();\n    const rotationSimulation = (0,_webgl_shaders_rotations__WEBPACK_IMPORTED_MODULE_8__.updateRotationsFn)();\n    const loopback = (0,_webgl_shaders_passthru__WEBPACK_IMPORTED_MODULE_5__.passThruFn)();\n    return {\n        // necessary\n        total: height * width,\n        indicies,\n        update: (gl)=>{\n            // Positions\n            loopback({\n                inputs: {\n                    srcdata: newPositions.data.texture\n                },\n                renderer: gl,\n                output: oldPositions.data\n            });\n            positionSimulation({\n                inputs: {\n                    velocity: velocity.data.texture,\n                    positions: oldPositions.data.texture\n                },\n                renderer: gl,\n                output: newPositions.data\n            });\n            // Rotations\n            loopback({\n                inputs: {\n                    srcdata: newRotations.data.texture\n                },\n                renderer: gl,\n                output: oldRotations.data\n            });\n            rotationSimulation({\n                inputs: {\n                    rotations: oldRotations.data.texture,\n                    spins: spins.data.texture\n                },\n                renderer: gl,\n                output: newRotations.data\n            });\n        },\n        output: {\n            positions: newPositions,\n            rotations: oldRotations\n        }\n    };\n}\nvar _c, _c1;\n$RefreshReg$(_c, \"Hero\");\n$RefreshReg$(_c1, \"Particles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztnQkFDN0NFLFVBQVV2QjtnQkFDVm1CLFFBQVFtQixhQUFhbEIsSUFBSTtZQUMzQjtZQUNBb0IsbUJBQW1CO2dCQUNqQkUsUUFBUTtvQkFDTnBCLFdBQVdnQixhQUFhbEIsSUFBSSxDQUFDQyxPQUFPO29CQUNwQ2UsT0FBT0EsTUFBTWhCLElBQUksQ0FBQ0MsT0FBTztnQkFDM0I7Z0JBQ0FFLFVBQVV2QjtnQkFDVm1CLFFBQVFnQixhQUFhZixJQUFJO1lBQzNCO1FBQ0Y7UUFDQUQsUUFBUTtZQUNORCxXQUFXWTtZQUNYUixXQUFXZ0I7UUFDYjtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZXJvL2luZGV4LnRzeD8zYjEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICdAcmVhY3QtdGhyZWUvZHJlaSc7XG5pbXBvcnQge1xuICB0eXBlIE5vZGUgYXMgVGhyZWVOb2RlLFxuICBDYW52YXMsXG4gIGV4dGVuZCxcbiAgdXNlRnJhbWUsXG4gIHVzZVRocmVlLFxufSBmcm9tICdAcmVhY3QtdGhyZWUvZmliZXInO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuaW1wb3J0IHMgZnJvbSAnLi9IZXJvLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IEdQVURhdGEgfSBmcm9tICcuL3dlYmdsL2dwZ3B1L2RhdGEnO1xuaW1wb3J0IHsgaW5pdFJhbmRvbSB9IGZyb20gJy4vd2ViZ2wvaW5pdGlhbGl6ZXJzL3JhbmRvbSc7XG5pbXBvcnQgeyBpbml0UmFuZG9tUm90YXRpb24gfSBmcm9tICcuL3dlYmdsL2luaXRpYWxpemVycy9yYW5kb21fcm90YXRpb24nO1xuaW1wb3J0IHsgcGFzc1RocnVGbiB9IGZyb20gJy4vd2ViZ2wvc2hhZGVycy9wYXNzdGhydSc7XG5pbXBvcnQgeyB1cGRhdGVQb3NpdGlvbnNGbiB9IGZyb20gJy4vd2ViZ2wvc2hhZGVycy9wb3NpdGlvbnMnO1xuaW1wb3J0IHsgUGFydGljbGVSZW5kZXJNYXRlcmlhbCB9IGZyb20gJy4vd2ViZ2wvc2hhZGVycy9yZW5kZXInO1xuaW1wb3J0IHsgdXBkYXRlUm90YXRpb25zRm4gfSBmcm9tICcuL3dlYmdsL3NoYWRlcnMvcm90YXRpb25zJztcbmltcG9ydCB7IGdlbkRhdGFUZXh0dXJlIH0gZnJvbSAnLi93ZWJnbC91dGlscy9nZW5fZGF0YV90ZXh0dXJlJztcbmltcG9ydCB7IHdyaXRlVGV4dHVyZSB9IGZyb20gJy4vd2ViZ2wvdXRpbHMvd3JpdGVfdGV4dHVyZSc7XG5cbmV4dGVuZCh7XG4gIFBhcnRpY2xlUmVuZGVyTWF0ZXJpYWwsXG59KTtcblxuZGVjbGFyZSBtb2R1bGUgJ0ByZWFjdC10aHJlZS9maWJlcicge1xuICBpbnRlcmZhY2UgVGhyZWVFbGVtZW50cyB7XG4gICAgcGFydGljbGVSZW5kZXJNYXRlcmlhbDogVGhyZWVOb2RlPFxuICAgICAge1xuICAgICAgICBwb3NpdGlvbnM6IFRIUkVFLlRleHR1cmU7XG4gICAgICAgIHJvdGF0aW9uczogVEhSRUUuVGV4dHVyZTtcbiAgICAgIH0sXG4gICAgICB0eXBlb2YgUGFydGljbGVSZW5kZXJNYXRlcmlhbFxuICAgID47XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEhlcm8oKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3MuY2FudmFzSG9sZGVyfT5cbiAgICAgIDxDYW52YXMgY2FtZXJhPXt7IHBvc2l0aW9uOiBbMCwgMCwgMTAwXSB9fT5cbiAgICAgICAgPGFtYmllbnRMaWdodCBpbnRlbnNpdHk9ezAuMDF9IC8+XG4gICAgICAgIDxkaXJlY3Rpb25hbExpZ2h0IHBvc2l0aW9uPXtbMCwgMCwgNF19IGludGVuc2l0eT17Mn0gLz5cbiAgICAgICAgPFBhcnRpY2xlcyAvPlxuICAgICAgICA8T3JiaXRDb250cm9scyB0YXJnZXQ9e1swLCAwLCA5OV19IC8+XG4gICAgICA8L0NhbnZhcz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gUGFydGljbGVzKCkge1xuICBjb25zdCBnbCA9IHVzZVRocmVlKChzdGF0ZSkgPT4gc3RhdGUuZ2wpO1xuICBjb25zdCBbcGFydGljbGVzXSA9IHVzZVN0YXRlKCgpID0+IGluaXRQYXJ0aWNsZXMoZ2wpKTtcblxuICAvLyBUT0RPOiBXZSBzaG91bGQgdGFrZSBpbnRvIGFjY291bnQgdGhlIGRlbHRhIGluIHRpbWUgYW5kIG1vdmUgaXQgYnkgdGhhdCBtdWNoXG4gIHVzZUZyYW1lKCh7IGdsLCBzY2VuZSwgY2FtZXJhIH0pID0+IHtcbiAgICBwYXJ0aWNsZXMudXBkYXRlKGdsKTtcblxuICAgIC8vIFJlbmRlciBmcmFtZVxuICAgIGdsLnNldFJlbmRlclRhcmdldChudWxsKTtcbiAgICBnbC5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG4gIH0sIDEpO1xuXG4gIHJldHVybiAoXG4gICAgPGluc3RhbmNlZE1lc2hcbiAgICAgIGFyZ3M9e1t1bmRlZmluZWQsIHVuZGVmaW5lZCwgcGFydGljbGVzLnRvdGFsXX1cbiAgICAgIGZydXN0dW1DdWxsZWQ9e2ZhbHNlfVxuICAgID5cbiAgICAgIDxjeWxpbmRlckdlb21ldHJ5IGFyZ3M9e1swLjEsIDAuMSwgMC4wMSwgNV19PlxuICAgICAgICA8aW5zdGFuY2VkQnVmZmVyQXR0cmlidXRlXG4gICAgICAgICAgYXR0YWNoPVwiYXR0cmlidXRlcy1waW5kZXhcIlxuICAgICAgICAgIGFyZ3M9e1twYXJ0aWNsZXMuaW5kaWNpZXMsIDJdfVxuICAgICAgICAvPlxuICAgICAgPC9jeWxpbmRlckdlb21ldHJ5PlxuICAgICAgPHBhcnRpY2xlUmVuZGVyTWF0ZXJpYWxcbiAgICAgICAgcG9zaXRpb25zPXtwYXJ0aWNsZXMub3V0cHV0LnBvc2l0aW9ucy5kYXRhLnRleHR1cmV9XG4gICAgICAgIHJvdGF0aW9ucz17cGFydGljbGVzLm91dHB1dC5yb3RhdGlvbnMuZGF0YS50ZXh0dXJlfVxuICAgICAgLz5cbiAgICA8L2luc3RhbmNlZE1lc2g+XG4gICk7XG59XG5cbmZ1bmN0aW9uIGluaXRQYXJ0aWNsZXMocmVuZGVyZXI6IFRIUkVFLldlYkdMUmVuZGVyZXIpIHtcbiAgY29uc3Qgd2lkdGggPSA2NDtcbiAgY29uc3QgaGVpZ2h0ID0gNjQ7XG5cbiAgY29uc3QgbCA9IHdpZHRoICogaGVpZ2h0O1xuICBjb25zdCBpbmRpY2llcyA9IG5ldyBGbG9hdDMyQXJyYXkobCAqIDIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgIGNvbnN0IGkzID0gaSAqIDI7XG4gICAgaW5kaWNpZXNbaTNdID0gKGkgJSB3aWR0aCkgLyB3aWR0aDtcbiAgICBpbmRpY2llc1tpMyArIDFdID0gaSAvIHdpZHRoIC8gaGVpZ2h0O1xuICB9XG5cbiAgY29uc3QgbmV3UG9zaXRpb25zID0gY3JlYXRlQW5kSW5pdGlhbGl6ZUdQVURhdGEoe1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICByZW5kZXJlcixcbiAgICBnZW46IGdlbkRhdGFUZXh0dXJlKHsgd2lkdGgsIGhlaWdodCwgZ2VuOiBpbml0UmFuZG9tKC0xMDAsIDEwMCkgfSksXG4gIH0pO1xuICBjb25zdCB2ZWxvY2l0eSA9IG5ldyBHUFVEYXRhKHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgaW5pdDogd3JpdGVUZXh0dXJlKFxuICAgICAgcmVuZGVyZXIsXG4gICAgICBnZW5EYXRhVGV4dHVyZSh7IHdpZHRoLCBoZWlnaHQsIGdlbjogaW5pdFJhbmRvbSgtMC4wMiwgMC4wMikgfSlcbiAgICApLFxuICB9KTtcbiAgY29uc3QgbmV3Um90YXRpb25zID0gbmV3IEdQVURhdGEoe1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBpbml0OiB3cml0ZVRleHR1cmUoXG4gICAgICByZW5kZXJlcixcbiAgICAgIGdlbkRhdGFUZXh0dXJlKHsgd2lkdGgsIGhlaWdodCwgZ2VuOiBpbml0UmFuZG9tUm90YXRpb24oMCwgMikgfSlcbiAgICApLFxuICB9KTtcbiAgY29uc3Qgc3BpbnMgPSBuZXcgR1BVRGF0YSh7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGluaXQ6IHdyaXRlVGV4dHVyZShcbiAgICAgIHJlbmRlcmVyLFxuICAgICAgZ2VuRGF0YVRleHR1cmUoeyB3aWR0aCwgaGVpZ2h0LCBnZW46IGluaXRSYW5kb21Sb3RhdGlvbigtMC4wMiwgMC4wMikgfSlcbiAgICApLFxuICB9KTtcblxuICBjb25zdCBvbGRQb3NpdGlvbnMgPSBuZXcgR1BVRGF0YSh7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICB9KTtcblxuICBjb25zdCBvbGRSb3RhdGlvbnMgPSBuZXcgR1BVRGF0YSh7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICB9KTtcblxuICBjb25zdCBwb3NpdGlvblNpbXVsYXRpb24gPSB1cGRhdGVQb3NpdGlvbnNGbigpO1xuICBjb25zdCByb3RhdGlvblNpbXVsYXRpb24gPSB1cGRhdGVSb3RhdGlvbnNGbigpO1xuICBjb25zdCBsb29wYmFjayA9IHBhc3NUaHJ1Rm4oKTtcblxuICByZXR1cm4ge1xuICAgIC8vIG5lY2Vzc2FyeVxuICAgIHRvdGFsOiBoZWlnaHQgKiB3aWR0aCxcbiAgICBpbmRpY2llcyxcbiAgICB1cGRhdGU6IChnbDogVEhSRUUuV2ViR0xSZW5kZXJlcikgPT4ge1xuICAgICAgLy8gUG9zaXRpb25zXG4gICAgICBsb29wYmFjayh7XG4gICAgICAgIGlucHV0czogeyBzcmNkYXRhOiBuZXdQb3NpdGlvbnMuZGF0YS50ZXh0dXJlIH0sXG4gICAgICAgIHJlbmRlcmVyOiBnbCxcbiAgICAgICAgb3V0cHV0OiBvbGRQb3NpdGlvbnMuZGF0YSxcbiAgICAgIH0pO1xuICAgICAgcG9zaXRpb25TaW11bGF0aW9uKHtcbiAgICAgICAgaW5wdXRzOiB7XG4gICAgICAgICAgdmVsb2NpdHk6IHZlbG9jaXR5LmRhdGEudGV4dHVyZSxcbiAgICAgICAgICBwb3NpdGlvbnM6IG9sZFBvc2l0aW9ucy5kYXRhLnRleHR1cmUsXG4gICAgICAgIH0sXG4gICAgICAgIHJlbmRlcmVyOiBnbCxcbiAgICAgICAgb3V0cHV0OiBuZXdQb3NpdGlvbnMuZGF0YSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBSb3RhdGlvbnNcbiAgICAgIGxvb3BiYWNrKHtcbiAgICAgICAgaW5wdXRzOiB7IHNyY2RhdGE6IG5ld1JvdGF0aW9ucy5kYXRhLnRleHR1cmUgfSxcbiAgICAgICAgcmVuZGVyZXI6IGdsLFxuICAgICAgICBvdXRwdXQ6IG9sZFJvdGF0aW9ucy5kYXRhLFxuICAgICAgfSk7XG4gICAgICByb3RhdGlvblNpbXVsYXRpb24oe1xuICAgICAgICBpbnB1dHM6IHtcbiAgICAgICAgICByb3RhdGlvbnM6IG9sZFJvdGF0aW9ucy5kYXRhLnRleHR1cmUsXG4gICAgICAgICAgc3BpbnM6IHNwaW5zLmRhdGEudGV4dHVyZSxcbiAgICAgICAgfSxcbiAgICAgICAgcmVuZGVyZXI6IGdsLFxuICAgICAgICBvdXRwdXQ6IG5ld1JvdGF0aW9ucy5kYXRhLFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBvdXRwdXQ6IHtcbiAgICAgIHBvc2l0aW9uczogbmV3UG9zaXRpb25zLFxuICAgICAgcm90YXRpb25zOiBvbGRSb3RhdGlvbnMsXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJPcmJpdENvbnRyb2xzIiwiQ2FudmFzIiwiZXh0ZW5kIiwidXNlRnJhbWUiLCJ1c2VUaHJlZSIsInVzZVN0YXRlIiwicyIsIkdQVURhdGEiLCJpbml0UmFuZG9tIiwiaW5pdFJhbmRvbVJvdGF0aW9uIiwicGFzc1RocnVGbiIsInVwZGF0ZVBvc2l0aW9uc0ZuIiwiUGFydGljbGVSZW5kZXJNYXRlcmlhbCIsInVwZGF0ZVJvdGF0aW9uc0ZuIiwiZ2VuRGF0YVRleHR1cmUiLCJ3cml0ZVRleHR1cmUiLCJIZXJvIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2FudmFzSG9sZGVyIiwiY2FtZXJhIiwicG9zaXRpb24iLCJhbWJpZW50TGlnaHQiLCJpbnRlbnNpdHkiLCJkaXJlY3Rpb25hbExpZ2h0IiwiUGFydGljbGVzIiwidGFyZ2V0IiwiZ2wiLCJzdGF0ZSIsInBhcnRpY2xlcyIsImluaXRQYXJ0aWNsZXMiLCJzY2VuZSIsInVwZGF0ZSIsInNldFJlbmRlclRhcmdldCIsInJlbmRlciIsImluc3RhbmNlZE1lc2giLCJhcmdzIiwidW5kZWZpbmVkIiwidG90YWwiLCJmcnVzdHVtQ3VsbGVkIiwiY3lsaW5kZXJHZW9tZXRyeSIsImluc3RhbmNlZEJ1ZmZlckF0dHJpYnV0ZSIsImF0dGFjaCIsImluZGljaWVzIiwicGFydGljbGVSZW5kZXJNYXRlcmlhbCIsInBvc2l0aW9ucyIsIm91dHB1dCIsImRhdGEiLCJ0ZXh0dXJlIiwicm90YXRpb25zIiwicmVuZGVyZXIiLCJ3aWR0aCIsImhlaWdodCIsImwiLCJGbG9hdDMyQXJyYXkiLCJpIiwiaTMiLCJuZXdQb3NpdGlvbnMiLCJjcmVhdGVBbmRJbml0aWFsaXplR1BVRGF0YSIsImdlbiIsInZlbG9jaXR5IiwiaW5pdCIsIm5ld1JvdGF0aW9ucyIsInNwaW5zIiwib2xkUG9zaXRpb25zIiwib2xkUm90YXRpb25zIiwicG9zaXRpb25TaW11bGF0aW9uIiwicm90YXRpb25TaW11bGF0aW9uIiwibG9vcGJhY2siLCJpbnB1dHMiLCJzcmNkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/hero/index.tsx\n"));

/***/ })

});