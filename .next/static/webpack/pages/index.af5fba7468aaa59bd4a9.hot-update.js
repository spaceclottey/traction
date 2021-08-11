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
/* harmony import */ var C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/dist/client/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\space\\OneDrive\\Documents\\Code\\Projects\\traction\\pages\\index.js",
    _s = $RefreshSig$();





var __N_SSP = true;
function Home(_ref) {
  _s();

  var _this = this;

  var taps = _ref.taps;

  var _useSession = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_7__.useSession)(),
      _useSession2 = (0,C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useSession, 2),
      session = _useSession2[0],
      loading = _useSession2[1];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      newTrigger = _useState[0],
      setNewTrigger = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      newAction = _useState2[0],
      setNewAction = _useState2[1];

  function saveNewTap() {
    return _saveNewTap.apply(this, arguments);
  }

  function _saveNewTap() {
    _saveNewTap = (0,C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var newTap, response;
      return C_Users_space_OneDrive_Documents_Code_Projects_traction_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              newTap = {
                trigger: newTrigger,
                action: newAction
              };
              taps.push(newTap);
              _context.next = 4;
              return fetch("/api/createTap", {
                method: 'POST',
                body: JSON.stringify(newTap)
              });

            case 4:
              response = _context.sent;
              setNewTrigger('');
              setNewAction('');
              console.log(response.json());
              _context.next = 10;
              return response;

            case 10:
              return _context.abrupt("return", _context.sent);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _saveNewTap.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "min-h-screen w-[75vh] mx-auto text-cen",
    children: [!session && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        children: " Not signed in "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 32
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        onClick: function onClick() {
          return (0,next_auth_client__WEBPACK_IMPORTED_MODULE_7__.signIn)();
        },
        children: "Sign in"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)]
    }, void 0, true), session && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "bg-purple-200 text-center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        className: "text-6xl my-10",
        children: " Traction "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "p-2 bg-gray-200 rounded flex flex-col w-[60%] mx-auto ",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h6", {
          children: " Add Tap "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
          type: "text",
          value: newTrigger,
          onChange: function onChange(e) {
            return setNewTrigger(e.target.value);
          },
          className: "border-2 p-1",
          placeholder: "Trigger..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
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
          lineNumber: 61,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
          onClick: saveNewTap,
          className: "border-2",
          children: "Add TAP"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        children: " Other Taps "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "",
        children: taps.map(function (tap, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "p-2 bg-gray-300 rounded flex flex-col w-[60%] mx-auto my-10",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h6", {
              className: "text-center",
              children: " TAP "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
              type: "text",
              value: tap.trigger,
              className: "border-2 p-1",
              placeholder: "Trigger..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
              type: "text",
              value: tap.action,
              className: "border-2 p-1",
              placeholder: "Action..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "flex justify-around",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                className: "bg-red-200",
                children: " - "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                children: " Delete "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                className: "bg-green-200",
                children: " +"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 11
      }, this), taps.length == 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        children: " You have no taps "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        children: [" Signed in as ", session.user.name, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 11
      }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 53
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        onClick: function onClick() {
          return (0,next_auth_client__WEBPACK_IMPORTED_MODULE_7__.signOut)();
        },
        children: "Sign out"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, this);
}

