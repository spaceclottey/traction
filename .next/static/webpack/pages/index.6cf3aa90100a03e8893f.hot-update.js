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
              console.log(response.json());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInRhcHNEQiIsInVzZVNlc3Npb24iLCJzZXNzaW9uIiwibG9hZGluZyIsInVzZVN0YXRlIiwibmV3VHJpZ2dlciIsInNldE5ld1RyaWdnZXIiLCJuZXdBY3Rpb24iLCJzZXROZXdBY3Rpb24iLCJ0YXBzIiwic2V0VGFwcyIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJjdXJEYXkiLCJzZXRDdXJEYXkiLCJuZXdEYXkiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwic2F2ZU5ld1RhcCIsIm5ld1RhcCIsInRyaWdnZXIiLCJhY3Rpb24iLCJyYXRlZCIsIm5ld0FyciIsInVuc2hpZnQiLCJKU09OIiwic3RyaW5naWZ5IiwicmF0ZSIsImkiLCJyYXRpbmciLCJzdHJlYWsiLCJsYXN0UmF0ZWQiLCJkZWxldGVUYXAiLCJzcGxpY2UiLCJzaWduSW4iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJsZW5ndGgiLCJtYXAiLCJ0YXAiLCJpbmRleCIsImlkIiwidXNlciIsIm5hbWUiLCJzaWduT3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVlLFNBQVNBLElBQVQsT0FBMEI7QUFBQTs7QUFBQTs7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7O0FBQUEsb0JBQ1pDLDREQUFVLEVBREU7QUFBQTtBQUFBLE1BQ2hDQyxPQURnQztBQUFBLE1BQ3ZCQyxPQUR1Qjs7QUFBQSxrQkFHSEMsK0NBQVEsQ0FBQyxFQUFELENBSEw7QUFBQSxNQUdoQ0MsVUFIZ0M7QUFBQSxNQUdwQkMsYUFIb0I7O0FBQUEsbUJBSUxGLCtDQUFRLENBQUMsRUFBRCxDQUpIO0FBQUEsTUFJaENHLFNBSmdDO0FBQUEsTUFJckJDLFlBSnFCOztBQUFBLG1CQUtmSiwrQ0FBUSxDQUFDSixNQUFELENBTE87QUFBQSxNQUtoQ1MsSUFMZ0M7QUFBQSxNQUsxQkMsT0FMMEI7O0FBQUEsbUJBTVhOLCtDQUFRLENBQ2xDTyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsSUFBSSxDQUFDQyxHQUFMLE1BQWMsT0FBTyxFQUFQLEdBQVksRUFBWixHQUFpQixFQUEvQixDQUFYLENBRGtDLENBTkc7QUFBQSxNQU1oQ0MsTUFOZ0M7QUFBQSxNQU14QkMsU0FOd0Isa0JBUXBDOzs7QUFFSEMsUUFBTTs7QUFWaUMsV0FZeEJBLE1BWndCO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGdVQVl2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUN5QkMsS0FBSyxDQUFDLHFCQUFELEVBQXdCO0FBQ2xEQyxzQkFBTSxFQUFFLE1BRDBDO0FBRWxEQyxvQkFBSSxFQUFFO0FBQUVMLHdCQUFNLEVBQUVBO0FBQVY7QUFGNEMsZUFBeEIsQ0FEOUI7O0FBQUE7QUFDUU0sc0JBRFI7QUFNRUMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFRLENBQUNHLElBQVQsRUFBWjtBQU5GO0FBQUEscUJBT2VILFFBUGY7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVp1QztBQUFBO0FBQUE7O0FBQUEsV0FzQnhCSSxVQXRCd0I7QUFBQTtBQUFBOztBQUFBO0FBQUEsb1VBc0J2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUUMsb0JBRFIsR0FDaUI7QUFDYkMsdUJBQU8sRUFBRXRCLFVBREk7QUFFYnVCLHNCQUFNLEVBQUVyQixTQUZLO0FBR2JzQixxQkFBSyxFQUFFO0FBSE0sZUFEakI7QUFPTUMsb0JBUE4sNkpBT21CckIsSUFQbkI7QUFRRXFCLG9CQUFNLENBQUNDLE9BQVAsQ0FBZUwsTUFBZjtBQUNBaEIscUJBQU8sQ0FBQ29CLE1BQUQsQ0FBUDtBQVRGO0FBQUEscUJBV3lCWixLQUFLLENBQUMsZ0JBQUQsRUFBbUI7QUFDN0NDLHNCQUFNLEVBQUUsTUFEcUM7QUFFN0NDLG9CQUFJLEVBQUVZLElBQUksQ0FBQ0MsU0FBTCxDQUFlUCxNQUFmO0FBRnVDLGVBQW5CLENBWDlCOztBQUFBO0FBV1FMLHNCQVhSO0FBZ0JFZiwyQkFBYSxDQUFDLEVBQUQsQ0FBYjtBQUNBRSwwQkFBWSxDQUFDLEVBQUQsQ0FBWjtBQUVBYyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVEsQ0FBQ0csSUFBVCxFQUFaO0FBbkJGO0FBQUEscUJBb0JlSCxRQXBCZjs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBdEJ1QztBQUFBO0FBQUE7O0FBQUEsV0E2Q3hCYSxJQTdDd0I7QUFBQTtBQUFBOztBQUFBO0FBQUEsOFRBNkN2QyxrQkFBb0JDLENBQXBCLEVBQXVCQyxNQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTU4sb0JBRE4sNkpBQ21CckIsSUFEbkI7QUFFRXFCLG9CQUFNLENBQUNLLENBQUQsQ0FBTixDQUFVRSxNQUFWLEdBQ0VELE1BQU0sSUFBSSxNQUFWLEdBQ0lOLE1BQU0sQ0FBQ0ssQ0FBRCxDQUFOLENBQVVOLEtBQVYsS0FBb0IsTUFBcEIsQ0FBMkI7QUFBM0IsZ0JBQ0VDLE1BQU0sQ0FBQ0ssQ0FBRCxDQUFOLENBQVVFLE1BQVYsR0FBbUIsQ0FEckIsR0FFRVAsTUFBTSxDQUFDSyxDQUFELENBQU4sQ0FBVUUsTUFIaEIsR0FJSSxDQUxOO0FBTUFQLG9CQUFNLENBQUNLLENBQUQsQ0FBTixDQUFVTixLQUFWLEdBQWtCTyxNQUFsQjtBQUNBTixvQkFBTSxDQUFDSyxDQUFELENBQU4sQ0FBVUcsU0FBVixHQUFzQnZCLE1BQXRCO0FBQ0FMLHFCQUFPLENBQUNvQixNQUFELENBQVA7QUFWRjtBQUFBLHFCQVl5QlosS0FBSyxDQUFDLGdCQUFELEVBQW1CO0FBQzdDQyxzQkFBTSxFQUFFLE1BRHFDO0FBRTdDQyxvQkFBSSxFQUFFWSxJQUFJLENBQUNDLFNBQUwsQ0FBZXhCLElBQUksQ0FBQzBCLENBQUQsQ0FBbkI7QUFGdUMsZUFBbkIsQ0FaOUI7O0FBQUE7QUFZUWQsc0JBWlI7QUFpQkVDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBUSxDQUFDRyxJQUFULEVBQVo7QUFqQkY7QUFBQSxxQkFrQmVILFFBbEJmOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0E3Q3VDO0FBQUE7QUFBQTs7QUFBQSxXQWtFeEJrQixTQWxFd0I7QUFBQTtBQUFBOztBQUFBO0FBQUEsbVVBa0V2QyxrQkFBeUJKLENBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFYixxQkFBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBRCxxQkFBTyxDQUFDQyxHQUFSLENBQVlkLElBQUksQ0FBQzBCLENBQUQsQ0FBaEI7QUFGRjtBQUFBLHFCQUl5QmpCLEtBQUssQ0FBQyxnQkFBRCxFQUFtQjtBQUM3Q0Msc0JBQU0sRUFBRSxNQURxQztBQUU3Q0Msb0JBQUksRUFBRVksSUFBSSxDQUFDQyxTQUFMLENBQWV4QixJQUFJLENBQUMwQixDQUFELENBQW5CO0FBRnVDLGVBQW5CLENBSjlCOztBQUFBO0FBSVFkLHNCQUpSO0FBU01TLG9CQVROLDZKQVNtQnJCLElBVG5CO0FBVUVxQixvQkFBTSxDQUFDVSxNQUFQLENBQWNMLENBQWQsRUFBaUIsQ0FBakI7QUFDQXpCLHFCQUFPLENBQUNvQixNQUFELENBQVA7QUFFQVIscUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFRLENBQUNHLElBQVQsRUFBWjtBQWJGO0FBQUEscUJBY2VILFFBZGY7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWxFdUM7QUFBQTtBQUFBOztBQW1GdkMsc0JBQ0U7QUFBSyxhQUFTLEVBQUMscUVBQWY7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQywwQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQSxpQkFDRyxHQURILFlBRVNOLE1BRlQsRUFFaUIsR0FGakIsZUFHRTtBQUFRLGVBQU8sRUFBRTtBQUFBLGlCQUFNQyxTQUFTLENBQUNELE1BQU0sR0FBRyxDQUFWLENBQWY7QUFBQSxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLEVBRzZELEdBSDdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLEVBUUcsQ0FBQ2IsT0FBRCxpQkFDQztBQUFBLDZCQUNFO0FBQ0UsaUJBQVMsRUFBQyx5RUFEWjtBQUVFLGVBQU8sRUFBRXVDLG9EQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRKLEVBbUJHdkMsT0FBTyxpQkFDTjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUMseURBQWY7QUFBQSxnQ0FDRTtBQUNFLGNBQUksRUFBQyxNQURQO0FBRUUsZUFBSyxFQUFFRyxVQUZUO0FBR0Usa0JBQVEsRUFBRSxrQkFBQ3FDLENBQUQ7QUFBQSxtQkFBT3BDLGFBQWEsQ0FBQ29DLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXBCO0FBQUEsV0FIWjtBQUlFLG1CQUFTLEVBQUMsY0FKWjtBQUtFLHFCQUFXLEVBQUM7QUFMZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBUUU7QUFDRSxjQUFJLEVBQUMsTUFEUDtBQUVFLGVBQUssRUFBRXJDLFNBRlQ7QUFHRSxrQkFBUSxFQUFFLGtCQUFDbUMsQ0FBRDtBQUFBLG1CQUFPbEMsWUFBWSxDQUFDa0MsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBbkI7QUFBQSxXQUhaO0FBSUUsbUJBQVMsRUFBQyxjQUpaO0FBS0UscUJBQVcsRUFBQztBQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkYsZUFlRTtBQUFRLGlCQUFPLEVBQUVuQixVQUFqQjtBQUE2QixtQkFBUyxFQUFDLFVBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBcUJFO0FBQUksaUJBQVMsRUFBQyxnQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJCRixFQXNCR2hCLElBQUksQ0FBQ29DLE1BQUwsSUFBZSxDQUFmLGlCQUFvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRCdkIsZUF1QkU7QUFBSyxpQkFBUyxFQUFDLDBCQUFmO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFR3BDLElBQUksQ0FBQ3FDLEdBQUwsQ0FDQyxVQUFDQyxHQUFELEVBQU1DLEtBQU47QUFBQSxpQkFDRUQsR0FBRyxDQUFDbEIsS0FBSixJQUFhLE9BQWIsaUJBQ0UsOERBQUMsNkRBQUQ7QUFFRSxlQUFHLEVBQUVrQixHQUZQO0FBR0UsaUJBQUssRUFBRUMsS0FIVDtBQUlFLGdCQUFJLEVBQUVkLElBSlI7QUFLRSxxQkFBUyxFQUFFSyxTQUxiO0FBTUUsa0JBQU0sRUFBRXhCO0FBTlYsYUFDT2dDLEdBQUcsQ0FBQ0UsRUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUEsU0FERCxDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZCRixlQXVDRTtBQUFLLGlCQUFTLEVBQUMseUJBQWY7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVHeEMsSUFBSSxDQUFDcUMsR0FBTCxDQUNDLFVBQUNDLEdBQUQsRUFBTUMsS0FBTjtBQUFBLGlCQUNFRCxHQUFHLENBQUNsQixLQUFKLEtBQWMsT0FBZCxpQkFDRSw4REFBQyw2REFBRDtBQUVFLGVBQUcsRUFBRWtCLEdBRlA7QUFHRSxpQkFBSyxFQUFFQyxLQUhUO0FBSUUsZ0JBQUksRUFBRWQsSUFKUjtBQUtFLHFCQUFTLEVBQUVLLFNBTGI7QUFNRSxrQkFBTSxFQUFFeEI7QUFOVixhQUNPZ0MsR0FBRyxDQUFDRSxFQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQSxTQURELENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkNGLGVBdURFO0FBQUEscUNBQWtCL0MsT0FBTyxDQUFDZ0QsSUFBUixDQUFhQyxJQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F2REYsb0JBdUQ0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkQ1QyxlQXdERTtBQUFRLGVBQU8sRUFBRTtBQUFBLGlCQUFNQyx5REFBTyxFQUFiO0FBQUEsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0ZEOztHQXJLdUJyRCxJO1VBQ0tFLHdEOzs7S0FETEYsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42Y2YzYWE5MDEwMGEwM2U4ODkzZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBzaWduSW4sIHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG5pbXBvcnQgVGFwV2lkZ2V0IGZyb20gXCIuL2NvbXBvbmVudHMvdGFwd2lkZ2V0LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyB0YXBzREIgfSkge1xuICBjb25zdCBbc2Vzc2lvbiwgbG9hZGluZ10gPSB1c2VTZXNzaW9uKCk7XG5cbiAgY29uc3QgW25ld1RyaWdnZXIsIHNldE5ld1RyaWdnZXJdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtuZXdBY3Rpb24sIHNldE5ld0FjdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3RhcHMsIHNldFRhcHNdID0gdXNlU3RhdGUodGFwc0RCKTtcbiAgY29uc3QgW2N1ckRheSwgc2V0Q3VyRGF5XSA9IHVzZVN0YXRlKFxuICAgIE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSlcbiAgKTsgLy8gZnVsbCBkYXlzIHNpbmNlIGphbiAxc3QgMTk3MFxuXG4gIG5ld0RheSgpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIG5ld0RheSgpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS91cGRhdGVNYW55VGFwc1wiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogeyBjdXJEYXk6IGN1ckRheSB9LFxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UuanNvbigpKTtcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2U7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzYXZlTmV3VGFwKCkge1xuICAgIGNvbnN0IG5ld1RhcCA9IHtcbiAgICAgIHRyaWdnZXI6IG5ld1RyaWdnZXIsXG4gICAgICBhY3Rpb246IG5ld0FjdGlvbixcbiAgICAgIHJhdGVkOiBcImZhbHNlXCIsXG4gICAgfTtcblxuICAgIGxldCBuZXdBcnIgPSBbLi4udGFwc107XG4gICAgbmV3QXJyLnVuc2hpZnQobmV3VGFwKTtcbiAgICBzZXRUYXBzKG5ld0Fycik7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9jcmVhdGVUYXBcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld1RhcCksXG4gICAgfSk7XG5cbiAgICBzZXROZXdUcmlnZ2VyKFwiXCIpO1xuICAgIHNldE5ld0FjdGlvbihcIlwiKTtcblxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmpzb24oKSk7XG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gcmF0ZShpLCByYXRpbmcpIHtcbiAgICBsZXQgbmV3QXJyID0gWy4uLnRhcHNdO1xuICAgIG5ld0FycltpXS5zdHJlYWsgPVxuICAgICAgcmF0aW5nID09IFwiZG9uZVwiXG4gICAgICAgID8gbmV3QXJyW2ldLnJhdGVkICE9PSBcImRvbmVcIiAvLyB3YXMgdGhlIHJhdGluZyBhbHJlYWR5ICdkb25lJz9cbiAgICAgICAgICA/IG5ld0FycltpXS5zdHJlYWsgKyAxXG4gICAgICAgICAgOiBuZXdBcnJbaV0uc3RyZWFrXG4gICAgICAgIDogMDtcbiAgICBuZXdBcnJbaV0ucmF0ZWQgPSByYXRpbmc7XG4gICAgbmV3QXJyW2ldLmxhc3RSYXRlZCA9IGN1ckRheTtcbiAgICBzZXRUYXBzKG5ld0Fycik7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS91cGRhdGVUYXBcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRhcHNbaV0pLFxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UuanNvbigpKTtcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2U7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBkZWxldGVUYXAoaSkge1xuICAgIGNvbnNvbGUubG9nKFwiZGVsZXRpbmdcIik7XG4gICAgY29uc29sZS5sb2codGFwc1tpXSk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9kZWxldGVUYXBcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRhcHNbaV0pLFxuICAgIH0pO1xuXG4gICAgbGV0IG5ld0FyciA9IFsuLi50YXBzXTtcbiAgICBuZXdBcnIuc3BsaWNlKGksIDEpO1xuICAgIHNldFRhcHMobmV3QXJyKTtcblxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmpzb24oKSk7XG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXB1cnBsZS0yMDAgdGV4dC1jZW50ZXIgbWluLWgtc2NyZWVuIHctWzYwJV0gbXgtYXV0byB0ZXh0LWNlbnRlciBcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTZ4bCBweS03IGZvbnQtc2VyaWZcIj4gVHJhY3Rpb24gPC9oMT5cbiAgICAgIDxwPlxuICAgICAgICB7XCIgXCJ9XG4gICAgICAgIFNpbmNlIHtjdXJEYXl9e1wiIFwifVxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEN1ckRheShjdXJEYXkgKyAxKX0+ICsgPC9idXR0b24+e1wiIFwifVxuICAgICAgPC9wPlxuXG4gICAgICB7IXNlc3Npb24gJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtNHhsIG10LTEwIHRleHQtd2hpdGUgYm9yZGVyLTEgYm9yZGVyLXdoaXRlIHAtNyBiZy1ibHVlLTQwMCByb3VuZGVkXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3NpZ25Jbn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTaWduIEluXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAge3Nlc3Npb24gJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBweS03XCI+IEFkZCBUYXBzIDwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi0yIGJnLWdyYXktMjAwIHJvdW5kZWQgZmxleCBmbGV4LWNvbCB3LVs2MCVdIG14LWF1dG8gXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICB2YWx1ZT17bmV3VHJpZ2dlcn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdUcmlnZ2VyKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTIgcC0xXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUcmlnZ2VyLi4uXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICB2YWx1ZT17bmV3QWN0aW9ufVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0FjdGlvbihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci0yIHAtMVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWN0aW9uLi4uXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NhdmVOZXdUYXB9IGNsYXNzTmFtZT1cImJvcmRlci0yXCI+XG4gICAgICAgICAgICAgIEFkZFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIHB0LTE2XCI+IE90aGVyIFRBUHM8L2gyPlxuICAgICAgICAgIHt0YXBzLmxlbmd0aCA9PSAwICYmIDxoMT4gWW91IGhhdmUgbm8gVEFQcyA8L2gxPn1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVucmF0ZWRfdGFwcyBiZy1ncmF5LTEwMFwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtM3hsXCI+IFVucmF0ZWQgPC9oMz5cbiAgICAgICAgICAgIHt0YXBzLm1hcChcbiAgICAgICAgICAgICAgKHRhcCwgaW5kZXgpID0+XG4gICAgICAgICAgICAgICAgdGFwLnJhdGVkID09IFwiZmFsc2VcIiAmJiAoXG4gICAgICAgICAgICAgICAgICA8VGFwV2lkZ2V0XG4gICAgICAgICAgICAgICAgICAgIGtleT17dGFwLmlkfVxuICAgICAgICAgICAgICAgICAgICB0YXA9e3RhcH1cbiAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICByYXRlPXtyYXRlfVxuICAgICAgICAgICAgICAgICAgICBkZWxldGVUYXA9e2RlbGV0ZVRhcH1cbiAgICAgICAgICAgICAgICAgICAgY3VyRGF5PXtjdXJEYXl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRlZF90YXBzIGJnLWdyZWVuLTEwMFwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtM3hsXCI+IFJhdGVkIDwvaDM+XG4gICAgICAgICAgICB7dGFwcy5tYXAoXG4gICAgICAgICAgICAgICh0YXAsIGluZGV4KSA9PlxuICAgICAgICAgICAgICAgIHRhcC5yYXRlZCAhPT0gXCJmYWxzZVwiICYmIChcbiAgICAgICAgICAgICAgICAgIDxUYXBXaWRnZXRcbiAgICAgICAgICAgICAgICAgICAga2V5PXt0YXAuaWR9XG4gICAgICAgICAgICAgICAgICAgIHRhcD17dGFwfVxuICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIHJhdGU9e3JhdGV9XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZVRhcD17ZGVsZXRlVGFwfVxuICAgICAgICAgICAgICAgICAgICBjdXJEYXk9e2N1ckRheX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cD4gU2lnbmVkIGluIGFzIHtzZXNzaW9uLnVzZXIubmFtZX0gPC9wPiA8YnIgLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX0+U2lnbiBvdXQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihjb250ZXh0KTtcblxuICBsZXQgdGFwcyA9IHt9O1xuXG4gIGlmIChzZXNzaW9uKSB7XG4gICAgdGFwcyA9IGF3YWl0IHByaXNtYS50YXAuZmluZE1hbnkoeyB3aGVyZTogeyB1c2VyOiBzZXNzaW9uLnVzZXIubmFtZSB9IH0pO1xuICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgdGFwc0RCOiB0YXBzLFxuICAgIH0sXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9