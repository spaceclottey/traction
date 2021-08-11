(function() {
var exports = {};
exports.id = "pages/api/updateManyTaps";
exports.ids = ["pages/api/updateManyTaps"];
exports.modules = {

/***/ "./pages/api/updateManyTaps.js":
/*!*************************************!*\
  !*** ./pages/api/updateManyTaps.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);


const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const day = req.body;
  const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.getSession)({
    req
  });
  const updatedTaps = await prisma.tap.updateMany({
    where: {
      user: session.user.name,
      NOT: {
        lastRated: day.curDay
      }
    },
    data: {
      rated: "false"
    }
  });
  await prisma.$disconnect();
  res.json(updatedTaps);
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/updateManyTaps.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmFjdGlvbi8uL3BhZ2VzL2FwaS91cGRhdGVNYW55VGFwcy5qcyIsIndlYnBhY2s6Ly90cmFjdGlvbi9leHRlcm5hbCBcIkBwcmlzbWEvY2xpZW50XCIiLCJ3ZWJwYWNrOi8vdHJhY3Rpb24vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCIiXSwibmFtZXMiOlsicHJpc21hIiwiUHJpc21hQ2xpZW50IiwicmVxIiwicmVzIiwiZGF5IiwiYm9keSIsInNlc3Npb24iLCJnZXRTZXNzaW9uIiwidXBkYXRlZFRhcHMiLCJ0YXAiLCJ1cGRhdGVNYW55Iiwid2hlcmUiLCJ1c2VyIiwibmFtZSIsIk5PVCIsImxhc3RSYXRlZCIsImN1ckRheSIsImRhdGEiLCJyYXRlZCIsIiRkaXNjb25uZWN0IiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLE1BQU0sR0FBRyxJQUFJQyx3REFBSixFQUFmO0FBRUEsK0RBQWUsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2pDLFFBQU1DLEdBQUcsR0FBR0YsR0FBRyxDQUFDRyxJQUFoQjtBQUVBLFFBQU1DLE9BQU8sR0FBRyxNQUFNQyw0REFBVSxDQUFDO0FBQUVMO0FBQUYsR0FBRCxDQUFoQztBQUVBLFFBQU1NLFdBQVcsR0FBRyxNQUFNUixNQUFNLENBQUNTLEdBQVAsQ0FBV0MsVUFBWCxDQUFzQjtBQUM5Q0MsU0FBSyxFQUFFO0FBQ0xDLFVBQUksRUFBRU4sT0FBTyxDQUFDTSxJQUFSLENBQWFDLElBRGQ7QUFHTEMsU0FBRyxFQUFFO0FBQ0hDLGlCQUFTLEVBQUVYLEdBQUcsQ0FBQ1k7QUFEWjtBQUhBLEtBRHVDO0FBUzlDQyxRQUFJLEVBQUU7QUFDSkMsV0FBSyxFQUFFO0FBREg7QUFUd0MsR0FBdEIsQ0FBMUI7QUFjQSxRQUFNbEIsTUFBTSxDQUFDbUIsV0FBUCxFQUFOO0FBRUFoQixLQUFHLENBQUNpQixJQUFKLENBQVNaLFdBQVQ7QUFDRCxDQXRCRCxFOzs7Ozs7Ozs7OztBQ0xBLDRDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2FwaS91cGRhdGVNYW55VGFwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IGRheSA9IHJlcS5ib2R5O1xyXG5cclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcSB9KTtcclxuXHJcbiAgY29uc3QgdXBkYXRlZFRhcHMgPSBhd2FpdCBwcmlzbWEudGFwLnVwZGF0ZU1hbnkoe1xyXG4gICAgd2hlcmU6IHtcclxuICAgICAgdXNlcjogc2Vzc2lvbi51c2VyLm5hbWUsXHJcblxyXG4gICAgICBOT1Q6IHtcclxuICAgICAgICBsYXN0UmF0ZWQ6IGRheS5jdXJEYXksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIGRhdGE6IHtcclxuICAgICAgcmF0ZWQ6IFwiZmFsc2VcIixcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xyXG5cclxuICByZXMuanNvbih1cGRhdGVkVGFwcyk7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvY2xpZW50XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9