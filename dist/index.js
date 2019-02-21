/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/assign-deep/index.js":
/*!*******************************************!*\
  !*** ./node_modules/assign-deep/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * assign-deep <https://github.com/jonschlinkert/assign-deep>
 *
 * Copyright (c) 2017-present, Jon Schlinkert.
 * Released under the MIT License.
 */



const assignSymbols = __webpack_require__(/*! assign-symbols */ "./node_modules/assign-deep/node_modules/assign-symbols/index.js");
const toString = Object.prototype.toString;
const assign = module.exports = (target, ...args) => {
  let i = 0;
  if (isPrimitive(target)) target = args[i++];
  if (!target) target = {};
  for (; i < args.length; i++) {
    if (isObject(args[i])) {
      for (const key of Object.keys(args[i])) {
        if (isObject(target[key]) && isObject(args[i][key])) {
          assign(target[key], args[i][key]);
        } else {
          target[key] = args[i][key];
        }
      }
      assignSymbols(target, args[i]);
    }
  }
  return target;
};

function isObject(val) {
  return typeof val === 'function' || toString.call(val) === '[object Object]';
}

function isPrimitive(val) {
  return typeof val === 'object' ? val === null : typeof val !== 'function';
}


/***/ }),

/***/ "./node_modules/assign-deep/node_modules/assign-symbols/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/assign-deep/node_modules/assign-symbols/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * assign-symbols <https://github.com/jonschlinkert/assign-symbols>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Licensed under the MIT License.
 */



const toString = Object.prototype.toString;
const isEnumerable = Object.prototype.propertyIsEnumerable;
const getSymbols = Object.getOwnPropertySymbols;

module.exports = (target, ...args) => {
  if (!isObject(target)) {
    throw new TypeError('expected the first argument to be an object');
  }

  if (args.length === 0 || typeof Symbol !== 'function' || typeof getSymbols !== 'function') {
    return target;
  }

  for (let arg of args) {
    let names = getSymbols(arg);

    for (let key of names) {
      if (isEnumerable.call(arg, key)) {
        target[key] = arg[key];
      }
    }
  }
  return target;
};

function isObject(val) {
  return typeof val === 'function' || toString.call(val) === '[object Object]' || Array.isArray(val);
}


/***/ }),

/***/ "./node_modules/prop-types/factoryWithThrowingShims.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ "./node_modules/prop-types/factoryWithThrowingShims.js")();
}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/generateHexSVG.js":
/*!*******************************!*\
  !*** ./src/generateHexSVG.js ***!
  \*******************************/
/*! exports provided: generateHexSVG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateHexSVG", function() { return generateHexSVG; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vec2 =
/*#__PURE__*/
function () {
  function Vec2(x, y) {
    _classCallCheck(this, Vec2);

    this.x = x;
    this.y = y;
  }

  _createClass(Vec2, [{
    key: "magnitude",
    value: function magnitude() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }, {
    key: "scalarMultiple",
    value: function scalarMultiple(k) {
      return new Vec2(k * this.x, k * this.y);
    }
  }, {
    key: "normalize",
    value: function normalize() {
      return this.scalarMultiple(1 / this.magnitude());
    }
  }, {
    key: "add",
    value: function add(v2) {
      return new Vec2(this.x + v2.x, this.y + v2.y);
    }
  }, {
    key: "subtract",
    value: function subtract(v2) {
      return this.add(v2.scalarMultiple(-1));
    }
  }]);

  return Vec2;
}();

var SVGCommands =
/*#__PURE__*/
function () {
  function SVGCommands() {
    _classCallCheck(this, SVGCommands);

    this.commands = [];
  }

  _createClass(SVGCommands, [{
    key: "toString",
    value: function toString() {
      return this.commands.join(' ');
    } //svg move to command

  }, {
    key: "M",
    value: function M(vec2) {
      this.commands.push("M".concat(vec2.x, " ").concat(vec2.y));
      return this;
    } //svg draw line to point from current position command

  }, {
    key: "L",
    value: function L(vec2) {
      this.commands.push("L".concat(vec2.x, " ").concat(vec2.y));
      return this;
    } //svg bezier quadratic curve command

  }, {
    key: "Q",
    value: function Q(controlVec2, endVec2) {
      this.commands.push("Q".concat(controlVec2.x, " ").concat(controlVec2.y, " ").concat(endVec2.x, " ").concat(endVec2.y));
      return this;
    } //svg shortcut close path command

  }, {
    key: "Z",
    value: function Z() {
      this.commands.push('Z');
      return this;
    }
  }]);

  return SVGCommands;
}(); //returns the path's "d" attribute for the hexagon


