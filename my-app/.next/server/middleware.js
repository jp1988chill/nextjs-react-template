"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "middleware";
exports.ids = ["middleware"];
exports.modules = {

/***/ "(middleware)/./node_modules/next/dist/build/webpack/loaders/next-middleware-loader.js?absolutePagePath=C%3A%5Cgithub_clone%5Cjp1988chill%5Cnextjs-react-template%5Cmy-app%5Csrc%5Cmiddleware.ts&page=%2Fmiddleware&rootDir=C%3A%5Cgithub_clone%5Cjp1988chill%5Cnextjs-react-template%5Cmy-app&matchers=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-middleware-loader.js?absolutePagePath=C%3A%5Cgithub_clone%5Cjp1988chill%5Cnextjs-react-template%5Cmy-app%5Csrc%5Cmiddleware.ts&page=%2Fmiddleware&rootDir=C%3A%5Cgithub_clone%5Cjp1988chill%5Cnextjs-react-template%5Cmy-app&matchers=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ nHandler)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/globals */ \"(middleware)/./node_modules/next/dist/server/web/globals.js\");\n/* harmony import */ var next_dist_server_web_globals__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_web_globals__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_web_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/web/adapter */ \"(middleware)/./node_modules/next/dist/server/web/adapter.js\");\n/* harmony import */ var next_dist_server_web_adapter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_web_adapter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_middleware_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/middleware.ts */ \"(middleware)/./src/middleware.ts\");\n/* harmony import */ var next_dist_client_components_is_next_router_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/client/components/is-next-router-error */ \"(middleware)/./node_modules/next/dist/client/components/is-next-router-error.js\");\n/* harmony import */ var next_dist_client_components_is_next_router_error__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_is_next_router_error__WEBPACK_IMPORTED_MODULE_3__);\n\n\n// Import the userland code.\n\n\n\nconst mod = {\n    ..._src_middleware_ts__WEBPACK_IMPORTED_MODULE_2__\n};\nconst handler = mod.middleware || mod.default;\nconst page = \"/middleware\";\nif (typeof handler !== 'function') {\n    throw Object.defineProperty(new Error(`The Middleware \"${page}\" must export a \\`middleware\\` or a \\`default\\` function`), \"__NEXT_ERROR_CODE\", {\n        value: \"E120\",\n        enumerable: false,\n        configurable: true\n    });\n}\n// Middleware will only sent out the FetchEvent to next server,\n// so load instrumentation module here and track the error inside middleware module.\nfunction errorHandledHandler(fn) {\n    return async (...args)=>{\n        try {\n            return await fn(...args);\n        } catch (err) {\n            // In development, error the navigation API usage in runtime,\n            // since it's not allowed to be used in middleware as it's outside of react component tree.\n            if (true) {\n                if ((0,next_dist_client_components_is_next_router_error__WEBPACK_IMPORTED_MODULE_3__.isNextRouterError)(err)) {\n                    err.message = `Next.js navigation API is not allowed to be used in Middleware.`;\n                    throw err;\n                }\n            }\n            const req = args[0];\n            const url = new URL(req.url);\n            const resource = url.pathname + url.search;\n            await (0,next_dist_server_web_globals__WEBPACK_IMPORTED_MODULE_0__.edgeInstrumentationOnRequestError)(err, {\n                path: resource,\n                method: req.method,\n                headers: Object.fromEntries(req.headers.entries())\n            }, {\n                routerKind: 'Pages Router',\n                routePath: '/middleware',\n                routeType: 'middleware',\n                revalidateReason: undefined\n            });\n            throw err;\n        }\n    };\n}\nfunction nHandler(opts) {\n    return (0,next_dist_server_web_adapter__WEBPACK_IMPORTED_MODULE_1__.adapter)({\n        ...opts,\n        page,\n        handler: errorHandledHandler(handler)\n    });\n}\n\n//# sourceMappingURL=middleware.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1taWRkbGV3YXJlLWxvYWRlci5qcz9hYnNvbHV0ZVBhZ2VQYXRoPUMlM0ElNUNnaXRodWJfY2xvbmUlNUNqcDE5ODhjaGlsbCU1Q25leHRqcy1yZWFjdC10ZW1wbGF0ZSU1Q215LWFwcCU1Q3NyYyU1Q21pZGRsZXdhcmUudHMmcGFnZT0lMkZtaWRkbGV3YXJlJnJvb3REaXI9QyUzQSU1Q2dpdGh1Yl9jbG9uZSU1Q2pwMTk4OGNoaWxsJTVDbmV4dGpzLXJlYWN0LXRlbXBsYXRlJTVDbXktYXBwJm1hdGNoZXJzPSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzQztBQUNpQjtBQUN2RDtBQUM0QztBQUNxQztBQUNJO0FBQ3JGO0FBQ0EsT0FBTywrQ0FBSTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELEtBQUs7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxnQkFBZ0IsSUFBcUM7QUFDckQsb0JBQW9CLG1HQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwrRkFBaUM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZixXQUFXLHFFQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIm5leHQvZGlzdC9zZXJ2ZXIvd2ViL2dsb2JhbHNcIjtcbmltcG9ydCB7IGFkYXB0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci93ZWIvYWRhcHRlclwiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgX21vZCBmcm9tIFwiLi9zcmMvbWlkZGxld2FyZS50c1wiO1xuaW1wb3J0IHsgZWRnZUluc3RydW1lbnRhdGlvbk9uUmVxdWVzdEVycm9yIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvd2ViL2dsb2JhbHNcIjtcbmltcG9ydCB7IGlzTmV4dFJvdXRlckVycm9yIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvY29tcG9uZW50cy9pcy1uZXh0LXJvdXRlci1lcnJvclwiO1xuY29uc3QgbW9kID0ge1xuICAgIC4uLl9tb2Rcbn07XG5jb25zdCBoYW5kbGVyID0gbW9kLm1pZGRsZXdhcmUgfHwgbW9kLmRlZmF1bHQ7XG5jb25zdCBwYWdlID0gXCIvbWlkZGxld2FyZVwiO1xuaWYgKHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ldyBFcnJvcihgVGhlIE1pZGRsZXdhcmUgXCIke3BhZ2V9XCIgbXVzdCBleHBvcnQgYSBcXGBtaWRkbGV3YXJlXFxgIG9yIGEgXFxgZGVmYXVsdFxcYCBmdW5jdGlvbmApLCBcIl9fTkVYVF9FUlJPUl9DT0RFXCIsIHtcbiAgICAgICAgdmFsdWU6IFwiRTEyMFwiLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG59XG4vLyBNaWRkbGV3YXJlIHdpbGwgb25seSBzZW50IG91dCB0aGUgRmV0Y2hFdmVudCB0byBuZXh0IHNlcnZlcixcbi8vIHNvIGxvYWQgaW5zdHJ1bWVudGF0aW9uIG1vZHVsZSBoZXJlIGFuZCB0cmFjayB0aGUgZXJyb3IgaW5zaWRlIG1pZGRsZXdhcmUgbW9kdWxlLlxuZnVuY3Rpb24gZXJyb3JIYW5kbGVkSGFuZGxlcihmbikge1xuICAgIHJldHVybiBhc3luYyAoLi4uYXJncyk9PntcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBmbiguLi5hcmdzKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAvLyBJbiBkZXZlbG9wbWVudCwgZXJyb3IgdGhlIG5hdmlnYXRpb24gQVBJIHVzYWdlIGluIHJ1bnRpbWUsXG4gICAgICAgICAgICAvLyBzaW5jZSBpdCdzIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gbWlkZGxld2FyZSBhcyBpdCdzIG91dHNpZGUgb2YgcmVhY3QgY29tcG9uZW50IHRyZWUuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmIChpc05leHRSb3V0ZXJFcnJvcihlcnIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVyci5tZXNzYWdlID0gYE5leHQuanMgbmF2aWdhdGlvbiBBUEkgaXMgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiBNaWRkbGV3YXJlLmA7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXEgPSBhcmdzWzBdO1xuICAgICAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChyZXEudXJsKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0gdXJsLnBhdGhuYW1lICsgdXJsLnNlYXJjaDtcbiAgICAgICAgICAgIGF3YWl0IGVkZ2VJbnN0cnVtZW50YXRpb25PblJlcXVlc3RFcnJvcihlcnIsIHtcbiAgICAgICAgICAgICAgICBwYXRoOiByZXNvdXJjZSxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IHJlcS5tZXRob2QsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogT2JqZWN0LmZyb21FbnRyaWVzKHJlcS5oZWFkZXJzLmVudHJpZXMoKSlcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICByb3V0ZXJLaW5kOiAnUGFnZXMgUm91dGVyJyxcbiAgICAgICAgICAgICAgICByb3V0ZVBhdGg6ICcvbWlkZGxld2FyZScsXG4gICAgICAgICAgICAgICAgcm91dGVUeXBlOiAnbWlkZGxld2FyZScsXG4gICAgICAgICAgICAgICAgcmV2YWxpZGF0ZVJlYXNvbjogdW5kZWZpbmVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuSGFuZGxlcihvcHRzKSB7XG4gICAgcmV0dXJuIGFkYXB0ZXIoe1xuICAgICAgICAuLi5vcHRzLFxuICAgICAgICBwYWdlLFxuICAgICAgICBoYW5kbGVyOiBlcnJvckhhbmRsZWRIYW5kbGVyKGhhbmRsZXIpXG4gICAgfSk7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pZGRsZXdhcmUuanMubWFwXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/build/webpack/loaders/next-middleware-loader.js?absolutePagePath=C%3A%5Cgithub_clone%5Cjp1988chill%5Cnextjs-react-template%5Cmy-app%5Csrc%5Cmiddleware.ts&page=%2Fmiddleware&rootDir=C%3A%5Cgithub_clone%5Cjp1988chill%5Cnextjs-react-template%5Cmy-app&matchers=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(middleware)/./src/libs/Arcjet.ts":
/*!****************************!*\
  !*** ./src/libs/Arcjet.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _arcjet_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @arcjet/next */ \"(middleware)/./node_modules/@arcjet/next/index.js\");\n\n// Create a base Arcjet instance which can be imported and extended in each route.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_arcjet_next__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    // Get your site key from https://launch.arcjet.com/Q6eLbRE\n    // Use `process.env` instead of Env to reduce bundle size in middleware\n    key: process.env.ARCJET_KEY ?? '',\n    // Identify the user by their IP address\n    characteristics: [\n        'ip.src'\n    ],\n    rules: [\n        // Protect against common attacks with Arcjet Shield\n        (0,_arcjet_next__WEBPACK_IMPORTED_MODULE_0__.shield)({\n            mode: 'LIVE'\n        })\n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL2xpYnMvQXJjamV0LnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQThDO0FBRTlDLGtGQUFrRjtBQUNsRixpRUFBZUEsd0RBQU1BLENBQUM7SUFDcEIsMkRBQTJEO0lBQzNELHVFQUF1RTtJQUN2RUUsS0FBS0MsUUFBUUMsR0FBRyxDQUFDQyxVQUFVLElBQUk7SUFDL0Isd0NBQXdDO0lBQ3hDQyxpQkFBaUI7UUFBQztLQUFTO0lBQzNCQyxPQUFPO1FBQ0wsb0RBQW9EO1FBQ3BETixvREFBTUEsQ0FBQztZQUNMTyxNQUFNO1FBQ1I7S0FFRDtBQUNILEVBQUUsRUFBQyIsInNvdXJjZXMiOlsiQzpcXGdpdGh1Yl9jbG9uZVxcanAxOTg4Y2hpbGxcXG5leHRqcy1yZWFjdC10ZW1wbGF0ZVxcbXktYXBwXFxzcmNcXGxpYnNcXEFyY2pldC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXJjamV0LCB7IHNoaWVsZCB9IGZyb20gJ0BhcmNqZXQvbmV4dCc7XG5cbi8vIENyZWF0ZSBhIGJhc2UgQXJjamV0IGluc3RhbmNlIHdoaWNoIGNhbiBiZSBpbXBvcnRlZCBhbmQgZXh0ZW5kZWQgaW4gZWFjaCByb3V0ZS5cbmV4cG9ydCBkZWZhdWx0IGFyY2pldCh7XG4gIC8vIEdldCB5b3VyIHNpdGUga2V5IGZyb20gaHR0cHM6Ly9sYXVuY2guYXJjamV0LmNvbS9RNmVMYlJFXG4gIC8vIFVzZSBgcHJvY2Vzcy5lbnZgIGluc3RlYWQgb2YgRW52IHRvIHJlZHVjZSBidW5kbGUgc2l6ZSBpbiBtaWRkbGV3YXJlXG4gIGtleTogcHJvY2Vzcy5lbnYuQVJDSkVUX0tFWSA/PyAnJyxcbiAgLy8gSWRlbnRpZnkgdGhlIHVzZXIgYnkgdGhlaXIgSVAgYWRkcmVzc1xuICBjaGFyYWN0ZXJpc3RpY3M6IFsnaXAuc3JjJ10sXG4gIHJ1bGVzOiBbXG4gICAgLy8gUHJvdGVjdCBhZ2FpbnN0IGNvbW1vbiBhdHRhY2tzIHdpdGggQXJjamV0IFNoaWVsZFxuICAgIHNoaWVsZCh7XG4gICAgICBtb2RlOiAnTElWRScsIC8vIHdpbGwgYmxvY2sgcmVxdWVzdHMuIFVzZSBcIkRSWV9SVU5cIiB0byBsb2cgb25seVxuICAgIH0pLFxuICAgIC8vIE90aGVyIHJ1bGVzIGFyZSBhZGRlZCBpbiBkaWZmZXJlbnQgcm91dGVzXG4gIF0sXG59KTtcbiJdLCJuYW1lcyI6WyJhcmNqZXQiLCJzaGllbGQiLCJrZXkiLCJwcm9jZXNzIiwiZW52IiwiQVJDSkVUX0tFWSIsImNoYXJhY3RlcmlzdGljcyIsInJ1bGVzIiwibW9kZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/libs/Arcjet.ts\n");

