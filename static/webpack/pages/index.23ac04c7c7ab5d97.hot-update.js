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

/***/ "./components/hero/webgl/gpgpu/fn.ts":
/*!*******************************************!*\
  !*** ./components/hero/webgl/gpgpu/fn.ts ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GPUFunction: function() { return /* binding */ GPUFunction; }\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nclass GPUFunction {\n    run(param) {\n        let {} = param;\n        renderer.setRenderTarget(target);\n        renderer.render(this.scene, this.camera);\n    }\n    constructor({ material }){\n        const scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n        const camera = new three__WEBPACK_IMPORTED_MODULE_0__.OrthographicCamera(-1, 1, 1, -1, 1 / Math.pow(2, 53), 1);\n        //5 the simulation:\n        //create a bi-unit quadrilateral and uses the simulation material to update the Float Texture\n        const geom = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();\n        geom.setAttribute(\"position\", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(new Float32Array([\n            -1,\n            -1,\n            0,\n            1,\n            -1,\n            0,\n            1,\n            1,\n            0,\n            -1,\n            -1,\n            0,\n            1,\n            1,\n            0,\n            -1,\n            1,\n            0\n        ]), 3));\n        geom.setAttribute(\"uv\", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(new Float32Array([\n            0,\n            1,\n            1,\n            1,\n            1,\n            0,\n            0,\n            1,\n            1,\n            0,\n            0,\n            0\n        ]), 2));\n        scene.add(new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geom, material));\n        this.scene = scene;\n        this.camera = camera;\n        this.run = this.run.bind(this);\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlcm8vd2ViZ2wvZ3BncHUvZm4udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBK0I7QUFFeEIsTUFBTUM7SUEwQ0pDLElBQUksS0FHVixFQUFFO1lBSFEsRUFHVixHQUhVO1FBSVRDLFNBQVNDLGVBQWUsQ0FBQ0M7UUFDekJGLFNBQVNHLE1BQU0sQ0FBQyxJQUFJLENBQUNDLEtBQUssRUFBRSxJQUFJLENBQUNDLE1BQU07SUFDekM7SUE1Q0FDLFlBQVksRUFBRUMsUUFBUSxFQUFzQyxDQUFFO1FBQzVELE1BQU1ILFFBQVEsSUFBSVAsd0NBQVc7UUFDN0IsTUFBTVEsU0FBUyxJQUFJUixxREFBd0IsQ0FDekMsQ0FBQyxHQUNELEdBQ0EsR0FDQSxDQUFDLEdBQ0QsSUFBSWEsS0FBS0MsR0FBRyxDQUFDLEdBQUcsS0FDaEI7UUFHRixtQkFBbUI7UUFDbkIsNkZBQTZGO1FBQzdGLE1BQU1DLE9BQU8sSUFBSWYsaURBQW9CO1FBQ3JDZSxLQUFLRSxZQUFZLENBQ2YsWUFDQSxJQUFJakIsa0RBQXFCLENBQ3ZCLElBQUltQixhQUFhO1lBQ2YsQ0FBQztZQUFHLENBQUM7WUFBRztZQUFHO1lBQUcsQ0FBQztZQUFHO1lBQUc7WUFBRztZQUFHO1lBQUcsQ0FBQztZQUFHLENBQUM7WUFBRztZQUFHO1lBQUc7WUFBRztZQUFHLENBQUM7WUFBRztZQUFHO1NBQzFELEdBQ0Q7UUFHSkosS0FBS0UsWUFBWSxDQUNmLE1BQ0EsSUFBSWpCLGtEQUFxQixDQUN2QixJQUFJbUIsYUFBYTtZQUFDO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztTQUFFLEdBQ3JEO1FBR0paLE1BQU1hLEdBQUcsQ0FBQyxJQUFJcEIsdUNBQVUsQ0FBQ2UsTUFBTUw7UUFFL0IsSUFBSSxDQUFDSCxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBRWQsSUFBSSxDQUFDTixHQUFHLEdBQUcsSUFBSSxDQUFDQSxHQUFHLENBQUNvQixJQUFJLENBQUMsSUFBSTtJQUMvQjtBQVNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVyby93ZWJnbC9ncGdwdS9mbi50cz8wYTAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuZXhwb3J0IGNsYXNzIEdQVUZ1bmN0aW9uIHtcbiAgcHJpdmF0ZSBzY2VuZTogVEhSRUUuU2NlbmU7XG4gIHByaXZhdGUgY2FtZXJhOiBUSFJFRS5DYW1lcmE7XG5cbiAgY29uc3RydWN0b3IoeyBtYXRlcmlhbCB9OiB7IG1hdGVyaWFsOiBUSFJFRS5TaGFkZXJNYXRlcmlhbCB9KSB7XG4gICAgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKFxuICAgICAgLTEsXG4gICAgICAxLFxuICAgICAgMSxcbiAgICAgIC0xLFxuICAgICAgMSAvIE1hdGgucG93KDIsIDUzKSxcbiAgICAgIDFcbiAgICApO1xuXG4gICAgLy81IHRoZSBzaW11bGF0aW9uOlxuICAgIC8vY3JlYXRlIGEgYmktdW5pdCBxdWFkcmlsYXRlcmFsIGFuZCB1c2VzIHRoZSBzaW11bGF0aW9uIG1hdGVyaWFsIHRvIHVwZGF0ZSB0aGUgRmxvYXQgVGV4dHVyZVxuICAgIGNvbnN0IGdlb20gPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgICBnZW9tLnNldEF0dHJpYnV0ZShcbiAgICAgICdwb3NpdGlvbicsXG4gICAgICBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKFxuICAgICAgICBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgICAtMSwgLTEsIDAsIDEsIC0xLCAwLCAxLCAxLCAwLCAtMSwgLTEsIDAsIDEsIDEsIDAsIC0xLCAxLCAwLFxuICAgICAgICBdKSxcbiAgICAgICAgM1xuICAgICAgKVxuICAgICk7XG4gICAgZ2VvbS5zZXRBdHRyaWJ1dGUoXG4gICAgICAndXYnLFxuICAgICAgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShcbiAgICAgICAgbmV3IEZsb2F0MzJBcnJheShbMCwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMCwgMF0pLFxuICAgICAgICAyXG4gICAgICApXG4gICAgKTtcbiAgICBzY2VuZS5hZGQobmV3IFRIUkVFLk1lc2goZ2VvbSwgbWF0ZXJpYWwpKTtcblxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcblxuICAgIHRoaXMucnVuID0gdGhpcy5ydW4uYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBydW4oe306IHtcbiAgICByZW5kZXJlcjogVEhSRUUuV2ViR0xSZW5kZXJlcjtcbiAgICB0YXJnZXQ6IFRIUkVFLldlYkdMUmVuZGVyVGFyZ2V0IHwgbnVsbDtcbiAgfSkge1xuICAgIHJlbmRlcmVyLnNldFJlbmRlclRhcmdldCh0YXJnZXQpO1xuICAgIHJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUSFJFRSIsIkdQVUZ1bmN0aW9uIiwicnVuIiwicmVuZGVyZXIiLCJzZXRSZW5kZXJUYXJnZXQiLCJ0YXJnZXQiLCJyZW5kZXIiLCJzY2VuZSIsImNhbWVyYSIsImNvbnN0cnVjdG9yIiwibWF0ZXJpYWwiLCJTY2VuZSIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsIk1hdGgiLCJwb3ciLCJnZW9tIiwiQnVmZmVyR2VvbWV0cnkiLCJzZXRBdHRyaWJ1dGUiLCJCdWZmZXJBdHRyaWJ1dGUiLCJGbG9hdDMyQXJyYXkiLCJhZGQiLCJNZXNoIiwiYmluZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/hero/webgl/gpgpu/fn.ts\n"));

/***/ })

});