function generateHexSVG(sideLength, borderRadius) {
  //from geometry of a hexagon
  var width = Math.sqrt(3) * sideLength;
  var height = 2 * sideLength; //a, b, c, d, e and f represent the vertices

  var a, b, c, d, e, f; //start at the top point

  a = new Vec2(width / 2, 0);
  b = new Vec2(width, height / 4);
  c = new Vec2(width, 3 * height / 4);
  d = new Vec2(width / 2, height);
  e = new Vec2(0, 3 * height / 4);
  f = new Vec2(0, height / 4);

  if (borderRadius == 0) {
    var pointyHexagon = new SVGCommands();
    return pointyHexagon.M(a).L(b).L(c).L(d).L(e).L(f).Z().toString();
  }
  /*for hexagons with curved corners, we use the quadratic curve command
  the vertex itself will be the control point
  the start point will be a point slightly to the left of the vertex along the perimeter of the hexagon
  and the end point will be a point slightly to the right of the vertex along the perimeter of the hexagon
  the distance that the start and end points are along the adjacent sides is given by the curve radius*/


  var dl = f.subtract(a).normalize().scalarMultiple(borderRadius);
  var dr = b.subtract(a).normalize().scalarMultiple(borderRadius);
  var dd = new Vec2(0, borderRadius);
  var roundedHexagon = new SVGCommands();
  roundedHexagon.M(a.add(dl)).Q(a, a.add(dr)).L(b.subtract(dr)).Q(b, b.add(dd)).L(c.subtract(dd)).Q(c, c.add(dl)).L(d.subtract(dl)).Q(d, d.subtract(dr)).L(e.add(dr)).Q(e, e.subtract(dd)).L(f.add(dd)).Q(f, f.subtract(dl)).Z();
  return roundedHexagon.toString();
}

/***/ }),

/***/ "./src/hexagon.js":
/*!************************!*\
  !*** ./src/hexagon.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hexagon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _generateHexSVG__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generateHexSVG */ "./src/generateHexSVG.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var elevationStyleHover = function elevationStyleHover(elevation) {
  return {
    cursor: 'pointer',
    transform: "translateY(".concat(elevation / 2, "px)")
  };
};

var elevationStyleActive = function elevationStyleActive(elevation) {
  return {
    cursor: 'pointer',
    transition: 'all 0.1s ease',
    transform: "translateY(".concat(elevation, "px)")
  };
};

