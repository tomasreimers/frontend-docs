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

/***/ "./components/hero/webgl/gpgpu/data.ts":
/*!*********************************************!*\
  !*** ./components/hero/webgl/gpgpu/data.ts ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GPUData: function() { return /* binding */ GPUData; }\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _shaders_passthru__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shaders/passthru */ \"./components/hero/webgl/shaders/passthru.ts\");\n\n\nclass GPUData {\n    loadInitialData(param) {\n        let { renderer, texture } = param;\n        const passThrough = (0,_shaders_passthru__WEBPACK_IMPORTED_MODULE_0__.passThruFn)();\n        passThrough({\n            inputs: {\n                srcdata: texture\n            },\n            renderer,\n            output: this.data\n        });\n    }\n    constructor({ width, height, init }){\n        const options = {\n            minFilter: three__WEBPACK_IMPORTED_MODULE_1__.NearestFilter,\n            magFilter: three__WEBPACK_IMPORTED_MODULE_1__.NearestFilter,\n            format: three__WEBPACK_IMPORTED_MODULE_1__.RGBAFormat,\n            type: three__WEBPACK_IMPORTED_MODULE_1__.FloatType,\n            generateMipMaps: false\n        };\n        const target = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderTarget(width, height, options);\n        this.data = target;\n        if (init) {\n            const data = new Float32Array(width * height * 4);\n            for(let i = 0; i < width * height; i++){\n                const [x, y, z, w] = init.dataGen(i);\n                const idx = i * 4;\n                data[idx] = x;\n                data[idx + 1] = y;\n                data[idx + 2] = z;\n                data[idx + 3] = w;\n            }\n            const texture = new three__WEBPACK_IMPORTED_MODULE_1__.DataTexture(data, width, height, three__WEBPACK_IMPORTED_MODULE_1__.RGBAFormat, three__WEBPACK_IMPORTED_MODULE_1__.FloatType);\n            texture.needsUpdate = true;\n            this.loadInitialData({\n                renderer: init.renderer,\n                texture\n            });\n        }\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlcm8vd2ViZ2wvZ3BncHUvZGF0YS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFFMEM7QUFHbEUsTUFBTUU7SUFrREhDLGdCQUFnQixLQU12QixFQUFFO1lBTnFCLEVBQ3RCQyxRQUFRLEVBQ1JDLE9BQU8sRUFJUixHQU51QjtRQU90QixNQUFNQyxjQUFjTCw2REFBVUE7UUFFOUJLLFlBQVk7WUFDVkMsUUFBUTtnQkFBRUMsU0FBU0g7WUFBUTtZQUMzQkQ7WUFDQUssUUFBUSxJQUFJLENBQUNDLElBQUk7UUFDbkI7SUFDRjtJQTdEQUMsWUFBWSxFQUNWQyxLQUFLLEVBQ0xDLE1BQU0sRUFDTkMsSUFBSSxFQVFMLENBQUU7UUFDRCxNQUFNQyxVQUFVO1lBQ2RDLFdBQVdoQixnREFBbUI7WUFDOUJrQixXQUFXbEIsZ0RBQW1CO1lBQzlCbUIsUUFBUW5CLDZDQUFnQjtZQUN4QnFCLE1BQU1yQiw0Q0FBZTtZQUNyQnVCLGlCQUFpQjtRQUNuQjtRQUNBLE1BQU1DLFNBQVMsSUFBSXhCLG9EQUF1QixDQUFDWSxPQUFPQyxRQUFRRTtRQUMxRCxJQUFJLENBQUNMLElBQUksR0FBR2M7UUFFWixJQUFJVixNQUFNO1lBQ1IsTUFBTUosT0FBTyxJQUFJZ0IsYUFBYWQsUUFBUUMsU0FBUztZQUMvQyxJQUFLLElBQUljLElBQUksR0FBR0EsSUFBSWYsUUFBUUMsUUFBUWMsSUFBSztnQkFDdkMsTUFBTSxDQUFDQyxHQUFHQyxHQUFHQyxHQUFHQyxFQUFFLEdBQUdqQixLQUFLa0IsT0FBTyxDQUFDTDtnQkFFbEMsTUFBTU0sTUFBTU4sSUFBSTtnQkFDaEJqQixJQUFJLENBQUN1QixJQUFJLEdBQUdMO2dCQUNabEIsSUFBSSxDQUFDdUIsTUFBTSxFQUFFLEdBQUdKO2dCQUNoQm5CLElBQUksQ0FBQ3VCLE1BQU0sRUFBRSxHQUFHSDtnQkFDaEJwQixJQUFJLENBQUN1QixNQUFNLEVBQUUsR0FBR0Y7WUFDbEI7WUFFQSxNQUFNMUIsVUFBVSxJQUFJTCw4Q0FBaUIsQ0FDbkNVLE1BQ0FFLE9BQ0FDLFFBQ0FiLDZDQUFnQixFQUNoQkEsNENBQWU7WUFFakJLLFFBQVE4QixXQUFXLEdBQUc7WUFFdEIsSUFBSSxDQUFDaEMsZUFBZSxDQUFDO2dCQUFFQyxVQUFVVSxLQUFLVixRQUFRO2dCQUFFQztZQUFRO1FBQzFEO0lBQ0Y7QUFpQkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZXJvL3dlYmdsL2dwZ3B1L2RhdGEudHM/YTEzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbmltcG9ydCB7IHBhc3NUaHJ1Rm4sIFBhc3NUaHJ1U2hhZGVyTWF0ZXJpYWwgfSBmcm9tICcuLi9zaGFkZXJzL3Bhc3N0aHJ1JztcbmltcG9ydCB7IGZ1bmN0aW9uRGVmaW5pdGlvbiB9IGZyb20gJy4vZm4nO1xuXG5leHBvcnQgY2xhc3MgR1BVRGF0YSB7XG4gIGRhdGE6IFRIUkVFLldlYkdMUmVuZGVyVGFyZ2V0O1xuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgaW5pdCxcbiAgfToge1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgaW5pdD86IHtcbiAgICAgIGRhdGFHZW46IChpZHg6IG51bWJlcikgPT4gW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG4gICAgICByZW5kZXJlcjogVEhSRUUuV2ViR0xSZW5kZXJlcjtcbiAgICB9O1xuICB9KSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIG1pbkZpbHRlcjogVEhSRUUuTmVhcmVzdEZpbHRlciwgLy9pbXBvcnRhbnQgYXMgd2Ugd2FudCB0byBzYW1wbGUgc3F1YXJlIHBpeGVsc1xuICAgICAgbWFnRmlsdGVyOiBUSFJFRS5OZWFyZXN0RmlsdGVyLCAvL1xuICAgICAgZm9ybWF0OiBUSFJFRS5SR0JBRm9ybWF0LFxuICAgICAgdHlwZTogVEhSRUUuRmxvYXRUeXBlLCAvL2ltcG9ydGFudCBhcyB3ZSBuZWVkIHByZWNpc2UgY29vcmRpbmF0ZXMgKG5vdCBpbnRzKVxuICAgICAgZ2VuZXJhdGVNaXBNYXBzOiBmYWxzZSxcbiAgICB9O1xuICAgIGNvbnN0IHRhcmdldCA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlclRhcmdldCh3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKTtcbiAgICB0aGlzLmRhdGEgPSB0YXJnZXQ7XG5cbiAgICBpZiAoaW5pdCkge1xuICAgICAgY29uc3QgZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkod2lkdGggKiBoZWlnaHQgKiA0KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2lkdGggKiBoZWlnaHQ7IGkrKykge1xuICAgICAgICBjb25zdCBbeCwgeSwgeiwgd10gPSBpbml0LmRhdGFHZW4oaSk7XG5cbiAgICAgICAgY29uc3QgaWR4ID0gaSAqIDQ7XG4gICAgICAgIGRhdGFbaWR4XSA9IHg7XG4gICAgICAgIGRhdGFbaWR4ICsgMV0gPSB5O1xuICAgICAgICBkYXRhW2lkeCArIDJdID0gejtcbiAgICAgICAgZGF0YVtpZHggKyAzXSA9IHc7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVEhSRUUuRGF0YVRleHR1cmUoXG4gICAgICAgIGRhdGEsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIFRIUkVFLlJHQkFGb3JtYXQsXG4gICAgICAgIFRIUkVFLkZsb2F0VHlwZVxuICAgICAgKTtcbiAgICAgIHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xuXG4gICAgICB0aGlzLmxvYWRJbml0aWFsRGF0YSh7IHJlbmRlcmVyOiBpbml0LnJlbmRlcmVyLCB0ZXh0dXJlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbG9hZEluaXRpYWxEYXRhKHtcbiAgICByZW5kZXJlcixcbiAgICB0ZXh0dXJlLFxuICB9OiB7XG4gICAgcmVuZGVyZXI6IFRIUkVFLldlYkdMUmVuZGVyZXI7XG4gICAgdGV4dHVyZTogVEhSRUUuVGV4dHVyZTtcbiAgfSkge1xuICAgIGNvbnN0IHBhc3NUaHJvdWdoID0gcGFzc1RocnVGbigpO1xuXG4gICAgcGFzc1Rocm91Z2goe1xuICAgICAgaW5wdXRzOiB7IHNyY2RhdGE6IHRleHR1cmUgfSxcbiAgICAgIHJlbmRlcmVyLFxuICAgICAgb3V0cHV0OiB0aGlzLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUSFJFRSIsInBhc3NUaHJ1Rm4iLCJHUFVEYXRhIiwibG9hZEluaXRpYWxEYXRhIiwicmVuZGVyZXIiLCJ0ZXh0dXJlIiwicGFzc1Rocm91Z2giLCJpbnB1dHMiLCJzcmNkYXRhIiwib3V0cHV0IiwiZGF0YSIsImNvbnN0cnVjdG9yIiwid2lkdGgiLCJoZWlnaHQiLCJpbml0Iiwib3B0aW9ucyIsIm1pbkZpbHRlciIsIk5lYXJlc3RGaWx0ZXIiLCJtYWdGaWx0ZXIiLCJmb3JtYXQiLCJSR0JBRm9ybWF0IiwidHlwZSIsIkZsb2F0VHlwZSIsImdlbmVyYXRlTWlwTWFwcyIsInRhcmdldCIsIldlYkdMUmVuZGVyVGFyZ2V0IiwiRmxvYXQzMkFycmF5IiwiaSIsIngiLCJ5IiwieiIsInciLCJkYXRhR2VuIiwiaWR4IiwiRGF0YVRleHR1cmUiLCJuZWVkc1VwZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/hero/webgl/gpgpu/data.ts\n"));

/***/ })

});