/***/ }),

/***/ "(middleware)/./src/libs/I18nRouting.ts":
/*!*********************************!*\
  !*** ./src/libs/I18nRouting.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   routing: () => (/* binding */ routing)\n/* harmony export */ });\n/* harmony import */ var next_intl_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-intl/routing */ \"(middleware)/./node_modules/next-intl/dist/esm/development/routing/defineRouting.js\");\n/* harmony import */ var _utils_AppConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/AppConfig */ \"(middleware)/./src/utils/AppConfig.ts\");\n\n\nconst routing = (0,next_intl_routing__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    locales: _utils_AppConfig__WEBPACK_IMPORTED_MODULE_0__.AppConfig.locales,\n    localePrefix: _utils_AppConfig__WEBPACK_IMPORTED_MODULE_0__.AppConfig.localePrefix,\n    defaultLocale: _utils_AppConfig__WEBPACK_IMPORTED_MODULE_0__.AppConfig.defaultLocale\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL2xpYnMvSTE4blJvdXRpbmcudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBQ0o7QUFFdkMsTUFBTUUsVUFBVUYsNkRBQWFBLENBQUM7SUFDbkNHLFNBQVNGLHVEQUFTQSxDQUFDRSxPQUFPO0lBQzFCQyxjQUFjSCx1REFBU0EsQ0FBQ0csWUFBWTtJQUNwQ0MsZUFBZUosdURBQVNBLENBQUNJLGFBQWE7QUFDeEMsR0FBRyIsInNvdXJjZXMiOlsiQzpcXGdpdGh1Yl9jbG9uZVxcanAxOTg4Y2hpbGxcXG5leHRqcy1yZWFjdC10ZW1wbGF0ZVxcbXktYXBwXFxzcmNcXGxpYnNcXEkxOG5Sb3V0aW5nLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZmluZVJvdXRpbmcgfSBmcm9tICduZXh0LWludGwvcm91dGluZyc7XG5pbXBvcnQgeyBBcHBDb25maWcgfSBmcm9tICdAL3V0aWxzL0FwcENvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCByb3V0aW5nID0gZGVmaW5lUm91dGluZyh7XG4gIGxvY2FsZXM6IEFwcENvbmZpZy5sb2NhbGVzLFxuICBsb2NhbGVQcmVmaXg6IEFwcENvbmZpZy5sb2NhbGVQcmVmaXgsXG4gIGRlZmF1bHRMb2NhbGU6IEFwcENvbmZpZy5kZWZhdWx0TG9jYWxlLFxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lUm91dGluZyIsIkFwcENvbmZpZyIsInJvdXRpbmciLCJsb2NhbGVzIiwibG9jYWxlUHJlZml4IiwiZGVmYXVsdExvY2FsZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/libs/I18nRouting.ts\n");