var Hexagon =
/*#__PURE__*/
function (_Component) {
  _inherits(Hexagon, _Component);

  function Hexagon(props) {
    var _this;

    _classCallCheck(this, Hexagon);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Hexagon).call(this, props));
    var _this$props = _this.props,
        elevation = _this$props.elevation,
        stroke = _this$props.stroke,
        strokeWidth = _this$props.strokeWidth,
        _this$props$styles = _this$props.styles,
        normal = _this$props$styles.normal,
        hover = _this$props$styles.hover,
        active = _this$props$styles.active;
    var thHexagonStyleBase = {
      userSelect: 'none',
      stroke: stroke,
      strokeWidth: "".concat(strokeWidth, "px"),
      transition: 'all 0.2s ease'
    };
    _this.thHexagonStyleNormal = Object.assign({}, thHexagonStyleBase, normal);
    _this.thHexagonStyleHover = Object.assign({}, thHexagonStyleBase, elevation ? elevationStyleHover(elevation) : {}, hover);
    _this.thHexagonStyleActive = Object.assign({}, thHexagonStyleBase, elevation ? elevationStyleActive(elevation) : {}, active);
    _this.state = {
      thHexagonStyle: _this.thHexagonStyleNormal
    };
    return _this;
  }

  _createClass(Hexagon, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          sideLength = _this$props2.sideLength,
          borderRadius = _this$props2.borderRadius,
          elevation = _this$props2.elevation,
          shadow = _this$props2.shadow,
          img = _this$props2.img,
          text = _this$props2.text,
          textStyle = _this$props2.textStyle,
          href = _this$props2.href,
          target = _this$props2.target,
          onClick = _this$props2.onClick,
          fill = _this$props2.fill;
      var thHexagonStyle = this.state.thHexagonStyle;
      var width = Math.sqrt(3) * sideLength;
      var height = 2 * sideLength + elevation;
      var fontSizeOffset = textStyle.fontSize ? 0.3 * parseInt(textStyle.fontSize) : 0;
      var hexagon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        fill: fill,
        d: Object(_generateHexSVG__WEBPACK_IMPORTED_MODULE_2__["generateHexSVG"])(sideLength, borderRadius)
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("image", {
        href: img,
        width: 0.7 * width,
        height: 0.7 * height,
        x: 0.15 * width,
        y: 0.12 * height
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
        fill: "#bbb",
        strokeWidth: "0",
        style: textStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
        x: width / 2,
        y: height / 2 + fontSizeOffset,
        textAnchor: "middle"
      }, text)));
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        viewBox: "0 0 ".concat(width, " ").concat(height),
        width: width,
        height: height
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        y: elevation
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        fill: shadow,
        d: Object(_generateHexSVG__WEBPACK_IMPORTED_MODULE_2__["generateHexSVG"])(sideLength, borderRadius)
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        style: thHexagonStyle,
        onMouseOver: function onMouseOver() {
          return _this2.setState({
            thHexagonStyle: _this2.thHexagonStyleHover
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({
            thHexagonStyle: _this2.thHexagonStyleNormal
          });
        },
        onMouseDown: function onMouseDown() {
          return _this2.setState({
            thHexagonStyle: _this2.thHexagonStyleActive
          });
        },
        onMouseUp: function onMouseUp() {
          return _this2.setState({
            thHexagonStyle: _this2.thHexagonStyleHover
          });
        },
        onClick: onClick
      }, !href ? hexagon : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: href,
        target: target || '_blank'
      }, hexagon)));
    }
  }]);

  return Hexagon;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


Hexagon.defaultProps = {
  sideLength: 100,
  borderRadius: 12,
  fill: 'white',
  stroke: '#bbb',
  strokeWidth: 0,
  elevation: 12,
  shadow: '#e2e2e2',
  img: '',
  text: '',
  textStyle: {},
  styles: {
    normal: {},
    hover: {},
    active: {}
  },
  href: null,
  target: null,
  onClick: function onClick() {}
};
Hexagon.propTypes = {
  sideLength: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  borderRadius: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  fill: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  stroke: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  elevation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  shadow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  img: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  textStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  styles: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    normal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    hover: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
  }),
  href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  target: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _hexagon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hexagon */ "./src/hexagon.js");
/* harmony import */ var _tiled_hexagons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tiled-hexagons */ "./src/tiled-hexagons.js");


module.exports = {
  Hexagon: _hexagon__WEBPACK_IMPORTED_MODULE_0__["default"],
  TiledHexagons: _tiled_hexagons__WEBPACK_IMPORTED_MODULE_1__["default"]
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/tiled-hexagons.js":
/*!*******************************!*\
  !*** ./src/tiled-hexagons.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TiledHexagons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assign_deep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assign-deep */ "./node_modules/assign-deep/index.js");
