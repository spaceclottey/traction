(function() {
var exports = {};
exports.id = "pages/api/createTap";
exports.ids = ["pages/api/createTap"];
exports.modules = {

/***/ "./pages/api/createTap.js":
/*!********************************!*\
  !*** ./pages/api/createTap.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);



const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.getSession)({
    req
  });
  const data = JSON.parse(req.body);
  data.user = session.user.name;
  const createdTap = await prisma.tap.create({
    data
  });
  await prisma.$disconnect();
  res.json(createdTap);
});

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@prisma/client");;

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/createTap.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmFjdGlvbi8uL3BhZ2VzL2FwaS9jcmVhdGVUYXAuanMiLCJ3ZWJwYWNrOi8vdHJhY3Rpb24vZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiIiwid2VicGFjazovL3RyYWN0aW9uL2V4dGVybmFsIFwibmV4dC1hdXRoL2NsaWVudFwiIl0sIm5hbWVzIjpbInByaXNtYSIsIlByaXNtYUNsaWVudCIsInJlcSIsInJlcyIsInNlc3Npb24iLCJnZXRTZXNzaW9uIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImJvZHkiLCJ1c2VyIiwibmFtZSIsImNyZWF0ZWRUYXAiLCJ0YXAiLCJjcmVhdGUiLCIkZGlzY29ubmVjdCIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLE1BQU0sR0FBRyxJQUFJQyx3REFBSixFQUFmO0FBRUEsK0RBQWUsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQy9CLFFBQU1DLE9BQU8sR0FBRyxNQUFNQyw0REFBVSxDQUFDO0FBQUVIO0FBQUYsR0FBRCxDQUFoQztBQUVBLFFBQU1JLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdOLEdBQUcsQ0FBQ08sSUFBZixDQUFiO0FBRUFILE1BQUksQ0FBQ0ksSUFBTCxHQUFZTixPQUFPLENBQUNNLElBQVIsQ0FBYUMsSUFBekI7QUFFQSxRQUFNQyxVQUFVLEdBQUcsTUFBTVosTUFBTSxDQUFDYSxHQUFQLENBQVdDLE1BQVgsQ0FBa0I7QUFDdkNSO0FBRHVDLEdBQWxCLENBQXpCO0FBSUEsUUFBTU4sTUFBTSxDQUFDZSxXQUFQLEVBQU47QUFFQVosS0FBRyxDQUFDYSxJQUFKLENBQVNKLFVBQVQ7QUFDSCxDQWRELEU7Ozs7Ozs7Ozs7O0FDTkEsNEM7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvYXBpL2NyZWF0ZVRhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UHJpc21hQ2xpZW50fSBmcm9tICdAcHJpc21hL2NsaWVudCdcclxuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCdcclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCJcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oeyByZXEgfSlcclxuXHJcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXEuYm9keSk7XHJcblxyXG4gICAgZGF0YS51c2VyID0gc2Vzc2lvbi51c2VyLm5hbWVcclxuICAgIFxyXG4gICAgY29uc3QgY3JlYXRlZFRhcCA9IGF3YWl0IHByaXNtYS50YXAuY3JlYXRlKHtcclxuICAgICAgICBkYXRhXHJcbiAgICB9KVxyXG5cclxuICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpXHJcblxyXG4gICAgcmVzLmpzb24oY3JlYXRlZFRhcClcclxufVxyXG5cclxuICAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==