/***/ }),

/***/ "(middleware)/./src/middleware.ts":
/*!***************************!*\
  !*** ./src/middleware.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var _arcjet_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @arcjet/next */ \"(middleware)/./node_modules/@arcjet/next/index.js\");\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(middleware)/./node_modules/@clerk/nextjs/dist/esm/server/routeMatcher.js\");\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(middleware)/./node_modules/@clerk/nextjs/dist/esm/server/clerkMiddleware.js\");\n/* harmony import */ var next_intl_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-intl/middleware */ \"(middleware)/./node_modules/next-intl/dist/esm/development/middleware/middleware.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _libs_Arcjet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/libs/Arcjet */ \"(middleware)/./src/libs/Arcjet.ts\");\n/* harmony import */ var _libs_I18nRouting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./libs/I18nRouting */ \"(middleware)/./src/libs/I18nRouting.ts\");\n\n\n\n\n\n\nconst handleI18nRouting = (0,next_intl_middleware__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_libs_I18nRouting__WEBPACK_IMPORTED_MODULE_3__.routing);\nconst isProtectedRoute = (0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_5__.createRouteMatcher)([\n    '/dashboard(.*)',\n    '/:locale/dashboard(.*)'\n]);\nconst isAuthPage = (0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_5__.createRouteMatcher)([\n    '/sign-in(.*)',\n    '/:locale/sign-in(.*)',\n    '/sign-up(.*)',\n    '/:locale/sign-up(.*)'\n]);\n// Improve security with Arcjet\nconst aj = _libs_Arcjet__WEBPACK_IMPORTED_MODULE_2__[\"default\"].withRule((0,_arcjet_next__WEBPACK_IMPORTED_MODULE_0__.detectBot)({\n    mode: 'LIVE',\n    // Block all bots except the following\n    allow: [\n        // See https://docs.arcjet.com/bot-protection/identifying-bots\n        'CATEGORY:SEARCH_ENGINE',\n        'CATEGORY:PREVIEW',\n        'CATEGORY:MONITOR'\n    ]\n}));\nasync function middleware(request, event) {\n    // Verify the request with Arcjet\n    // Use `process.env` instead of Env to reduce bundle size in middleware\n    if (process.env.ARCJET_KEY) {\n        const decision = await aj.protect(request);\n        if (decision.isDenied()) {\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                error: 'Forbidden'\n            }, {\n                status: 403\n            });\n        }\n    }\n    // Clerk keyless mode doesn't work with i18n, this is why we need to run the middleware conditionally\n    if (isAuthPage(request) || isProtectedRoute(request)) {\n        return (0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_6__.clerkMiddleware)(async (auth, req)=>{\n            if (isProtectedRoute(req)) {\n                const locale = req.nextUrl.pathname.match(/(\\/.*)\\/dashboard/)?.at(1) ?? '';\n                const signInUrl = new URL(`${locale}/sign-in`, req.url);\n                await auth.protect({\n                    unauthenticatedUrl: signInUrl.toString()\n                });\n            }\n            return handleI18nRouting(req);\n        })(request, event);\n    }\n    return handleI18nRouting(request);\n}\nconst config = {\n    // Match all pathnames except for\n    // - … if they start with `/_next`, `/_vercel` or `monitoring`\n    // - … the ones containing a dot (e.g. `favicon.ico`)\n    matcher: '/((?!_next|_vercel|monitoring|.*\\\\..*).*)',\n    runtime: 'nodejs'\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ3lDO0FBQ2tDO0FBQ3ZCO0FBQ1Q7QUFDUjtBQUNVO0FBRTdDLE1BQU1PLG9CQUFvQkosZ0VBQWdCQSxDQUFDRyxzREFBT0E7QUFFbEQsTUFBTUUsbUJBQW1CTix3RUFBa0JBLENBQUM7SUFDMUM7SUFDQTtDQUNEO0FBRUQsTUFBTU8sYUFBYVAsd0VBQWtCQSxDQUFDO0lBQ3BDO0lBQ0E7SUFDQTtJQUNBO0NBQ0Q7QUFFRCwrQkFBK0I7QUFDL0IsTUFBTVEsS0FBS0wsb0RBQU1BLENBQUNNLFFBQVEsQ0FDeEJYLHVEQUFTQSxDQUFDO0lBQ1JZLE1BQU07SUFDTixzQ0FBc0M7SUFDdENDLE9BQU87UUFDTCw4REFBOEQ7UUFDOUQ7UUFDQTtRQUNBO0tBQ0Q7QUFDSDtBQUdhLGVBQWVDLFdBQzVCQyxPQUFvQixFQUNwQkMsS0FBcUI7SUFFckIsaUNBQWlDO0lBQ2pDLHVFQUF1RTtJQUN2RSxJQUFJQyxRQUFRQyxHQUFHLENBQUNDLFVBQVUsRUFBRTtRQUMxQixNQUFNQyxXQUFXLE1BQU1WLEdBQUdXLE9BQU8sQ0FBQ047UUFFbEMsSUFBSUssU0FBU0UsUUFBUSxJQUFJO1lBQ3ZCLE9BQU9sQixxREFBWUEsQ0FBQ21CLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFZLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUNqRTtJQUNGO0lBRUEscUdBQXFHO0lBQ3JHLElBQ0VoQixXQUFXTSxZQUFZUCxpQkFBaUJPLFVBQ3hDO1FBQ0EsT0FBT2QscUVBQWVBLENBQUMsT0FBT3lCLE1BQU1DO1lBQ2xDLElBQUluQixpQkFBaUJtQixNQUFNO2dCQUN6QixNQUFNQyxTQUFTRCxJQUFJRSxPQUFPLENBQUNDLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDLHNCQUFzQkMsR0FBRyxNQUFNO2dCQUV6RSxNQUFNQyxZQUFZLElBQUlDLElBQUksR0FBR04sT0FBTyxRQUFRLENBQUMsRUFBRUQsSUFBSVEsR0FBRztnQkFFdEQsTUFBTVQsS0FBS0wsT0FBTyxDQUFDO29CQUNqQmUsb0JBQW9CSCxVQUFVSSxRQUFRO2dCQUN4QztZQUNGO1lBRUEsT0FBTzlCLGtCQUFrQm9CO1FBQzNCLEdBQUdaLFNBQVNDO0lBQ2Q7SUFFQSxPQUFPVCxrQkFBa0JRO0FBQzNCO0FBRU8sTUFBTXVCLFNBQVM7SUFDcEIsaUNBQWlDO0lBQ2pDLDhEQUE4RDtJQUM5RCxxREFBcUQ7SUFDckRDLFNBQVM7SUFDVEMsU0FBUztBQUNYLEVBQUUiLCJzb3VyY2VzIjpbIkM6XFxnaXRodWJfY2xvbmVcXGpwMTk4OGNoaWxsXFxuZXh0anMtcmVhY3QtdGVtcGxhdGVcXG15LWFwcFxcc3JjXFxtaWRkbGV3YXJlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEZldGNoRXZlbnQsIE5leHRSZXF1ZXN0IH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IHsgZGV0ZWN0Qm90IH0gZnJvbSAnQGFyY2pldC9uZXh0JztcbmltcG9ydCB7IGNsZXJrTWlkZGxld2FyZSwgY3JlYXRlUm91dGVNYXRjaGVyIH0gZnJvbSAnQGNsZXJrL25leHRqcy9zZXJ2ZXInO1xuaW1wb3J0IGNyZWF0ZU1pZGRsZXdhcmUgZnJvbSAnbmV4dC1pbnRsL21pZGRsZXdhcmUnO1xuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IGFyY2pldCBmcm9tICdAL2xpYnMvQXJjamV0JztcbmltcG9ydCB7IHJvdXRpbmcgfSBmcm9tICcuL2xpYnMvSTE4blJvdXRpbmcnO1xuXG5jb25zdCBoYW5kbGVJMThuUm91dGluZyA9IGNyZWF0ZU1pZGRsZXdhcmUocm91dGluZyk7XG5cbmNvbnN0IGlzUHJvdGVjdGVkUm91dGUgPSBjcmVhdGVSb3V0ZU1hdGNoZXIoW1xuICAnL2Rhc2hib2FyZCguKiknLFxuICAnLzpsb2NhbGUvZGFzaGJvYXJkKC4qKScsXG5dKTtcblxuY29uc3QgaXNBdXRoUGFnZSA9IGNyZWF0ZVJvdXRlTWF0Y2hlcihbXG4gICcvc2lnbi1pbiguKiknLFxuICAnLzpsb2NhbGUvc2lnbi1pbiguKiknLFxuICAnL3NpZ24tdXAoLiopJyxcbiAgJy86bG9jYWxlL3NpZ24tdXAoLiopJyxcbl0pO1xuXG4vLyBJbXByb3ZlIHNlY3VyaXR5IHdpdGggQXJjamV0XG5jb25zdCBhaiA9IGFyY2pldC53aXRoUnVsZShcbiAgZGV0ZWN0Qm90KHtcbiAgICBtb2RlOiAnTElWRScsXG4gICAgLy8gQmxvY2sgYWxsIGJvdHMgZXhjZXB0IHRoZSBmb2xsb3dpbmdcbiAgICBhbGxvdzogW1xuICAgICAgLy8gU2VlIGh0dHBzOi8vZG9jcy5hcmNqZXQuY29tL2JvdC1wcm90ZWN0aW9uL2lkZW50aWZ5aW5nLWJvdHNcbiAgICAgICdDQVRFR09SWTpTRUFSQ0hfRU5HSU5FJywgLy8gQWxsb3cgc2VhcmNoIGVuZ2luZXNcbiAgICAgICdDQVRFR09SWTpQUkVWSUVXJywgLy8gQWxsb3cgcHJldmlldyBsaW5rcyB0byBzaG93IE9HIGltYWdlc1xuICAgICAgJ0NBVEVHT1JZOk1PTklUT1InLCAvLyBBbGxvdyB1cHRpbWUgbW9uaXRvcmluZyBzZXJ2aWNlc1xuICAgIF0sXG4gIH0pLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gbWlkZGxld2FyZShcbiAgcmVxdWVzdDogTmV4dFJlcXVlc3QsXG4gIGV2ZW50OiBOZXh0RmV0Y2hFdmVudCxcbikge1xuICAvLyBWZXJpZnkgdGhlIHJlcXVlc3Qgd2l0aCBBcmNqZXRcbiAgLy8gVXNlIGBwcm9jZXNzLmVudmAgaW5zdGVhZCBvZiBFbnYgdG8gcmVkdWNlIGJ1bmRsZSBzaXplIGluIG1pZGRsZXdhcmVcbiAgaWYgKHByb2Nlc3MuZW52LkFSQ0pFVF9LRVkpIHtcbiAgICBjb25zdCBkZWNpc2lvbiA9IGF3YWl0IGFqLnByb3RlY3QocmVxdWVzdCk7XG5cbiAgICBpZiAoZGVjaXNpb24uaXNEZW5pZWQoKSkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdGb3JiaWRkZW4nIH0sIHsgc3RhdHVzOiA0MDMgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ2xlcmsga2V5bGVzcyBtb2RlIGRvZXNuJ3Qgd29yayB3aXRoIGkxOG4sIHRoaXMgaXMgd2h5IHdlIG5lZWQgdG8gcnVuIHRoZSBtaWRkbGV3YXJlIGNvbmRpdGlvbmFsbHlcbiAgaWYgKFxuICAgIGlzQXV0aFBhZ2UocmVxdWVzdCkgfHwgaXNQcm90ZWN0ZWRSb3V0ZShyZXF1ZXN0KVxuICApIHtcbiAgICByZXR1cm4gY2xlcmtNaWRkbGV3YXJlKGFzeW5jIChhdXRoLCByZXEpID0+IHtcbiAgICAgIGlmIChpc1Byb3RlY3RlZFJvdXRlKHJlcSkpIHtcbiAgICAgICAgY29uc3QgbG9jYWxlID0gcmVxLm5leHRVcmwucGF0aG5hbWUubWF0Y2goLyhcXC8uKilcXC9kYXNoYm9hcmQvKT8uYXQoMSkgPz8gJyc7XG5cbiAgICAgICAgY29uc3Qgc2lnbkluVXJsID0gbmV3IFVSTChgJHtsb2NhbGV9L3NpZ24taW5gLCByZXEudXJsKTtcblxuICAgICAgICBhd2FpdCBhdXRoLnByb3RlY3Qoe1xuICAgICAgICAgIHVuYXV0aGVudGljYXRlZFVybDogc2lnbkluVXJsLnRvU3RyaW5nKCksXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaGFuZGxlSTE4blJvdXRpbmcocmVxKTtcbiAgICB9KShyZXF1ZXN0LCBldmVudCk7XG4gIH1cblxuICByZXR1cm4gaGFuZGxlSTE4blJvdXRpbmcocmVxdWVzdCk7XG59XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIC8vIE1hdGNoIGFsbCBwYXRobmFtZXMgZXhjZXB0IGZvclxuICAvLyAtIOKApiBpZiB0aGV5IHN0YXJ0IHdpdGggYC9fbmV4dGAsIGAvX3ZlcmNlbGAgb3IgYG1vbml0b3JpbmdgXG4gIC8vIC0g4oCmIHRoZSBvbmVzIGNvbnRhaW5pbmcgYSBkb3QgKGUuZy4gYGZhdmljb24uaWNvYClcbiAgbWF0Y2hlcjogJy8oKD8hX25leHR8X3ZlcmNlbHxtb25pdG9yaW5nfC4qXFxcXC4uKikuKiknLFxuICBydW50aW1lOiAnbm9kZWpzJyxcbn07XG4iXSwibmFtZXMiOlsiZGV0ZWN0Qm90IiwiY2xlcmtNaWRkbGV3YXJlIiwiY3JlYXRlUm91dGVNYXRjaGVyIiwiY3JlYXRlTWlkZGxld2FyZSIsIk5leHRSZXNwb25zZSIsImFyY2pldCIsInJvdXRpbmciLCJoYW5kbGVJMThuUm91dGluZyIsImlzUHJvdGVjdGVkUm91dGUiLCJpc0F1dGhQYWdlIiwiYWoiLCJ3aXRoUnVsZSIsIm1vZGUiLCJhbGxvdyIsIm1pZGRsZXdhcmUiLCJyZXF1ZXN0IiwiZXZlbnQiLCJwcm9jZXNzIiwiZW52IiwiQVJDSkVUX0tFWSIsImRlY2lzaW9uIiwicHJvdGVjdCIsImlzRGVuaWVkIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwiYXV0aCIsInJlcSIsImxvY2FsZSIsIm5leHRVcmwiLCJwYXRobmFtZSIsIm1hdGNoIiwiYXQiLCJzaWduSW5VcmwiLCJVUkwiLCJ1cmwiLCJ1bmF1dGhlbnRpY2F0ZWRVcmwiLCJ0b1N0cmluZyIsImNvbmZpZyIsIm1hdGNoZXIiLCJydW50aW1lIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ }),

