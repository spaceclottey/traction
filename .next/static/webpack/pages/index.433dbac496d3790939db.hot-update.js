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
              }; // taps.push(newTap)

              _context.next = 3;
              return fetch("/api/createTap", {
                method: 'POST',
                body: JSON.stringify(newTap)
              });

            case 3:
              response = _context.sent;
              setNewTrigger('');
              setNewAction('');
              console.log(response.json());
              _context.next = 9;
              return response;

            case 9:
              return _context.abrupt("return", _context.sent);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _saveNewTap.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "min-h-screen w-[75vh] mx-auto ",
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
    }, void 0, true), session && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        className: "text-6xl",
        children: " Traction "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "p-2 bg-gray-200 rounded flex flex-col w-[60%]",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h6", {
          children: " Add Tap "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
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
          columnNumber: 11
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
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
          onClick: saveNewTap,
          className: "border-2",
          children: "Add TAP"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        children: " Other Taps "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "",
        children: taps.map(function (tap, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "p-2 bg-gray-300 rounded flex flex-col w-[60%] my-10",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h6", {
              className: "text-center",
              children: " TAP "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
              type: "text",
              value: tap.trigger,
              className: "border-2 p-1",
              placeholder: "Trigger..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
              type: "text",
              value: tap.action,
              className: "border-2 p-1",
              placeholder: "Action..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "flex justify-around",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                className: "bg-red-200",
                children: " - "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                children: " Delete "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                className: "bg-green-200",
                children: " +"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), taps.length == 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        children: " You have no taps "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this)]
    }, void 0, true), session && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: ["Signed in as ", session.user.name, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 40
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        onClick: function onClick() {
          return (0,next_auth_client__WEBPACK_IMPORTED_MODULE_7__.signOut)();
        },
        children: "Sign out"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 7
      }, this)]
    }, void 0, true)]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInRhcHMiLCJ1c2VTZXNzaW9uIiwic2Vzc2lvbiIsImxvYWRpbmciLCJ1c2VTdGF0ZSIsIm5ld1RyaWdnZXIiLCJzZXROZXdUcmlnZ2VyIiwibmV3QWN0aW9uIiwic2V0TmV3QWN0aW9uIiwic2F2ZU5ld1RhcCIsIm5ld1RhcCIsInRyaWdnZXIiLCJhY3Rpb24iLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwianNvbiIsInNpZ25JbiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsInRhcCIsImluZGV4IiwibGVuZ3RoIiwidXNlciIsIm5hbWUiLCJzaWduT3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBUWUsU0FBU0EsSUFBVCxPQUFzQjtBQUFBOztBQUFBOztBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTzs7QUFBQSxvQkFDUkMsNERBQVUsRUFERjtBQUFBO0FBQUEsTUFDNUJDLE9BRDRCO0FBQUEsTUFDbkJDLE9BRG1COztBQUFBLGtCQUdDQywrQ0FBUSxDQUFDLEVBQUQsQ0FIVDtBQUFBLE1BRzVCQyxVQUg0QjtBQUFBLE1BR2hCQyxhQUhnQjs7QUFBQSxtQkFJREYsK0NBQVEsQ0FBQyxFQUFELENBSlA7QUFBQSxNQUk1QkcsU0FKNEI7QUFBQSxNQUlqQkMsWUFKaUI7O0FBQUEsV0FTcEJDLFVBVG9CO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG9VQVNuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUUMsb0JBRFIsR0FDaUI7QUFDYkMsdUJBQU8sRUFBRU4sVUFESTtBQUViTyxzQkFBTSxFQUFFTDtBQUZLLGVBRGpCLEVBTUU7O0FBTkY7QUFBQSxxQkFReUJNLEtBQUssQ0FBQyxnQkFB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LEVBQUMsWUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRixlQUdFO0FBQVEseUJBQVMsRUFBQyxjQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURRO0FBQUEsU0FBVDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaQSxFQTJCQ1osSUFBSSxDQUFDNkIsTUFBTCxJQUFlLENBQWYsaUJBQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E1QkE7QUFBQSxvQkFYSixFQTJDRzNCLE9BQU8saUJBQUk7QUFBQSxrQ0FDRUEsT0FBTyxDQUFDNEIsSUFBUixDQUFhQyxJQURmLG9CQUNxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRHJCLGVBRVo7QUFBUSxlQUFPLEVBQUU7QUFBQSxpQkFBTUMseURBQU8sRUFBYjtBQUFBLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRlk7QUFBQSxvQkEzQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrREQ7O0dBaEZ1QmpDLEk7VUFDS0Usd0Q7OztLQURMRixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQzM2RiYWM0OTZkMzc5MDkzOWRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5pbXBvcnQgeyBzaWduSW4sIHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50J1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCJcblxuXG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe3RhcHN9KSB7XG4gIGNvbnN0IFtzZXNzaW9uLCBsb2FkaW5nXSA9IHVzZVNlc3Npb24oKVxuXG4gIGNvbnN0IFtuZXdUcmlnZ2VyLCBzZXROZXdUcmlnZ2VyXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbbmV3QWN0aW9uLCBzZXROZXdBY3Rpb25dID0gdXNlU3RhdGUoJycpXG5cblxuICBcblxuICBhc3luYyBmdW5jdGlvbiBzYXZlTmV3VGFwKCl7XG4gICAgY29uc3QgbmV3VGFwID0ge1xuICAgICAgdHJpZ2dlcjogbmV3VHJpZ2dlcixcbiAgICAgIGFjdGlvbjogbmV3QWN0aW9uXG4gICAgfVxuXG4gICAgLy8gdGFwcy5wdXNoKG5ld1RhcClcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2NyZWF0ZVRhcFwiLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld1RhcClcbiAgICB9KVxuXG4gICAgXG4gICAgc2V0TmV3VHJpZ2dlcignJylcbiAgICBzZXROZXdBY3Rpb24oJycpXG5cbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5qc29uKCkpICBcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2VcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gdy1bNzV2aF0gbXgtYXV0byBcIj4gXG5cbiAgICAgIHshc2Vzc2lvbiAmJiA8PlxuXG4gICAgICAgIDxwPiBOb3Qgc2lnbmVkIGluIDwvcD4gPGJyLz4gXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbkluKCl9PlNpZ24gaW48L2J1dHRvbj5cbiAgICAgIDwvPlxuICAgICAgfVxuICAgICAgXG5cbiAgICAgIHtzZXNzaW9uICYmIFxuICAgICAgICA8PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC02eGxcIj4gVHJhY3Rpb24gPC9oMT4gXG4gICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgYmctZ3JheS0yMDAgcm91bmRlZCBmbGV4IGZsZXgtY29sIHctWzYwJV1cIj5cbiAgICAgICAgICA8aDY+IEFkZCBUYXAgPC9oNj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bmV3VHJpZ2dlcn0gb25DaGFuZ2U9e2UgPT4gc2V0TmV3VHJpZ2dlcihlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cImJvcmRlci0yIHAtMVwiIHBsYWNlaG9sZGVyPVwiVHJpZ2dlci4uLlwiLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bmV3QWN0aW9ufSBvbkNoYW5nZT17ZSA9PiBzZXROZXdBY3Rpb24oZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJib3JkZXItMiBwLTFcIiBwbGFjZWhvbGRlcj1cIkFjdGlvbi4uLlwiLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NhdmVOZXdUYXB9IGNsYXNzTmFtZT1cImJvcmRlci0yXCI+QWRkIFRBUDwvYnV0dG9uPiBcbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGgxPiBPdGhlciBUYXBzIDwvaDE+IFxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+IFxuICAgICAgICAgIHt0YXBzLm1hcCgodGFwLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgYmctZ3JheS0zMDAgcm91bmRlZCBmbGV4IGZsZXgtY29sIHctWzYwJV0gbXktMTBcIj5cbiAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+IFRBUCA8L2g2PlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGFwLnRyaWdnZXJ9IGNsYXNzTmFtZT1cImJvcmRlci0yIHAtMVwiIHBsYWNlaG9sZGVyPVwiVHJpZ2dlci4uLlwiLz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RhcC5hY3Rpb259IGNsYXNzTmFtZT1cImJvcmRlci0yIHAtMVwiIHBsYWNlaG9sZGVyPVwiQWN0aW9uLi4uXCIvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1hcm91bmRcIj4gXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1yZWQtMjAwXCI+IC0gPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbj4gRGVsZXRlIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctZ3JlZW4tMjAwXCI+ICs8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9IFxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7dGFwcy5sZW5ndGggPT0gMCAmJlxuICAgICAgICA8aDE+IFlvdSBoYXZlIG5vIHRhcHMgPC9oMT4gfVxuICAgICAgPC8+IFxuICAgICAgfVxuXG4gICAgICB7c2Vzc2lvbiAmJiA8PlxuICAgICAgU2lnbmVkIGluIGFzIHtzZXNzaW9uLnVzZXIubmFtZX0gPGJyLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbk91dCgpfT5TaWduIG91dDwvYnV0dG9uPlxuICAgIDwvPn1cbiAgICA8L2Rpdj4gIFxuICApO1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCl7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKGNvbnRleHQpXG5cbiAgaWYgKHNlc3Npb24pIHtcbiAgICBjb25zdCB0YXBzID0gYXdhaXQgcHJpc21hLnRhcC5maW5kTWFueSh7d2hlcmU6IHt1c2VyOiBzZXNzaW9uLnVzZXIubmFtZX19KVxuICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpXG4gIH0gZWxzZSB7XG4gICAgdGFwcyA9IFt7J25vJzogJ25vJ30sIHsndGFwcyc6ICd0YXBzJ31dXG4gIH1cbiAgXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wcyA6IHtcbiAgICAgIHRhcHM6IHRhcHNcbiAgICB9LFxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9