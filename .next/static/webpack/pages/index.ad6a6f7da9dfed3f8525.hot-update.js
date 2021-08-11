self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/dist/client/index.js");
/* harmony import */ var _components_tapwidget_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tapwidget.js */ "./pages/components/tapwidget.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\space\\OneDrive\\Documents\\Code\\Projects\\traction\\pages\\index.js",
    _s = $RefreshSig$();






var __N_SSP = true;
function Home(_ref) {
  _s();

  var _this = this;

  var tapsDB = _ref.tapsDB;

  var _useSession = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_8__.useSession)(),
      _useSession2 = (0,C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.default)(_useSession, 2),
      session = _useSession2[0],
      loading = _useSession2[1];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(""),
      newTrigger = _useState[0],
      setNewTrigger = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(""),
      newAction = _useState2[0],
      setNewAction = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(tapsDB),
      taps = _useState3[0],
      setTaps = _useState3[1];

  var curDay = Math.floor(Date.now() / (1000 * 60 * 60 * 24)); // full days since jan 1st 1970

  var tempArr = (0,C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(taps);

  newDay();

  function newDay() {
    return _newDay.apply(this, arguments);
  }

  function _newDay() {
    _newDay = (0,C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var response;
      return C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("/api/updateManyTaps", {
                method: "POST",
                body: {
                  curDay: curDay
                }
              });

            case 2:
              response = _context.sent;

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _newDay.apply(this, arguments);
  }

  function saveNewTap() {
    return _saveNewTap.apply(this, arguments);
  }

  function _saveNewTap() {
    _saveNewTap = (0,C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      var newTap, newArr, response;
      return C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              newTap = {
                trigger: newTrigger,
                action: newAction,
                rated: "false"
              };
              newArr = (0,C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(taps);
              newArr.unshift(newTap);
              setTaps(newArr);
              _context2.next = 6;
              return fetch("/api/createTap", {
                method: "POST",
                body: JSON.stringify(newTap)
              });

            case 6:
              response = _context2.sent;
              setNewTrigger("");
              setNewAction("");
              console.log(response.json());
              _context2.next = 12;
              return response;

            case 12:
              return _context2.abrupt("return", _context2.sent);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _saveNewTap.apply(this, arguments);
  }

  function rate(_x, _x2) {
    return _rate.apply(this, arguments);
  }

  function _rate() {
    _rate = (0,C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(i, rating) {
      var newArr, response;
      return C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              newArr = (0,C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(taps);
              newArr[i].streak = rating == "done" ? newArr[i].rated !== "done" // was the rating already 'done'?
              ? newArr[i].streak + 1 : newArr[i].streak : 0;
              newArr[i].rated = rating;
              newArr[i].lastRated = curDay;
              setTaps(newArr);
              _context3.next = 7;
              return fetch("/api/updateTap", {
                method: "POST",
                body: JSON.stringify(taps[i])
              });

            case 7:
              response = _context3.sent;
              console.log(response.json());
              _context3.next = 11;
              return response;

            case 11:
              return _context3.abrupt("return", _context3.sent);

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _rate.apply(this, arguments);
  }

  function deleteTap(_x3) {
    return _deleteTap.apply(this, arguments);
  }

  function _deleteTap() {
    _deleteTap = (0,C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(i) {
      var response, newArr;
      return C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              console.log("deleting");
              console.log(taps[i]);
              _context4.next = 4;
              return fetch("/api/deleteTap", {
                method: "POST",
                body: JSON.stringify(taps[i])
              });

            case 4:
              response = _context4.sent;
              newArr = (0,C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(taps);
              newArr.splice(i, 1);
              setTaps(newArr);
              console.log(response.json());
              _context4.next = 11;
              return response;

            case 11:
              return _context4.abrupt("return", _context4.sent);

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _deleteTap.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "bg-purple-200 text-center min-h-screen w-[60%] mx-auto text-center ",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
      className: "text-6xl py-7 font-serif",
      children: " Traction "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
      children: [" Since ", curDay, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, this), !session && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        className: "text-4xl mt-10 text-white border-1 border-white p-7 bg-blue-400 rounded",
        onClick: next_auth_client__WEBPACK_IMPORTED_MODULE_8__.signIn,
        children: "Sign In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }, this), session && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
        className: "text-4xl py-7",
        children: " Add Taps "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "pb-2 bg-gray-200 rounded flex flex-col w-[60%] mx-auto ",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
          type: "text",
          value: newTrigger,
          onChange: function onChange(e) {
            return setNewTrigger(e.target.value);
          },
          className: "border-2 p-1",
          placeholder: "Trigger..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
          type: "text",
          value: newAction,
          onChange: function onChange(e) {
            return setNewAction(e.target.value);
          },
          className: "border-2 p-1",
          placeholder: "Action..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
          onClick: saveNewTap,
          className: "border-2",
          children: "Add"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
        className: "text-4xl pt-16",
        children: " Other TAPs"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 11
      }, this), taps.length == 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        children: " You have no TAPs "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 32
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "unrated_taps bg-red-100",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
          className: "text-3xl",
          children: " Unrated "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 13
        }, this), taps.map(function (tap, index) {
          return tap.rated == "false" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_tapwidget_js__WEBPACK_IMPORTED_MODULE_9__.default, {
            tap: tap,
            index: index,
            rate: rate,
            deleteTap: deleteTap,
            curDay: curDay
          }, tap.id, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 19
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "rated_taps bg-green-100",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
          className: "text-3xl",
          children: " Rated "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 13
        }, this), taps.map(function (tap, index) {
          return tap.rated !== "false" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_tapwidget_js__WEBPACK_IMPORTED_MODULE_9__.default, {
            tap: tap,
            index: index,
            rate: rate,
            deleteTap: deleteTap,
            curDay: curDay
          }, tap.id, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 19
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        children: [" Signed in as ", session.user.name, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 11
      }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 53
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        onClick: function onClick() {
          return (0,next_auth_client__WEBPACK_IMPORTED_MODULE_8__.signOut)();
        },
        children: "Sign out"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 5
  }, this);
}

_s(Home, "HgC7MxlnXOfY5mmZfKrQtj9vJXg=", false, function () {
  return [next_auth_client__WEBPACK_IMPORTED_MODULE_8__.useSession];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInRhcHNEQiIsInVzZVNlc3Npb24iLCJzZXNzaW9uIiwibG9hZGluZyIsInVzZVN0YXRlIiwibmV3VHJpZ2dlciIsInNldE5ld1RyaWdnZXIiLCJuZXdBY3Rpb24iLCJzZXROZXdBY3Rpb24iLCJ0YXBzIiwic2V0VGFwcyIsImN1ckRheSIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJ0ZW1wQXJyIiwibmV3RGF5IiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwicmVzcG9uc2UiLCJzYXZlTmV3VGFwIiwibmV3VGFwIiwidHJpZ2dlciIsImFjdGlvbiIsInJhdGVkIiwibmV3QXJyIiwidW5zaGlmdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwibG9nIiwianNvbiIsInJhdGUiLCJpIiwicmF0aW5nIiwic3RyZWFrIiwibGFzdFJhdGVkIiwiZGVsZXRlVGFwIiwic3BsaWNlIiwic2lnbkluIiwiZSIsInRhcmdldCIsInZhbHVlIiwibGVuZ3RoIiwibWFwIiwidGFwIiwiaW5kZXgiLCJpZCIsInVzZXIiLCJuYW1lIiwic2lnbk91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFZSxTQUFTQSxJQUFULE9BQTBCO0FBQUE7O0FBQUE7O0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVOztBQUFBLG9CQUNaQyw0REFBVSxFQURFO0FBQUE7QUFBQSxNQUNoQ0MsT0FEZ0M7QUFBQSxNQUN2QkMsT0FEdUI7O0FBQUEsa0JBR0hDLCtDQUFRLENBQUMsRUFBRCxDQUhMO0FBQUEsTUFHaENDLFVBSGdDO0FBQUEsTUFHcEJDLGFBSG9COztBQUFBLG1CQUlMRiwrQ0FBUSxDQUFDLEVBQUQsQ0FKSDtBQUFBLE1BSWhDRyxTQUpnQztBQUFBLE1BSXJCQyxZQUpxQjs7QUFB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QUEsY0F2RDVDLGVBd0RFO0FBQVEsZUFBTyxFQUFFO0FBQUEsaUJBQU1DLHlEQUFPLEVBQWI7QUFBQSxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE4RUQ7O0dBakt1QnJELEk7VUFDS0Usd0Q7OztLQURMRixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFkNmE2ZjdkYTlkZmVkM2Y4NTI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IHNpZ25Jbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcbmltcG9ydCBUYXBXaWRnZXQgZnJvbSBcIi4vY29tcG9uZW50cy90YXB3aWRnZXQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHRhcHNEQiB9KSB7XG4gIGNvbnN0IFtzZXNzaW9uLCBsb2FkaW5nXSA9IHVzZVNlc3Npb24oKTtcblxuICBjb25zdCBbbmV3VHJpZ2dlciwgc2V0TmV3VHJpZ2dlcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW25ld0FjdGlvbiwgc2V0TmV3QWN0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdGFwcywgc2V0VGFwc10gPSB1c2VTdGF0ZSh0YXBzREIpO1xuXG4gIGxldCBjdXJEYXkgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpOyAvLyBmdWxsIGRheXMgc2luY2UgamFuIDFzdCAxOTcwXG5cblxuXG4gIGxldCB0ZW1wQXJyID0gWy4uLnRhcHNdO1xuXG4gIG5ld0RheSgpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIG5ld0RheSgpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS91cGRhdGVNYW55VGFwc1wiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keToge2N1ckRheTogY3VyRGF5fSxcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHNhdmVOZXdUYXAoKSB7XG4gICAgY29uc3QgbmV3VGFwID0ge1xuICAgICAgdHJpZ2dlcjogbmV3VHJpZ2dlcixcbiAgICAgIGFjdGlvbjogbmV3QWN0aW9uLFxuICAgICAgcmF0ZWQ6IFwiZmFsc2VcIixcbiAgICB9O1xuXG4gICAgbGV0IG5ld0FyciA9IFsuLi50YXBzXTtcbiAgICBuZXdBcnIudW5zaGlmdChuZXdUYXApO1xuICAgIHNldFRhcHMobmV3QXJyKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2NyZWF0ZVRhcFwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3VGFwKSxcbiAgICB9KTtcblxuICAgIHNldE5ld1RyaWdnZXIoXCJcIik7XG4gICAgc2V0TmV3QWN0aW9uKFwiXCIpO1xuXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UuanNvbigpKTtcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2U7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiByYXRlKGksIHJhdGluZykge1xuICAgIGxldCBuZXdBcnIgPSBbLi4udGFwc107XG4gICAgbmV3QXJyW2ldLnN0cmVhayA9XG4gICAgICByYXRpbmcgPT0gXCJkb25lXCJcbiAgICAgICAgPyBuZXdBcnJbaV0ucmF0ZWQgIT09IFwiZG9uZVwiIC8vIHdhcyB0aGUgcmF0aW5nIGFscmVhZHkgJ2RvbmUnP1xuICAgICAgICAgID8gbmV3QXJyW2ldLnN0cmVhayArIDFcbiAgICAgICAgICA6IG5ld0FycltpXS5zdHJlYWtcbiAgICAgICAgOiAwO1xuICAgIG5ld0FycltpXS5yYXRlZCA9IHJhdGluZztcbiAgICBuZXdBcnJbaV0ubGFzdFJhdGVkID0gY3VyRGF5O1xuICAgIHNldFRhcHMobmV3QXJyKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3VwZGF0ZVRhcFwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodGFwc1tpXSksXG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5qc29uKCkpO1xuICAgIHJldHVybiBhd2FpdCByZXNwb25zZTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRhcChpKSB7XG4gICAgY29uc29sZS5sb2coXCJkZWxldGluZ1wiKTtcbiAgICBjb25zb2xlLmxvZyh0YXBzW2ldKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2RlbGV0ZVRhcFwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodGFwc1tpXSksXG4gICAgfSk7XG5cbiAgICBsZXQgbmV3QXJyID0gWy4uLnRhcHNdO1xuICAgIG5ld0Fyci5zcGxpY2UoaSwgMSk7XG4gICAgc2V0VGFwcyhuZXdBcnIpO1xuXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UuanNvbigpKTtcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2U7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcHVycGxlLTIwMCB0ZXh0LWNlbnRlciBtaW4taC1zY3JlZW4gdy1bNjAlXSBteC1hdXRvIHRleHQtY2VudGVyIFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNnhsIHB5LTcgZm9udC1zZXJpZlwiPiBUcmFjdGlvbiA8L2gxPlxuICAgICAgPHA+IFNpbmNlIHtjdXJEYXl9IDwvcD5cblxuICAgICAgeyFzZXNzaW9uICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBtdC0xMCB0ZXh0LXdoaXRlIGJvcmRlci0xIGJvcmRlci13aGl0ZSBwLTcgYmctYmx1ZS00MDAgcm91bmRlZFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtzaWduSW59XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2lnbiBJblxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHtzZXNzaW9uICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgcHktN1wiPiBBZGQgVGFwcyA8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItMiBiZy1ncmF5LTIwMCByb3VuZGVkIGZsZXggZmxleC1jb2wgdy1bNjAlXSBteC1hdXRvIFwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e25ld1RyaWdnZXJ9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3VHJpZ2dlcihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci0yIHAtMVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHJpZ2dlci4uLlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e25ld0FjdGlvbn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdBY3Rpb24oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItMiBwLTFcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFjdGlvbi4uLlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzYXZlTmV3VGFwfSBjbGFzc05hbWU9XCJib3JkZXItMlwiPlxuICAgICAgICAgICAgICBBZGRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBwdC0xNlwiPiBPdGhlciBUQVBzPC9oMj5cbiAgICAgICAgICB7dGFwcy5sZW5ndGggPT0gMCAmJiA8aDE+IFlvdSBoYXZlIG5vIFRBUHMgPC9oMT59XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1bnJhdGVkX3RhcHMgYmctcmVkLTEwMFwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtM3hsXCI+IFVucmF0ZWQgPC9oMz5cbiAgICAgICAgICAgIHt0YXBzLm1hcChcbiAgICAgICAgICAgICAgKHRhcCwgaW5kZXgpID0+XG4gICAgICAgICAgICAgICAgdGFwLnJhdGVkID09IFwiZmFsc2VcIiAmJiAoXG4gICAgICAgICAgICAgICAgICA8VGFwV2lkZ2V0XG4gICAgICAgICAgICAgICAgICAgIGtleT17dGFwLmlkfVxuICAgICAgICAgICAgICAgICAgICB0YXA9e3RhcH1cbiAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICByYXRlPXtyYXRlfVxuICAgICAgICAgICAgICAgICAgICBkZWxldGVUYXA9e2RlbGV0ZVRhcH1cbiAgICAgICAgICAgICAgICAgICAgY3VyRGF5PXtjdXJEYXl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRlZF90YXBzIGJnLWdyZWVuLTEwMFwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtM3hsXCI+IFJhdGVkIDwvaDM+XG4gICAgICAgICAgICB7dGFwcy5tYXAoXG4gICAgICAgICAgICAgICh0YXAsIGluZGV4KSA9PlxuICAgICAgICAgICAgICAgIHRhcC5yYXRlZCAhPT0gXCJmYWxzZVwiICYmIChcbiAgICAgICAgICAgICAgICAgIDxUYXBXaWRnZXRcbiAgICAgICAgICAgICAgICAgICAga2V5PXt0YXAuaWR9XG4gICAgICAgICAgICAgICAgICAgIHRhcD17dGFwfVxuICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIHJhdGU9e3JhdGV9XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZVRhcD17ZGVsZXRlVGFwfVxuICAgICAgICAgICAgICAgICAgICBjdXJEYXk9e2N1ckRheX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cD4gU2lnbmVkIGluIGFzIHtzZXNzaW9uLnVzZXIubmFtZX0gPC9wPiA8YnIgLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX0+U2lnbiBvdXQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihjb250ZXh0KTtcblxuICBsZXQgdGFwcyA9IHt9O1xuXG4gIGlmIChzZXNzaW9uKSB7XG4gICAgdGFwcyA9IGF3YWl0IHByaXNtYS50YXAuZmluZE1hbnkoeyB3aGVyZTogeyB1c2VyOiBzZXNzaW9uLnVzZXIubmFtZSB9IH0pO1xuICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgdGFwc0RCOiB0YXBzLFxuICAgIH0sXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9