/***/ "(middleware)/./src/utils/AppConfig.ts":
/*!********************************!*\
  !*** ./src/utils/AppConfig.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppConfig: () => (/* binding */ AppConfig),\n/* harmony export */   ClerkLocalizations: () => (/* binding */ ClerkLocalizations)\n/* harmony export */ });\n/* harmony import */ var _clerk_localizations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @clerk/localizations */ \"(middleware)/./node_modules/@clerk/localizations/dist/index.mjs\");\n\nconst localePrefix = 'as-needed';\n// FIXME: Update this configuration file based on your project information\nconst AppConfig = {\n    name: 'Nextjs Starter',\n    locales: [\n        'en',\n        'fr'\n    ],\n    defaultLocale: 'en',\n    localePrefix\n};\nconst supportedLocales = {\n    en: _clerk_localizations__WEBPACK_IMPORTED_MODULE_0__.enUS,\n    fr: _clerk_localizations__WEBPACK_IMPORTED_MODULE_0__.frFR\n};\nconst ClerkLocalizations = {\n    defaultLocale: _clerk_localizations__WEBPACK_IMPORTED_MODULE_0__.enUS,\n    supportedLocales\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL3V0aWxzL0FwcENvbmZpZy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFa0Q7QUFFbEQsTUFBTUUsZUFBaUM7QUFFdkMsMEVBQTBFO0FBQ25FLE1BQU1DLFlBQVk7SUFDdkJDLE1BQU07SUFDTkMsU0FBUztRQUFDO1FBQU07S0FBSztJQUNyQkMsZUFBZTtJQUNmSjtBQUNGLEVBQUU7QUFFRixNQUFNSyxtQkFBeUQ7SUFDN0RDLElBQUlSLHNEQUFJQTtJQUNSUyxJQUFJUixzREFBSUE7QUFDVjtBQUVPLE1BQU1TLHFCQUFxQjtJQUNoQ0osZUFBZU4sc0RBQUlBO0lBQ25CTztBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIkM6XFxnaXRodWJfY2xvbmVcXGpwMTk4OGNoaWxsXFxuZXh0anMtcmVhY3QtdGVtcGxhdGVcXG15LWFwcFxcc3JjXFx1dGlsc1xcQXBwQ29uZmlnLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTG9jYWxpemF0aW9uUmVzb3VyY2UgfSBmcm9tICdAY2xlcmsvdHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBMb2NhbGVQcmVmaXhNb2RlIH0gZnJvbSAnbmV4dC1pbnRsL3JvdXRpbmcnO1xuaW1wb3J0IHsgZW5VUywgZnJGUiB9IGZyb20gJ0BjbGVyay9sb2NhbGl6YXRpb25zJztcblxuY29uc3QgbG9jYWxlUHJlZml4OiBMb2NhbGVQcmVmaXhNb2RlID0gJ2FzLW5lZWRlZCc7XG5cbi8vIEZJWE1FOiBVcGRhdGUgdGhpcyBjb25maWd1cmF0aW9uIGZpbGUgYmFzZWQgb24geW91ciBwcm9qZWN0IGluZm9ybWF0aW9uXG5leHBvcnQgY29uc3QgQXBwQ29uZmlnID0ge1xuICBuYW1lOiAnTmV4dGpzIFN0YXJ0ZXInLFxuICBsb2NhbGVzOiBbJ2VuJywgJ2ZyJ10sXG4gIGRlZmF1bHRMb2NhbGU6ICdlbicsXG4gIGxvY2FsZVByZWZpeCxcbn07XG5cbmNvbnN0IHN1cHBvcnRlZExvY2FsZXM6IFJlY29yZDxzdHJpbmcsIExvY2FsaXphdGlvblJlc291cmNlPiA9IHtcbiAgZW46IGVuVVMsXG4gIGZyOiBmckZSLFxufTtcblxuZXhwb3J0IGNvbnN0IENsZXJrTG9jYWxpemF0aW9ucyA9IHtcbiAgZGVmYXVsdExvY2FsZTogZW5VUyxcbiAgc3VwcG9ydGVkTG9jYWxlcyxcbn07XG4iXSwibmFtZXMiOlsiZW5VUyIsImZyRlIiLCJsb2NhbGVQcmVmaXgiLCJBcHBDb25maWciLCJuYW1lIiwibG9jYWxlcyIsImRlZmF1bHRMb2NhbGUiLCJzdXBwb3J0ZWRMb2NhbGVzIiwiZW4iLCJmciIsIkNsZXJrTG9jYWxpemF0aW9ucyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/utils/AppConfig.ts\n");

