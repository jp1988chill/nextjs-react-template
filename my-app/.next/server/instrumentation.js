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
exports.id = "instrumentation";
exports.ids = ["instrumentation"];
exports.modules = {

/***/ "(instrument)/./node_modules/@opentelemetry/instrumentation/build/esm/platform/node sync recursive":
/*!***********************************************************************************!*\
  !*** ./node_modules/@opentelemetry/instrumentation/build/esm/platform/node/ sync ***!
  \***********************************************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "(instrument)/./node_modules/@opentelemetry/instrumentation/build/esm/platform/node sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "(instrument)/./src/instrumentation.ts":
/*!********************************!*\
  !*** ./src/instrumentation.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   onRequestError: () => (/* binding */ onRequestError),\n/* harmony export */   register: () => (/* binding */ register)\n/* harmony export */ });\n/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/nextjs */ \"(instrument)/./node_modules/@sentry/nextjs/build/cjs/index.server.js\");\n/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__);\n\nconst sentryOptions = {\n    // Sentry DSN\n    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,\n    // Enable Spotlight in development\n    spotlight: \"development\" === 'development',\n    integrations: [\n        _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.consoleLoggingIntegration()\n    ],\n    // Adds request headers and IP for users, for more info visit\n    sendDefaultPii: true,\n    // Adjust this value in production, or use tracesSampler for greater control\n    tracesSampleRate: 1,\n    // Enable logs to be sent to Sentry\n    _experiments: {\n        enableLogs: true\n    },\n    // Setting this option to true will print useful information to the console while you're setting up Sentry.\n    debug: false\n};\nasync function register() {\n    if (true) {\n        // Run DB migrations\n        await Promise.all(/*! import() */[__webpack_require__.e(\"vendor-chunks/zod\"), __webpack_require__.e(\"vendor-chunks/@t3-oss\"), __webpack_require__.e(\"vendor-chunks/drizzle-orm\"), __webpack_require__.e(\"_instrument_src_utils_DBMigration_ts\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./utils/DBMigration */ \"(instrument)/./src/utils/DBMigration.ts\"));\n    }\n    if (false) {}\n}\nconst onRequestError = _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.captureRequestError;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGluc3RydW1lbnQpLy4vc3JjL2luc3RydW1lbnRhdGlvbi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXlDO0FBRXpDLE1BQU1DLGdCQUF5RDtJQUM3RCxhQUFhO0lBQ2JDLEtBQUtDLFFBQVFDLEdBQUcsQ0FBQ0Msc0JBQXNCO0lBRXZDLGtDQUFrQztJQUNsQ0MsV0FBV0gsa0JBQXlCO0lBRXBDSSxjQUFjO1FBQ1pQLHFFQUFnQztLQUNqQztJQUVELDZEQUE2RDtJQUM3RFMsZ0JBQWdCO0lBRWhCLDRFQUE0RTtJQUM1RUMsa0JBQWtCO0lBRWxCLG1DQUFtQztJQUNuQ0MsY0FBYztRQUFFQyxZQUFZO0lBQUs7SUFFakMsMkdBQTJHO0lBQzNHQyxPQUFPO0FBQ1Q7QUFFTyxlQUFlQztJQUNwQixJQUFJWCxJQUFxQyxFQUFFO1FBQ3pDLG9CQUFvQjtRQUNwQixNQUFNLHFXQUE2QjtJQUNyQztJQUVBLElBQUksS0FBd0MsRUFBRSxFQVU3QztBQUNIO0FBRU8sTUFBTWUsaUJBQWlCbEIsK0RBQTBCLENBQUMiLCJzb3VyY2VzIjpbIkM6XFxnaXRodWJfY2xvbmVcXGpwMTk4OGNoaWxsXFxuZXh0anMtcmVhY3QtdGVtcGxhdGVcXG15LWFwcFxcc3JjXFxpbnN0cnVtZW50YXRpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgU2VudHJ5IGZyb20gJ0BzZW50cnkvbmV4dGpzJztcblxuY29uc3Qgc2VudHJ5T3B0aW9uczogU2VudHJ5Lk5vZGVPcHRpb25zIHwgU2VudHJ5LkVkZ2VPcHRpb25zID0ge1xuICAvLyBTZW50cnkgRFNOXG4gIGRzbjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0VOVFJZX0RTTixcblxuICAvLyBFbmFibGUgU3BvdGxpZ2h0IGluIGRldmVsb3BtZW50XG4gIHNwb3RsaWdodDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcsXG5cbiAgaW50ZWdyYXRpb25zOiBbXG4gICAgU2VudHJ5LmNvbnNvbGVMb2dnaW5nSW50ZWdyYXRpb24oKSxcbiAgXSxcblxuICAvLyBBZGRzIHJlcXVlc3QgaGVhZGVycyBhbmQgSVAgZm9yIHVzZXJzLCBmb3IgbW9yZSBpbmZvIHZpc2l0XG4gIHNlbmREZWZhdWx0UGlpOiB0cnVlLFxuXG4gIC8vIEFkanVzdCB0aGlzIHZhbHVlIGluIHByb2R1Y3Rpb24sIG9yIHVzZSB0cmFjZXNTYW1wbGVyIGZvciBncmVhdGVyIGNvbnRyb2xcbiAgdHJhY2VzU2FtcGxlUmF0ZTogMSxcblxuICAvLyBFbmFibGUgbG9ncyB0byBiZSBzZW50IHRvIFNlbnRyeVxuICBfZXhwZXJpbWVudHM6IHsgZW5hYmxlTG9nczogdHJ1ZSB9LFxuXG4gIC8vIFNldHRpbmcgdGhpcyBvcHRpb24gdG8gdHJ1ZSB3aWxsIHByaW50IHVzZWZ1bCBpbmZvcm1hdGlvbiB0byB0aGUgY29uc29sZSB3aGlsZSB5b3UncmUgc2V0dGluZyB1cCBTZW50cnkuXG4gIGRlYnVnOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3RlcigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5FWFRfUlVOVElNRSA9PT0gJ25vZGVqcycpIHtcbiAgICAvLyBSdW4gREIgbWlncmF0aW9uc1xuICAgIGF3YWl0IGltcG9ydCgnLi91dGlscy9EQk1pZ3JhdGlvbicpO1xuICB9XG5cbiAgaWYgKCFwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TRU5UUllfRElTQUJMRUQpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTkVYVF9SVU5USU1FID09PSAnbm9kZWpzJykge1xuICAgICAgLy8gTm9kZS5qcyBTZW50cnkgY29uZmlndXJhdGlvblxuICAgICAgU2VudHJ5LmluaXQoc2VudHJ5T3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5FWFRfUlVOVElNRSA9PT0gJ2VkZ2UnKSB7XG4gICAgICAvLyBFZGdlIFNlbnRyeSBjb25maWd1cmF0aW9uXG4gICAgICBTZW50cnkuaW5pdChzZW50cnlPcHRpb25zKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG9uUmVxdWVzdEVycm9yID0gU2VudHJ5LmNhcHR1cmVSZXF1ZXN0RXJyb3I7XG4iXSwibmFtZXMiOlsiU2VudHJ5Iiwic2VudHJ5T3B0aW9ucyIsImRzbiIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TRU5UUllfRFNOIiwic3BvdGxpZ2h0IiwiaW50ZWdyYXRpb25zIiwiY29uc29sZUxvZ2dpbmdJbnRlZ3JhdGlvbiIsInNlbmREZWZhdWx0UGlpIiwidHJhY2VzU2FtcGxlUmF0ZSIsIl9leHBlcmltZW50cyIsImVuYWJsZUxvZ3MiLCJkZWJ1ZyIsInJlZ2lzdGVyIiwiTkVYVF9SVU5USU1FIiwiTkVYVF9QVUJMSUNfU0VOVFJZX0RJU0FCTEVEIiwiaW5pdCIsIm9uUmVxdWVzdEVycm9yIiwiY2FwdHVyZVJlcXVlc3RFcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(instrument)/./src/instrumentation.ts\n");

