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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateRotationsFn: function() { return /* binding */ updateRotationsFn; }\n/* harmony export */ });\n/* harmony import */ var _fragment_shader_fn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fragment_shader_fn */ \"./components/hero/webgl/shaders/fragment_shader_fn.ts\");\n\nconst updateRotationsFn = (0,_fragment_shader_fn__WEBPACK_IMPORTED_MODULE_0__.fragmentShaderFunction)({\n    spins: null,\n    rotations: null,\n    delta: null\n}, \"precision highp float;\\nprecision highp sampler2D;\\n\\nvarying vec2 vUv;\\nuniform sampler2D spins;\\nuniform sampler2D rotations;\\nuniform float delta;\\n\\nvec4 qmul(vec4 q1, vec4 q2) {\\n  return vec4(\\n    q2.xyz * q1.w + q1.xyz * q2.w + cross(q1.xyz, q2.xyz),\\n    q1.w * q2.w - dot(q1.xyz, q2.xyz)\\n  );\\n}\\n\\nvec4 q_slerp(vec4 a, vec4 b, float t) {\\n    // if either input is zero, return the other.\\n    if (length(a) == 0.0) {\\n        if (length(b) == 0.0) {\\n            return vec4(0, 0, 0, 1);\\n        }\\n        return b;\\n    } else if (length(b) == 0.0) {\\n        return a;\\n    }\\n\\n    float cosHalfAngle = a.w * b.w + dot(a.xyz, b.xyz);\\n\\n    if (cosHalfAngle >= 1.0 || cosHalfAngle <= -1.0) {\\n        return a;\\n    } else if (cosHalfAngle < 0.0) {\\n        b.xyz = -b.xyz;\\n        b.w = -b.w;\\n        cosHalfAngle = -cosHalfAngle;\\n    }\\n\\n    float blendA;\\n    float blendB;\\n    if (cosHalfAngle < 0.99) {\\n        // do proper slerp for big angles\\n        float halfAngle = acos(cosHalfAngle);\\n        float sinHalfAngle = sin(halfAngle);\\n        float oneOverSinHalfAngle = 1.0 / sinHalfAngle;\\n        blendA = sin(halfAngle * (1.0 - t)) * oneOverSinHalfAngle;\\n        blendB = sin(halfAngle * t) * oneOverSinHalfAngle;\\n    } else {\\n        // do lerp if angle is really small.\\n        blendA = 1.0 - t;\\n        blendB = t;\\n    }\\n\\n    vec4 result = vec4(blendA * a.xyz + blendB * b.xyz, blendA * a.w + blendB * b.w);\\n    if (length(result) > 0.0) {\\n        return normalize(result);\\n    }\\n    return vec4(0, 0, 0, 1);\\n}\\n\\nvoid main() {\\n  vec4 rot = texture2D( rotations, vUv );\\n  vec4 sp = texture2D( spins, vUv );\\n  gl_FragColor = q_slerp(rot, qmul(sp, rot), delta);\\n}\\n\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlcm8vd2ViZ2wvc2hhZGVycy9yb3RhdGlvbnMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFOEQ7QUFFdkQsTUFBTUMsb0JBQW9CRCwyRUFBc0JBLENBS3JEO0lBQ0VFLE9BQU87SUFDUEMsV0FBVztJQUNYQyxPQUFPO0FBQ1QsR0FDQyw0ckRBZ0VEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVyby93ZWJnbC9zaGFkZXJzL3JvdGF0aW9ucy50cz9iMGM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG5pbXBvcnQgeyBmcmFnbWVudFNoYWRlckZ1bmN0aW9uIH0gZnJvbSAnLi9mcmFnbWVudF9zaGFkZXJfZm4nO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlUm90YXRpb25zRm4gPSBmcmFnbWVudFNoYWRlckZ1bmN0aW9uPHtcbiAgc3BpbnM6IFRIUkVFLlRleHR1cmU7XG4gIHJvdGF0aW9uczogVEhSRUUuVGV4dHVyZTtcbiAgZGVsdGE6IG51bWJlcjtcbn0+KFxuICB7XG4gICAgc3BpbnM6IG51bGwsXG4gICAgcm90YXRpb25zOiBudWxsLFxuICAgIGRlbHRhOiBudWxsLFxuICB9LFxuICBgcHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xucHJlY2lzaW9uIGhpZ2hwIHNhbXBsZXIyRDtcblxudmFyeWluZyB2ZWMyIHZVdjtcbnVuaWZvcm0gc2FtcGxlcjJEIHNwaW5zO1xudW5pZm9ybSBzYW1wbGVyMkQgcm90YXRpb25zO1xudW5pZm9ybSBmbG9hdCBkZWx0YTtcblxudmVjNCBxbXVsKHZlYzQgcTEsIHZlYzQgcTIpIHtcbiAgcmV0dXJuIHZlYzQoXG4gICAgcTIueHl6ICogcTEudyArIHExLnh5eiAqIHEyLncgKyBjcm9zcyhxMS54eXosIHEyLnh5eiksXG4gICAgcTEudyAqIHEyLncgLSBkb3QocTEueHl6LCBxMi54eXopXG4gICk7XG59XG5cbnZlYzQgcV9zbGVycCh2ZWM0IGEsIHZlYzQgYiwgZmxvYXQgdCkge1xuICAgIC8vIGlmIGVpdGhlciBpbnB1dCBpcyB6ZXJvLCByZXR1cm4gdGhlIG90aGVyLlxuICAgIGlmIChsZW5ndGgoYSkgPT0gMC4wKSB7XG4gICAgICAgIGlmIChsZW5ndGgoYikgPT0gMC4wKSB7XG4gICAgICAgICAgICByZXR1cm4gdmVjNCgwLCAwLCAwLCAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYjtcbiAgICB9IGVsc2UgaWYgKGxlbmd0aChiKSA9PSAwLjApIHtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfVxuXG4gICAgZmxvYXQgY29zSGFsZkFuZ2xlID0gYS53ICogYi53ICsgZG90KGEueHl6LCBiLnh5eik7XG5cbiAgICBpZiAoY29zSGFsZkFuZ2xlID49IDEuMCB8fCBjb3NIYWxmQW5nbGUgPD0gLTEuMCkge1xuICAgICAgICByZXR1cm4gYTtcbiAgICB9IGVsc2UgaWYgKGNvc0hhbGZBbmdsZSA8IDAuMCkge1xuICAgICAgICBiLnh5eiA9IC1iLnh5ejtcbiAgICAgICAgYi53ID0gLWIudztcbiAgICAgICAgY29zSGFsZkFuZ2xlID0gLWNvc0hhbGZBbmdsZTtcbiAgICB9XG5cbiAgICBmbG9hdCBibGVuZEE7XG4gICAgZmxvYXQgYmxlbmRCO1xuICAgIGlmIChjb3NIYWxmQW5nbGUgPCAwLjk5KSB7XG4gICAgICAgIC8vIGRvIHByb3BlciBzbGVycCBmb3IgYmlnIGFuZ2xlc1xuICAgICAgICBmbG9hdCBoYWxmQW5nbGUgPSBhY29zKGNvc0hhbGZBbmdsZSk7XG4gICAgICAgIGZsb2F0IHNpbkhhbGZBbmdsZSA9IHNpbihoYWxmQW5nbGUpO1xuICAgICAgICBmbG9hdCBvbmVPdmVyU2luSGFsZkFuZ2xlID0gMS4wIC8gc2luSGFsZkFuZ2xlO1xuICAgICAgICBibGVuZEEgPSBzaW4oaGFsZkFuZ2xlICogKDEuMCAtIHQpKSAqIG9uZU92ZXJTaW5IYWxmQW5nbGU7XG4gICAgICAgIGJsZW5kQiA9IHNpbihoYWxmQW5nbGUgKiB0KSAqIG9uZU92ZXJTaW5IYWxmQW5nbGU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZG8gbGVycCBpZiBhbmdsZSBpcyByZWFsbHkgc21hbGwuXG4gICAgICAgIGJsZW5kQSA9IDEuMCAtIHQ7XG4gICAgICAgIGJsZW5kQiA9IHQ7XG4gICAgfVxuXG4gICAgdmVjNCByZXN1bHQgPSB2ZWM0KGJsZW5kQSAqIGEueHl6ICsgYmxlbmRCICogYi54eXosIGJsZW5kQSAqIGEudyArIGJsZW5kQiAqIGIudyk7XG4gICAgaWYgKGxlbmd0aChyZXN1bHQpID4gMC4wKSB7XG4gICAgICAgIHJldHVybiBub3JtYWxpemUocmVzdWx0KTtcbiAgICB9XG4gICAgcmV0dXJuIHZlYzQoMCwgMCwgMCwgMSk7XG59XG5cbnZvaWQgbWFpbigpIHtcbiAgdmVjNCByb3QgPSB0ZXh0dXJlMkQoIHJvdGF0aW9ucywgdlV2ICk7XG4gIHZlYzQgc3AgPSB0ZXh0dXJlMkQoIHNwaW5zLCB2VXYgKTtcbiAgZ2xfRnJhZ0NvbG9yID0gcV9zbGVycChyb3QsIHFtdWwoc3AsIHJvdCksIGRlbHRhKTtcbn1cbmBcbik7XG4iXSwibmFtZXMiOlsiZnJhZ21lbnRTaGFkZXJGdW5jdGlvbiIsInVwZGF0ZVJvdGF0aW9uc0ZuIiwic3BpbnMiLCJyb3RhdGlvbnMiLCJkZWx0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/hero/webgl/shaders/rotations.ts\n"));

/***/ })

});