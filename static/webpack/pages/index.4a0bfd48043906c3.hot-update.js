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

/***/ "./components/hero/webgl/shaders/rotations.ts":
/*!****************************************************!*\
  !*** ./components/hero/webgl/shaders/rotations.ts ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateRotationsFn: function() { return /* binding */ updateRotationsFn; }\n/* harmony export */ });\n/* harmony import */ var _fragment_shader_fn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fragment_shader_fn */ \"./components/hero/webgl/shaders/fragment_shader_fn.ts\");\n\nconst updateRotationsFn = (0,_fragment_shader_fn__WEBPACK_IMPORTED_MODULE_0__.fragmentShaderFunction)({\n    spins: null,\n    rotations: null,\n    delta: null\n}, \"precision highp float;\\nprecision highp sampler2D;\\n\\nvarying vec2 vUv;\\nuniform sampler2D spins;\\nuniform sampler2D rotations;\\nuniform float delta;\\n\\nvec4 qmul(vec4 q1, vec4 q2) {\\n  return vec4(\\n    q2.xyz * q1.w + q1.xyz * q2.w + cross(q1.xyz, q2.xyz),\\n    q1.w * q2.w - dot(q1.xyz, q2.xyz)\\n  );\\n}\\n\\nvec4 velocityToQuarternion(vec3 v, float t) {\\n  float norm = sqrt(v.x * v.x + v.y * v.y + v.z * v.z);\\n  float normX = v.x / norm;\\n  float normY = v.y / norm;\\n  float normZ = v.z / norm;\\n\\n  float rotation = t * norm * 3.14159265;\\n\\n  float sinRotation = sin(rotation / 2.);\\n  float cosRotation = cos(rotation / 2.);\\n\\n  return vec4(v.x * sinRotation, v.y * sinRotation, v.z * sinRotation, cosRotation);\\n}\\n\\nvoid main() {\\n  vec4 rot = texture2D( rotations, vUv );\\n  vec4 sp = texture2D( spins, vUv );\\n  gl_FragColor = qmul(velocityToQuarternion(sp, delta), rot);\\n  // gl_FragColor = qmul(sp, rot);\\n}\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlcm8vd2ViZ2wvc2hhZGVycy9yb3RhdGlvbnMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFOEQ7QUFFdkQsTUFBTUMsb0JBQW9CRCwyRUFBc0JBLENBS3JEO0lBQ0VFLE9BQU87SUFDUEMsV0FBVztJQUNYQyxPQUFPO0FBQ1QsR0FDQywrNUJBbUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVyby93ZWJnbC9zaGFkZXJzL3JvdGF0aW9ucy50cz9iMGM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG5pbXBvcnQgeyBmcmFnbWVudFNoYWRlckZ1bmN0aW9uIH0gZnJvbSAnLi9mcmFnbWVudF9zaGFkZXJfZm4nO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlUm90YXRpb25zRm4gPSBmcmFnbWVudFNoYWRlckZ1bmN0aW9uPHtcbiAgc3BpbnM6IFRIUkVFLlRleHR1cmU7XG4gIHJvdGF0aW9uczogVEhSRUUuVGV4dHVyZTtcbiAgZGVsdGE6IG51bWJlcjtcbn0+KFxuICB7XG4gICAgc3BpbnM6IG51bGwsXG4gICAgcm90YXRpb25zOiBudWxsLFxuICAgIGRlbHRhOiBudWxsLFxuICB9LFxuICBgcHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xucHJlY2lzaW9uIGhpZ2hwIHNhbXBsZXIyRDtcblxudmFyeWluZyB2ZWMyIHZVdjtcbnVuaWZvcm0gc2FtcGxlcjJEIHNwaW5zO1xudW5pZm9ybSBzYW1wbGVyMkQgcm90YXRpb25zO1xudW5pZm9ybSBmbG9hdCBkZWx0YTtcblxudmVjNCBxbXVsKHZlYzQgcTEsIHZlYzQgcTIpIHtcbiAgcmV0dXJuIHZlYzQoXG4gICAgcTIueHl6ICogcTEudyArIHExLnh5eiAqIHEyLncgKyBjcm9zcyhxMS54eXosIHEyLnh5eiksXG4gICAgcTEudyAqIHEyLncgLSBkb3QocTEueHl6LCBxMi54eXopXG4gICk7XG59XG5cbnZlYzQgdmVsb2NpdHlUb1F1YXJ0ZXJuaW9uKHZlYzMgdiwgZmxvYXQgdCkge1xuICBmbG9hdCBub3JtID0gc3FydCh2LnggKiB2LnggKyB2LnkgKiB2LnkgKyB2LnogKiB2LnopO1xuICBmbG9hdCBub3JtWCA9IHYueCAvIG5vcm07XG4gIGZsb2F0IG5vcm1ZID0gdi55IC8gbm9ybTtcbiAgZmxvYXQgbm9ybVogPSB2LnogLyBub3JtO1xuXG4gIGZsb2F0IHJvdGF0aW9uID0gdCAqIG5vcm0gKiAzLjE0MTU5MjY1O1xuXG4gIGZsb2F0IHNpblJvdGF0aW9uID0gc2luKHJvdGF0aW9uIC8gMi4pO1xuICBmbG9hdCBjb3NSb3RhdGlvbiA9IGNvcyhyb3RhdGlvbiAvIDIuKTtcblxuICByZXR1cm4gdmVjNCh2LnggKiBzaW5Sb3RhdGlvbiwgdi55ICogc2luUm90YXRpb24sIHYueiAqIHNpblJvdGF0aW9uLCBjb3NSb3RhdGlvbik7XG59XG5cbnZvaWQgbWFpbigpIHtcbiAgdmVjNCByb3QgPSB0ZXh0dXJlMkQoIHJvdGF0aW9ucywgdlV2ICk7XG4gIHZlYzQgc3AgPSB0ZXh0dXJlMkQoIHNwaW5zLCB2VXYgKTtcbiAgZ2xfRnJhZ0NvbG9yID0gcW11bCh2ZWxvY2l0eVRvUXVhcnRlcm5pb24oc3AsIGRlbHRhKSwgcm90KTtcbiAgLy8gZ2xfRnJhZ0NvbG9yID0gcW11bChzcCwgcm90KTtcbn1gXG4pO1xuIl0sIm5hbWVzIjpbImZyYWdtZW50U2hhZGVyRnVuY3Rpb24iLCJ1cGRhdGVSb3RhdGlvbnNGbiIsInNwaW5zIiwicm90YXRpb25zIiwiZGVsdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/hero/webgl/shaders/rotations.ts\n"));

/***/ })

});