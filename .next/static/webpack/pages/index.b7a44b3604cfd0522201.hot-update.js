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
/* harmony import */ var C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
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

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(Math.floor(Date.now() / (1000 * 60 * 60 * 24))),
      curDay = _useState4[0],
      setCurDay = _useState4[1]; // full days since jan 1st 1970


  newDay();

  function newDay() {
    return _newDay.apply(this, arguments);
  }

  function _newDay() {
    _newDay = (0,C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var response;
      return C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
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
              console.log(response);
              _context.next = 6;
              return response;

            case 6:
              return _context.abrupt("return", _context.sent);

            case 7:
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
    _saveNewTap = (0,C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      var newTap, newArr, response;
      return C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              newTap = {
                trigger: newTrigger,
                action: newAction,
                rated: "false"
              };
              newArr = (0,C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(taps);
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
    _rate = (0,C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(i, rating) {
      var newArr, response;
      return C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              newArr = (0,C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(taps);
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
    _deleteTap = (0,C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(i) {
      var response, newArr;
      return C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
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
              newArr = (0,C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(taps);
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "bg-purple-200 text-center min-h-screen w-[60%] mx-auto text-center ",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
      className: "text-6xl py-7 font-serif",
      children: " Traction "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
      children: [" ", "Since ", curDay, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        onClick: function onClick() {
          return setCurDay(curDay + 1);
        },
        children: " + "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this), " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, this), !session && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        className: "text-4xl mt-10 text-white border-1 border-white p-7 bg-blue-400 rounded",
        onClick: next_auth_client__WEBPACK_IMPORTED_MODULE_8__.signIn,
        children: "Sign In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }, this), session && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
        className: "text-4xl py-7",
        children: " Add Taps "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "pb-2 bg-gray-200 rounded flex flex-col w-[60%] mx-auto ",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "text",
          value: newTrigger,
          onChange: function onChange(e) {
            return setNewTrigger(e.target.value);
          },
          className: "border-2 p-1",
          placeholder: "Trigger..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "text",
          value: newAction,
          onChange: function onChange(e) {
            return setNewAction(e.target.value);
          },
          className: "border-2 p-1",
          placeholder: "Action..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
          onClick: saveNewTap,
          className: "border-2",
          children: "Add"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
        className: "text-4xl pt-16",
        children: " Other TAPs"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 11
      }, this), taps.length == 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
        children: " You have no TAPs "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 32
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "unrated_taps bg-gray-100",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
          className: "text-3xl",
          children: " Unrated "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 13
        }, this), taps.map(function (tap, index) {
          return tap.rated == "false" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_tapwidget_js__WEBPACK_IMPORTED_MODULE_9__.default, {
            tap: tap,
            index: index,
            rate: rate,
            deleteTap: deleteTap,
            curDay: curDay
          }, tap.id, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 19
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "rated_taps bg-green-100",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
          className: "text-3xl",
          children: " Rated "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 13
        }, this), taps.map(function (tap, index) {
          return tap.rated !== "false" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_tapwidget_js__WEBPACK_IMPORTED_MODULE_9__.default, {
            tap: tap,
            index: index,
            rate: rate,
            deleteTap: deleteTap,
            curDay: curDay
          }, tap.id, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 19
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        children: [" Signed in as ", session.user.name, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 11
      }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 53
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        onClick: function onClick() {
          return (0,next_auth_client__WEBPACK_IMPORTED_MODULE_8__.signOut)();
        },
        children: "Sign out"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 5
  }, this);
}

_s(Home, "DM2zGewaZl6t7QGo262jw4isH74=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInRhcHNEQiIsInVzZVNlc3Npb24iLCJzZXNzaW9uIiwibG9hZGluZyIsInVzZVN0YXRlIiwibmV3VHJpZ2dlciIsInNldE5ld1RyaWdnZXIiLCJuZXdBY3Rpb24iLCJzZXROZXdBY3Rpb24iLCJ0YXBzIiwic2V0VGFwcyIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJjdXJEYXkiLCJzZXRDdXJEYXkiLCJuZXdEYXkiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJzYXZlTmV3VGFwIiwibmV3VGFwIiwidHJpZ2dlciIsImFjdGlvbiIsInJhdGVkIiwibmV3QXJyIiwidW5zaGlmdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJqc29uIiwicmF0ZSIsImkiLCJyYXRpbmciLCJzdHJlYWsiLCJsYXN0UmF0ZWQiLCJkZWxldGVUYXAiLCJzcGxpY2UiLCJzaWduSW4iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJsZW5ndGgiLCJtYXAiLCJ0YXAiLCJpbmRleCIsImlkIiwidXNlciIsIm5hbWUiLCJzaWduT3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVlLFNBQVNBLElBQVQsT0FBMEI7QUFBQTs7QUFBQTs7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7O0FBQUEsb0JBQ1pDLDREQUFVLEVBREU7QUFBQTtBQUFBLE1BQ2hDQyxPQURnQztBQUFBLE1BQ3ZCQyxPQUR1Qjs7QUFBQSxrQkFHSEMsK0NBQVEsQ0FBQyxFQUFELENBSEw7QUFBQSxNQUdoQ0MsVUFIZ0M7QUFBQSxNQUdwQkMsYUFIb0I7O0FBQUEsbUJBSUxGLCtDQUFRLENBQUMsRUFBRCxDQUpIO0FBQUEsTUFJaENHLFNBSmdDO0FBQUEsTUFJckJDLFlBSnFCOztB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QUFFeEI7QUFOVixhQUNPZ0MsR0FBRyxDQUFDRSxFQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQSxTQURELENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkNGLGVBdURFO0FBQUEscUNBQWtCL0MsT0FBTyxDQUFDZ0QsSUFBUixDQUFhQyxJQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F2REYsb0JBdUQ0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkQ1QyxlQXdERTtBQUFRLGVBQU8sRUFBRTtBQUFBLGlCQUFNQyx5REFBTyxFQUFiO0FBQUEsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0ZEOztHQXJLdUJyRCxJO1VBQ0tFLHdEOzs7S0FETEYsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iN2E0NGIzNjA0Y2ZkMDUyMjIwMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBzaWduSW4sIHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG5pbXBvcnQgVGFwV2lkZ2V0IGZyb20gXCIuL2NvbXBvbmVudHMvdGFwd2lkZ2V0LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyB0YXBzREIgfSkge1xuICBjb25zdCBbc2Vzc2lvbiwgbG9hZGluZ10gPSB1c2VTZXNzaW9uKCk7XG5cbiAgY29uc3QgW25ld1RyaWdnZXIsIHNldE5ld1RyaWdnZXJdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtuZXdBY3Rpb24sIHNldE5ld0FjdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3RhcHMsIHNldFRhcHNdID0gdXNlU3RhdGUodGFwc0RCKTtcbiAgY29uc3QgW2N1ckRheSwgc2V0Q3VyRGF5XSA9IHVzZVN0YXRlKFxuICAgIE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSlcbiAgKTsgLy8gZnVsbCBkYXlzIHNpbmNlIGphbiAxc3QgMTk3MFxuXG4gIG5ld0RheSgpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIG5ld0RheSgpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS91cGRhdGVNYW55VGFwc1wiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogeyBjdXJEYXk6IGN1ckRheSB9LFxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIHJldHVybiBhd2FpdCByZXNwb25zZTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHNhdmVOZXdUYXAoKSB7XG4gICAgY29uc3QgbmV3VGFwID0ge1xuICAgICAgdHJpZ2dlcjogbmV3VHJpZ2dlcixcbiAgICAgIGFjdGlvbjogbmV3QWN0aW9uLFxuICAgICAgcmF0ZWQ6IFwiZmFsc2VcIixcbiAgICB9O1xuXG4gICAgbGV0IG5ld0FyciA9IFsuLi50YXBzXTtcbiAgICBuZXdBcnIudW5zaGlmdChuZXdUYXApO1xuICAgIHNldFRhcHMobmV3QXJyKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2NyZWF0ZVRhcFwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3VGFwKSxcbiAgICB9KTtcblxuICAgIHNldE5ld1RyaWdnZXIoXCJcIik7XG4gICAgc2V0TmV3QWN0aW9uKFwiXCIpO1xuXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UuanNvbigpKTtcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2U7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiByYXRlKGksIHJhdGluZykge1xuICAgIGxldCBuZXdBcnIgPSBbLi4udGFwc107XG4gICAgbmV3QXJyW2ldLnN0cmVhayA9XG4gICAgICByYXRpbmcgPT0gXCJkb25lXCJcbiAgICAgICAgPyBuZXdBcnJbaV0ucmF0ZWQgIT09IFwiZG9uZVwiIC8vIHdhcyB0aGUgcmF0aW5nIGFscmVhZHkgJ2RvbmUnP1xuICAgICAgICAgID8gbmV3QXJyW2ldLnN0cmVhayArIDFcbiAgICAgICAgICA6IG5ld0FycltpXS5zdHJlYWtcbiAgICAgICAgOiAwO1xuICAgIG5ld0FycltpXS5yYXRlZCA9IHJhdGluZztcbiAgICBuZXdBcnJbaV0ubGFzdFJhdGVkID0gY3VyRGF5O1xuICAgIHNldFRhcHMobmV3QXJyKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3VwZGF0ZVRhcFwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodGFwc1tpXSksXG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5qc29uKCkpO1xuICAgIHJldHVybiBhd2FpdCByZXNwb25zZTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRhcChpKSB7XG4gICAgY29uc29sZS5sb2coXCJkZWxldGluZ1wiKTtcbiAgICBjb25zb2xlLmxvZyh0YXBzW2ldKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2RlbGV0ZVRhcFwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodGFwc1tpXSksXG4gICAgfSk7XG5cbiAgICBsZXQgbmV3QXJyID0gWy4uLnRhcHNdO1xuICAgIG5ld0Fyci5zcGxpY2UoaSwgMSk7XG4gICAgc2V0VGFwcyhuZXdBcnIpO1xuXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UuanNvbigpKTtcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2U7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcHVycGxlLTIwMCB0ZXh0LWNlbnRlciBtaW4taC1zY3JlZW4gdy1bNjAlXSBteC1hdXRvIHRleHQtY2VudGVyIFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNnhsIHB5LTcgZm9udC1zZXJpZlwiPiBUcmFjdGlvbiA8L2gxPlxuICAgICAgPHA+XG4gICAgICAgIHtcIiBcIn1cbiAgICAgICAgU2luY2Uge2N1ckRheX17XCIgXCJ9XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q3VyRGF5KGN1ckRheSArIDEpfT4gKyA8L2J1dHRvbj57XCIgXCJ9XG4gICAgICA8L3A+XG5cbiAgICAgIHshc2Vzc2lvbiAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC00eGwgbXQtMTAgdGV4dC13aGl0ZSBib3JkZXItMSBib3JkZXItd2hpdGUgcC03IGJnLWJsdWUtNDAwIHJvdW5kZWRcIlxuICAgICAgICAgICAgb25DbGljaz17c2lnbklufVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNpZ24gSW5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7c2Vzc2lvbiAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIHB5LTdcIj4gQWRkIFRhcHMgPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTIgYmctZ3JheS0yMDAgcm91bmRlZCBmbGV4IGZsZXgtY29sIHctWzYwJV0gbXgtYXV0byBcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtuZXdUcmlnZ2VyfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld1RyaWdnZXIoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItMiBwLTFcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRyaWdnZXIuLi5cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtuZXdBY3Rpb259XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3QWN0aW9uKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTIgcC0xXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBY3Rpb24uLi5cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2F2ZU5ld1RhcH0gY2xhc3NOYW1lPVwiYm9yZGVyLTJcIj5cbiAgICAgICAgICAgICAgQWRkXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgcHQtMTZcIj4gT3RoZXIgVEFQczwvaDI+XG4gICAgICAgICAge3RhcHMubGVuZ3RoID09IDAgJiYgPGgxPiBZb3UgaGF2ZSBubyBUQVBzIDwvaDE+fVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidW5yYXRlZF90YXBzIGJnLWdyYXktMTAwXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj4gVW5yYXRlZCA8L2gzPlxuICAgICAgICAgICAge3RhcHMubWFwKFxuICAgICAgICAgICAgICAodGFwLCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgICB0YXAucmF0ZWQgPT0gXCJmYWxzZVwiICYmIChcbiAgICAgICAgICAgICAgICAgIDxUYXBXaWRnZXRcbiAgICAgICAgICAgICAgICAgICAga2V5PXt0YXAuaWR9XG4gICAgICAgICAgICAgICAgICAgIHRhcD17dGFwfVxuICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIHJhdGU9e3JhdGV9XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZVRhcD17ZGVsZXRlVGFwfVxuICAgICAgICAgICAgICAgICAgICBjdXJEYXk9e2N1ckRheX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGVkX3RhcHMgYmctZ3JlZW4tMTAwXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj4gUmF0ZWQgPC9oMz5cbiAgICAgICAgICAgIHt0YXBzLm1hcChcbiAgICAgICAgICAgICAgKHRhcCwgaW5kZXgpID0+XG4gICAgICAgICAgICAgICAgdGFwLnJhdGVkICE9PSBcImZhbHNlXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgPFRhcFdpZGdldFxuICAgICAgICAgICAgICAgICAgICBrZXk9e3RhcC5pZH1cbiAgICAgICAgICAgICAgICAgICAgdGFwPXt0YXB9XG4gICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgcmF0ZT17cmF0ZX1cbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlVGFwPXtkZWxldGVUYXB9XG4gICAgICAgICAgICAgICAgICAgIGN1ckRheT17Y3VyRGF5fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwPiBTaWduZWQgaW4gYXMge3Nlc3Npb24udXNlci5uYW1lfSA8L3A+IDxiciAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbk91dCgpfT5TaWduIG91dDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKGNvbnRleHQpO1xuXG4gIGxldCB0YXBzID0ge307XG5cbiAgaWYgKHNlc3Npb24pIHtcbiAgICB0YXBzID0gYXdhaXQgcHJpc21hLnRhcC5maW5kTWFueSh7IHdoZXJlOiB7IHVzZXI6IHNlc3Npb24udXNlci5uYW1lIH0gfSk7XG4gICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICB0YXBzREI6IHRhcHMsXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=