_s(Home, "gdCJw7o6zHkQjqupyH0jET2WdBE=", false, function () {
  return [next_auth_client__WEBPACK_IMPORTED_MODULE_7__.useSession];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInRhcHMiLCJ1c2VTZXNzaW9uIiwic2Vzc2lvbiIsImxvYWRpbmciLCJ1c2VTdGF0ZSIsIm5ld1RyaWdnZXIiLCJzZXROZXdUcmlnZ2VyIiwibmV3QWN0aW9uIiwic2V0TmV3QWN0aW9uIiwic2F2ZU5ld1RhcCIsIm5ld1RhcCIsInRyaWdnZXIiLCJhY3Rpb24iLCJwdXNoIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJzaWduSW4iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJ0YXAiLCJpbmRleCIsImxlbmd0aCIsInVzZXIiLCJuYW1lIiwic2lnbk91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQVFlLFNBQVNBLElBQVQsT0FBc0I7QUFBQTs7QUFBQTs7QUFBQSxNQUFQQyxJQUFPLFFBQVBBLElBQU87O0FBQUEsb0JBQ1JDLDREQUFVLEVBREY7QUFBQTtBQUFBLE1BQzVCQyxPQUQ0QjtBQUFBLE1BQ25CQyxPQURtQjs7QUFBQSxrQkFHQ0MsK0NBQVEsQ0FBQyxFQUFELENBSFQ7QUFBQSxNQUc1QkMsVUFINEI7QUFBQSxNQUdoQkMsYUFIZ0I7O0FBQUEsbUJBSURGLCtDQUFRLENBQUMsRUFBRCxDQUpQO0FBQUEsTUFJNUJHLFNBSjRCO0FBQUEsTUFJakJDLFlBSmlCOztBQUFBLFdBU3BCQyxVQVRvQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSxvVUFTbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1FDLG9CQURSLEdBQ2lCO0FBQ2JDLHVCQUFPLEVBQUVOLFVBREk7QUFFYk8sc0JBQU0sRUFBRUw7QUFGSyxlQURqQjtBQU1FUCxrQkFBSSxDQUFDYSxJQUFMLENBQVVILE1B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O0FBQUEscUJBSEYsZUFJRTtBQUFLLHVCQUFTLEVBQUMscUJBQWY7QUFBQSxzQ0FDRTtBQUFRLHlCQUFTLEVBQUMsWUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRixlQUdFO0FBQVEseUJBQVMsRUFBQyxjQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURRO0FBQUEsU0FBVDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaRixFQTJCR1osSUFBSSxDQUFDOEIsTUFBTCxJQUFlLENBQWYsaUJBQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E1QkYsZUErQkU7QUFBQSxxQ0FBa0I1QixPQUFPLENBQUM2QixJQUFSLENBQWFDLElBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQS9CRixvQkErQjRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EvQjVDLGVBZ0NFO0FBQVEsZUFBTyxFQUFFO0FBQUEsaUJBQU1DLHlEQUFPLEVBQWI7QUFBQSxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFERDs7R0FuRnVCbEMsSTtVQUNLRSx3RDs7O0tBRExGLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWY1ZmJhNzQ2OGFhYTU5YmQ0YTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcbmltcG9ydCB7IHNpZ25Jbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIlxuXG5cblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7dGFwc30pIHtcbiAgY29uc3QgW3Nlc3Npb24sIGxvYWRpbmddID0gdXNlU2Vzc2lvbigpXG5cbiAgY29uc3QgW25ld1RyaWdnZXIsIHNldE5ld1RyaWdnZXJdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtuZXdBY3Rpb24sIHNldE5ld0FjdGlvbl0gPSB1c2VTdGF0ZSgnJylcblxuXG4gIFxuXG4gIGFzeW5jIGZ1bmN0aW9uIHNhdmVOZXdUYXAoKXtcbiAgICBjb25zdCBuZXdUYXAgPSB7XG4gICAgICB0cmlnZ2VyOiBuZXdUcmlnZ2VyLFxuICAgICAgYWN0aW9uOiBuZXdBY3Rpb25cbiAgICB9XG5cbiAgICB0YXBzLnB1c2gobmV3VGFwKVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvY3JlYXRlVGFwXCIsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3VGFwKVxuICAgIH0pXG5cbiAgICBcbiAgICBzZXROZXdUcmlnZ2VyKCcnKVxuICAgIHNldE5ld0FjdGlvbignJylcblxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmpzb24oKSkgIFxuICAgIHJldHVybiBhd2FpdCByZXNwb25zZVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiB3LVs3NXZoXSBteC1hdXRvIHRleHQtY2VuXCI+IFxuXG4gICAgICB7IXNlc3Npb24gJiYgPD5cblxuICAgICAgICA8cD4gTm90IHNpZ25lZCBpbiA8L3A+IDxici8+IFxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25JbigpfT5TaWduIGluPC9idXR0b24+XG4gICAgICA8Lz5cbiAgICAgIH1cbiAgICAgIFxuXG4gICAgICB7c2Vzc2lvbiAmJiBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1wdXJwbGUtMjAwIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNnhsIG15LTEwXCI+IFRyYWN0aW9uIDwvaDE+IFxuICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBiZy1ncmF5LTIwMCByb3VuZGVkIGZsZXggZmxleC1jb2wgdy1bNjAlXSBteC1hdXRvIFwiPlxuICAgICAgICAgICAgPGg2PiBBZGQgVGFwIDwvaDY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bmV3VHJpZ2dlcn0gb25DaGFuZ2U9e2UgPT4gc2V0TmV3VHJpZ2dlcihlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cImJvcmRlci0yIHAtMVwiIHBsYWNlaG9sZGVyPVwiVHJpZ2dlci4uLlwiLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtuZXdBY3Rpb259IG9uQ2hhbmdlPXtlID0+IHNldE5ld0FjdGlvbihlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cImJvcmRlci0yIHAtMVwiIHBsYWNlaG9sZGVyPVwiQWN0aW9uLi4uXCIvPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzYXZlTmV3VGFwfSBjbGFzc05hbWU9XCJib3JkZXItMlwiPkFkZCBUQVA8L2J1dHRvbj4gXG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8aDE+IE90aGVyIFRhcHMgPC9oMT4gXG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPiBcbiAgICAgICAgICAgIHt0YXBzLm1hcCgodGFwLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBiZy1ncmF5LTMwMCByb3VuZGVkIGZsZXggZmxleC1jb2wgdy1bNjAlXSBteC1hdXRvIG15LTEwXCI+XG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+IFRBUCA8L2g2PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0YXAudHJpZ2dlcn0gY2xhc3NOYW1lPVwiYm9yZGVyLTIgcC0xXCIgcGxhY2Vob2xkZXI9XCJUcmlnZ2VyLi4uXCIvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0YXAuYWN0aW9ufSBjbGFzc05hbWU9XCJib3JkZXItMiBwLTFcIiBwbGFjZWhvbGRlcj1cIkFjdGlvbi4uLlwiLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1hcm91bmRcIj4gXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXJlZC0yMDBcIj4gLSA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24+IERlbGV0ZSA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctZ3JlZW4tMjAwXCI+ICs8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9IFxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAge3RhcHMubGVuZ3RoID09IDAgJiZcbiAgICAgICAgICA8aDE+IFlvdSBoYXZlIG5vIHRhcHMgPC9oMT4gfVxuXG5cbiAgICAgICAgICA8cD4gU2lnbmVkIGluIGFzIHtzZXNzaW9uLnVzZXIubmFtZX0gPC9wPiA8YnIvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbk91dCgpfT5TaWduIG91dDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj4gXG4gICAgICB9XG5cbiAgICAgIFxuICAgICAgXG5cbiAgICA8L2Rpdj4gIFxuICApO1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCl7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKGNvbnRleHQpXG5cbiAgbGV0IHRhcHMgPSB7fVxuXG4gIGlmIChzZXNzaW9uKSB7XG4gICAgdGFwcyA9IGF3YWl0IHByaXNtYS50YXAuZmluZE1hbnkoe3doZXJlOiB7dXNlcjogc2Vzc2lvbi51c2VyLm5hbWV9fSlcbiAgICBhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKVxuICB9XG4gIFxuXG4gIHJldHVybiB7XG4gICAgcHJvcHMgOiB7XG4gICAgICB0YXBzOiB0YXBzXG4gICAgfSxcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==