/***/ }),

/***/ "async_hooks":
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("async_hooks");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "diagnostics_channel":
/*!**************************************!*\
  !*** external "diagnostics_channel" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("diagnostics_channel");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "import-in-the-middle":
/*!***************************************!*\
  !*** external "import-in-the-middle" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("import-in-the-middle");

/***/ }),

/***/ "module":
/*!*************************!*\
  !*** external "module" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("module");

/***/ }),

/***/ "node:child_process":
/*!*************************************!*\
  !*** external "node:child_process" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:child_process");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

/***/ }),

/***/ "node:diagnostics_channel":
/*!*******************************************!*\
  !*** external "node:diagnostics_channel" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:diagnostics_channel");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:fs");

/***/ }),

/***/ "node:http":
/*!****************************!*\
  !*** external "node:http" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:http");

/***/ }),

/***/ "node:https":
/*!*****************************!*\
  !*** external "node:https" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:https");

/***/ }),

/***/ "node:inspector":
/*!*********************************!*\
  !*** external "node:inspector" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:inspector");

/***/ }),

/***/ "node:net":
/*!***************************!*\
  !*** external "node:net" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:net");

/***/ }),

/***/ "node:os":
/*!**************************!*\
  !*** external "node:os" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:os");

/***/ }),

/***/ "node:path":
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:path");

/***/ }),

/***/ "node:readline":
/*!********************************!*\
  !*** external "node:readline" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:readline");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream");

/***/ }),

/***/ "node:tls":
/*!***************************!*\
  !*** external "node:tls" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:tls");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:util");

/***/ }),

/***/ "node:worker_threads":
/*!**************************************!*\
  !*** external "node:worker_threads" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:worker_threads");

/***/ }),

/***/ "node:zlib":
/*!****************************!*\
  !*** external "node:zlib" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:zlib");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "perf_hooks":
/*!*****************************!*\
  !*** external "perf_hooks" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("perf_hooks");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = import("pg");;

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ "require-in-the-middle":
/*!****************************************!*\
  !*** external "require-in-the-middle" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("require-in-the-middle");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("worker_threads");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@opentelemetry","vendor-chunks/@sentry","vendor-chunks/minimatch","vendor-chunks/semver","vendor-chunks/resolve","vendor-chunks/@prisma","vendor-chunks/is-core-module","vendor-chunks/forwarded-parse","vendor-chunks/brace-expansion","vendor-chunks/stacktrace-parser","vendor-chunks/shimmer","vendor-chunks/function-bind","vendor-chunks/path-parse","vendor-chunks/balanced-match","vendor-chunks/@swc","vendor-chunks/has-flag","vendor-chunks/hasown"], () => (__webpack_exec__("(instrument)/./src/instrumentation.ts")));
module.exports = __webpack_exports__;

})();