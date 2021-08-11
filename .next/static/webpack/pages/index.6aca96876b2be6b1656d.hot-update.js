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
        className: "text-6xl py-7",
        children: " Traction "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
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
          lineNumber: 59,
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
          lineNumber: 60,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
          onClick: saveNewTap,
          className: "border-2",
          children: "Add TAP"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        className: "text-4xl py-7",
        children: " Other Taps "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "",
        children: taps.map(function (tap, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "p-2 bg-gray-300 rounded flex flex-col w-[60%] mx-auto my-10",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
              type: "text",
              value: tap.trigger,
              className: "border-2 p-1",
              placeholder: "Trigger..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
              type: "text",
              value: tap.action,
              className: "border-2 p-1",
              placeholder: "Action..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "flex justify-around",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                className: "bg-red-200",
                children: " - "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                children: " Delete "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                className: "bg-green-200",
                children: " +"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }, this), taps.length == 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        children: " You have no taps "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        children: [" Signed in as ", session.user.name, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 53
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        onClick: function onClick() {
          return (0,next_auth_client__WEBPACK_IMPORTED_MODULE_7__.signOut)();
        },
        children: "Sign out"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInRhcHMiLCJ1c2VTZXNzaW9uIiwic2Vzc2lvbiIsImxvYWRpbmciLCJ1c2VTdGF0ZSIsIm5ld1RyaWdnZXIiLCJzZXROZXdUcmlnZ2VyIiwibmV3QWN0aW9uIiwic2V0TmV3QWN0aW9uIiwic2F2ZU5ld1RhcCIsIm5ld1RhcCIsInRyaWdnZXIiLCJhY3Rpb24iLCJwdXNoIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJzaWduSW4iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJ0YXAiLCJpbmRleCIsImxlbmd0aCIsInVzZXIiLCJuYW1lIiwic2lnbk91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQVFlLFNBQVNBLElBQVQsT0FBc0I7QUFBQTs7QUFBQTs7QUFBQSxNQUFQQyxJQUFPLFFBQVBBLElBQU87O0FBQUEsb0JBQ1JDLDREQUFVLEVBREY7QUFBQTtBQUFBLE1BQzVCQyxPQUQ0QjtBQUFBLE1BQ25CQyxPQURtQjs7QUFBQSxrQkFHQ0MsK0NBQVEsQ0FBQyxFQUFELENBSFQ7QUFBQSxNQUc1QkMsVUFINEI7QUFBQSxNQUdoQkMsYUFIZ0I7O0FBQUEsbUJBSURGLCtDQUFRLENBQUMsRUFBRCxDQUpQO0FBQUEsTUFJNUJHLFNBSjRCO0FBQUEsTUFJakJDLFlBSmlCOztBQUFBLFdBU3BCQyxVQVRvQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSxvVUFTbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1FDLG9CQURSLEdBQ2lCO0FBQ2JDLHVCQUFPLEVBQUVOLFVBREk7QUFFYk8sc0JBQU0sRUFBRUw7QUFGSyxlQURqQjtBQU1FUCxrQkFBSSxDQUFDYSxJQUFMLENBQVVILE1B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QUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkYsZUFHRTtBQUFRLHlCQUFTLEVBQUMsY0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUTtBQUFBLFNBQVQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEYsRUF5QkdaLElBQUksQ0FBQzhCLE1BQUwsSUFBZSxDQUFmLGlCQUNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUJGLGVBNkJFO0FBQUEscUNBQWtCNUIsT0FBTyxDQUFDNkIsSUFBUixDQUFhQyxJQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E3QkYsb0JBNkI0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBN0I1QyxlQThCRTtBQUFRLGVBQU8sRUFBRTtBQUFBLGlCQUFNQyx5REFBTyxFQUFiO0FBQUEsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E5QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtREQ7O0dBakZ1QmxDLEk7VUFDS0Usd0Q7OztLQURMRixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZhY2E5Njg3NmIyYmU2YjE2NTZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5pbXBvcnQgeyBzaWduSW4sIHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50J1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCJcblxuXG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe3RhcHN9KSB7XG4gIGNvbnN0IFtzZXNzaW9uLCBsb2FkaW5nXSA9IHVzZVNlc3Npb24oKVxuXG4gIGNvbnN0IFtuZXdUcmlnZ2VyLCBzZXROZXdUcmlnZ2VyXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbbmV3QWN0aW9uLCBzZXROZXdBY3Rpb25dID0gdXNlU3RhdGUoJycpXG5cblxuICBcblxuICBhc3luYyBmdW5jdGlvbiBzYXZlTmV3VGFwKCl7XG4gICAgY29uc3QgbmV3VGFwID0ge1xuICAgICAgdHJpZ2dlcjogbmV3VHJpZ2dlcixcbiAgICAgIGFjdGlvbjogbmV3QWN0aW9uXG4gICAgfVxuXG4gICAgdGFwcy5wdXNoKG5ld1RhcClcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2NyZWF0ZVRhcFwiLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld1RhcClcbiAgICB9KVxuXG4gICAgXG4gICAgc2V0TmV3VHJpZ2dlcignJylcbiAgICBzZXROZXdBY3Rpb24oJycpXG5cbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5qc29uKCkpICBcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2VcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gdy1bNzV2aF0gbXgtYXV0byB0ZXh0LWNlblwiPiBcblxuICAgICAgeyFzZXNzaW9uICYmIDw+XG5cbiAgICAgICAgPHA+IE5vdCBzaWduZWQgaW4gPC9wPiA8YnIvPiBcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduSW4oKX0+U2lnbiBpbjwvYnV0dG9uPlxuICAgICAgPC8+XG4gICAgICB9XG4gICAgICBcblxuICAgICAge3Nlc3Npb24gJiYgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcHVycGxlLTIwMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTZ4bCBweS03XCI+IFRyYWN0aW9uIDwvaDE+IFxuICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTIgYmctZ3JheS0yMDAgcm91bmRlZCBmbGV4IGZsZXgtY29sIHctWzYwJV0gbXgtYXV0byBcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtuZXdUcmlnZ2VyfSBvbkNoYW5nZT17ZSA9PiBzZXROZXdUcmlnZ2VyKGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwiYm9yZGVyLTIgcC0xXCIgcGxhY2Vob2xkZXI9XCJUcmlnZ2VyLi4uXCIvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e25ld0FjdGlvbn0gb25DaGFuZ2U9e2UgPT4gc2V0TmV3QWN0aW9uKGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwiYm9yZGVyLTIgcC0xXCIgcGxhY2Vob2xkZXI9XCJBY3Rpb24uLi5cIi8+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NhdmVOZXdUYXB9IGNsYXNzTmFtZT1cImJvcmRlci0yXCI+QWRkIFRBUDwvYnV0dG9uPiBcbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBweS03XCI+IE90aGVyIFRhcHMgPC9oMT4gXG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPiBcbiAgICAgICAgICAgIHt0YXBzLm1hcCgodGFwLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBiZy1ncmF5LTMwMCByb3VuZGVkIGZsZXggZmxleC1jb2wgdy1bNjAlXSBteC1hdXRvIG15LTEwXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RhcC50cmlnZ2VyfSBjbGFzc05hbWU9XCJib3JkZXItMiBwLTFcIiBwbGFjZWhvbGRlcj1cIlRyaWdnZXIuLi5cIi8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RhcC5hY3Rpb259IGNsYXNzTmFtZT1cImJvcmRlci0yIHAtMVwiIHBsYWNlaG9sZGVyPVwiQWN0aW9uLi4uXCIvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWFyb3VuZFwiPiBcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctcmVkLTIwMFwiPiAtIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbj4gRGVsZXRlIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ncmVlbi0yMDBcIj4gKzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX0gXG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7dGFwcy5sZW5ndGggPT0gMCAmJlxuICAgICAgICAgIDxoMT4gWW91IGhhdmUgbm8gdGFwcyA8L2gxPiB9XG5cblxuICAgICAgICAgIDxwPiBTaWduZWQgaW4gYXMge3Nlc3Npb24udXNlci5uYW1lfSA8L3A+IDxici8+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9PlNpZ24gb3V0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PiBcbiAgICAgIH1cblxuICAgICAgXG4gICAgICBcblxuICAgIDwvZGl2PiAgXG4gICk7XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KXtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oY29udGV4dClcblxuICBsZXQgdGFwcyA9IHt9XG5cbiAgaWYgKHNlc3Npb24pIHtcbiAgICB0YXBzID0gYXdhaXQgcHJpc21hLnRhcC5maW5kTWFueSh7d2hlcmU6IHt1c2VyOiBzZXNzaW9uLnVzZXIubmFtZX19KVxuICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpXG4gIH1cbiAgXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wcyA6IHtcbiAgICAgIHRhcHM6IHRhcHNcbiAgICB9LFxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9