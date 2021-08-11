(function() {
var exports = {};
exports.id = "pages/api/updateTap";
exports.ids = ["pages/api/updateTap"];
exports.modules = {

/***/ "./pages/api/updateTap.js":
/*!********************************!*\
  !*** ./pages/api/updateTap.js ***!
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
  const data = JSON.parse(req.body);
  const updatedTap = await prisma.tap.update({
    where: {
      id: data.id
    },
    data: {
      rated: data.rated,
      trigger: data.trigger,
      action: data.action,
      lastRated: data.lastRated
    }
  });
  await prisma.$disconnect();
  res.json(updatedTap);
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/updateTap.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmFjdGlvbi8uL3BhZ2VzL2FwaS91cGRhdGVUYXAuanMiLCJ3ZWJwYWNrOi8vdHJhY3Rpb24vZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiIiwid2VicGFjazovL3RyYWN0aW9uL2V4dGVybmFsIFwibmV4dC1hdXRoL2NsaWVudFwiIl0sIm5hbWVzIjpbInByaXNtYSIsIlByaXNtYUNsaWVudCIsInJlcSIsInJlcyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJib2R5IiwidXBkYXRlZFRhcCIsInRhcCIsInVwZGF0ZSIsIndoZXJlIiwiaWQiLCJyYXRlZCIsInRyaWdnZXIiLCJhY3Rpb24iLCJsYXN0UmF0ZWQiLCIkZGlzY29ubmVjdCIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLE1BQU0sR0FBRyxJQUFJQyx3REFBSixFQUFmO0FBRUEsK0RBQWUsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2pDLFFBQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdKLEdBQUcsQ0FBQ0ssSUFBZixDQUFiO0FBRUEsUUFBTUMsVUFBVSxHQUFHLE1BQU1SLE1BQU0sQ0FBQ1MsR0FBUCxDQUFXQyxNQUFYLENBQWtCO0FBQ3pDQyxTQUFLLEVBQUU7QUFDTEMsUUFBRSxFQUFFUixJQUFJLENBQUNRO0FBREosS0FEa0M7QUFLekNSLFFBQUksRUFBRTtBQUNKUyxXQUFLLEVBQUVULElBQUksQ0FBQ1MsS0FEUjtBQUVKQyxhQUFPLEVBQUVWLElBQUksQ0FBQ1UsT0FGVjtBQUdKQyxZQUFNLEVBQUVYLElBQUksQ0FBQ1csTUFIVDtBQUlKQyxlQUFTLEVBQUVaLElBQUksQ0FBQ1k7QUFKWjtBQUxtQyxHQUFsQixDQUF6QjtBQWFBLFFBQU1oQixNQUFNLENBQUNpQixXQUFQLEVBQU47QUFFQWQsS0FBRyxDQUFDZSxJQUFKLENBQVNWLFVBQVQ7QUFDRCxDQW5CRCxFOzs7Ozs7Ozs7OztBQ05BLDRDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2FwaS91cGRhdGVUYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XHJcblxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXEuYm9keSk7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZWRUYXAgPSBhd2FpdCBwcmlzbWEudGFwLnVwZGF0ZSh7XHJcbiAgICB3aGVyZToge1xyXG4gICAgICBpZDogZGF0YS5pZCxcclxuICAgIH0sXHJcblxyXG4gICAgZGF0YToge1xyXG4gICAgICByYXRlZDogZGF0YS5yYXRlZCxcclxuICAgICAgdHJpZ2dlcjogZGF0YS50cmlnZ2VyLFxyXG4gICAgICBhY3Rpb246IGRhdGEuYWN0aW9uLFxyXG4gICAgICBsYXN0UmF0ZWQ6IGRhdGEubGFzdFJhdGVkLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XHJcblxyXG4gIHJlcy5qc29uKHVwZGF0ZWRUYXApO1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==