/* harmony import */ var assign_deep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assign_deep__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hexagon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hexagon */ "./src/hexagon.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var TiledHexagons =
/*#__PURE__*/
function (_Component) {
  _inherits(TiledHexagons, _Component);

  function TiledHexagons(props) {
    _classCallCheck(this, TiledHexagons);

    return _possibleConstructorReturn(this, _getPrototypeOf(TiledHexagons).call(this, props));
  }

  _createClass(TiledHexagons, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          tiles = _this$props.tiles,
          tileSideLengths = _this$props.tileSideLengths,
          tileBorderRadii = _this$props.tileBorderRadii,
          tileElevations = _this$props.tileElevations,
          tileStrokeWidths = _this$props.tileStrokeWidths,
          tileGap = _this$props.tileGap,
          maxHorizontal = _this$props.maxHorizontal,
          tileStyles = _this$props.tileStyles,
          tileTextStyles = _this$props.tileTextStyles;
      var tileCount = tiles.length;
      var singleTileWidth = Math.sqrt(3) * tileSideLengths;
      var singleTileHeight = 2 * tileSideLengths + tileElevations;
      var columnCount = getColumnCount(tileCount, maxHorizontal);
      var XConst = singleTileWidth + tileGap;
      var YConst = 3 * tileSideLengths / 2 + tileElevations + tileGap;
      var fullWidth = XConst * (maxHorizontal == 1 ? 1.5 : Math.min(tileCount, maxHorizontal));
      var fullHeight = singleTileHeight + tileGap + (columnCount - 1) * YConst;
      var ranges = getRanges(columnCount, maxHorizontal);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        width: fullWidth,
        height: fullHeight
      }, tiles.map(function (_ref, i) {
        var fill = _ref.fill,
            stroke = _ref.stroke,
            shadow = _ref.shadow,
            img = _ref.img,
            text = _ref.text,
            textStyle = _ref.textStyle,
            styles = _ref.styles,
            href = _ref.href,
            target = _ref.target,
            onClick = _ref.onClick;

        var _getMultipliers = getMultipliers(i, ranges),
            XMultiplier = _getMultipliers.XMultiplier,
            YMultiplier = _getMultipliers.YMultiplier; //deep merge & clone


        var mergedStyles = assign_deep__WEBPACK_IMPORTED_MODULE_2___default()(mergedStyles, JSON.parse(JSON.stringify(tileStyles)), styles);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
          key: i,
          x: XMultiplier * XConst,
          y: YMultiplier * YConst,
          width: singleTileWidth,
          height: singleTileHeight
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hexagon__WEBPACK_IMPORTED_MODULE_3__["default"], {
          sideLength: tileSideLengths,
          borderRadius: tileBorderRadii,
          elevation: tileElevations,
          img: img,
          text: text,
          textStyle: Object.assign({}, tileTextStyles, textStyle),
          styles: mergedStyles,
          fill: fill,
          stroke: stroke,
          strokeWidth: tileStrokeWidths,
          shadow: shadow,
          href: href,
          target: target,
          onClick: onClick
        }));
      }));
    }
  }]);

  return TiledHexagons;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


TiledHexagons.defaultProps = {
  tiles: [],
  tileSideLengths: _hexagon__WEBPACK_IMPORTED_MODULE_3__["default"].defaultProps.width,
  tileBorderRadii: _hexagon__WEBPACK_IMPORTED_MODULE_3__["default"].defaultProps.borderRadius,
  tileElevations: _hexagon__WEBPACK_IMPORTED_MODULE_3__["default"].defaultProps.elevation,
  tileStrokeWidths: _hexagon__WEBPACK_IMPORTED_MODULE_3__["default"].defaultProps.strokeWidth,
  tileGap: 4,
  tileStyles: {
    normal: {},
    hover: {},
    active: {}
  },
  tileTextStyles: {},
  maxHorizontal: 5
};
TiledHexagons.propTypes = {
  tiles: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    fill: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    stroke: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    shadow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    img: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    textStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    styles: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      normal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
      hover: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
      active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
    }),
    href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    target: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
  })),
  tileSideLengths: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  tileBorderRadii: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  tileElevations: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  tileStrokeWidths: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  tileGap: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  tileStyles: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    normal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    hover: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
  }),
  tileTextStyles: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  maxHorizontal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};

var getRanges = function getRanges(columnCount, maxHorizontal) {
  if (maxHorizontal == 1) {
    return Array(columnCount).fill(0).map(function (_, i) {
      return [i, i];
    });
  }

  var ranges = [[0, maxHorizontal - 1]];

  for (var c = 1; c <= columnCount; c++) {
    var evenOddModifier = c % 2 == 0 ? 0 : -1;
    ranges[c] = [ranges[c - 1][1] + 1, ranges[c - 1][1] + maxHorizontal + evenOddModifier];
  }

  return ranges;
};

var getColumnCount = function getColumnCount(tileCount, maxHorizontal) {
  if (maxHorizontal == 1) return tileCount;
  var columnCount = 0;
  var i = 0;

  while (i <= tileCount) {
    i += columnCount % 2 == 0 ? maxHorizontal : maxHorizontal - 1;
    columnCount++;
  }

  return columnCount;
};

var getMultipliers = function getMultipliers(i, ranges) {
  var YMultiplier = ranges.findIndex(function (range) {
    return i >= range[0] && i <= range[1];
  });
  var XMultiplier = i - ranges[YMultiplier][0] + (YMultiplier % 2 == 0 ? 0 : 0.5);
  return {
    XMultiplier: XMultiplier,
    YMultiplier: YMultiplier
  };
};

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"React","root":"React"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = undefined;

/***/ })

/******/ });