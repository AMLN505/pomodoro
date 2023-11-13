/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatepomodoro"]("main",{

/***/ "./src/shared/TimerPage/TaskTimer/TimerControl/TimerControl.tsx":
/*!**********************************************************************!*\
  !*** ./src/shared/TimerPage/TaskTimer/TimerControl/TimerControl.tsx ***!
  \**********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\"use strict\";\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar _react_refresh_temp_1;\nvar _react_refresh_temp_2;\n_react_refresh_temp_2 = __webpack_require__.$Refresh$.signature();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.TimerControl = void 0;\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst timercontrol_css_1 = __importDefault(__webpack_require__(/*! ./timercontrol.css */ \"./src/shared/TimerPage/TaskTimer/TimerControl/timercontrol.css\"));\nconst timerContext_1 = __webpack_require__(/*! ../../../context/timerContext */ \"./src/shared/context/timerContext.tsx\");\nconst toolkitSlice_1 = __webpack_require__(/*! ../../../../store/reducers/toolkitSlice */ \"./src/store/reducers/toolkitSlice.ts\");\nconst redux_1 = __webpack_require__(/*! ../../../../hooks/redux */ \"./src/hooks/redux.ts\");\nconst getWeekNumber_1 = __webpack_require__(/*! ../../../../utils/js/getWeekNumber */ \"./src/utils/js/getWeekNumber.ts\");\nconst getWeekDay_1 = __webpack_require__(/*! ../../../../utils/js/getWeekDay */ \"./src/utils/js/getWeekDay.ts\");\nfunction TimerControl({ tasks, id }) {\n    _react_refresh_temp_2();\n    const { isWork, setIsWork, isActive, setIsActive, isPaused, setIsPaused, setTime, } = (0, react_1.useContext)(timerContext_1.timerContext);\n    const workTime = (0, redux_1.useAppSelector)((state) => state.timerParams.workTime);\n    const dispatch = (0, redux_1.useAppDispatch)();\n    function onDone() {\n        const newTasks = tasks.filter((task) => task.id !== id);\n        dispatch((0, toolkitSlice_1.updateTask)(newTasks));\n    }\n    function onPause() {\n        setIsPaused(true);\n        setIsActive(false);\n    }\n    function onResume() {\n        setIsPaused(false);\n        setIsActive(true);\n    }\n    function addStatsItem(type, value) {\n        const date = new Date();\n        const statItem = {\n            week: (0, getWeekNumber_1.getWeekNumber)(date),\n            day: (0, getWeekDay_1.getWeekDay)(date),\n            type: type,\n            value: value,\n        };\n        dispatch((0, toolkitSlice_1.addStats)(statItem));\n    }\n    function onStop() {\n        setTime([workTime, 0]);\n        setIsActive(false);\n        addStatsItem(toolkitSlice_1.EType.stops, 1);\n    }\n    function onSkip() {\n        setIsPaused(false);\n        onStop();\n        setIsWork(true);\n        const newTasks = tasks.map((task) => task.id === id ? Object.assign(Object.assign({}, task), { progress: task.progress + 1 }) : task);\n        dispatch((0, toolkitSlice_1.updateTask)(newTasks));\n    }\n    let workTimeCounter = 0;\n    let pauseTimeCounter = 0;\n    react_1.default.useEffect(() => {\n        const timer = setInterval(() => {\n            if (isActive) {\n                ++workTimeCounter;\n            }\n        }, 1000);\n        return () => {\n            if (workTimeCounter !== 0) {\n                addStatsItem(toolkitSlice_1.EType.workTime, workTimeCounter);\n            }\n            clearInterval(timer);\n        };\n    }, [isActive]);\n    react_1.default.useEffect(() => {\n        const timer = setInterval(() => {\n            if (isPaused) {\n                ++pauseTimeCounter;\n            }\n        }, 1000);\n        return () => {\n            if (pauseTimeCounter !== 0) {\n                addStatsItem(toolkitSlice_1.EType.pauseTime, pauseTimeCounter);\n            }\n            clearInterval(timer);\n        };\n    }, [isPaused]);\n    function renderControlButtons() {\n        return (react_1.default.createElement(\"div\", { className: timercontrol_css_1.default.buttonsContainer },\n            react_1.default.createElement(\"button\", { className: timercontrol_css_1.default.greenButton, onClick: onResume }, \"\\u041F\\u0440\\u043E\\u0434\\u043E\\u043B\\u0436\\u0438\\u0442\\u044C\"),\n            react_1.default.createElement(\"button\", { className: timercontrol_css_1.default.hollowButton, onClick: onDone }, \"\\u0421\\u0434\\u0435\\u043B\\u0430\\u043D\\u043E\")));\n    }\n    return (react_1.default.createElement(\"div\", { className: timercontrol_css_1.default.control },\n        isWork &&\n            !isActive &&\n            (isPaused ? (react_1.default.createElement(\"div\", { className: timercontrol_css_1.default.buttonsContainer },\n                react_1.default.createElement(\"button\", { className: timercontrol_css_1.default.greenButton, onClick: onResume }, \"\\u041F\\u0440\\u043E\\u0434\\u043E\\u043B\\u0436\\u0438\\u0442\\u044C\"),\n                react_1.default.createElement(\"button\", { className: timercontrol_css_1.default.hollowButton, onClick: onDone }, \"\\u0421\\u0434\\u0435\\u043B\\u0430\\u043D\\u043E\"))) : (react_1.default.createElement(\"div\", { className: timercontrol_css_1.default.buttonsContainer },\n                react_1.default.createElement(\"button\", { className: timercontrol_css_1.default.greenButton, onClick: () => setIsActive(true) }, \"\\u0421\\u0442\\u0430\\u0440\\u0442\"),\n                react_1.default.createElement(\"button\", { className: timercontrol_css_1.default.hollowButton, disabled: true }, \"\\u0421\\u0442\\u043E\\u043F\")))),\n        isWork && isActive && (react_1.default.createElement(\"div\", { className: timercontrol_css_1.default.buttonsContainer },\n            react_1.default.createElement(\"button\", { className: timercontrol_css_1.default.greenButton, onClick: onPause }, \"\\u041F\\u0430\\u0443\\u0437\\u0430\"),\n            react_1.default.createElement(\"button\", { className: timercontrol_css_1.default.hollowButton, onClick: onStop }, \"\\u0421\\u0442\\u043E\\u043F\"))),\n        !isWork &&\n            !isActive &&\n            (isPaused ? (react_1.default.createElement(\"div\", { className: timercontrol_css_1.default.buttonsContainer },\n                react_1.default.createElement(\"button\", { className: timercontrol_css_1.default.greenButton, onClick: onResume }, \"\\u041F\\u0440\\u043E\\u0434\\u043E\\u043B\\u0436\\u0438\\u0442\\u044C\"),\n                react_1.default.createElement(\"button\", { className: timercontrol_css_1.default.hollowButton, onClick: onSkip }, \"\\u041F\\u0440\\u043E\\u043F\\u0443\\u0441\\u0442\\u0438\\u0442\\u044C\"))) : (react_1.default.createElement(\"div\", { className: timercontrol_css_1.default.buttonsContainer },\n                react_1.default.createElement(\"button\", { className: timercontrol_css_1.default.greenButton, onClick: () => setIsActive(true) }, \"\\u0421\\u0442\\u0430\\u0440\\u0442\"),\n                react_1.default.createElement(\"button\", { className: timercontrol_css_1.default.hollowButton, onClick: onSkip }, \"\\u041F\\u0440\\u043E\\u043F\\u0443\\u0441\\u0442\\u0438\\u0442\\u044C\")))),\n        !isWork && isActive && (react_1.default.createElement(\"div\", { className: timercontrol_css_1.default.buttonsContainer },\n            react_1.default.createElement(\"button\", { className: timercontrol_css_1.default.greenButton, onClick: onPause }, \"\\u041F\\u0430\\u0443\\u0437\\u0430\"),\n            react_1.default.createElement(\"button\", { className: timercontrol_css_1.default.hollowButton, onClick: onSkip }, \"\\u041F\\u0440\\u043E\\u043F\\u0443\\u0441\\u0442\\u0438\\u0442\\u044C\")))));\n}\nexports.TimerControl = TimerControl;\n_react_refresh_temp_1 = TimerControl;\n__webpack_require__.$Refresh$.register(_react_refresh_temp_1, \"TimerControl\");\n_react_refresh_temp_2(TimerControl, \"VRkM5C/gOdyu67EGnJtclr9rQXo=\", false, () => [redux_1.useAppSelector, redux_1.useAppDispatch]);\n\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://pomodoro/./src/shared/TimerPage/TaskTimer/TimerControl/TimerControl.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f769ebead7d6ea0e06a9")
/******/ })();
/******/ 
/******/ }
);