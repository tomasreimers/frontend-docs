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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   functionDefinition: function() { return /* binding */ functionDefinition; }\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nfunction functionDefinition(param) {\n    let { material: materialClass } = param;\n    const scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n    const camera = new three__WEBPACK_IMPORTED_MODULE_0__.OrthographicCamera(-1, 1, 1, -1, 1 / Math.pow(2, 53), 1);\n    //5 the simulation:\n    //create a bi-unit quadrilateral and uses the simulation material to update the Float Texture\n    const geom = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();\n    geom.setAttribute(\"position\", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(new Float32Array([\n        -1,\n        -1,\n        0,\n        1,\n        -1,\n        0,\n        1,\n        1,\n        0,\n        -1,\n        -1,\n        0,\n        1,\n        1,\n        0,\n        -1,\n        1,\n        0\n    ]), 3));\n    geom.setAttribute(\"uv\", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(new Float32Array([\n        0,\n        1,\n        1,\n        1,\n        1,\n        0,\n        0,\n        1,\n        1,\n        0,\n        0,\n        0\n    ]), 2));\n    const material = new materialClass({\n        precision: \"highp\"\n    });\n    scene.add(new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geom, material));\n    this.scene = scene;\n    this.camera = camera;\n    this.material = material;\n    this.run = this.run.bind(this);\n    return (param)=>{\n        let { inputs, renderer, output } = param;\n        renderer.setRenderTarget(output);\n        for(const key in inputs){\n            material.uniforms[key].value = inputs[key];\n        }\n        renderer.render(scene, camera);\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlcm8vd2ViZ2wvZ3BncHUvZm4udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBK0I7QUFFeEIsU0FBU0MsbUJBQWtELEtBSWpFO1FBSmlFLEVBQ2hFQyxVQUFVQyxhQUFhLEVBR3hCLEdBSmlFO0lBS2hFLE1BQU1DLFFBQVEsSUFBSUosd0NBQVc7SUFDN0IsTUFBTU0sU0FBUyxJQUFJTixxREFBd0IsQ0FDekMsQ0FBQyxHQUNELEdBQ0EsR0FDQSxDQUFDLEdBQ0QsSUFBSVEsS0FBS0MsR0FBRyxDQUFDLEdBQUcsS0FDaEI7SUFHRixtQkFBbUI7SUFDbkIsNkZBQTZGO0lBQzdGLE1BQU1DLE9BQU8sSUFBSVYsaURBQW9CO0lBQ3JDVSxLQUFLRSxZQUFZLENBQ2YsWUFDQSxJQUFJWixrREFBcUIsQ0FDdkIsSUFBSWMsYUFBYTtRQUNmLENBQUM7UUFBRyxDQUFDO1FBQUc7UUFBRztRQUFHLENBQUM7UUFBRztRQUFHO1FBQUc7UUFBRztRQUFHLENBQUM7UUFBRyxDQUFDO1FBQUc7UUFBRztRQUFHO1FBQUc7UUFBRyxDQUFDO1FBQUc7UUFBRztLQUMxRCxHQUNEO0lBR0pKLEtBQUtFLFlBQVksQ0FDZixNQUNBLElBQUlaLGtEQUFxQixDQUN2QixJQUFJYyxhQUFhO1FBQUM7UUFBRztRQUFHO1FBQUc7UUFBRztRQUFHO1FBQUc7UUFBRztRQUFHO1FBQUc7UUFBRztRQUFHO0tBQUUsR0FDckQ7SUFHSixNQUFNWixXQUFXLElBQUlDLGNBQWM7UUFDakNZLFdBQVc7SUFDYjtJQUNBWCxNQUFNWSxHQUFHLENBQUMsSUFBSWhCLHVDQUFVLENBQUNVLE1BQU1SO0lBRS9CLElBQUksQ0FBQ0UsS0FBSyxHQUFHQTtJQUNiLElBQUksQ0FBQ0UsTUFBTSxHQUFHQTtJQUNkLElBQUksQ0FBQ0osUUFBUSxHQUFHQTtJQUVoQixJQUFJLENBQUNnQixHQUFHLEdBQUcsSUFBSSxDQUFDQSxHQUFHLENBQUNDLElBQUksQ0FBQyxJQUFJO0lBRTdCLE9BQU87WUFBQyxFQUNOQyxNQUFNLEVBQ05DLFFBQVEsRUFDUkMsTUFBTSxFQUtQO1FBQ0NELFNBQVNFLGVBQWUsQ0FBQ0Q7UUFDekIsSUFBSyxNQUFNRSxPQUFPSixPQUFRO1lBQ3hCbEIsU0FBU3VCLFFBQVEsQ0FBQ0QsSUFBSSxDQUFDRSxLQUFLLEdBQUdOLE1BQU0sQ0FBQ0ksSUFBSTtRQUM1QztRQUNBSCxTQUFTTSxNQUFNLENBQUN2QixPQUFPRTtJQUN6QjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVyby93ZWJnbC9ncGdwdS9mbi50cz8wYTAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZ1bmN0aW9uRGVmaW5pdGlvbjxUIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4oe1xuICBtYXRlcmlhbDogbWF0ZXJpYWxDbGFzcyxcbn06IHtcbiAgbWF0ZXJpYWw6IHsgbmV3IChhcmdzOiB7IHByZWNpc2lvbjogJ2hpZ2hwJyB9KTogVEhSRUUuU2hhZGVyTWF0ZXJpYWwgfTtcbn0pIHtcbiAgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYShcbiAgICAtMSxcbiAgICAxLFxuICAgIDEsXG4gICAgLTEsXG4gICAgMSAvIE1hdGgucG93KDIsIDUzKSxcbiAgICAxXG4gICk7XG5cbiAgLy81IHRoZSBzaW11bGF0aW9uOlxuICAvL2NyZWF0ZSBhIGJpLXVuaXQgcXVhZHJpbGF0ZXJhbCBhbmQgdXNlcyB0aGUgc2ltdWxhdGlvbiBtYXRlcmlhbCB0byB1cGRhdGUgdGhlIEZsb2F0IFRleHR1cmVcbiAgY29uc3QgZ2VvbSA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnZW9tLnNldEF0dHJpYnV0ZShcbiAgICAncG9zaXRpb24nLFxuICAgIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoXG4gICAgICBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgLTEsIC0xLCAwLCAxLCAtMSwgMCwgMSwgMSwgMCwgLTEsIC0xLCAwLCAxLCAxLCAwLCAtMSwgMSwgMCxcbiAgICAgIF0pLFxuICAgICAgM1xuICAgIClcbiAgKTtcbiAgZ2VvbS5zZXRBdHRyaWJ1dGUoXG4gICAgJ3V2JyxcbiAgICBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKFxuICAgICAgbmV3IEZsb2F0MzJBcnJheShbMCwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMCwgMF0pLFxuICAgICAgMlxuICAgIClcbiAgKTtcbiAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgbWF0ZXJpYWxDbGFzcyh7XG4gICAgcHJlY2lzaW9uOiAnaGlnaHAnLFxuICB9KTtcbiAgc2NlbmUuYWRkKG5ldyBUSFJFRS5NZXNoKGdlb20sIG1hdGVyaWFsKSk7XG5cbiAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcbiAgdGhpcy5tYXRlcmlhbCA9IG1hdGVyaWFsO1xuXG4gIHRoaXMucnVuID0gdGhpcy5ydW4uYmluZCh0aGlzKTtcblxuICByZXR1cm4gKHtcbiAgICBpbnB1dHMsXG4gICAgcmVuZGVyZXIsXG4gICAgb3V0cHV0LFxuICB9OiB7XG4gICAgaW5wdXRzOiBUO1xuICAgIHJlbmRlcmVyOiBUSFJFRS5XZWJHTFJlbmRlcmVyO1xuICAgIG91dHB1dDogVEhSRUUuV2ViR0xSZW5kZXJUYXJnZXQgfCBudWxsO1xuICB9KSA9PiB7XG4gICAgcmVuZGVyZXIuc2V0UmVuZGVyVGFyZ2V0KG91dHB1dCk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gaW5wdXRzKSB7XG4gICAgICBtYXRlcmlhbC51bmlmb3Jtc1trZXldLnZhbHVlID0gaW5wdXRzW2tleV07XG4gICAgfVxuICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJUSFJFRSIsImZ1bmN0aW9uRGVmaW5pdGlvbiIsIm1hdGVyaWFsIiwibWF0ZXJpYWxDbGFzcyIsInNjZW5lIiwiU2NlbmUiLCJjYW1lcmEiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJNYXRoIiwicG93IiwiZ2VvbSIsIkJ1ZmZlckdlb21ldHJ5Iiwic2V0QXR0cmlidXRlIiwiQnVmZmVyQXR0cmlidXRlIiwiRmxvYXQzMkFycmF5IiwicHJlY2lzaW9uIiwiYWRkIiwiTWVzaCIsInJ1biIsImJpbmQiLCJpbnB1dHMiLCJyZW5kZXJlciIsIm91dHB1dCIsInNldFJlbmRlclRhcmdldCIsImtleSIsInVuaWZvcm1zIiwidmFsdWUiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/hero/webgl/gpgpu/fn.ts\n"));

/***/ })

});