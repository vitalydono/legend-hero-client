(this["webpackJsonpmarkidim"] = this["webpackJsonpmarkidim"] || []).push([["main"],{

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Configuration file to the codelovers react app.
 *
 * IMPORTANT: this file is referenced by several of the core codelovers
 * modules and should not be removed. All of the flags below are required
 * for proper operation of the libraries.
 */
//import AsyncStorage from '@react-native-community/async-storage';
let platform = "react";

let CLReact = __webpack_require__(/*! cl-react */ "./node_modules/cl-react/index.js"); // let mixpanel = require('mixpanel-browser');
// let ReactGA = require('react-ga');
//let appConfig = require('./appConfig.json');
//console.log("appConfig",appConfig)


let analyticsIntegrations = {
  platform: platform,
  vendors: {}
};
let segmentIoKey = ""; // if (appConfig.analytics) {
//   if (appConfig.analytics.google_analytics) {
//     analyticsIntegrations.vendors.GOOGLE = {
//       key: appConfig.analytics.google_analytics.key,
//       driver: ReactGA
//     }
//   }
//   if (appConfig.analytics.google_analytics) {
//     analyticsIntegrations.vendors.MIXPANEL = {
//       key: appConfig.analytics.mixpanel.key,
//       driver: mixpanel
//     }
//   }
//   if (appConfig.analytics.segmentio) {
//     segmentIoKey = appConfig.analytics.segmentio.key
//   }
// }

let availableEnvironments = {
  "localhost": "localhost",
  "development": "dev.luboo.com",
  "production": "api.luboo.com",
  "urls": {
    "production": {
      "base_url": "api.luboo.com",
      "api_url": "api.luboo.com",
      "admin_url": "api.luboo.com/admin"
    },
    "development": {
      "base_url": "dev.luboo.com",
      "api_url": "dev.luboo.com",
      "admin_url": "dev.luboo.com/admin"
    }
  }
};
let Config = {
  APP_NAME: "luboo",
  PLATFORM: platform,
  STORAGE: localStorage,
  // Use default localStorage

  /**
   * Defined the available app environments
   * @type {Object}
   */
  AVAILABLE_ENVIRONMENTS: availableEnvironments,

  /**
   * Define the selected environment
   * e.g.'localhost' | 'development' | 'production'
   * @type {String}
   */
  SELECTED_ENV: 'production',

  /**
   * Set to 'true' if you want to cache the cl-api responses
   * @type {Boolean}
   */
  CACHE_API_RESPONSES: true,

  /**
   * Set to 'true' if you want to use SSL/HTTPS
   * @type {Boolean}
   */
  USE_HTTPS: true,

  /**
   * Set production log level
   *  'none' - don't show logs in production
   *  'low' - show only errors and warnings
   *  'high' - show all log levels
   * @type {String}
   */
  PRODUCTION_LOG_LEVEL: 'low' //,
  //SEGMENTIO: { key: segmentIoKey },
  //INTEGRATIONS: new CLReact.CLIntegrations(analyticsIntegrations)

}; // logs:

if (false) {}

module.exports = Config;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/app.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/assets/css/app.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".App {\n}\n\n.App-logo {\n    height: 40vmin;\n}\n\n.App-header {\n    background-color: #282c34;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: calc(10px + 2vmin);\n    color: white;\n}\n\n.App-link {\n    color: #09d3ac;\n}\n\n.pagination {\n    display: inline-flex;\n}\n\n.pagination a {\n    color: black;\n    float: left;\n    padding: 8px 16px;\n    text-decoration: none;\n    border: 1px solid #ddd;\n}\n\n.pagination a.active {\n    background-color: #4caf50;\n    color: white;\n    border: 1px solid #4caf50;\n}\n\n.pagination a:hover:not(.active) {\n    background-color: #ddd;\n}\n\n.pagination a:first-child {\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n}\n\n.pagination a:last-child {\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n.label-class {\n    display: inline-block;\n    width: 100px;\n    padding: 0px;\n    padding-bottom: 12px;\n}\n\n.left-to-right {\n    direction: ltr;\n}\n\n.right-to-left {\n    direction: rtl;\n}\n\n.no-padding {\n    padding: 0px;\n}\n\n.custom-color {\n    background-color: #534767 !important;\n}\n\n.option-class {\n    position: relative;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/reset.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/assets/css/reset.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0-modified | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, \ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ncode,\ntime, mark, audio, video {\n  margin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\t/* font: inherit; */\n\tvertical-align: baseline;\n}\n\n/* make sure to set some focus styles for accessibility */\n:focus {\n    outline: 0;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\n\nbody {\n\tline-height: 1;\n}\n\nol, ul {\n\tlist-style: none;\n}\n\nblockquote, q {\n\tquotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\n\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration,\ninput[type=search]::-webkit-search-results-button,\ninput[type=search]::-webkit-search-results-decoration {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n}\n\ninput[type=search] {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    box-sizing: content-box;\n}\n\ntextarea {\n    overflow: auto;\n    vertical-align: top;\n    resize: vertical;\n}\n\n/**\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\n */\n\naudio,\ncanvas,\nvideo {\n    display: inline-block;\n    *display: inline;\n    *zoom: 1;\n    max-width: 100%;\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n    display: none;\n    height: 0;\n}\n\n/**\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\n * Known issue: no IE 6 support.\n */\n\n[hidden] {\n    display: none;\n}\n\n/**\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\n *    `em` units.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n    font-size: 100%; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n    -ms-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Address `outline` inconsistency between Chrome and other browsers.\n */\n\na:focus {\n    outline: thin dotted;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n    outline: 0;\n}\n\n/**\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\n * 2. Improve image quality when scaled in IE 7.\n */\n\nimg {\n    border: 0; /* 1 */\n    -ms-interpolation-mode: bicubic; /* 2 */\n}\n\n/**\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\n */\n\nfigure {\n    margin: 0;\n}\n\n/**\n * Correct margin displayed oddly in IE 6/7.\n */\n\nform {\n    margin: 0;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct color not being inherited in IE 6/7/8/9.\n * 2. Correct text not wrapping in Firefox 3.\n * 3. Correct alignment displayed oddly in IE 6/7.\n */\n\nlegend {\n    border: 0; /* 1 */\n    padding: 0;\n    white-space: normal; /* 2 */\n    *margin-left: -7px; /* 3 */\n}\n\n/**\n * 1. Correct font size not being inherited in all browsers.\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\n *    and Chrome.\n * 3. Improve appearance and consistency in all browsers.\n */\n\nbutton,\ninput,\nselect,\ntextarea {\n    font-size: 100%; /* 1 */\n    margin: 0; /* 2 */\n    vertical-align: baseline; /* 3 */\n    *vertical-align: middle; /* 3 */\n}\n\n/**\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\nbutton,\ninput {\n    line-height: normal;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\n * Correct `select` style inheritance in Firefox 4+ and Opera.\n */\n\nbutton,\nselect {\n    text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\n *    Known issue: inner spacing remains in IE 6.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n    -webkit-appearance: button; /* 2 */\n    cursor: pointer; /* 3 */\n    *overflow: visible;  /* 4 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n    cursor: default;\n}\n\n/**\n * 1. Address box sizing set to content-box in IE 8/9.\n * 2. Remove excess padding in IE 8/9.\n * 3. Remove excess padding in IE 7.\n *    Known issue: excess padding remains in IE 6.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n    *height: 13px; /* 3 */\n    *width: 13px; /* 3 */\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */ /* 2 */\n    box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari 5 and Chrome\n * on OS X.\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/**\n * Remove inner padding and border in Firefox 3+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\n\n/**\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\n * 2. Improve readability and alignment in all browsers.\n */\n\ntextarea {\n    overflow: auto; /* 1 */\n    vertical-align: top; /* 2 */\n}\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n    color: #222;\n}\n\n::selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n\nimg {\n    vertical-align: middle;\n}\n\nfieldset {\n    border: 0;\n    margin: 0;\n    padding: 0;\n}\n\ntextarea {\n    resize: vertical;\n}\n\n.chromeframe {\n    margin: 0.2em 0;\n    background: #ccc;\n    color: #000;\n    padding: 0.2em 0;\n}\n\n/* custom  additions */\n\nbutton:focus {\n    outline:0 !important;\n}\n\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  direction:rtl;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);



/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet_components_Grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet/components/Grommet */ "./node_modules/grommet/components/Grommet/index.js");
/* harmony import */ var grommet_components_Grommet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grommet_components_Grommet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-react-modal */ "./node_modules/styled-react-modal/build/index.js");
/* harmony import */ var styled_react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_css_reset_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @assets/css/reset.css */ "./src/assets/css/reset.css");
/* harmony import */ var _assets_css_reset_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_css_reset_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_css_app_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @assets/css/app.css */ "./src/assets/css/app.css");
/* harmony import */ var _assets_css_app_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_css_app_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @constants/colors */ "./src/constants/colors.js");
/* harmony import */ var _navigation_NavigationRouter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @navigation/NavigationRouter */ "./src/navigation/NavigationRouter.js");
/* harmony import */ var _state_uses_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @state/uses/app */ "./src/state/uses/app.js");
var _jsxFileName = "/Users/vitaly/markidim/src/App.js";
 //import styled from 'styled-components'








const grommetTheme = {
  global: {
    colors: {
      brand: _constants_colors__WEBPACK_IMPORTED_MODULE_5__["default"].COLOR_PRIMARY
    },
    select: {
      options: {
        container: {
          zIndex: 1
        }
      }
    }
  }
};

const __DEV__ = window.location.hostname === 'localhost';

/* harmony default export */ __webpack_exports__["default"] = (() => {
  const language = Object(_state_uses_app__WEBPACK_IMPORTED_MODULE_7__["useLanguage"])();

  if (!__DEV__) {
    console.debug = console.log = console.warn = console.error = () => {};
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      direction: language === 'he' ? 'rtl' : 'ltr'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_components_Grommet__WEBPACK_IMPORTED_MODULE_1__["Grommet"], {
    theme: grommetTheme,
    className: "App",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_react_modal__WEBPACK_IMPORTED_MODULE_2__["ModalProvider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_navigation_NavigationRouter__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }))));
}); //export default App

/***/ }),

/***/ "./src/appearance/styled.js":
/*!**********************************!*\
  !*** ./src/appearance/styled.js ***!
  \**********************************/
/*! exports provided: Flex1, Flex2, SongsWrapper, ButtonsGroupContainer, MainButton, SelectBtn, SearchSelectBtn, Wrapper, SelectWrapper, Row, selectCustomStyles, PageHeader, PageSubTitle, MainPageWrapper, ContentCenteredBox, TextBtn, SubmitWrapper, SubmitButtonsRow, SubmitBtnContainer, SubmitBtn, StyledModal, ModalTopPart, ModalTitle, ModalMainText, ModalButtonsContainer, FormWrapper, FormSection, FormSectionTitle, FormRow, FormInputContainer, FormInputLabel, ErrorText, WrapperDiv, GrayWrapper, RequiredSign, TableButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flex1", function() { return Flex1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flex2", function() { return Flex2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongsWrapper", function() { return SongsWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsGroupContainer", function() { return ButtonsGroupContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainButton", function() { return MainButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBtn", function() { return SelectBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchSelectBtn", function() { return SearchSelectBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectWrapper", function() { return SelectWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCustomStyles", function() { return selectCustomStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeader", function() { return PageHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageSubTitle", function() { return PageSubTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageWrapper", function() { return MainPageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentCenteredBox", function() { return ContentCenteredBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextBtn", function() { return TextBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitWrapper", function() { return SubmitWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitButtonsRow", function() { return SubmitButtonsRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitBtnContainer", function() { return SubmitBtnContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitBtn", function() { return SubmitBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledModal", function() { return StyledModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalTopPart", function() { return ModalTopPart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalTitle", function() { return ModalTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalMainText", function() { return ModalMainText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalButtonsContainer", function() { return ModalButtonsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormWrapper", function() { return FormWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSection", function() { return FormSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSectionTitle", function() { return FormSectionTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRow", function() { return FormRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormInputContainer", function() { return FormInputContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormInputLabel", function() { return FormInputLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorText", function() { return ErrorText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapperDiv", function() { return WrapperDiv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrayWrapper", function() { return GrayWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredSign", function() { return RequiredSign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableButton", function() { return TableButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var grommet_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet/components/Button */ "./node_modules/grommet/components/Button/index.js");
/* harmony import */ var grommet_components_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grommet_components_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @constants/colors */ "./src/constants/colors.js");
/* harmony import */ var styled_react_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-react-modal */ "./node_modules/styled-react-modal/build/index.js");
/* harmony import */ var styled_react_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_react_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var hex_to_rgba__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hex-to-rgba */ "./node_modules/hex-to-rgba/build/index.js");
/* harmony import */ var hex_to_rgba__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");






const Flex1 = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__Flex1",
  componentId: "sc-15bobt1-0"
})(["\n    flex: 1;\n    padding: 0 20px;\n"]);
const Flex2 = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__Flex2",
  componentId: "sc-15bobt1-1"
})(["\n    flex: 2;\n    padding: 0 40px;\n"]);
const SongsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__SongsWrapper",
  componentId: "sc-15bobt1-2"
})(["\n    background-color: red;\n    display: inline-flex;\n    flex-direction: row;\n    width: 100%;\n    justify-content: space-around;\n    padding: 0.5rem 0rem 0px;\n    margin: -1rem 0 0rem;\n    align-items: center;\n    border-top: 1px solid #ebebeb;\n    border-bottom: 1px solid #ebebeb;\n    background-color: #ebebeb;\n    position: relative;\n    @media (max-width: 768px) {\n        flex-direction: column;\n        padding: 0;\n    }\n"]);
const ButtonsGroupContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__ButtonsGroupContainer",
  componentId: "sc-15bobt1-3"
})(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 0px;\n\n    @media (max-width: 768px) {\n        font-size: 14px;\n    }\n"]);
const MainButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(grommet_components_Button__WEBPACK_IMPORTED_MODULE_1__["Button"]).withConfig({
  displayName: "styled__MainButton",
  componentId: "sc-15bobt1-4"
})(["\n    width: auto;\n    border: none;\n    display: flex;\n    color: #ffffff;\n    font-size: 16px;\n    padding: 4px 12px;\n    text-align: center;\n    border-radius: 1rem;\n    align-items: center;\n    flex-direction: column;\n    background-color: ", ";\n    & span {\n        font-size: 14px;\n    }\n"], _constants_colors__WEBPACK_IMPORTED_MODULE_2__["default"].BUTTON_DARK);
const SelectBtn = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__SelectBtn",
  componentId: "sc-15bobt1-5"
})(["\n    width: 100%;\n    font-size: 13px;\n    font-weight: 300;\n    color: ", ";\n    min-width: 156px;\n\n    & input {\n        padding: 10px;\n        border: 1px solid grey;\n    }\n"], _constants_colors__WEBPACK_IMPORTED_MODULE_2__["default"].APP_BLACK);
const SearchSelectBtn = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__SearchSelectBtn",
  componentId: "sc-15bobt1-6"
})(["\n    width: 540px;\n    font-size: 13px;\n    font-weight: 300;\n    margin: 0px 4px;\n    color: #000000;\n    min-width: 165px;\n\n    @media (max-width: 768px) {\n        width: 330px;\n    }\n"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__Wrapper",
  componentId: "sc-15bobt1-7"
})(["\n    padding-top: 24px;\n    background-color: #ebebeb;\n    /* padding: 0rem 0 2rem 0rem; */\n"]);
const SelectWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__SelectWrapper",
  componentId: "sc-15bobt1-8"
})(["\n    display: inline-flex;\n    margin-top: 3rem;\n    width: 100%;\n    flex-direction: column;\n    @media (max-width: 768px) {\n        margin-top: 6rem;\n    }\n    & h2 {\n        margin: 0;\n        text-align: right;\n        color: rgb(152, 135, 152);\n        font-weight: 400;\n    }\n"]);
const Row = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__Row",
  componentId: "sc-15bobt1-9"
})(["\n    display: inline-flex;\n    flex-direction: row;\n    margin: 0;\n    justify-content: flex-start;\n    width: 100%;\n    & label {\n        font-size: 12px;\n        color: rgb(152, 135, 152);\n    }\n    @media (max-width: 768px) {\n        flex-direction: column;\n    }\n"]);
const selectCustomStyles = {
  control: (base, state) => ({ ...base,
    background: '#fff',
    fontSize: '13px',
    fontColor: 'grey',
    direction: 'rtl',
    lineHeight: 1,
    borderColor: state.isFocused ? 'grey' : 'grey',
    boxShadow: state.isFocused ? null : null,
    '&:hover': {
      borderColor: 'blue'
    }
  }),
  menu: base => ({ ...base,
    top: 32,
    position: 'reative'
  })
};
const PageHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h2.withConfig({
  displayName: "styled__PageHeader",
  componentId: "sc-15bobt1-10"
})(["\n    text-align: center;\n    margin: 20px 0px;\n"]);
const PageSubTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h5.withConfig({
  displayName: "styled__PageSubTitle",
  componentId: "sc-15bobt1-11"
})(["\n    text-align: center;\n    margin: 4px 0px 12px;\n    padding: 0px 20px;\n"]);
const MainPageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__MainPageWrapper",
  componentId: "sc-15bobt1-12"
})(["\n    display: flex;\n    padding-top: 24px;\n    align-items: center;\n    flex-direction: column;\n    /* justify-content: center; */\n    /* min-height: calc(100vh - ", "px); */\n    min-height: calc(100vh - 130px);\n    background-color: ", ";\n\n    @media (max-width: 768px) {\n        min-height: calc(100vh - 54px);\n    }\n"], p => p.headerHeight, P => P.backgroundColor ? P.backgroundColor : _constants_colors__WEBPACK_IMPORTED_MODULE_2__["default"].APP_GRAY_LIGHT);
const ContentCenteredBox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__ContentCenteredBox",
  componentId: "sc-15bobt1-13"
})(["\n    display: flex;\n    text-align: ", ";\n    flex-direction: column;\n    max-width: 880px;\n    padding: 0px 20px;\n"], _localization_i18n__WEBPACK_IMPORTED_MODULE_5__["default"].locale === 'he' ? 'right' : 'left');
const TextBtn = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "styled__TextBtn",
  componentId: "sc-15bobt1-14"
})(["\n    color: blue;\n    border: none;\n    padding: 0px 4px;\n    background-color: transparent;\n"]);
const SubmitWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__SubmitWrapper",
  componentId: "sc-15bobt1-15"
})(["\n    padding-bottom: 24px;\n\n    @media (max-width: 768px) {\n        width: 100%;\n        padding: 0px 20px;\n    }\n"]);
const SubmitButtonsRow = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__SubmitButtonsRow",
  componentId: "sc-15bobt1-16"
})(["\n    display: flex;\n    margin-bottom: 16px;\n    /* justify-content: center; */\n    @media (max-width: 768px) {\n        display: initial;\n        width: 100%;\n        padding: 0 12px;\n    }\n"]);
const SubmitBtnContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__SubmitBtnContainer",
  componentId: "sc-15bobt1-17"
})(["\n    flex: 1;\n    display: flex;\n    margin: 20px 0;\n    justify-content: center;\n"]);
const SubmitBtn = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "styled__SubmitBtn",
  componentId: "sc-15bobt1-18"
})(["\n    color: ", ";\n    min-width: 148px;\n    padding: 8px 16px;\n    font-size: 16px;\n    margin: 0 8px;\n    text-align: center;\n    white-space: nowrap;\n    border-radius: 24px;\n    border: solid 1px\n        ", ";\n    background-color: ", ";\n    &:hover {\n        background-color: ", ";\n    }\n    @media (max-width: 768px) {\n        width: 100%;\n    }\n"], p => p.disabled ? p.color ? hex_to_rgba__WEBPACK_IMPORTED_MODULE_4___default()(p.color, 0.75) : _constants_colors__WEBPACK_IMPORTED_MODULE_2__["default"].APP_WHITE : p.color ? p.color : _constants_colors__WEBPACK_IMPORTED_MODULE_2__["default"].APP_WHITE, p => p.disabled ? _constants_colors__WEBPACK_IMPORTED_MODULE_2__["default"].APP_GRAY_DARK : _constants_colors__WEBPACK_IMPORTED_MODULE_2__["default"].BUTTON_DARK, p => p.disabled ? p.backgroundColor ? hex_to_rgba__WEBPACK_IMPORTED_MODULE_4___default()(p.backgroundColor, 0.4) : hex_to_rgba__WEBPACK_IMPORTED_MODULE_4___default()(_constants_colors__WEBPACK_IMPORTED_MODULE_2__["default"].BUTTON_DARK, 0.4) : p.backgroundColor ? p.backgroundColor : _constants_colors__WEBPACK_IMPORTED_MODULE_2__["default"].BUTTON_DARK, p => p.disabled ? p.backgroundColor ? hex_to_rgba__WEBPACK_IMPORTED_MODULE_4___default()(p.backgroundColor, 0.4) : hex_to_rgba__WEBPACK_IMPORTED_MODULE_4___default()(_constants_colors__WEBPACK_IMPORTED_MODULE_2__["default"].BUTTON_DARK, 0.4) : p.backgroundColor ? hex_to_rgba__WEBPACK_IMPORTED_MODULE_4___default()(p.backgroundColor, 0.8) : hex_to_rgba__WEBPACK_IMPORTED_MODULE_4___default()(_constants_colors__WEBPACK_IMPORTED_MODULE_2__["default"].BUTTON_DARK, 0.8)); // modals

const StyledModal = styled_react_modal__WEBPACK_IMPORTED_MODULE_3___default.a.styled`
  max-width: 400px;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  background-color: ${_constants_colors__WEBPACK_IMPORTED_MODULE_2__["default"].APP_WHITE};
  padding: 20px 28px 24px;
  border-radius: 8px;
  justify-content: space-between;
`;
const ModalTopPart = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__ModalTopPart",
  componentId: "sc-15bobt1-19"
})([""]);
const ModalTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h4.withConfig({
  displayName: "styled__ModalTitle",
  componentId: "sc-15bobt1-20"
})(["\n    padding: 8px 0px 20px;\n    text-align: center;\n    color: ", ";\n"], p => p.error ? 'red' : _constants_colors__WEBPACK_IMPORTED_MODULE_2__["default"].APP_TEXT);
const ModalMainText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__ModalMainText",
  componentId: "sc-15bobt1-21"
})(["\n    text-align: center;\n    /* padding: 0 20px; */\n"]);
const ModalButtonsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__ModalButtonsContainer",
  componentId: "sc-15bobt1-22"
})(["\n    display: flex;\n    width: 200px;\n    margin: 20px auto 0px;\n    justify-content: space-between;\n"]); // form

const FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__FormWrapper",
  componentId: "sc-15bobt1-23"
})(["\n    width: 100%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n"]);
const FormSection = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__FormSection",
  componentId: "sc-15bobt1-24"
})(["\n    margin: 20px 0px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]);
const FormSectionTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(PageSubTitle).withConfig({
  displayName: "styled__FormSectionTitle",
  componentId: "sc-15bobt1-25"
})(["\n    margin: 0px;\n    align-self: flex-start;\n"]);
const FormRow = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__FormRow",
  componentId: "sc-15bobt1-26"
})(["\n    display: flex;\n    align-items: center;\n    justify-content: ", ";\n    width: 100%;\n    max-width: 768px;\n    align-items: ", ";\n    @media (max-width: 768px) {\n        flex-direction: column;\n    }\n"], p => p.justifyContent ? p.justifyContent : 'initial', p => p.alignItems ? p.alignItems : 'flex-start');

const addPxIfNum = width => {
  if (typeof width === 'number') {
    return width + 'px';
  }

  return width;
};

const FormInputContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__FormInputContainer",
  componentId: "sc-15bobt1-27"
})(["\n    flex: 1;\n    display: flex;\n    padding: 10px 20px;\n    flex-direction: column;\n    text-align: ", ";\n    width: ", ";\n    min-width: ", ";\n    max-width: ", ";\n    @media (max-width: 480px) {\n        width: 100%;\n        min-width: initial;\n        max-width: initial;\n    }\n"], p => p.lang === 'he' ? 'right' : 'left', p => p.width ? addPxIfNum(p.width) : '100%', p => p.width ? addPxIfNum(p.width) : 'initial', p => p.width ? addPxIfNum(p.width) : 'initial');
const FormInputLabel = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].label.withConfig({
  displayName: "styled__FormInputLabel",
  componentId: "sc-15bobt1-28"
})(["\n    width: 100%;\n    margin: 0px 0px 4px;\n    text-align: ", ";\n    color: #6b576b;\n"], p => p.lang === 'he' ? 'right' : 'left');
const ErrorText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "styled__ErrorText",
  componentId: "sc-15bobt1-29"
})(["\n    color: red;\n    text-align: center;\n    width: 100%;\n    min-height: 24px;\n"]);
const WrapperDiv = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__WrapperDiv",
  componentId: "sc-15bobt1-30"
})(["\n    width: 100%;\n    text-align: center;\n"]);
const GrayWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__GrayWrapper",
  componentId: "sc-15bobt1-31"
})(["\n    flex: 1;\n    width: 100%;\n    padding-top: 20px;\n    background-color: ", ";\n"], _constants_colors__WEBPACK_IMPORTED_MODULE_2__["default"].APP_GRAY_LIGHT);
const RequiredSign = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "styled__RequiredSign",
  componentId: "sc-15bobt1-32"
})(["\n    color: red;\n"]);
const TableButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "styled__TableButton",
  componentId: "sc-15bobt1-33"
})(["\n    font-size: 12px;\n    padding: 0px 8px;\n    line-height: 20px;\n    border-radius: 4px;\n    white-space: nowrap;\n    ", "\n    color: ", ";\n    background-color: ", ";\n"], p => p.alignSelf && 'align-self:' + p.alignSelf + ';', _constants_colors__WEBPACK_IMPORTED_MODULE_2__["default"].APP_WHITE, _constants_colors__WEBPACK_IMPORTED_MODULE_2__["default"].BUTTON_DARK);

/***/ }),

/***/ "./src/assets/css/app.css":
/*!********************************!*\
  !*** ./src/assets/css/app.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./app.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/app.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./app.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/app.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./app.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/app.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/assets/css/reset.css":
/*!**********************************!*\
  !*** ./src/assets/css/reset.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./reset.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/reset.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./reset.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/reset.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./reset.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/reset.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/assets/images/approved.svg":
/*!****************************************!*\
  !*** ./src/assets/images/approved.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/approved.2c1a758a.svg";

/***/ }),

/***/ "./src/assets/images/cavron-down.png":
/*!*******************************************!*\
  !*** ./src/assets/images/cavron-down.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAZlBMVEUAAADIyMjOzs7MzMzLy8vMzMzOzs7MzMzNzc3MzMzNzc3Ozs7KysrLy8vNzc3Ly8vLy8vMzMzLy8vMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz////br/k5AAAAIHRSTlMAHB8jJygqLS4yMzQ1O1xet7i8vc7P3ODj5ejp7O3w8xYDtp4AAAABYktHRCHEbA0WAAAAT0lEQVQYGc3Bhw2AIAAEwEex944I+vtPqTHBqBNwB081rcRNdjWcgTrBJdHs4eSWpgByQ5PhEa/cq9JyS/ESKR4HlcRHMJNLiB8xjQJeOAElfgPx6DtlpAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/images/credit-card.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/credit-card.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/credit-card.51a0631e.svg";

/***/ }),

/***/ "./src/assets/images/edit.svg":
/*!************************************!*\
  !*** ./src/assets/images/edit.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/edit.2927f8de.svg";

/***/ }),

/***/ "./src/assets/images/english_flag.svg":
/*!********************************************!*\
  !*** ./src/assets/images/english_flag.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/english_flag.24e60e6f.svg";

/***/ }),

/***/ "./src/assets/images/garbage.svg":
/*!***************************************!*\
  !*** ./src/assets/images/garbage.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/garbage.d957249b.svg";

/***/ }),

/***/ "./src/assets/images/globe.svg":
/*!*************************************!*\
  !*** ./src/assets/images/globe.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/globe.e9156605.svg";

/***/ }),

/***/ "./src/assets/images/index.js":
/*!************************************!*\
  !*** ./src/assets/images/index.js ***!
  \************************************/
/*! exports provided: hebrew, english, creditCardIcon, plusIcon, moreIcon, editIcon, approveIcon, markidimLogo, GLOBE, userIcon, deleteIcon, DANCELIST, searchIcon, refreshIcon, listIcon, menuIcon, sortArrows, sortUpArrow, sortDownArrow, cavronDownIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hebrew", function() { return hebrew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "english", function() { return english; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creditCardIcon", function() { return creditCardIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plusIcon", function() { return plusIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moreIcon", function() { return moreIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editIcon", function() { return editIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approveIcon", function() { return approveIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markidimLogo", function() { return markidimLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBE", function() { return GLOBE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userIcon", function() { return userIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteIcon", function() { return deleteIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DANCELIST", function() { return DANCELIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchIcon", function() { return searchIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshIcon", function() { return refreshIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listIcon", function() { return listIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuIcon", function() { return menuIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortArrows", function() { return sortArrows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortUpArrow", function() { return sortUpArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortDownArrow", function() { return sortDownArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cavronDownIcon", function() { return cavronDownIcon; });
/* harmony import */ var _credit_card_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./credit-card.svg */ "./src/assets/images/credit-card.svg");
/* harmony import */ var _credit_card_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_credit_card_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plus_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plus.svg */ "./src/assets/images/plus.svg");
/* harmony import */ var _plus_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_plus_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _more_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./more.svg */ "./src/assets/images/more.svg");
/* harmony import */ var _more_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_more_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit.svg */ "./src/assets/images/edit.svg");
/* harmony import */ var _edit_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_edit_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _approved_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./approved.svg */ "./src/assets/images/approved.svg");
/* harmony import */ var _approved_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_approved_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _logo_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logo.jpg */ "./src/assets/images/logo.jpg");
/* harmony import */ var _logo_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_logo_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _globe_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./globe.svg */ "./src/assets/images/globe.svg");
/* harmony import */ var _globe_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_globe_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _user_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.svg */ "./src/assets/images/user.svg");
/* harmony import */ var _user_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_user_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _garbage_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./garbage.svg */ "./src/assets/images/garbage.svg");
/* harmony import */ var _garbage_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_garbage_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _play_button_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./play-button.svg */ "./src/assets/images/play-button.svg");
/* harmony import */ var _play_button_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_play_button_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _searchIcon_right_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./searchIcon_right.png */ "./src/assets/images/searchIcon_right.png");
/* harmony import */ var _searchIcon_right_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_searchIcon_right_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _refreshIcon_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./refreshIcon.png */ "./src/assets/images/refreshIcon.png");
/* harmony import */ var _refreshIcon_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_refreshIcon_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _list_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./list.png */ "./src/assets/images/list.png");
/* harmony import */ var _list_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_list_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _menu_white_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./menu-white.png */ "./src/assets/images/menu-white.png");
/* harmony import */ var _menu_white_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_menu_white_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _sort_arrows_white_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sort-arrows-white.png */ "./src/assets/images/sort-arrows-white.png");
/* harmony import */ var _sort_arrows_white_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_sort_arrows_white_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _sort_up_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sort-up.png */ "./src/assets/images/sort-up.png");
/* harmony import */ var _sort_up_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_sort_up_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _sort_down_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sort-down.png */ "./src/assets/images/sort-down.png");
/* harmony import */ var _sort_down_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_sort_down_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _cavron_down_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cavron-down.png */ "./src/assets/images/cavron-down.png");
/* harmony import */ var _cavron_down_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_cavron_down_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _israel_flag_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./israel_flag.png */ "./src/assets/images/israel_flag.png");
/* harmony import */ var _israel_flag_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_israel_flag_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _english_flag_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./english_flag.svg */ "./src/assets/images/english_flag.svg");
/* harmony import */ var _english_flag_svg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_english_flag_svg__WEBPACK_IMPORTED_MODULE_19__);




















const hebrew = _israel_flag_png__WEBPACK_IMPORTED_MODULE_18___default.a;
const english = _english_flag_svg__WEBPACK_IMPORTED_MODULE_19___default.a;
const creditCardIcon = _credit_card_svg__WEBPACK_IMPORTED_MODULE_0___default.a;
const plusIcon = _plus_svg__WEBPACK_IMPORTED_MODULE_1___default.a;
const moreIcon = _more_svg__WEBPACK_IMPORTED_MODULE_2___default.a;
const editIcon = _edit_svg__WEBPACK_IMPORTED_MODULE_3___default.a;
const approveIcon = _approved_svg__WEBPACK_IMPORTED_MODULE_4___default.a;
const markidimLogo = _logo_jpg__WEBPACK_IMPORTED_MODULE_5___default.a;
const GLOBE = _globe_svg__WEBPACK_IMPORTED_MODULE_6___default.a;
const userIcon = _user_svg__WEBPACK_IMPORTED_MODULE_7___default.a;
const deleteIcon = _garbage_svg__WEBPACK_IMPORTED_MODULE_8___default.a;
const DANCELIST = _play_button_svg__WEBPACK_IMPORTED_MODULE_9___default.a;
const searchIcon = _searchIcon_right_png__WEBPACK_IMPORTED_MODULE_10___default.a;
const refreshIcon = _refreshIcon_png__WEBPACK_IMPORTED_MODULE_11___default.a;
const listIcon = _list_png__WEBPACK_IMPORTED_MODULE_12___default.a;
const menuIcon = _menu_white_png__WEBPACK_IMPORTED_MODULE_13___default.a;
const sortArrows = _sort_arrows_white_png__WEBPACK_IMPORTED_MODULE_14___default.a;
const sortUpArrow = _sort_up_png__WEBPACK_IMPORTED_MODULE_15___default.a;
const sortDownArrow = _sort_down_png__WEBPACK_IMPORTED_MODULE_16___default.a;
const cavronDownIcon = _cavron_down_png__WEBPACK_IMPORTED_MODULE_17___default.a;

/***/ }),

/***/ "./src/assets/images/israel_flag.png":
/*!*******************************************!*\
  !*** ./src/assets/images/israel_flag.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/images/list.png":
/*!************************************!*\
  !*** ./src/assets/images/list.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/images/logo.jpg":
/*!************************************!*\
  !*** ./src/assets/images/logo.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/assets/images/menu-white.png":
/*!******************************************!*\
  !*** ./src/assets/images/menu-white.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/images/more.svg":
/*!************************************!*\
  !*** ./src/assets/images/more.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/more.2c172837.svg";

/***/ }),

/***/ "./src/assets/images/play-button.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/play-button.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/play-button.734ba0f9.svg";

/***/ }),

/***/ "./src/assets/images/plus.svg":
/*!************************************!*\
  !*** ./src/assets/images/plus.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/plus.840569fb.svg";

/***/ }),

/***/ "./src/assets/images/refreshIcon.png":
/*!*******************************************!*\
  !*** ./src/assets/images/refreshIcon.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/images/searchIcon_right.png":
/*!************************************************!*\
  !*** ./src/assets/images/searchIcon_right.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/images/sort-arrows-white.png":
/*!*************************************************!*\
  !*** ./src/assets/images/sort-arrows-white.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/sort-arrows-white.c78d193b.png";

/***/ }),

/***/ "./src/assets/images/sort-down.png":
/*!*****************************************!*\
  !*** ./src/assets/images/sort-down.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/sort-down.cd161146.png";

/***/ }),

/***/ "./src/assets/images/sort-up.png":
/*!***************************************!*\
  !*** ./src/assets/images/sort-up.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/sort-up.98c33bbd.png";

/***/ }),

/***/ "./src/assets/images/user.svg":
/*!************************************!*\
  !*** ./src/assets/images/user.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/user.612dec29.svg";

/***/ }),

/***/ "./src/components/AcumSearch/AcumSongsTable.js":
/*!*****************************************************!*\
  !*** ./src/components/AcumSearch/AcumSongsTable.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _state_actions_songs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @state/actions/songs */ "./src/state/actions/songs.js");
/* harmony import */ var _state_uses_songs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @state/uses/songs */ "./src/state/uses/songs.js");
/* harmony import */ var _services_acum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/acum */ "./src/services/acum.js");
/* harmony import */ var _services_urlUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/urlUtils */ "./src/services/urlUtils.js");
/* harmony import */ var _components_Table_PaginatedTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/Table/PaginatedTable */ "./src/components/Table/PaginatedTable.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/api */ "./src/services/api.js");
/* harmony import */ var _state_uses_dances__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @state/uses/dances */ "./src/state/uses/dances.js");
/* harmony import */ var _state_actions_dances__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @state/actions/dances */ "./src/state/actions/dances.js");
/* harmony import */ var _components_Form_TextInput__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @components/Form/TextInput */ "./src/components/Form/TextInput.js");
/* harmony import */ var _components_Buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @components/Buttons/SubmitButton */ "./src/components/Buttons/SubmitButton.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/AcumSearch/AcumSongsTable.js";

















const extractTranslatorsString = translators => {
  var _res;

  let res = '';

  for (let i = 0; i < translators.length; i++) {
    res = res + translators[i].heb_name + ', ';
  }

  return (_res = res) === null || _res === void 0 ? void 0 : _res.slice(0, -2);
};

/* harmony default export */ __webpack_exports__["default"] = (({
  term
}) => {
  const songs = Object(_state_uses_songs__WEBPACK_IMPORTED_MODULE_5__["useSongs"])();
  const versions = Object(_state_uses_songs__WEBPACK_IMPORTED_MODULE_5__["useVersions"])();
  const [fakeLinkSelected, setFakeLinkSelected] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0); // index of tabs - initialize with first -- total: 2

  const danceOnAddProcess = Object(_state_uses_dances__WEBPACK_IMPORTED_MODULE_11__["useDanceOnAddProcess"])();
  const originalSearchTerm = danceOnAddProcess.name;
  const [performerTextSearch, setPerformerTextSearch] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [secondLoadTrigger, setSecondLoadTrigger] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [getTranslatedSongs, setGetTranslatedSongs] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [resetPage, setResetPage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [musicalData, setMusicalData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(versions ? songs : null);
  const [translatedData, setTranslatedData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [filteredMusicalData, setFilteredMusicalData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [filteredTranslatedData, setFilteredTranslatedData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [getAdvancedSearchResults, setGetAdvancedSearchResults] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const disableAkumSearch = !performerTextSearch || performerTextSearch.length < 3;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (disableAkumSearch) {
      setGetAdvancedSearchResults(false);

      if (fakeLinkSelected === 2) {
        getTranslatedSongs ? setFakeLinkSelected(1) : setFakeLinkSelected(0);
      }
    }
  }, [disableAkumSearch]);
  const columns = [{
    property: 'work_heb_name',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_15__["default"].t('akum_results_table.work_name'),
    dataScope: 'col',
    align: 'start',
    minWidth: '80px',
    isMobileTileHeader: true
  }, {
    property: 'id',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_15__["default"].t('akum_results_table.work_id'),
    dataScope: 'col',
    align: 'start',
    minWidth: '80px'
  }, {
    property: 'composers',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_15__["default"].t('akum_results_table.composer'),
    dataScope: 'col',
    align: 'start',
    minWidth: '80px',
    cell: row => row['composers'].map(n => n.heb_name).join(', ')
  }, {
    property: 'lyricists',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_15__["default"].t('akum_results_table.lyricist'),
    dataScope: 'col',
    align: 'start',
    minWidth: '80px',
    cell: row => row['lyricists'].map(n => n.heb_name).join(', ')
  }, {
    property: 'performer',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_15__["default"].t('akum_results_table.performer'),
    dataScope: 'col',
    align: 'start',
    minWidth: '80px',
    hidden: fakeLinkSelected === 0 && !getAdvancedSearchResults,
    cell: row => {
      var _row$performer;

      return (_row$performer = row['performer']) === null || _row$performer === void 0 ? void 0 : _row$performer['heb_name'];
    }
  }, {
    property: 'showVersions',
    label: '',
    dataScope: 'col',
    align: 'start',
    minWidth: '105px',
    hidden: fakeLinkSelected === 1 || fakeLinkSelected === 2,
    cell: song => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_9__["TableButton"], {
        onClick: () => searchVersions(song),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 21
        }
      }, _localization_i18n__WEBPACK_IMPORTED_MODULE_15__["default"].t('akum_results_table.show_versions'));
    }
  }, {
    property: 'chooseVersion',
    label: '',
    dataScope: 'col',
    align: 'start',
    minWidth: '80px',
    hidden: fakeLinkSelected === 0,
    cell: ver => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_9__["TableButton"], {
        onClick: () => checkIfSongIsTaken(ver),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 21
        }
      }, _localization_i18n__WEBPACK_IMPORTED_MODULE_15__["default"].t('akum_results_table.choose_version'));
    }
  }];
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    resetSongsRes();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (getAdvancedSearchResults) {
      if (filteredMusicalData && !getTranslatedSongs) {
        dispatch(Object(_state_actions_songs__WEBPACK_IMPORTED_MODULE_4__["setSongs"])(filteredMusicalData));
      }

      if (filteredTranslatedData && getTranslatedSongs) {
        dispatch(Object(_state_actions_songs__WEBPACK_IMPORTED_MODULE_4__["setSongs"])(filteredTranslatedData));
      }
    } else {
      if (musicalData && fakeLinkSelected === 0) {
        dispatch(Object(_state_actions_songs__WEBPACK_IMPORTED_MODULE_4__["setSongs"])(musicalData));
      }

      if (translatedData && fakeLinkSelected === 1) {
        dispatch(Object(_state_actions_songs__WEBPACK_IMPORTED_MODULE_4__["setSongs"])(translatedData));
      }
    }
  }, [musicalData, translatedData, fakeLinkSelected, filteredMusicalData, filteredTranslatedData, getTranslatedSongs, getAdvancedSearchResults]);

  const chooseVersion = ver => {
    var _ver$translated_versi;

    danceOnAddProcess.performer = ver.performer.heb_name;
    const translatedSongName = ver.work_eng_name ? ` - ${ver.work_eng_name}` : null;
    danceOnAddProcess.song = Object.assign({}, danceOnAddProcess.song, {
      name: translatedSongName ? ver.work_heb_name + translatedSongName : ver.work_heb_name,
      akum_id: ver.id,
      publication_year: ver.publication_date,
      lyricists: ver.lyricists,
      composers: ver.composers,
      translated_version_id: (_ver$translated_versi = ver.translated_version_id) === null || _ver$translated_versi === void 0 ? void 0 : _ver$translated_versi.substring(0, 6)
    });
    dispatch(Object(_state_actions_dances__WEBPACK_IMPORTED_MODULE_12__["setDanceOnAddProcess"])(danceOnAddProcess));
    dispatch(Object(_state_actions_songs__WEBPACK_IMPORTED_MODULE_4__["setSongs"])(null));
    dispatch(Object(_state_actions_songs__WEBPACK_IMPORTED_MODULE_4__["setVersions"])(null));
    history.push({
      pathname: 'dance'
    });
  };

  const doubleSearchByTerm = page => {
    return dispatch => {
      _services_acum__WEBPACK_IMPORTED_MODULE_6__["default"].searchByTerm(term, page, false).then(res => {
        res !== musicalData && setMusicalData(res);
      }, error => (!musicalData || musicalData.length > 0) && setMusicalData([]));
      _services_acum__WEBPACK_IMPORTED_MODULE_6__["default"].searchByTerm(term, page, true).then(res => {
        res !== translatedData && setTranslatedData(res);
      }, error => (!translatedData || translatedData.length > 0) && setTranslatedData([]));
    };
  };

  const doubleSearchBySongAndPerformer = page => {
    dispatch(Object(_state_actions_songs__WEBPACK_IMPORTED_MODULE_4__["setSongs"])(null));
    return dispatch => {
      _services_acum__WEBPACK_IMPORTED_MODULE_6__["default"].searchBySongAndPerformer(term, performerTextSearch, page, false).then(res => {
        res !== filteredMusicalData && setFilteredMusicalData(res);
      }, error => (!filteredMusicalData || filteredMusicalData.length > 0) && setFilteredMusicalData([]));
      _services_acum__WEBPACK_IMPORTED_MODULE_6__["default"].searchBySongAndPerformer(term, performerTextSearch, page, true).then(res => {
        res !== filteredTranslatedData && setFilteredTranslatedData(res);
      }, error => (!filteredTranslatedData || filteredTranslatedData.length > 0) && setFilteredTranslatedData([]));
    };
  };

  const goShowAdvancedSearchResults = page => {
    resetFilteredResults();
    dispatch(Object(_state_actions_songs__WEBPACK_IMPORTED_MODULE_4__["setSongs"])(null));
    dispatch(Object(_state_actions_songs__WEBPACK_IMPORTED_MODULE_4__["setVersions"])(null));
    setResetPage(true);
    setGetAdvancedSearchResults(true);
    setFakeLinkSelected(2);
    setFilteredTranslatedData(null);
    setFilteredMusicalData(null);

    if (fakeLinkSelected === 2) {
      setSecondLoadTrigger(secondLoadTrigger + 1);
    }

    doubleSearchBySongAndPerformer(page);
  };

  const checkIfSongIsTaken = ver => {
    _services_api__WEBPACK_IMPORTED_MODULE_10__["default"].getDanceByAkumId(ver.id).subscribe(res => {//setErrorModalIsOpen(true)
    }, error => {
      chooseVersion(ver);
    });
  };

  const searchVersions = song => {
    dispatch(Object(_state_actions_songs__WEBPACK_IMPORTED_MODULE_4__["setVersions"])(null));
    danceOnAddProcess.song = Object.assign({}, danceOnAddProcess.song, {
      name: song.work_heb_name
    });
    localStorage.setItem('@markidim:song_search_state', window.location.search);
    dispatch(Object(_state_actions_dances__WEBPACK_IMPORTED_MODULE_12__["setDanceOnAddProcess"])(danceOnAddProcess));
    history.push({
      pathname: 'acum_search_version',
      search: _services_urlUtils__WEBPACK_IMPORTED_MODULE_7__["default"].buildQueryParams({
        page: 1,
        id: song.full_work_id,
        originalSearchTerm
      })
    });
  };

  const resetSongsRes = () => {
    dispatch(Object(_state_actions_songs__WEBPACK_IMPORTED_MODULE_4__["setSongs"])(null));
    dispatch(Object(_state_actions_songs__WEBPACK_IMPORTED_MODULE_4__["setVersions"])(null));
    setMusicalData(null);
    setTranslatedData(null);
    setFilteredMusicalData(null);
    setFilteredTranslatedData(null);
    return;
  };

  const resetFilteredResults = () => {
    setFilteredTranslatedData(false);
    setFilteredTranslatedData(false);
  };

  const onMusicalTabClick = () => {
    setResetPage(false);
    setFakeLinkSelected(0);
    setGetTranslatedSongs(false);
    setResetPage(true);
  };

  const onTranslatedTabClick = () => {
    setResetPage(false);
    setFakeLinkSelected(1);
    setGetTranslatedSongs(true);
    setResetPage(true);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OutterContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderNav, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tab, {
    fakeLinkSelected: fakeLinkSelected === 0 || !getTranslatedSongs,
    onClick: onMusicalTabClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fake-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 25
    }
  }, _localization_i18n__WEBPACK_IMPORTED_MODULE_15__["default"].t('akum_results_table.musical_versions'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tab, {
    fakeLinkSelected: fakeLinkSelected === 1 || getTranslatedSongs,
    onClick: onTranslatedTabClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fake-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 25
    }
  }, _localization_i18n__WEBPACK_IMPORTED_MODULE_15__["default"].t('akum_results_table.translated_versions'))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table_PaginatedTable__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: _localization_i18n__WEBPACK_IMPORTED_MODULE_15__["default"].t('akum_results_table.songs'),
    columns: columns,
    useFunction: _state_uses_songs__WEBPACK_IMPORTED_MODULE_5__["useSongs"],
    loadAction: getAdvancedSearchResults ? doubleSearchBySongAndPerformer //searchBySongAndPerformer
    : doubleSearchByTerm //searchByTerm
    ,
    loadTrigger: fakeLinkSelected === 2 ? 'searchByMultiple' : null,
    secondLoadTrigger: secondLoadTrigger,
    hidePageSize: true,
    hideTableHeader: true,
    resetPage: resetPage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_9__["FormSection"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_9__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_13__["default"], {
    text: performerTextSearch,
    onChangeText: performer => setPerformerTextSearch(performer),
    width: '100%',
    required: true,
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_15__["default"].t('akum_results_table.filter_by_performer'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex1, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_9__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 17
    }
  }, disableAkumSearch && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_9__["ErrorText"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 25
    }
  }, _localization_i18n__WEBPACK_IMPORTED_MODULE_15__["default"].t('akum_results_table.minimum_search_length_error'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_9__["SubmitButtonsRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSubmitBtnContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
    onClick: goShowAdvancedSearchResults,
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_15__["default"].t('akum_results_table.search_song_and_performer'),
    disabled: disableAkumSearch,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 25
    }
  })))));
});
const StyledSubmitBtnContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_appearance_styled__WEBPACK_IMPORTED_MODULE_9__["SubmitBtnContainer"]).withConfig({
  displayName: "AcumSongsTable__StyledSubmitBtnContainer",
  componentId: "yoi5u6-0"
})(["\n    margin-bottom: 0px;\n"]);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "AcumSongsTable__Container",
  componentId: "yoi5u6-1"
})([""]);
const OutterContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "AcumSongsTable__OutterContainer",
  componentId: "yoi5u6-2"
})([""]);
const Tab = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "AcumSongsTable__Tab",
  componentId: "yoi5u6-3"
})(["\n    list-style-type: none;\n    display: inline-flex;\n    flex-direction: row;\n    /* width:50px; */\n    margin: 10px;\n    justify-content: space-between;\n    color: #ffffff;\n    text-align: center;\n    & a,\n    & .fake-link {\n        color: #fff;\n        color: ", ";\n        text-decoration: none;\n        text-decoration: ", ";\n        cursor: pointer;\n    }\n    & a:hover,\n    & .fake-link:hover {\n        color: #007bff;\n        text-decoration: none;\n    }\n    & a:focus,\n    & .fake-link:focus {\n        outline: none !important;\n    }\n\n    & button {\n        background-color: transparent;\n        border: none;\n        cursor: pointer;\n        width: 30px;\n        color: #ffffff;\n        font-family: 'Arial';\n        display: inline-flex;\n        flex-direction: row;\n        justify-content: space-between;\n        align-items: center;\n    }\n    & img {\n        width: 15px;\n        height: auto;\n    }\n    & span {\n        margin: 0px 8px;\n        font-size: 15px;\n        border: 1px solid #ffffff;\n        padding: 5px;\n    }\n"], p => !p.fakeLinkSelected ? '#fff' : '#007bff', p => !p.fakeLinkSelected ? 'none' : 'underline');
const HeaderNav = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].nav.withConfig({
  displayName: "AcumSongsTable__HeaderNav",
  componentId: "yoi5u6-4"
})(["\n    display: flex;\n    font-size: 16px;\n    align-items: center;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n    justify-content: center;\n    background-color: rgb(83, 71, 103);\n"]);
const Flex1 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "AcumSongsTable__Flex1",
  componentId: "yoi5u6-5"
})(["\n    flex: 1;\n    padding: 0 20px;\n"]);

/***/ }),

/***/ "./src/components/AcumSearch/AcumVersionsTable.js":
/*!********************************************************!*\
  !*** ./src/components/AcumSearch/AcumVersionsTable.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _state_actions_songs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @state/actions/songs */ "./src/state/actions/songs.js");
/* harmony import */ var _state_uses_songs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @state/uses/songs */ "./src/state/uses/songs.js");
/* harmony import */ var _state_uses_dances__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @state/uses/dances */ "./src/state/uses/dances.js");
/* harmony import */ var _state_actions_dances__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @state/actions/dances */ "./src/state/actions/dances.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/api */ "./src/services/api.js");
/* harmony import */ var _services_acum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/acum */ "./src/services/acum.js");
/* harmony import */ var _components_Table_PaginatedTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/Table/PaginatedTable */ "./src/components/Table/PaginatedTable.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
/* harmony import */ var _components_Modals_MessageModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @components/Modals/MessageModal */ "./src/components/Modals/MessageModal.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/AcumSearch/AcumVersionsTable.js";














/* harmony default export */ __webpack_exports__["default"] = (({
  songId
}) => {
  const [errorModalIsOpen, setErrorModalIsOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [versionsFromApi, setVersionsFromApi] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [totalVersions, setTotalVersions] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Object(_state_actions_songs__WEBPACK_IMPORTED_MODULE_4__["setVersions"])(null);

    if (versionsFromApi) {
      dispatch(Object(_state_actions_songs__WEBPACK_IMPORTED_MODULE_4__["setVersions"])(versionsFromApi));
    }
  }, [versionsFromApi]);
  const columns = [{
    property: 'version_number',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_13__["default"].t('akum_results_table.version_number'),
    minWidth: '80px'
  }, {
    property: 'performer',
    subProperty: 'heb_name',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_13__["default"].t('akum_results_table.performer'),
    minWidth: '80px'
  }, {
    property: 'publication_date',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_13__["default"].t('akum_results_table.publication_date')
  }, {
    property: 'chooseVersion',
    label: '',
    dataScope: 'col',
    align: 'start',
    minWidth: '120px',
    cell: ver => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_11__["TableButton"], {
        onClick: () => checkIfSongIsTaken(ver),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }
      }, _localization_i18n__WEBPACK_IMPORTED_MODULE_13__["default"].t('akum_results_table.choose_version'));
    }
  }];
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const danceOnAddProcess = Object(_state_uses_dances__WEBPACK_IMPORTED_MODULE_6__["useDanceOnAddProcess"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!danceOnAddProcess) {
      history.goBack();
    }
  }, [danceOnAddProcess]);

  const searchByIdCallback = total => setTotalVersions(total);

  const searchById = page => {
    return dispatch => {
      _services_acum__WEBPACK_IMPORTED_MODULE_9__["default"].searchById(songId, page, searchByIdCallback).then(res => {
        res !== versionsFromApi && setVersionsFromApi(res);
      }, error => (!versionsFromApi || versionsFromApi.length > 0) && setVersionsFromApi([]));
    };
  };

  const checkIfSongIsTaken = ver => {
    _services_api__WEBPACK_IMPORTED_MODULE_8__["default"].getDanceByAkumId(ver.id).subscribe(res => {
      setErrorModalIsOpen(true);
    }, error => {
      console.log('getDanceByAkumId error', error);
      chooseVersion(ver);
    });
  };

  const chooseVersion = ver => {
    var _ver$id;

    danceOnAddProcess.performer = ver.performer.heb_name;
    const translatedSongName = ver.work_eng_name ? ` - ${ver.work_eng_name}` : null;
    danceOnAddProcess.song = Object.assign({}, danceOnAddProcess.song, {
      name: translatedSongName ? ver.work_heb_name + translatedSongName : ver.work_heb_name,
      akum_id: ((_ver$id = ver.id) === null || _ver$id === void 0 ? void 0 : _ver$id.length) === 9 ? ver.id.substring(0, 6) : ver.id,
      publication_year: ver.publication_date,
      lyricists: ver.lyricists,
      composers: ver.composers
    });
    dispatch(Object(_state_actions_dances__WEBPACK_IMPORTED_MODULE_7__["setDanceOnAddProcess"])(danceOnAddProcess));
    dispatch(Object(_state_actions_songs__WEBPACK_IMPORTED_MODULE_4__["setSongs"])(null));
    dispatch(Object(_state_actions_songs__WEBPACK_IMPORTED_MODULE_4__["setVersions"])(null));
    history.push({
      pathname: 'dance'
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modals_MessageModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
    isOpen: errorModalIsOpen,
    title: _localization_i18n__WEBPACK_IMPORTED_MODULE_13__["default"].t('modals.error'),
    mainText: _localization_i18n__WEBPACK_IMPORTED_MODULE_13__["default"].t('akum_results_table.dance_alreay_exists'),
    onClose: () => setErrorModalIsOpen(false),
    error: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table_PaginatedTable__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: _localization_i18n__WEBPACK_IMPORTED_MODULE_13__["default"].t('akum_results_table.songs'),
    columns: columns,
    useFunction: _state_uses_songs__WEBPACK_IMPORTED_MODULE_5__["useVersions"],
    loadAction: searchById,
    hidePageSize: true,
    hideTableHeader: true,
    totalItems: totalVersions,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }));
});
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "AcumVersionsTable__Container",
  componentId: "e4vgh7-0"
})([""]);

/***/ }),

/***/ "./src/components/AddEditDance/ArtistAutoCompleteInput.js":
/*!****************************************************************!*\
  !*** ./src/components/AddEditDance/ArtistAutoCompleteInput.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/api */ "./src/services/api.js");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/utils */ "./src/services/utils.js");
/* harmony import */ var _components_Form_SelectWithInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Form/SelectWithInput */ "./src/components/Form/SelectWithInput.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/AddEditDance/ArtistAutoCompleteInput.js";




/* harmony default export */ __webpack_exports__["default"] = (({
  value,
  label,
  onSelect,
  artistType,
  required
}) => {
  const [options, setOptions] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [inputText, setInputText] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getOptions();
  }, [inputText]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log('artistAutoComlete - options changed: ', options);
  }, [options]);

  const getOptions = () => {
    _services_api__WEBPACK_IMPORTED_MODULE_1__["default"].getFilterOptions('dances', artistType, null, inputText).subscribe(res => {
      // console.log('getFilterOptions res', res)
      const newOptions = [...res.data];

      if (inputText !== '' && !newOptions.some(opt => opt === inputText)) {
        newOptions.push({
          label: inputText + ' (הוסף חדש)',
          value: inputText
        });
      }

      setOptions(newOptions);
    }, error => console.log('artistAutoComlete getFilterOptions error', error));
  };

  const onChange = selectedObj => {
    onSelect(selectedObj.value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_SelectWithInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: label,
    placeholder: 'חפש או הקלד חדש',
    value: {
      value,
      label: value
    },
    onChange: onChange,
    onInputChange: text => {
      _services_utils__WEBPACK_IMPORTED_MODULE_2__["onControlledChange"](text, 0, text => {
        setInputText(text);
      });
    },
    options: (options || []).map(option => {
      if (typeof option === 'object') {
        return option;
      } else if (typeof option === 'string') {
        return {
          label: option,
          value: option
        };
      }
    }),
    required: required,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  });
});

/***/ }),

/***/ "./src/components/AddEditDance/CancelButton.js":
/*!*****************************************************!*\
  !*** ./src/components/AddEditDance/CancelButton.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Buttons/SubmitButton */ "./src/components/Buttons/SubmitButton.js");
/* harmony import */ var _services_urlUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/urlUtils */ "./src/services/urlUtils.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/AddEditDance/CancelButton.js";



/* harmony default export */ __webpack_exports__["default"] = (({
  label
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onClick: () => _services_urlUtils__WEBPACK_IMPORTED_MODULE_2__["default"].redirectToPreviousUrl(),
    label: label,
    theme: 'white',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  });
});

/***/ }),

/***/ "./src/components/AddEditDance/DanceSubmit.js":
/*!****************************************************!*\
  !*** ./src/components/AddEditDance/DanceSubmit.js ***!
  \****************************************************/
/*! exports provided: optModalTexts, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optModalTexts", function() { return optModalTexts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _state_actions_dances__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @state/actions/dances */ "./src/state/actions/dances.js");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils */ "./src/services/utils.js");
/* harmony import */ var _services_dances__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/dances */ "./src/services/dances.js");
/* harmony import */ var _components_Modals_MessageModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Modals/MessageModal */ "./src/components/Modals/MessageModal.js");
/* harmony import */ var _components_Buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/Buttons/SubmitButton */ "./src/components/Buttons/SubmitButton.js");
/* harmony import */ var _components_AddEditDance_CancelButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/AddEditDance/CancelButton */ "./src/components/AddEditDance/CancelButton.js");
/* harmony import */ var _state_uses_users__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @state/uses/users */ "./src/state/uses/users.js");
/* harmony import */ var _state_uses_dances__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @state/uses/dances */ "./src/state/uses/dances.js");
/* harmony import */ var _components_AddEditDance_StatusProgressButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @components/AddEditDance/StatusProgressButton */ "./src/components/AddEditDance/StatusProgressButton.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
/* harmony import */ var _services_urlUtils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @services/urlUtils */ "./src/services/urlUtils.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/AddEditDance/DanceSubmit.js";
















const optModalTexts = {
  newDance: {
    title: _localization_i18n__WEBPACK_IMPORTED_MODULE_14__["default"].t('modals.request_recieved'),
    mainText: _localization_i18n__WEBPACK_IMPORTED_MODULE_14__["default"].t('modals.request_under_review')
  },
  editDance: {
    title: _localization_i18n__WEBPACK_IMPORTED_MODULE_14__["default"].t('modals.dance_updated_successfully'),
    mainText: _localization_i18n__WEBPACK_IMPORTED_MODULE_14__["default"].t('modals.back_to_dances_screen')
  }
};
const optErrorModalTexts = {
  'song already exist': 'לא ניתן לשלוח את הבקשה. הריקוד קיים במערכת'
};
/* harmony default export */ __webpack_exports__["default"] = (({
  dance,
  error
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  const user = Object(_state_uses_users__WEBPACK_IMPORTED_MODULE_10__["useUser"])();
  const saveFromReAkumSearch = Object(_state_uses_dances__WEBPACK_IMPORTED_MODULE_11__["useSaveFromReAkumSearch"])();
  const modalTexts = dance.id ? optModalTexts.editDance : optModalTexts.newDance;
  const [modalIsOpen, setModalIsOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [errorModalIsOpen, setErrorModalIsOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [errorMessege, setErrorMessege] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  if (!dance) {
    return null;
  }

  const formIsValid = () => {
    console.log('formIsValid init - dance', dance);

    if (_services_utils__WEBPACK_IMPORTED_MODULE_5__["isEmptyStr"](dance.name) || _services_utils__WEBPACK_IMPORTED_MODULE_5__["isEmpty"](dance.choreographer) || _services_utils__WEBPACK_IMPORTED_MODULE_5__["isEmptyStr"](dance.song.name) || _services_utils__WEBPACK_IMPORTED_MODULE_5__["isEmptyStr"](dance.performer) || // Utils.isEmptyStr(dance.song.performer) ||
    _services_utils__WEBPACK_IMPORTED_MODULE_5__["isEmptyStr"](dance.song.akum_id) && !(user === null || user === void 0 ? void 0 : user.is_admin) && (!dance.status || dance.status === _components_AddEditDance_StatusProgressButton__WEBPACK_IMPORTED_MODULE_12__["DANCE_STATUS_ORDERED"]) || _services_utils__WEBPACK_IMPORTED_MODULE_5__["isEmptyStr"](dance.song.composer) && _services_utils__WEBPACK_IMPORTED_MODULE_5__["isEmptyStr"](dance.song.composers) || _services_utils__WEBPACK_IMPORTED_MODULE_5__["isEmptyStr"](dance.song.lyricist) && _services_utils__WEBPACK_IMPORTED_MODULE_5__["isEmptyStr"](dance.song.lyricists)) {
      return false;
    }

    return true;
  };

  const goToDancesScreen = () => {
    setModalIsOpen(false);
    _services_urlUtils__WEBPACK_IMPORTED_MODULE_15__["default"].redirectToPreviousUrl();
  };

  const onSubmitCallback = () => {
    dispatch(Object(_state_actions_dances__WEBPACK_IMPORTED_MODULE_4__["setDanceOnAddProcess"])(null));
    setModalIsOpen(true);
  };

  const onSubmitError = err => {
    // console.log('akum search err = ', err.split(':')[2].split('"')[1])
    // console.log('akum search err = ', err)
    // setErrorMessege(toString(err).split(':')[2].split('"')[1])
    if (err) {
      var _err$msg, _err$split$;

      const errMsg = ((_err$msg = err.msg) === null || _err$msg === void 0 ? void 0 : _err$msg.error) || ((_err$split$ = err.split(':')[2]) === null || _err$split$ === void 0 ? void 0 : _err$split$.split('"')[1]);
      setErrorMessege(errMsg);
    }

    setErrorModalIsOpen(true);
  };

  const submit = () => {
    if (formIsValid()) {
      var _dance$song, _dance$song$name, _dance$name;

      const newSong = { ...dance.song,
        name: dance === null || dance === void 0 ? void 0 : (_dance$song = dance.song) === null || _dance$song === void 0 ? void 0 : (_dance$song$name = _dance$song.name) === null || _dance$song$name === void 0 ? void 0 : _dance$song$name.trim()
      };
      const newDance = { ...dance,
        name: dance === null || dance === void 0 ? void 0 : (_dance$name = dance.name) === null || _dance$name === void 0 ? void 0 : _dance$name.trim(),
        song: newSong
      };
      Object(_services_dances__WEBPACK_IMPORTED_MODULE_6__["saveDance"])(newDance, onSubmitCallback, onSubmitError);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_13__["SubmitWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_13__["SubmitButtonsRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_13__["SubmitBtnContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: submit,
    disabled: !formIsValid(),
    label: dance.id ? _localization_i18n__WEBPACK_IMPORTED_MODULE_14__["default"].t('edit_dance.save') : _localization_i18n__WEBPACK_IMPORTED_MODULE_14__["default"].t('edit_dance.send_request'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_13__["SubmitBtnContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AddEditDance_CancelButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: dance.id ? _localization_i18n__WEBPACK_IMPORTED_MODULE_14__["default"].t('edit_dance.cancel_edit') : _localization_i18n__WEBPACK_IMPORTED_MODULE_14__["default"].t('edit_dance.canael_order'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AddEditDance_StatusProgressButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
    dance: dance,
    formValid: formIsValid(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AddEditDance_StatusProgressButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
    dance: dance,
    formValid: formIsValid(),
    del: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  })), (!dance.song.akum_id || dance.song.akum_id === '') && (!dance.status || dance.status === _components_AddEditDance_StatusProgressButton__WEBPACK_IMPORTED_MODULE_12__["DANCE_STATUS_ORDERED"]) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_13__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ErrorText, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 25
    }
  }, _localization_i18n__WEBPACK_IMPORTED_MODULE_14__["default"].t('edit_dance.no_akum_search_error'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_13__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ErrorText, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 17
    }
  }, error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modals_MessageModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isOpen: modalIsOpen,
    title: modalTexts.title,
    mainText: modalTexts.mainText,
    onClose: goToDancesScreen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modals_MessageModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isOpen: errorModalIsOpen,
    title: _localization_i18n__WEBPACK_IMPORTED_MODULE_14__["default"].t('modals.error'),
    mainText: optErrorModalTexts[errorMessege],
    onClose: () => setErrorModalIsOpen(false),
    error: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }
  }));
});
const ErrorText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "DanceSubmit__ErrorText",
  componentId: "sc-1rmg6gx-0"
})(["\n    color: red;\n    text-align: center;\n    width: 100%;\n"]);

/***/ }),

/***/ "./src/components/AddEditDance/SongDetails.js":
/*!****************************************************!*\
  !*** ./src/components/AddEditDance/SongDetails.js ***!
  \****************************************************/
/*! exports provided: default, FullWidthContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullWidthContainer", function() { return FullWidthContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _services_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/layout */ "./src/services/layout.js");
/* harmony import */ var _state_actions_dances__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @state/actions/dances */ "./src/state/actions/dances.js");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils */ "./src/services/utils.js");
/* harmony import */ var _services_urlUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/urlUtils */ "./src/services/urlUtils.js");
/* harmony import */ var _components_Form_TextInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/Form/TextInput */ "./src/components/Form/TextInput.js");
/* harmony import */ var _components_Form_StaticLabeledText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/Form/StaticLabeledText */ "./src/components/Form/StaticLabeledText.js");
/* harmony import */ var _components_Table_FilterBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/Table/FilterBox */ "./src/components/Table/FilterBox.js");
/* harmony import */ var _components_Buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/Buttons/SubmitButton */ "./src/components/Buttons/SubmitButton.js");
/* harmony import */ var _components_AddEditDance_CancelButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @components/AddEditDance/CancelButton */ "./src/components/AddEditDance/CancelButton.js");
/* harmony import */ var _state_actions_songs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @state/actions/songs */ "./src/state/actions/songs.js");
/* harmony import */ var _components_AddEditDance_ArtistAutoCompleteInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @components/AddEditDance/ArtistAutoCompleteInput */ "./src/components/AddEditDance/ArtistAutoCompleteInput.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
/* harmony import */ var _services_dances__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @services/dances */ "./src/services/dances.js");
/* harmony import */ var _components_AddEditDance_StatusProgressButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @components/AddEditDance/StatusProgressButton */ "./src/components/AddEditDance/StatusProgressButton.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/AddEditDance/SongDetails.js";




















let composerIsEditable = false;
let lyricistIsEditable = false;

const getSelectedLyricists = dance => {
  var _dance$song;

  let selectedFilters = [];
  const lyricistsText = dance === null || dance === void 0 ? void 0 : (_dance$song = dance.song) === null || _dance$song === void 0 ? void 0 : _dance$song.lyricist;
  let lyricistsArray = lyricistsText === null || lyricistsText === void 0 ? void 0 : lyricistsText.split(',');

  if ((lyricistsArray === null || lyricistsArray === void 0 ? void 0 : lyricistsArray.length) > 1) {
    lyricistsArray.map(lyricist => {
      const cleanLyricistText = lyricist.trim();
      selectedFilters.push({
        label: cleanLyricistText,
        value: cleanLyricistText
      });
    });
  } else {
    return dance.song.lyricist ? {
      lyricist: [Object.assign({
        label: dance.song.lyricist.trim(),
        value: dance.song.lyricist.trim()
      })]
    } : {};
  }

  return {
    lyricist: selectedFilters
  };
};

const getSelectedComposers = dance => {
  var _dance$song2;

  let selectedFilters = [];
  const composersText = dance === null || dance === void 0 ? void 0 : (_dance$song2 = dance.song) === null || _dance$song2 === void 0 ? void 0 : _dance$song2.composer;
  let composersArray = composersText === null || composersText === void 0 ? void 0 : composersText.split(',');

  if ((composersArray === null || composersArray === void 0 ? void 0 : composersArray.length) > 1) {
    composersArray.map(composer => {
      const cleanComposerText = composer.trim();
      selectedFilters.push({
        label: cleanComposerText,
        value: cleanComposerText
      });
    });
  } else {
    return dance.song.composer ? {
      composer: [Object.assign({
        label: dance.song.composer.trim(),
        value: dance.song.composer.trim()
      })]
    } : {};
  }

  return {
    composer: selectedFilters
  };
};

const getSelectedPerformers = dance => {
  let selectedFilters = [];
  const performersText = dance === null || dance === void 0 ? void 0 : dance.performer;
  let performersArray = performersText === null || performersText === void 0 ? void 0 : performersText.split(',');

  if ((performersArray === null || performersArray === void 0 ? void 0 : performersArray.length) > 1) {
    performersArray.map(performer => {
      const cleanPerformerText = performer.trim();
      selectedFilters.push({
        label: cleanPerformerText,
        value: cleanPerformerText
      });
    });
  } else {
    console.log('Got in ELSE');
    return dance.performer ? {
      performer: [Object.assign({
        label: dance.performer.trim(),
        value: dance.performer.trim()
      })]
    } : {};
  }

  return {
    performer: selectedFilters
  };
};

const getHebName = arr => {
  if (!arr) return null;
  let artistsHebNames = '';
  arr.map((artist, i) => {
    if (artist['heb_name']) {
      artistsHebNames += artist['heb_name'];
    }

    if (i + 1 !== arr.length) {
      artistsHebNames += ', ';
    }
  });
  return artistsHebNames;
};

/* harmony default export */ __webpack_exports__["default"] = (({
  user,
  dance,
  updateSong,
  updateSongAndDanceName,
  setDanceProperty,
  checkPermissionByField
}) => {
  var _dance$song3, _dance$song3$name, _dance$akum_id, _dance$song4, _dance$song4$akum_id;

  const getTempArtistsNames = fieldName => {
    return getHebName(dance.song[fieldName]) ? {
      [fieldName.slice(0, -1)]: [{
        value: getHebName(dance.song[fieldName]),
        label: getHebName(dance.song[fieldName])
      }]
    } : null;
  };

  const [selectedLyricistsFilters, setSelectedLyricistsFilters] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getTempArtistsNames('lyricists') || getSelectedLyricists(dance));
  const [selectedComposersFilters, setSelectedComposersFilters] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getTempArtistsNames('composers') || getSelectedComposers(dance));
  const [selectedPerformersFilters, setSelectedPerformersFilters] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getSelectedPerformers(dance)); //console.log('12345678', getSelectedPerformers(dance))

  const extractPerformersString = newFilters => {
    let res = '';
    const performersArray = newFilters === null || newFilters === void 0 ? void 0 : newFilters.performer;

    if (performersArray) {
      performersArray.map(performer => {
        res += performer.value + ', ';
      });
    }

    res = res.slice(0, -2);
    return res;
  };

  const updatePerformersFilters = (name, selected) => {
    const newFilters = Object.assign({}, selectedPerformersFilters);

    if (selected && selected.length > 0) {
      newFilters[name] = selected.map(sel => sel);
    } else {
      if (newFilters[name]) {
        delete newFilters[name];
      }
    }

    setSelectedPerformersFilters(newFilters); // setSongProperty({
    //     performer: extractPerformersString(newFilters),
    // })

    setDanceProperty({
      performer: extractPerformersString(newFilters)
    });
  };

  const extractComposersString = newFilters => {
    let res = '';
    const composersArray = newFilters === null || newFilters === void 0 ? void 0 : newFilters.composer;

    if (composersArray) {
      composersArray.map(composer => {
        res += composer.value + ', ';
      });
    }

    res = res.slice(0, -2);
    return res;
  };

  const updateComposersFilters = (name, selected) => {
    const newFilters = Object.assign({}, selectedComposersFilters);

    if (selected && selected.length > 0) {
      newFilters[name] = selected.map(sel => sel);
    } else {
      if (newFilters[name]) {
        delete newFilters[name];
      }
    }

    setSelectedComposersFilters(newFilters);
    setSongProperty({
      composer: extractComposersString(newFilters)
    });

    if (!newFilters || newFilters === {} || Object.keys(newFilters).length === 0) {
      setSongProperty({
        composers: ''
      });
    }
  };

  const extractLyricistsString = newFilters => {
    let res = '';
    const lyricistsArray = newFilters === null || newFilters === void 0 ? void 0 : newFilters.lyricist;

    if (lyricistsArray) {
      lyricistsArray.map(lyricist => {
        res += lyricist.value + ', ';
      });
    }

    res = res.slice(0, -2);
    return res;
  };

  const updateLyricistsFilters = (name, selected) => {
    const newFilters = Object.assign({}, selectedLyricistsFilters);

    if (selected && selected.length > 0) {
      newFilters[name] = selected.map(sel => sel);
    } else {
      if (newFilters[name]) {
        delete newFilters[name];
      }
    }

    setSelectedLyricistsFilters(newFilters);
    setSongProperty({
      lyricist: extractLyricistsString(newFilters)
    });

    if (!newFilters || newFilters === {} || Object.keys(newFilters).length === 0) {
      setSongProperty({
        lyricists: ''
      });
    }
  }; // console.log('FROM Song Details -- dance  = ', dance)


  let composers = dance.song.composers;
  composers.length > 0 ? composerIsEditable = false : composerIsEditable = true;
  let lyricists = dance.song.lyricists;
  lyricists.length > 0 ? lyricistIsEditable = false : lyricistIsEditable = true;
  const danceStatus = dance.status;
  const [updateSongName, setUpdateSongName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(dance.song.name);
  const [danceName, setDanceName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(dance.name);
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const buttonWidth = Object(_services_layout__WEBPACK_IMPORTED_MODULE_4__["useButtonWidth"])();
  const [updateAkumNumber, setUpdateAkumNumber] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(dance.song.akum_id);
  const [updateTranslatedVersionId, setUpdateTranslatedVersionId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(dance.song.translated_version_id);
  const [showAkumSearch, setShowAkumSearch] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!dance.status && !dance.song.akum_id);
  const [showAkumResearchTextButton, setShowAkumResearchTextButton] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(dance.song.akum_id && !danceStatus);
  const [showManualDetailsInputs, setShowManualDetailsInputs] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(dance.song.akum_id === 'not_found' && !danceStatus);
  const [showManualStaticFields, setShowManualStaticFields] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(danceStatus && (dance.song.akum_id === 'not_found' || dance.status === _components_AddEditDance_StatusProgressButton__WEBPACK_IMPORTED_MODULE_17__["DANCE_STATUS_EXISTS"] && !dance.song.akum_id));
  const [showStaticAkumFields, setShowStaticAkumFields] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const setSongProperty = propertyObj => {
    updateSong(Object.assign({}, dance.song, propertyObj));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!lyricistIsEditable) {
      setSongProperty({
        lyricist: ''
      });
    }

    if (!composerIsEditable) {
      setSongProperty({
        composer: ''
      });
    }
  }, [lyricistIsEditable, composerIsEditable]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (dance.song.akum_id) {
      setShowAkumSearch(false);

      if (!dance.status) {
        setShowAkumResearchTextButton(true);

        if (dance.song.akum_id === 'not_found') {
          setShowManualDetailsInputs(true);
        }
      }
    }
  }, [dance]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (dance.song.akum_id && dance.song.akum_id !== 'not_found' && dance.song.akum_id !== '' || !showAkumSearch && !showManualDetailsInputs && !showAkumResearchTextButton) setShowStaticAkumFields(true);
  }, [dance.song.akum_id]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (user && user.is_admin) {
      if (dance.song.akum_id === 'not_found' && dance.performer === '') {
        setShowManualDetailsInputs(true);
        setShowManualStaticFields(false);
      }
    }
  }, [user]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (lyricistIsEditable || composerIsEditable) {
      setShowManualStaticFields(false);
    }
  }, []); // useEffect(() => {
  //     if (dance && !dance.status) {
  //         const name = dance.song.name
  //         setDanceProperty({ name })
  //         setDanceName(name)
  //     }
  // }, [dance.song.name])

  const resetSong = () => setSongProperty({
    akum_id: '',
    composer: '',
    lyricist: '',
    performer: '',
    composers: [],
    lyricists: []
  });

  const akumResearchTextLinkClick = () => {
    resetSong();
    setShowAkumSearch(true);
    setShowManualDetailsInputs(false);
    setShowManualStaticFields(false);
    setShowStaticAkumFields(false);
    setShowAkumResearchTextButton(false);
  };

  const goToAcumSearch = () => {
    (dance === null || dance === void 0 ? void 0 : dance.status) ? dispatch(Object(_state_actions_dances__WEBPACK_IMPORTED_MODULE_5__["setSaveFromReAkumSearch"])(true)) : dispatch(Object(_state_actions_dances__WEBPACK_IMPORTED_MODULE_5__["setSaveFromReAkumSearch"])(null));
    dispatch(Object(_state_actions_dances__WEBPACK_IMPORTED_MODULE_5__["setDanceOnAddProcess"])(dance));
    dispatch(Object(_state_actions_songs__WEBPACK_IMPORTED_MODULE_13__["setSongs"])(null));
    dispatch(Object(_state_actions_songs__WEBPACK_IMPORTED_MODULE_13__["setVersions"])(null));
    history.push({
      pathname: 'acum_search_song',
      search: _services_urlUtils__WEBPACK_IMPORTED_MODULE_7__["default"].buildQueryParams({ ..._services_urlUtils__WEBPACK_IMPORTED_MODULE_7__["default"].getQueryParams(),
        song: dance.song.name,
        page: 1
      })
    });
  };

  if (!dance.song) {
    return null;
  }

  const disableAkumSearch = (dance === null || dance === void 0 ? void 0 : (_dance$song3 = dance.song) === null || _dance$song3 === void 0 ? void 0 : (_dance$song3$name = _dance$song3.name) === null || _dance$song3$name === void 0 ? void 0 : _dance$song3$name.length) < 3;
  const allowSongDetailsEdit = !dance.status || dance.status === _components_AddEditDance_StatusProgressButton__WEBPACK_IMPORTED_MODULE_17__["DANCE_STATUS_ORDERED"] || (user === null || user === void 0 ? void 0 : user.is_admin);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_15__["FormWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 9
    }
  }, showAkumSearch && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_15__["FormSection"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_15__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
    text: dance.song.name,
    onChangeText: updateSongAndDanceName,
    width: '100%',
    required: true,
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.song_name'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex1, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_15__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 21
    }
  }, disableAkumSearch && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_15__["ErrorText"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 29
    }
  }, _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.minimum_search_length_error'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_15__["SubmitButtonsRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSubmitBtnContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: goToAcumSearch,
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.search_song_in_akum'),
    disabled: disableAkumSearch,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 29
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSubmitBtnContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AddEditDance_CancelButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
    label: dance.id ? _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.cancel_edit') : _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.canael_order'),
    goToDancesSecreen: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 29
    }
  })))), showStaticAkumFields &&
  /*#__PURE__*/
  //  || user?.is_admin
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_15__["FormWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_15__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 21
    }
  }, checkPermissionByField() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
    text: danceName || dance.name,
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.dance_name_changeable'),
    required: true,
    onChangeText: name => {
      setDanceProperty({
        name
      });
      setDanceName(name);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465,
      columnNumber: 29
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_StaticLabeledText__WEBPACK_IMPORTED_MODULE_9__["default"], {
    text: danceName || dance.name,
    label: 'שם ריקוד',
    width: 'initial',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 29
    }
  }), (user === null || user === void 0 ? void 0 : user.is_admin) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NewSearchBtnContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: goToAcumSearch,
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.perform_new_akum_search'),
    disabled: disableAkumSearch,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485,
      columnNumber: 33
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_15__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495,
      columnNumber: 21
    }
  }, (user === null || user === void 0 ? void 0 : user.is_admin) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
    text: updateSongName || dance.song.name,
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.original_song_name'),
    required: true,
    onChangeText: name => {
      setSongProperty({
        name
      });
      setUpdateSongName(name);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 29
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_StaticLabeledText__WEBPACK_IMPORTED_MODULE_9__["default"], {
    text: dance.song.name,
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.original_song_name'),
    width: buttonWidth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 29
    }
  }), (user === null || user === void 0 ? void 0 : user.is_admin) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
    text: dance.song.akum_id || updateAkumNumber,
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.akum_id'),
    width: 'initial',
    onChangeText: akum_id => {
      setUpdateAkumNumber(akum_id);
      setSongProperty({
        akum_id
      });
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 29
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_StaticLabeledText__WEBPACK_IMPORTED_MODULE_9__["default"], {
    text: dance.song.akum_id,
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.akum_id'),
    width: buttonWidth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 29
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_15__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532,
      columnNumber: 21
    }
  }, (user === null || user === void 0 ? void 0 : user.is_admin) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
    text: updateTranslatedVersionId || dance.song.translated_version_id,
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.translated_version_id'),
    width: 'initial',
    onChangeText: translated_version_id => {
      setUpdateTranslatedVersionId(translated_version_id);
      setSongProperty({
        translated_version_id
      });
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534,
      columnNumber: 29
    }
  }) : dance.song.translated_version_id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_StaticLabeledText__WEBPACK_IMPORTED_MODULE_9__["default"], {
    text: dance.song.translated_version_id,
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.translated_version_id'),
    width: 'initial',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551,
      columnNumber: 29
    }
  }) : null, dance.song.publication_year ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_StaticLabeledText__WEBPACK_IMPORTED_MODULE_9__["default"], {
    text: dance.song.publication_year,
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.song_publication_year'),
    width: 'initial',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561,
      columnNumber: 29
    }
  }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_15__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571,
      columnNumber: 21
    }
  }, checkPermissionByField('performer') ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.performer'),
    text: dance.performer,
    onChangeText: performer => {
      setDanceProperty({
        performer
      });
    },
    width: buttonWidth,
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 573,
      columnNumber: 29
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_StaticLabeledText__WEBPACK_IMPORTED_MODULE_9__["default"], {
    text: dance.performer,
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.performer'),
    width: 'initial',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583,
      columnNumber: 29
    }
  }), composerIsEditable || (user === null || user === void 0 ? void 0 : user.is_admin) && (!(dance === null || dance === void 0 ? void 0 : dance.song.akum_id) || ((_dance$akum_id = dance.akum_id) === null || _dance$akum_id === void 0 ? void 0 : _dance$akum_id.song.length) < 1) ? allowSongDetailsEdit ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table_FilterBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
    filter: {
      property: 'composer',
      label: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.composer')
    },
    updateFilters: updateComposersFilters,
    selectedFilters: selectedComposersFilters,
    collection: 'dances',
    required: true,
    optionsRequired: true,
    optionsMsg: ' (הוסף חדש)',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 594,
      columnNumber: 33
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_StaticLabeledText__WEBPACK_IMPORTED_MODULE_9__["default"], {
    text: dance.song.composer,
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.composer'),
    width: 'initial',
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 607,
      columnNumber: 33
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_StaticLabeledText__WEBPACK_IMPORTED_MODULE_9__["default"], {
    text: getHebName(dance.song.composers),
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.composer'),
    width: 'initial',
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615,
      columnNumber: 29
    }
  }), lyricistIsEditable || (user === null || user === void 0 ? void 0 : user.is_admin) && (!(dance === null || dance === void 0 ? void 0 : dance.song.akum_id) || (dance === null || dance === void 0 ? void 0 : (_dance$song4 = dance.song) === null || _dance$song4 === void 0 ? void 0 : (_dance$song4$akum_id = _dance$song4.akum_id) === null || _dance$song4$akum_id === void 0 ? void 0 : _dance$song4$akum_id.length) < 1) ? allowSongDetailsEdit ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table_FilterBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
    filter: {
      property: 'lyricist',
      label: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.lyricist')
    },
    updateFilters: updateLyricistsFilters,
    selectedFilters: selectedLyricistsFilters,
    collection: 'dances',
    required: true,
    optionsRequired: true,
    optionsMsg: ' (הוסף חדש)',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 627,
      columnNumber: 33
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_StaticLabeledText__WEBPACK_IMPORTED_MODULE_9__["default"], {
    text: dance.song.lyricist,
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.lyricist'),
    width: 'initial',
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 640,
      columnNumber: 33
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_StaticLabeledText__WEBPACK_IMPORTED_MODULE_9__["default"], {
    text: getHebName(dance.song.lyricists),
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.lyricist'),
    width: 'initial',
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 648,
      columnNumber: 29
    }
  }))), showAkumResearchTextButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_15__["FormWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_15__["PageSubTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 660,
      columnNumber: 21
    }
  }, showManualDetailsInputs && _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.manual_registration_request'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_15__["TextBtn"], {
    onClick: akumResearchTextLinkClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 663,
      columnNumber: 25
    }
  }, ' ', _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.perform_new_search')))), showManualDetailsInputs && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_15__["FormWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 672,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_15__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
    text: dance.name,
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.original_song_name'),
    onChangeText: updateSongAndDanceName,
    width: '100%',
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 674,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex2, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_15__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table_FilterBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
    filter: {
      property: 'performer',
      label: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.performer')
    },
    updateFilters: updatePerformersFilters,
    selectedFilters: selectedPerformersFilters,
    collection: 'dances',
    required: true,
    optionsRequired: true,
    optionsMsg: ' (הוסף חדש)',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 684,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table_FilterBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
    filter: {
      property: 'composer',
      label: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.composer')
    },
    updateFilters: updateComposersFilters,
    selectedFilters: selectedComposersFilters,
    collection: 'dances',
    required: true,
    optionsRequired: true,
    optionsMsg: ' (הוסף חדש)',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 696,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table_FilterBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
    filter: {
      property: 'lyricist',
      label: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.lyricist')
    },
    updateFilters: updateLyricistsFilters,
    selectedFilters: selectedLyricistsFilters,
    collection: 'dances',
    required: true,
    optionsRequired: true,
    optionsMsg: ' (הוסף חדש)',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 709,
      columnNumber: 25
    }
  }))));
});
const Flex1 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SongDetails__Flex1",
  componentId: "sc-1tywn71-0"
})(["\n    flex: 1;\n    padding: 0 20px;\n"]);
const Flex2 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SongDetails__Flex2",
  componentId: "sc-1tywn71-1"
})(["\n    flex: 2;\n    padding: 0 40px;\n"]);
const FullWidthContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SongDetails__FullWidthContainer",
  componentId: "sc-1tywn71-2"
})([""]);
const StyledSubmitBtnContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_appearance_styled__WEBPACK_IMPORTED_MODULE_15__["SubmitBtnContainer"]).withConfig({
  displayName: "SongDetails__StyledSubmitBtnContainer",
  componentId: "sc-1tywn71-3"
})(["\n    margin-bottom: 0px;\n"]);
const NewSearchBtnContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_appearance_styled__WEBPACK_IMPORTED_MODULE_15__["SubmitBtnContainer"]).withConfig({
  displayName: "SongDetails__NewSearchBtnContainer",
  componentId: "sc-1tywn71-4"
})(["\n    margin-top: 35px;\n"]);

/***/ }),

/***/ "./src/components/AddEditDance/StatusProgressButton.js":
/*!*************************************************************!*\
  !*** ./src/components/AddEditDance/StatusProgressButton.js ***!
  \*************************************************************/
/*! exports provided: DANCE_STATUS_ORDERED, DANCE_STATUS_APPROVED, DANCE_STATUS_EXISTS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DANCE_STATUS_ORDERED", function() { return DANCE_STATUS_ORDERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DANCE_STATUS_APPROVED", function() { return DANCE_STATUS_APPROVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DANCE_STATUS_EXISTS", function() { return DANCE_STATUS_EXISTS; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_uses_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @state/uses/users */ "./src/state/uses/users.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/api */ "./src/services/api.js");
/* harmony import */ var _services_dances__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/dances */ "./src/services/dances.js");
/* harmony import */ var _components_Buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Buttons/SubmitButton */ "./src/components/Buttons/SubmitButton.js");
/* harmony import */ var _components_Modals_ConfirmModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Modals/ConfirmModal */ "./src/components/Modals/ConfirmModal.js");
/* harmony import */ var _components_Modals_MessageModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Modals/MessageModal */ "./src/components/Modals/MessageModal.js");
/* harmony import */ var _components_AddEditDance_DanceSubmit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/AddEditDance/DanceSubmit */ "./src/components/AddEditDance/DanceSubmit.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
/* harmony import */ var _services_urlUtils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/urlUtils */ "./src/services/urlUtils.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/AddEditDance/StatusProgressButton.js";












const DANCE_STATUS_ORDERED = 'מוזמן';
const DANCE_STATUS_APPROVED = 'מאושר';
const DANCE_STATUS_EXISTS = 'קיים ריקוד';
const deleteDance = _localization_i18n__WEBPACK_IMPORTED_MODULE_10__["default"].t('edit_dance.delete_dance');
const rejectDance = _localization_i18n__WEBPACK_IMPORTED_MODULE_10__["default"].t('edit_dance.reject_dance');
const confirmDeleteDance = _localization_i18n__WEBPACK_IMPORTED_MODULE_10__["default"].t('edit_dance.confirm_delete_dance');
const confirmRejectDance = _localization_i18n__WEBPACK_IMPORTED_MODULE_10__["default"].t('edit_dance.confirm_reject_dance');

const checkAdminInCoChoreographers = (dance, user) => {
  var _dance$co_choreograph;

  let res = false;

  if ((dance === null || dance === void 0 ? void 0 : (_dance$co_choreograph = dance.co_choreographers) === null || _dance$co_choreograph === void 0 ? void 0 : _dance$co_choreograph.length) > 0) {
    dance.co_choreographers.map(choreographer => {
      if ((user === null || user === void 0 ? void 0 : user.user_id) === (choreographer === null || choreographer === void 0 ? void 0 : choreographer.id) || (user === null || user === void 0 ? void 0 : user.first_name) + (user === null || user === void 0 ? void 0 : user.last_name) === (choreographer === null || choreographer === void 0 ? void 0 : choreographer.first_name) + (choreographer === null || choreographer === void 0 ? void 0 : choreographer.last_name)) {
        res = true;
      }
    });
  }

  return res;
};

const assets = user => ({
  [DANCE_STATUS_ORDERED]: {
    btnText: _localization_i18n__WEBPACK_IMPORTED_MODULE_10__["default"].t('edit_dance.confirm_request'),
    deleteBtnText: user.is_admin ? rejectDance : deleteDance,
    confirmText: _localization_i18n__WEBPACK_IMPORTED_MODULE_10__["default"].t('edit_dance.confirm_confirm_request'),
    deleteConfirmText: user.is_admin ? confirmRejectDance : confirmDeleteDance,
    nextStatus: DANCE_STATUS_APPROVED
  },
  [DANCE_STATUS_APPROVED]: {
    btnText: _localization_i18n__WEBPACK_IMPORTED_MODULE_10__["default"].t('edit_dance.make_dance_exist'),
    deleteBtnText: _localization_i18n__WEBPACK_IMPORTED_MODULE_10__["default"].t('edit_dance.delete_dance'),
    confirmText: _localization_i18n__WEBPACK_IMPORTED_MODULE_10__["default"].t('edit_dance.confirm_make_dance_exist'),
    deleteConfirmText: _localization_i18n__WEBPACK_IMPORTED_MODULE_10__["default"].t('edit_dance.confirm_delete_dance'),
    nextStatus: DANCE_STATUS_EXISTS
  },
  [DANCE_STATUS_EXISTS]: {
    deleteBtnText: _localization_i18n__WEBPACK_IMPORTED_MODULE_10__["default"].t('edit_dance.delete_dance'),
    deleteConfirmText: _localization_i18n__WEBPACK_IMPORTED_MODULE_10__["default"].t('edit_dance.confirm_delete_dance')
  }
});

/* harmony default export */ __webpack_exports__["default"] = (({
  dance,
  del,
  formValid
}) => {
  const user = Object(_state_uses_users__WEBPACK_IMPORTED_MODULE_1__["useUser"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();

  if (!user || !dance.id) {
    return null;
  }

  if (user && !user.is_admin && !del) {
    return null;
  }

  if (user && !user.is_admin && del && dance.status === DANCE_STATUS_EXISTS) {
    return null;
  }

  const isReject = del && dance.status === DANCE_STATUS_ORDERED;
  const [showConfirmModal, setShowConfirmModal] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [showDoneModal, setShowDoneModal] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [showErrorModal, setShowErrorModal] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [reason, setReason] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const asset = assets(user)[dance.status];

  const goToDancesScreen = () => {
    setShowDoneModal(false);
    _services_urlUtils__WEBPACK_IMPORTED_MODULE_11__["default"].redirectToPreviousUrl();
  };

  const onSubmit = () => {
    if (asset.nextStatus === DANCE_STATUS_EXISTS && !del) {
      if (dance.video_url || user.is_admin) {
        setShowConfirmModal(true);
      } else {
        setShowErrorModal(true);
      }
    } else {
      setShowConfirmModal(true);
    }
  };

  const saveChanges = () => {
    setShowConfirmModal(false);

    if (del) {
      _services_api__WEBPACK_IMPORTED_MODULE_3__["default"].deleteDance(dance.id, getReasonObj()).subscribe(res => {
        setShowDoneModal(true);
      }, error => {
        console.log('rejectDance error', error);
      });
    } else {
      const statusParams = Object.assign({}, getReasonObj(), {
        status: asset.nextStatus
      });
      const newDance = Object.assign({}, dance, statusParams);
      Object(_services_dances__WEBPACK_IMPORTED_MODULE_4__["saveDance"])(newDance, () => {
        setShowDoneModal(true); // goToDancesScreen()
      });
    }
  };

  const buttonText = asset[del ? 'deleteBtnText' : 'btnText'];
  const confirmText = asset[del ? 'deleteConfirmText' : 'confirmText'];
  const shouldDisableButton = buttonText === _localization_i18n__WEBPACK_IMPORTED_MODULE_10__["default"].t('edit_dance.delete_dance') ? false : (user === null || user === void 0 ? void 0 : user.is_admin) && (dance === null || dance === void 0 ? void 0 : dance.choreographer.id) == (user === null || user === void 0 ? void 0 : user.user_id) && (buttonText === _localization_i18n__WEBPACK_IMPORTED_MODULE_10__["default"].t('edit_dance.make_dance_exist') || buttonText === _localization_i18n__WEBPACK_IMPORTED_MODULE_10__["default"].t('edit_dance.confirm_request')) ? true : checkAdminInCoChoreographers(dance, user);

  if (!buttonText) {
    return null;
  }

  const getReasonObj = () => {
    if (!reason) {
      return {};
    }

    if (isReject) {
      return {
        reject_reason: reason
      };
    } else if (del) {
      return {
        delete_reason: reason
      };
    }

    return {
      approve_reason: reason
    };
  };

  const getReasonLabel = () => {
    if (isReject) {
      return _localization_i18n__WEBPACK_IMPORTED_MODULE_10__["default"].t('edit_dance.reject_reason');
    } else if (del) {
      return _localization_i18n__WEBPACK_IMPORTED_MODULE_10__["default"].t('edit_dance.delete_reason');
    } else {
      return _localization_i18n__WEBPACK_IMPORTED_MODULE_10__["default"].t('edit_dance.confirm_reason');
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_9__["SubmitBtnContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: onSubmit,
    label: buttonText,
    theme: del ? 'dark' : 'white',
    disabled: !del && !formValid || shouldDisableButton,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modals_ConfirmModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isOpen: showConfirmModal,
    onCancel: () => setShowConfirmModal(false),
    onConfirm: saveChanges,
    title: buttonText,
    mainText: confirmText,
    withTextInput: user.user_id !== dance.choreographer.id && (del || dance.status === DANCE_STATUS_ORDERED),
    textInputLabel: getReasonLabel(),
    textInputValue: reason || '',
    onChangeTextInput: setReason // textInputRequired={true}
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modals_MessageModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isOpen: showDoneModal,
    title: _components_AddEditDance_DanceSubmit__WEBPACK_IMPORTED_MODULE_8__["optModalTexts"].editDance.title,
    mainText: _components_AddEditDance_DanceSubmit__WEBPACK_IMPORTED_MODULE_8__["optModalTexts"].editDance.mainText,
    onClose: goToDancesScreen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modals_MessageModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isOpen: showErrorModal,
    title: _localization_i18n__WEBPACK_IMPORTED_MODULE_10__["default"].t('modals.video_url_empty'),
    mainText: _localization_i18n__WEBPACK_IMPORTED_MODULE_10__["default"].t('modals.video_url_empty_description'),
    onClose: () => setShowErrorModal(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 13
    }
  }));
});

/***/ }),

/***/ "./src/components/Buttons/ExpandButton.js":
/*!************************************************!*\
  !*** ./src/components/Buttons/ExpandButton.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @constants/colors */ "./src/constants/colors.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Buttons/ExpandButton.js";



/* harmony default export */ __webpack_exports__["default"] = (({
  onClick,
  expanded,
  expandedText,
  closedText,
  alignSelf
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
    alignSelf: alignSelf,
    onClick: onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, expanded ? expandedText : closedText);
});
const Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "ExpandButton__Button",
  componentId: "k2od1p-0"
})(["\n  font-size: 12px;\n  padding: 0px 8px;\n  line-height: 20px;\n  border-radius: 4px;\n  white-space: nowrap;\n  ", "\n  color: ", ";\n  background-color: ", ";\n"], p => p.alignSelf && 'align-self:' + p.alignSelf + ';', _constants_colors__WEBPACK_IMPORTED_MODULE_2__["default"].APP_WHITE, _constants_colors__WEBPACK_IMPORTED_MODULE_2__["default"].BUTTON_DARK);

/***/ }),

/***/ "./src/components/Buttons/InputButton.js":
/*!***********************************************!*\
  !*** ./src/components/Buttons/InputButton.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var hex_to_rgba__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hex-to-rgba */ "./node_modules/hex-to-rgba/build/index.js");
/* harmony import */ var hex_to_rgba__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @constants/colors */ "./src/constants/colors.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Buttons/InputButton.js";




/* harmony default export */ __webpack_exports__["default"] = (({
  onClick,
  text,
  disabled
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputButton, {
    onClick: onClick,
    disabled: disabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, text);
});
const InputButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "InputButton",
  componentId: "sc-1d2lfoh-0"
})(["\n    margin-right: 12px;\n    padding: 4px 12px;\n    border-radius: 4px;\n    white-space: nowrap;\n    color: ", ";\n    background-color: ", ";\n"], _constants_colors__WEBPACK_IMPORTED_MODULE_3__["default"].APP_WHITE, p => p.disabled ? hex_to_rgba__WEBPACK_IMPORTED_MODULE_2___default()(_constants_colors__WEBPACK_IMPORTED_MODULE_3__["default"].BUTTON_DARK, 0.5) : _constants_colors__WEBPACK_IMPORTED_MODULE_3__["default"].BUTTON_DARK);

/***/ }),

/***/ "./src/components/Buttons/LabeledToggle.js":
/*!*************************************************!*\
  !*** ./src/components/Buttons/LabeledToggle.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toggle_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toggle-button */ "./node_modules/react-toggle-button/lib/index.js");
/* harmony import */ var react_toggle_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toggle_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Buttons/LabeledToggle.js";




/* harmony default export */ __webpack_exports__["default"] = (({
  value,
  label,
  onToggle,
  width
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_2__["FormInputContainer"], {
    width: width,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_2__["FormInputLabel"], {
    lang: _localization_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].locale,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, label, " -", ' ', value ? _localization_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('edit_user.yes') : _localization_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('edit_user.no')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_toggle_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    inactiveLabel: '',
    activeLabel: '',
    value: value,
    onToggle: onToggle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }));
});

/***/ }),

/***/ "./src/components/Buttons/SubmitButton.js":
/*!************************************************!*\
  !*** ./src/components/Buttons/SubmitButton.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @constants/colors */ "./src/constants/colors.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Buttons/SubmitButton.js";



const palette = {
  normal: {
    backgroundColor: _constants_colors__WEBPACK_IMPORTED_MODULE_1__["default"].COLOR_PRIMARY,
    color: _constants_colors__WEBPACK_IMPORTED_MODULE_1__["default"].APP_WHITE
  },
  dark: {
    backgroundColor: _constants_colors__WEBPACK_IMPORTED_MODULE_1__["default"].APP_BLACK,
    color: _constants_colors__WEBPACK_IMPORTED_MODULE_1__["default"].APP_WHITE
  },
  white: {
    backgroundColor: _constants_colors__WEBPACK_IMPORTED_MODULE_1__["default"].APP_WHITE,
    color: _constants_colors__WEBPACK_IMPORTED_MODULE_1__["default"].COLOR_PRIMARY
  }
};
/* harmony default export */ __webpack_exports__["default"] = (({
  onClick,
  label,
  disabled,
  theme = 'normal',
  backgroundColor
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_2__["SubmitBtn"], {
    onClick: onClick,
    disabled: disabled,
    color: palette[theme].color,
    backgroundColor: backgroundColor ? backgroundColor : palette[theme].backgroundColor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, label);
});

/***/ }),

/***/ "./src/components/Dances/ActionButton.js":
/*!***********************************************!*\
  !*** ./src/components/Dances/ActionButton.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Dances/ActionButton.js";



/* harmony default export */ __webpack_exports__["default"] = (({
  onClick,
  bgColor,
  label,
  smallText,
  icon,
  disabled
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledMainButton, {
    onClick: onClick,
    bgColor: bgColor,
    disabled: disabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'row-reverse',
      direction: 'rtl'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, label, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: icon,
    style: {
      margin: '3px 5px',
      width: '20px',
      height: '20px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, " ", smallText));
});
const StyledMainButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_appearance_styled__WEBPACK_IMPORTED_MODULE_2__["MainButton"]).withConfig({
  displayName: "ActionButton__StyledMainButton",
  componentId: "sc-137sfow-0"
})(["\n    background-color: ", ";\n    margin-right: 8px;\n"], p => p.bgColor);

/***/ }),

/***/ "./src/components/Dances/DanceExpandedRow.js":
/*!***************************************************!*\
  !*** ./src/components/Dances/DanceExpandedRow.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/utils */ "./src/services/utils.js");
/* harmony import */ var _services_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/table */ "./src/services/table.js");
/* harmony import */ var _services_dances__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/dances */ "./src/services/dances.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Dances/DanceExpandedRow.js";







const getFullNameFromArr = artists => {
  if (!_services_utils__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](artists)) {
    return artists.map(a => a.first_name + ' ' + a.last_name).join(', ');
  }
};

const getCoChoreographersMix = dance => {
  var _dance$choreographer, _dance$choreographer2, _res, _resultArray, _resultArray3;

  const choreographerName = ((_dance$choreographer = dance['choreographer']) === null || _dance$choreographer === void 0 ? void 0 : _dance$choreographer.first_name) + ' ' + ((_dance$choreographer2 = dance['choreographer']) === null || _dance$choreographer2 === void 0 ? void 0 : _dance$choreographer2.last_name);
  let res = [];
  const coChoreographersFromArr = getFullNameFromArr(dance['co_choreographers']);
  const coChoreographersString = dance['co_choreographers_string'];
  res = coChoreographersFromArr ? coChoreographersFromArr + ', ' + coChoreographersString : coChoreographersString;
  let resultArray = (_res = res) === null || _res === void 0 ? void 0 : _res.split(', ');
  resultArray = (_resultArray = resultArray) === null || _resultArray === void 0 ? void 0 : _resultArray.filter((item, index) => {
    var _resultArray2;

    return ((_resultArray2 = resultArray) === null || _resultArray2 === void 0 ? void 0 : _resultArray2.indexOf(item)) === index && item !== choreographerName;
  });
  return (_resultArray3 = resultArray) === null || _resultArray3 === void 0 ? void 0 : _resultArray3.join(', ');
};

/* harmony default export */ __webpack_exports__["default"] = (({
  item,
  expanded
}) => {
  const dance = item;
  const columns = [{
    property: 'song',
    subProperty: 'name',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_5__["default"].t('dances_expanded_row.original_name')
  }, {
    property: 'co_choreographers',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_5__["default"].t('dances_expanded_row.co_choreographers'),
    align: 'center',
    minWidth: '98px',
    cell: getCoChoreographersMix
  }, {
    property: 'video_url',
    label: '',
    cell: dance => dance.video_url && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Hyperlink, {
      href: dance.video_url,
      target: "_blank",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }
    }, _localization_i18n__WEBPACK_IMPORTED_MODULE_5__["default"].t('dances_expanded_row.link_to_dance_video'))
  }, {
    property: 'request_date',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_5__["default"].t('dances_expanded_row.request_date'),
    cell: dance => dance['created_date'] && _services_utils__WEBPACK_IMPORTED_MODULE_2__["formatDate"](dance['request_date'], _services_dances__WEBPACK_IMPORTED_MODULE_4__["requestDateFormat"])
  }, {
    property: 'approval_date',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_5__["default"].t('dances_expanded_row.approval_date'),
    cell: dance => dance['approval_date'] && _services_utils__WEBPACK_IMPORTED_MODULE_2__["formatDate"](dance['approval_date'], _services_dances__WEBPACK_IMPORTED_MODULE_4__["dateFormat"])
  }, {
    property: 'completion_date',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_5__["default"].t('dances_expanded_row.completion_date'),
    cell: dance => dance['completion_date'] ? dance['status'] == 'קיים ריקוד' ? _services_utils__WEBPACK_IMPORTED_MODULE_2__["formatDate"](dance['completion_date'], _services_dances__WEBPACK_IMPORTED_MODULE_4__["existingDanceCompletionDateFormat"]) : _services_utils__WEBPACK_IMPORTED_MODULE_2__["formatDate"](dance['completion_date'], _services_dances__WEBPACK_IMPORTED_MODULE_4__["completionDateFormat"]) : null
  }, {
    property: 'song',
    subProperty: 'video_url',
    label: '',
    cell: dance => dance.song.video_url && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Hyperlink, {
      href: dance.song.video_url,
      target: "_blank",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 21
      }
    }, _localization_i18n__WEBPACK_IMPORTED_MODULE_5__["default"].t('dances_expanded_row.link_to_original_song'))
  }, {
    property: 'song',
    subProperty: 'lyrics',
    label: '',
    cell: dance => dance.song.lyrics && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Hyperlink, {
      href: dance.song.lyrics,
      target: "_blank",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 21
      }
    }, _localization_i18n__WEBPACK_IMPORTED_MODULE_5__["default"].t('dances_expanded_row.link_to_lyrics'))
  }, {
    property: 'notes',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_5__["default"].t('dances_expanded_row.notes')
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, _services_utils__WEBPACK_IMPORTED_MODULE_2__["chunk"](columns, 3).map((itemsChunk, chunk_i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Col, {
    key: 'expanded-col-' + chunk_i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }, itemsChunk.map((col, ci) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item, {
      key: 'expanded-dance-item-' + ci,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 33
      }
    }, col.label ? col.label + ": " : null, col.label && '\u00A0'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Value, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 33
      }
    }, Object(_services_table__WEBPACK_IMPORTED_MODULE_3__["getCellContent"])(dance, col)));
  }))));
});
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "DanceExpandedRow__Container",
  componentId: "drktjo-0"
})(["\n    display: flex;\n    padding: 8px;\n    @media (max-width: 768px) {\n        display: initial;\n    }\n"]);
const Item = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "DanceExpandedRow__Item",
  componentId: "drktjo-1"
})(["\n    display: flex;\n    font-size: 15px;\n    /* padding: 4px 0px; */\n    @media (max-width: 480px) {\n        display: initial;\n        margin-bottom: 8px;\n    }\n"]);
const Col = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "DanceExpandedRow__Col",
  componentId: "drktjo-2"
})(["\n    flex: 1;\n    display: flex;\n    padding: 0px 12px;\n    flex-direction: column;\n"]);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "DanceExpandedRow__Label",
  componentId: "drktjo-3"
})(["\n    font-weight: 600;\n"]);
const Value = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "DanceExpandedRow__Value",
  componentId: "drktjo-4"
})(["\n    /* padding: 0px 8px; */\n"]);
const Hyperlink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "DanceExpandedRow__Hyperlink",
  componentId: "drktjo-5"
})(["\n    &:focus {\n        outline: none;\n        border: none;\n    }\n"]);

/***/ }),

/***/ "./src/components/Dances/DanceStatusLabel.js":
/*!***************************************************!*\
  !*** ./src/components/Dances/DanceStatusLabel.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @constants/colors */ "./src/constants/colors.js");
/* harmony import */ var _components_AddEditDance_StatusProgressButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/AddEditDance/StatusProgressButton */ "./src/components/AddEditDance/StatusProgressButton.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Dances/DanceStatusLabel.js";




/* harmony default export */ __webpack_exports__["default"] = (({
  status
}) => {
  const getBackgroundColor = () => {
    switch (status) {
      case _components_AddEditDance_StatusProgressButton__WEBPACK_IMPORTED_MODULE_3__["DANCE_STATUS_ORDERED"]:
        return 'orange';
        break;

      case _components_AddEditDance_StatusProgressButton__WEBPACK_IMPORTED_MODULE_3__["DANCE_STATUS_APPROVED"]:
        return 'yellow';
        break;

      case _components_AddEditDance_StatusProgressButton__WEBPACK_IMPORTED_MODULE_3__["DANCE_STATUS_EXISTS"]:
        return 'green';
        break;

      default:
        break;
    }
  };

  const textColor = status === _components_AddEditDance_StatusProgressButton__WEBPACK_IMPORTED_MODULE_3__["DANCE_STATUS_APPROVED"] ? '#000' : _constants_colors__WEBPACK_IMPORTED_MODULE_2__["default"].APP_WHITE;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LabelContainer, {
    backgroundColor: getBackgroundColor(),
    textColor: textColor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, status);
});
const LabelContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "DanceStatusLabel__LabelContainer",
  componentId: "sc-1yi2cmn-0"
})(["\n    display: inline-block;\n    padding: 0px 4px;\n    border-radius: 2px;\n    white-space: nowrap;\n    align-self: flex-start;\n    color: ", ";\n    background-color: ", ";\n"], p => p.textColor, p => p.backgroundColor);

/***/ }),

/***/ "./src/components/Dances/DancesTable.js":
/*!**********************************************!*\
  !*** ./src/components/Dances/DancesTable.js ***!
  \**********************************************/
/*! exports provided: getFullNameFromArr, getArtistsNames, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFullNameFromArr", function() { return getFullNameFromArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArtistsNames", function() { return getArtistsNames; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/utils */ "./src/services/utils.js");
/* harmony import */ var _services_urlUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/urlUtils */ "./src/services/urlUtils.js");
/* harmony import */ var _state_uses_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @state/uses/users */ "./src/state/uses/users.js");
/* harmony import */ var _state_uses_dances__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @state/uses/dances */ "./src/state/uses/dances.js");
/* harmony import */ var _state_actions_dances__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @state/actions/dances */ "./src/state/actions/dances.js");
/* harmony import */ var _components_Table_TableButtons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Table/TableButtons */ "./src/components/Table/TableButtons.js");
/* harmony import */ var _components_Buttons_ExpandButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/Buttons/ExpandButton */ "./src/components/Buttons/ExpandButton.js");
/* harmony import */ var _components_Table_PaginatedTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/Table/PaginatedTable */ "./src/components/Table/PaginatedTable.js");
/* harmony import */ var _components_Dances_DanceExpandedRow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/Dances/DanceExpandedRow */ "./src/components/Dances/DanceExpandedRow.js");
/* harmony import */ var _components_Dances_DanceStatusLabel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/Dances/DanceStatusLabel */ "./src/components/Dances/DanceStatusLabel.js");
/* harmony import */ var _services_dances__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/dances */ "./src/services/dances.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Dances/DancesTable.js";














const getFullNameFromArr = artists => {
  if (!_services_utils__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](artists)) {
    return artists.map(a => a.first_name + ' ' + a.last_name).join(', ');
  }
};
const getArtistsNames = (song, firstType, secondType) => {
  if (!_services_utils__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](song[firstType])) {
    return song[firstType].map(a => a.heb_name).join(', ');
  }

  return song[secondType];
};
/* harmony default export */ __webpack_exports__["default"] = (({}) => {
  var _location$state, _location$state2;

  const filters = [{
    property: 'status',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_13__["default"].t('dances_table_filters.status')
  }, {
    property: 'choreographer',
    subProperty: ['first_name', 'last_name'],
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_13__["default"].t('dances_table_filters.choreographer')
  }, {
    property: 'style',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_13__["default"].t('dances_table_filters.style')
  }, {
    property: 'performer',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_13__["default"].t('dances_table_filters.performer')
  }, {
    property: 'composer',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_13__["default"].t('dances_table_filters.composer')
  }, {
    property: 'lyricist',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_13__["default"].t('dances_table_filters.lyricist')
  }];
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  const location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])();
  const user = Object(_state_uses_users__WEBPACK_IMPORTED_MODULE_4__["useUser"])();
  const searchByUser = (location === null || location === void 0 ? void 0 : (_location$state = location.state) === null || _location$state === void 0 ? void 0 : _location$state.searchByUser) ? location.state.searchByUser : null;
  const searchByOrderStratus = (location === null || location === void 0 ? void 0 : (_location$state2 = location.state) === null || _location$state2 === void 0 ? void 0 : _location$state2.searchByOrderStratus) ? location.state.searchByOrderStratus : null;
  const activeFilter = (user === null || user === void 0 ? void 0 : user.is_admin) && searchByOrderStratus ? {
    status: [{
      value: searchByOrderStratus.value,
      label: searchByOrderStratus.label
    }]
  } : searchByUser ? {
    'choreographer:first_name,last_name': [{
      value: searchByUser.id,
      label: searchByUser.first_name + ' ' + searchByUser.last_name
    }]
  } : null;

  const goToEditDance = dance => {
    var _window$location$sear, _window$location$sear2, _window$location$sear3;

    const originalPage = ((_window$location$sear = window.location.search) === null || _window$location$sear === void 0 ? void 0 : (_window$location$sear2 = _window$location$sear.split('page=')[1]) === null || _window$location$sear2 === void 0 ? void 0 : _window$location$sear2.split('&')[0]) || 1;
    _services_urlUtils__WEBPACK_IMPORTED_MODULE_3__["default"].setQueryParams({
      originalPage
    });
    localStorage.setItem('@markidim:filter_state', (_window$location$sear3 = window.location.search) === null || _window$location$sear3 === void 0 ? void 0 : _window$location$sear3.slice(1));
    history.push({
      pathname: '/dance',
      search: _services_urlUtils__WEBPACK_IMPORTED_MODULE_3__["default"].buildQueryParams({
        id: dance.id
      })
    });
  };

  const checkPermision = dance => user.is_admin || user.user_id === dance.choreographer.id;

  const getDanceAndSongNames = dance => {
    let result = dance.name;

    if (dance.song.name !== result) {
      result = result + ' (' + dance.song.name + ')';
    }

    return result;
  };

  const goToUserDetails = user => {
    const userFirstName = user === null || user === void 0 ? void 0 : user.first_name;
    const userLastName = user === null || user === void 0 ? void 0 : user.last_name;
    history.push({
      pathname: '/users',
      search: `search=${userFirstName}%20${userLastName}`
    });
  };

  const columns = [{
    property: 'name',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_13__["default"].t('dances_table.dance_name'),
    align: 'start',
    minWidth: '56px',
    sortable: true,
    isMobileTileHeader: true,
    cell: dance => getDanceAndSongNames(dance)
  }, {
    property: 'status',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_13__["default"].t('dances_table.status'),
    dataScope: 'column',
    align: 'center',
    minWidth: 'none',
    sortable: true,
    cell: dance => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dances_DanceStatusLabel__WEBPACK_IMPORTED_MODULE_11__["default"], {
      status: dance.status,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 30
      }
    })
  }, {
    property: 'choreographer',
    subProperty: ['first_name', 'last_name'],
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_13__["default"].t('dances_table.choreographer'),
    align: 'start',
    minWidth: '64px',
    sortable: true,
    isMobileTileHeader: true
  }, {
    property: 'style',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_13__["default"].t('dances_table.style'),
    align: 'start',
    minWidth: '60px',
    sortable: true
  }, {
    property: 'performer',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_13__["default"].t('dances_table.performer'),
    align: 'start',
    minWidth: '128px',
    sortable: true
  }, {
    property: 'composer',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_13__["default"].t('dances_table.composer'),
    align: 'start',
    minWidth: 'none',
    sortable: true,
    cell: dance => getArtistsNames(dance['song'], 'composers', 'composer')
  }, {
    property: 'lyricist',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_13__["default"].t('dances_table.lyricist'),
    align: 'start',
    minWidth: 'none',
    sortable: true,
    cell: dance => getArtistsNames(dance['song'], 'lyricists', 'lyricist')
  }, {
    property: 'request_date',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_13__["default"].t('dances_table.request_date'),
    align: 'center',
    minWidth: '92px',
    sortable: true,
    cell: dance => dance['status'] == 'קיים ריקוד' ? _services_utils__WEBPACK_IMPORTED_MODULE_2__["formatDate"](dance['request_date'], _services_dances__WEBPACK_IMPORTED_MODULE_12__["existingDanceCompletionDateFormat"]) : _services_utils__WEBPACK_IMPORTED_MODULE_2__["formatDate"](dance['request_date'], _services_dances__WEBPACK_IMPORTED_MODULE_12__["completionDateFormat"])
  }, {
    property: 'song',
    subProperty: 'akum_id',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_13__["default"].t('dances_table.akum_id'),
    align: 'center',
    minWidth: '92px',
    sortable: true
  }, {
    property: 'edit',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_13__["default"].t('dances_table.edit'),
    align: 'center',
    minWidth: '0px',
    cell: dance => checkPermision(dance) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table_TableButtons__WEBPACK_IMPORTED_MODULE_7__["EditBtn"], {
      onClick: () => goToEditDance(dance),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 21
      }
    })
  }, {
    property: 'goToSongdList',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_13__["default"].t('dances_table.user_details'),
    align: 'center',
    minWidth: 'none',
    hideOnExport: true,
    hidden: !(user === null || user === void 0 ? void 0 : user.is_admin),
    cell: dance => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table_TableButtons__WEBPACK_IMPORTED_MODULE_7__["ListBtn"], {
      onClick: () => goToUserDetails(dance.choreographer),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 17
      }
    })
  }, {
    property: 'expand',
    label: '',
    dataScope: 'col',
    align: 'start',
    minWidth: '60px',
    cell: (row, col, onClick, expanded) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons_ExpandButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onClick: onClick,
      expanded: expanded,
      closedText: _localization_i18n__WEBPACK_IMPORTED_MODULE_13__["default"].t('table.show_more_details'),
      expandedText: _localization_i18n__WEBPACK_IMPORTED_MODULE_13__["default"].t('table.show_less_details'),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 17
      }
    })
  }];

  if (!user) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table_PaginatedTable__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: _localization_i18n__WEBPACK_IMPORTED_MODULE_13__["default"].t('dances_table_filters.dances_title'),
    columns: columns,
    collection: 'dances',
    loadAction: _state_actions_dances__WEBPACK_IMPORTED_MODULE_6__["getAllDances"],
    filters: filters,
    useFunction: _state_uses_dances__WEBPACK_IMPORTED_MODULE_5__["useDances"],
    ExpandedRowComponent: _components_Dances_DanceExpandedRow__WEBPACK_IMPORTED_MODULE_10__["default"],
    activeFilter: activeFilter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 9
    }
  });
});

/***/ }),

/***/ "./src/components/DropDownLogin.js":
/*!*****************************************!*\
  !*** ./src/components/DropDownLogin.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _state_actions_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @state/actions/users */ "./src/state/actions/users.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
/* harmony import */ var _state_uses_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @state/uses/app */ "./src/state/uses/app.js");
/* harmony import */ var _state_actions_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @state/actions/app */ "./src/state/actions/app.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/DropDownLogin.js";








/* harmony default export */ __webpack_exports__["default"] = (({
  show,
  close
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  const language = Object(_state_uses_app__WEBPACK_IMPORTED_MODULE_6__["useLanguage"])();
  const tmpAppConfig = Object(_state_uses_app__WEBPACK_IMPORTED_MODULE_6__["useAppConfig"])();
  const [appConfig, setAppConfig] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(tmpAppConfig);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!tmpAppConfig) {
      dispatch(Object(_state_actions_app__WEBPACK_IMPORTED_MODULE_7__["getAppConfig"])(setAppConfig));
    } else {}
  }, [tmpAppConfig]);
  const reciepientsList = appConfig === null || appConfig === void 0 ? void 0 : appConfig.contact_us_list;

  function onProfileClick(event) {
    event.preventDefault();
    console.log('profile');
    history.push('user_profile');
  }

  function onLogoutClick(event) {
    close();
    dispatch(Object(_state_actions_users__WEBPACK_IMPORTED_MODULE_4__["logout"])(() => history.push({
      pathname: '/login'
    })));
  }

  function goToLandingPage(event) {
    history.push('/');
  }

  const contactUs = () => {
    window.location = 'mailto:' + reciepientsList;
  };

  const padFrom = language === 'he' ? 'left' : 'right';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropDown, {
    hebrew: language === 'he',
    style: {
      visibility: show ? 'visible' : 'hidden',
      [padFrom]: '12px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropDownItem, {
    onClick: contactUs,
    id: "contact_us_button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, _localization_i18n__WEBPACK_IMPORTED_MODULE_5__["default"].t('user_menu_headlines.contact_us')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropDownItem, {
    onClick: goToLandingPage,
    id: "main_page_button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, _localization_i18n__WEBPACK_IMPORTED_MODULE_5__["default"].t('user_menu_headlines.main_page')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropDownItem, {
    onClick: onProfileClick,
    id: "profile_button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, _localization_i18n__WEBPACK_IMPORTED_MODULE_5__["default"].t('user_menu_headlines.profile')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropDownItem, {
    onClick: onLogoutClick,
    id: "logout_button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, _localization_i18n__WEBPACK_IMPORTED_MODULE_5__["default"].t('user_menu_headlines.logout')));
});
const DropDown = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "DropDownLogin__DropDown",
  componentId: "sc-1t6nwdl-0"
})(["\n    top: 52px;\n    z-index: 1;\n    height: auto;\n    outline: none;\n    min-width: 80px;\n    padding: 4px 8px;\n    position: absolute;\n    background-color: #ffffff;\n    border: 1px solid rgb(83, 71, 103);\n    border-top: none;\n\n    @media (max-width: 768px) {\n        top: 50px;\n    }\n"]);
const DropDownItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "DropDownLogin__DropDownItem",
  componentId: "sc-1t6nwdl-1"
})(["\n    // text-align: right;\n    padding: 4px 0px;\n    color: rgb(83, 71, 103);\n"]);

/***/ }),

/***/ "./src/components/DropdownLanguages.js":
/*!*********************************************!*\
  !*** ./src/components/DropdownLanguages.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
/* harmony import */ var _state_uses_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @state/uses/app */ "./src/state/uses/app.js");
/* harmony import */ var _state_actions_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @state/actions/app */ "./src/state/actions/app.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/DropdownLanguages.js";






/* harmony default export */ __webpack_exports__["default"] = (({
  show,
  setLangDropdownVisible
}) => {
  const language = Object(_state_uses_app__WEBPACK_IMPORTED_MODULE_3__["useLanguage"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const padFrom = language === 'he' ? 'left' : 'right';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropDown, {
    style: {
      visibility: show ? 'visible' : 'hidden',
      [padFrom]: '12px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropDownItem, {
    onClick: () => {
      dispatch(Object(_state_actions_app__WEBPACK_IMPORTED_MODULE_4__["setLanguage"])('he'));
      Object(_localization_i18n__WEBPACK_IMPORTED_MODULE_2__["setLocale"])('he');
      setLangDropdownVisible(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, "\u05E2\u05D1\u05E8\u05D9\u05EA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropDownItem, {
    onClick: () => {
      dispatch(Object(_state_actions_app__WEBPACK_IMPORTED_MODULE_4__["setLanguage"])('en'));
      Object(_localization_i18n__WEBPACK_IMPORTED_MODULE_2__["setLocale"])('en');
      setLangDropdownVisible(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "English"));
});
const DropDown = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "DropdownLanguages__DropDown",
  componentId: "sc-43fpz4-0"
})(["\n    top: 52px;\n    z-index: 1;\n    height: auto;\n    outline: none;\n    min-width: 80px;\n    padding: 4px 8px;\n    position: absolute;\n    background-color: #ffffff;\n    border: 1px solid rgb(83, 71, 103);\n    border-top: none;\n\n    @media (max-width: 768px) {\n        top: 50px;\n    }\n"]);
const DropDownItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "DropdownLanguages__DropDownItem",
  componentId: "sc-43fpz4-1"
})(["\n    text-align: right;\n    padding: 4px 0px;\n    color: rgb(83, 71, 103);\n"]);

/***/ }),

/***/ "./src/components/EditUser/DisableUserButton.js":
/*!******************************************************!*\
  !*** ./src/components/EditUser/DisableUserButton.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/api */ "./src/services/api.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Modals_ConfirmModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Modals/ConfirmModal */ "./src/components/Modals/ConfirmModal.js");
/* harmony import */ var _components_Modals_MessageModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Modals/MessageModal */ "./src/components/Modals/MessageModal.js");
/* harmony import */ var _components_Buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Buttons/SubmitButton */ "./src/components/Buttons/SubmitButton.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/EditUser/DisableUserButton.js";







const texts = {
  disable: {
    btnText: 'חסום משתמש',
    confirmMainText: 'האם אתה בטוח שברצונך לחסום את המשתמש?'
  },
  restore: {
    btnText: 'התר חסימת משתמש',
    confirmMainText: 'האם אתה בטוח שברצונך להתיר את חסימת המשתמש?'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (({
  user
}) => {
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  const action = user.is_disabled ? 'restore' : 'disable';
  const [showConfirmModal, setShowConfirmModal] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [showDoneModal, setShowDoneModal] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [reason, setReason] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null); //console.log('  reason = ', reason)

  const setUserIsDisabled = () => {
    //console.log('innnnnnnn')
    //console.log(' from  setUserIsDisabled   reason = ', reason)
    setShowConfirmModal(false);
    const newUser = Object.assign({}, user, {
      is_disabled: !user.is_disabled
    });
    let NewUserWithDisabledReason = {};
    NewUserWithDisabledReason = Object.assign({}, newUser, {
      disabled_reason: reason
    }); // console.log(
    //     ' from  setUserIsDisabled   NewUserWithDisabledReason = ',
    //     NewUserWithDisabledReason
    // )

    _services_api__WEBPACK_IMPORTED_MODULE_2__["default"].saveUser(NewUserWithDisabledReason).subscribe(res => {
      setShowDoneModal(true);
    }, error => console.log('disable user error', error));
  };

  const onCloseDoneModal = () => {
    history.goBack();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: () => setShowConfirmModal(true),
    label: texts[action].btnText,
    theme: user.is_disabled ? 'white' : 'dark',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modals_ConfirmModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isOpen: showConfirmModal,
    title: texts[action].btnText,
    mainText: texts[action].confirmMainText,
    onConfirm: setUserIsDisabled,
    onCancel: () => setShowConfirmModal(false),
    withTextInput: !user.is_disabled,
    textInputLabel: 'סיבת החסימה',
    textInputValue: reason || '',
    onChangeTextInput: setReason,
    textInputRequired: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modals_MessageModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isOpen: showDoneModal,
    title: 'הפעולה בוצעה בהצלחה',
    mainText: '',
    onClose: onCloseDoneModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }));
});
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "DisableUserButton__Container",
  componentId: "sc-1enp5uk-0"
})(["\n    width: 100%;\n"]);

/***/ }),

/***/ "./src/components/EditUser/EditUserSubmit.js":
/*!***************************************************!*\
  !*** ./src/components/EditUser/EditUserSubmit.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/api */ "./src/services/api.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Modals_MessageModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Modals/MessageModal */ "./src/components/Modals/MessageModal.js");
/* harmony import */ var _components_Modals_ConfirmModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Modals/ConfirmModal */ "./src/components/Modals/ConfirmModal.js");
/* harmony import */ var _components_Buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Buttons/SubmitButton */ "./src/components/Buttons/SubmitButton.js");
/* harmony import */ var _components_EditUser_DisableUserButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/EditUser/DisableUserButton */ "./src/components/EditUser/DisableUserButton.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/EditUser/EditUserSubmit.js";









/* harmony default export */ __webpack_exports__["default"] = (({
  user,
  preEditUser
}) => {
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  const location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useLocation"])();
  const [showConfirmModal, setShowConfirmModal] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [showDoneModal, setShowDoneModal] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const onCloseDoneModal = () => {
    setShowDoneModal(false);
    history.goBack();
  };

  const formIsValid = () => {
    if (user === preEditUser) {
      return false;
    }

    return true;
  };

  const onConfirmModalCancel = () => {
    // console.log('onConfirmModal Cancel clicked')
    setShowConfirmModal(false);
  };

  const saveUser = () => {
    setShowConfirmModal(false); // console.log('save user ', user)

    _services_api__WEBPACK_IMPORTED_MODULE_1__["default"].saveUser(user).subscribe(res => {
      // console.log('saveUser res', res)
      setShowDoneModal(true);
    }, error => console.log('saveUser error', error));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_7__["SubmitButtonsRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_7__["SubmitBtnContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('edit_user.save_button'),
    onClick: () => setShowConfirmModal(true),
    disabled: !formIsValid(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_7__["SubmitBtnContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    theme: 'white',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('edit_user.cancel_button'),
    onClick: () => history.goBack(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  })), location && location.pathname.includes('/edit_user') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_7__["SubmitBtnContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_EditUser_DisableUserButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    user: user,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modals_ConfirmModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isOpen: showConfirmModal,
    title: _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('edit_user.save_changes_modal_headline'),
    mainText: _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('edit_user.save_changes_modal_content'),
    onConfirm: saveUser,
    onCancel: onConfirmModalCancel,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modals_MessageModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isOpen: showDoneModal,
    title: _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('edit_user.changes_succussfully_saved_modal_title'),
    mainText: _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('edit_user.changes_succussfully_saved_modal_content'),
    onClose: onCloseDoneModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }));
});

/***/ }),

/***/ "./src/components/Form/DatePicker.js":
/*!*******************************************!*\
  !*** ./src/components/Form/DatePicker.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var _services_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/layout */ "./src/services/layout.js");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils */ "./src/services/utils.js");
/* harmony import */ var _assets_images__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @assets/images */ "./src/assets/images/index.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Form/DatePicker.js";









/* harmony default export */ __webpack_exports__["default"] = (({
  date,
  onChange,
  from,
  label,
  width,
  height = 38
}) => {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const [open, setOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  Object(_services_layout__WEBPACK_IMPORTED_MODULE_4__["useOnClickOutside"])(ref, () => setOpen(false));

  const fixDate = date => from ? _services_utils__WEBPACK_IMPORTED_MODULE_5__["getStartOfDay"](date) : moment__WEBPACK_IMPORTED_MODULE_2___default()(date);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledFormInputContainer, {
    width: width,
    ref: ref,
    open: open,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_7__["FormInputLabel"], {
    lang: _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].locale,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSelectBtn, {
    height: height,
    onClick: toggleOpen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, moment__WEBPACK_IMPORTED_MODULE_2___default()(date).format('DD/MM/YY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ArrowIcon, {
    src: _assets_images__WEBPACK_IMPORTED_MODULE_6__["cavronDownIcon"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CalendarWrapper, {
    open: open,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Calendar"], {
    date: date || new Date().toISOString(),
    onSelect: dete => onChange(fixDate(dete).toISOString()),
    size: 'small',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  })));
});
const StyledFormInputContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_appearance_styled__WEBPACK_IMPORTED_MODULE_7__["FormInputContainer"]).withConfig({
  displayName: "DatePicker__StyledFormInputContainer",
  componentId: "sc-16zuovr-0"
})(["\n    position: relative;\n    z-index: ", ";\n"], p => p.open ? 1 : 0);
const StyledSelectBtn = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_appearance_styled__WEBPACK_IMPORTED_MODULE_7__["SelectBtn"]).withConfig({
  displayName: "DatePicker__StyledSelectBtn",
  componentId: "sc-16zuovr-1"
})(["\n    height: ", "px;\n    background-color: #fff;\n    border-radius: 4px;\n    border: solid 1px #ccc;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    cursor: pointer;\n"], p => p.height);
const ArrowIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "DatePicker__ArrowIcon",
  componentId: "sc-16zuovr-2"
})(["\n    width: 20px;\n    height: 20px;\n    margin: 0 8px;\n"]);
const Text = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "DatePicker__Text",
  componentId: "sc-16zuovr-3"
})(["\n    padding: 0px 12px;\n"]);
const CalendarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "DatePicker__CalendarWrapper",
  componentId: "sc-16zuovr-4"
})(["\n    background-color: #fff;\n    position: absolute;\n    left: 20px;\n    top: 80px;\n    padding: 12px;\n    border-radius: 4px;\n    border: solid 1px #ccc;\n    direction: ltr;\n    text-align: left;\n    visibility: ", ";\n"], p => p.open ? 'initial' : 'hidden');

/***/ }),

/***/ "./src/components/Form/MaterialDatePicker.js":
/*!***************************************************!*\
  !*** ./src/components/Form/MaterialDatePicker.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Form/MaterialDatePicker.js";



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (({
  startDate,
  onChange
}) => {
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: classes.container,
    noValidate: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "date",
    type: "date",
    value: startDate,
    onChange: event => onChange(event.target.value),
    onChangeText: () => null,
    className: classes.textField,
    InputLabelProps: {
      shrink: true,
      required: true
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }));
});

/***/ }),

/***/ "./src/components/Form/MultiSelect.js":
/*!********************************************!*\
  !*** ./src/components/Form/MultiSelect.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Form/MultiSelect.js";





/* harmony default export */ __webpack_exports__["default"] = (({
  label,
  value,
  onChange,
  onInputChange,
  placeholder,
  options,
  inputHeight = 40,
  width,
  required
}) => {
  const [text, settext] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [newOption, setNewOption] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    label: text,
    value: text
  }]);
  const customStyles = {
    control: provided => {
      const minHeight = inputHeight;
      return { ...provided,
        minHeight
      };
    }
  };

  const newLocalOnChangeText = text => {
    onChange(text);
    setNewOption([{
      label: text,
      value: text
    }]);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_3__["FormInputContainer"], {
    width: width,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_3__["FormInputLabel"], {
    lang: _localization_i18n__WEBPACK_IMPORTED_MODULE_4__["default"].locale,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, label, required && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RequiredSign, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 34
    }
  }, " * ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_3__["SelectBtn"], {
    style: {
      textAlign: 'right'
    },
    height: inputHeight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isMulti: true,
    required: required,
    placeholder: placeholder,
    value: value,
    onChange: newLocalOnChangeText // onChange={onChange}
    // onChange={onChange && setNewOption}
    ,
    options: (options === null || options === void 0 ? void 0 : options.length) === 0 ? newOption : options.filter(option => option.label.trim() !== '(הוסף חדש)'.trim()) // options={newOption}
    ,
    height: inputHeight,
    styles: customStyles,
    onInputChange: onInputChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  })));
});
const RequiredSign = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "MultiSelect__RequiredSign",
  componentId: "sc-1lpkoz0-0"
})(["\n    color: red;\n"]);

/***/ }),

/***/ "./src/components/Form/RequiredText.js":
/*!*********************************************!*\
  !*** ./src/components/Form/RequiredText.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Form/RequiredText.js";




/* harmony default export */ __webpack_exports__["default"] = (() => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_2__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledFormInputLabel, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Red, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, " * "), _localization_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('edit_dance.required_fields')));
});
const StyledFormInputLabel = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_appearance_styled__WEBPACK_IMPORTED_MODULE_2__["FormInputLabel"]).withConfig({
  displayName: "RequiredText__StyledFormInputLabel",
  componentId: "sc-137mtmp-0"
})(["\n    padding: 10px 20px;\n"]);
const Red = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "RequiredText__Red",
  componentId: "sc-137mtmp-1"
})(["\n    color: red;\n"]);

/***/ }),

/***/ "./src/components/Form/SearchBar.js":
/*!******************************************!*\
  !*** ./src/components/Form/SearchBar.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @assets/images */ "./src/assets/images/index.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _state_uses_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @state/uses/app */ "./src/state/uses/app.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Form/SearchBar.js";





/* harmony default export */ __webpack_exports__["default"] = (({
  search,
  onChange,
  onClick,
  searchPlaceholder
}) => {
  const language = Object(_state_uses_app__WEBPACK_IMPORTED_MODULE_4__["useLanguage"])();
  return language === 'he' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchInput, {
    value: search,
    placeholder: searchPlaceholder,
    onChange: e => onChange(e.target.value),
    width: 200,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchImg, {
    src: _assets_images__WEBPACK_IMPORTED_MODULE_1__["searchIcon"],
    onClick: onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchImg, {
    src: _assets_images__WEBPACK_IMPORTED_MODULE_1__["searchIcon"],
    onClick: onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchInput, {
    value: search,
    placeholder: searchPlaceholder,
    onChange: e => onChange(e.target.value),
    width: 200,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }));
});
const SearchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "SearchBar__SearchWrapper",
  componentId: "uhjlpe-0"
})(["\n    width: 100%;\n    display: flex;\n    /* max-width: 320px; */\n    & > div {\n        position: initial;\n    }\n    @media (max-width: 480px) {\n        max-width: initial;\n    }\n"]);
const SearchInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(grommet__WEBPACK_IMPORTED_MODULE_2__["TextInput"]).withConfig({
  displayName: "SearchBar__SearchInput",
  componentId: "uhjlpe-1"
})(["\n    font-size: 13px;\n    font-weight: 300;\n    text-align: right;\n    width: 100%;\n    height: 36px;\n    background-color: white;\n    outline-color: #cccccc;\n    box-shadow: none;\n    border: 1px solid #cccccc;\n    &:focus {\n        border: 1px solid #cccccc;\n    }\n"]);
const SearchImg = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img.withConfig({
  displayName: "SearchBar__SearchImg",
  componentId: "uhjlpe-2"
})(["\n    width: 28px;\n    height: 20px;\n    background-color: white;\n    margin-right: -32px;\n    margin-top: 8px;\n    z-index: 1;\n    border: #ccc;\n    &:hover {\n        cursor: pointer;\n    }\n"]);

/***/ }),

/***/ "./src/components/Form/SelectInput.js":
/*!********************************************!*\
  !*** ./src/components/Form/SelectInput.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Form/SelectInput.js";





/* harmony default export */ __webpack_exports__["default"] = (({
  value,
  label,
  placeholder = 'בחר/י',
  onSelect,
  required,
  onError,
  width,
  options,
  onDoneEdit
}) => {
  const [isError, setIsError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const valueLabel = value ? value : null;

  const isValid = () => !required || value !== placeholder;

  const doSelect = value => {
    const valid = isValid() ? true : false;
    console.log('isValid = ', valid);

    if (onSelect) {
      onSelect(value.value);
    }

    if (onError) {
      onError(!valid);
    }

    if (onDoneEdit) {
      onDoneEdit(valid);
    }

    setIsError(!valid);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_3__["FormInputContainer"], {
    width: width,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_3__["FormInputLabel"], {
    lang: _localization_i18n__WEBPACK_IMPORTED_MODULE_4__["default"].locale,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, label, required && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RequiredSign, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 34
    }
  }, " * ")), valueLabel ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSelectInput, {
    valueLabel: valueLabel,
    options: options || [],
    placeholder: placeholder,
    onChange: doSelect,
    isError: isError,
    onFocus: () => setIsError(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectWrapper2, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSelectInput2, {
    valueLabel: valueLabel,
    options: options || [],
    placeholder: placeholder,
    onChange: doSelect,
    isError: isError,
    onFocus: () => setIsError(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  })));
});
const StyledSelectInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(grommet__WEBPACK_IMPORTED_MODULE_2__["Select"]).withConfig({
  displayName: "SelectInput__StyledSelectInput",
  componentId: "opb185-0"
})(["\n    font-size: 13px;\n    font-weight: 400;\n    height: 55px;\n    border-color: ", ";\n"], p => p.isError ? 'red' : '#ccc');
const SelectWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SelectInput__SelectWrapper",
  componentId: "opb185-1"
})(["\n    background: #fff;\n    height: 42px;\n    width: 100%;\n    & > button {\n        width: 100%;\n        padding: 8px;\n    }\n"]);
const RequiredSign = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "SelectInput__RequiredSign",
  componentId: "opb185-2"
})(["\n    color: red;\n"]);
const StyledSelectInput2 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(grommet__WEBPACK_IMPORTED_MODULE_2__["Select"]).withConfig({
  displayName: "SelectInput__StyledSelectInput2",
  componentId: "opb185-3"
})(["\n    font-size: 13px;\n    font-weight: 400;\n    border-color: ", ";\n    align-items: center;\n    margin-bottom: -4px;\n"], p => p.isError ? 'red' : '#ccc');
const SelectWrapper2 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SelectInput__SelectWrapper2",
  componentId: "opb185-4"
})(["\n    background: #fff;\n    height: 38px;\n    width: 100%;\n    & > button {\n        width: 100%;\n        margin: 0px 0px -8px 8px;\n    }\n"]);

/***/ }),

/***/ "./src/components/Form/SelectWithInput.js":
/*!************************************************!*\
  !*** ./src/components/Form/SelectWithInput.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils */ "./src/services/utils.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Form/SelectWithInput.js";






/* harmony default export */ __webpack_exports__["default"] = (({
  label,
  value,
  onChange,
  onInputChange,
  placeholder,
  options,
  inputHeight = 40,
  width,
  required,
  hideRequiredSign
}) => {
  const customStyles = {
    control: provided => {
      const minHeight = inputHeight;
      return { ...provided,
        minHeight
      };
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormInputContainer"], {
    width: width,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormInputLabel"], {
    lang: _localization_i18n__WEBPACK_IMPORTED_MODULE_5__["default"].locale,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, label, required && !hideRequiredSign && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RequiredSign, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, " * ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["SelectBtn"], {
    height: inputHeight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_1__["default"], {
    placeholder: placeholder,
    value: _services_utils__WEBPACK_IMPORTED_MODULE_3__["isEmptyStr"](value.value) ? null : value,
    onChange: onChange,
    options: options.filter(opt => opt.value !== ''),
    height: inputHeight,
    styles: customStyles,
    onInputChange: onInputChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  })));
});
const RequiredSign = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "SelectWithInput__RequiredSign",
  componentId: "zi6z0w-0"
})(["\n    color: red;\n"]);

/***/ }),

/***/ "./src/components/Form/StaticLabeledText.js":
/*!**************************************************!*\
  !*** ./src/components/Form/StaticLabeledText.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Form/StaticLabeledText.js";




/* harmony default export */ __webpack_exports__["default"] = (({
  text,
  label,
  width = '100%'
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_2__["FormInputContainer"], {
    lang: _localization_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].locale,
    width: width,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_2__["FormInputLabel"], {
    lang: _localization_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].locale,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, text));
});
const Text = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "StaticLabeledText__Text",
  componentId: "btj31a-0"
})(["\n    color: #222;\n    min-height: 32px;\n    font-weight: 600;\n    padding: 4px 0px;\n"]);

/***/ }),

/***/ "./src/components/Form/TextAreaInput.js":
/*!**********************************************!*\
  !*** ./src/components/Form/TextAreaInput.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Form/TextAreaInput.js";





const verificationFunctions = {
  text: () => true,
  number: value => !isNaN(value)
};
/* harmony default export */ __webpack_exports__["default"] = (({
  text,
  comparisonText,
  label,
  placeholder,
  type = 'text',
  onChangeText,
  onDoneEdit,
  required,
  onError,
  containerWidth = 0,
  minHeight
}) => {
  const [isError, setIsError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const verificationFunction = verificationFunctions[type];

  const isComparisonValid = () => !comparisonText || comparisonText == text;

  const handleChangeText = text => {
    console.log('handleChangeText text', text);

    if (onChangeText) {
      onChangeText(text);
    }

    handleDone(text);
  };

  const isValid = text => {
    console.log('isValid (text && text.length > 0)', text ? text.length : false);
    return (!required || text && text.length > 0) && verificationFunction(text) && isComparisonValid();
  };

  const handleDone = text => {
    const valid = isValid(text) ? true : false;

    if (onDoneEdit) {
      console.log('onDoneEdit - valid ', valid);
      onDoneEdit(valid);
    }

    if (onError) {
      onError(!valid);
    }

    setIsError(!valid);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_3__["FormInputContainer"], {
    width: containerWidth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_3__["FormInputLabel"], {
    lang: _localization_i18n__WEBPACK_IMPORTED_MODULE_4__["default"].locale,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, label, required && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_3__["RequiredSign"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 34
    }
  }, " * ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTextArea, {
    value: text,
    type: type,
    placeholder: placeholder,
    onChange: event => handleChangeText(event.target.value),
    isError: isError,
    onBlur: () => handleDone(text),
    onFocus: () => setIsError(false),
    minHeight: minHeight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }));
});
const StyledTextArea = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(grommet__WEBPACK_IMPORTED_MODULE_2__["TextArea"]).withConfig({
  displayName: "TextAreaInput__StyledTextArea",
  componentId: "sc-1gkucvu-0"
})(["\n    width: 100%;\n    min-height: ", ";\n    text-align: right;\n    font-weight: 400;\n    background-color: #fff;\n    border-color: ", ";\n"], p => p.minHeight ? p.minHeight : 'initial', p => p.isError ? 'red' : '#ccc');

/***/ }),

/***/ "./src/components/Form/TextInput.js":
/*!******************************************!*\
  !*** ./src/components/Form/TextInput.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils */ "./src/services/utils.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
/* harmony import */ var _components_Buttons_InputButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Buttons/InputButton */ "./src/components/Buttons/InputButton.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Form/TextInput.js";







/* harmony default export */ __webpack_exports__["default"] = (({
  text,
  comparisonText,
  label,
  placeholder,
  type = 'text',
  name = '',
  id,
  onChangeText,
  onDoneEdit,
  required,
  onError,
  width,
  disabled,
  autoFocus,
  buttonOnClick,
  buttonText = 'חפש',
  hideRequiredSign,
  buttonDisabled,
  min,
  max,
  isCreatePassword,
  onEnterPress
}) => {
  const [isError, setIsError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [innetErrorText, setInnerErrorText] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const isComparisonValid = text => {
    return !comparisonText || comparisonText === text;
  };

  const verificationFunctions = {
    text: () => true,
    number: value => !isNaN(value),
    email: _services_utils__WEBPACK_IMPORTED_MODULE_3__["isEmailValid"],
    password: pass => isCreatePassword ? pass.length >= 8 : true
  };
  const verificationFunction = verificationFunctions[type];

  const isValid = text => {
    return (!required || text && text.length > 0) && verificationFunction(text) && isComparisonValid(text);
  };

  const handleChangeText = text => {
    if (onChangeText) {
      onChangeText(text);
    }

    handleDone(text);
  };

  const handleDone = text => {
    const valid = isValid(text) ? true : false;
    setInnerErrorText('');

    if (isCreatePassword && !verificationFunction(text)) {
      setInnerErrorText(_localization_i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('general.invalid_password'));
    }

    if (type === 'password' && !isComparisonValid(text)) {
      setInnerErrorText(_localization_i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('general.invalid_verify_password'));
    }

    if (onDoneEdit) {
      onDoneEdit(valid);
    }

    if (onError) {
      onError(!valid);
    }

    setIsError(!valid);
  };

  const keyPress = event => {
    if ((event === null || event === void 0 ? void 0 : event.keyCode) === 13) {
      onEnterPress && onEnterPress();
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormInputContainer"], {
    lang: _localization_i18n__WEBPACK_IMPORTED_MODULE_6__["default"].locale,
    width: width,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormInputLabel"], {
    lang: _localization_i18n__WEBPACK_IMPORTED_MODULE_6__["default"].locale,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, label, required && !hideRequiredSign && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RequiredSign, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 25
    }
  }, " * ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTextInput, {
    name: name,
    id: id,
    autoFocus: autoFocus,
    value: text,
    type: type,
    placeholder: placeholder,
    onChange: event => handleChangeText(event.target.value),
    isError: isError,
    disabled: disabled,
    onBlur: () => handleDone(text),
    onFocus: () => setIsError(false),
    min: min,
    max: max,
    onKeyDown: keyPress,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }), buttonOnClick && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons_InputButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: buttonOnClick,
    text: buttonText,
    disabled: buttonDisabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 21
    }
  })), type === 'password' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerErrorMessage, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, innetErrorText));
});
const StyledTextInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(grommet__WEBPACK_IMPORTED_MODULE_2__["TextInput"]).withConfig({
  displayName: "TextInput__StyledTextInput",
  componentId: "sc-12tx2v4-0"
})(["\n    padding: 8px;\n    width: ", ";\n    background-color: #fff;\n    border-color: ", ";\n    max-height: 40px;\n"], p => p.width || '100%', p => p.isError ? 'red' : '#ccc');
const Row = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "TextInput__Row",
  componentId: "sc-12tx2v4-1"
})(["\n    width: 100%;\n    display: flex;\n    & > div {\n        position: initial;\n    }\n"]);
const RequiredSign = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "TextInput__RequiredSign",
  componentId: "sc-12tx2v4-2"
})(["\n    color: red;\n"]);
const InnerErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "TextInput__InnerErrorMessage",
  componentId: "sc-12tx2v4-3"
})(["\n    color: red;\n    font-size: 13px;\n    min-height: 22px;\n"]);

/***/ }),

/***/ "./src/components/Loading.js":
/*!***********************************!*\
  !*** ./src/components/Loading.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @constants/colors */ "./src/constants/colors.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/vitaly/markidim/src/components/Loading.js";




/* harmony default export */ __webpack_exports__["default"] = (({
  backgroundColor
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    backgroundColor: backgroundColor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loader_spinner__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "Oval",
    color: _constants_colors__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_PRIMARY,
    height: 32,
    width: 32,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }));
});
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Loading__Container",
  componentId: "sc-1c1x38c-0"
})(["\n    padding: 20px;\n    text-align: center;\n    background-color: ", ";\n"], p => p.backgroundColor ? p.backgroundColor : 'transparent');

/***/ }),

/***/ "./src/components/MainButtons.js":
/*!***************************************!*\
  !*** ./src/components/MainButtons.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/MainButtons.js";




const MainButtons = ({
  btnsArr
}) => {
  const buttonComponents = btnsArr.map(function (button, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
      key: i,
      onClick: button.onClick,
      bgColor: button.bgColor,
      "data-testid": `main_button_${i}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        display: 'inline-flex',
        flexDirection: 'row-reverse',
        direction: 'rtl'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }, button.label, button.icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: button.icon,
      style: {
        margin: '3px 5px',
        width: '20px',
        height: '20px'
      },
      alt: 'img-alt' + i,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 25
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    }, " ", button.span));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrap, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 12
    }
  }, buttonComponents);
};

/* harmony default export */ __webpack_exports__["default"] = (MainButtons);
const Button = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_appearance_styled__WEBPACK_IMPORTED_MODULE_2__["MainButton"]).withConfig({
  displayName: "MainButtons__Button",
  componentId: "wute48-0"
})(["\n    background-color: ", ";\n    margin: 0px 8px;\n"], p => p.bgColor);
const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MainButtons__Wrap",
  componentId: "wute48-1"
})(["\n    display: flex;\n"]);

/***/ }),

/***/ "./src/components/MobileNavigation.js":
/*!********************************************!*\
  !*** ./src/components/MobileNavigation.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _services_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/layout */ "./src/services/layout.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @constants/colors */ "./src/constants/colors.js");
/* harmony import */ var _assets_images__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @assets/images */ "./src/assets/images/index.js");
/* harmony import */ var _state_uses_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @state/uses/users */ "./src/state/uses/users.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/MobileNavigation.js";








const dancesHE = 'ריקודים';
const myDancesHE = 'הריקודים שלי';
const usersHE = 'משתמשים';
const settingsHE = 'הגדרות';
const loginHE = 'התחברות';
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const user = Object(_state_uses_users__WEBPACK_IMPORTED_MODULE_6__["useUser"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const [menuIsOpen, setMenuIsOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  Object(_services_layout__WEBPACK_IMPORTED_MODULE_2__["useOnClickOutside"])(ref, () => setMenuIsOpen(false));

  const goToMyDances = () => {
    history.push({
      pathname: '/dances',
      state: {
        searchByUser: {
          id: user.user_id,
          first_name: user.first_name,
          last_name: user.last_name
        }
      }
    });
  };

  const goToDances = () => {
    if (user === null || user === void 0 ? void 0 : user.is_admin) {
      history.push({
        pathname: '/dances',
        state: {
          searchByOrderStratus: {
            label: 'מוזמן',
            value: 'מוזמן'
          }
        }
      });
    } else {
      goToMyDances();
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    ref: ref,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuButton, {
    onClick: toggleMenu,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }), menuIsOpen && (user ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Overlay, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Menu, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, {
    onClick: () => {
      setMenuIsOpen(false);
      goToDances();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/dances",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 33
    }
  }, dancesHE)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, {
    onClick: () => {
      setMenuIsOpen(false);
      goToMyDances();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/dances",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 33
    }
  }, myDancesHE)), user && user.is_admin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    onClick: () => setMenuIsOpen(false),
    to: "/users",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 41
    }
  }, usersHE)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    onClick: () => setMenuIsOpen(false),
    to: "/settings",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 41
    }
  }, settingsHE))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Overlay, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Menu, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, {
    onClick: () => setMenuIsOpen(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 33
    }
  }, loginHE)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, {
    onClick: () => setMenuIsOpen(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 33
    }
  }, "\u05E8\u05D0\u05E9\u05D9"))))));
});
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MobileNavigation__Wrapper",
  componentId: "sc-11t4850-0"
})(["\n    position: relative;\n    z-index: 1000;\n    @media (min-width: 768px) {\n        display: none;\n    }\n"]);
const MenuButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MobileNavigation__MenuButton",
  componentId: "sc-11t4850-1"
})(["\n    width: 50px;\n    height: 50px;\n    position: relative;\n    background-size: 32px;\n    background-position: 50%;\n    background-repeat: no-repeat;\n    background-image: url(", ");\n"], _assets_images__WEBPACK_IMPORTED_MODULE_5__["menuIcon"]);
const Overlay = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MobileNavigation__Overlay",
  componentId: "sc-11t4850-2"
})(["\n    // position: absolute;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    background-color: rgba(102, 51, 153, 0.41);\n"]);
const Menu = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MobileNavigation__Menu",
  componentId: "sc-11t4850-3"
})(["\n    right: 0px;\n    padding: 4px 0;\n    min-width: 156px;\n    position: absolute;\n    background-color: ", ";\n"], _constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"].COLOR_PRIMARY);
const MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MobileNavigation__MenuItem",
  componentId: "sc-11t4850-4"
})(["\n    padding: 8px 16px;\n    & a,\n    a:hover {\n        color: #ffffff;\n        text-decoration: none;\n    }\n"]);

/***/ }),

/***/ "./src/components/Modals/ConfirmModal.js":
/*!***********************************************!*\
  !*** ./src/components/Modals/ConfirmModal.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Form_TextAreaInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Form/TextAreaInput */ "./src/components/Form/TextAreaInput.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Modals/ConfirmModal.js";





/* harmony default export */ __webpack_exports__["default"] = (({
  isOpen,
  onConfirm,
  onCancel,
  title,
  mainText,
  withTextInput,
  textInputValue,
  textInputLabel = '',
  onChangeTextInput,
  textInputRequired = false
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_3__["StyledModal"], {
    isOpen: isOpen,
    onBackgroundClick: onCancel,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_3__["ModalTopPart"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_3__["ModalTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_3__["ModalMainText"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, mainText), withTextInput && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTextArea, {
    text: textInputValue,
    label: textInputLabel,
    onChangeText: val => onChangeTextInput(val),
    width: '100%',
    required: textInputRequired,
    minHeight: '100px',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_3__["ModalButtonsContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_3__["MainButton"], {
    onClick: onConfirm,
    disabled: withTextInput && textInputRequired && !textInputValue,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, _localization_i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t('modals.confirm')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_3__["MainButton"], {
    onClick: onCancel,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, "\u05D1\u05D9\u05D8\u05D5\u05DC")));
});
const StyledTextArea = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_Form_TextAreaInput__WEBPACK_IMPORTED_MODULE_2__["default"]).withConfig({
  displayName: "ConfirmModal__StyledTextArea",
  componentId: "sc-8rbzzh-0"
})(["\n    margin: 20px 0;\n"]);

/***/ }),

/***/ "./src/components/Modals/MessageModal.js":
/*!***********************************************!*\
  !*** ./src/components/Modals/MessageModal.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Modals/MessageModal.js";




/* harmony default export */ __webpack_exports__["default"] = (({
  isOpen,
  onClose,
  title,
  mainText,
  error,
  id
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_2__["StyledModal"], {
    isOpen: isOpen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_2__["ModalTopPart"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_2__["ModalTitle"], {
    error: error,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_2__["ModalMainText"], {
    id: id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, mainText)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_2__["ModalButtonsContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledMainButton, {
    onClick: onClose,
    id: "confirm_button_in_modal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, _localization_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('modals.confirm'))));
});
const StyledMainButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_appearance_styled__WEBPACK_IMPORTED_MODULE_2__["MainButton"]).withConfig({
  displayName: "MessageModal__StyledMainButton",
  componentId: "sc-328k0m-0"
})(["\n    margin: 0 auto;\n"]);

/***/ }),

/***/ "./src/components/Page/Header.js":
/*!***************************************!*\
  !*** ./src/components/Page/Header.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _state_uses_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @state/uses/users */ "./src/state/uses/users.js");
/* harmony import */ var _components_UserButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/UserButton */ "./src/components/UserButton.js");
/* harmony import */ var _components_MobileNavigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/MobileNavigation */ "./src/components/MobileNavigation.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
/* harmony import */ var _services_urlUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/urlUtils */ "./src/services/urlUtils.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/api */ "./src/services/api.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Page/Header.js";










/* harmony default export */ __webpack_exports__["default"] = (({}) => {
  const dancesHE = _localization_i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('headers.dances');
  const myDancesHE = _localization_i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('headers.my_dances');
  const usersHE = _localization_i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('headers.users');
  const settingsHE = _localization_i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('headers.settings');
  const user = Object(_state_uses_users__WEBPACK_IMPORTED_MODULE_3__["useUser"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  const location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useLocation"])();
  const [fakeLinkSelected, setFakeLinkSelected] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (location.pathname === '/index.html') {
      history.push('/');
    }
  }, []);

  const clearTestData = () => {
    _services_api__WEBPACK_IMPORTED_MODULE_8__["default"].clearTestData().subscribe(() => {});
  };

  const approveTestUser = () => {
    _services_api__WEBPACK_IMPORTED_MODULE_8__["default"].approveTestUser().subscribe(() => {});
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderNav, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserPart, {
    onClick: () => setFakeLinkSelected(null),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UserButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TestButtons, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClearTestData, {
    "data-testid": "clear_test_data",
    onClick: clearTestData,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ApproveTestUser, {
    "data-testid": "approve_test_user",
    onClick: approveTestUser,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MobileNavigation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DesktopNavUl, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tab, {
    fakeLinkSelected: fakeLinkSelected === dancesHE,
    onClick: () => {
      setFakeLinkSelected(dancesHE);
      _services_urlUtils__WEBPACK_IMPORTED_MODULE_7__["default"].goToDances(history, user);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/dances",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 29
    }
  }, dancesHE)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tab, {
    fakeLinkSelected: fakeLinkSelected === myDancesHE,
    onClick: () => {
      setFakeLinkSelected(myDancesHE);
      _services_urlUtils__WEBPACK_IMPORTED_MODULE_7__["default"].goToMyDances(history, user);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fake-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 29
    }
  }, myDancesHE))), user && user.is_admin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tab, {
    fakeLinkSelected: fakeLinkSelected === usersHE,
    onClick: () => setFakeLinkSelected(usersHE),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/users",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 29
    }
  }, usersHE)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tab, {
    fakeLinkSelected: fakeLinkSelected === settingsHE,
    onClick: () => setFakeLinkSelected(settingsHE),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/settings",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 29
    }
  }, settingsHE)))));
});
const HeaderNav = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].nav.withConfig({
  displayName: "Header__HeaderNav",
  componentId: "sc-1ndhzsw-0"
})(["\n    display: flex;\n    font-size: 16px;\n    align-items: center;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n    background-color: rgb(83, 71, 103);\n"]);
const DesktopNavUl = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "Header__DesktopNavUl",
  componentId: "sc-1ndhzsw-1"
})(["\n    margin: 0;\n    display: flex;\n    padding: 5px;\n    font-size: 15px;\n    @media (max-width: 768px) {\n        display: none;\n    }\n"]);
const Tab = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "Header__Tab",
  componentId: "sc-1ndhzsw-2"
})(["\n    list-style-type: none;\n    display: inline-flex;\n    flex-direction: row;\n    /* width:50px; */\n    margin: 10px;\n    justify-content: space-between;\n    color: #ffffff;\n    text-align: center;\n    & a,\n    & .fake-link {\n        color: #fff;\n        color: ", ";\n        text-decoration: none;\n        text-decoration: ", ";\n        cursor: pointer;\n    }\n    & a:hover,\n    & .fake-link:hover {\n        color: #007bff;\n        text-decoration: none;\n    }\n    & a:focus,\n    & .fake-link:focus {\n        outline: none !important;\n    }\n\n    & button {\n        background-color: transparent;\n        border: none;\n        cursor: pointer;\n        width: 30px;\n        color: #ffffff;\n        font-family: 'Arial';\n        display: inline-flex;\n        flex-direction: row;\n        justify-content: space-between;\n        align-items: center;\n    }\n    & img {\n        width: 15px;\n        height: auto;\n    }\n    & span {\n        margin: 0px 8px;\n        font-size: 15px;\n        border: 1px solid #ffffff;\n        padding: 5px;\n    }\n"], p => !p.fakeLinkSelected ? '#fff' : '#007bff', p => !p.fakeLinkSelected ? 'none' : 'underline');
const UserPart = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Header__UserPart",
  componentId: "sc-1ndhzsw-3"
})(["\n    display: flex;\n    margin-right: 0 20px;\n    flex-direction: row;\n"]);
const TestButtons = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Header__TestButtons",
  componentId: "sc-1ndhzsw-4"
})(["\n    display: flex;\n    flex-direction: row;\n"]);
const ClearTestData = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Header__ClearTestData",
  componentId: "sc-1ndhzsw-5"
})(["\n    width: 10px;\n    height: 10px;\n"]);
const ApproveTestUser = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Header__ApproveTestUser",
  componentId: "sc-1ndhzsw-6"
})(["\n    width: 10px;\n    height: 10px;\n"]);

/***/ }),

/***/ "./src/components/Page/HeaderTopPart.js":
/*!**********************************************!*\
  !*** ./src/components/Page/HeaderTopPart.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _assets_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @assets/images */ "./src/assets/images/index.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Page/HeaderTopPart.js";



const markidimUrl = 'http://www.markid.co.il/';
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const handleLogoClick = () => {
    var win = window.open(markidimUrl, '_blank');
    win.focus();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderTopPart, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TopPartTexts, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HebHeader, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, "\u05D0\u05E8\u05D2\u05D5\u05DF \u05D4\u05DE\u05D3\u05E8\u05D9\u05DB\u05D9\u05DD \u05D5\u05D4\u05D9\u05D5\u05E6\u05E8\u05D9\u05DD \u05DC\u05E8\u05D9\u05E7\u05D5\u05D3\u05D9 \u05E2\u05DD \u05D1\u05D9\u05E9\u05E8\u05D0\u05DC \u05D5\u05D1\u05EA\u05E4\u05D5\u05E6\u05D5\u05EA (\u05E2\"\u05E8)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EnglishHeader, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, "Association of Folk Dance instructors & choreographers in Israel and abroad")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LogoImageButton, {
    onClick: handleLogoClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LogoImage, {
    src: _assets_images__WEBPACK_IMPORTED_MODULE_2__["markidimLogo"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  })));
});
const HeaderTopPart = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "HeaderTopPart",
  componentId: "sc-16gxg6o-0"
})(["\n    width: 100%;\n    display: flex;\n    padding: 8px 20px;\n    text-align: center;\n    align-items: center;\n    justify-content: center;\n    flex-direction: row-reverse;\n\n    @media (max-width: 768px) {\n        display: none;\n    }\n"]);
const LogoImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "HeaderTopPart__LogoImage",
  componentId: "sc-16gxg6o-1"
})(["\n    height: 60px;\n"]);
const LogoImageButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "HeaderTopPart__LogoImageButton",
  componentId: "sc-16gxg6o-2"
})(["\n    border-width: 0.1px;\n    border-color: transparent;\n    background-color: transparent;\n"]);
const HebHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "HeaderTopPart__HebHeader",
  componentId: "sc-16gxg6o-3"
})(["\n    font-size: 27px;\n    color: #521d50;\n    font-weight: 400;\n    margin-bottom: 4px;\n"]);
const TopPartTexts = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "HeaderTopPart__TopPartTexts",
  componentId: "sc-16gxg6o-4"
})([""]);
const EnglishHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "HeaderTopPart__EnglishHeader",
  componentId: "sc-16gxg6o-5"
})(["\n    display: block;\n\n    color: rgb(152, 135, 152);\n    width: 100%;\n    text-align: center;\n    @media (max-width: 768px) {\n        font-size: 1rem;\n    }\n"]);

/***/ }),

/***/ "./src/components/Table/DateFilters.js":
/*!*********************************************!*\
  !*** ./src/components/Table/DateFilters.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
/* harmony import */ var _components_Form_DatePicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Form/DatePicker */ "./src/components/Form/DatePicker.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Table/DateFilters.js";



/* harmony default export */ __webpack_exports__["default"] = (({
  fromDate,
  toDate,
  changeFromDate,
  changeToDate
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_DatePicker__WEBPACK_IMPORTED_MODULE_2__["default"] // disabledDays={{
  //     before: new Date(),
  //     after: new Date(),
  // }}
  , {
    label: 'מתאריך',
    date: fromDate,
    maxDate: new Date(new Date().setDate(new Date().getDate() - 2)),
    onChange: date => changeFromDate(date),
    from: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_DatePicker__WEBPACK_IMPORTED_MODULE_2__["default"] // disabledDays={{
  //     before: new Date(),
  //     after: new Date(),
  // }}
  // disabledDays={{ after: today }}
  , {
    label: 'עד תאריך',
    date: toDate // maxDate={toDate}
    // maxDate={Moment.moment().subtract(1, 'days')}
    ,
    onChange: date => changeToDate(date),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_1__["Flex1"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }));
});

/***/ }),

/***/ "./src/components/Table/ExportDataButton.js":
/*!**************************************************!*\
  !*** ./src/components/Table/ExportDataButton.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Table/ExportDataButton.js";



/* harmony default export */ __webpack_exports__["default"] = (({
  collection,
  label
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledMainButton, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HyperLink, {
    href: 'https://api.markid.co.il/index.php/api/get_all_' + // 'http://markidim.codelovers-solutions.com/api/index.php/api/get_all_' +
    collection + '_csv' + window.location.search,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, label));
});
const StyledMainButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_appearance_styled__WEBPACK_IMPORTED_MODULE_2__["MainButton"]).withConfig({
  displayName: "ExportDataButton__StyledMainButton",
  componentId: "sc-1bi9vmz-0"
})(["\n    align-self: flex-end;\n    margin-bottom: 12px;\n\n    & > a {\n        color: #fff;\n    }\n    & > a:focus {\n        outline: none;\n    }\n"]);
const HyperLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "ExportDataButton__HyperLink",
  componentId: "sc-1bi9vmz-1"
})(["\n    color: #fff;\n\n    &:hover {\n        color: #fff;\n        text-decoration: none;\n    }\n"]);

/***/ }),

/***/ "./src/components/Table/FilterBox.js":
/*!*******************************************!*\
  !*** ./src/components/Table/FilterBox.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Form_MultiSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Form/MultiSelect */ "./src/components/Form/MultiSelect.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/api */ "./src/services/api.js");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils */ "./src/services/utils.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Table/FilterBox.js";




/* harmony default export */ __webpack_exports__["default"] = (({
  filter,
  selectedFilters,
  updateFilters,
  collection,
  required,
  optionsRequired,
  optionsMsg
}) => {
  const [options, setOptions] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [inputText, setInputText] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _services_api__WEBPACK_IMPORTED_MODULE_2__["default"].getFilterOptions(collection, filter.property, filter.subProperty, inputText).subscribe(res => {
      //console.log('filter options res = ', res)
      // setOptions(res.data)
      if (res.data.length > 0) {
        setOptions(res.data);
      } else {
        if (optionsRequired) {
          setOptions([{
            label: inputText + optionsMsg,
            value: inputText
          }]);
        }
      }
    }); // }
  }, [inputText]);
  const filterName = filter.property + (filter.subProperty ? ':' + filter.subProperty : '');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_MultiSelect__WEBPACK_IMPORTED_MODULE_1__["default"], {
    required: required,
    label: filter.label,
    placeholder: filter.label,
    value: selectedFilters[filterName] ? selectedFilters[filterName].map(option => option) : [],
    onChange: selected => updateFilters(filterName, selected),
    onInputChange: text => _services_utils__WEBPACK_IMPORTED_MODULE_3__["onControlledChange"](text, 0, setInputText),
    options: (options || []).map(option => {
      if (typeof option === 'object') {
        return option;
      } else if (typeof option === 'string') {
        return {
          label: option,
          value: option
        };
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  });
});

/***/ }),

/***/ "./src/components/Table/Mobile/MobileTile.js":
/*!***************************************************!*\
  !*** ./src/components/Table/Mobile/MobileTile.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Table_Mobile_MobileTileRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Table/Mobile/MobileTileRow */ "./src/components/Table/Mobile/MobileTileRow.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Table/Mobile/MobileTile.js";



/* harmony default export */ __webpack_exports__["default"] = (({
  row,
  columns,
  ExpandedRowComponent
}) => {
  const [expanded, setExpanded] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MobileTileMainContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TileTable, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TileHeader, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, columns.map((col, ci) => {
    return !col.hidden && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table_Mobile_MobileTileRow__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: 'tile-header-row-' + ci,
      row: row,
      col: col,
      isHeader: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 33
      }
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TileDataBlock, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, columns.map((col, ci) => {
    return !col.hidden && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table_Mobile_MobileTileRow__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: 'mobile-cell-' + ci,
      row: row,
      col: col,
      expanded: expanded,
      onExpand: () => setExpanded(!expanded),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 33
      }
    });
  }), expanded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MobileContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ExpandedRowComponent, {
    item: row,
    expanded: expanded,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 29
    }
  })))));
});
const MobileTileMainContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MobileTile__MobileTileMainContainer",
  componentId: "kz0zb-0"
})(["\n    width: 100%;\n    display: none;\n    overflow: hidden;\n    @media (max-width: 768px) {\n        display: block;\n    }\n"]);
const TileTable = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MobileTile__TileTable",
  componentId: "kz0zb-1"
})(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    margin-bottom: 20px;\n"]);
const TileHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MobileTile__TileHeader",
  componentId: "kz0zb-2"
})(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 64px;\n    padding: 0 12px;\n    color: #ffffff;\n    border-bottom: 1px solid grey;\n    background-color: rgb(152, 135, 152);\n"]);
const MobileContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MobileTile__MobileContainer",
  componentId: "kz0zb-3"
})(["\n    width: 100%;\n    /* border: 1px solid #000; */\n"]);
const TileDataBlock = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MobileTile__TileDataBlock",
  componentId: "kz0zb-4"
})(["\n    display: flex;\n    padding: 8px;\n    flex-direction: column;\n    background-color: #fff;\n    justify-content: flex-end;\n    border: 1px solid grey;\n    border-bottom-left-radius: 8px;\n    border-bottom-right-radius: 8px;\n"]);
const TileData = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MobileTile__TileData",
  componentId: "kz0zb-5"
})(["\n    text-align: right;\n    display: inline-flex;\n    flex-direction: column;\n"]);
const ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MobileTile__ButtonContainer",
  componentId: "kz0zb-6"
})(["\n    display: flex;\n    justify-content: center;\n"]);
const VersionsListContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MobileTile__VersionsListContainer",
  componentId: "kz0zb-7"
})([""]);
const VersionItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MobileTile__VersionItem",
  componentId: "kz0zb-8"
})([""]);

/***/ }),

/***/ "./src/components/Table/Mobile/MobileTileRow.js":
/*!******************************************************!*\
  !*** ./src/components/Table/Mobile/MobileTileRow.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Table_TableRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Table/TableRow */ "./src/components/Table/TableRow.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Table/Mobile/MobileTileRow.js";



/* harmony default export */ __webpack_exports__["default"] = (({
  row,
  col,
  isHeader,
  expanded,
  onExpand
}) => {
  if (!col || isHeader !== col.isMobileTileHeader) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, col.label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 27
    }
  }, col.label, ": "), col.property === 'expand' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, col.cell(row, col, onExpand, expanded)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Value, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, Object(_components_Table_TableRow__WEBPACK_IMPORTED_MODULE_2__["getCellValue"])(row, col)));
});
const Row = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MobileTileRow__Row",
  componentId: "un0vmp-0"
})(["\n    display: flex;\n    white-space: nowrap;\n    align-items: center;\n"]);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MobileTileRow__Label",
  componentId: "un0vmp-1"
})(["\n    /* width: 72px; */\n    font-weight: bold;\n    min-width: 80px;\n"]);
const Value = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MobileTileRow__Value",
  componentId: "un0vmp-2"
})(["\n    flex: 2;\n    padding: 0px 12px;\n    white-space: normal;\n"]);
const ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MobileTileRow__ButtonContainer",
  componentId: "un0vmp-3"
})(["\n    display: flex;\n    justify-content: center;\n    margin: 12px auto 0px;\n"]);

/***/ }),

/***/ "./src/components/Table/NoResults.js":
/*!*******************************************!*\
  !*** ./src/components/Table/NoResults.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Table/NoResults.js";


/* harmony default export */ __webpack_exports__["default"] = (() => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 12
    }
  }, "no results");
});
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "NoResults__Container",
  componentId: "v8dvgj-0"
})(["\n    width: 100%;\n    text-align: center;\n"]);

/***/ }),

/***/ "./src/components/Table/PaginatedTable.js":
/*!************************************************!*\
  !*** ./src/components/Table/PaginatedTable.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _services_urlUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/urlUtils */ "./src/services/urlUtils.js");
/* harmony import */ var _components_Table_Pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Table/Pagination */ "./src/components/Table/Pagination.js");
/* harmony import */ var _components_Table_TableContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Table/TableContent */ "./src/components/Table/TableContent.js");
/* harmony import */ var _components_Table_PaginatedTableHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/Table/PaginatedTableHeader */ "./src/components/Table/PaginatedTableHeader.js");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils */ "./src/services/utils.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Table/PaginatedTable.js";












/* harmony default export */ __webpack_exports__["default"] = (({
  title,
  columns,
  filters,
  collection,
  loadAction,
  useFunction,
  items,
  ExpandedRowComponent,
  onExpandRow,
  activeFilter,
  hideTableHeader,
  hidePageSize,
  withDateFilters,
  loadTrigger,
  secondLoadTrigger,
  resetPage,
  totalItems
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useLocation"])();
  const queryParams = _services_urlUtils__WEBPACK_IMPORTED_MODULE_5__["default"].getQueryParams();
  const [page, setPage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(queryParams.page || 1);
  const [originalPage, setOriginalPage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(queryParams.originalPage || null);
  const [pageSize, setPageSize] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(queryParams.pageSize || 10);
  const [selectedFilters, setSelectedFilters] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(activeFilter ? Object.assign({}, activeFilter) : queryParams.filter ? JSON.parse(queryParams.filter) : {});
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (secondLoadTrigger) {
      setPage(1);
      loadTableData();
    }
  }, [secondLoadTrigger]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (loadTrigger === 'searchByTerm' || loadTrigger === 'searchByTermTranslated' || loadTrigger === 'searchByMultiple') {
      setPage(1);
      loadTableData();
    }
  }, [loadTrigger]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (activeFilter) {
      let filterName = Object.keys(activeFilter)[0];
      updateSoloActiveFilter(filterName, activeFilter[filterName]);
    } else {
      if (queryParams.filter) {
        setSelectedFilters(JSON.parse(queryParams.filter));
      } else {
        setSelectedFilters({});
      }
    }
  }, [location.state]);
  const [orderBy, setOrderBy] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(queryParams.orderBy ? JSON.parse(queryParams.orderBy) : {});
  const [search, setSearch] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(queryParams.search || '');
  const [searchForApi, setSearchForApi] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(queryParams.search || '');
  const data = items ? items : useFunction && useFunction();
  const [fromDate, setFromDate] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(queryParams.from_date || moment__WEBPACK_IMPORTED_MODULE_2___default()().subtract(7, 'd').toISOString());
  const [toDate, setToDate] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(queryParams.to_date || new Date().toISOString());

  const updateSoloActiveFilter = (name, selected) => {
    const newFilter = {};

    if (selected && selected.length > 0) {
      newFilter[name] = selected.map(sel => sel);
    } else {
      if (newFilter[name]) {
        delete newFilter[name];
      }
    }

    changeSelectedFilters(newFilter);
  };

  const loadTableData = () => {
    if (useFunction) {
      dispatch(loadAction(page, pageSize, orderBy, searchForApi, getFiltersObj(), _services_utils__WEBPACK_IMPORTED_MODULE_9__["dateForServer"](fromDate), _services_utils__WEBPACK_IMPORTED_MODULE_9__["dateForServer"](toDate)));
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (withDateFilters) {
      _services_urlUtils__WEBPACK_IMPORTED_MODULE_5__["default"].setQueryParams({
        from_date: fromDate
      });
      _services_urlUtils__WEBPACK_IMPORTED_MODULE_5__["default"].setQueryParams({
        to_date: toDate
      });
      console.log(_services_urlUtils__WEBPACK_IMPORTED_MODULE_5__["default"]);
    }
  }, [withDateFilters]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (queryParams.page != page && !(page == 1 && !queryParams.page) && page !== 0) {
      _services_urlUtils__WEBPACK_IMPORTED_MODULE_5__["default"].setQueryParams({
        page
      });
    } // loadTableData()

  }, [page]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    loadTableData();
  }, [page, pageSize, selectedFilters, searchForApi, orderBy, fromDate, toDate]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (page === 0 || queryParams.page === 0) {
      setPage(1); // loadTableData()

      _services_urlUtils__WEBPACK_IMPORTED_MODULE_5__["default"].setQueryParams({
        page: 1
      });
    }
  }, [page]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (page === 1) {
      if (originalPage && originalPage !== 0) {
        setPage(originalPage);
        setOriginalPage(null);
        _services_urlUtils__WEBPACK_IMPORTED_MODULE_5__["default"].setQueryParams({
          originalPage: null
        });
      } // console.log('HERE 0')
      // loadTableData()

    } else {// setPage(1)
        // loadTableData()
      }
  }, [pageSize, selectedFilters, searchForApi, orderBy, fromDate, toDate]);

  const changePageSize = ps => {
    setPageSize(ps);
    _services_urlUtils__WEBPACK_IMPORTED_MODULE_5__["default"].setQueryParams({
      pageSize: ps
    });
  };

  const changeSelectedFilters = sf => {
    setSelectedFilters(sf);
    _services_urlUtils__WEBPACK_IMPORTED_MODULE_5__["default"].setQueryParams({
      filter: JSON.stringify(sf)
    });
  };

  const changeSearch = s => {
    setSearch(s);
    _services_urlUtils__WEBPACK_IMPORTED_MODULE_5__["default"].setQueryParams({
      search: s
    });
    _services_utils__WEBPACK_IMPORTED_MODULE_9__["onControlledChange"](s, 0, text => {
      setSearchForApi(s);
    });
  };

  const changeOrderBy = newObj => {
    setOrderBy(newObj);
    _services_urlUtils__WEBPACK_IMPORTED_MODULE_5__["default"].setQueryParams({
      orderBy: JSON.stringify(newObj)
    });
  };

  const getFiltersObj = () => {
    let newObj = {};
    Object.keys(selectedFilters).forEach(name => {
      newObj[name] = selectedFilters[name].map(f => f.value);
    });
    return newObj;
  };

  const exportData = () => {};

  const changeFromDate = date => {
    setFromDate(date);
    _services_urlUtils__WEBPACK_IMPORTED_MODULE_5__["default"].setQueryParams({
      from_date: date
    });
  };

  const changeToDate = date => {
    setToDate(date);
    _services_urlUtils__WEBPACK_IMPORTED_MODULE_5__["default"].setQueryParams({
      to_date: date
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 9
    }
  }, !hideTableHeader && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table_PaginatedTableHeader__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: title,
    filters: filters,
    searchPlaceholder: _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('table.search') + ' ' + title,
    setSelectedFilters: changeSelectedFilters,
    onExportData: exportData,
    onChangeSearch: changeSearch,
    selectedFilters: selectedFilters,
    page: page,
    search: search,
    collection: collection,
    data: data && data.data || data,
    withDateFilters: withDateFilters,
    fromDate: fromDate,
    toDate: toDate,
    changeFromDate: changeFromDate,
    changeToDate: changeToDate,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table_TableContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: data && data.data || data,
    columns: columns,
    ExpandedRowComponent: ExpandedRowComponent,
    onExpandRow: onExpandRow,
    orderBy: orderBy,
    changeOrderBy: changeOrderBy,
    page: page,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table_Pagination__WEBPACK_IMPORTED_MODULE_6__["default"], {
    page: page,
    pageSize: pageSize,
    totalItems: totalItems || data && data.total,
    onChangePage: setPage,
    onChangePageSize: changePageSize,
    hidePageSize: hidePageSize,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 13
    }
  }));
});
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PaginatedTable__Wrapper",
  componentId: "sc-1ji75ly-0"
})(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n"]);

/***/ }),

/***/ "./src/components/Table/PaginatedTableFilters.js":
/*!*******************************************************!*\
  !*** ./src/components/Table/PaginatedTableFilters.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils */ "./src/services/utils.js");
/* harmony import */ var _components_Table_FilterBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Table/FilterBox */ "./src/components/Table/FilterBox.js");
/* harmony import */ var _components_Table_DateFilters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Table/DateFilters */ "./src/components/Table/DateFilters.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Table/PaginatedTableFilters.js";







/* harmony default export */ __webpack_exports__["default"] = (({
  filters,
  setSelectedFilters,
  collection,
  selectedFilters,
  withDateFilters,
  fromDate,
  toDate,
  changeFromDate,
  changeToDate
}) => {
  const updateFilters = (name, selected) => {
    const newFilters = Object.assign({}, selectedFilters);

    if (selected && selected.length > 0) {
      newFilters[name] = selected.map(sel => sel);
    } else {
      if (newFilters[name]) {
        delete newFilters[name];
      }
    }

    setSelectedFilters(newFilters);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BottomContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, filters && _services_utils__WEBPACK_IMPORTED_MODULE_3__["chunk"](filters, 3).map((filtersChunk, row_i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    key: `row_ic double_${row_i}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, filtersChunk.map((filter, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table_FilterBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: 'filter_' + i,
    filter: filter,
    updateFilters: updateFilters,
    selectedFilters: selectedFilters,
    collection: collection,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 29
    }
  })), filtersChunk.length === 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_2__["Flex1"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 55
    }
  }), filtersChunk.length === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_2__["Flex2"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 55
    }
  }))), withDateFilters && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table_DateFilters__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fromDate: fromDate,
    changeFromDate: changeFromDate,
    toDate: toDate,
    changeToDate: changeToDate,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }));
});
const BottomContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PaginatedTableFilters__BottomContainer",
  componentId: "sc-1ems2nb-0"
})(["\n    margin-top: 1rem;\n    margin-bottom: 10px;\n    width: 100%;\n"]);

/***/ }),

/***/ "./src/components/Table/PaginatedTableHeader.js":
/*!******************************************************!*\
  !*** ./src/components/Table/PaginatedTableHeader.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Table_PaginatedTableFilters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Table/PaginatedTableFilters */ "./src/components/Table/PaginatedTableFilters.js");
/* harmony import */ var _components_Table_ExportDataButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Table/ExportDataButton */ "./src/components/Table/ExportDataButton.js");
/* harmony import */ var _services_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/layout */ "./src/services/layout.js");
/* harmony import */ var _state_uses_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @state/uses/users */ "./src/state/uses/users.js");
/* harmony import */ var _components_Form_SearchBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Form/SearchBar */ "./src/components/Form/SearchBar.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Table/PaginatedTableHeader.js";









/* harmony default export */ __webpack_exports__["default"] = (({
  title,
  filters,
  searchPlaceholder,
  setSelectedFilters,
  onChangeClicked,
  onChangeSearch,
  selectedFilters,
  page,
  search,
  collection,
  withDateFilters,
  fromDate,
  toDate,
  changeFromDate,
  changeToDate,
  onExportData
}) => {
  const buttonWidth = Object(_services_layout__WEBPACK_IMPORTED_MODULE_4__["useButtonWidth"])();
  const user = Object(_state_uses_users__WEBPACK_IMPORTED_MODULE_5__["useUser"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchAndExportRow, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchBarContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_SearchBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    search: search,
    onChange: onChangeSearch,
    searchPlaceholder: searchPlaceholder,
    onClick: onChangeClicked,
    width: buttonWidth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_7__["Flex1"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ExportButtonContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table_ExportDataButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].locale === 'en' ? _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('table.export') + ' ' + title + ' ' + _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('table.list') : _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('table.export') + ' ' + title,
    collection: collection,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table_PaginatedTableFilters__WEBPACK_IMPORTED_MODULE_2__["default"], {
    filters: filters,
    setSelectedFilters: setSelectedFilters,
    onChangeClicked: onChangeClicked,
    selectedFilters: selectedFilters,
    page: page,
    collection: collection,
    withDateFilters: withDateFilters,
    fromDate: fromDate,
    toDate: toDate,
    changeFromDate: changeFromDate,
    changeToDate: changeToDate,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }));
});
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PaginatedTableHeader__Container",
  componentId: "sc-1kjmh09-0"
})(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n"]);
const SearchAndExportRow = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PaginatedTableHeader__SearchAndExportRow",
  componentId: "sc-1kjmh09-1"
})(["\n    display: flex;\n    /* padding: 0px 20px; */\n    /* justify-content: space-between; */\n    @media (max-width: 768px) {\n        flex-direction: column-reverse;\n    }\n"]);
const ExportButtonContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_appearance_styled__WEBPACK_IMPORTED_MODULE_7__["Flex1"]).withConfig({
  displayName: "PaginatedTableHeader__ExportButtonContainer",
  componentId: "sc-1kjmh09-2"
})(["\n    display: flex;\n    justify-content: flex-end;\n"]);
const SearchBarContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_appearance_styled__WEBPACK_IMPORTED_MODULE_7__["Flex1"]).withConfig({
  displayName: "PaginatedTableHeader__SearchBarContainer",
  componentId: "sc-1kjmh09-3"
})(["\n    /* padding: 0px; */\n"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PaginatedTableHeader__Title",
  componentId: "sc-1kjmh09-4"
})(["\n    display: flex;\n    padding: 0px 20px;\n    margin: 20px 0px;\n    justify-content: space-between;\n"]);

/***/ }),

/***/ "./src/components/Table/Pagination.js":
/*!********************************************!*\
  !*** ./src/components/Table/Pagination.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-js-pagination */ "./node_modules/react-js-pagination/dist/Pagination.js");
/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_js_pagination__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var _services_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/layout */ "./src/services/layout.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Table/Pagination.js";








const PAGE_SIZE_OPTIONS = [{
  value: 10,
  label: '10'
}, {
  value: 20,
  label: '20'
}, {
  value: 50,
  label: '50'
}, {
  value: 100,
  label: '100'
}];
/* harmony default export */ __webpack_exports__["default"] = (({
  totalItems,
  page,
  pageSize,
  onChangePage,
  onChangePageSize,
  hidePageSize
}) => {
  if (!totalItems) {
    return null;
  }

  const [windowSize, setWindowSize] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Object(_services_layout__WEBPACK_IMPORTED_MODULE_6__["useWindowSize"])());
  const totalRecords = totalItems;
  const diplayingFrom = (Number(page) - 1) * Number(pageSize) + 1;
  let diplayingTo = diplayingFrom + Number(pageSize) - 1;

  const getLayoutStyle = () => {
    if (windowSize.width < windowSize.height) {
      return true;
    }

    return false;
  };

  if (diplayingTo > totalRecords) {
    diplayingTo = totalRecords;
  }

  const currentRecordsDisplayMsg = _localization_i18n__WEBPACK_IMPORTED_MODULE_7__["default"].t('table.presenting_results') + ' ' + (_localization_i18n__WEBPACK_IMPORTED_MODULE_7__["default"].locale === 'he' ? diplayingTo : diplayingFrom) + '-' + (_localization_i18n__WEBPACK_IMPORTED_MODULE_7__["default"].locale === 'he' ? diplayingFrom : diplayingTo) + ' ' + _localization_i18n__WEBPACK_IMPORTED_MODULE_7__["default"].t('table.out_of') + ' ' + totalRecords;
  const isMobileLayout = getLayoutStyle();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    isMobileLayout: isMobileLayout,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_js_pagination__WEBPACK_IMPORTED_MODULE_4___default.a, {
    activePage: Number(page),
    itemsCountPerPage: Number(pageSize),
    totalItemsCount: totalItems,
    pageRangeDisplayed: 5,
    onChange: onChangePage,
    itemClass: "page-item",
    linkClass: "page-link",
    activeLinkClass: "custom-color",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SizeAndResultContainer, {
    isMobileLayout: isMobileLayout,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ResultsCountText, {
    isMobileLayout: isMobileLayout,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, currentRecordsDisplayMsg), !hidePageSize && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SizeSelect, {
    isMobileLayout: isMobileLayout,
    styles: _appearance_styled__WEBPACK_IMPORTED_MODULE_2__["selectCustomStyles"],
    value: PAGE_SIZE_OPTIONS.find(opt => opt.value === pageSize),
    onChange: obj => onChangePageSize(obj.value),
    options: PAGE_SIZE_OPTIONS,
    isSearchable: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  })));
});
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Pagination__Container",
  componentId: "sc-1jzf57-0"
})(["\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    flex-direction: ", ";\n    padding-bottom: 20px;\n    padding-left: ", "px;\n    padding-right: ", "px;\n"], p => p.isMobileLayout ? 'column' : 'row', p => p.isMobileLayout ? 0 : 20, p => p.isMobileLayout ? 0 : 20);
const SizeAndResultContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Pagination__SizeAndResultContainer",
  componentId: "sc-1jzf57-1"
})(["\n    width: 85%;\n    display: flex;\n    justify-content: center;\n    flex-direction: row;\n    padding: ", " px\n        ", "px;\n    padding-top: ", "px;\n    padding-bottom: ", "px;\n"], p => p.isMobileLayout ? 0 : 0, p => p.isMobileLayout ? 0 : 0, p => p.isMobileLayout ? 10 : 0, p => p.isMobileLayout ? 15 : 0);
const SizeSelect = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_select__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "Pagination__SizeSelect",
  componentId: "sc-1jzf57-2"
})(["\n    max-width: 80px;\n    flex: 1;\n    justify-content: ", ";\n    flex: ", ";\n"], p => !p.isMobileLayout ? 'flex-start' : 'flex-end', p => p.isMobileLayout ? 7 : 1);
const ResultsCountText = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(grommet__WEBPACK_IMPORTED_MODULE_5__["Text"]).withConfig({
  displayName: "Pagination__ResultsCountText",
  componentId: "sc-1jzf57-3"
})(["\n    color: grey;\n    font-size: 12px;\n    display: flex;\n    margin-right: 4px;\n    padding-top: 7.5px;\n    white-space: nowrap;\n    flex: ", ";\n    margin-left: 5px;\n"], p => p.isMobileLayout ? 1 : 7);

/***/ }),

/***/ "./src/components/Table/TableButtons.js":
/*!**********************************************!*\
  !*** ./src/components/Table/TableButtons.js ***!
  \**********************************************/
/*! exports provided: ListBtn, DeleteBtn, EditBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBtn", function() { return ListBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteBtn", function() { return DeleteBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBtn", function() { return EditBtn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _assets_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @assets/images */ "./src/assets/images/index.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Table/TableButtons.js";




const TableBtn = ({
  onClick,
  icon
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Btn, {
    onClick: onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    src: icon,
    alt: icon.toString(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }));
};

const Btn = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "TableButtons__Btn",
  componentId: "h9sj5s-0"
})(["\n    width: 20px;\n    height: 20px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: none;\n    background-color: transparent;\n"]);
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "TableButtons__Icon",
  componentId: "h9sj5s-1"
})(["\n    height: 16px;\n"]);
const ListBtn = ({
  onClick
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TableBtn, {
  icon: _assets_images__WEBPACK_IMPORTED_MODULE_2__["listIcon"],
  onClick: onClick,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }
});
const DeleteBtn = ({
  onClick
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TableBtn, {
  icon: _assets_images__WEBPACK_IMPORTED_MODULE_2__["deleteIcon"],
  onClick: onClick,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }
});
const EditBtn = ({
  onClick
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TableBtn, {
  icon: _assets_images__WEBPACK_IMPORTED_MODULE_2__["editIcon"],
  onClick: onClick,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }
});

/***/ }),

/***/ "./src/components/Table/TableContent.js":
/*!**********************************************!*\
  !*** ./src/components/Table/TableContent.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Table_Mobile_MobileTile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Table/Mobile/MobileTile */ "./src/components/Table/Mobile/MobileTile.js");
/* harmony import */ var _components_Table_TableHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Table/TableHeader */ "./src/components/Table/TableHeader.js");
/* harmony import */ var _components_Table_TableRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Table/TableRow */ "./src/components/Table/TableRow.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Loading */ "./src/components/Loading.js");
/* harmony import */ var _components_Table_NoResults__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Table/NoResults */ "./src/components/Table/NoResults.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Table/TableContent.js";








/* harmony default export */ __webpack_exports__["default"] = (({
  data,
  columns,
  changeOrderBy,
  orderBy,
  ExpandedRowComponent,
  page
}) => {
  if (!data) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 16
      }
    });
  }

  if (data.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table_NoResults__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 16
      }
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OuterContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainTableWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_7__["Table"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table_TableHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    columns: columns,
    orderBy: orderBy,
    changeOrderBy: changeOrderBy,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableBody, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, data.map((row, r) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table_TableRow__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: 'table-row' + r,
      row: row,
      rowIndex: r,
      columns: columns,
      ExpandedRowComponent: ExpandedRowComponent,
      page: page,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 33
      }
    });
  })))), data.map((row, r) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table_Mobile_MobileTile__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: 'mobile-tile-row-' + r,
      row: row,
      columns: columns,
      ExpandedRowComponent: ExpandedRowComponent,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }
    });
  }));
});
const MainTableWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "TableContent__MainTableWrapper",
  componentId: "sc-1s1u9mj-0"
})(["\n    width: 100%;\n    display: block;\n    margin: 0px auto;\n    @media (max-width: 768px) {\n        display: none;\n    }\n"]);
const OuterContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "TableContent__OuterContainer",
  componentId: "sc-1s1u9mj-1"
})(["\n    width: calc(100% - 40px);\n    margin: 20px auto;\n    overflow-x: auto;\n    overflow-y: hidden;\n"]);
const StyledTableBody = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(grommet__WEBPACK_IMPORTED_MODULE_7__["TableBody"]).withConfig({
  displayName: "TableContent__StyledTableBody",
  componentId: "sc-1s1u9mj-2"
})(["\n    background-color: #fff;\n"]);

/***/ }),

/***/ "./src/components/Table/TableHeader.js":
/*!*********************************************!*\
  !*** ./src/components/Table/TableHeader.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var _components_Table_TableHeaderCell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Table/TableHeaderCell */ "./src/components/Table/TableHeaderCell.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Table/TableHeader.js";




/* harmony default export */ __webpack_exports__["default"] = (({
  columns,
  changeOrderBy,
  orderBy
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TableHeaderRow, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, columns.map((c, ci) => !c.hidden && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table_TableHeaderCell__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: 'col-header-' + ci,
    col: c,
    orderBy: orderBy,
    changeOrderBy: changeOrderBy,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 25
    }
  })));
});
const TableHeaderRow = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(grommet__WEBPACK_IMPORTED_MODULE_2__["TableRow"]).withConfig({
  displayName: "TableHeader__TableHeaderRow",
  componentId: "dt4pjk-0"
})(["\n    background-color: rgb(152, 135, 152);\n    width: 100%;\n    flex-direction: row;\n"]);

/***/ }),

/***/ "./src/components/Table/TableHeaderCell.js":
/*!*************************************************!*\
  !*** ./src/components/Table/TableHeaderCell.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var _assets_images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @assets/images */ "./src/assets/images/index.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Table/TableHeaderCell.js";




/* harmony default export */ __webpack_exports__["default"] = (({
  col,
  changeOrderBy,
  orderBy
}) => {
  const isFilterSelected = orderBy[col.property];
  const [sortIsAscending, setSortIsAscending] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [cancelSortCycle, setCancelSortCycle] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  const sortBy = () => {
    cancelSortCycle === 2 ? setCancelSortCycle(0) : setCancelSortCycle(cancelSortCycle + 1);

    if (col.sortable) {
      cancelSortCycle === 2 ? changeOrderBy({}) : changeOrderBy({
        [col.property]: sortIsAscending ? 'asc' : 'desc'
      });
      setSortIsAscending(!sortIsAscending);
    }
  };

  const getSortIcon = () => {
    if (isFilterSelected) {
      if (sortIsAscending) {
        return _assets_images__WEBPACK_IMPORTED_MODULE_3__["sortDownArrow"];
      }

      return _assets_images__WEBPACK_IMPORTED_MODULE_3__["sortUpArrow"];
    }

    return _assets_images__WEBPACK_IMPORTED_MODULE_3__["sortArrows"];
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TableHeaderCell, {
    minWidth: col.minWidth,
    scope: "col",
    plain: false,
    align: col.align,
    sortable: col.sortable,
    changeOrderBy: changeOrderBy,
    onClick: sortBy,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderLabelText, {
    selected: isFilterSelected,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, col.label, col.sortable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SortableIcon, {
    src: getSortIcon(),
    withOpacity: !isFilterSelected,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  })));
});
const TableHeaderCell = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(grommet__WEBPACK_IMPORTED_MODULE_2__["TableCell"]).withConfig({
  displayName: "TableHeaderCell",
  componentId: "dneu9s-0"
})(["\n    border: 0px;\n    font-size: 14px;\n    min-width: ", ";\n    cursor: ", ";\n    flex-direction: row;\n    align-items: center;\n"], p => p.minWidth ? p.minWidth : '100px', p => p.sortable ? 'pointer' : 'initial');
const HeaderLabelText = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(grommet__WEBPACK_IMPORTED_MODULE_2__["Text"]).withConfig({
  displayName: "TableHeaderCell__HeaderLabelText",
  componentId: "dneu9s-1"
})(["\n    color: #ffffff;\n    font-size: 14px;\n    font-weight: bold;\n    white-space: nowrap;\n    color: ", ";\n"], p => p.selected ? 'black' : 'white');
const SortableIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.attrs(p => ({
  src: p.src
})).withConfig({
  displayName: "TableHeaderCell__SortableIcon",
  componentId: "dneu9s-2"
})(["\n    width: 16px;\n    margin-bottom: -4px;\n    opacity: ", ";\n"], p => p.withOpacity ? 0.5 : 1);

/***/ }),

/***/ "./src/components/Table/TableRow.js":
/*!******************************************!*\
  !*** ./src/components/Table/TableRow.js ***!
  \******************************************/
/*! exports provided: getCellValue, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCellValue", function() { return getCellValue; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @constants/colors */ "./src/constants/colors.js");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/utils */ "./src/services/utils.js");
/* harmony import */ var _services_dances__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/dances */ "./src/services/dances.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Table/TableRow.js";






const getCellValue = (row, col, onClick, expanded) => {
  if (col.cell && typeof col.cell === 'function') {
    return col.cell(row, col, onClick, expanded);
  }

  let prop = row[col.property];

  if (col.subProperty) {
    let subproperties = Array.isArray(col.subProperty) ? col.subProperty : [col.subProperty];
    return subproperties.map(sp => row[col.property][sp]).join(' ');
  }

  if (typeof prop === 'object') {
    return prop && JSON.stringify(prop);
  }

  return prop;
};
/* harmony default export */ __webpack_exports__["default"] = (({
  row,
  rowIndex,
  columns,
  ExpandedRowComponent,
  page
}) => {
  const [expanded, setExpanded] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [expandedFromPageNum, setExpandedFromPageNum] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  expanded && expandedFromPageNum !== page && setExpanded(false);
  const Expansion = expanded && ExpandedRowComponent ? ExpandedRowComponent : grommet__WEBPACK_IMPORTED_MODULE_2__["TableRow"];

  const handleRowClick = () => {
    ExpandedRowComponent && setExpanded(!expanded);
    setExpandedFromPageNum(page);
  };

  return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableRow, {
    clickable: ExpandedRowComponent,
    onClick: handleRowClick,
    border: "bottom",
    key: 'row-data-' + rowIndex,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, columns.map((col, i) => {
    if (!col.hidden) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {
        key: 'col-data-' + i,
        align: col.align,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 25
        }
      }, getCellValue(row, col, null, expanded));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    key: 'row-data-expaned-' + rowIndex,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, expanded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerTableContainer, {
    colSpan: columns.length,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Expansion, {
    item: row,
    expanded: expanded,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  })))];
});
const StyledTableRow = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(grommet__WEBPACK_IMPORTED_MODULE_2__["TableRow"]).withConfig({
  displayName: "TableRow__StyledTableRow",
  componentId: "ak3jvs-0"
})(["\n    border-bottom: 1px solid grey;\n    cursor: ", ";\n    &:hover {\n        background-color: WhiteSmoke;\n    }\n"], p => p.clickable && 'pointer');
const StyledTableCell = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(grommet__WEBPACK_IMPORTED_MODULE_2__["TableCell"]).withConfig({
  displayName: "TableRow__StyledTableCell",
  componentId: "ak3jvs-1"
})(["\n    font-size: 14px;\n    align-items: ", ";\n"], p => p.align === 'center' ? 'center' : 'flex-' + p.align);
const InnerTableContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].td.withConfig({
  displayName: "TableRow__InnerTableContainer",
  componentId: "ak3jvs-2"
})(["\n    /* padding-top: 8px; */\n    background-color: ", ";\n"], _constants_colors__WEBPACK_IMPORTED_MODULE_3__["default"].APP_GRAY_LIGHT);

/***/ }),

/***/ "./src/components/UserButton.js":
/*!**************************************!*\
  !*** ./src/components/UserButton.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @assets/images */ "./src/assets/images/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _services_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/layout */ "./src/services/layout.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _state_uses_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @state/uses/users */ "./src/state/uses/users.js");
/* harmony import */ var _state_actions_users__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @state/actions/users */ "./src/state/actions/users.js");
/* harmony import */ var _components_DropDownLogin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/DropDownLogin */ "./src/components/DropDownLogin.js");
/* harmony import */ var _components_DropdownLanguages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/DropdownLanguages */ "./src/components/DropdownLanguages.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
/* harmony import */ var _state_uses_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @state/uses/app */ "./src/state/uses/app.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/UserButton.js";














const UserButton = ({
  onClick
}) => {
  const language = Object(_state_uses_app__WEBPACK_IMPORTED_MODULE_11__["useLanguage"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const user = Object(_state_uses_users__WEBPACK_IMPORTED_MODULE_6__["useUser"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const [menuDropdownVisible, setMenuDropdownVisible] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [langDropdownVisible, setLangDropdownVisible] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_state_actions_users__WEBPACK_IMPORTED_MODULE_7__["getCurrentUser"])());
  }, []);

  const toggleLanguageMemu = () => {
    setLangDropdownVisible(!langDropdownVisible);
    setMenuDropdownVisible(false);
  };

  const toggleUserDropDown = () => {
    setMenuDropdownVisible(!menuDropdownVisible);
    setLangDropdownVisible(false);
  };

  Object(_services_layout__WEBPACK_IMPORTED_MODULE_4__["useOnClickOutside"])(ref, () => {
    setLangDropdownVisible(false);
    setMenuDropdownVisible(false);
  });

  const goToLogin = () => {
    history.push({
      pathname: '/login'
    });
  };

  const hebrewMenu = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images__WEBPACK_IMPORTED_MODULE_1__["userIcon"],
    height: "20",
    width: "20",
    onClick: user ? toggleUserDropDown : goToLogin,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }), !user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoginText, {
    onClick: goToLogin,
    "data-testid": "connect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, _localization_i18n__WEBPACK_IMPORTED_MODULE_10__["default"].t('login.log_in')), user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WelcomeText, {
    onClick: toggleUserDropDown,
    id: "welcome_text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, ' ', _localization_i18n__WEBPACK_IMPORTED_MODULE_10__["default"].t('headers.hello'), ", ", user.first_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LangImage, {
    resizeMode: "stretch",
    src: _localization_i18n__WEBPACK_IMPORTED_MODULE_10__["default"].locale === 'he' ? _assets_images__WEBPACK_IMPORTED_MODULE_1__["hebrew"] : _assets_images__WEBPACK_IMPORTED_MODULE_1__["english"],
    onClick: toggleLanguageMemu,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }));
  const englishMenu = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LangImage, {
    resizeMode: "stretch",
    src: _localization_i18n__WEBPACK_IMPORTED_MODULE_10__["default"].locale === 'he' ? _assets_images__WEBPACK_IMPORTED_MODULE_1__["hebrew"] : _assets_images__WEBPACK_IMPORTED_MODULE_1__["english"],
    onClick: toggleLanguageMemu,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }), !user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoginText, {
    onClick: goToLogin,
    id: "login_text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, _localization_i18n__WEBPACK_IMPORTED_MODULE_10__["default"].t('login.log_in')), user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WelcomeText, {
    onClick: toggleUserDropDown,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, ' ', _localization_i18n__WEBPACK_IMPORTED_MODULE_10__["default"].t('headers.hello'), ", ", user.first_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images__WEBPACK_IMPORTED_MODULE_1__["userIcon"],
    height: "20",
    width: "20",
    onClick: user ? toggleUserDropDown : goToLogin,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserBtn, {
    ref: ref,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, language === 'he' ? hebrewMenu : englishMenu, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DropDownLogin__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: user ? toggleUserDropDown : goToLogin,
    show: menuDropdownVisible,
    close: toggleUserDropDown,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DropdownLanguages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    langDropdownVisible: langDropdownVisible,
    setLangDropdownVisible: setLangDropdownVisible,
    onClick: toggleLanguageMemu,
    show: langDropdownVisible,
    close: toggleLanguageMemu,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UserButton);
const LangImage = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].img.withConfig({
  displayName: "UserButton__LangImage",
  componentId: "sc-1vkji5c-0"
})(["\n    position: relative;\n    width: 25px;\n    margin-left: 10px;\n    margin-right: 5px;\n    cursor: pointer;\n    display: flex;\n    flex: 1;\n    margin-top: 5px;\n"]);
const LoginText = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "UserButton__LoginText",
  componentId: "sc-1vkji5c-1"
})(["\n    margin: 0px 8px;\n"]);
const UserBtn = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].button.withConfig({
  displayName: "UserButton__UserBtn",
  componentId: "sc-1vkji5c-2"
})(["\n    background-color: transparent;\n    position: relative;\n    width: auto;\n    display: flex;\n    direction: rtl;\n    font-size: 15px;\n    line-height: 1;\n    height: 50px;\n    color: #ffffff;\n    align-items: center;\n    border: none;\n    cursor: pointer;\n"]);
const WelcomeText = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "UserButton__WelcomeText",
  componentId: "sc-1vkji5c-3"
})(["\n    margin: 0px 8px;\n    background-color: transparent;\n    font-size: 15px;\n    color: #ffffff;\n    display: block;\n"]);

/***/ }),

/***/ "./src/components/Users/UserExpandedRow.js":
/*!*************************************************!*\
  !*** ./src/components/Users/UserExpandedRow.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/utils */ "./src/services/utils.js");
/* harmony import */ var _services_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/table */ "./src/services/table.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Users/UserExpandedRow.js";





/* harmony default export */ __webpack_exports__["default"] = (({
  item
}) => {
  const dance = item;
  const columns = [{
    property: 'cellular',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t('users_expanded_row.cell')
  }, {
    property: 'phone_num',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t('users_expanded_row.another_phone')
  }, {
    property: 'address',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t('users_expanded_row.address')
  }, {
    property: 'member_id',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t('users_expanded_row.member_id')
  }, {
    property: 'choreographer_type',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t('users_expanded_row.choreographer_type')
  }, {
    property: 'email',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t('users_expanded_row.email'),
    align: 'start'
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, _services_utils__WEBPACK_IMPORTED_MODULE_2__["chunk"](columns, 3).map((itemsChunk, chunk_i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Col, {
    key: 'expanded-col-' + chunk_i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, itemsChunk.map((col, ci) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item, {
      key: 'expanded-dance-item-' + ci,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 33
      }
    }, col.label + ": ", col.label && '\u00A0'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Value, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 33
      }
    }, Object(_services_table__WEBPACK_IMPORTED_MODULE_3__["getCellContent"])(dance, col)));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Col, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }));
});
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "UserExpandedRow__Container",
  componentId: "h8rn6r-0"
})(["\n    display: flex;\n    padding: 8px;\n    @media (max-width: 768px) {\n        display: initial;\n    }\n"]);
const Item = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "UserExpandedRow__Item",
  componentId: "h8rn6r-1"
})(["\n    display: flex;\n    font-size: 15px;\n    /* padding: 4px 0px; */\n    @media (max-width: 480px) {\n        display: initial;\n        margin-bottom: 8px;\n    }\n"]);
const Col = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "UserExpandedRow__Col",
  componentId: "h8rn6r-2"
})(["\n    flex: 1;\n    display: flex;\n    padding: 0px 12px;\n    flex-direction: column;\n"]);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "UserExpandedRow__Label",
  componentId: "h8rn6r-3"
})(["\n    font-weight: 600;\n"]);
const Value = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "UserExpandedRow__Value",
  componentId: "h8rn6r-4"
})(["\n    /* padding: 0px 8px; */\n"]);
const Hyperlink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "UserExpandedRow__Hyperlink",
  componentId: "h8rn6r-5"
})(["\n    &:focus {\n        outline: none;\n        border: none;\n    }\n"]);

/***/ }),

/***/ "./src/components/Users/UsersTable.js":
/*!********************************************!*\
  !*** ./src/components/Users/UsersTable.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _state_uses_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @state/uses/users */ "./src/state/uses/users.js");
/* harmony import */ var _state_actions_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @state/actions/users */ "./src/state/actions/users.js");
/* harmony import */ var _components_Buttons_ExpandButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Buttons/ExpandButton */ "./src/components/Buttons/ExpandButton.js");
/* harmony import */ var _components_Table_PaginatedTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Table/PaginatedTable */ "./src/components/Table/PaginatedTable.js");
/* harmony import */ var _components_Users_UserExpandedRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Users/UserExpandedRow */ "./src/components/Users/UserExpandedRow.js");
/* harmony import */ var _components_Table_TableButtons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Table/TableButtons */ "./src/components/Table/TableButtons.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/Users/UsersTable.js";









const filters = [{
  property: 'choreographer_type',
  label: _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('users_table_filters.choreographer_type'),
  placeholder: _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('users_table_filters.choreographer_type')
}, {
  property: 'status',
  label: _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('users_table_filters.status'),
  placeholder: _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('users_table_filters.status')
}, {
  property: 'dance_registered_limit',
  label: _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('users_table_filters.max_parallel_orders'),
  placeholder: _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('users_table_filters.max_parallel_orders'),
  type: 'int'
}];
/* harmony default export */ __webpack_exports__["default"] = (({}) => {
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  const columns = [{
    property: 'first_name',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('users_table.first_name'),
    dataScope: 'col',
    align: 'start',
    minWidth: '60px',
    sortable: true,
    isMobileTileHeader: true
  }, {
    property: 'last_name',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('users_table.last_name'),
    dataScope: 'col',
    align: 'start',
    minWidth: '72px',
    sortable: true,
    isMobileTileHeader: true
  }, {
    property: 'status',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('users_table.status'),
    align: 'start',
    minWidth: 'none',
    sortable: true
  }, {
    property: 'ordered_dances_counter',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('users_table.ordered'),
    align: 'start',
    minWidth: 'none',
    sortable: true
  }, {
    property: 'approved_dances_counter',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('users_table.confirmed'),
    align: 'start',
    minWidth: 'none',
    sortable: true
  }, {
    property: 'existing_dances_counter',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('users_table.exists'),
    align: 'start',
    minWidth: 'none',
    sortable: true
  }, {
    property: 'dance_registered_limit',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('users_table.max_parallel_orders'),
    sortable: true,
    export: true,
    type: 'int'
  }, {
    property: 'is_admin',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('users_table.admin'),
    align: 'center',
    sortable: true,
    minWidth: 'none',
    cell: r => r.is_admin ? _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('users_table.admin') : ''
  }, {
    property: 'goToSongdList',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('users_table.dances'),
    align: 'center',
    minWidth: 'none',
    hideOnExport: true,
    cell: user => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table_TableButtons__WEBPACK_IMPORTED_MODULE_7__["ListBtn"], {
      onClick: () => goToUserDances(user),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 29
      }
    })
  }, {
    property: 'edit',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('users_table.edit'),
    align: 'center',
    minWidth: 'none',
    hideOnExport: true,
    cell: user => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table_TableButtons__WEBPACK_IMPORTED_MODULE_7__["EditBtn"], {
      onClick: () => goToEditUser(user),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 29
      }
    })
  }, {
    property: 'expand',
    label: '',
    dataScope: 'col',
    align: 'start',
    minWidth: '60px',
    hideOnExport: true,
    cell: (row, col, onClick, expanded) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons_ExpandButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onClick: onClick,
      expanded: expanded,
      closedText: _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('table.show_more_details'),
      expandedText: _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('table.show_less_details'),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }
    })
  }];

  const goToEditUser = user => {
    history.push({
      pathname: '/edit_user/' + user.id,
      state: {
        user
      }
    });
  };

  const goToUserDances = user => {
    history.push({
      pathname: '/dances',
      state: {
        searchByUser: user
      }
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table_PaginatedTable__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('users_table_filters.users_title'),
    collection: 'users',
    columns: columns,
    filters: filters,
    loadAction: _state_actions_users__WEBPACK_IMPORTED_MODULE_3__["getAllUsers"],
    useFunction: _state_uses_users__WEBPACK_IMPORTED_MODULE_2__["useUsers"],
    ExpandedRowComponent: _components_Users_UserExpandedRow__WEBPACK_IMPORTED_MODULE_6__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  });
});

/***/ }),

/***/ "./src/components/settings/EmailDistributor.js":
/*!*****************************************************!*\
  !*** ./src/components/settings/EmailDistributor.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/api */ "./src/services/api.js");
/* harmony import */ var _services_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/layout */ "./src/services/layout.js");
/* harmony import */ var _components_Form_TextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Form/TextInput */ "./src/components/Form/TextInput.js");
/* harmony import */ var _components_Form_SelectInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Form/SelectInput */ "./src/components/Form/SelectInput.js");
/* harmony import */ var _components_Form_TextAreaInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Form/TextAreaInput */ "./src/components/Form/TextAreaInput.js");
/* harmony import */ var _components_Form_RequiredText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Form/RequiredText */ "./src/components/Form/RequiredText.js");
/* harmony import */ var _components_Modals_ConfirmModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Modals/ConfirmModal */ "./src/components/Modals/ConfirmModal.js");
/* harmony import */ var _components_Modals_MessageModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/Modals/MessageModal */ "./src/components/Modals/MessageModal.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/settings/EmailDistributor.js";











/* harmony default export */ __webpack_exports__["default"] = (({
  show,
  groups
}) => {
  const buttonWidth = Object(_services_layout__WEBPACK_IMPORTED_MODULE_2__["useButtonWidth"])();
  const [mailingList, setMailingList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [mailingListValid, setMailingListValid] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [subject, setSubject] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [subjectValid, setSubjectValid] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [body, setBody] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [bodyValid, setBodyValid] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [groupsOptions, setGroupsOptions] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [showConfirmModal, setShowConfirmModal] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [showDoneModal, setShowDoneModal] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [emailRecipients, setEmailRecipients] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!groupsOptions && groups) {
      setGroupsOptions(groups);
    }
  }, [groups]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setError(null);
    setErrorPerField(bodyValid, 'גוף ההודעה לא תקינה');
    setErrorPerField(subjectValid, 'כותרת האימייל לא תקינה');
    setErrorPerField(mailingListValid, 'רשימת נמענים לא תקינה');
  }, [mailingListValid, subjectValid, bodyValid]);

  const setErrorPerField = (field, error) => {
    if (field === false) {
      setError(error);
    }
  };

  const formValid = () => mailingListValid && subjectValid && bodyValid;

  const sendGeneralEmail = () => {
    setShowConfirmModal(false);
    _services_api__WEBPACK_IMPORTED_MODULE_1__["default"].sendGeneralEmail(mailingList, subject, body).subscribe(res => {
      // console.log('sendGeneralEmail res', res)
      setEmailRecipients(res.data.number_of_emails);
      setShowDoneModal(true);
    }, err => console.log('sendGeneralEmail error', err));
  };

  if (!show) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_9__["GrayWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_9__["PageSubTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, _localization_i18n__WEBPACK_IMPORTED_MODULE_10__["default"].t('settings_headers.email_distributor')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_9__["FormWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_9__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_SelectInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: mailingList || '',
    placeholder: 'בחר/י',
    label: 'רשימת נמענים',
    onSelect: group => setMailingList(group),
    options: groupsOptions,
    width: buttonWidth,
    onDoneEdit: setMailingListValid,
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_9__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: 'כותרת האימייל',
    text: subject || '',
    onChangeText: setSubject,
    width: '100%',
    onDoneEdit: setSubjectValid,
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_9__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextAreaInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: 'גוף ההודעה',
    text: body || '',
    onChangeText: setBody,
    minHeight: "100px",
    onDoneEdit: setBodyValid,
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_9__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_RequiredText__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_9__["SubmitBtnContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_9__["SubmitBtn"], {
    onClick: () => setShowConfirmModal(true),
    disabled: !formValid(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 21
    }
  }, "\u05E9\u05DC\u05D9\u05D7\u05D4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_9__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_9__["ErrorText"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 21
    }
  }, error))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modals_ConfirmModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isOpen: showConfirmModal,
    onCancel: () => setShowConfirmModal(false),
    onConfirm: sendGeneralEmail,
    title: 'אישור שליחה',
    mainText: 'האם את/ה בטוח/ה שברצונך לשלוח את האימייל לכל המשתמשים שבחרת?',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modals_MessageModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isOpen: showDoneModal,
    title: 'האימייל נשלח בהצלחה',
    mainText: 'האימייל נשלח לכ-' + emailRecipients + ' משתמשים',
    onClose: () => setShowDoneModal(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }));
});

/***/ }),

/***/ "./src/components/settings/EmailEditor.js":
/*!************************************************!*\
  !*** ./src/components/settings/EmailEditor.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Form_TextAreaInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Form/TextAreaInput */ "./src/components/Form/TextAreaInput.js");
/* harmony import */ var _components_Form_TextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Form/TextInput */ "./src/components/Form/TextInput.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/settings/EmailEditor.js";





/* harmony default export */ __webpack_exports__["default"] = (({
  show,
  newAppConfig,
  setNewAppConfigProp,
  openSaveConfigsModal
}) => {
  if (!show) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["GrayWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["PageSubTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, "\u05E2\u05E8\u05D9\u05DB\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC\u05D9\u05DD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormSection"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormSectionTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, "\u05E8\u05E9\u05D9\u05DE\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC\u05D9\u05DD \u05DC\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: newAppConfig ? newAppConfig.contact_us_list : '',
    onChangeText: contact_us_list => {
      setNewAppConfigProp({
        contact_us_list: contact_us_list.replace(' ', '')
      });
    },
    width: 'initial',
    required: true,
    label: 'הפרד רשימה על ידי פסיקים בלבד (ללא רווחים)',
    hideRequiredSign: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormSection"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormSectionTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }, "\u05D4\u05D5\u05D3\u05E2\u05D4 \u05DC\u05DE\u05E9\u05EA\u05DE\u05E9 \u05E2\u05DC \u05EA\u05E9\u05DC\u05D5\u05DD \u05D3\u05DE\u05D9 \u05D7\u05D1\u05E8\u05D5\u05EA")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: newAppConfig ? newAppConfig.payment_recieved_subject : '',
    onChangeText: payment_recieved_subject => setNewAppConfigProp({
      payment_recieved_subject
    }),
    width: 'initial',
    required: true,
    label: 'נושא ההודעה',
    hideRequiredSign: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextAreaInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: newAppConfig ? newAppConfig.payment_recieved_body : '',
    onChangeText: payment_recieved_body => setNewAppConfigProp({
      payment_recieved_body
    }),
    minHeight: "200px",
    placeholder: "\u05D4\u05E7\u05DC\u05D3 \u05DB\u05D0\u05DF",
    label: 'תוכן ההודעה',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 25
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormSection"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormSectionTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 25
    }
  }, "\u05D4\u05D5\u05D3\u05E2\u05D4 \u05DC\u05DE\u05E9\u05EA\u05DE\u05E9 \u05E2\u05DC \u05E1\u05D9\u05DE\u05D5\u05DF \u05D0\u05D9 \u05EA\u05E9\u05DC\u05D5\u05DD \u05D3\u05DE\u05D9 \u05D7\u05D1\u05E8\u05D5\u05EA")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: newAppConfig ? newAppConfig.payment_reminder_subject : '',
    onChangeText: payment_reminder_subject => setNewAppConfigProp({
      payment_reminder_subject
    }),
    width: 'initial',
    required: true,
    label: 'נושא ההודעה',
    hideRequiredSign: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextAreaInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: newAppConfig ? newAppConfig.payment_reminder_body : '',
    onChangeText: payment_reminder_body => setNewAppConfigProp({
      payment_reminder_body
    }),
    minHeight: "200px",
    placeholder: "\u05D4\u05E7\u05DC\u05D3 \u05DB\u05D0\u05DF",
    label: 'תוכן ההודעה',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 25
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormSection"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormSectionTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 25
    }
  }, "\u05D4\u05D5\u05D3\u05E2\u05D4 \u05DC\u05DE\u05E9\u05EA\u05DE\u05E9 \u05E2\u05DC \u05E8\u05D9\u05E7\u05D5\u05D3 \u05DE\u05D0\u05D5\u05E9\u05E8 (\u05D0\u05D9\u05E9\u05D5\u05E8 \u05D4\u05D6\u05DE\u05E0\u05D4) \u05E2\u05DC \u05D9\u05D3\u05D9 \u05D4\u05D4\u05E0\u05D4\u05DC\u05D4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: newAppConfig ? newAppConfig.approved_application_mail_subject : '',
    onChangeText: approved_application_mail_subject => setNewAppConfigProp({
      approved_application_mail_subject
    }),
    width: 'initial',
    required: true,
    label: 'נושא ההודעה',
    hideRequiredSign: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextAreaInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: newAppConfig ? newAppConfig.approved_application_mail_body : '',
    onChangeText: approved_application_mail_body => setNewAppConfigProp({
      approved_application_mail_body
    }),
    minHeight: "200px",
    placeholder: "\u05D4\u05E7\u05DC\u05D3 \u05DB\u05D0\u05DF",
    label: 'תוכן ההודעה',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 25
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormSection"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormSectionTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 25
    }
  }, "\u05D4\u05D5\u05D3\u05E2\u05D4 \u05DC\u05DE\u05E9\u05EA\u05DE\u05E9 \u05E2\u05DC \u05D4\u05E4\u05D9\u05DB\u05EA \u05E8\u05D9\u05E7\u05D5\u05D3 \u05DC\u05E8\u05D9\u05E7\u05D5\u05D3 \u05E7\u05D9\u05D9\u05DD \u05E2\u05DC \u05D9\u05D3\u05D9 \u05D4\u05D4\u05E0\u05D4\u05DC\u05D4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: newAppConfig ? newAppConfig.completed_application_mail_subject : '',
    onChangeText: completed_application_mail_subject => setNewAppConfigProp({
      completed_application_mail_subject
    }),
    width: 'initial',
    required: true,
    label: 'נושא ההודעה',
    hideRequiredSign: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextAreaInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: newAppConfig ? newAppConfig.completed_application_mail_body : '',
    onChangeText: completed_application_mail_body => setNewAppConfigProp({
      completed_application_mail_body
    }),
    minHeight: "200px",
    placeholder: "\u05D4\u05E7\u05DC\u05D3 \u05DB\u05D0\u05DF",
    label: 'תוכן ההודעה',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 25
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormSection"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormSectionTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 25
    }
  }, "\u05D4\u05D5\u05D3\u05E2\u05D4 \u05DC\u05DE\u05E9\u05EA\u05DE\u05E9 \u05E2\u05DC \u05E8\u05D9\u05E7\u05D5\u05D3 \u05E9\u05E0\u05D3\u05D7\u05D4 \u05E2\u05DC \u05D9\u05D3\u05D9 \u05D4\u05D4\u05E0\u05D4\u05DC\u05D4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: newAppConfig ? newAppConfig.denied_application_mail_subject : '',
    onChangeText: denied_application_mail_subject => setNewAppConfigProp({
      denied_application_mail_subject
    }),
    width: 'initial',
    required: true,
    label: 'נושא ההודעה',
    hideRequiredSign: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextAreaInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: newAppConfig ? newAppConfig.denied_application_mail_body : '',
    onChangeText: denied_application_mail_body => setNewAppConfigProp({
      denied_application_mail_body
    }),
    minHeight: "200px",
    placeholder: "\u05D4\u05E7\u05DC\u05D3 \u05DB\u05D0\u05DF",
    label: 'תוכן ההודעה',
    hideRequiredSign: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 25
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormSection"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormSectionTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 25
    }
  }, "\u05D4\u05D5\u05D3\u05E2\u05D4 \u05DC\u05DE\u05E9\u05EA\u05DE\u05E9 \u05E9\u05D4\u05E8\u05D9\u05E7\u05D5\u05D3 \u05D4\u05E8\u05E9\u05D5\u05DD \u05E2\u05DC\u05D9\u05D5 \u05D1\u05E7\u05E8\u05D5\u05D1 \u05D9\u05E4\u05D5\u05D2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: newAppConfig ? newAppConfig.song_application_near_to_expire_mail_subject : '',
    onChangeText: song_application_near_to_expire_mail_subject => setNewAppConfigProp({
      song_application_near_to_expire_mail_subject
    }),
    width: 'initial',
    required: true,
    label: 'נושא ההודעה',
    hideRequiredSign: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextAreaInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: newAppConfig ? newAppConfig.song_application_near_to_expire_mail_body : '',
    onChangeText: song_application_near_to_expire_mail_body => setNewAppConfigProp({
      song_application_near_to_expire_mail_body
    }),
    minHeight: "200px",
    placeholder: "\u05D4\u05E7\u05DC\u05D3 \u05DB\u05D0\u05DF",
    label: 'תוכן ההודעה',
    hideRequiredSign: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubmitBtnContiner, {
    justifyContent: 'center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["SubmitBtn"], {
    onClick: openSaveConfigsModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 25
    }
  }, "\u05E9\u05DE\u05D9\u05E8\u05D4")))));
});
const SubmitBtnContiner = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["FormRow"]).withConfig({
  displayName: "EmailEditor__SubmitBtnContiner",
  componentId: "r6ozu8-0"
})(["\n    justify-content: center;\n    margin: 32px 0 20px;\n"]);

/***/ }),

/***/ "./src/components/settings/GeneralSettings.js":
/*!****************************************************!*\
  !*** ./src/components/settings/GeneralSettings.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Form_TextInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Form/TextInput */ "./src/components/Form/TextInput.js");
/* harmony import */ var _components_Form_TextAreaInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Form/TextAreaInput */ "./src/components/Form/TextAreaInput.js");
/* harmony import */ var _services_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/layout */ "./src/services/layout.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/settings/GeneralSettings.js";






/* harmony default export */ __webpack_exports__["default"] = (({
  show,
  newAppConfig,
  setNewAppConfigProp,
  openSaveConfigsModal
}) => {
  const buttonWidth = Object(_services_layout__WEBPACK_IMPORTED_MODULE_4__["useButtonWidth"])();

  if (!show) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_5__["GrayWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_5__["PageSubTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05DB\u05DC\u05DC\u05D9\u05D5\u05EA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_5__["FormWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_5__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: newAppConfig ? newAppConfig.application_expiration_period : '',
    type: 'number',
    label: 'משך זמן שמירת שיר/ריקוד (חודשים)',
    onChangeText: application_expiration_period => setNewAppConfigProp({
      application_expiration_period
    }),
    min: 0,
    width: buttonWidth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_5__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextAreaInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: 'ברוכים הבאים למערכת רישום הריקודים של ארגון המדריכים והיוצרים!',
    text: newAppConfig ? newAppConfig.welcome : '',
    onChangeText: welcome => setNewAppConfigProp({
      welcome
    }),
    minHeight: "100px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_5__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextAreaInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: 'אז איך זה עובד?',
    text: newAppConfig ? newAppConfig.terms_of_use : '',
    onChangeText: terms_of_use => setNewAppConfigProp({
      terms_of_use
    }),
    minHeight: "100px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_5__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextAreaInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: 'יש 3 שלבים לריקוד',
    text: newAppConfig ? newAppConfig.explanations : '',
    onChangeText: explanations => setNewAppConfigProp({
      explanations
    }),
    minHeight: "100px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubmitBtnContiner, {
    justifyContent: 'center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_5__["SubmitBtn"], {
    onClick: openSaveConfigsModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  }, "\u05E9\u05DE\u05D9\u05E8\u05D4"))));
});
const SubmitBtnContiner = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_appearance_styled__WEBPACK_IMPORTED_MODULE_5__["FormRow"]).withConfig({
  displayName: "GeneralSettings__SubmitBtnContiner",
  componentId: "sc-6gpjnc-0"
})(["\n    justify-content: center;\n    margin: 32px 0 20px;\n"]);

/***/ }),

/***/ "./src/components/settings/LogsTable.js":
/*!**********************************************!*\
  !*** ./src/components/settings/LogsTable.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _state_actions_logs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @state/actions/logs */ "./src/state/actions/logs.js");
/* harmony import */ var _state_uses_logs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @state/uses/logs */ "./src/state/uses/logs.js");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/utils */ "./src/services/utils.js");
/* harmony import */ var _components_Table_PaginatedTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Table/PaginatedTable */ "./src/components/Table/PaginatedTable.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/settings/LogsTable.js";







const dateFormat = 'H:mm DD/MM/YY';
const filters = [{
  property: 'action',
  label: _localization_i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('logs_table_filters.action_type'),
  placeholder: _localization_i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('logs_table_filters.action_type')
}, {
  property: 'user',
  subProperty: ['first_name', 'last_name'],
  label: _localization_i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('logs_table_filters.choreographer_name'),
  placeholder: _localization_i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('logs_table_filters.choreographer_name')
}, {
  property: 'user_type',
  label: _localization_i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('logs_table_filters.user_type'),
  placeholder: _localization_i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('logs_table_filters.user_type')
}];
const columns = [{
  property: 'action',
  label: _localization_i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('logs_table.action'),
  align: 'start',
  minWidth: '60px',
  sortable: true,
  isMobileTileHeader: true
}, {
  property: 'created',
  label: _localization_i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('logs_table.created'),
  align: 'start',
  minWidth: '60px',
  sortable: true,
  cell: log => _services_utils__WEBPACK_IMPORTED_MODULE_4__["formatDate"](log['created'], dateFormat)
}, {
  property: 'user_name',
  label: _localization_i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('logs_table.user_name'),
  align: 'start',
  minWidth: '60px',
  sortable: true
}, {
  property: 'user_email',
  label: _localization_i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('logs_table.user_email'),
  align: 'start',
  minWidth: '60px',
  sortable: true
}, {
  property: 'user_is_admin',
  label: _localization_i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('logs_table.user_is_admin'),
  align: 'start',
  minWidth: '60px',
  sortable: true,
  cell: log => log.user_is_admin ? 'אדמין' : 'משתמש רגיל'
}, {
  property: 'dance_name',
  label: _localization_i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('logs_table.dance_name'),
  align: 'start',
  minWidth: '60px',
  sortable: true
}, {
  property: 'target_user_name',
  label: _localization_i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('logs_table.target_user_name'),
  align: 'start',
  minWidth: '60px',
  sortable: true
}, {
  property: 'target_user_email',
  label: _localization_i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('logs_table.target_user_email'),
  align: 'start',
  minWidth: '70px',
  sortable: true
}, {
  property: 'description',
  label: _localization_i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('logs_table.description'),
  align: 'start',
  minWidth: '100px',
  sortable: true
}, {
  property: 'target_group',
  label: _localization_i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('logs_table.target_group'),
  align: 'start',
  minWidth: '100px',
  sortable: true
}];
/* harmony default export */ __webpack_exports__["default"] = (({}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table_PaginatedTable__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: 'פעולות מערכת',
    columns: columns,
    collection: 'logs',
    useFunction: _state_uses_logs__WEBPACK_IMPORTED_MODULE_3__["useLogs"],
    loadAction: _state_actions_logs__WEBPACK_IMPORTED_MODULE_2__["getAllLogs"],
    filters: filters,
    withDateFilters: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }));
});
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "LogsTable__Container",
  componentId: "sc-1rbinvi-0"
})(["\n    /* display: flex;\n    flex-direction: column; */\n"]);

/***/ }),

/***/ "./src/components/settings/UsersLog.js":
/*!*********************************************!*\
  !*** ./src/components/settings/UsersLog.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
/* harmony import */ var _components_settings_LogsTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/settings/LogsTable */ "./src/components/settings/LogsTable.js");
var _jsxFileName = "/Users/vitaly/markidim/src/components/settings/UsersLog.js";



/* harmony default export */ __webpack_exports__["default"] = (({
  show
}) => {
  if (!show) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_1__["GrayWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_settings_LogsTable__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }));
});

/***/ }),

/***/ "./src/constants/colors.js":
/*!*********************************!*\
  !*** ./src/constants/colors.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const purples = {
  dark: '#534767',
  light: '#988798'
};
const colors = {
  APP_WHITE: '#fefefe',
  APP_BLACK: '#000',
  APP_GRAY: '#ccc',
  APP_GRAY_LIGHT: '#eee',
  APP_GRAY_DARK: '#aaa',
  COLOR_PRIMARY: purples.dark,
  BUTTON_DARK: purples.dark,
  BACK_BUTTON: purples.light,
  APP_TEXT: '#212529'
};
/* harmony default export */ __webpack_exports__["default"] = (colors);

/***/ }),

/***/ "./src/data/Users.js":
/*!***************************!*\
  !*** ./src/data/Users.js ***!
  \***************************/
/*! exports provided: userTypes, orders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userTypes", function() { return userTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orders", function() { return orders; });
const userTypes = ['אינו מדריך', 'חבר ועד מנהל', 'חבר מועצה', 'יוצר ריקודי עם', 'יקיר', 'כוריאוגרף לבמה', 'מדריך', 'מדריך פעיל', 'מדריכי חו"ל', 'מדריך ילדים', 'מדריך אוכלוסיות מיוחדות'];
const orders = [...Array(10).keys()];

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _state_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @state/store */ "./src/state/store.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/vitaly/markidim/src/index.js";

 //redux






const rootElement = document.getElementById('root');
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
  store: _state_store__WEBPACK_IMPORTED_MODULE_3__["default"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 2
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }
})), rootElement); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_6__["unregister"]();

/***/ }),

/***/ "./src/localization/i18n.js":
/*!**********************************!*\
  !*** ./src/localization/i18n.js ***!
  \**********************************/
/*! exports provided: setLocale, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocale", function() { return setLocale; });
/* harmony import */ var i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18n-js */ "./node_modules/i18n-js/app/assets/javascripts/i18n.js");
/* harmony import */ var i18n_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(i18n_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locales_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locales/en */ "./src/localization/locales/en.js");
/* harmony import */ var _locales_he__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locales/he */ "./src/localization/locales/he.js");



let activeLanguage = localStorage.getItem('@markidim:language');

if (!activeLanguage) {
  localStorage.setItem('@markidim:language', 'he');
  activeLanguage = 'he';
}

i18n_js__WEBPACK_IMPORTED_MODULE_0___default.a.locale = activeLanguage;
i18n_js__WEBPACK_IMPORTED_MODULE_0___default.a.fallbacks = true;
i18n_js__WEBPACK_IMPORTED_MODULE_0___default.a.translations = {
  he: _locales_he__WEBPACK_IMPORTED_MODULE_2__["default"],
  en: _locales_en__WEBPACK_IMPORTED_MODULE_1__["default"]
};
const setLocale = lang => {
  if (i18n_js__WEBPACK_IMPORTED_MODULE_0___default.a.locale === lang) return;
  i18n_js__WEBPACK_IMPORTED_MODULE_0___default.a.locale = lang;

  if (lang === 'he') {
    localStorage.setItem('@markidim:language', 'he');
  } else {
    localStorage.setItem('@markidim:language', 'en');
  }
};
/* harmony default export */ __webpack_exports__["default"] = (i18n_js__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./src/localization/locales/en.js":
/*!****************************************!*\
  !*** ./src/localization/locales/en.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  general: {
    invalid_password: 'Password must contain a minimum of 8 characters',
    invalid_verify_password: 'Passwords do not match'
  },
  signup: {
    password: 'Password',
    verify_password: 'Verify Password',
    email: 'Email',
    send_request: 'Send Request',
    title: 'SignUp',
    error: 'Error',
    email_taken: 'Email address is already in use',
    on_request_confirmed: 'Once your request is approved, you will recieve an email in order to complete your signup process.',
    request_sent: 'Signup request has been sent successfully!',
    error_first_name: 'Invalid First Name',
    error_last_name: 'Invalid Last Name',
    error_id: 'Invalid Id',
    error_instructor: 'Invalid Instructor Type',
    error_cell_num: 'Invalid Mobile Phone',
    error_phone: 'Invalid Phone',
    error_address: 'Invalid Address',
    error_email: 'Invalid Email Address',
    error_password: 'Invalid Password',
    error_verify_password: 'Invalid Verify Password'
  },
  forgot_password: {
    email: 'Email',
    title: 'Forgot Password',
    send: 'Send',
    description: 'Enter your email address and press "send"',
    error: 'Error',
    unvalid_email: 'Invalid Email Address',
    email_not_found: 'Email Not Found',
    email_sent: 'An email has been sent to reset your password',
    check_email: 'Please check your email inbox'
  },
  login: {
    log_in_if_registered: 'Login (for registered users)',
    dont_have_account: "Don't have an account? click",
    here: 'here',
    to_sign_up: 'to signup',
    email: 'Email',
    password: 'Password',
    log_in: 'Login',
    log_in_failed: 'Login Failed',
    default_error: 'An Error Has Accured',
    wrong_password: 'Wrong Password',
    no_existing_email: 'Email address was not found, or your signup request has not been verified yet',
    user_blocked: 'Your user is blocked. Please contact the System Managers',
    forgot_password: 'Forgot Password',
    login_restricted_to_members: 'For Irgun Members Only',
    not_signed_yet: "?Don't Have An Account",
    signup_here: 'Signup Here'
  },
  profile: {
    headline: 'Profile',
    first_name: 'First Name',
    last_name: 'Last Name',
    email: 'Email Address',
    id: 'ID',
    cell_number: 'Mobile Phone Number',
    another_phone: 'Additional Phone Number',
    address: 'Address',
    instructor_type: 'Membership Type',
    membership_number: 'Membership Number',
    select: 'Select',
    max_parallel_orders: 'Maximum Parallel Orders'
  },
  user_menu_headlines: {
    main_page: 'Main',
    contact_us: 'Contact Us',
    profile: 'Profile',
    logout: 'Logout'
  },
  edit_user: {
    select: 'Select',
    first_name: 'First Name',
    last_name: 'Last Name',
    email: 'Email',
    id: 'ID Number',
    cell_number: 'Mobile Phone Number',
    another_phone: 'Another Phone Number',
    address: 'Address',
    instructor_type: 'Membership Type',
    membership_number: 'Membership Number',
    max_parallel_orders: 'Maximum Parallel Orders',
    membership_paid: 'Membership Paid',
    admin: 'Admin',
    headline: 'Edit Membership Details',
    save_button: 'Save',
    cancel_button: 'Cancel',
    save_changes_modal_headline: 'Save Changes',
    save_changes_modal_content: 'Are you sure you want to save your changes?',
    changes_succussfully_saved_modal_title: 'Changes saved successfully!',
    changes_succussfully_saved_modal_content: '',
    yes: 'Yes',
    no: 'No'
  },
  table: {
    show_more_details: 'Show more details',
    show_less_details: 'Show less details',
    presenting_results: 'Presenting results',
    out_of: 'Out of',
    search: 'Search',
    export: 'Export',
    list: 'List'
  },
  dances_table: {
    dance_name: 'Dance Name',
    status: 'Status',
    choreographer: 'Choreographer',
    style: 'Dance Type',
    performer: 'Performer',
    composer: 'Composer',
    lyricist: 'Lyricist',
    approval_date: 'Approval Date',
    request_date: 'Request Date',
    akum_id: 'ACUM ID',
    edit: 'Edit',
    user_details: 'User Details'
  },
  dances_table_filters: {
    dances_title: 'Dances',
    status: 'Status',
    choreographer: 'Choreographer',
    style: 'Dance Type',
    performer: 'Performer',
    composer: 'Composer',
    lyricist: 'Lyricist'
  },
  dances_expanded_row: {
    original_name: 'Original Song Name',
    co_choreographers: 'Additional Choreographer',
    request_date: 'Request Date',
    approval_date: 'Approval Date',
    completion_date: 'Dance Year',
    notes: 'Notes',
    link_to_lyrics: 'Song Lyrics Link',
    link_to_original_song: 'Song Video Link',
    link_to_dance_video: 'Dance Video Link'
  },
  users_table: {
    first_name: 'שם פרטי',
    last_name: 'שם משפחה',
    status: 'סטטוס',
    ordered: 'מוזמנים',
    confirmed: 'מאושרים',
    exists: 'קיימים',
    max_parallel_orders: 'מקס׳ הז׳ במקביל',
    admin: 'מנהל',
    dances: 'ריקודים',
    edit: 'עריכה'
  },
  users_table_filters: {
    users_title: 'משתמשים',
    search: 'חיפוש משתמשים',
    choreographer_type: 'סוג משתמש',
    status: 'סטטוס',
    max_parallel_orders: 'מספר הזמנות מקסימלי'
  },
  users_expanded_row: {
    cell: 'מס׳ סלולרי',
    another_phone: 'טלפון נוסף',
    address: 'כתובת',
    member_id: 'מס׳ חבר',
    choreographer_type: 'סוג משתמש',
    email: 'דואר אלקטרוני'
  },
  logs_table: {
    action: 'סוג פעולה',
    created: 'תאריך',
    user_name: 'משתמש מבצע',
    user_email: 'אימייל מ.מבצע',
    user_is_admin: 'סוג מ.מבצע',
    dance_name: 'שם ריקוד',
    target_user_name: 'משתמש מטרה',
    target_user_email: 'אימייל משתמש מטרה',
    description: 'תיאור'
  },
  logs_table_filters: {
    logs_title: 'פעולות מערכת',
    search: 'חיפוש',
    action_type: 'סוג פעולה',
    choreographer_name: 'שם משתמש מבצע',
    user_type: 'סוג משתמש מבצע',
    from_date: 'מתאריך',
    to_date: 'עד תאריך'
  },
  settings_headers: {
    email_distributor: 'עורך הפצת אימיילים',
    email_editor: 'עריכת אימיילים',
    general: 'הגדרות כלליות',
    users_log: 'לוג משתמשים'
  },
  buttons: {
    add_new_dance: 'Order New Song',
    pay_membership: 'Membership Payment',
    to_year: 'To Year',
    remaining: 'Remaining',
    songs: 'Songs'
  },
  edit_dance: {
    ordered_by: 'Ordered by',
    song_name: 'Song Name',
    status: 'Status',
    edit_dance: 'Edit Dance',
    add_dance: 'Add Dance',
    select: 'Select',
    dance_style: 'Dance Type',
    co_choreographers: 'Additional Choreographer',
    order_date_and_time: 'Order Date and Time',
    compeletion_date: 'Completion Date',
    link_to_dance: 'Dance Video Link',
    link_to_song: 'Song Video Link',
    link_to_lyrics: 'Song Lyrics Link',
    notes: 'Notes',
    additional_info: 'Once the dance registration is approved, you will need to add a link to the dance video in order to complete registration.',
    minimum_search_length_error: 'You must type at least 3 characters ',
    search_song_in_akum: 'Search a Song in ACUM',
    canael_order: 'Cancel Order',
    cancel_edit: 'Cancel Edit',
    dance_name_changeable: 'Dance Name (you can change later)',
    perform_new_akum_search: 'Perform new search in ACUM',
    original_song_name: 'Original Song Name',
    akum_id: 'ACUM ID',
    translated_version_id: 'Translated ACUM ID',
    song_publication_year: 'Song Publication Year',
    performer: 'Performer',
    composer: 'Composer',
    lyricist: 'Lyricist',
    approval_date: 'Approval Date',
    manual_registration_request: 'Please enter the song details manually, or',
    perform_new_search: 'perform new search in ACUM',
    required_fields: 'Mandatory Fields',
    no_akum_search_error: 'Song was not searched in ACUM yet',
    save: 'Save',
    send_request: 'Send Request',
    delete_dance: 'Delete Dance',
    reject_dance: 'דחה ריקוד',
    confirm_delete_dance: 'Are you sure you want to delete the dance?',
    confirm_reject_dance: 'Are you sure you want to reject the dance?',
    confirm_request: 'Confirm Request',
    confirm_confirm_request: 'Are you sure you want to approve the request?',
    make_dance_exist: 'Change dance status to "existing"',
    confirm_make_dance_exist: 'Are you sure you want to change dance status to "existing"?',
    reject_reason: 'Reject Reason',
    delete_reason: 'Delete Reason',
    confirm_reason: 'Approval Note',
    input_missing: 'One (or more) Mandatory Fields Are Missing'
  },
  modals: {
    confirm: 'Confirm',
    error: 'Error',
    dance_updated_successfully: 'Dance updated successfully',
    back_to_dances_screen: 'Back to dances screen',
    request_recieved: 'Your request was submitted',
    request_under_review: 'The system admin will review your request and respond soon',
    video_url_empty: 'Missing dance video link',
    video_url_empty_description: 'Dance status cannot change to "existing" without a video link'
  },
  akum_results_table: {
    back_to_add_dance: 'Back to New Dance screen',
    search_of_song: 'Search Song',
    in_the_database_of: 'in ACUM Database',
    cant_find_the_song: 'Can’t find the song?',
    fill_song_manualy: 'and enter the song details manually',
    work_name: 'Song Name',
    work_id: 'ACUM ID',
    composer: 'Composer',
    lyricist: 'Lyricist',
    performer: 'Performer',
    show_versions: 'Show Versions',
    choose_version: 'Choose Version',
    musical_versions: 'Musical Versions',
    translated_versions: 'Translated ',
    songs: 'Songs',
    filter_by_performer: 'Filter by performer',
    search_song_and_performer: 'Search song with performer at ACUM',
    minimum_search_length_error: 'You must type at least 3 characters',
    version_search_for_song: 'Search version to the song',
    cant_find_the_version: 'Can’t find the version?',
    and_go_back_to_songs_screen: 'and go back to songs screen',
    version_number: 'Version ID',
    publication_date: 'Publication Date',
    dance_alreay_exists: 'The dance already exists in the system',
    click_here: 'Click Here'
  },
  headers: {
    dances: 'Dances',
    my_dances: 'My Dances',
    users: 'Users',
    settings: 'Settings',
    hello: 'Hello'
  }
});

/***/ }),

/***/ "./src/localization/locales/he.js":
/*!****************************************!*\
  !*** ./src/localization/locales/he.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  general: {
    invalid_password: 'סיסמה חייבת להיות בת 8 תוים לפחות',
    invalid_verify_password: 'הסיסמה לא תואמת את שדה הסיסמה הראשון'
  },
  signup: {
    password: 'סיסמה',
    verify_password: 'וודא סיסמה',
    email: 'כתובת דוא"ל',
    send_request: 'שלח בקשה',
    title: 'הרשמה למערכת',
    error: 'שגיאה',
    email_taken: 'כתובת המייל נמצאת בשימוש',
    on_request_confirmed: 'עם אישור הבקשה על ידי מנהלי האתר, ישלח אליך מייל להשלמת תהליך ההרשמה.',
    request_sent: 'בקשת ההרשמה לאתר נשלחה בהצלחה!',
    error_first_name: 'שם פרטי לא תקין',
    error_last_name: 'שם משפחה לא תקין',
    error_id: 'ת״ז לא תקינה',
    error_instructor: 'סוג מדריך לא תקין',
    error_cell_num: 'מס׳ נייד לא תקין',
    error_phone: 'מס׳ טלפון לא תקין',
    error_address: 'כתובת לא תקינה',
    error_email: 'דוא״ל לא תקין',
    error_password: 'סיסמה לא תקינה',
    error_verify_password: 'אישור סיסמה לא תקין'
  },
  forgot_password: {
    email: 'כתובת דוא"ל',
    title: 'שכחתי סיסמה',
    send: 'שלח',
    error: 'שגיאה',
    description: 'מלא את כתובת האימייל איתה נרשמת ולחץ שלח',
    unvalid_email: 'אימייל לא תקין',
    email_not_found: 'כתובת המייל לא נמצאה במערכת',
    email_sent: 'שלחנו לך אימייל לאיפוס סיסמה',
    check_email: 'אנא בדוק את תיבת האימייל שלך'
  },
  login: {
    log_in_if_registered: 'התחברות למערכת (למשתמשים קיימים)',
    dont_have_account: 'אין לך חשבון עדיין? לחץ',
    to_sign_up: 'כדי להרשם',
    email: 'דוא״ל',
    password: 'סיסמה',
    log_in: 'התחברות',
    log_in_failed: 'ההתחברות נכשלה',
    default_error: 'ארעה שגיאה',
    wrong_password: 'סיסמה שגויה',
    no_existing_email: 'לא נמצא משתמש רשום עם כתובת אימייל זו, או שטרם אושרה בקשת ההרשמה על ידי מנהלי המערכת',
    user_blocked: 'משתמש חסום. אנא פנה למנהלי האתר',
    here: 'כאן',
    forgot_password: 'שכחתי סיסמה',
    login_restricted_to_members: 'לחברי ארגון המדריכים בלבד',
    not_signed_yet: 'עדיין לא רשומים לאתר?',
    signup_here: 'הירשמו פה'
  },
  profile: {
    headline: 'פרופיל',
    first_name: 'שם פרטי',
    last_name: 'שם משפחה',
    email: 'דואר אלקטרוני',
    id: 'תעודת זהות',
    cell_number: 'מס׳ סלולרי',
    another_phone: 'טלפון נוסף',
    address: 'כתובת',
    instructor_type: 'סוג משתמש',
    membership_number: 'מס׳ חבר',
    select: 'בחר/י',
    max_parallel_orders: 'מקסימום הזמנות במקביל'
  },
  user_menu_headlines: {
    main_page: 'ראשי',
    contact_us: 'צור קשר',
    profile: 'פרופיל',
    logout: 'התנתק'
  },
  edit_user: {
    first_name: 'שם פרטי',
    last_name: 'שם משפחה',
    email: 'דואר אלקטרוני',
    id: 'תעודת זהות',
    cell_number: 'מס׳ סלולרי',
    another_phone: 'טלפון נוסף',
    address: 'כתובת',
    instructor_type: 'סוג משתמש',
    membership_number: 'מס׳ חבר',
    max_parallel_orders: 'מקסימום הזמנות במקביל',
    membership_paid: 'שילם חברות',
    admin: 'מנהל',
    headline: 'עריכת פרטי משתמש',
    save_button: 'שמור',
    cancel_button: 'ביטול',
    save_changes_modal_headline: 'שמירת שינויים',
    save_changes_modal_content: 'האם אתה בטוח שברצונך לשמור את השינויים?',
    changes_succussfully_saved_modal_title: 'השינויים נשמרו בהצלחה',
    changes_succussfully_saved_modal_content: '',
    yes: 'כן',
    no: 'לא'
  },
  table: {
    show_more_details: 'הצג פרטים נוספים',
    show_less_details: 'הסתר פרטים',
    presenting_results: 'מציג תוצאות',
    out_of: 'מתוך',
    search: 'חיפוש',
    export: 'ייצא רשימת'
  },
  dances_table: {
    dance_name: 'שם ריקוד',
    status: 'סטטוס',
    choreographer: 'מחבר',
    style: 'סוג ריקוד',
    performer: 'שם מבצע',
    composer: 'שם מלחין',
    lyricist: 'שם משורר',
    approval_date: 'תאריך אישור הזמנה',
    request_date: 'תאריך הזמנה',
    akum_id: 'מס׳ יצירה אקו״ם',
    edit: 'עריכה',
    user_details: 'פרטי המשתמש'
  },
  dances_table_filters: {
    dances_title: 'ריקודים',
    status: 'סטטוס ריקוד',
    choreographer: 'שם מחבר',
    style: 'סוג ריקוד',
    performer: 'מבצע',
    composer: 'מלחין',
    lyricist: 'משורר'
  },
  dances_expanded_row: {
    original_name: 'שם יצירה מקורי',
    co_choreographers: 'מחברים נוספים',
    request_date: 'תאריך הזמנה',
    approval_date: 'תאריך אישור הזמנה',
    completion_date: 'שנת ריקוד',
    notes: 'הערות',
    link_to_lyrics: 'קישור למילות השיר',
    link_to_original_song: 'וידאו שיר מקורי',
    link_to_dance_video: 'סרטון ריקוד'
  },
  users_table: {
    first_name: 'שם פרטי',
    last_name: 'שם משפחה',
    status: 'סטטוס',
    ordered: 'מוזמנים',
    confirmed: 'מאושרים',
    exists: 'קיימים',
    max_parallel_orders: 'מקס׳ הז׳ במקביל',
    admin: 'מנהל',
    dances: 'ריקודים',
    edit: 'עריכה'
  },
  users_table_filters: {
    users_title: 'משתמשים',
    search: 'חיפוש משתמשים',
    choreographer_type: 'סוג משתמש',
    status: 'סטטוס',
    max_parallel_orders: 'מספר הזמנות מקסימלי'
  },
  users_expanded_row: {
    cell: 'מס׳ סלולרי',
    another_phone: 'טלפון נוסף',
    address: 'כתובת',
    member_id: 'מס׳ חבר',
    choreographer_type: 'סוג משתמש',
    email: 'דואר אלקטרוני'
  },
  logs_table: {
    action: 'סוג פעולה',
    created: 'תאריך',
    user_name: 'משתמש מבצע',
    user_email: 'אימייל מ.מבצע',
    user_is_admin: 'סוג מ.מבצע',
    dance_name: 'שם ריקוד',
    target_user_name: 'משתמש מטרה',
    target_user_email: 'אימייל משתמש מטרה',
    description: 'תיאור',
    target_group: 'נמענים'
  },
  logs_table_filters: {
    logs_title: 'פעולות מערכת',
    search: 'חיפוש',
    action_type: 'סוג פעולה',
    choreographer_name: 'שם משתמש מבצע',
    user_type: 'סוג משתמש מבצע',
    from_date: 'מתאריך',
    to_date: 'עד תאריך'
  },
  settings_headers: {
    email_distributor: 'עורך הפצת אימיילים',
    email_editor: 'עריכת אימיילים',
    general: 'הגדרות כלליות',
    users_log: 'לוג משתמשים'
  },
  buttons: {
    add_new_dance: 'רישום שיר חדש',
    pay_membership: 'תשלום דמי חבר',
    to_year: 'לשנת',
    remaining: 'עוד',
    songs: 'שירים'
  },
  edit_dance: {
    ordered_by: 'מוזמן ע״י',
    song_name: 'שם שיר',
    status: 'סטטוס',
    edit_dance: 'עריכת ריקוד',
    add_dance: 'רישום ריקוד',
    select: 'בחר/י',
    dance_style: 'סוג הריקוד',
    co_choreographers: 'מחברים נוספים',
    order_date_and_time: 'תאריך ושעת הזמנה',
    compeletion_date: 'תאריך סיום',
    link_to_dance: 'קישור לסרטון הריקוד',
    link_to_song: 'קישור לסרטון שיר',
    link_to_lyrics: 'לינק למילות השיר',
    notes: 'הערות',
    additional_info: 'במידה ובקשת רישום הריקוד תאושר, תדרשו להוסיף קישור לסרטון הריקוד על מנת להפוך את בקשתכם לריקוד קיים.',
    minimum_search_length_error: 'עליך להכניס טקסט עם לפחות 3 תווים',
    search_song_in_akum: 'חיפוש שיר באקו״ם',
    canael_order: 'ביטול הזמנה',
    cancel_edit: 'ביטול עריכה',
    dance_name_changeable: 'שם ריקוד (ניתן לשינוי)',
    perform_new_akum_search: 'בצע חיפוש חדש באקו״ם',
    original_song_name: 'שם שיר מקורי',
    akum_id: 'מספר יצירה באקו״ם',
    translated_version_id: 'מספר יצירה מקורית',
    song_publication_year: 'שנת פרסום שיר',
    performer: 'שם מבצע',
    composer: 'שם מלחין',
    lyricist: 'שם משורר',
    approval_date: 'תאריך אישור הזמנה',
    manual_registration_request: 'אנא מלא את פרטי השיר ידנית, או',
    perform_new_search: 'בצע חיפוש שיר באקום מחדש',
    required_fields: 'שדות חובה',
    no_akum_search_error: 'טרם בוצע חיפוש שיר באקו״ם',
    save: 'שמור',
    send_request: 'שלח בקשה',
    delete_dance: 'מחק ריקוד',
    reject_dance: 'דחה ריקוד',
    confirm_delete_dance: 'האם אתה בטוח שברצונך למחוק את הריקוד?',
    confirm_reject_dance: 'האם אתה בטוח שברצונך לדחות את הריקוד?',
    confirm_request: 'אישור הזמנה',
    confirm_confirm_request: 'האם אתה בטוח שברצונך לאשר את הזמנת הריקוד?',
    make_dance_exist: 'הפוך לריקוד קיים',
    confirm_make_dance_exist: 'האם אתה בטוח שברצונך לאשר את הריקוד ולהפוך אותו לריקוד קיים?',
    reject_reason: 'סיבת הדחיה',
    delete_reason: 'סיבת המחיקה',
    confirm_reason: 'סיבת האישור',
    input_missing: 'אחד (או יותר) משדות החובה ריקים'
  },
  modals: {
    confirm: 'אישור',
    error: 'שגיאה',
    dance_updated_successfully: 'הריקוד התעדכן בהצלחה',
    back_to_dances_screen: 'חזרה לעמוד הריקודים',
    request_recieved: 'בקשתך התקבלה!',
    request_under_review: 'מנהלי המערכת בוחנים את בקשתך ויעדכנו בהקדם',
    video_url_empty: 'שדה קישור לסרטון הריקוד ריק',
    video_url_empty_description: 'לא ניתן להפוך לריקוד קיים בלי קישור לסרטון הריקוד'
  },
  akum_results_table: {
    back_to_add_dance: 'חזרה לעמוד רישום ריקוד',
    search_of_song: 'חיפוש השיר',
    in_the_database_of: 'במאגר המידע של אקו״ם',
    cant_find_the_song: 'לא מוצא את השיר?',
    fill_song_manualy: 'ומלא את פרטי השיר ידנית',
    work_name: 'שם יצירה',
    work_id: 'מס יצירה',
    composer: 'מלחין',
    lyricist: 'משורר',
    performer: 'מבצע',
    show_versions: 'הצג גרסאות',
    choose_version: 'בחר גרסה',
    musical_versions: 'יצירות/גרסות מוזיקליות',
    translated_versions: 'יצירות מתורגמות',
    songs: 'שירים',
    filter_by_performer: 'סנן לפי שם מבצע',
    search_song_and_performer: 'חיפוש שיר ומבצע באקו״ם',
    minimum_search_length_error: 'עליך להכניס טקסט עם לפחות 3 תווים',
    version_search_for_song: 'חיפוש גירסה לשיר',
    cant_find_the_version: 'לא מוצא את הגרסה?',
    and_go_back_to_songs_screen: 'וחזור לעמוד השירים',
    version_number: 'גרסה מס׳',
    publication_date: 'תאריך פרסום',
    dance_alreay_exists: 'הריקוד כבר קיים במערכת',
    click_here: 'לחץ כאן'
  },
  headers: {
    dances: 'ריקודים',
    my_dances: 'הריקודים שלי',
    users: 'משתמשים',
    settings: 'הגדרות',
    hello: 'שלום'
  }
});

/***/ }),

/***/ "./src/navigation/NavigationRouter.js":
/*!********************************************!*\
  !*** ./src/navigation/NavigationRouter.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Page_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Page/Header */ "./src/components/Page/Header.js");
/* harmony import */ var _components_Page_HeaderTopPart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Page/HeaderTopPart */ "./src/components/Page/HeaderTopPart.js");
/* harmony import */ var _screens_DancesScreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @screens/DancesScreen */ "./src/screens/DancesScreen.js");
/* harmony import */ var _screens_SettingsScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @screens/SettingsScreen */ "./src/screens/SettingsScreen.js");
/* harmony import */ var _screens_LandingPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @screens/LandingPage */ "./src/screens/LandingPage.js");
/* harmony import */ var _screens_Users__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @screens/Users */ "./src/screens/Users.js");
/* harmony import */ var _screens_LoginScreen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @screens/LoginScreen */ "./src/screens/LoginScreen.js");
/* harmony import */ var _screens_Signup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @screens/Signup */ "./src/screens/Signup.js");
/* harmony import */ var _screens_EditUser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @screens/EditUser */ "./src/screens/EditUser.js");
/* harmony import */ var _screens_AddEditDanceScreen__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @screens/AddEditDanceScreen */ "./src/screens/AddEditDanceScreen.js");
/* harmony import */ var _screens_AcumSongs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @screens/AcumSongs */ "./src/screens/AcumSongs.js");
/* harmony import */ var _screens_AcumVersions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @screens/AcumVersions */ "./src/screens/AcumVersions.js");
/* harmony import */ var _screens_ResetPassword__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @screens/ResetPassword */ "./src/screens/ResetPassword.js");
/* harmony import */ var _screens_ForgotPassword__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @screens/ForgotPassword */ "./src/screens/ForgotPassword.js");
/* harmony import */ var _screens_SignupSuccess__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @screens/SignupSuccess */ "./src/screens/SignupSuccess.js");
/* harmony import */ var _screens_UserProfile__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @screens/UserProfile */ "./src/screens/UserProfile.js");
/* harmony import */ var _state_uses_app__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @state/uses/app */ "./src/state/uses/app.js");
var _jsxFileName = "/Users/vitaly/markidim/src/navigation/NavigationRouter.js";



















/* harmony default export */ __webpack_exports__["default"] = (() => {
  const language = Object(_state_uses_app__WEBPACK_IMPORTED_MODULE_18__["useLanguage"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      direction: language === 'he' ? 'rtl' : 'ltr'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page_HeaderTopPart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/",
    component: _screens_LandingPage__WEBPACK_IMPORTED_MODULE_6__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/settings",
    component: _screens_SettingsScreen__WEBPACK_IMPORTED_MODULE_5__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/dances",
    component: _screens_DancesScreen__WEBPACK_IMPORTED_MODULE_4__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/users",
    component: _screens_Users__WEBPACK_IMPORTED_MODULE_7__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/login",
    component: _screens_LoginScreen__WEBPACK_IMPORTED_MODULE_8__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/signup",
    component: _screens_Signup__WEBPACK_IMPORTED_MODULE_9__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/dance",
    component: _screens_AddEditDanceScreen__WEBPACK_IMPORTED_MODULE_11__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/edit_user/:id",
    component: _screens_EditUser__WEBPACK_IMPORTED_MODULE_10__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/acum_search_song",
    component: _screens_AcumSongs__WEBPACK_IMPORTED_MODULE_12__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/acum_search_version",
    component: _screens_AcumVersions__WEBPACK_IMPORTED_MODULE_13__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/reset_password",
    component: _screens_ResetPassword__WEBPACK_IMPORTED_MODULE_14__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/forgot_password",
    component: _screens_ForgotPassword__WEBPACK_IMPORTED_MODULE_15__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/signup_success",
    component: _screens_SignupSuccess__WEBPACK_IMPORTED_MODULE_16__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/user_profile",
    component: _screens_UserProfile__WEBPACK_IMPORTED_MODULE_17__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  })));
});

/***/ }),

/***/ "./src/screens/AcumSongs.js":
/*!**********************************!*\
  !*** ./src/screens/AcumSongs.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @constants/colors */ "./src/constants/colors.js");
/* harmony import */ var _services_urlUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/urlUtils */ "./src/services/urlUtils.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _state_uses_dances__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @state/uses/dances */ "./src/state/uses/dances.js");
/* harmony import */ var _state_actions_dances__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @state/actions/dances */ "./src/state/actions/dances.js");
/* harmony import */ var _components_AcumSearch_AcumSongsTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/AcumSearch/AcumSongsTable */ "./src/components/AcumSearch/AcumSongsTable.js");
/* harmony import */ var _components_Buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/Buttons/SubmitButton */ "./src/components/Buttons/SubmitButton.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
var _jsxFileName = "/Users/vitaly/markidim/src/screens/AcumSongs.js";












/* harmony default export */ __webpack_exports__["default"] = (() => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])();
  const {
    song
  } = _services_urlUtils__WEBPACK_IMPORTED_MODULE_4__["default"].getQueryParams() || {};
  const danceOnAddProcess = Object(_state_uses_dances__WEBPACK_IMPORTED_MODULE_6__["useDanceOnAddProcess"])();
  const [term, setTerm] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const saveFromReAkumSearch = Object(_state_uses_dances__WEBPACK_IMPORTED_MODULE_6__["useSaveFromReAkumSearch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (song) {
      setTerm(song);
      console.log(term, 'tteerrrmmmm');
    }
  }, [song]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!danceOnAddProcess) {
      history.push('dance');
    }
  }, []);

  const onSongNotFound = () => {
    danceOnAddProcess.song = Object.assign({}, danceOnAddProcess.song, {
      akum_id: 'not_found'
    });
    dispatch(Object(_state_actions_dances__WEBPACK_IMPORTED_MODULE_7__["setDanceOnAddProcess"])(danceOnAddProcess));
    history.push({
      pathname: 'dance'
    });
  };

  const backToAddDance = () => {
    (danceOnAddProcess === null || danceOnAddProcess === void 0 ? void 0 : danceOnAddProcess.id) ? history.push({
      pathname: '/dance',
      search: danceOnAddProcess.id
    }) : history.push({
      pathname: '/dance'
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_10__["MainPageWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageHeaderRow, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BackButtonContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('akum_results_table.back_to_add_dance'),
    backgroundColor: _constants_colors__WEBPACK_IMPORTED_MODULE_3__["default"].BACK_BUTTON,
    onClick: backToAddDance,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_10__["PageHeader"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('akum_results_table.search_of_song'), " -", ' ', danceOnAddProcess === null || danceOnAddProcess === void 0 ? void 0 : danceOnAddProcess.name, " -", ' ', _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('akum_results_table.in_the_database_of')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_10__["Flex1"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  })), !saveFromReAkumSearch && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_10__["PageSubTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('akum_results_table.cant_find_the_song'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_10__["TextBtn"], {
    onClick: onSongNotFound,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('akum_results_table.click_here')), _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('akum_results_table.fill_song_manualy')), term && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AcumSearch_AcumSongsTable__WEBPACK_IMPORTED_MODULE_8__["default"], {
    term: term,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 22
    }
  }));
});
const PageHeaderRow = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "AcumSongs__PageHeaderRow",
  componentId: "im0dao-0"
})(["\n    display: flex;\n    width: 100%;\n    @media (max-width: 1000px) {\n        display: initial;\n    }\n"]);
const BackButtonContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_appearance_styled__WEBPACK_IMPORTED_MODULE_10__["SubmitBtnContainer"]).withConfig({
  displayName: "AcumSongs__BackButtonContainer",
  componentId: "im0dao-1"
})(["\n    padding: 0px 20px;\n    justify-content: flex-start;\n"]);

/***/ }),

/***/ "./src/screens/AcumVersions.js":
/*!*************************************!*\
  !*** ./src/screens/AcumVersions.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_urlUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/urlUtils */ "./src/services/urlUtils.js");
/* harmony import */ var _components_AcumSearch_AcumVersionsTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/AcumSearch/AcumVersionsTable */ "./src/components/AcumSearch/AcumVersionsTable.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
/* harmony import */ var _state_uses_songs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @state/uses/songs */ "./src/state/uses/songs.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _state_uses_dances__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @state/uses/dances */ "./src/state/uses/dances.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
var _jsxFileName = "/Users/vitaly/markidim/src/screens/AcumVersions.js";









/* harmony default export */ __webpack_exports__["default"] = (() => {
  var _danceOnAddProcess$so;

  const queryParams = _services_urlUtils__WEBPACK_IMPORTED_MODULE_1__["default"].getQueryParams();
  const [songId, setSongId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])();
  const danceOnAddProcess = Object(_state_uses_dances__WEBPACK_IMPORTED_MODULE_6__["useDanceOnAddProcess"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (queryParams) {
      setSongId(queryParams.id);
    }
  }, [queryParams]);

  const goBack = () => {
    const paramsString = localStorage.getItem('@markidim:song_search_state');
    history.push({
      pathname: 'acum_search_song',
      search: paramsString
    });
  };

  const songName = danceOnAddProcess === null || danceOnAddProcess === void 0 ? void 0 : (_danceOnAddProcess$so = danceOnAddProcess.song) === null || _danceOnAddProcess$so === void 0 ? void 0 : _danceOnAddProcess$so.name;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_3__["MainPageWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_3__["PageHeader"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, _localization_i18n__WEBPACK_IMPORTED_MODULE_7__["default"].t('akum_results_table.version_search_for_song'), " -", ' ', songName, " - ", _localization_i18n__WEBPACK_IMPORTED_MODULE_7__["default"].t('akum_results_table.in_the_database_of')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_3__["PageSubTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, _localization_i18n__WEBPACK_IMPORTED_MODULE_7__["default"].t('akum_results_table.cant_find_the_version'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_3__["TextBtn"], {
    onClick: goBack,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, _localization_i18n__WEBPACK_IMPORTED_MODULE_7__["default"].t('akum_results_table.click_here')), _localization_i18n__WEBPACK_IMPORTED_MODULE_7__["default"].t('akum_results_table.and_go_back_to_songs_screen')), songId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AcumSearch_AcumVersionsTable__WEBPACK_IMPORTED_MODULE_2__["default"], {
    songId: songId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 24
    }
  }));
});

/***/ }),

/***/ "./src/screens/AddEditDanceScreen.js":
/*!*******************************************!*\
  !*** ./src/screens/AddEditDanceScreen.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _state_uses_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @state/uses/users */ "./src/state/uses/users.js");
/* harmony import */ var _state_uses_dances__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @state/uses/dances */ "./src/state/uses/dances.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/api */ "./src/services/api.js");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils */ "./src/services/utils.js");
/* harmony import */ var _services_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/layout */ "./src/services/layout.js");
/* harmony import */ var _components_Form_TextInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/Form/TextInput */ "./src/components/Form/TextInput.js");
/* harmony import */ var _components_Form_SelectInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/Form/SelectInput */ "./src/components/Form/SelectInput.js");
/* harmony import */ var _components_Form_MultiSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/Form/MultiSelect */ "./src/components/Form/MultiSelect.js");
/* harmony import */ var _components_Form_TextAreaInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/Form/TextAreaInput */ "./src/components/Form/TextAreaInput.js");
/* harmony import */ var _components_Form_StaticLabeledText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @components/Form/StaticLabeledText */ "./src/components/Form/StaticLabeledText.js");
/* harmony import */ var _components_Form_RequiredText__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @components/Form/RequiredText */ "./src/components/Form/RequiredText.js");
/* harmony import */ var _components_AddEditDance_SongDetails__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @components/AddEditDance/SongDetails */ "./src/components/AddEditDance/SongDetails.js");
/* harmony import */ var _components_AddEditDance_DanceSubmit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @components/AddEditDance/DanceSubmit */ "./src/components/AddEditDance/DanceSubmit.js");
/* harmony import */ var _components_Form_MaterialDatePicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @components/Form/MaterialDatePicker */ "./src/components/Form/MaterialDatePicker.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
/* harmony import */ var grommet_controls__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! grommet-controls */ "./node_modules/grommet-controls/index.es.js");
/* harmony import */ var _services_urlUtils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @services/urlUtils */ "./src/services/urlUtils.js");
/* harmony import */ var _services_dances__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @services/dances */ "./src/services/dances.js");
/* harmony import */ var _components_AddEditDance_StatusProgressButton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @components/AddEditDance/StatusProgressButton */ "./src/components/AddEditDance/StatusProgressButton.js");
var _jsxFileName = "/Users/vitaly/markidim/src/screens/AddEditDanceScreen.js";

























const getUserFullName = user => user && user.first_name + ' ' + user.last_name;

const combineSelectedChoreographers = (dance, setSelectedCoChoreographers) => {
  let selectedFilters = [];
  const selectedFromArr = Object(_services_dances__WEBPACK_IMPORTED_MODULE_21__["getCoChoreographersText"])(dance === null || dance === void 0 ? void 0 : dance.co_choreographers);
  const selectedFromString = getSelectedFromString(dance === null || dance === void 0 ? void 0 : dance.co_choreographers_string); //console.log('selectedFromString = ', selectedFromString)
  //selectedFilters = selectedFromArr.concat(selectedFromString)

  selectedFilters = mergeFilters(dance, selectedFromArr, selectedFromString); //console.log('selectedFilters23451235123 = ', selectedFilters)

  return selectedFilters;
};

const getSelectedFromString = co_choreographers_string => {
  if (co_choreographers_string === '') return [];
  const resArr = [];
  const coChoreographersArr = co_choreographers_string === null || co_choreographers_string === void 0 ? void 0 : co_choreographers_string.split(', ');
  coChoreographersArr && coChoreographersArr.map(item => {
    resArr.push({
      label: item,
      value: item
    });
  });
  return resArr;
};

const mergeFilters = (dance, filtersArr1, filtersArr2) => {
  const choreographerFullName = getUserFullName(dance === null || dance === void 0 ? void 0 : dance.choreographer);
  let res = filtersArr1.filter(filter => {
    return filter.label !== choreographerFullName;
  });
  const arrayOfLabelsSelected = res.map(filter => {
    return filter.label;
  });
  filtersArr2 && filtersArr2.map(filter => {
    if (!arrayOfLabelsSelected.includes(filter.label) && filter.label !== choreographerFullName) {
      res.push(filter);
    }
  });
  return res;
};

/* harmony default export */ __webpack_exports__["default"] = (() => {
  const user = Object(_state_uses_users__WEBPACK_IMPORTED_MODULE_3__["useUser"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  const dancesLeft = Object(_state_uses_users__WEBPACK_IMPORTED_MODULE_3__["useDancesLeft"])();
  const buttonWidth = Object(_services_layout__WEBPACK_IMPORTED_MODULE_7__["useButtonWidth"])();
  const danceOnAddProcess = Object(_state_uses_dances__WEBPACK_IMPORTED_MODULE_4__["useDanceOnAddProcess"])();
  const {
    id,
    ri
  } = _services_urlUtils__WEBPACK_IMPORTED_MODULE_20__["default"].getQueryParams();
  const [danceStylesOptions, setDanceStyleOptions] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [choreographsOptions, setChoreographsOptions] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [dance, setDance] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(id ? null : _services_dances__WEBPACK_IMPORTED_MODULE_21__["defaultDance"]);
  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [selectedDate, setSelectedDate] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [selectedCoChoreographers, setSelectedCoChoreographers] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(combineSelectedChoreographers(dance));
  const [shouldFixCoChoreographers, setShouldFixCoChoreographers] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const requiredFieldEmptyText = _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.input_missing');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (dance) {
      checkFormValidation();
      setSelectedDate(_services_utils__WEBPACK_IMPORTED_MODULE_6__["formatDate"](dance.completion_date, _services_dances__WEBPACK_IMPORTED_MODULE_21__["datePickerFormat"]));
      setSelectedCoChoreographers(combineSelectedChoreographers(dance));
    }
  }, [dance]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (dance && selectedCoChoreographers && shouldFixCoChoreographers) {
      fixCoChoreographsObj(selectedCoChoreographers);
      setShouldFixCoChoreographers(false);
    }
  }, [shouldFixCoChoreographers]);

  const setDanceProperty = (propertyObj, secondPropObj) => {
    setDance(Object.assign({}, dance, propertyObj, secondPropObj));
  };

  const onCoChoreographersChange = coChoreographersObj => {
    const co_choreographers_string = updateCoChoreographersString(coChoreographersObj);
    dance.co_choreographers_string = co_choreographers_string;
    setDanceProperty({
      co_choreographers_string
    });
    fixCoChoreographsObj(coChoreographersObj);
    return;
  };

  const updateCoChoreographersString = coChoreographersObj => {
    var _co_choreographers_st;

    let co_choreographers_string = '';
    coChoreographersObj && coChoreographersObj.map((item, index) => {
      co_choreographers_string += item.label + ', ';
    });
    co_choreographers_string = (_co_choreographers_st = co_choreographers_string) === null || _co_choreographers_st === void 0 ? void 0 : _co_choreographers_st.slice(0, -2);
    return co_choreographers_string;
  };

  const checkFormValidation = () => {
    setError(null);

    if (!dance.name || !dance.song.name) {
      setError(requiredFieldEmptyText);
    }

    if (dance.song.akum_id === 'not_found' && (!dance.performer || // (!dance.song.performer ||
    !dance.song.composer || !dance.song.lyricist)) {
      setError(requiredFieldEmptyText);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    throwBackIfNotPermitted();

    if (id) {
      Object(_services_dances__WEBPACK_IMPORTED_MODULE_21__["getDanceById"])(id, setDance);
    }

    getDanceStylesOptions();
    getChoreographsOptions('');
  }, []); // run on init

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (user && !id) {
      addChoreographerIdKey(user);
    }
  }, [user]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!id && danceOnAddProcess) {
      setDance(danceOnAddProcess);
    }
  }, [danceOnAddProcess]);

  const throwBackIfNotPermitted = () => {
    if (user && dance) {
      if (dance.id && dance.choreographer.id !== user.user_id && !user.is_admin) {
        // console.log('throwBackIfNotPermitted dance exist')
        history.goBack();
      }

      if (!dance.id && dancesLeft < 1 || user && user.is_suspended) {
        // console.log('throwBackIfNotPermitted dance NOT exist')
        history.goBack();
      }
    }
  };

  const addChoreographerIdKey = user => {
    let fixedChor = user;
    fixedChor.id = user.user_id;
    setDance(Object.assign({}, dance, {
      choreographer: fixedChor
    }));
  };

  const getDanceStylesOptions = () => {
    _services_api__WEBPACK_IMPORTED_MODULE_5__["default"].getDanceStylesOptions().subscribe(res => {
      setDanceStyleOptions(res.data.res);
    }, error => console.log('getDancesTypes from api error', error));
  };

  const isTextInArr = (text, arr) => {
    let res = false;
    arr.map(obj => {
      if (obj.label === text) res = true;
    });
    return res;
  };

  const getChoreographsOptions = inputText => {
    const newCoChoreographer = {
      label: inputText + ' (הוסף חדש)',
      value: inputText
    };
    _services_api__WEBPACK_IMPORTED_MODULE_5__["default"].getFilterOptions('dances', 'choreographer', ['first_name', 'last_name'], inputText).subscribe(res => {
      console.log('getDancesTypes from api res', res);

      if (res.data.length > 0) {
        let filterOptions = res.data;
        !isTextInArr(inputText, filterOptions) && filterOptions.push(newCoChoreographer);
        setChoreographsOptions(filterOptions);
      } else {
        setChoreographsOptions([newCoChoreographer]);
      }
    }, error => {
      setChoreographsOptions([newCoChoreographer]);
      console.log('getDancesTypes from api error', error);
    });
  };

  const updateSongDetail = detailObj => {
    const newSong = Object.assign({}, dance.song, detailObj);
    setDanceProperty({
      song: newSong
    });
  };

  const updateSongAndDanceName = name => {
    const newSong = Object.assign({}, dance.song, {
      name
    });
    setDanceProperty({
      song: newSong
    }, {
      name
    });
  };

  const fixCoChoreographsObj = (coChoreographsObj, returnVal = false) => {
    // make sure co_cChoreographers obj has 'id' and not 'value'
    //console.log('got onew filtes = ', coChoreographsObj)
    // setDanceProperty({ co_choreographers: { coChoreographsObj } })
    //const hebExpression = '(הוסף חדש)'
    let fixedObj = [];

    if (coChoreographsObj) {
      coChoreographsObj.forEach(coChoreographer => {
        if (coChoreographer.value) {
          // if (coChoreographer.label.indexOf(hebExpression) < 1)
          fixedObj.push({
            id: coChoreographer.value,
            label: coChoreographer.label
          });
        } else {
          fixedObj.push(coChoreographer);
        }
      });
    }

    if (!returnVal) {
      setDanceProperty({
        co_choreographers: fixedObj
      });
    } else return fixedObj;
  };

  const showVideoExplanationText = () => !dance.status || dance.status === _components_AddEditDance_StatusProgressButton__WEBPACK_IMPORTED_MODULE_22__["DANCE_STATUS_ORDERED"];

  const showFullForm = () => {
    var _dance$song;

    return dance.id || !_services_utils__WEBPACK_IMPORTED_MODULE_6__["isEmptyStr"](dance === null || dance === void 0 ? void 0 : (_dance$song = dance.song) === null || _dance$song === void 0 ? void 0 : _dance$song.akum_id);
  };

  if (!user) {
    return null;
  }

  if (!dance) {
    return null;
  }

  const convertDateToTimestamp = date => {
    return new Date(date).getTime();
  };

  const onDateSelect = date => {
    setSelectedDate(_services_utils__WEBPACK_IMPORTED_MODULE_6__["formatDate"](convertDateToTimestamp(date), _services_dances__WEBPACK_IMPORTED_MODULE_21__["datePickerFormat"]));
    setDanceProperty({
      completion_date: convertDateToTimestamp(date)
    });
  };

  const checkPermissionByField = field => {
    if (user === null || user === void 0 ? void 0 : user.is_admin) return true;
    const status = dance.status;
    if (!status) return true;
    if (_components_AddEditDance_StatusProgressButton__WEBPACK_IMPORTED_MODULE_22__["DANCE_STATUS_EXISTS"] === status) return false;
    if (_components_AddEditDance_StatusProgressButton__WEBPACK_IMPORTED_MODULE_22__["DANCE_STATUS_ORDERED"] === status) return true;

    if (_components_AddEditDance_StatusProgressButton__WEBPACK_IMPORTED_MODULE_22__["DANCE_STATUS_APPROVED"] === status) {
      if (field === 'performer') return false;
    }

    return true;
  };

  const extractCoChoreographersString = () => {
    let res = [];

    for (let i = 0; i < selectedCoChoreographers.length; i++) {
      res.push(selectedCoChoreographers[i].label.trim());
    }

    return res.join(', ');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Main, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FirstSection, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_17__["PageHeader"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 17
    }
  }, dance.id ? _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.edit_dance') : _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.add_dance')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_17__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_StaticLabeledText__WEBPACK_IMPORTED_MODULE_12__["default"], {
    text: getUserFullName(dance.choreographer),
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.ordered_by'),
    width: buttonWidth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 21
    }
  }), dance.status ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_StaticLabeledText__WEBPACK_IMPORTED_MODULE_12__["default"], {
    text: dance.status,
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.status'),
    width: buttonWidth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 25
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex1, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex1, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AddEditDance_SongDetails__WEBPACK_IMPORTED_MODULE_14__["default"], {
    user: user,
    dance: dance,
    ri: ri,
    updateSong: song => setDanceProperty({
      song
    }),
    updateSongAndDanceName: updateSongAndDanceName,
    setDanceProperty: setDanceProperty,
    checkPermissionByField: checkPermissionByField,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 17
    }
  })), showFullForm() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_17__["FormWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_17__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 21
    }
  }, checkPermissionByField() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_SelectInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
    value: dance === null || dance === void 0 ? void 0 : dance.style,
    placeholder: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.select'),
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.dance_style'),
    onSelect: style => {
      setDanceProperty({
        style
      });
    },
    options: danceStylesOptions,
    onError: () => console.log('ERRRR'),
    required: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 29
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_StaticLabeledText__WEBPACK_IMPORTED_MODULE_12__["default"], {
    text: dance.style,
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.dance_style'),
    width: buttonWidth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 29
    }
  }), checkPermissionByField() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_MultiSelect__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.co_choreographers'),
    placeholder: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.select'),
    value: selectedCoChoreographers,
    onChange: co_choreographers => onCoChoreographersChange(co_choreographers),
    onInputChange: text => _services_utils__WEBPACK_IMPORTED_MODULE_6__["onControlledChange"](text, 0, getChoreographsOptions),
    options: choreographsOptions,
    inputHeight: _services_layout__WEBPACK_IMPORTED_MODULE_7__["formInputHeight"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 29
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_StaticLabeledText__WEBPACK_IMPORTED_MODULE_12__["default"], {
    text: extractCoChoreographersString(),
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.co_choreographers'),
    order_date_and_time: true,
    width: buttonWidth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 29
    }
  })), dance.id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_17__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_StaticLabeledText__WEBPACK_IMPORTED_MODULE_12__["default"], {
    text: _services_utils__WEBPACK_IMPORTED_MODULE_6__["formatDate"](dance.request_date, _services_dances__WEBPACK_IMPORTED_MODULE_21__["requestDateFormat"]),
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.order_date_and_time'),
    width: buttonWidth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 29
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_StaticLabeledText__WEBPACK_IMPORTED_MODULE_12__["default"], {
    text: _services_utils__WEBPACK_IMPORTED_MODULE_6__["formatDate"](dance.approval_date, _services_dances__WEBPACK_IMPORTED_MODULE_21__["dateFormat"]),
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.approval_date'),
    width: buttonWidth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 29
    }
  }), (user === null || user === void 0 ? void 0 : user.is_admin) && dance.status === _components_AddEditDance_StatusProgressButton__WEBPACK_IMPORTED_MODULE_22__["DANCE_STATUS_EXISTS"] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_17__["FormInputContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_17__["FormInputLabel"], {
    lang: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].locale,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 37
    }
  }, _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.compeletion_date')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_MaterialDatePicker__WEBPACK_IMPORTED_MODULE_16__["default"], {
    startDate: selectedDate,
    onChange: onDateSelect,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 37
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_StaticLabeledText__WEBPACK_IMPORTED_MODULE_12__["default"], {
    text: _services_utils__WEBPACK_IMPORTED_MODULE_6__["formatDate"](dance.completion_date, _services_dances__WEBPACK_IMPORTED_MODULE_21__["completionDateFormat"]),
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.compeletion_date'),
    width: buttonWidth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 33
    }
  })), dance.status && dance.status !== _components_AddEditDance_StatusProgressButton__WEBPACK_IMPORTED_MODULE_22__["DANCE_STATUS_ORDERED"] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_17__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
    text: dance.video_url || '',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.link_to_dance'),
    onChangeText: video_url => setDanceProperty({
      video_url
    }),
    width: '100%',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 29
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_17__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
    text: dance.song.video_url || '',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.link_to_song'),
    onChangeText: video_url => updateSongDetail({
      video_url
    }),
    width: '100%',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_17__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
    text: dance.song.lyrics || '',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.link_to_lyrics'),
    onChangeText: lyrics => updateSongDetail({
      lyrics
    }),
    width: '100%',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_17__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextAreaInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
    text: dance.notes || '',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.notes'),
    onChangeText: notes => setDanceProperty({
      notes
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_17__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_RequiredText__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 25
    }
  })), showVideoExplanationText() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_17__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_17__["PageSubTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516,
      columnNumber: 29
    }
  }, _localization_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].t('edit_dance.additional_info'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AddEditDance_DanceSubmit__WEBPACK_IMPORTED_MODULE_15__["default"], {
    dance: dance,
    error: error,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 21
    }
  })));
});
const Main = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "AddEditDanceScreen__Main",
  componentId: "sc-4rgkbb-0"
})([""]);
const Flex1 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "AddEditDanceScreen__Flex1",
  componentId: "sc-4rgkbb-1"
})(["\n    flex: 1;\n    padding: 0 20px;\n"]);
const FirstSection = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_appearance_styled__WEBPACK_IMPORTED_MODULE_17__["FormWrapper"]).withConfig({
  displayName: "AddEditDanceScreen__FirstSection",
  componentId: "sc-4rgkbb-2"
})(["\n    margin-bottom: 20px;\n"]);

/***/ }),

/***/ "./src/screens/DancesScreen.js":
/*!*************************************!*\
  !*** ./src/screens/DancesScreen.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _state_uses_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @state/uses/users */ "./src/state/uses/users.js");
/* harmony import */ var _state_actions_dances__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @state/actions/dances */ "./src/state/actions/dances.js");
/* harmony import */ var _state_actions_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @state/actions/users */ "./src/state/actions/users.js");
/* harmony import */ var _components_Dances_DancesTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Dances/DancesTable */ "./src/components/Dances/DancesTable.js");
/* harmony import */ var _components_Dances_ActionButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/Dances/ActionButton */ "./src/components/Dances/ActionButton.js");
/* harmony import */ var _assets_images__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @assets/images */ "./src/assets/images/index.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/api */ "./src/services/api.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
/* harmony import */ var _services_urlUtils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/urlUtils */ "./src/services/urlUtils.js");
var _jsxFileName = "/Users/vitaly/markidim/src/screens/DancesScreen.js";














const yearToPay = new Date().getFullYear();
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const user = Object(_state_uses_users__WEBPACK_IMPORTED_MODULE_4__["useUser"])();
  const [formattedUser, setFormattedUser] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (user) {
      getFormatedUser(user.user_id);
    }
  }, [user]);

  const getFormatedUser = userId => {
    _services_api__WEBPACK_IMPORTED_MODULE_11__["default"].getUserById(userId).subscribe(res => {
      console.log('getFormatedUser res', res.data);
      setFormattedUser(res.data);
    }, error => {
      console.log('getFormatedUser error', error);
    });
  };

  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const dancesLeft = Object(_state_uses_users__WEBPACK_IMPORTED_MODULE_4__["useDancesLeft"])();
  const [showAddDanceButton, setShowAddDanceButton] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const goToPayment = () => {
    alert('Payment page is under construction');
  };

  const goToAddDance = () => {
    var _window$location$sear, _window$location$sear2, _window$location$sear3;

    dispatch(Object(_state_actions_dances__WEBPACK_IMPORTED_MODULE_5__["setDanceOnAddProcess"])(null));
    const originalPage = (_window$location$sear = window.location.search) === null || _window$location$sear === void 0 ? void 0 : (_window$location$sear2 = _window$location$sear.split('page=')[1]) === null || _window$location$sear2 === void 0 ? void 0 : _window$location$sear2.split('&')[0];
    _services_urlUtils__WEBPACK_IMPORTED_MODULE_13__["default"].setQueryParams({
      originalPage
    });
    localStorage.setItem('@markidim:filter_state', (_window$location$sear3 = window.location.search) === null || _window$location$sear3 === void 0 ? void 0 : _window$location$sear3.slice(1));
    history.push({
      pathname: '/dance'
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_state_actions_users__WEBPACK_IMPORTED_MODULE_6__["getCurrentUser"])(() => setShowAddDanceButton(true)));
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_10__["MainPageWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderBtnsContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, user && showAddDanceButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dances_ActionButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_12__["default"].t('buttons.add_new_dance'),
    onClick: goToAddDance,
    bgColor: 'rgb(83,71,103)',
    icon: _assets_images__WEBPACK_IMPORTED_MODULE_9__["plusIcon"],
    smallText: _localization_i18n__WEBPACK_IMPORTED_MODULE_12__["default"].locale === 'en' ? (dancesLeft > 0 ? dancesLeft : 0) + ' ' + _localization_i18n__WEBPACK_IMPORTED_MODULE_12__["default"].t('buttons.songs') + ' ' + _localization_i18n__WEBPACK_IMPORTED_MODULE_12__["default"].t('buttons.remaining') : _localization_i18n__WEBPACK_IMPORTED_MODULE_12__["default"].t('buttons.remaining') + ' ' + (dancesLeft > 0 ? dancesLeft : 0) + ' ' + _localization_i18n__WEBPACK_IMPORTED_MODULE_12__["default"].t('buttons.songs'),
    disabled: dancesLeft < 1 || (formattedUser === null || formattedUser === void 0 ? void 0 : formattedUser.is_suspended),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dances_ActionButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_12__["default"].t('buttons.pay_membership'),
    onClick: goToPayment,
    bgColor: '#192F3A',
    icon: _assets_images__WEBPACK_IMPORTED_MODULE_9__["creditCardIcon"],
    smallText: _localization_i18n__WEBPACK_IMPORTED_MODULE_12__["default"].t('buttons.to_year') + ' ' + yearToPay,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dances_DancesTable__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }));
});
const HeaderBtnsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "DancesScreen__HeaderBtnsContainer",
  componentId: "sc-1q11pom-0"
})(["\n    width: 100%;\n    display: flex;\n    padding: 20px 20px 0px;\n    justify-content: flex-end;\n"]);

/***/ }),

/***/ "./src/screens/EditUser.js":
/*!*********************************!*\
  !*** ./src/screens/EditUser.js ***!
  \*********************************/
/*! exports provided: USER_STATUS_ACTIVE, USER_STATUS_SUSPENDED, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_STATUS_ACTIVE", function() { return USER_STATUS_ACTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_STATUS_SUSPENDED", function() { return USER_STATUS_SUSPENDED; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Form_TextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Form/TextInput */ "./src/components/Form/TextInput.js");
/* harmony import */ var _components_Form_SelectInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Form/SelectInput */ "./src/components/Form/SelectInput.js");
/* harmony import */ var _components_Buttons_LabeledToggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Buttons/LabeledToggle */ "./src/components/Buttons/LabeledToggle.js");
/* harmony import */ var _components_EditUser_EditUserSubmit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/EditUser/EditUserSubmit */ "./src/components/EditUser/EditUserSubmit.js");
/* harmony import */ var _services_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/layout */ "./src/services/layout.js");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils */ "./src/services/utils.js");
/* harmony import */ var _data_Users__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @data/Users */ "./src/data/Users.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
var _jsxFileName = "/Users/vitaly/markidim/src/screens/EditUser.js";












const USER_STATUS_ACTIVE = 'פעיל';
const USER_STATUS_SUSPENDED = 'מושהה';
/* harmony default export */ __webpack_exports__["default"] = (({}) => {
  const location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useLocation"])();
  const buttonWidth = Object(_services_layout__WEBPACK_IMPORTED_MODULE_7__["useButtonWidth"])();
  const preEditUser = location.state ? location.state.user : null;
  const [user, setUser] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(preEditUser);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!(user === null || user === void 0 ? void 0 : user.max_paralleled_orders) && (user === null || user === void 0 ? void 0 : user.dance_registered_limit)) {
      const max_paralleled_orders = user.dance_registered_limit;
      setUserProperty({
        max_paralleled_orders
      });
    }
  }, []);

  const setUserProperty = propertyObj => {
    setUser(Object.assign({}, user, propertyObj));
  };

  const toggleIsAdmin = () => {
    setUserProperty({
      is_admin: !user.is_admin
    });
  };

  const toggleIsSuspended = () => {
    setUserProperty({
      is_suspended: !user.is_suspended
    });
  };

  if (!user) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Main, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_10__["PageHeader"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('edit_user.headline')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_10__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: user.first_name,
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('edit_user.first_name'),
    onChangeText: first_name => setUserProperty({
      first_name
    }),
    width: buttonWidth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: user.last_name,
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('edit_user.last_name'),
    onChangeText: last_name => setUserProperty({
      last_name
    }),
    width: buttonWidth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: user.email,
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('edit_user.email'),
    onChangeText: email => setUserProperty({
      email
    }),
    width: buttonWidth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_10__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: user.id_number || '',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('edit_user.id'),
    type: "number",
    onChangeText: id_number => setUserProperty({
      id_number
    }),
    width: buttonWidth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: user.cellular || '',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('edit_user.cell_number'),
    type: "number",
    onChangeText: cellular => setUserProperty({
      cellular
    }),
    width: buttonWidth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: user.phone_num || '',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('edit_user.another_phone'),
    type: "number",
    onChangeText: phone_num => setUserProperty({
      phone_num
    }),
    width: buttonWidth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_10__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: user.address || '',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('edit_user.address'),
    onChangeText: address => setUserProperty({
      address
    }),
    width: '100%',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_10__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_SelectInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: user.choreographer_type || '',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('edit_user.instructor_type'),
    placeholder: _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('edit_dance.select'),
    onSelect: choreographer_type => setUserProperty({
      choreographer_type
    }),
    options: _data_Users__WEBPACK_IMPORTED_MODULE_9__["userTypes"],
    onError: error => console.log('setUserType selectInput error', error),
    required: false,
    width: buttonWidth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: user.member_id || '',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('edit_user.membership_number'),
    type: "number",
    onChangeText: member_id => setUserProperty({
      member_id
    }),
    width: buttonWidth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_SelectInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: user.max_paralleled_orders || '',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('edit_user.max_parallel_orders'),
    placeholder: _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('edit_dance.select'),
    onSelect: max_paralleled_orders => setUserProperty({
      max_paralleled_orders
    }),
    options: _services_utils__WEBPACK_IMPORTED_MODULE_8__["getArrayOfNum"](50),
    onError: error => console.log('max_paralleled_orders selectInput error', error),
    width: buttonWidth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_10__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons_LabeledToggle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: !user.is_suspended,
    onToggle: toggleIsSuspended,
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('edit_user.membership_paid'),
    width: buttonWidth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons_LabeledToggle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: user.is_admin || false,
    onToggle: toggleIsAdmin,
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('edit_user.admin'),
    width: buttonWidth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_10__["SubmitWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_EditUser_EditUserSubmit__WEBPACK_IMPORTED_MODULE_6__["default"], {
    user: user,
    preEditUser: preEditUser,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 21
    }
  }))));
});
const Main = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "EditUser__Main",
  componentId: "sc-1dutlj8-0"
})(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n"]);
const FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "EditUser__FormContainer",
  componentId: "sc-1dutlj8-1"
})(["\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n"]);

/***/ }),

/***/ "./src/screens/ForgotPassword.js":
/*!***************************************!*\
  !*** ./src/screens/ForgotPassword.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/layout */ "./src/services/layout.js");
/* harmony import */ var _components_Form_TextInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Form/TextInput */ "./src/components/Form/TextInput.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
/* harmony import */ var _components_Modals_MessageModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Modals/MessageModal */ "./src/components/Modals/MessageModal.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api */ "./src/services/api.js");
var _jsxFileName = "/Users/vitaly/markidim/src/screens/ForgotPassword.js";







/* harmony default export */ __webpack_exports__["default"] = (() => {
  const [email, setEmail] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [emailValid, setEmailValid] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [showDoneModal, setShowDoneModal] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [showErrorModal, setShowErrorModal] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const errorText = _localization_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('forgot_password.email_not_found');

  const formValid = () => emailValid;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setError(null);
    setErrorPerField(emailValid, _localization_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('forgot_password.unvalid_email'));
  }, [emailValid]);

  const setErrorPerField = (field, error) => {
    if (field === false) {
      setError(error);
    }
  };

  const doSubmit = () => {
    if (formValid()) {
      _services_api__WEBPACK_IMPORTED_MODULE_6__["default"].forgotPassword(email).subscribe(res => {
        setShowDoneModal(true); // console.log('resetPassword res', res)
      }, error => {
        setShowErrorModal(true);
        console.log('resetPassword error123', error);
      });
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_5__["WrapperDiv"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_5__["PageHeader"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, _localization_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('forgot_password.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_5__["PageSubTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, _localization_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('forgot_password.description')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_5__["FormWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_5__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_5__["ErrorText"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_5__["FormRow"], {
    justifyContent: 'center',
    alignItems: 'center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "email",
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('forgot_password.email'),
    text: email,
    onChangeText: setEmail,
    onError: err => setEmailValid(!err),
    required: true,
    width: _services_layout__WEBPACK_IMPORTED_MODULE_1__["wideFormInput"],
    hideRequiredSign: true,
    id: "input_for_email_to_reset_password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_5__["SubmitBtnContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_5__["SubmitBtn"], {
    onClick: doSubmit,
    disabled: !formValid(),
    "data-testid": "send_button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, _localization_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('forgot_password.send')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modals_MessageModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isOpen: showDoneModal,
    title: _localization_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('forgot_password.email_sent'),
    mainText: _localization_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('forgot_password.check_email'),
    onClose: () => setShowDoneModal(false),
    id: "confirm_modal_email_sent",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modals_MessageModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isOpen: showErrorModal,
    title: _localization_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('forgot_password.error'),
    mainText: errorText,
    onClose: () => setShowErrorModal(false),
    error: true,
    id: "error_modal_email_sent",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }));
});

/***/ }),

/***/ "./src/screens/LandingPage.js":
/*!************************************!*\
  !*** ./src/screens/LandingPage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
/* harmony import */ var _components_MainButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/MainButtons */ "./src/components/MainButtons.js");
/* harmony import */ var _state_uses_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @state/uses/users */ "./src/state/uses/users.js");
/* harmony import */ var _state_actions_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @state/actions/app */ "./src/state/actions/app.js");
/* harmony import */ var _state_uses_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @state/uses/app */ "./src/state/uses/app.js");
var _jsxFileName = "/Users/vitaly/markidim/src/screens/LandingPage.js";









const termsOfUseHeadline = '\n' + 'אז איך זה עובד?';
const welcomeFirstHeadline = 'ארגון המדריכים והיוצרים לריקודי עם';
const welcomeSecondHeadline = 'ברוכים הבאים למערכת רישום הריקודים של ארגון המדריכים והיוצרים!';
const explanationsHeadline = '\n' + 'יש 3 שלבים לריקוד';
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const tmpAppConfig = Object(_state_uses_app__WEBPACK_IMPORTED_MODULE_8__["useAppConfig"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  const user = Object(_state_uses_users__WEBPACK_IMPORTED_MODULE_6__["useUser"])();
  const [appConfig, setAppConfig] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(tmpAppConfig);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!tmpAppConfig) {
      dispatch(Object(_state_actions_app__WEBPACK_IMPORTED_MODULE_7__["getAppConfig"])(setAppConfig));
    } else {}
  }, [tmpAppConfig]);

  const goToLogin = () => {
    history.push('/login');
  };

  const goToSignup = () => {
    history.push('/signup');
  };

  const mainButtons = [{
    label: 'עדיין לא רשומים לאתר?',
    span: 'הירשמו פה',
    onClick: goToSignup,
    bgColor: '#192F3A',
    icon: ''
  }, {
    label: 'כניסה למערכת',
    span: 'למשתמשים רשומים',
    onClick: goToLogin,
    bgColor: 'rgb(83,71,103)',
    icon: ''
  }];
  const terms_of_use = appConfig === null || appConfig === void 0 ? void 0 : appConfig.terms_of_use;
  const explanations = appConfig === null || appConfig === void 0 ? void 0 : appConfig.explanations;
  const welcome = appConfig === null || appConfig === void 0 ? void 0 : appConfig.welcome;
  const reciepientsList = appConfig === null || appConfig === void 0 ? void 0 : appConfig.contact_us_list;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["ContentCenteredBox"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, !user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MainButtons__WEBPACK_IMPORTED_MODULE_5__["default"], {
    btnsArr: mainButtons,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 27
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, welcomeFirstHeadline), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, welcomeSecondHeadline), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, welcome === null || welcome === void 0 ? void 0 : welcome.split('\n').map(line => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 25
    }
  }, line))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ui", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }, termsOfUseHeadline), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, terms_of_use === null || terms_of_use === void 0 ? void 0 : terms_of_use.split('\n').map(line => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 25
    }
  }, line))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ui", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, explanationsHeadline), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, explanations === null || explanations === void 0 ? void 0 : explanations.split('\n').map(line => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 25
    }
  }, line))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: 'mailto:' + reciepientsList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, "\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8")));
});
const Wrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_appearance_styled__WEBPACK_IMPORTED_MODULE_4__["MainPageWrapper"]).withConfig({
  displayName: "LandingPage__Wrapper",
  componentId: "sc-187wimh-0"
})(["\n    padding-bottom: 40px;\n"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "LandingPage__Title",
  componentId: "sc-187wimh-1"
})(["\n    font-size: 32px;\n    margin: 20px 0px;\n    text-align: center;\n"]);
const SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h4.withConfig({
  displayName: "LandingPage__SubTitle",
  componentId: "sc-187wimh-2"
})(["\n    font-size: 20px;\n    margin-bottom: 8px;\n    margin-top: 12px;\n"]);
const Text = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "LandingPage__Text",
  componentId: "sc-187wimh-3"
})(["\n    margin-bottom: 20px;\n"]);
const TextTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h5.withConfig({
  displayName: "LandingPage__TextTitle",
  componentId: "sc-187wimh-4"
})(["\n    font-size: 20px;\n    margin-vertical: 8px;\n"]);
{
  /* <Text>
                  {terms_of_use}
                   כדי לדעת כמה ריקודים אתה יכול לרשום, עליך להיכנס ל״פרטים
                  אישיים״ ושם מצויין כמה ריקודים אתם רשאים להזמין ולרשום על
                  שמכם. את המדרג קבעו ועדת יוצרים בראשות ויקטור גבאי, במידה
                  ואתם רוצים לערער, עליכם לפנות ליושב ראש ועדת יוצרים והועדה
                  תדון ותחליט בהתאם. 
              </Text> */
}
{
  /* <Text>
  אנו שמחים להצטרפותך למערכת, בה תוכל באופן ישיר לרשום
  ריקודים, לראות ולקבל את כל המידע הדרוש לך. כדי להשתמש באתר
  זה עליך להיות חבר בארגון המרקידים והכוריאוגרפים לריקודי עם
  ולשלם דמי חבר כמרקיד, או יוצר שאינו מרקיד, ליו״ר ועדת הכספים
  - רפי כחלון בסך 300 ש״ח. 
  {welcome}
  </Text> */
}

/***/ }),

/***/ "./src/screens/LoginScreen.js":
/*!************************************!*\
  !*** ./src/screens/LoginScreen.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _state_uses_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @state/uses/users */ "./src/state/uses/users.js");
/* harmony import */ var _services_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/layout */ "./src/services/layout.js");
/* harmony import */ var _components_Form_TextInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Form/TextInput */ "./src/components/Form/TextInput.js");
/* harmony import */ var _components_Modals_MessageModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Modals/MessageModal */ "./src/components/Modals/MessageModal.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
/* harmony import */ var _state_actions_users__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @state/actions/users */ "./src/state/actions/users.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _state_uses_app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @state/uses/app */ "./src/state/uses/app.js");
/* harmony import */ var _state_actions_app__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @state/actions/app */ "./src/state/actions/app.js");
/* harmony import */ var _components_Dances_ActionButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @components/Dances/ActionButton */ "./src/components/Dances/ActionButton.js");
var _jsxFileName = "/Users/vitaly/markidim/src/screens/LoginScreen.js";















/* harmony default export */ __webpack_exports__["default"] = (() => {
  const errorTexts = {
    115: _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('login.user_blocked'),
    105: _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('login.no_existing_email'),
    106: _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('login.wrong_password'),
    default: _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('login.default_error')
  };
  const user = Object(_state_uses_users__WEBPACK_IMPORTED_MODULE_4__["useUser"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const [email, setEmail] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [emailValid, setEmailValid] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [passwordValid, setPasswordValid] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [errorCode, setErrorCode] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('default');
  const [showErrorModal, setShowErrorModal] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const tmpAppConfig = Object(_state_uses_app__WEBPACK_IMPORTED_MODULE_12__["useAppConfig"])();
  const [appConfig, setAppConfig] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(tmpAppConfig);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!tmpAppConfig) {
      dispatch(Object(_state_actions_app__WEBPACK_IMPORTED_MODULE_13__["getAppConfig"])(setAppConfig));
    } else {}
  }, [tmpAppConfig]);
  const reciepientsList = appConfig === null || appConfig === void 0 ? void 0 : appConfig.contact_us_list;

  const goToMyDances = () => {
    history.push({
      pathname: '/dances',
      state: {
        searchByUser: {
          id: user.user_id,
          first_name: user.first_name,
          last_name: user.last_name
        }
      }
    });
  };

  const goToDances = () => {
    if (user === null || user === void 0 ? void 0 : user.is_admin) {
      history.push({
        pathname: '/dances',
        state: {
          searchByOrderStratus: {
            label: 'מוזמן',
            value: 'מוזמן'
          }
        }
      });
    } else {
      goToMyDances();
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setError(null);
    setErrorPerField(emailValid, 'דוא״ל לא תקין');
    setErrorPerField(passwordValid, 'סיסמה לא תקינה');
  }, [emailValid, passwordValid]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (user && user.user_id) {
      goToDances();
    }
  }, [user]);

  const setErrorPerField = (field, error) => {
    if (field === false) {
      setError(error);
    }
  };

  const formValid = () => emailValid && passwordValid;

  const onLoginError = err => {
    var _err$data, _err$data2, _err$data2$split$, _err$data3, _err$data3$data, _err$data3$data$split;

    setShowErrorModal(true);
    console.log('onLoginError error ', err.data);
    const errCode = (err === null || err === void 0 ? void 0 : (_err$data = err.data) === null || _err$data === void 0 ? void 0 : _err$data.res_code) || ((_err$data2 = err.data) === null || _err$data2 === void 0 ? void 0 : (_err$data2$split$ = _err$data2.split(':')[1]) === null || _err$data2$split$ === void 0 ? void 0 : _err$data2$split$.split(',')[0]) || ((_err$data3 = err.data) === null || _err$data3 === void 0 ? void 0 : (_err$data3$data = _err$data3.data) === null || _err$data3$data === void 0 ? void 0 : (_err$data3$data$split = _err$data3$data.split(':')[1]) === null || _err$data3$data$split === void 0 ? void 0 : _err$data3$data$split.split(',')[0]);
    setErrorCode(errCode);
  };

  const doSubmit = () => {
    if (formValid()) {
      console.log('trying to log in');
      dispatch(Object(_state_actions_users__WEBPACK_IMPORTED_MODULE_9__["login"])(email, password, onLoginError));
      console.log('sent login dispatch');
    }
  };

  const goToSignUp = () => {
    history.push('signup');
  };

  const goToForgotPassword = () => {
    history.push('forgot_password');
  };

  const contactUs = () => {
    window.location = 'mailto:' + reciepientsList;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrapperDiv, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_10__["PageHeader"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }, _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('login.log_in_if_registered')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SignUpBtnContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dances_ActionButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('login.not_signed_yet'),
    onClick: goToSignUp,
    bgColor: '#192F3A',
    smallText: _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('login.signup_here'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_10__["FormWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_10__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_10__["ErrorText"], {
    style: {
      fontSize: '20px',
      textShadow: '2px 2px gainsboro',
      color: 'black'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 21
    }
  }, _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('login.login_restricted_to_members'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_10__["FormRow"], {
    style: {
      paddingTop: '10px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_10__["ErrorText"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 21
    }
  }, error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_10__["FormRow"], {
    justifyContent: 'center',
    alignItems: 'center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    text: email,
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('login.email'),
    onChangeText: setEmail,
    onDoneEdit: setEmailValid,
    required: true,
    width: _services_layout__WEBPACK_IMPORTED_MODULE_5__["wideFormInput"],
    onEnterPress: () => formValid() ? doSubmit() : null,
    hideRequiredSign: true,
    id: "email_login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_10__["FormRow"], {
    justifyContent: 'center',
    alignItems: 'center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    text: password,
    type: "password",
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('login.password'),
    onChangeText: setPassword,
    onDoneEdit: setPasswordValid,
    required: true,
    width: _services_layout__WEBPACK_IMPORTED_MODULE_5__["wideFormInput"],
    hideRequiredSign: true,
    onEnterPress: () => formValid() ? doSubmit() : null,
    id: "password_login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_10__["SubmitBtnContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_10__["SubmitBtn"], {
    onClick: doSubmit,
    disabled: !formValid(),
    id: "login_button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 21
    }
  }, _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('login.log_in'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_10__["TextBtn"], {
    onClick: goToForgotPassword,
    "data-testid": "forgot_password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 17
    }
  }, _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('login.forgot_password')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_10__["TextBtn"], {
    style: {
      paddingTop: '15px'
    },
    onClick: contactUs,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 17
    }
  }, _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('user_menu_headlines.contact_us'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modals_MessageModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isOpen: showErrorModal,
    title: _localization_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].t('login.log_in_failed'),
    mainText: errorTexts[errorCode],
    onClose: () => setShowErrorModal(false),
    error: true,
    id: "error_message_in_login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 13
    }
  }));
});
const WrapperDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "LoginScreen__WrapperDiv",
  componentId: "sc-1kmiuji-0"
})(["\n    width: 100%;\n    text-align: center;\n"]);
const SignUpBtnContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "LoginScreen__SignUpBtnContainer",
  componentId: "sc-1kmiuji-1"
})(["\n    margin-bottom: 20px;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n"]);

/***/ }),

/***/ "./src/screens/ResetPassword.js":
/*!**************************************!*\
  !*** ./src/screens/ResetPassword.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _services_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/layout */ "./src/services/layout.js");
/* harmony import */ var _components_Form_TextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Form/TextInput */ "./src/components/Form/TextInput.js");
/* harmony import */ var _components_Modals_MessageModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Modals/MessageModal */ "./src/components/Modals/MessageModal.js");
/* harmony import */ var _services_urlUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/urlUtils */ "./src/services/urlUtils.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/api */ "./src/services/api.js");
var _jsxFileName = "/Users/vitaly/markidim/src/screens/ResetPassword.js";








/* harmony default export */ __webpack_exports__["default"] = (() => {
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  const queryParams = _services_urlUtils__WEBPACK_IMPORTED_MODULE_5__["default"].getQueryParams();
  const email = queryParams.email || null;
  const [password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [confirmPassword, setConfirmPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [passwordValid, setPasswordValid] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [confirmPasswordValid, setConfirmPasswordValid] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [showDoneModal, setShowDoneModal] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setError(null);
    setErrorPerField(confirmPasswordValid, 'סיסמה מחדש לא תקינה');
    setErrorPerField(passwordValid, 'סיסמה לא תקינה');
  }, [confirmPasswordValid, passwordValid]);

  const setErrorPerField = (field, error) => {
    if (field === false) {
      setError(error);
    }
  };

  const formValid = () => confirmPasswordValid && passwordValid;

  const doSubmit = () => {
    if (formValid()) {
      _services_api__WEBPACK_IMPORTED_MODULE_7__["default"].resetPassword(email, password).subscribe(res => {
        // console.log('resetPassword res', res)
        setShowDoneModal(true);
      }, error => console.log('resetPassword error', error));
    }
  };

  if (!email) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_6__["WrapperDiv"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_6__["PageHeader"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, "\u05D0\u05D9\u05E4\u05D5\u05E1 \u05E1\u05D9\u05E1\u05DE\u05D4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_6__["FormWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_6__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_6__["ErrorText"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_6__["FormRow"], {
    justifyContent: 'center',
    alignItems: 'center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "password",
    label: 'סיסמה',
    text: password,
    onChangeText: setPassword,
    onDoneEdit: setPasswordValid,
    required: true,
    width: _services_layout__WEBPACK_IMPORTED_MODULE_2__["wideFormInput"],
    isCreatePassword: true,
    hideRequiredSign: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_6__["FormRow"], {
    justifyContent: 'center',
    alignItems: 'center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "password",
    label: 'סיסמה מחדש',
    text: confirmPassword,
    comparisonText: password,
    onChangeText: setConfirmPassword,
    onDoneEdit: setConfirmPasswordValid,
    required: true,
    width: _services_layout__WEBPACK_IMPORTED_MODULE_2__["wideFormInput"],
    isCreatePassword: true,
    hideRequiredSign: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_6__["SubmitBtnContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_6__["SubmitBtn"], {
    onClick: doSubmit,
    disabled: !formValid(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }, "\u05D0\u05E4\u05E1 \u05E1\u05D9\u05E1\u05DE\u05D4"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modals_MessageModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isOpen: showDoneModal,
    title: 'כמעט סיימנו..',
    mainText: 'אנא כנס לאימייל שנשלח אליך כעת ואשר את שינוי הסיסמה לסיום התהליך',
    onClose: () => setShowDoneModal(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }));
});

/***/ }),

/***/ "./src/screens/SettingsScreen.js":
/*!***************************************!*\
  !*** ./src/screens/SettingsScreen.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/api */ "./src/services/api.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _state_uses_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @state/uses/app */ "./src/state/uses/app.js");
/* harmony import */ var _state_actions_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @state/actions/app */ "./src/state/actions/app.js");
/* harmony import */ var _components_settings_EmailDistributor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/settings/EmailDistributor */ "./src/components/settings/EmailDistributor.js");
/* harmony import */ var _components_settings_EmailEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/settings/EmailEditor */ "./src/components/settings/EmailEditor.js");
/* harmony import */ var _components_settings_GeneralSettings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/settings/GeneralSettings */ "./src/components/settings/GeneralSettings.js");
/* harmony import */ var _components_settings_UsersLog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/settings/UsersLog */ "./src/components/settings/UsersLog.js");
/* harmony import */ var _components_Modals_ConfirmModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/Modals/ConfirmModal */ "./src/components/Modals/ConfirmModal.js");
/* harmony import */ var _components_Modals_MessageModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/Modals/MessageModal */ "./src/components/Modals/MessageModal.js");
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @constants/colors */ "./src/constants/colors.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
var _jsxFileName = "/Users/vitaly/markidim/src/screens/SettingsScreen.js";















const tabs = [{
  label: _localization_i18n__WEBPACK_IMPORTED_MODULE_14__["default"].t('settings_headers.email_distributor'),
  name: 'email distributor'
}, {
  label: _localization_i18n__WEBPACK_IMPORTED_MODULE_14__["default"].t('settings_headers.email_editor'),
  name: 'email editor'
}, {
  label: _localization_i18n__WEBPACK_IMPORTED_MODULE_14__["default"].t('settings_headers.general'),
  name: 'general'
}, {
  label: _localization_i18n__WEBPACK_IMPORTED_MODULE_14__["default"].t('settings_headers.users_log'),
  name: 'users log'
}];
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const appConfig = Object(_state_uses_app__WEBPACK_IMPORTED_MODULE_4__["useAppConfig"])();
  const [currentTab, setCurrentTab] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('email distributor');
  const [newAppConfig, setNewAppConfigs] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(appConfig);
  const [showConfirmModal, setShowConfirmModal] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [showDoneModal, setShowDoneModal] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!appConfig) {
      dispatch(Object(_state_actions_app__WEBPACK_IMPORTED_MODULE_5__["getAppConfig"])(setNewAppConfigs));
    }
  }, []);

  const setNewAppConfigProp = propObj => {
    setNewAppConfigs(Object.assign({}, newAppConfig, propObj));
  };

  const saveAppConfig = () => {
    setShowConfirmModal(false);
    _services_api__WEBPACK_IMPORTED_MODULE_2__["default"].saveAppConfig(newAppConfig).subscribe(res => {
      setShowDoneModal(true); // console.log('saveAppConfig res', res)

      dispatch(Object(_state_actions_app__WEBPACK_IMPORTED_MODULE_5__["setAppConfig"])(res.data));
    }, err => console.log('saveAppConfig error', err));
  };

  const openSaveConfigsModal = () => {
    setShowConfirmModal(true);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_13__["MainPageWrapper"], {
    backgroundColor: _constants_colors__WEBPACK_IMPORTED_MODULE_12__["default"].APP_WHITE,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bar, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavUl, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, tabs.map((tab, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tab, {
    onClick: () => setCurrentTab(tab.name),
    active: currentTab === tab.name,
    key: 'settings-tab-' + i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 29
    }
  }, tab.label))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_settings_EmailDistributor__WEBPACK_IMPORTED_MODULE_6__["default"], {
    show: currentTab === 'email distributor',
    groups: newAppConfig && newAppConfig.groups,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_settings_EmailEditor__WEBPACK_IMPORTED_MODULE_7__["default"], {
    show: currentTab === 'email editor',
    newAppConfig: newAppConfig,
    setNewAppConfigProp: setNewAppConfigProp,
    openSaveConfigsModal: openSaveConfigsModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_settings_GeneralSettings__WEBPACK_IMPORTED_MODULE_8__["default"], {
    show: currentTab === 'general',
    newAppConfig: newAppConfig,
    setNewAppConfigProp: setNewAppConfigProp,
    openSaveConfigsModal: openSaveConfigsModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_settings_UsersLog__WEBPACK_IMPORTED_MODULE_9__["default"], {
    show: currentTab === 'users log',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modals_ConfirmModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
    isOpen: showConfirmModal,
    onCancel: () => setShowConfirmModal(false),
    onConfirm: saveAppConfig,
    title: 'שמירת שינויים',
    mainText: 'האם את/ה בטוח/ה שברצונך לשמור את השינויים?',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modals_MessageModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
    isOpen: showDoneModal,
    title: 'השינויים נשמרו בהצלחה',
    mainText: '',
    onClose: () => setShowDoneModal(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }));
});
const Bar = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SettingsScreen__Bar",
  componentId: "sc-1gwildh-0"
})(["\n    width: 100%;\n"]);
const NavUl = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "SettingsScreen__NavUl",
  componentId: "sc-1gwildh-1"
})(["\n    display: flex;\n    font-size: 16px;\n    align-items: center;\n    list-style-type: none;\n    border-bottom: 1px solid rgba(83, 71, 103, 0.4);\n    margin-bottom: 0;\n\n    @media (max-width: 768px) {\n        flex-wrap: nowrap;\n        display: list-item;\n        align-items: center;\n        width: auto;\n        border-bottom: none;\n    }\n"]);
const Tab = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "SettingsScreen__Tab",
  componentId: "sc-1gwildh-2"
})(["\n    width: auto;\n    cursor: pointer;\n    margin: 0px 12px;\n    padding: 4px 12px;\n    text-align: center;\n    list-style-type: none;\n    justify-content: space-between;\n    position: relative;\n    bottom: -1px;\n    background-color: ", ";\n\n    border: 1px solid rgba(83, 71, 103, 0.4);\n    border-bottom: ", ";\n    color: ", ";\n    @media (max-width: 768px) {\n        width: initial;\n        margin-bottom: 12px;\n        border-bottom: 1px solid rgba(83, 71, 103, 0.4);\n    }\n"], p => p.active ? _constants_colors__WEBPACK_IMPORTED_MODULE_12__["default"].APP_GRAY_LIGHT : _constants_colors__WEBPACK_IMPORTED_MODULE_12__["default"].COLOR_PRIMARY, p => p.active ? _constants_colors__WEBPACK_IMPORTED_MODULE_12__["default"].APP_GRAY_LIGHT : 'none', p => p.active ? _constants_colors__WEBPACK_IMPORTED_MODULE_12__["default"].COLOR_PRIMARY : _constants_colors__WEBPACK_IMPORTED_MODULE_12__["default"].APP_WHITE);

/***/ }),

/***/ "./src/screens/Signup.js":
/*!*******************************!*\
  !*** ./src/screens/Signup.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _data_Users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @data/Users */ "./src/data/Users.js");
/* harmony import */ var _services_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/layout */ "./src/services/layout.js");
/* harmony import */ var _components_Form_TextInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Form/TextInput */ "./src/components/Form/TextInput.js");
/* harmony import */ var _components_Form_SelectInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Form/SelectInput */ "./src/components/Form/SelectInput.js");
/* harmony import */ var _components_Form_RequiredText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Form/RequiredText */ "./src/components/Form/RequiredText.js");
/* harmony import */ var _components_Modals_MessageModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/Modals/MessageModal */ "./src/components/Modals/MessageModal.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/api */ "./src/services/api.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
var _jsxFileName = "/Users/vitaly/markidim/src/screens/Signup.js";













/* harmony default export */ __webpack_exports__["default"] = (() => {
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  const buttonWidth = Object(_services_layout__WEBPACK_IMPORTED_MODULE_4__["useButtonWidth"])();
  const [firstName, setFirstName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [lastName, setLastName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [memberId, setMemberId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [id, setId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [choreographerType, setChoreographerType] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [cellularNumber, setCellularNumber] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [phoneNumber, setPhoneNumber] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [address, setAddress] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [email, setEmail] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [confirmPassword, setConfirmPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [firstNameValid, setFirstNameValid] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [lastNameValid, setLastNameValid] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [memberIdValid, setMemberIdValid] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [idValid, setIdValid] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [choreographerTypeValid, setChoreographerTypeValid] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [cellularNumberValid, setCellularNumberValid] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [phoneNumberValid, setPhoneNumberValid] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [addressValid, setAddressValid] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [emailValid, setEmailValid] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [passwordValid, setPasswordValid] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [confirmPasswordValid, setConfirmPasswordValid] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [showDoneModal, setShowDoneModal] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [showErrorModal, setShowErrorModal] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setError(null);
    setErrorPerField(firstNameValid, _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('signup.error_first_name'));
    setErrorPerField(lastNameValid, _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('signup.error_last_name'));
    setErrorPerField(idValid, _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('signup.error_id'));
    setErrorPerField(choreographerTypeValid, _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('signup.error_instructor'));
    setErrorPerField(cellularNumberValid, _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('signup.error_cell_num'));
    setErrorPerField(phoneNumberValid, _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('signup.error_phone'));
    setErrorPerField(addressValid, _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('signup.error_address'));
    setErrorPerField(emailValid, _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('signup.error_email'));
    setErrorPerField(passwordValid, _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('signup.error_password'));
    setErrorPerField(confirmPasswordValid, _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('signup.error_verify_password'));
  }, [firstNameValid, lastNameValid, idValid, choreographerTypeValid, cellularNumberValid, phoneNumberValid, addressValid, emailValid, passwordValid, confirmPasswordValid, _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].locale]);

  const setErrorPerField = (field, error) => {
    if (field === false) {
      setError(error);
    }
  };

  const formValid = () => firstNameValid && lastNameValid && idValid && choreographerTypeValid && cellularNumberValid && phoneNumberValid && addressValid && emailValid && passwordValid && confirmPasswordValid;

  const doSubmit = () => {
    if (formValid()) {
      _services_api__WEBPACK_IMPORTED_MODULE_10__["default"].signup(email, password, firstName, id, lastName, choreographerType, memberId, cellularNumber, phoneNumber, address).subscribe(res => {
        console.log('signup response', res);
        setShowDoneModal(true);
      }, error => {
        setShowErrorModal(true);
        console.log('signup error', error);
      });
    }
  };

  const goToLandPage = () => {
    history.push('/');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrapperDiv, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_9__["PageHeader"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('signup.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_9__["FormWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_9__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: firstName,
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('edit_user.first_name'),
    onChangeText: setFirstName,
    onDoneEdit: setFirstNameValid,
    required: true,
    width: buttonWidth,
    id: "user_name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: lastName,
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('edit_user.last_name'),
    onChangeText: setLastName,
    onDoneEdit: setLastNameValid,
    required: true,
    width: buttonWidth,
    id: "user_last_name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: memberId,
    type: "number",
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('edit_user.membership_number'),
    onChangeText: setMemberId,
    onDoneEdit: setMemberIdValid,
    width: buttonWidth,
    id: "user_friend_number",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_9__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: id,
    type: "number",
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('edit_user.id'),
    onChangeText: setId,
    onDoneEdit: setIdValid,
    width: buttonWidth,
    id: "user_id",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_SelectInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: choreographerType,
    placeholder: _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('profile.select'),
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('edit_user.instructor_type'),
    onSelect: setChoreographerType,
    options: _data_Users__WEBPACK_IMPORTED_MODULE_3__["userTypes"],
    onError: error => setChoreographerTypeValid(!error),
    width: buttonWidth,
    id: "user_kind",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: cellularNumber,
    type: "number",
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('edit_user.cell_number'),
    onChangeText: setCellularNumber,
    onDoneEdit: setCellularNumberValid,
    width: buttonWidth,
    id: "user_phone_number",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_9__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: phoneNumber,
    type: "number",
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('edit_user.another_phone'),
    onChangeText: setPhoneNumber,
    onDoneEdit: setPhoneNumberValid,
    width: buttonWidth,
    id: "user_another_phone_number",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: address,
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('edit_user.address'),
    onChangeText: setAddress,
    onDoneEdit: setAddressValid,
    width: buttonWidth,
    id: "user_address",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: email,
    type: "email",
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('signup.email'),
    onChangeText: setEmail,
    onDoneEdit: setEmailValid,
    required: true,
    width: buttonWidth,
    id: "user_email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_9__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: password,
    type: "password" // label={'סיסמה'}
    ,
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('signup.password'),
    onChangeText: setPassword,
    onDoneEdit: setPasswordValid,
    width: buttonWidth,
    required: true,
    isCreatePassword: true,
    id: "user_password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: confirmPassword,
    comparisonText: password,
    type: "password",
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('signup.verify_password'),
    onChangeText: setConfirmPassword,
    onDoneEdit: setConfirmPasswordValid,
    width: buttonWidth,
    required: true,
    isCreatePassword: true,
    id: "user_confirm_password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_9__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_RequiredText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_9__["SubmitBtnContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_9__["SubmitBtn"], {
    onClick: doSubmit,
    disabled: !formValid(),
    id: "send_request_button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 21
    }
  }, _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('signup.send_request'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_9__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ErrorText, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 21
    }
  }, error))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modals_MessageModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isOpen: showDoneModal,
    title: _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('signup.request_sent'),
    mainText: _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('signup.on_request_confirmed'),
    onClose: goToLandPage,
    id: "success_modal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modals_MessageModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isOpen: showErrorModal,
    title: _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('signup.error'),
    mainText: _localization_i18n__WEBPACK_IMPORTED_MODULE_11__["default"].t('signup.email_taken'),
    onClose: () => setShowErrorModal(false),
    error: true,
    id: "error_modal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 13
    }
  }));
});
const ErrorText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "Signup__ErrorText",
  componentId: "zzas09-0"
})(["\n    color: red;\n    text-align: center;\n    width: 100%;\n"]);
const WrapperDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Signup__WrapperDiv",
  componentId: "zzas09-1"
})(["\n    display: inline-flex;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 0px auto;\n    margin: 0px auto;\n    background-color: #ffffff;\n    width: 100%;\n    text-align: center;\n    & h2 {\n        text-align: right;\n    }\n"]);

/***/ }),

/***/ "./src/screens/SignupSuccess.js":
/*!**************************************!*\
  !*** ./src/screens/SignupSuccess.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
var _jsxFileName = "/Users/vitaly/markidim/src/screens/SignupSuccess.js";



/* harmony default export */ __webpack_exports__["default"] = (({}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_2__["PageHeader"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, "\u05D0\u05D9\u05E9\u05D5\u05E8 \u05D4\u05E8\u05D9\u05E9\u05D5\u05DD \u05D1\u05D5\u05E6\u05E2 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_2__["PageSubTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, "\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u05E0\u05E9\u05DC\u05D7 \u05DC\u05DE\u05E9\u05EA\u05DE\u05E9 \u05D4\u05D7\u05D3\u05E9 \u05DC\u05D4\u05E9\u05DC\u05DE\u05EA \u05EA\u05D4\u05DC\u05D9\u05DA \u05D4\u05D4\u05E8\u05E9\u05DE\u05D4"));
});
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SignupSuccess__Container",
  componentId: "sc-1yyoie9-0"
})([""]);

/***/ }),

/***/ "./src/screens/UserProfile.js":
/*!************************************!*\
  !*** ./src/screens/UserProfile.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/api */ "./src/services/api.js");
/* harmony import */ var _components_Form_TextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Form/TextInput */ "./src/components/Form/TextInput.js");
/* harmony import */ var _components_EditUser_EditUserSubmit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/EditUser/EditUserSubmit */ "./src/components/EditUser/EditUserSubmit.js");
/* harmony import */ var _components_Form_StaticLabeledText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Form/StaticLabeledText */ "./src/components/Form/StaticLabeledText.js");
/* harmony import */ var _services_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/layout */ "./src/services/layout.js");
/* harmony import */ var _state_uses_users__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @state/uses/users */ "./src/state/uses/users.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
/* harmony import */ var _data_Users__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @data/Users */ "./src/data/Users.js");
/* harmony import */ var _components_Form_SelectInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/Form/SelectInput */ "./src/components/Form/SelectInput.js");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/utils */ "./src/services/utils.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");
var _jsxFileName = "/Users/vitaly/markidim/src/screens/UserProfile.js";













/* harmony default export */ __webpack_exports__["default"] = (({}) => {
  const buttonWidth = Object(_services_layout__WEBPACK_IMPORTED_MODULE_6__["useButtonWidth"])();
  const currentUser = Object(_state_uses_users__WEBPACK_IMPORTED_MODULE_7__["useUser"])();
  const [preEditUser, setPreEditUser] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [user, setUser] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(preEditUser);

  const setUserProperty = propertyObj => {
    setUser(Object.assign({}, user, propertyObj));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (currentUser) {
      getFormatedUser(currentUser.user_id);
    }
  }, [currentUser]);

  const getFormatedUser = userId => {
    _services_api__WEBPACK_IMPORTED_MODULE_2__["default"].getUserById(userId).subscribe(res => {
      console.log('getFormatedUser res', res.data);
      setPreEditUser(res.data);
      setUser(res.data);
    }, error => {
      console.log('getFormatedUser error', error);
    });
  };

  console.log('1234567 ', user);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (user) {
      if (!(user === null || user === void 0 ? void 0 : user.max_paralleled_orders) && (user === null || user === void 0 ? void 0 : user.dance_registered_limit)) {
        const max_paralleled_orders = user.dance_registered_limit;
        setUserProperty({
          max_paralleled_orders
        });
      }
    }
  }, [currentUser]);

  if (!user) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Main, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_8__["PageHeader"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, _localization_i18n__WEBPACK_IMPORTED_MODULE_12__["default"].t('profile.headline')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_8__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: user.first_name,
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_12__["default"].t('profile.first_name'),
    onChangeText: first_name => setUserProperty({
      first_name
    }),
    width: buttonWidth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: user.last_name,
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_12__["default"].t('profile.last_name'),
    onChangeText: last_name => setUserProperty({
      last_name
    }),
    width: buttonWidth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_StaticLabeledText__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: user.email,
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_12__["default"].t('profile.email'),
    width: buttonWidth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_8__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: user.id_number || '',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_12__["default"].t('profile.id'),
    type: "number",
    onChangeText: id_number => setUserProperty({
      id_number
    }),
    width: buttonWidth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: user.cellular || '',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_12__["default"].t('profile.cell_number'),
    type: "number",
    onChangeText: cellular => setUserProperty({
      cellular
    }),
    width: buttonWidth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: user.phone_num || '',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_12__["default"].t('profile.another_phone'),
    type: "number",
    onChangeText: phone_num => setUserProperty({
      phone_num
    }),
    width: buttonWidth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_8__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: user.address || '',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_12__["default"].t('profile.address'),
    onChangeText: address => setUserProperty({
      address
    }),
    width: '100%',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_8__["FormRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  }, (user === null || user === void 0 ? void 0 : user.is_admin) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: user.member_id || '',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_12__["default"].t('profile.membership_number'),
    type: "number",
    onChangeText: member_id => setUserProperty({
      member_id
    }),
    width: buttonWidth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 25
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_StaticLabeledText__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: user.member_id || '',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_12__["default"].t('profile.membership_number'),
    width: buttonWidth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 25
    }
  }), (user === null || user === void 0 ? void 0 : user.is_admin) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_SelectInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: user.choreographer_type,
    placeholder: user.choreographer_type || _localization_i18n__WEBPACK_IMPORTED_MODULE_12__["default"].t('profile.select'),
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_12__["default"].t('profile.instructor_type'),
    onSelect: choreographer_type => setUserProperty({
      choreographer_type
    }),
    options: _data_Users__WEBPACK_IMPORTED_MODULE_9__["userTypes"],
    width: buttonWidth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 25
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_StaticLabeledText__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: user.choreographer_type === _localization_i18n__WEBPACK_IMPORTED_MODULE_12__["default"].t('profile.select') ? '' : user.choreographer_type || '',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_12__["default"].t('profile.instructor_type'),
    width: buttonWidth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 25
    }
  }), (user === null || user === void 0 ? void 0 : user.is_admin) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_SelectInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: (user === null || user === void 0 ? void 0 : user.max_paralleled_orders) || user.dance_registered_limit || '',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_12__["default"].t('profile.max_parallel_orders'),
    placeholder: _localization_i18n__WEBPACK_IMPORTED_MODULE_12__["default"].t('profile.select'),
    onSelect: max_paralleled_orders => setUserProperty({
      max_paralleled_orders
    }),
    options: _services_utils__WEBPACK_IMPORTED_MODULE_11__["getArrayOfNum"](50),
    onError: error => console.log('max_paralleled_orders selectInput error', error),
    width: buttonWidth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 25
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form_StaticLabeledText__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: (user === null || user === void 0 ? void 0 : user.max_paralleled_orders) || user.dance_registered_limit || '',
    label: _localization_i18n__WEBPACK_IMPORTED_MODULE_12__["default"].t('profile.max_parallel_orders'),
    width: buttonWidth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_8__["SubmitWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_EditUser_EditUserSubmit__WEBPACK_IMPORTED_MODULE_4__["default"], {
    user: user,
    preEditUser: preEditUser,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 21
    }
  }))));
});
const Main = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "UserProfile__Main",
  componentId: "c8zuux-0"
})(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n"]);
const FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "UserProfile__FormContainer",
  componentId: "c8zuux-1"
})(["\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n"]);

/***/ }),

/***/ "./src/screens/Users.js":
/*!******************************!*\
  !*** ./src/screens/Users.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Users_UsersTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Users/UsersTable */ "./src/components/Users/UsersTable.js");
/* harmony import */ var _state_uses_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @state/uses/users */ "./src/state/uses/users.js");
/* harmony import */ var _appearance_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @appearance/styled */ "./src/appearance/styled.js");
var _jsxFileName = "/Users/vitaly/markidim/src/screens/Users.js";




/* harmony default export */ __webpack_exports__["default"] = (({}) => {
  const user = Object(_state_uses_users__WEBPACK_IMPORTED_MODULE_2__["useUser"])();

  if (!user || !user.is_admin) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appearance_styled__WEBPACK_IMPORTED_MODULE_3__["MainPageWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Users_UsersTable__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }));
});

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/services/acum.js":
/*!******************************!*\
  !*** ./src/services/acum.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const BASE_ACUM_URL = 'https://nocs.acum.org.il/acumsitesearchdb/';

const searchBySongAndPerformer = async (songTerm, performerTerm = '', pageNumber = 1, getTranslated = false) => {
  const resultTypeKey = !getTranslated ? 'musical' : 'translated';
  return new Promise((resolve, reject) => {
    const url = BASE_ACUM_URL + 'searchdb?primarySearchByTypeKey=1&primarySearchByTypeText=' + encodeURI(songTerm) + '&secondarySearchByTypeKey=2&secondarySearchByTypeText=' + encodeURI(performerTerm) + '&resultTypeKey=' + resultTypeKey + '&pageNumber=' + pageNumber + '&searchMethodTypeKey=partial&resultSortTypeKey=alphabetical';
    fetch(url).then(response => response.json()).then(data => {
      // console.log('acum - search by term:', data)
      if (data.errorCode !== 0) {
        reject({
          error: data.errorCode,
          description: data.errorDescription
        });
        console.log('From acum.js --- no search results---- rejected');
      }

      if (data.data && data.data.resultTypeInfos && getTranslated) {
        const translatedData = data.data.resultTypeInfos.find(r => r.resultTypeKey === 'translated');
        const originalTranslatedIds = getOriginalAcumIds(translatedData);

        if (translatedData && translatedData.pageResults) {
          resolve({
            total: translatedData.count,
            data: translatedData.pageResults.map((work, i) => getWorkDetails(work, originalTranslatedIds ? originalTranslatedIds[i] ? originalTranslatedIds[i] : null : null))
          });
          return;
        }
      }

      if (data.data && data.data.resultTypeInfos && !getTranslated) {
        const musicalData = data.data.resultTypeInfos.find(r => r.resultTypeKey === 'musical');

        if (musicalData && musicalData.pageResults) {
          resolve({
            total: musicalData.count,
            data: musicalData.pageResults.map((work, i) => getWorkDetails(work))
          });
          return;
        }
      }

      resolve([]);
    }).catch(error => {
      reject(error);
    });
  });
};

const searchByTerm = async (term, pageNumber = 1, getTranslated) => {
  const url = !getTranslated ? BASE_ACUM_URL + 'searchdb?term=' + encodeURI(term) + '&resultTypeKey=musical&pageNumber=' + pageNumber : BASE_ACUM_URL + 'searchdb?term=' + encodeURI(term) + '&nameType=W&resultTypeKey=translated&pageNumber=' + pageNumber + '&searchLanguageCode=he-IL';
  return new Promise((resolve, reject) => {
    fetch(url).then(response => response.json()).then(data => {
      if (data.errorCode !== 0) {
        reject({
          error: data.errorCode,
          description: data.errorDescription
        });
        console.log('From acum.js --- no search results---- rejected');
      }

      if (data.data && data.data.resultTypeInfos) {
        const musicalData = data.data.resultTypeInfos.find(r => r.resultTypeKey === 'musical');
        const translatedData = data.data.resultTypeInfos.find(r => r.resultTypeKey === 'translated');
        const originalTranslatedIds = getOriginalAcumIds(translatedData);

        if (musicalData && musicalData.pageResults && !getTranslated) {
          resolve({
            total: musicalData.count,
            data: musicalData.pageResults.map((work, i) => getWorkDetails(work))
          });
          return;
        }

        if (translatedData && translatedData.pageResults && getTranslated) {
          resolve({
            total: translatedData.count,
            data: translatedData.pageResults.map((work, i) => getWorkDetails(work, originalTranslatedIds ? originalTranslatedIds[i] ? originalTranslatedIds[i] : null : null))
          });
          return;
        }
      }

      resolve([]);
    }).catch(error => {
      reject(error);
    });
  });
};

const searchById = (id, pageNumber = 1, callback) => {
  return new Promise((resolve, reject) => {
    const url = BASE_ACUM_URL + 'getworkinfo?workId=' + id + '&pageNumber=' + pageNumber;
    fetch(url).then(response => response.json()).then(data => {
      var _data$data;

      // console.log(
      //     'acum - search by id:',
      //     data?.data?.workVersionCount
      // )
      callback && callback(data === null || data === void 0 ? void 0 : (_data$data = data.data) === null || _data$data === void 0 ? void 0 : _data$data.workVersionCount);

      if (data.errorCode !== 0) {
        reject({
          error: data.errorCode,
          description: data.errorDescription
        });
      }

      if (data.data && data.data.workVersions) {
        // console.log('acum searchById data', data)
        const versions = data.data.workVersions.map(work => getWorkDetails(work));
        resolve({
          data: versions,
          total: versions.length
        });
      }

      resolve([]);
    }).catch(error => {
      reject(error);
    });
  });
};

const getCreatorDetails = creator => ({
  heb_name: creator.creatorHebName,
  eng_name: creator.creatorEngName,
  number: creator.creatorIpBaseNumber
});

const getPerformerDetails = performer => ({
  heb_name: performer.performerHebName,
  eng_name: performer.performerEngName,
  number: performer.number
});

const getCreatorsArray = (work, creatorType) => {
  return work[creatorType] ? work[creatorType].map(creator => getCreatorDetails(creator)) : [];
};

const getOriginalAcumIds = translatedData => {
  const originalAcumIDS = [];

  if (translatedData && translatedData.pageResults) {
    translatedData.pageResults.map(work => {
      var _work$original;

      const originalId = (_work$original = work.original) === null || _work$original === void 0 ? void 0 : _work$original.translatedVersion_Id;

      if (originalId) {
        originalAcumIDS.push(originalId);
      }
    });
    return originalAcumIDS;
  } else return null;
};

const getWorkDetails = (work, originalTranslatedId) => {
  var _akum_id;

  console.log('from get work details ', work);
  let composers = getCreatorsArray(work, 'composers');
  let lyricists = getCreatorsArray(work, 'authors');
  const arrangers = getCreatorsArray(work, 'arrangers');
  const creators = getCreatorsArray(work, 'creators');
  const translator = getCreatorsArray(work, 'translators');
  let akum_id = work['work_id'];
  akum_id = ((_akum_id = akum_id) === null || _akum_id === void 0 ? void 0 : _akum_id.length) === 9 ? akum_id.substring(0, 6) : akum_id;
  const composersAndAuthors = getCreatorsArray(work, 'composersAndAuthors');

  if ((composersAndAuthors === null || composersAndAuthors === void 0 ? void 0 : composersAndAuthors.length) > 0) {
    composers = composersAndAuthors;
    lyricists = composersAndAuthors;
  }

  lyricists = (translator === null || translator === void 0 ? void 0 : translator.length) > 0 ? translator : lyricists;
  const workDetails = {
    full_work_id: work['fullWorkId'],
    id: akum_id,
    work_language: work['workLanguage'],
    work_heb_name: work['workHebName'],
    work_eng_name: (work === null || work === void 0 ? void 0 : work.original) ? work.original['workEngName'] : null,
    registration_date: work['registration_date'],
    publication_date: work['publication_date'],
    //translator: translator,
    composers: composers,
    lyricists: lyricists,
    arrangers: arrangers,
    creators: creators,
    youtube_id: work['youtubeId']
  };

  if (originalTranslatedId) {
    workDetails.translated_version_id = originalTranslatedId.length === 9 ? originalTranslatedId.substring(0, 6) : originalTranslatedId;
  }

  if (work.versionNumber) {
    workDetails.version_number = work.versionNumber;
  }

  if (work.time) {
    workDetails.time = work.time;
  }

  if (work.performer) {
    workDetails.performer = getPerformerDetails(work.performer);
  }

  return workDetails;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  searchByTerm,
  searchById,
  searchBySongAndPerformer
});

/***/ }),

/***/ "./src/services/api.js":
/*!*****************************!*\
  !*** ./src/services/api.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cl_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cl-react */ "./node_modules/cl-react/index.js");
/* harmony import */ var cl_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cl_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/**
 * The concrete class for making server requests from the app.
 * Extends the core cl-api codelovers module
 * @see codelovers_modules/services/cl-api
 *
 * The only public method of cl-api is the this.request() method which takes the
 * following params:
 *
 * @param  {string}    url      e.g. /getCurrentUser (including the prefix '/')
 * @param  {string}    type     'POST' | 'GET'
 * @param  {object}    params   params to add to the request
 * @param  {boolean}   relogin  if set to true will attempt to re-login if
 *                              401 is received (default: true)
 * @param  {boolean}   cache  disable caching for this request
 * @return {Rx.Observable}
 *
 * The method returns an Rx,Observable which you will need to subscribe
 * to in order to get the response.
 */
//import CLApi from '../codelovers_modules/services/cl-api';
//import CLApi from 'cl-api';

 //import Config from '../../config'
// let envs = Config.AVAILABLE_ENVIRONMENTS;
// let selectedEnv = Config.SELECTED_ENV;
// let protocol = Config.USE_HTTPS ? 'https' : 'http';
// let API_URL = protocol + '://' + envs[selectedEnv] + '/index.php/api';
//Development environment

const DEVELOPMENT_URL = 'http://markidim.codelovers-solutions.com/api/index.php/api'; // const proxyurl = "https://cors-anywhere.herokuapp.com/https://api.markid.co.il/index.php/api"
// const apiUrl = 'https://api.markid.co.il/index.php/api'
// const API_URL = proxyurl
//Production environment

const PRODUCTION_URL = 'https://api.markid.co.il/index.php'; //Local environment

const LOCAL_URL = 'http://localhost:8100/index.php';
const apiUrl = LOCAL_URL + '/api';
const testUrl = LOCAL_URL + '/test'; // const currentURL = window.location.href
// if (currentURL === "http://localhost:3000/") {
//     apiUrl = LOCAL_API_URL
// }
// else if (currentURL === "https://reg.markid.co.il/") {
//     apiUrl = PRODUCTION_URL
// }
// else if (currentURL === "https://markidim.codelovers-solutions.com") {
//     apiUrl = PRODUCTION_URL
// }

class Api extends cl_react__WEBPACK_IMPORTED_MODULE_0__["CLApi"] {
  signup(email, password, firstName, id, lastName, choreographerType, memberId, cellularNumber, phoneNumber, address) {
    console.log('all params for api signup', {
      email,
      password,
      firstName,
      id,
      lastName,
      choreographerType,
      memberId,
      cellularNumber,
      phoneNumber,
      address,
      apiUrl
    });
    return this.request('signup', 'POST', {
      email,
      password,
      firstName,
      id,
      lastName,
      choreographerType,
      memberId,
      cellularNumber,
      phoneNumber,
      address
    }, true, false, apiUrl);
  }

  login(email, password, accessToken = null) {
    return this.request('login', 'POST', {
      email: email === null || email === void 0 ? void 0 : email.trim(),
      password,
      access_token: accessToken,
      rememberMe: true
    }, true, false, apiUrl);
  }

  getCurrentUser() {
    return this.request('get_current_user', 'POST', {}, true, false, apiUrl);
  }

  logout() {
    return this.request('logout', 'POST', {}, true, false, apiUrl);
  }

  resetPassword(email, password) {
    return this.request('reset_password', 'POST', {
      email,
      password
    }, true, false, apiUrl);
  }

  forgotPassword(email) {
    return this.request('forgot_password', 'POST', {
      email
    }, true, false, apiUrl);
  }

  getAllUsers(page = 1, pageSize = 10, orderBy = [], search = '', filter = []) {
    return this.request('get_all_users', 'POST', {
      page,
      page_size: pageSize,
      orderby: orderBy,
      filter,
      search
    }, true, false, apiUrl);
  }

  getUserById(id) {
    return this.request('get_user_by_id', 'POST', {
      id
    }, true, false, apiUrl);
  }

  deleteUser() {
    return this.request('delete_user', 'POST', {}, true, false, apiUrl);
  }

  saveUser(user) {
    console.log(' from  saveUser   user = ', user);
    return this.request('save_user', 'POST', {
      user
    }, true, false, apiUrl);
  }

  setUserIsDisabled(user_id, disabled) {
    return this.request('set_user_is_disabled', 'POST', {
      user_id,
      disabled
    }, true, false, apiUrl);
  }

  saveDance(dance) {
    console.log(dance, 'ddaanncceeeeee!!!!!');
    return this.request('save_dance', 'POST', {
      dance
    }, true, false, apiUrl);
  }

  payment($user) {
    return this.request('payment', 'POST', {}, true, false, apiUrl);
  }

  mailToUsers($distribution, $message_header, $content) {
    return this.request('mailToUsers', 'POST', {}, true, false, apiUrl);
  }

  messageToUserDanceApproved($content) {
    return this.request('messageToUserDanceApproved', 'POST', {}, true, false, apiUrl);
  }

  messageToUserDanceRejected($content) {
    return this.request('messageToUserDanceRejected', 'POST', {}, true, false, apiUrl);
  }

  messageToUserDanceExpired($content) {
    return this.request('messageToUserDanceExpired', 'POST', {}, true, false, apiUrl);
  }

  termsOfService($content) {
    return this.request('termsOfService', 'POST', {}, true, false, apiUrl);
  }

  welcomeMessage($content) {
    return this.request('welcomeMessage', 'POST', {}, true, false, apiUrl);
  }

  explanations($content) {
    return this.request('explanations', 'POST', {}, true, false, apiUrl);
  }

  getDanceStylesOptions() {
    return this.request('get_dance_styles_options', 'GET', {}, true, false, apiUrl);
  }

  getDanceStatusesOptions() {
    return this.request('get_dance_statuses_options', 'GET', {}, true, false, apiUrl);
  }

  getAllDances(page = 1, pageSize = 10, orderBy = [], search = '', filter = [], exportData = false) {
    return this.request('get_all_dances' + (exportData ? '_csv' + window.location.search : ' '), exportData ? 'GET' : 'POST', exportData ? {} : {
      page,
      page_size: pageSize,
      orderby: orderBy,
      filter,
      search
    }, true, false, apiUrl);
  }

  getFilterOptions(collection, property, subProperty, inputText) {
    return this.request('get_filter_options', 'POST', {
      collection,
      property,
      sub_property: subProperty,
      input_text: inputText
    }, true, false, apiUrl);
  }

  acumSearchByTerm(term) {
    return this.request('acum_search_song_by_term', 'POST', {
      term
    }, true, false, apiUrl);
  }

  acumSearchById(id) {
    return this.request('acum_get_song_details', 'POST', {
      work_id: id
    }, true, false, apiUrl);
  }

  getDanceById(id) {
    return this.request('get_dance_by_id', 'GET', {
      id
    }, true, false, apiUrl);
  }

  getDanceByAkumId(akum_id) {
    return this.request('get_dance_by_akum_id', 'POST', {
      akum_id
    }, true, false, apiUrl);
  }

  setDanceStatus(dance_id, status) {
    return this.request('set_dance_status', 'POST', {
      dance_id,
      status
    }, true, false, apiUrl);
  }

  deleteDance(dance_id, reason) {
    return this.request('delete_dance', 'POST', {
      dance_id,
      reason
    }, true, false, apiUrl);
  }

  getAppConfig() {
    return this.request('get_app_config', 'POST', {}, true, false, apiUrl);
  }

  saveAppConfig(app_config) {
    return this.request('save_app_config', 'POST', {
      app_config
    }, true, false, apiUrl);
  }

  sendGeneralEmail(group, subject, body) {
    return this.request('send_general_email', 'POST', {
      group,
      subject,
      body
    }, true, false, apiUrl);
  }

  getAllLogs(page = 1, page_size = 10, orderby = [], search = '', filter = [], from_date, to_date, user_type) {
    return this.request('get_all_logs', 'POST', {
      page,
      page_size,
      orderby,
      filter,
      search,
      from_date,
      to_date,
      user_type
    }, true, false, apiUrl);
  }

  exportCsv(collection, search) {
    if (collection === 'dances') {
      return this.request('get_all_dances_csv', 'GET', {
        search
      }, true, false, apiUrl);
    }
  } // tests:


  clearTestData() {
    return this.request('clear_test_data', 'GET', {}, true, false, testUrl);
  }

  approveTestUser() {
    return this.request('approve_test_user', 'GET', {}, true, false, testUrl);
  }

}

const api = new Api();
/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ "./src/services/dances.js":
/*!********************************!*\
  !*** ./src/services/dances.js ***!
  \********************************/
/*! exports provided: defaultDance, dateFormat, completionDateFormat, datePickerFormat, existingDanceCompletionDateFormat, requestDateFormat, getCoChoreographersText, getDanceById, saveDance, requiredFieldEmptyText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultDance", function() { return defaultDance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateFormat", function() { return dateFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "completionDateFormat", function() { return completionDateFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "datePickerFormat", function() { return datePickerFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "existingDanceCompletionDateFormat", function() { return existingDanceCompletionDateFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestDateFormat", function() { return requestDateFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCoChoreographersText", function() { return getCoChoreographersText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDanceById", function() { return getDanceById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveDance", function() { return saveDance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requiredFieldEmptyText", function() { return requiredFieldEmptyText; });
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/utils */ "./src/services/utils.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/api */ "./src/services/api.js");
/* harmony import */ var _localization_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @localization/i18n */ "./src/localization/i18n.js");



const defaultDance = {
  status: null,
  name: '',
  choreographer: null,
  co_choreographers: [],
  co_choreographers_string: '',
  style: '',
  video_url: '',
  performer: '',
  song: {
    translated_version_id: '',
    akum_id: '',
    name: '',
    composer: '',
    lyricist: '',
    //translator: '',
    video_url: '',
    composers: [],
    lyricists: [],
    lyrics: ''
  },
  notes: ''
};
const dateFormat = 'H:mm DD/MM/YYYY';
const completionDateFormat = 'DD/MM/YYYY';
const datePickerFormat = 'YYYY-MM-DD';
const existingDanceCompletionDateFormat = 'YYYY';
const requestDateFormat = 'H:mm:ss DD/MM/YYYY';
const getCoChoreographersText = coChoreographers => {
  let fixedCo = [];

  if (!_services_utils__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](coChoreographers)) {
    coChoreographers.map(c => {
      if (c['label'] && !_services_utils__WEBPACK_IMPORTED_MODULE_0__["isEmptyStr"](c['label'])) {
        fixedCo.push(c);
      } else if (c['first_name'] && c['last_name']) {
        fixedCo.push({
          label: c['first_name'] + ' ' + c['last_name'],
          value: c['id']
        });
      }
    });
  }

  return fixedCo;
};
const getDanceById = (id, callBack) => {
  _services_api__WEBPACK_IMPORTED_MODULE_1__["default"].getDanceById(id).subscribe(res => {
    // console.log('getDanceById from api res', res)
    callBack(res.data.res);
  }, error => console.log('getDancesTypes from api error', error));
};
const saveDance = (dance, callback, onError) => {
  var _dance$name;

  const danceName = dance === null || dance === void 0 ? void 0 : (_dance$name = dance.name) === null || _dance$name === void 0 ? void 0 : _dance$name.trim();
  const trimmedDance = { ...dance,
    name: danceName
  };
  _services_api__WEBPACK_IMPORTED_MODULE_1__["default"].saveDance(trimmedDance).subscribe(res => {
    callback(res);
  }, error => {
    if (onError) {
      onError(error.data);
    }
  });
};
const requiredFieldEmptyText = _localization_i18n__WEBPACK_IMPORTED_MODULE_2__["default"].t('edit_dance.input_missing'); // 'אחד (או יותר) משדות החובה ריקים'

/***/ }),

/***/ "./src/services/layout.js":
/*!********************************!*\
  !*** ./src/services/layout.js ***!
  \********************************/
/*! exports provided: formInputHeight, wideFormInput, MAX_SIZES, useWindowSize, useButtonWidth, useOnClickOutside */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formInputHeight", function() { return formInputHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wideFormInput", function() { return wideFormInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_SIZES", function() { return MAX_SIZES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWindowSize", function() { return useWindowSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useButtonWidth", function() { return useButtonWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOnClickOutside", function() { return useOnClickOutside; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const formInputHeight = 42;
const wideFormInput = 400;
const MAX_SIZES = {
  tablet: 768,
  mobile: 480
};
function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    if (isClient) {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
        device: window.innerWidth > MAX_SIZES['tablet'] ? 'pc' : window.innerWidth > MAX_SIZES['mobile'] ? 'tablet' : 'mobile'
      };
    }

    return {
      width: undefined,
      height: undefined,
      device: undefined
    };
  }

  const [windowSize, setWindowSize] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getSize);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}
const useButtonWidth = () => {
  const windowSize = useWindowSize();

  if (windowSize.device === 'pc') {
    return MAX_SIZES['tablet'] / 3;
  } else if (windowSize.device === 'tablet') {
    return '100%';
  }

  return '100%';
};
const useOnClickOutside = (ref, handler) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const listener = event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

/***/ }),

/***/ "./src/services/table.js":
/*!*******************************!*\
  !*** ./src/services/table.js ***!
  \*******************************/
/*! exports provided: getCellContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCellContent", function() { return getCellContent; });
const getCellContent = (rowData, col) => {
  if (col.cell) {
    return col.cell(rowData);
  } else if (col.subProperty) {
    return rowData[col.property][col.subProperty];
  } else return rowData[col.property];
};

/***/ }),

/***/ "./src/services/urlUtils.js":
/*!**********************************!*\
  !*** ./src/services/urlUtils.js ***!
  \**********************************/
/*! exports provided: goToMyDances, goToDances, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goToMyDances", function() { return goToMyDances; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goToDances", function() { return goToDances; });
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_0__);


const getQueryParams = () => {
  return query_string__WEBPACK_IMPORTED_MODULE_0___default.a.parse(window.location.search);
};

const goToMyDances = (history, user) => {
  if (!user) {
    history.push({
      pathname: '/dances'
    });
  }

  history.push({
    pathname: '/dances/',
    state: {
      searchByUser: {
        id: user.user_id,
        first_name: user.first_name,
        last_name: user.last_name
      }
    }
  });
};
const goToDances = (history, user) => {
  if (user === null || user === void 0 ? void 0 : user.is_admin) {
    history.push({
      pathname: '/dances/',
      state: {
        searchByOrderStratus: {
          label: 'מוזמן',
          value: 'מוזמן'
        }
      }
    });
  } else {
    goToMyDances(user);
  }
};

const redirectToPreviousUrl = newUrl => {
  const dancesLocation = '/dances';
  newUrl && localStorage.setItem('@markidim:filter_state', newUrl);
  const paramsString = newUrl || localStorage.getItem('@markidim:filter_state');
  const currentLocation = window.location.pathname;
  window.history.pushState({
    search: paramsString
  }, null, window.location.protocol + '//' + window.location.host + dancesLocation + '/?' + paramsString);
  if (currentLocation !== dancesLocation) window.location.reload();
};

const buildQueryParams = params => {
  console.log('params = ', params);
  return query_string__WEBPACK_IMPORTED_MODULE_0___default.a.stringify(params);
};

const setQueryParams = params => {
  const newParams = {};
  const oldParams = getQueryParams();
  Object.keys(params).forEach(k => {
    if (oldParams[k] + '' !== params[k] + '') {
      newParams[k] = params[k];
    }
  });

  if (Object.keys(newParams).length > 0) {
    const paramsString = query_string__WEBPACK_IMPORTED_MODULE_0___default.a.stringify(Object.assign({}, getQueryParams(window.location), newParams));
    localStorage.setItem('@markidim:filter_state', paramsString);
    window.history.pushState({
      search: paramsString
    }, null, window.location.protocol + '//' + window.location.host + window.location.pathname + '?' + paramsString);
  }
};

const clearQueryParams = () => setQueryParams({});

const goBackToRI = history => {
  const returnToIndex = getQueryParams().ri;
  const currentLocation = history.length + 1;
  const numOfStepsToGoBack = currentLocation - returnToIndex;
  history.goBack(numOfStepsToGoBack);
};

const goBackToRD = history => {
  const returnToIndex = getQueryParams().rd;
  const currentLocation = history.length + 1;
  const numOfStepsToGoBack = currentLocation - returnToIndex;
  history.goBack(numOfStepsToGoBack);
};

const goBackToRS = history => {
  const returnToIndex = getQueryParams().rs;
  const currentLocation = history.length + 1;
  const numOfStepsToGoBack = currentLocation - returnToIndex;
  history.goBack(numOfStepsToGoBack);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  getQueryParams,
  buildQueryParams,
  setQueryParams,
  clearQueryParams,
  goBackToRI,
  goBackToRD,
  goBackToRS,
  redirectToPreviousUrl,
  goToDances,
  goToMyDances
});

/***/ }),

/***/ "./src/services/utils.js":
/*!*******************************!*\
  !*** ./src/services/utils.js ***!
  \*******************************/
/*! exports provided: isEmailValid, isPasswordValid, onControlledChange, chunk, isEmpty, isEmptyStr, getArrayOfNum, isArray, getEmptyStrIfNull, formatDate, dateForServer, getStartOfDay, getEndOfDay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmailValid", function() { return isEmailValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPasswordValid", function() { return isPasswordValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onControlledChange", function() { return onControlledChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chunk", function() { return chunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyStr", function() { return isEmptyStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArrayOfNum", function() { return getArrayOfNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmptyStrIfNull", function() { return getEmptyStrIfNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateForServer", function() { return dateForServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStartOfDay", function() { return getStartOfDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEndOfDay", function() { return getEndOfDay; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const isEmailValid = email => email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
const isPasswordValid = password => {
  return password.length >= 8;
};
let lastControlledChange = 0;
const onControlledChange = (text, limit, callback) => {
  setTimeout(() => {
    const now = new Date().getTime();

    if (now - lastControlledChange >= 500 && (text.length > limit || text.length === 0)) {
      callback(text);
    }
  }, 500);
  lastControlledChange = new Date().getTime();
};
const chunk = (arr, size) => {
  return Array.from({
    length: Math.ceil(arr.length / size)
  }, (v, i) => arr.slice(i * size, i * size + size));
};
const isEmpty = arr => !arr || arr.length === 0 || Object.keys(arr).length === 0;
const isEmptyStr = str => str === '' || !str || str.length === 0;
const getArrayOfNum = length => [...Array(length).keys()].map(i => i + 1);
const isArray = obj => {
  return Object.prototype.toString.call(obj) === '[object Array]';
};
const getEmptyStrIfNull = obj => {
  if (obj === null) {
    return '';
  } else return obj;
};
const formatDate = (date, format) => {
  if (!date) {
    return null;
  }

  let d = date;

  if (typeof date === 'object') {
    d = date.date;
  }

  return moment__WEBPACK_IMPORTED_MODULE_0___default()(d).format(format);
};
const dateForServer = date => Math.round(Date.parse(date) / 1000);
const getStartOfDay = date => moment__WEBPACK_IMPORTED_MODULE_0___default()(date).set({
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
});
const getEndOfDay = date => moment__WEBPACK_IMPORTED_MODULE_0___default()(date).set({
  hour: 24,
  minute: 59,
  second: 59,
  millisecond: 999
});

/***/ }),

/***/ "./src/state/actions/app.js":
/*!**********************************!*\
  !*** ./src/state/actions/app.js ***!
  \**********************************/
/*! exports provided: SET_APP_CONFIG, getAppConfig, setAppConfig, setLanguage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_APP_CONFIG", function() { return SET_APP_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppConfig", function() { return getAppConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAppConfig", function() { return setAppConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLanguage", function() { return setLanguage; });
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/api */ "./src/services/api.js");

const SET_APP_CONFIG = 'SET_APP_CONFIG';
const getAppConfig = callback => {
  console.log('getAppConfig called');
  return dispatch => {
    _services_api__WEBPACK_IMPORTED_MODULE_0__["default"].getAppConfig().subscribe(res => {
      console.log('getAppConfig res', res);
      dispatch(setAppConfig(res.data));
      callback(res.data);
    }, err => console.log('getAppConfig error', err));
  };
};
const setAppConfig = appConfig => ({
  type: SET_APP_CONFIG,
  appConfig
});
const setLanguage = language => ({
  type: 'SET_LANGUAGE',
  language
});

/***/ }),

/***/ "./src/state/actions/dances.js":
/*!*************************************!*\
  !*** ./src/state/actions/dances.js ***!
  \*************************************/
/*! exports provided: getAllDances, setDances, setDanceOnAddProcess, setSaveFromReAkumSearch, setDanceStylesOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllDances", function() { return getAllDances; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDances", function() { return setDances; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDanceOnAddProcess", function() { return setDanceOnAddProcess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSaveFromReAkumSearch", function() { return setSaveFromReAkumSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDanceStylesOptions", function() { return setDanceStylesOptions; });
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/api */ "./src/services/api.js");

const getAllDances = (page, pageSize, orderBy, search, filters, fromDate, toDate) => {
  return (dispatch, getState) => {
    _services_api__WEBPACK_IMPORTED_MODULE_0__["default"].getAllDances(page, pageSize, orderBy, search, filters // fromDate,
    // toDate
    ).subscribe(res => {
      console.log('get all dances res', res);
      dispatch(setDances(res.data));
    }, error => {
      console.log('get all dances error', error);
      Promise.resolve();
    });
  };
}; // export const getDanceStylesOptions = () => {
//     return (dispatch) => {
//         api.getDanceStylesOptions().subscribe(
//             (res) => {
//                 console.log('getDancesStyles from api res', res)
//                 dispatch(setDanceStylesOptions(res.data.res))
//             },
//             (error) => console.log('getDancesTypes from api error', error)
//         )
//     }
// }

const setDances = dances => ({
  type: 'SET_DANCES',
  dances
}); //export const SET_DANCE_ON_EDIT = 'SET_DANCE_ON_EDIT'

const setDanceOnAddProcess = dance => ({
  type: 'SET_DANCE_ON_ADD_PROCESS',
  dance
});
const setSaveFromReAkumSearch = saveFromReAkumSearch => ({
  type: 'SET_SAVE_FROM_RE_AKUM_SEARCH',
  saveFromReAkumSearch
});
const setDanceStylesOptions = styles => ({
  type: 'SET_DANCES_STYLES_OPTIONS',
  styles
});

/***/ }),

/***/ "./src/state/actions/index.js":
/*!************************************!*\
  !*** ./src/state/actions/index.js ***!
  \************************************/
/*! exports provided: TOGGLE_EDIT, toggleEditAction, TOGGLE_APPROVE, toggleApproveAction, TOGGLE_REGISTER, toggleRegisterAction, FETCH_DATA, fetchDataAction, TOGGLE_DELETE, toggleDeleteAction, TOGGLE_DANCELIST, toggleDanceListAction, TOGGLE_REGISTER_USER, toggleUserRegisterAction, TOGGLE_LOGIN_USER, toggleLoginAction, TOGGLE_RESET, toggleResetAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_EDIT", function() { return TOGGLE_EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleEditAction", function() { return toggleEditAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_APPROVE", function() { return TOGGLE_APPROVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleApproveAction", function() { return toggleApproveAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_REGISTER", function() { return TOGGLE_REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleRegisterAction", function() { return toggleRegisterAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_DATA", function() { return FETCH_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDataAction", function() { return fetchDataAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_DELETE", function() { return TOGGLE_DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleDeleteAction", function() { return toggleDeleteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_DANCELIST", function() { return TOGGLE_DANCELIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleDanceListAction", function() { return toggleDanceListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_REGISTER_USER", function() { return TOGGLE_REGISTER_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleUserRegisterAction", function() { return toggleUserRegisterAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_LOGIN_USER", function() { return TOGGLE_LOGIN_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleLoginAction", function() { return toggleLoginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_RESET", function() { return TOGGLE_RESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleResetAction", function() { return toggleResetAction; });
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/api */ "./src/services/api.js");

const TOGGLE_EDIT = 'TOGGLE_EDIT';
const toggleEditAction = data => ({
  type: TOGGLE_EDIT,
  data: {
    data
  }
});
const TOGGLE_APPROVE = 'TOGGLE_APPROVE';
const toggleApproveAction = data => ({
  type: TOGGLE_APPROVE,
  data: {
    data
  }
});
const TOGGLE_REGISTER = 'TOGGLE_REGISTER';
const toggleRegisterAction = data => ({
  type: TOGGLE_REGISTER,
  data: {
    data
  }
});
const FETCH_DATA = 'FETCH_DATA';
const fetchDataAction = res => ({
  type: FETCH_DATA,
  data: {
    res
  }
});
const TOGGLE_DELETE = 'TOGGLE_DELETE';
const toggleDeleteAction = data => ({
  type: TOGGLE_DELETE,
  data: {
    data
  }
});
const TOGGLE_DANCELIST = 'TOGGLE_DANCELIST';
const toggleDanceListAction = data => ({
  type: TOGGLE_DANCELIST,
  data: {
    data
  }
});
const TOGGLE_REGISTER_USER = 'TOGGLE_REGISTER_USER';
const toggleUserRegisterAction = data => ({
  type: TOGGLE_REGISTER_USER,
  data: {
    data
  }
});
const TOGGLE_LOGIN_USER = 'TOGGLE_LOGIN_USER';
const toggleLoginAction = data => ({
  type: TOGGLE_LOGIN_USER,
  data: {
    data
  }
});
const TOGGLE_RESET = 'TOGGLE_RESET';
const toggleResetAction = data => ({
  type: TOGGLE_RESET,
  data: {
    data
  }
});

/***/ }),

/***/ "./src/state/actions/logs.js":
/*!***********************************!*\
  !*** ./src/state/actions/logs.js ***!
  \***********************************/
/*! exports provided: getAllLogs, setLogs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllLogs", function() { return getAllLogs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLogs", function() { return setLogs; });
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/api */ "./src/services/api.js");

const getAllLogs = (page, pageSize, orderBy, search, filters, fromDate, toDate, userType) => {
  return (dispatch, getState) => {
    _services_api__WEBPACK_IMPORTED_MODULE_0__["default"].getAllLogs(page, pageSize, orderBy, search, filters, fromDate, toDate, userType).subscribe(res => {
      console.log('getAllLogs res', res);
      dispatch(setLogs(res.data));
    }, error => {
      console.log('getAllLogs error', error);
      Promise.resolve();
    });
  };
};
const setLogs = logs => ({
  type: 'SET_LOGS',
  logs
});

/***/ }),

/***/ "./src/state/actions/songs.js":
/*!************************************!*\
  !*** ./src/state/actions/songs.js ***!
  \************************************/
/*! exports provided: setSongs, setVersions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSongs", function() { return setSongs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setVersions", function() { return setVersions; });
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/api */ "./src/services/api.js");
 // export const SET_SONGS = 'SET_SONGS'
// export const SET_SONGS = 'SET_SONGS'

const setSongs = songs => {
  console.log('setSongs songs = ', songs);
  return {
    type: 'SET_SONGS',
    songs
  };
};
const setVersions = versions => {
  console.log('setVersions vers = ', versions);
  return {
    type: 'SET_VERSIONS',
    versions
  };
};

/***/ }),

/***/ "./src/state/actions/users.js":
/*!************************************!*\
  !*** ./src/state/actions/users.js ***!
  \************************************/
/*! exports provided: login, logout, getCurrentUser, getAllUsers, setUser, setUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUser", function() { return getCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllUsers", function() { return getAllUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return setUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUsers", function() { return setUsers; });
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/api */ "./src/services/api.js");

const login = (email, password, errorCallback) => {
  return (dispatch, getState) => {
    _services_api__WEBPACK_IMPORTED_MODULE_0__["default"].login(email, password).subscribe(res => {
      console.log('login res', res);
      dispatch(setUser(res.data));
      dispatch(getCurrentUser());
    }, error => {
      console.log('login error', error);
      errorCallback(error);
      Promise.resolve();
    });
  };
};
const logout = callback => {
  return (dispatch, getState) => {
    _services_api__WEBPACK_IMPORTED_MODULE_0__["default"].logout().subscribe(res => {
      console.log('logout', res);
      localStorage.setItem('@login-cred-key', null);
      dispatch(setUser(null));
      callback();
    }, error => {
      console.log('logout error', error);
      Promise.resolve();
    });
  };
};
const getCurrentUser = callback => {
  return (dispatch, getState) => {
    _services_api__WEBPACK_IMPORTED_MODULE_0__["default"].getCurrentUser().subscribe(res => {
      console.log('get current user res', res);
      dispatch(setUser(res.data));

      if (callback) {
        callback();
      }
    }, error => {
      console.log('get current user error', error);
      Promise.resolve();
    });
  };
};
const getAllUsers = (page, pageSize, orderBy, search, filters) => {
  return (dispatch, getState) => {
    _services_api__WEBPACK_IMPORTED_MODULE_0__["default"].getAllUsers(page, pageSize, orderBy, search, filters).subscribe(res => {
      // console.log('get all users res', res)
      dispatch(setUsers(res.data));
    }, error => {
      console.log('get all users error', error);
      Promise.resolve();
    });
  };
};
const setUser = user => ({
  type: 'SET_USER',
  user
});
const setUsers = users => ({
  type: 'SET_USERS',
  users
});

/***/ }),

/***/ "./src/state/reducers/app.js":
/*!***********************************!*\
  !*** ./src/state/reducers/app.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const defaultState = {
  headerHeight: 54,
  language: localStorage.getItem('@markidim:language') || 'he'
};

const appReducer = (state = defaultState, action) => {
  // console.log("app reducer action = ", action)
  switch (action.type) {
    case 'SET_LANGUAGE':
      return { ...state,
        language: action.language
      };

    case 'SET_APP_CONFIG':
      return Object.assign({}, state, {
        headerHeight: action.appConfig
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (appReducer);

/***/ }),

/***/ "./src/state/reducers/dances.js":
/*!**************************************!*\
  !*** ./src/state/reducers/dances.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state_actions_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @state/actions/index.js */ "./src/state/actions/index.js");

let danceData = {};
const defaultState = {};

const dancesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case _state_actions_index_js__WEBPACK_IMPORTED_MODULE_0__["FETCH_DATA"]:
      return fetchData(action.data);

    case 'SET_DANCES':
      return Object.assign({}, state, {
        dances: action.dances
      });

    case 'SET_DANCE_ON_ADD_PROCESS':
      return Object.assign({}, state, {
        danceOnAddProcess: action.dance
      });

    case 'SET_SAVE_FROM_RE_AKUM_SEARCH':
      return Object.assign({}, state, {
        saveFromReAkumSearch: action.saveFromReAkumSearch
      });

    case 'SET_DANCES_STYLES_OPTIONS':
      return Object.assign({}, state, {
        danceStylesOptions: action.styles
      });

    default:
      return state;
  }
};

function fetchData(data) {
  console.log(data);
  danceData = data;
  return { ...danceData
  };
}

/* harmony default export */ __webpack_exports__["default"] = (dancesReducer);

/***/ }),

/***/ "./src/state/reducers/logs.js":
/*!************************************!*\
  !*** ./src/state/reducers/logs.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const defaultState = {};

const logsReducer = (state = defaultState, action) => {
  // console.log("app reducer action = ", action)
  switch (action.type) {
    case 'SET_LOGS':
      return Object.assign({}, state, {
        logs: action.logs
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (logsReducer);

/***/ }),

/***/ "./src/state/reducers/screens.js":
/*!***************************************!*\
  !*** ./src/state/reducers/screens.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state_actions_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @state/actions/index.js */ "./src/state/actions/index.js");

let editView = false;
let approveView = false;
let registerSongView = false;
let registerView = false;
let loginView = false;
let resetPasswordView = false;
const defaultState = {
  dance: null,
  initialize: false,
  editView: editView,
  approveView: approveView,
  registerSongView: registerSongView,
  registerView: registerView,
  loginView: loginView,
  resetPasswordView: resetPasswordView
};

const screensReducer = (state = defaultState, action) => {
  switch (action.type) {
    case _state_actions_index_js__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_EDIT"]:
      return toggleEditView();

    case _state_actions_index_js__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_APPROVE"]:
      return toggleApproveView();

    case _state_actions_index_js__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_REGISTER"]:
      return toggleRegisterView();

    case _state_actions_index_js__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_REGISTER_USER"]:
      return toggleRegisterUser();

    case _state_actions_index_js__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_LOGIN_USER"]:
      console.log('toggle login');
      return toggleLoginUser();

    case _state_actions_index_js__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_RESET"]:
      return toggleReset();
    //  case FETCH_DATA:
    //  return fetchData(action.data);

    default:
      return state;
  }
};

function toggleLoginUser() {
  defaultState.loginView = !defaultState.loginView;
  return { ...defaultState
  };
}

function toggleRegisterUser() {
  defaultState.registerView = !defaultState.registerView;
  return { ...defaultState
  };
}

function toggleEditView() {
  defaultState.editView = !defaultState.editView;
  return { ...defaultState
  };
}

function toggleApproveView() {
  defaultState.approveView = !defaultState.approveView;
  return { ...defaultState
  };
}

function toggleRegisterView() {
  defaultState.registerSongView = !defaultState.registerSongView;
  return { ...defaultState
  };
}

function toggleReset() {
  defaultState.resetPasswordView = !defaultState.resetPasswordView;
  return { ...defaultState
  };
}

/* harmony default export */ __webpack_exports__["default"] = (screensReducer);

/***/ }),

/***/ "./src/state/reducers/songs.js":
/*!*************************************!*\
  !*** ./src/state/reducers/songs.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state_actions_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @state/actions/app */ "./src/state/actions/app.js");

const defaultState = {};

const songsReducer = (state = defaultState, action) => {
  // console.log("app reducer action = ", action)
  switch (action.type) {
    case 'SET_SONGS':
      return Object.assign({}, state, {
        songs: action.songs
      });

    case 'SET_VERSIONS':
      return Object.assign({}, state, {
        versions: action.versions
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (songsReducer);

/***/ }),

/***/ "./src/state/reducers/users.js":
/*!*************************************!*\
  !*** ./src/state/reducers/users.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state_actions_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @state/actions/index.js */ "./src/state/actions/index.js");

let deleteView = false;
let danceListView = false;
let editUserView = false;
const defaultState = {
  user: null,
  initialize: false,
  deleteView: deleteView,
  danceListView: danceListView,
  editUserView: editUserView,
  users: null,
  userPermittedDances: null
};

const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case _state_actions_index_js__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_DELETE"]:
      return toggleDeleteView();

    case _state_actions_index_js__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_DANCELIST"]:
      return toggleDanceListView();

    case _state_actions_index_js__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_EDIT"]:
      return toggleEditView();

    case 'SET_USER':
      return Object.assign({}, state, {
        user: action.user
      });

    case 'SET_USERS':
      return Object.assign({}, state, {
        users: action.users
      });

    default:
      return state;
  }
};

function toggleEditView() {
  defaultState.editUserView = !defaultState.editUserView;
  return { ...defaultState
  };
}

function toggleDeleteView() {
  defaultState.deleteView = !defaultState.deleteView;
  return { ...defaultState
  };
}

function toggleDanceListView() {
  defaultState.danceListView = !defaultState.danceListView;
  return { ...defaultState
  };
}

/* harmony default export */ __webpack_exports__["default"] = (usersReducer);

/***/ }),

/***/ "./src/state/store.js":
/*!****************************!*\
  !*** ./src/state/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _state_reducers_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @state/reducers/users */ "./src/state/reducers/users.js");
/* harmony import */ var _state_reducers_screens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @state/reducers/screens */ "./src/state/reducers/screens.js");
/* harmony import */ var _state_reducers_dances__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @state/reducers/dances */ "./src/state/reducers/dances.js");
/* harmony import */ var _state_reducers_songs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @state/reducers/songs */ "./src/state/reducers/songs.js");
/* harmony import */ var _state_reducers_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @state/reducers/app */ "./src/state/reducers/app.js");
/* harmony import */ var _state_reducers_logs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @state/reducers/logs */ "./src/state/reducers/logs.js");









const reducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  usersReducer: _state_reducers_users__WEBPACK_IMPORTED_MODULE_3__["default"],
  screensReducer: _state_reducers_screens__WEBPACK_IMPORTED_MODULE_4__["default"],
  dancesReducer: _state_reducers_dances__WEBPACK_IMPORTED_MODULE_5__["default"],
  songsReducer: _state_reducers_songs__WEBPACK_IMPORTED_MODULE_6__["default"],
  appReducer: _state_reducers_app__WEBPACK_IMPORTED_MODULE_7__["default"],
  logsReducer: _state_reducers_logs__WEBPACK_IMPORTED_MODULE_8__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducers, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"] // logger
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)));

/***/ }),

/***/ "./src/state/uses/app.js":
/*!*******************************!*\
  !*** ./src/state/uses/app.js ***!
  \*******************************/
/*! exports provided: useAppConfig, useLanguage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAppConfig", function() { return useAppConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLanguage", function() { return useLanguage; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

const useAppConfig = () => Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(state => state.appReducer && state.appReducer.appConfig, () => {});
const useLanguage = () => Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(state => state.appReducer.language, () => {});

/***/ }),

/***/ "./src/state/uses/dances.js":
/*!**********************************!*\
  !*** ./src/state/uses/dances.js ***!
  \**********************************/
/*! exports provided: useDance, useDances, useDanceOnAddProcess, useDanceStylesOptions, useSaveFromReAkumSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDance", function() { return useDance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDances", function() { return useDances; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDanceOnAddProcess", function() { return useDanceOnAddProcess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDanceStylesOptions", function() { return useDanceStylesOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSaveFromReAkumSearch", function() { return useSaveFromReAkumSearch; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

const useDance = () => Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(state => state.dancesReducer.dance, () => {});
const useDances = () => Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(state => state.dancesReducer.dances, () => {});
const useDanceOnAddProcess = () => Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(state => state.dancesReducer.danceOnAddProcess, () => {});
const useDanceStylesOptions = () => Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(state => state.dancesReducer.danceStylesOptions, () => {});
const useSaveFromReAkumSearch = () => Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(state => state.dancesReducer.saveFromReAkumSearch, () => {});

/***/ }),

/***/ "./src/state/uses/logs.js":
/*!********************************!*\
  !*** ./src/state/uses/logs.js ***!
  \********************************/
/*! exports provided: useLogs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLogs", function() { return useLogs; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

const useLogs = () => Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(state => state.logsReducer.logs, () => {});

/***/ }),

/***/ "./src/state/uses/songs.js":
/*!*********************************!*\
  !*** ./src/state/uses/songs.js ***!
  \*********************************/
/*! exports provided: useSongs, useVersions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSongs", function() { return useSongs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useVersions", function() { return useVersions; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

const useSongs = () => Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(state => state.songsReducer.songs, () => {});
const useVersions = () => Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(state => state.songsReducer.versions, () => {});

/***/ }),

/***/ "./src/state/uses/users.js":
/*!*********************************!*\
  !*** ./src/state/uses/users.js ***!
  \*********************************/
/*! exports provided: useUser, useUsers, useDancesLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUser", function() { return useUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUsers", function() { return useUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDancesLeft", function() { return useDancesLeft; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

const useUser = () => Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(state => state.usersReducer.user, () => {});
const useUsers = () => Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(state => state.usersReducer.users, () => {});
const useDancesLeft = () => Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(state => state.usersReducer.user ? state.usersReducer.user.max_paralleled_orders - state.usersReducer.user.ordered_dances_counter - state.usersReducer.user.approved_dances_counter : 0, () => {});

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/vitaly/markidim/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/vitaly/markidim/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map