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

/***/ "./components/hero/webgl/shaders/positions.ts":
/*!****************************************************!*\
  !*** ./components/hero/webgl/shaders/positions.ts ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updatePositionsFn: function() { return /* binding */ updatePositionsFn; }\n/* harmony export */ });\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/core/shaderMaterial.js\");\n/* harmony import */ var _fragment_shader_fn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fragment_shader_fn */ \"./components/hero/webgl/shaders/fragment_shader_fn.ts\");\n\n\nconst ParticlePositionSimulationMaterial = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_1__.shaderMaterial)({\n    positions: null,\n    velocity: null\n}, \"varying vec2 vUv;\\n\\nvoid main() {\\n    vUv = vec2(uv.x, uv.y);\\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\\n}\", \"precision highp float;\\n  precision highp sampler2D;\\n  \\n  varying vec2 vUv;\\n  uniform sampler2D velocity;\\n  uniform sampler2D positions;\\n\\nvoid main() {\\n    vec4 vel = texture2D( velocity, vUv ).rgba;\\n    vec4 pos = texture2D( positions, vUv ).rgba;\\n    gl_FragColor = vec4(pos.r + vel.r, pos.g + vel.g, pos.b + vel.b, pos.a + vel.a);\\n}\\n\");\nconst updatePositionsFn = (0,_fragment_shader_fn__WEBPACK_IMPORTED_MODULE_0__.fragmentShaderFunction)({\n    positions: null,\n    velocity: null\n}, \"precision highp float;\\nprecision highp sampler2D;\\n\\nvarying vec2 vUv;\\nuniform sampler2D velocity;\\nuniform sampler2D positions;\\n\\nvoid main() {\\n  vec4 vel = texture2D( velocity, vUv ).rgba;\\n  vec4 pos = texture2D( positions, vUv ).rgba;\\n  gl_FragColor = vec4(pos.r + vel.r, pos.g + vel.g, pos.b + vel.b, pos.a + vel.a);\\n}\\n\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlcm8vd2ViZ2wvc2hhZGVycy9wb3NpdGlvbnMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1EO0FBSVc7QUFFOUQsTUFBTUUscUNBQXFDRixpRUFBY0EsQ0FDdkQ7SUFDRUcsV0FBVztJQUNYQyxVQUFVO0FBQ1osR0FDQyxxSkFNQTtBQWVJLE1BQU1DLG9CQUFvQkosMkVBQXNCQSxDQUlyRDtJQUNFRSxXQUFXO0lBQ1hDLFVBQVU7QUFDWixHQUNDLCtVQWFEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVyby93ZWJnbC9zaGFkZXJzL3Bvc2l0aW9ucy50cz8wZTc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNoYWRlck1hdGVyaWFsIH0gZnJvbSAnQHJlYWN0LXRocmVlL2RyZWknO1xuaW1wb3J0IHR5cGUgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbmltcG9ydCB7IGZ1bmN0aW9uRGVmaW5pdGlvbiB9IGZyb20gJy4uL2dwZ3B1L2ZuJztcbmltcG9ydCB7IGZyYWdtZW50U2hhZGVyRnVuY3Rpb24gfSBmcm9tICcuL2ZyYWdtZW50X3NoYWRlcl9mbic7XG5cbmNvbnN0IFBhcnRpY2xlUG9zaXRpb25TaW11bGF0aW9uTWF0ZXJpYWwgPSBzaGFkZXJNYXRlcmlhbChcbiAge1xuICAgIHBvc2l0aW9uczogbnVsbCxcbiAgICB2ZWxvY2l0eTogbnVsbCxcbiAgfSxcbiAgYHZhcnlpbmcgdmVjMiB2VXY7XG5cbnZvaWQgbWFpbigpIHtcbiAgICB2VXYgPSB2ZWMyKHV2LngsIHV2LnkpO1xuICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQoIHBvc2l0aW9uLCAxLjAgKTtcbn1gLFxuICBgcHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xuICBwcmVjaXNpb24gaGlnaHAgc2FtcGxlcjJEO1xuICBcbiAgdmFyeWluZyB2ZWMyIHZVdjtcbiAgdW5pZm9ybSBzYW1wbGVyMkQgdmVsb2NpdHk7XG4gIHVuaWZvcm0gc2FtcGxlcjJEIHBvc2l0aW9ucztcblxudm9pZCBtYWluKCkge1xuICAgIHZlYzQgdmVsID0gdGV4dHVyZTJEKCB2ZWxvY2l0eSwgdlV2ICkucmdiYTtcbiAgICB2ZWM0IHBvcyA9IHRleHR1cmUyRCggcG9zaXRpb25zLCB2VXYgKS5yZ2JhO1xuICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQocG9zLnIgKyB2ZWwuciwgcG9zLmcgKyB2ZWwuZywgcG9zLmIgKyB2ZWwuYiwgcG9zLmEgKyB2ZWwuYSk7XG59XG5gXG4pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlUG9zaXRpb25zRm4gPSBmcmFnbWVudFNoYWRlckZ1bmN0aW9uPHtcbiAgcG9zaXRpb25zOiBUSFJFRS5UZXh0dXJlO1xuICB2ZWxvY2l0eTogVEhSRUUuVGV4dHVyZTtcbn0+KFxuICB7XG4gICAgcG9zaXRpb25zOiBudWxsLFxuICAgIHZlbG9jaXR5OiBudWxsLFxuICB9LFxuICBgcHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xucHJlY2lzaW9uIGhpZ2hwIHNhbXBsZXIyRDtcblxudmFyeWluZyB2ZWMyIHZVdjtcbnVuaWZvcm0gc2FtcGxlcjJEIHZlbG9jaXR5O1xudW5pZm9ybSBzYW1wbGVyMkQgcG9zaXRpb25zO1xuXG52b2lkIG1haW4oKSB7XG4gIHZlYzQgdmVsID0gdGV4dHVyZTJEKCB2ZWxvY2l0eSwgdlV2ICkucmdiYTtcbiAgdmVjNCBwb3MgPSB0ZXh0dXJlMkQoIHBvc2l0aW9ucywgdlV2ICkucmdiYTtcbiAgZ2xfRnJhZ0NvbG9yID0gdmVjNChwb3MuciArIHZlbC5yLCBwb3MuZyArIHZlbC5nLCBwb3MuYiArIHZlbC5iLCBwb3MuYSArIHZlbC5hKTtcbn1cbmBcbik7XG4iXSwibmFtZXMiOlsic2hhZGVyTWF0ZXJpYWwiLCJmcmFnbWVudFNoYWRlckZ1bmN0aW9uIiwiUGFydGljbGVQb3NpdGlvblNpbXVsYXRpb25NYXRlcmlhbCIsInBvc2l0aW9ucyIsInZlbG9jaXR5IiwidXBkYXRlUG9zaXRpb25zRm4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/hero/webgl/shaders/positions.ts\n"));

/***/ })

});