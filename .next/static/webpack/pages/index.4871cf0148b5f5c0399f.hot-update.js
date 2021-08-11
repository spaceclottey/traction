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
    }, void 0, true), session && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        className: "text-6xl text-center",
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
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }, this), session && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInRhcHMiLCJ1c2VTZXNzaW9uIiwic2Vzc2lvbiIsImxvYWRpbmciLCJ1c2VTdGF0ZSIsIm5ld1RyaWdnZXIiLCJzZXROZXdUcmlnZ2VyIiwibmV3QWN0aW9uIiwic2V0TmV3QWN0aW9uIiwic2F2ZU5ld1RhcCIsIm5ld1RhcCIsInRyaWdnZXIiLCJhY3Rpb24iLCJwdXNoIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJzaWduSW4iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJ0YXAiLCJpbmRleCIsImxlbmd0aCIsInVzZXIiLCJuYW1lIiwic2lnbk91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQVFlLFNBQVNBLElBQVQsT0FBc0I7QUFBQTs7QUFBQTs7QUFBQSxNQUFQQyxJQUFPLFFBQVBBLElBQU87O0FBQUEsb0JBQ1JDLDREQUFVLEVBREY7QUFBQTtBQUFBLE1BQzVCQyxPQUQ0QjtBQUFBLE1BQ25CQyxPQURtQjs7QUFBQSxrQkFHQ0MsK0NBQVEsQ0FBQyxFQUFELENBSFQ7QUFBQSxNQUc1QkMsVUFINEI7QUFBQSxNQUdoQkMsYUFIZ0I7O0FBQUEsbUJBSURGLCtDQUFRLENBQUMsRUFBRCxDQUpQO0FBQUEsTUFJNUJHLFNBSjRCO0FBQUEsTUFJakJDLFlBSmlCOztBQUFBLFdBU3BCQyxVQVRvQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSxvVUFTbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1FDLG9CQURSLEdBQ2lCO0FBQ2JDLHVCQUFPLEVBQUVOLFVBREk7QUFFYk8sc0JBQU0sRUFBRUw7QUFGSyxlQURqQjtBQU1FUCxrQkFBSSxDQUFDYSxJQUFMLENBQVVILE1B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LHVCQUFTLEVBQUMscUJBQWY7QUFBQSxzQ0FDRTtBQUFRLHlCQUFTLEVBQUMsWUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRixlQUdFO0FBQVEseUJBQVMsRUFBQyxjQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURRO0FBQUEsU0FBVDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaQSxFQTJCQ1osSUFBSSxDQUFDOEIsTUFBTCxJQUFlLENBQWYsaUJBQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E1QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEosRUEyQ0c1QixPQUFPLGlCQUFJO0FBQUEsa0NBQ0VBLE9BQU8sQ0FBQzZCLElBQVIsQ0FBYUMsSUFEZixvQkFDcUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURyQixlQUVaO0FBQVEsZUFBTyxFQUFFO0FBQUEsaUJBQU1DLHlEQUFPLEVBQWI7QUFBQSxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZZO0FBQUEsb0JBM0NkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0REOztHQWhGdUJsQyxJO1VBQ0tFLHdEOzs7S0FETEYsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40ODcxY2YwMTQ4YjVmNWMwMzk5Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCdcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiXG5cblxuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHt0YXBzfSkge1xuICBjb25zdCBbc2Vzc2lvbiwgbG9hZGluZ10gPSB1c2VTZXNzaW9uKClcblxuICBjb25zdCBbbmV3VHJpZ2dlciwgc2V0TmV3VHJpZ2dlcl0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW25ld0FjdGlvbiwgc2V0TmV3QWN0aW9uXSA9IHVzZVN0YXRlKCcnKVxuXG5cbiAgXG5cbiAgYXN5bmMgZnVuY3Rpb24gc2F2ZU5ld1RhcCgpe1xuICAgIGNvbnN0IG5ld1RhcCA9IHtcbiAgICAgIHRyaWdnZXI6IG5ld1RyaWdnZXIsXG4gICAgICBhY3Rpb246IG5ld0FjdGlvblxuICAgIH1cblxuICAgIHRhcHMucHVzaChuZXdUYXApXG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9jcmVhdGVUYXBcIiwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdUYXApXG4gICAgfSlcblxuICAgIFxuICAgIHNldE5ld1RyaWdnZXIoJycpXG4gICAgc2V0TmV3QWN0aW9uKCcnKVxuXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UuanNvbigpKSAgXG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIHctWzc1dmhdIG14LWF1dG8gXCI+IFxuXG4gICAgICB7IXNlc3Npb24gJiYgPD5cblxuICAgICAgICA8cD4gTm90IHNpZ25lZCBpbiA8L3A+IDxici8+IFxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25JbigpfT5TaWduIGluPC9idXR0b24+XG4gICAgICA8Lz5cbiAgICAgIH1cbiAgICAgIFxuXG4gICAgICB7c2Vzc2lvbiAmJiBcbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNnhsIHRleHQtY2VudGVyXCI+IFRyYWN0aW9uIDwvaDE+IFxuICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIGJnLWdyYXktMjAwIHJvdW5kZWQgZmxleCBmbGV4LWNvbCB3LVs2MCVdXCI+XG4gICAgICAgICAgPGg2PiBBZGQgVGFwIDwvaDY+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e25ld1RyaWdnZXJ9IG9uQ2hhbmdlPXtlID0+IHNldE5ld1RyaWdnZXIoZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJib3JkZXItMiBwLTFcIiBwbGFjZWhvbGRlcj1cIlRyaWdnZXIuLi5cIi8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e25ld0FjdGlvbn0gb25DaGFuZ2U9e2UgPT4gc2V0TmV3QWN0aW9uKGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwiYm9yZGVyLTIgcC0xXCIgcGxhY2Vob2xkZXI9XCJBY3Rpb24uLi5cIi8+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzYXZlTmV3VGFwfSBjbGFzc05hbWU9XCJib3JkZXItMlwiPkFkZCBUQVA8L2J1dHRvbj4gXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxoMT4gT3RoZXIgVGFwcyA8L2gxPiBcblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPiBcbiAgICAgICAgICB7dGFwcy5tYXAoKHRhcCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIGJnLWdyYXktMzAwIHJvdW5kZWQgZmxleCBmbGV4LWNvbCB3LVs2MCVdIG15LTEwXCI+XG4gICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPiBUQVAgPC9oNj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RhcC50cmlnZ2VyfSBjbGFzc05hbWU9XCJib3JkZXItMiBwLTFcIiBwbGFjZWhvbGRlcj1cIlRyaWdnZXIuLi5cIi8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0YXAuYWN0aW9ufSBjbGFzc05hbWU9XCJib3JkZXItMiBwLTFcIiBwbGFjZWhvbGRlcj1cIkFjdGlvbi4uLlwiLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYXJvdW5kXCI+IFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctcmVkLTIwMFwiPiAtIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24+IERlbGV0ZSA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyZWVuLTIwMFwiPiArPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfSBcbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge3RhcHMubGVuZ3RoID09IDAgJiZcbiAgICAgICAgPGgxPiBZb3UgaGF2ZSBubyB0YXBzIDwvaDE+IH1cbiAgICAgIDwvZGl2PiBcbiAgICAgIH1cblxuICAgICAge3Nlc3Npb24gJiYgPD5cbiAgICAgIFNpZ25lZCBpbiBhcyB7c2Vzc2lvbi51c2VyLm5hbWV9IDxici8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX0+U2lnbiBvdXQ8L2J1dHRvbj5cbiAgICA8Lz59XG4gICAgPC9kaXY+ICBcbiAgKTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpe1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihjb250ZXh0KVxuXG4gIGxldCB0YXBzID0ge31cblxuICBpZiAoc2Vzc2lvbikge1xuICAgIHRhcHMgPSBhd2FpdCBwcmlzbWEudGFwLmZpbmRNYW55KHt3aGVyZToge3VzZXI6IHNlc3Npb24udXNlci5uYW1lfX0pXG4gICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KClcbiAgfVxuICBcblxuICByZXR1cm4ge1xuICAgIHByb3BzIDoge1xuICAgICAgdGFwczogdGFwc1xuICAgIH0sXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=