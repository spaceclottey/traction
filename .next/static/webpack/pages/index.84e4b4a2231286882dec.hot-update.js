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
      lineNumber: 89,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
      children: [" Since ", curDay, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        onClick: function onClick() {
          return setCurDay(curDay + 1);
        },
        children: " + "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 26
      }, this), " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, this), !session && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        className: "text-4xl mt-10 text-white border-1 border-white p-7 bg-blue-400 rounded",
        onClick: next_auth_client__WEBPACK_IMPORTED_MODULE_8__.signIn,
        children: "Sign In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }, this), session && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
        className: "text-4xl py-7",
        children: " Add Taps "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
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
          lineNumber: 107,
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
          lineNumber: 114,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
          onClick: saveNewTap,
          className: "border-2",
          children: "Add"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
        className: "text-4xl pt-16",
        children: " Other TAPs"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 11
      }, this), taps.length == 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
        children: " You have no TAPs "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 32
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "unrated_taps bg-red-100",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
          className: "text-3xl",
          children: " Unrated "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
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
            lineNumber: 132,
            columnNumber: 19
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "rated_taps bg-green-100",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
          className: "text-3xl",
          children: " Rated "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
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
            lineNumber: 148,
            columnNumber: 19
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        children: [" Signed in as ", session.user.name, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 11
      }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 53
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        onClick: function onClick() {
          return (0,next_auth_client__WEBPACK_IMPORTED_MODULE_8__.signOut)();
        },
        children: "Sign out"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 88,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInRhcHNEQiIsInVzZVNlc3Npb24iLCJzZXNzaW9uIiwibG9hZGluZyIsInVzZVN0YXRlIiwibmV3VHJpZ2dlciIsInNldE5ld1RyaWdnZXIiLCJuZXdBY3Rpb24iLCJzZXROZXdBY3Rpb24iLCJ0YXBzIiwic2V0VGFwcyIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJjdXJEYXkiLCJzZXRDdXJEYXkiLCJuZXdEYXkiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJyZXNwb25zZSIsInNhdmVOZXdUYXAiLCJuZXdUYXAiLCJ0cmlnZ2VyIiwiYWN0aW9uIiwicmF0ZWQiLCJuZXdBcnIiLCJ1bnNoaWZ0IiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwicmF0ZSIsImkiLCJyYXRpbmciLCJzdHJlYWsiLCJsYXN0UmF0ZWQiLCJkZWxldGVUYXAiLCJzcGxpY2UiLCJzaWduSW4iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJsZW5ndGgiLCJtYXAiLCJ0YXAiLCJpbmRleCIsImlkIiwidXNlciIsIm5hbWUiLCJzaWduT3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVlLFNBQVNBLElBQVQsT0FBMEI7QUFBQTs7QUFBQTs7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7O0FBQUEsb0JBQ1pDLDREQUFVLEVBREU7QUFBQTtBQUFBLE1BQ2hDQyxPQURnQztBQUFBLE1BQ3ZCQyxPQUR1Qjs7QUFBQSxrQkFHSEMsK0NBQVEsQ0FBQyxFQUFELENBSEw7QUFBQSxNQUdoQ0MsVUFIZ0M7QUFBQSxNQUdwQkMsYUFIb0I7O0FBQUEsbUJBSUxGLCtDQUFRLENBQUMsRUFBRCxDQUpIO0FBQUEsTUFJaENHLFNBSmdDO0FBQUEsTUFJckJDLFlBSnFCOztB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QSxjQXZDRixlQXVERTtBQUFBLHFDQUFrQi9DLE9BQU8sQ0FBQ2dELElBQVIsQ0FBYUMsSUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkRGLG9CQXVENEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZENUMsZUF3REU7QUFBUSxlQUFPLEVBQUU7QUFBQSxpQkFBTUMseURBQU8sRUFBYjtBQUFBLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThFRDs7R0E1SnVCckQsSTtVQUNLRSx3RDs7O0tBRExGLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODRlNGI0YTIyMzEyODY4ODJkZWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xuaW1wb3J0IFRhcFdpZGdldCBmcm9tIFwiLi9jb21wb25lbnRzL3RhcHdpZGdldC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgdGFwc0RCIH0pIHtcbiAgY29uc3QgW3Nlc3Npb24sIGxvYWRpbmddID0gdXNlU2Vzc2lvbigpO1xuXG4gIGNvbnN0IFtuZXdUcmlnZ2VyLCBzZXROZXdUcmlnZ2VyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbmV3QWN0aW9uLCBzZXROZXdBY3Rpb25dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt0YXBzLCBzZXRUYXBzXSA9IHVzZVN0YXRlKHRhcHNEQik7XG4gIGNvbnN0IFtjdXJEYXksIHNldEN1ckRheV0gPSB1c2VTdGF0ZShNYXRoLmZsb29yKERhdGUubm93KCkgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpKSAvLyBmdWxsIGRheXMgc2luY2UgamFuIDFzdCAxOTcwXG5cbiAgbmV3RGF5KCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gbmV3RGF5KCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3VwZGF0ZU1hbnlUYXBzXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBib2R5OiB7Y3VyRGF5OiBjdXJEYXl9LFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gc2F2ZU5ld1RhcCgpIHtcbiAgICBjb25zdCBuZXdUYXAgPSB7XG4gICAgICB0cmlnZ2VyOiBuZXdUcmlnZ2VyLFxuICAgICAgYWN0aW9uOiBuZXdBY3Rpb24sXG4gICAgICByYXRlZDogXCJmYWxzZVwiLFxuICAgIH07XG5cbiAgICBsZXQgbmV3QXJyID0gWy4uLnRhcHNdO1xuICAgIG5ld0Fyci51bnNoaWZ0KG5ld1RhcCk7XG4gICAgc2V0VGFwcyhuZXdBcnIpO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvY3JlYXRlVGFwXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdUYXApLFxuICAgIH0pO1xuXG4gICAgc2V0TmV3VHJpZ2dlcihcIlwiKTtcbiAgICBzZXROZXdBY3Rpb24oXCJcIik7XG5cbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5qc29uKCkpO1xuICAgIHJldHVybiBhd2FpdCByZXNwb25zZTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHJhdGUoaSwgcmF0aW5nKSB7XG4gICAgbGV0IG5ld0FyciA9IFsuLi50YXBzXTtcbiAgICBuZXdBcnJbaV0uc3RyZWFrID1cbiAgICAgIHJhdGluZyA9PSBcImRvbmVcIlxuICAgICAgICA/IG5ld0FycltpXS5yYXRlZCAhPT0gXCJkb25lXCIgLy8gd2FzIHRoZSByYXRpbmcgYWxyZWFkeSAnZG9uZSc/XG4gICAgICAgICAgPyBuZXdBcnJbaV0uc3RyZWFrICsgMVxuICAgICAgICAgIDogbmV3QXJyW2ldLnN0cmVha1xuICAgICAgICA6IDA7XG4gICAgbmV3QXJyW2ldLnJhdGVkID0gcmF0aW5nO1xuICAgIG5ld0FycltpXS5sYXN0UmF0ZWQgPSBjdXJEYXk7XG4gICAgc2V0VGFwcyhuZXdBcnIpO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvdXBkYXRlVGFwXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0YXBzW2ldKSxcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmpzb24oKSk7XG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZGVsZXRlVGFwKGkpIHtcbiAgICBjb25zb2xlLmxvZyhcImRlbGV0aW5nXCIpO1xuICAgIGNvbnNvbGUubG9nKHRhcHNbaV0pO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvZGVsZXRlVGFwXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0YXBzW2ldKSxcbiAgICB9KTtcblxuICAgIGxldCBuZXdBcnIgPSBbLi4udGFwc107XG4gICAgbmV3QXJyLnNwbGljZShpLCAxKTtcbiAgICBzZXRUYXBzKG5ld0Fycik7XG5cbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5qc29uKCkpO1xuICAgIHJldHVybiBhd2FpdCByZXNwb25zZTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1wdXJwbGUtMjAwIHRleHQtY2VudGVyIG1pbi1oLXNjcmVlbiB3LVs2MCVdIG14LWF1dG8gdGV4dC1jZW50ZXIgXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC02eGwgcHktNyBmb250LXNlcmlmXCI+IFRyYWN0aW9uIDwvaDE+XG4gICAgICA8cD4gU2luY2Uge2N1ckRheX0gPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDdXJEYXkoY3VyRGF5ICsgMSl9PiArIDwvYnV0dG9uPiA8L3A+XG5cbiAgICAgIHshc2Vzc2lvbiAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC00eGwgbXQtMTAgdGV4dC13aGl0ZSBib3JkZXItMSBib3JkZXItd2hpdGUgcC03IGJnLWJsdWUtNDAwIHJvdW5kZWRcIlxuICAgICAgICAgICAgb25DbGljaz17c2lnbklufVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNpZ24gSW5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7c2Vzc2lvbiAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIHB5LTdcIj4gQWRkIFRhcHMgPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTIgYmctZ3JheS0yMDAgcm91bmRlZCBmbGV4IGZsZXgtY29sIHctWzYwJV0gbXgtYXV0byBcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtuZXdUcmlnZ2VyfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld1RyaWdnZXIoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItMiBwLTFcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRyaWdnZXIuLi5cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtuZXdBY3Rpb259XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3QWN0aW9uKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTIgcC0xXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBY3Rpb24uLi5cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2F2ZU5ld1RhcH0gY2xhc3NOYW1lPVwiYm9yZGVyLTJcIj5cbiAgICAgICAgICAgICAgQWRkXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgcHQtMTZcIj4gT3RoZXIgVEFQczwvaDI+XG4gICAgICAgICAge3RhcHMubGVuZ3RoID09IDAgJiYgPGgxPiBZb3UgaGF2ZSBubyBUQVBzIDwvaDE+fVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidW5yYXRlZF90YXBzIGJnLXJlZC0xMDBcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiPiBVbnJhdGVkIDwvaDM+XG4gICAgICAgICAgICB7dGFwcy5tYXAoXG4gICAgICAgICAgICAgICh0YXAsIGluZGV4KSA9PlxuICAgICAgICAgICAgICAgIHRhcC5yYXRlZCA9PSBcImZhbHNlXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgPFRhcFdpZGdldFxuICAgICAgICAgICAgICAgICAgICBrZXk9e3RhcC5pZH1cbiAgICAgICAgICAgICAgICAgICAgdGFwPXt0YXB9XG4gICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgcmF0ZT17cmF0ZX1cbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlVGFwPXtkZWxldGVUYXB9XG4gICAgICAgICAgICAgICAgICAgIGN1ckRheT17Y3VyRGF5fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0ZWRfdGFwcyBiZy1ncmVlbi0xMDBcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiPiBSYXRlZCA8L2gzPlxuICAgICAgICAgICAge3RhcHMubWFwKFxuICAgICAgICAgICAgICAodGFwLCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgICB0YXAucmF0ZWQgIT09IFwiZmFsc2VcIiAmJiAoXG4gICAgICAgICAgICAgICAgICA8VGFwV2lkZ2V0XG4gICAgICAgICAgICAgICAgICAgIGtleT17dGFwLmlkfVxuICAgICAgICAgICAgICAgICAgICB0YXA9e3RhcH1cbiAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICByYXRlPXtyYXRlfVxuICAgICAgICAgICAgICAgICAgICBkZWxldGVUYXA9e2RlbGV0ZVRhcH1cbiAgICAgICAgICAgICAgICAgICAgY3VyRGF5PXtjdXJEYXl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHA+IFNpZ25lZCBpbiBhcyB7c2Vzc2lvbi51c2VyLm5hbWV9IDwvcD4gPGJyIC8+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9PlNpZ24gb3V0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oY29udGV4dCk7XG5cbiAgbGV0IHRhcHMgPSB7fTtcblxuICBpZiAoc2Vzc2lvbikge1xuICAgIHRhcHMgPSBhd2FpdCBwcmlzbWEudGFwLmZpbmRNYW55KHsgd2hlcmU6IHsgdXNlcjogc2Vzc2lvbi51c2VyLm5hbWUgfSB9KTtcbiAgICBhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHRhcHNEQjogdGFwcyxcbiAgICB9LFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==