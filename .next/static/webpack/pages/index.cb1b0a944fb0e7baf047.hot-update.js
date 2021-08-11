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
        className: "text-6xl py-7 font-serif",
        children: " Traction "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
        children: " Add Taps "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
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
        lineNumber: 59,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        className: "text-4xl py-7",
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
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
              type: "text",
              value: "T: ".concat(tap.trigger),
              className: "border-2 p-1",
              placeholder: "Trigger..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
              type: "text",
              value: "A: ".concat(tap.action),
              className: "border-2 p-1",
              placeholder: "Action..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "flex justify-around",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                className: "bg-red-200",
                children: " - "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                children: " Delete "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                className: "bg-green-200",
                children: " +"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 72,
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
        lineNumber: 82,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        children: [" Signed in as ", session.user.name, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 11
      }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 53
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        onClick: function onClick() {
          return (0,next_auth_client__WEBPACK_IMPORTED_MODULE_7__.signOut)();
        },
        children: "Sign out"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInRhcHMiLCJ1c2VTZXNzaW9uIiwic2Vzc2lvbiIsImxvYWRpbmciLCJ1c2VTdGF0ZSIsIm5ld1RyaWdnZXIiLCJzZXROZXdUcmlnZ2VyIiwibmV3QWN0aW9uIiwic2V0TmV3QWN0aW9uIiwic2F2ZU5ld1RhcCIsIm5ld1RhcCIsInRyaWdnZXIiLCJhY3Rpb24iLCJwdXNoIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJzaWduSW4iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJ0YXAiLCJpbmRleCIsImxlbmd0aCIsInVzZXIiLCJuYW1lIiwic2lnbk91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQVFlLFNBQVNBLElBQVQsT0FBc0I7QUFBQTs7QUFBQTs7QUFBQSxNQUFQQyxJQUFPLFFBQVBBLElBQU87O0FBQUEsb0JBQ1JDLDREQUFVLEVBREY7QUFBQTtBQUFBLE1BQzVCQyxPQUQ0QjtBQUFBLE1BQ25CQyxPQURtQjs7QUFBQSxrQkFHQ0MsK0NBQVEsQ0FBQyxFQUFELENBSFQ7QUFBQSxNQUc1QkMsVUFINEI7QUFBQSxNQUdoQkMsYUFIZ0I7O0FBQUEsbUJBSURGLCtDQUFRLENBQUMsRUFBRCxDQUpQO0FBQUEsTUFJNUJHLFNBSjRCO0FBQUEsTUFJakJDLFlBSmlCOztBQUFBLFdBU3BCQyxVQVRvQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSxvVUFTbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1FDLG9CQURSLEdBQ2lCO0FBQ2JDLHVCQUFPLEVBQUVOLFVBREk7QUFFYk8sc0JBQU0sRUFBRUw7QUFGSyxlQURqQjtBQU1FUCxrQkFBSSxDQUFDYSxJQUFMLENBQVVILE1B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LHFCQUFmO0FBQUEsc0NBQ0U7QUFBUSx5QkFBUyxFQUFDLFlBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkYsZUFHRTtBQUFRLHlCQUFTLEVBQUMsY0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUTtBQUFBLFNBQVQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkYsRUEwQkdaLElBQUksQ0FBQzhCLE1BQUwsSUFBZSxDQUFmLGlCQUNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0JGLGVBOEJFO0FBQUEscUNBQWtCNUIsT0FBTyxDQUFDNkIsSUFBUixDQUFhQyxJQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E5QkYsb0JBOEI0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBOUI1QyxlQStCRTtBQUFRLGVBQU8sRUFBRTtBQUFBLGlCQUFNQyx5REFBTyxFQUFiO0FBQUEsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvREQ7O0dBbEZ1QmxDLEk7VUFDS0Usd0Q7OztLQURMRixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNiMWIwYTk0NGZiMGU3YmFmMDQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5pbXBvcnQgeyBzaWduSW4sIHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50J1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCJcblxuXG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe3RhcHN9KSB7XG4gIGNvbnN0IFtzZXNzaW9uLCBsb2FkaW5nXSA9IHVzZVNlc3Npb24oKVxuXG4gIGNvbnN0IFtuZXdUcmlnZ2VyLCBzZXROZXdUcmlnZ2VyXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbbmV3QWN0aW9uLCBzZXROZXdBY3Rpb25dID0gdXNlU3RhdGUoJycpXG5cblxuICBcblxuICBhc3luYyBmdW5jdGlvbiBzYXZlTmV3VGFwKCl7XG4gICAgY29uc3QgbmV3VGFwID0ge1xuICAgICAgdHJpZ2dlcjogbmV3VHJpZ2dlcixcbiAgICAgIGFjdGlvbjogbmV3QWN0aW9uXG4gICAgfVxuXG4gICAgdGFwcy5wdXNoKG5ld1RhcClcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2NyZWF0ZVRhcFwiLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld1RhcClcbiAgICB9KVxuXG4gICAgXG4gICAgc2V0TmV3VHJpZ2dlcignJylcbiAgICBzZXROZXdBY3Rpb24oJycpXG5cbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5qc29uKCkpICBcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2VcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gdy1bNzV2aF0gbXgtYXV0byB0ZXh0LWNlblwiPiBcblxuICAgICAgeyFzZXNzaW9uICYmIDw+XG5cbiAgICAgICAgPHA+IE5vdCBzaWduZWQgaW4gPC9wPiA8YnIvPiBcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduSW4oKX0+U2lnbiBpbjwvYnV0dG9uPlxuICAgICAgPC8+XG4gICAgICB9XG4gICAgICBcblxuICAgICAge3Nlc3Npb24gJiYgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcHVycGxlLTIwMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTZ4bCBweS03IGZvbnQtc2VyaWZcIj4gVHJhY3Rpb24gPC9oMT4gXG4gICAgICAgIFxuICAgICAgICAgIDxoMj4gQWRkIFRhcHMgPC9oMj4gXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi0yIGJnLWdyYXktMjAwIHJvdW5kZWQgZmxleCBmbGV4LWNvbCB3LVs2MCVdIG14LWF1dG8gXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bmV3VHJpZ2dlcn0gb25DaGFuZ2U9e2UgPT4gc2V0TmV3VHJpZ2dlcihlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cImJvcmRlci0yIHAtMVwiIHBsYWNlaG9sZGVyPVwiVHJpZ2dlci4uLlwiLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtuZXdBY3Rpb259IG9uQ2hhbmdlPXtlID0+IHNldE5ld0FjdGlvbihlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cImJvcmRlci0yIHAtMVwiIHBsYWNlaG9sZGVyPVwiQWN0aW9uLi4uXCIvPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzYXZlTmV3VGFwfSBjbGFzc05hbWU9XCJib3JkZXItMlwiPkFkZCBUQVA8L2J1dHRvbj4gXG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgcHktN1wiPiBPdGhlciBUYXBzIDwvaDE+IFxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj4gXG4gICAgICAgICAgICB7dGFwcy5tYXAoKHRhcCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgYmctZ3JheS0zMDAgcm91bmRlZCBmbGV4IGZsZXgtY29sIHctWzYwJV0gbXgtYXV0byBteS0xMFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtgVDogJHt0YXAudHJpZ2dlcn1gfSBjbGFzc05hbWU9XCJib3JkZXItMiBwLTFcIiBwbGFjZWhvbGRlcj1cIlRyaWdnZXIuLi5cIi8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2BBOiAke3RhcC5hY3Rpb259YH0gY2xhc3NOYW1lPVwiYm9yZGVyLTIgcC0xXCIgcGxhY2Vob2xkZXI9XCJBY3Rpb24uLi5cIi8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYXJvdW5kXCI+IFxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1yZWQtMjAwXCI+IC0gPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uPiBEZWxldGUgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyZWVuLTIwMFwiPiArPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfSBcbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHt0YXBzLmxlbmd0aCA9PSAwICYmXG4gICAgICAgICAgPGgxPiBZb3UgaGF2ZSBubyB0YXBzIDwvaDE+IH1cblxuXG4gICAgICAgICAgPHA+IFNpZ25lZCBpbiBhcyB7c2Vzc2lvbi51c2VyLm5hbWV9IDwvcD4gPGJyLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX0+U2lnbiBvdXQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+IFxuICAgICAgfVxuXG4gICAgICBcbiAgICAgIFxuXG4gICAgPC9kaXY+ICBcbiAgKTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpe1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihjb250ZXh0KVxuXG4gIGxldCB0YXBzID0ge31cblxuICBpZiAoc2Vzc2lvbikge1xuICAgIHRhcHMgPSBhd2FpdCBwcmlzbWEudGFwLmZpbmRNYW55KHt3aGVyZToge3VzZXI6IHNlc3Npb24udXNlci5uYW1lfX0pXG4gICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KClcbiAgfVxuICBcblxuICByZXR1cm4ge1xuICAgIHByb3BzIDoge1xuICAgICAgdGFwczogdGFwc1xuICAgIH0sXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=