/***/ }),

/***/ "../app-render/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/server/app-render/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/action-async-storage.external.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "../lib/cache-handlers/default.external":
/*!**************************************************************************!*\
  !*** external "next/dist/server/lib/cache-handlers/default.external.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/lib/cache-handlers/default.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "async_hooks":
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("async_hooks");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "console":
/*!**************************!*\
  !*** external "console" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("console");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "diagnostics_channel":
/*!**************************************!*\
  !*** external "diagnostics_channel" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("diagnostics_channel");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "http2":
/*!************************!*\
  !*** external "http2" ***!
  \************************/
/***/ ((module) => {

module.exports = require("http2");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "node:async_hooks":
/*!***********************************!*\
  !*** external "node:async_hooks" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("node:async_hooks");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "node:events":
/*!******************************!*\
  !*** external "node:events" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:events");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ "perf_hooks":
/*!*****************************!*\
  !*** external "perf_hooks" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("perf_hooks");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "stream/web":
/*!*****************************!*\
  !*** external "stream/web" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("stream/web");

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "util/types":
/*!*****************************!*\
  !*** external "util/types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("util/types");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("worker_threads");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@clerk","vendor-chunks/next","vendor-chunks/@opentelemetry","vendor-chunks/next-intl","vendor-chunks/tslib","vendor-chunks/cookie","vendor-chunks/undici","vendor-chunks/@connectrpc","vendor-chunks/@bufbuild","vendor-chunks/@arcjet","vendor-chunks/@fastify","vendor-chunks/typeid-js","vendor-chunks/negotiator","vendor-chunks/arcjet"], () => (__webpack_exec__("(middleware)/./node_modules/next/dist/build/webpack/loaders/next-middleware-loader.js?absolutePagePath=C%3A%5Cgithub_clone%5Cjp1988chill%5Cnextjs-react-template%5Cmy-app%5Csrc%5Cmiddleware.ts&page=%2Fmiddleware&rootDir=C%3A%5Cgithub_clone%5Cjp1988chill%5Cnextjs-react-template%5Cmy-app&matchers=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();