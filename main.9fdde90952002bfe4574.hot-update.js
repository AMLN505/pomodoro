/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatepomodoro"]("main",{

/***/ "./src/utils/js/addStatsItem.ts":
/*!**************************************!*\
  !*** ./src/utils/js/addStatsItem.ts ***!
  \**************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\"use strict\";\nvar _react_refresh_temp_1;\n_react_refresh_temp_1 = __webpack_require__.$Refresh$.signature();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.addStatsItem = void 0;\nconst redux_1 = __webpack_require__(/*! ../../hooks/redux */ \"./src/hooks/redux.ts\");\nconst toolkitSlice_1 = __webpack_require__(/*! ../../store/reducers/toolkitSlice */ \"./src/store/reducers/toolkitSlice.ts\");\nconst getWeekDay_1 = __webpack_require__(/*! ./getWeekDay */ \"./src/utils/js/getWeekDay.ts\");\nconst getWeekNumber_1 = __webpack_require__(/*! ./getWeekNumber */ \"./src/utils/js/getWeekNumber.ts\");\nfunction addStatsItem(type, value, dispatchFunc) {\n    _react_refresh_temp_1();\n    const dispatch = (0, redux_1.useAppDispatch)();\n    const date = new Date();\n    const statItem = {\n        week: (0, getWeekNumber_1.getWeekNumber)(date),\n        day: (0, getWeekDay_1.getWeekDay)(date),\n        type: type,\n        value: value,\n    };\n    dispatch((0, toolkitSlice_1.addStats)(statItem));\n}\nexports.addStatsItem = addStatsItem;\n_react_refresh_temp_1(addStatsItem, \"BJQ1DUn/XFEl2NsQ3DWyHAXfnkY=\", false, () => [redux_1.useAppDispatch]);\n\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://pomodoro/./src/utils/js/addStatsItem.ts?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("defd87d38c5d05bbdcbb")
/******/ })();
/******/ 
/******/ }
);