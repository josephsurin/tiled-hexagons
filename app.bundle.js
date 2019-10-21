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
/******/ 	return __webpack_require__(__webpack_require__.s = "./examples/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/generateHexSVG.js":
/*!********************************!*\
  !*** ./dist/generateHexSVG.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateHexSVG = generateHexSVG;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

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

/***/ "./dist/hexagon.js":
/*!*************************!*\
  !*** ./dist/hexagon.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _generateHexSVG = __webpack_require__(/*! ./generateHexSVG */ "./dist/generateHexSVG.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

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

      var hexagon = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
        fill: fill,
        d: (0, _generateHexSVG.generateHexSVG)(sideLength, borderRadius)
      }), _react["default"].createElement("image", {
        href: img,
        width: 0.7 * width,
        height: 0.7 * height,
        x: 0.15 * width,
        y: 0.12 * height
      }), _react["default"].createElement("text", {
        fill: "#bbb",
        strokeWidth: "0",
        style: textStyle
      }, _react["default"].createElement("tspan", {
        x: width / 2,
        y: height / 2 + fontSizeOffset,
        textAnchor: "middle"
      }, text)));

      return _react["default"].createElement("svg", {
        viewBox: "0 0 ".concat(width, " ").concat(height),
        width: width,
        height: height
      }, _react["default"].createElement("svg", {
        y: elevation
      }, _react["default"].createElement("path", {
        fill: shadow,
        d: (0, _generateHexSVG.generateHexSVG)(sideLength, borderRadius)
      })), _react["default"].createElement("g", {
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
      }, !href ? hexagon : _react["default"].createElement("a", {
        href: href,
        target: target || '_blank'
      }, hexagon)));
    }
  }]);

  return Hexagon;
}(_react.Component);

exports["default"] = Hexagon;
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
  sideLength: _propTypes["default"].number,
  borderRadius: _propTypes["default"].number,
  fill: _propTypes["default"].string,
  stroke: _propTypes["default"].string,
  strokeWidth: _propTypes["default"].number,
  elevation: _propTypes["default"].number,
  shadow: _propTypes["default"].string,
  img: _propTypes["default"].string,
  text: _propTypes["default"].string,
  textStyle: _propTypes["default"].object,
  styles: _propTypes["default"].shape({
    normal: _propTypes["default"].object,
    hover: _propTypes["default"].object,
    active: _propTypes["default"].object
  }),
  href: _propTypes["default"].string,
  target: _propTypes["default"].string,
  onClick: _propTypes["default"].func
};

/***/ }),

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hexagon = _interopRequireDefault(__webpack_require__(/*! ./hexagon */ "./dist/hexagon.js"));

var _tiledHexagons = _interopRequireDefault(__webpack_require__(/*! ./tiled-hexagons */ "./dist/tiled-hexagons.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = {
  Hexagon: _hexagon["default"],
  TiledHexagons: _tiledHexagons["default"]
};

/***/ }),

/***/ "./dist/tiled-hexagons.js":
/*!********************************!*\
  !*** ./dist/tiled-hexagons.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _assignDeep = _interopRequireDefault(__webpack_require__(/*! assign-deep */ "./node_modules/assign-deep/index.js"));

var _hexagon = _interopRequireDefault(__webpack_require__(/*! ./hexagon */ "./dist/hexagon.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

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
      return _react["default"].createElement("svg", {
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


        var mergedStyles = (0, _assignDeep["default"])(mergedStyles, JSON.parse(JSON.stringify(tileStyles)), styles);
        return _react["default"].createElement("svg", {
          key: i,
          x: XMultiplier * XConst,
          y: YMultiplier * YConst,
          width: singleTileWidth,
          height: singleTileHeight
        }, _react["default"].createElement(_hexagon["default"], {
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
}(_react.Component);

exports["default"] = TiledHexagons;
TiledHexagons.defaultProps = {
  tiles: [],
  tileSideLengths: _hexagon["default"].defaultProps.width,
  tileBorderRadii: _hexagon["default"].defaultProps.borderRadius,
  tileElevations: _hexagon["default"].defaultProps.elevation,
  tileStrokeWidths: _hexagon["default"].defaultProps.strokeWidth,
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
  tiles: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    fill: _propTypes["default"].string,
    stroke: _propTypes["default"].string,
    shadow: _propTypes["default"].string,
    img: _propTypes["default"].string,
    text: _propTypes["default"].string,
    textStyle: _propTypes["default"].object,
    styles: _propTypes["default"].shape({
      normal: _propTypes["default"].object,
      hover: _propTypes["default"].object,
      active: _propTypes["default"].object
    }),
    href: _propTypes["default"].string,
    target: _propTypes["default"].string,
    onClick: _propTypes["default"].func
  })),
  tileSideLengths: _propTypes["default"].number,
  tileBorderRadii: _propTypes["default"].number,
  tileElevations: _propTypes["default"].number,
  tileStrokeWidths: _propTypes["default"].number,
  tileGap: _propTypes["default"].number,
  tileStyles: _propTypes["default"].shape({
    normal: _propTypes["default"].object,
    hover: _propTypes["default"].object,
    active: _propTypes["default"].object
  }),
  tileTextStyles: _propTypes["default"].object,
  maxHorizontal: _propTypes["default"].number
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

/***/ "./examples/app.js":
/*!*************************!*\
  !*** ./examples/app.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismjs/components/prism-core */ "./node_modules/prismjs/components/prism-core.js");
/* harmony import */ var prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs/components/prism-markup */ "./node_modules/prismjs/components/prism-markup.js");
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs/components/prism-clike */ "./node_modules/prismjs/components/prism-clike.js");
/* harmony import */ var prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs/components/prism-javascript */ "./node_modules/prismjs/components/prism-javascript.js");
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prismjs_components_prism_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismjs/components/prism-jsx */ "./node_modules/prismjs/components/prism-jsx.js");
/* harmony import */ var prismjs_components_prism_jsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_jsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prismjs_themes_prism_tomorrow_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prismjs/themes/prism-tomorrow.css */ "./node_modules/prismjs/themes/prism-tomorrow.css");
/* harmony import */ var prismjs_themes_prism_tomorrow_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismjs_themes_prism_tomorrow_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _dist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dist */ "./dist/index.js");
/* harmony import */ var _dist__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_dist__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_react_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/react.svg */ "./examples/assets/react.svg");
/* harmony import */ var _assets_react_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_react_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _examples__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples */ "./examples/examples.js");











var import1 = 'import { Hexagon, TiledHexagons } from \'tiled-hexagons\'';
var import2 = 'const { Hexagon, TiledHexagons } = require(\'tiled-hexagons\')';

var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "app-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "github-btn"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_dist__WEBPACK_IMPORTED_MODULE_8__["TiledHexagons"], {
    maxHorizontal: 1,
    tileSideLengths: 30,
    tileBorderRadii: 6,
    tileElevations: 8,
    tileTextStyles: {
      fontFamily: 'Font Awesome Solid',
      fontSize: '24px'
    },
    tiles: [{
      text: 'github',
      href: 'https://github.com/josephsurin/tiled-hexagons',
      textStyle: {
        fontFamily: 'Font Awesome Brands'
      }
    }, {
      text: 'smile-beam',
      href: 'https://josephsurin.me'
    }]
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "launching-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "launching"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_dist__WEBPACK_IMPORTED_MODULE_8__["Hexagon"], {
    img: _assets_react_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
    sideLength: 80,
    borderRadius: 12,
    href: "https://reactjs.org/"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title-text"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "react-title"
  }, "React"), "Hexagon Buttons")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about"
  }, "Tiled Hexagons is a simple React button component set to help your render one or multiple tessellated hexagon buttons.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", null, "Take a look at some examples! ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_dist__WEBPACK_IMPORTED_MODULE_8__["Hexagon"], {
    sideLength: 80,
    borderRadius: 12,
    elevation: 16,
    fill: "#7cebff",
    shadow: "#64c5d6",
    text: "arrow-down",
    textStyle: {
      fontFamily: 'Font Awesome Solid',
      fontSize: '36px',
      fill: 'white'
    },
    onClick: function onClick() {
      react_scroll__WEBPACK_IMPORTED_MODULE_7__["scroller"].scrollTo('examples', {
        duration: 600,
        smooth: true
      });
    }
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "basics"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "The Basics"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Installation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "codeblock"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, "npm install tiled-hexagons")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Importing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "codeblock"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", {
    dangerouslySetInnerHTML: {
      __html: prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_1___default.a.highlight(import1, prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_1___default.a.languages.jsx, 'jsx')
    }
  })), "OR:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "codeblock"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", {
    dangerouslySetInnerHTML: {
      __html: prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_1___default.a.highlight(import2, prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_1___default.a.languages.jsx, 'jsx')
    }
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_7__["Element"], {
    name: "examples"
  }), _examples__WEBPACK_IMPORTED_MODULE_10__["default"].map(function (example, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: example.title,
      style: {
        marginTop: '100px'
      },
      className: "example-wrapper example-wrapper-".concat(i + 1)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "example-title example-title-".concat(i + 1)
    }, example.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "example-subtitle example-subtitle-".concat(i + 1)
    }, example.subtitle || ''), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "example-body example-body-".concat(i + 1)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "example-content example-content-".concat(i + 1)
    }, example.example), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "example-code example-code-".concat(i + 1)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", {
      dangerouslySetInnerHTML: {
        __html: prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_1___default.a.highlight(example.code, prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_1___default.a.languages.jsx, 'jsx')
      }
    }))));
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "more"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "For a list of props and more usage info, check out the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/josephsurin/tiled-hexagons"
  }, "github page."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
    style: {
      margin: '40px 0'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_dist__WEBPACK_IMPORTED_MODULE_8__["TiledHexagons"], {
    tileSideLengths: 24,
    tileBorderRadii: 4,
    tileElevations: 6,
    tileTextStyles: {
      fontSize: '12px',
      fill: '#7cebff'
    },
    tiles: [{
      text: 'code',
      textStyle: {
        fontFamily: 'Font Awesome Solid'
      },
      href: 'https://github.com/josephsurin/tiled-hexagons'
    }, {
      text: 'by',
      textStyle: {
        fontFamily: 'Source Sans Pro',
        fill: '#bbb'
      }
    }, {
      text: 'JOSEPH',
      textStyle: {
        fontFamily: 'Source Sans Pro',
        fontSize: '9px'
      },
      href: 'https://josephsurin.me'
    }]
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./examples/assets/arch.svg":
/*!**********************************!*\
  !*** ./examples/assets/arch.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/arch.svg";

/***/ }),

/***/ "./examples/assets/electron.svg":
/*!**************************************!*\
  !*** ./examples/assets/electron.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/electron.svg";

/***/ }),

/***/ "./examples/assets/graphql.svg":
/*!*************************************!*\
  !*** ./examples/assets/graphql.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/graphql.svg";

/***/ }),

/***/ "./examples/assets/mongodb.svg":
/*!*************************************!*\
  !*** ./examples/assets/mongodb.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/mongodb.svg";

/***/ }),

/***/ "./examples/assets/nodejs.svg":
/*!************************************!*\
  !*** ./examples/assets/nodejs.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/nodejs.svg";

/***/ }),

/***/ "./examples/assets/react.svg":
/*!***********************************!*\
  !*** ./examples/assets/react.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/react.svg";

/***/ }),

/***/ "./examples/assets/reactivex.svg":
/*!***************************************!*\
  !*** ./examples/assets/reactivex.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/reactivex.svg";

/***/ }),

/***/ "./examples/assets/redux.svg":
/*!***********************************!*\
  !*** ./examples/assets/redux.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/redux.svg";

/***/ }),

/***/ "./examples/assets/sass.svg":
/*!**********************************!*\
  !*** ./examples/assets/sass.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/sass.svg";

/***/ }),

/***/ "./examples/examples.js":
/*!******************************!*\
  !*** ./examples/examples.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_nodejs_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/nodejs.svg */ "./examples/assets/nodejs.svg");
/* harmony import */ var _assets_nodejs_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_nodejs_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_react_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/react.svg */ "./examples/assets/react.svg");
/* harmony import */ var _assets_react_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_react_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_redux_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/redux.svg */ "./examples/assets/redux.svg");
/* harmony import */ var _assets_redux_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_redux_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_reactivex_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/reactivex.svg */ "./examples/assets/reactivex.svg");
/* harmony import */ var _assets_reactivex_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_reactivex_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_sass_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/sass.svg */ "./examples/assets/sass.svg");
/* harmony import */ var _assets_sass_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_sass_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_electron_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/electron.svg */ "./examples/assets/electron.svg");
/* harmony import */ var _assets_electron_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_electron_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_graphql_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/graphql.svg */ "./examples/assets/graphql.svg");
/* harmony import */ var _assets_graphql_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_graphql_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_mongodb_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/mongodb.svg */ "./examples/assets/mongodb.svg");
/* harmony import */ var _assets_mongodb_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_mongodb_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_arch_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/arch.svg */ "./examples/assets/arch.svg");
/* harmony import */ var _assets_arch_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_arch_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _dist__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dist */ "./dist/index.js");
/* harmony import */ var _dist__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_dist__WEBPACK_IMPORTED_MODULE_10__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* eslint-disable indent */










 //#region example1

var title1 = 'Example #1 - simple button';
var example1 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_dist__WEBPACK_IMPORTED_MODULE_10__["Hexagon"], {
  img: _assets_react_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
  sideLength: 80,
  borderRadius: 12,
  fill: "#fafafa",
  shadow: "#e2e2e2",
  href: "https://reactjs.org/"
});
var code1 = "<Hexagon\n  img={'assets/react.svg'}\n  sideLength={80}\n  borderRadius={12}\n  fill=\"#fafafa\"\n  shadow=\"#e2e2e2\"\n  href=\"https://reactjs.org/\"\n  target=\"_blank\" //open in new tab\n/>"; //#endregion
//#region example2

var title2 = 'Example #2 - click event';

var Example2 =
/*#__PURE__*/
function (_Component) {
  _inherits(Example2, _Component);

  function Example2(props) {
    var _this;

    _classCallCheck(this, Example2);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Example2).call(this, props));
    _this.state = {
      count: 0
    };
    return _this;
  }

  _createClass(Example2, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var count = this.state.count;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_dist__WEBPACK_IMPORTED_MODULE_10__["Hexagon"], {
        sideLength: 80,
        text: count.toString(),
        textStyle: {
          fontFamily: 'Source Sans Pro',
          fontSize: '68px',
          fill: '#7cebff'
        },
        onClick: function onClick() {
          _this2.setState({
            count: _this2.state.count + 1
          });
        }
      });
    }
  }]);

  return Example2;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var example2 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Example2, null);
var code2 = "const textStyle = {\n  fontFamily: 'Source Sans Pro',\n  fontSize: '68px',\n  fill: '#7cebff'\n}\n\nclass Example2 extends Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      count: 0\n    }\n  }\n\n  updateCounter() {\n    this.setState({ count: this.state.count + 1 })\n  }\n\n  render() {\n    let { count } = this.state\n    return (\n      <Hexagon\n        sideLength={80}\n        text={count.toString()}\n        textStyle={textStyle}\n        onClick={this.updateCounter.bind(this)}\n      />\n    )\n  }\n}"; //#endregion
//#region example3

var title3 = 'Example #3 - basic tesselation';
var example3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_dist__WEBPACK_IMPORTED_MODULE_10__["TiledHexagons"], {
  tileSideLengths: 60,
  tileGap: 4,
  tileBorderRadii: 9,
  maxHorizontal: 3,
  tileTextStyles: {
    fontFamily: 'Source Sans Pro',
    fontSize: '64px',
    fill: '#7cebff'
  },
  tiles: [{
    text: 'あ',
    textStyle: {
      fontFamily: 'M1Plus'
    }
  }, {
    text: 'B',
    textStyle: {
      fill: 'white'
    },
    fill: '#7cebff',
    shadow: '#64c5d6'
  }, {
    img: _assets_react_svg__WEBPACK_IMPORTED_MODULE_2___default.a
  }, {
    text: 'angry',
    textStyle: {
      fontFamily: 'Font Awesome Solid'
    }
  }, {
    text: 'E',
    onClick: function onClick() {
      return console.log('clicked!');
    }
  }, {
    text: '😼'
  }, {
    text: 'G'
  }]
});
var code3 = "<TiledHexagons\n  tileSideLengths={60}\n  tileGap={4}\n  tileBorderRadii={9}\n  maxHorizontal={3}\n  tileTextStyles={{\n    fontFamily: 'Source Sans Pro',\n    fontSize: '68px',\n    fill: '#7cebff'\n  }}\n  tiles={[\n    { text: '\u3042',\n      textStyle: {\n        fontFamily: 'M1Plus'\n      }\n    },\n    { text: 'B',\n      textStyle: {\n        fill: 'white'\n      },\n      fill: '#7cebff',\n      shadow: '#64c5d6'\n    },\n    { img: 'assets/react.svg' }\n    { text: 'angry',\n      textStyle: {\n        fontFamily: 'Font Awesome Solid'\n      }\n    },\n    { text: 'E',\n      onClick: () => console.log('clicked!')\n    },\n    { text: '\uD83D\uDE3C' },\n    { text: 'G' }\n  ]}\n/>"; //#endregion
//#region example4

var title4 = 'Example #4 - stacked socials';
var example4 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_dist__WEBPACK_IMPORTED_MODULE_10__["TiledHexagons"], {
  maxHorizontal: 1,
  tileSideLengths: 60,
  tileTextStyles: {
    fontFamily: 'Font Awesome Brands',
    fontSize: '58px',
    fill: 'white'
  },
  tileGap: 0,
  tileBorderRadii: 9,
  tiles: [{
    text: 'facebook-f',
    fill: '#4267b2',
    shadow: '#1a2947',
    href: "https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent('https://github.com/josephsurin/tiled-hexagons'))
  }, {
    text: 'github',
    fill: '#282828',
    shadow: '#1a1a1a',
    href: 'https://github.com/josephsurin/tiled-hexagons'
  }, {
    text: 'twitter',
    fill: '#1dcaff',
    shadow: '#0084b4',
    href: "https://twitter.com/intent/tweet?url=".concat(encodeURIComponent('https://github.com/josephsurin/tiled-hexagons'))
  }]
});
var code4 = "\nconst shareURL = encodeURIComponent('https://github.com/josephsurin/tiled-hexagons')\n<TiledHexagons\n  maxHorizontal={1}\n  tileSideLengths={60}\n  tileTextStyles={{\n    fontFamily: 'Font Awesome Brands',\n    fontSize: '58px',\n    fill: 'white'\n  }}\n  tileGap={0}\n  tileBorderRadii={9}\n  tiles={[\n    {\n      text: 'facebook-f',\n      fill: '#4267b2',\n      shadow: '#1a2947',\n      href: `https://www.facebook.com/sharer/sharer.php?u=${shareURL}}`\n    },\n    {\n      text: 'github',\n      fill: '#282828',\n      shadow: '#1a1a1a',\n      href: 'https://github.com/josephsurin/tiled-hexagons'\n    },\n    {\n      text: 'twitter',\n      fill: '#1dcaff',\n      shadow: '#0084b4',\n      href: `https://twitter.com/intent/tweet?url=${shareURL}}`\n    }\n  ]}\n/>"; //#endregion
//#region example5

var title5 = 'Example #5 - awesome technologies';
var icons = [_assets_nodejs_svg__WEBPACK_IMPORTED_MODULE_1___default.a, _assets_react_svg__WEBPACK_IMPORTED_MODULE_2___default.a, _assets_redux_svg__WEBPACK_IMPORTED_MODULE_3___default.a, _assets_reactivex_svg__WEBPACK_IMPORTED_MODULE_4___default.a, _assets_sass_svg__WEBPACK_IMPORTED_MODULE_5___default.a, _assets_electron_svg__WEBPACK_IMPORTED_MODULE_6___default.a, _assets_graphql_svg__WEBPACK_IMPORTED_MODULE_7___default.a, _assets_mongodb_svg__WEBPACK_IMPORTED_MODULE_8___default.a, _assets_arch_svg__WEBPACK_IMPORTED_MODULE_9___default.a];
var example5 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_dist__WEBPACK_IMPORTED_MODULE_10__["TiledHexagons"], {
  maxHorizontal: 5,
  tileSideLengths: 60,
  tileElevations: 16,
  tileGap: 7,
  tileBorderRadii: 9,
  tiles: icons.map(function (img) {
    return {
      img: img
    };
  })
});
var code5 = "\nconst icons = ['nodejs', 'react', 'redux', 'reactivex', 'sass', 'electron', 'graphql', 'mongodb', 'arch']\n<TiledHexagons\n  maxHorizontal={5}\n  tileSideLengths={60}\n  tileElevations={16}\n  tileGap={7}\n  tileBorderRadii={9}\n  tiles={icons.map(icon => {\n    return { img: `assets/${icon}.svg` }\n  })}\n/>"; //#endregion
//#region example6

var title6 = 'Example #6 - colourful hexgrid';
var subtitle6 = 'Click a tile to randomise the colours! This one renders best on Chrome!';

var ColorScheme = __webpack_require__(/*! color-scheme */ "./node_modules/color-scheme/lib/color-scheme.js");

var shuffle = __webpack_require__(/*! shuffle-array */ "./node_modules/shuffle-array/index.js");

var genColours = function genColours() {
  var cScheme = new ColorScheme();
  cScheme.from_hue(Math.round(Math.random() * 360)).scheme('analogic').variation('soft').distance(0.4);
  return shuffle(cScheme.colors());
};

var darken = function darken(hexString, amount) {
  return hexString.match(/.{1,2}/g).map(function (hex) {
    return Math.round((1 - amount / 100) * parseInt(hex, 16));
  }).map(function (hex) {
    return hex.toString(16);
  }).join('');
};

var Example6 =
/*#__PURE__*/
function (_Component2) {
  _inherits(Example6, _Component2);

  function Example6(props) {
    var _this3;

    _classCallCheck(this, Example6);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Example6).call(this, props));
    _this3.state = {
      colours: genColours()
    };
    return _this3;
  }

  _createClass(Example6, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      var colours = this.state.colours;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_dist__WEBPACK_IMPORTED_MODULE_10__["TiledHexagons"], {
        maxHorizontal: 5,
        tileBorderRadii: 0,
        tileGap: 0,
        tileSideLengths: 60,
        tiles: colours.map(function (colour) {
          return {
            fill: '#' + colour,
            shadow: '#' + darken(colour, 25),
            onClick: function onClick() {
              return _this4.setState({
                colours: genColours()
              });
            }
          };
        })
      });
    }
  }]);

  return Example6;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var example6 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Example6, null);
var code6 = "const ColorScheme = require('color-scheme')\nconst shuffle = require('shuffle-array')\nconst genColours = () => {\n  var cScheme = new ColorScheme()\n  cScheme.from_hue(Math.round(Math.random() * 360))\n    .scheme('analogic')\n    .variation('soft')\n    .distance(0.4)\n  return shuffle(cScheme.colors())\n}\n\nconst darken = (hexString, amount) => {\n  return hexString\n    .match(/.{1,2}/g)\n    .map(hex => (\n      Math.round((1 - amount/100) * parseInt(hex, 16))))\n    .map(hex => hex.toString(16))\n    .join('')\n}\n\nclass Example6 extends Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      colours: genColours()\n    }\n  }\n\n  render() {\n    let { colours } = this.state\n    return <TiledHexagons\n      maxHorizontal={5}\n      tileBorderRadii={0}\n      tileGap={0}\n      tileSideLengths={60}\n      tiles={colours. map(colour => {\n        return {\n          fill: '#'+colour,\n          shadow: '#'+darken(colour, 25),\n          onClick: () => this.setState({\n            colours: genColours()\n          })\n        }\n      })}\n    />\n  }\n}"; //#endregion

/* harmony default export */ __webpack_exports__["default"] = ([{
  title: title1,
  example: example1,
  code: code1
}, {
  title: title2,
  example: example2,
  code: code2
}, {
  title: title3,
  example: example3,
  code: code3
}, {
  title: title4,
  example: example4,
  code: code4
}, {
  title: title5,
  example: example5,
  code: code5
}, {
  title: title6,
  subtitle: subtitle6,
  example: example6,
  code: code6
}]);

/***/ }),

/***/ "./examples/index.js":
/*!***************************!*\
  !*** ./examples/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ "./examples/app.js");



__webpack_require__(/*! ./styles/main.sass */ "./examples/styles/main.sass");


Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById('app'));

/***/ }),

/***/ "./examples/styles/main.sass":
/*!***********************************!*\
  !*** ./examples/styles/main.sass ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

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



const toString = Object.prototype.toString;
const assignSymbols = __webpack_require__(/*! assign-symbols */ "./node_modules/assign-symbols/index.js");

const isValidKey = key => {
  return key !== '__proto__' && key !== 'constructor' && key !== 'prototype';
};

const assign = module.exports = (target, ...args) => {
  let i = 0;
  if (isPrimitive(target)) target = args[i++];
  if (!target) target = {};
  for (; i < args.length; i++) {
    if (isObject(args[i])) {
      for (const key of Object.keys(args[i])) {
        if (isValidKey(key)) {
          if (isObject(target[key]) && isObject(args[i][key])) {
            assign(target[key], args[i][key]);
          } else {
            target[key] = args[i][key];
          }
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

/***/ "./node_modules/assign-symbols/index.js":
/*!**********************************************!*\
  !*** ./node_modules/assign-symbols/index.js ***!
  \**********************************************/
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

/***/ "./node_modules/color-scheme/lib/color-scheme.js":
/*!*******************************************************!*\
  !*** ./node_modules/color-scheme/lib/color-scheme.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Generated by CoffeeScript 1.12.7
(function() {
  var ColorScheme,
    slice = [].slice;

  ColorScheme = (function() {
    var clone, l, len, ref, typeIsArray, word;

    typeIsArray = Array.isArray || function(value) {
      return {}.toString.call(value) === '[object Array]';
    };

    ColorScheme.SCHEMES = {};

    ref = "mono monochromatic contrast triade tetrade analogic".split(/\s+/);
    for (l = 0, len = ref.length; l < len; l++) {
      word = ref[l];
      ColorScheme.SCHEMES[word] = true;
    }

    ColorScheme.PRESETS = {
      "default": [-1, -1, 1, -0.7, 0.25, 1, 0.5, 1],
      pastel: [0.5, -0.9, 0.5, 0.5, 0.1, 0.9, 0.75, 0.75],
      soft: [0.3, -0.8, 0.3, 0.5, 0.1, 0.9, 0.5, 0.75],
      light: [0.25, 1, 0.5, 0.75, 0.1, 1, 0.5, 1],
      hard: [1, -1, 1, -0.6, 0.1, 1, 0.6, 1],
      pale: [0.1, -0.85, 0.1, 0.5, 0.1, 1, 0.1, 0.75]
    };

    ColorScheme.COLOR_WHEEL = {
      0: [255, 0, 0, 100],
      15: [255, 51, 0, 100],
      30: [255, 102, 0, 100],
      45: [255, 128, 0, 100],
      60: [255, 153, 0, 100],
      75: [255, 178, 0, 100],
      90: [255, 204, 0, 100],
      105: [255, 229, 0, 100],
      120: [255, 255, 0, 100],
      135: [204, 255, 0, 100],
      150: [153, 255, 0, 100],
      165: [51, 255, 0, 100],
      180: [0, 204, 0, 80],
      195: [0, 178, 102, 70],
      210: [0, 153, 153, 60],
      225: [0, 102, 178, 70],
      240: [0, 51, 204, 80],
      255: [25, 25, 178, 70],
      270: [51, 0, 153, 60],
      285: [64, 0, 153, 60],
      300: [102, 0, 153, 60],
      315: [153, 0, 153, 60],
      330: [204, 0, 153, 80],
      345: [229, 0, 102, 90]
    };

    function ColorScheme() {
      var colors, m;
      colors = [];
      for (m = 1; m <= 4; m++) {
        colors.push(new ColorScheme.mutablecolor(60));
      }
      this.col = colors;
      this._scheme = 'mono';
      this._distance = 0.5;
      this._web_safe = false;
      this._add_complement = false;
    }


    /*
    
    colors()
    
    Returns an array of 4, 8, 12 or 16 colors in RRGGBB hexidecimal notation
    (without a leading "#") depending on the color scheme and addComplement
    parameter. For each set of four, the first is usually the most saturated color,
    the second a darkened version, the third a pale version and fourth
    a less-pale version.
    
    For example: With a contrast scheme, "colors()" would return eight colors.
    Indexes 1 and 5 could be background colors, 2 and 6 could be foreground colors.
    
    Trust me, it's much better if you check out the Color Scheme web site, whose
    URL is listed in "Description"
     */

    ColorScheme.prototype.colors = function() {
      var dispatch, h, i, j, m, n, output, ref1, used_colors;
      used_colors = 1;
      h = this.col[0].get_hue();
      dispatch = {
        mono: (function(_this) {
          return function() {};
        })(this),
        contrast: (function(_this) {
          return function() {
            used_colors = 2;
            _this.col[1].set_hue(h);
            return _this.col[1].rotate(180);
          };
        })(this),
        triade: (function(_this) {
          return function() {
            var dif;
            used_colors = 3;
            dif = 60 * _this._distance;
            _this.col[1].set_hue(h);
            _this.col[1].rotate(180 - dif);
            _this.col[2].set_hue(h);
            return _this.col[2].rotate(180 + dif);
          };
        })(this),
        tetrade: (function(_this) {
          return function() {
            var dif;
            used_colors = 4;
            dif = 90 * _this._distance;
            _this.col[1].set_hue(h);
            _this.col[1].rotate(180);
            _this.col[2].set_hue(h);
            _this.col[2].rotate(180 + dif);
            _this.col[3].set_hue(h);
            return _this.col[3].rotate(dif);
          };
        })(this),
        analogic: (function(_this) {
          return function() {
            var dif;
            used_colors = _this._add_complement ? 4 : 3;
            dif = 60 * _this._distance;
            _this.col[1].set_hue(h);
            _this.col[1].rotate(dif);
            _this.col[2].set_hue(h);
            _this.col[2].rotate(360 - dif);
            _this.col[3].set_hue(h);
            return _this.col[3].rotate(180);
          };
        })(this)
      };
      dispatch['monochromatic'] = dispatch['mono'];
      if (dispatch[this._scheme] != null) {
        dispatch[this._scheme]();
      } else {
        throw "Unknown color scheme name: " + this._scheme;
      }
      output = [];
      for (i = m = 0, ref1 = used_colors - 1; 0 <= ref1 ? m <= ref1 : m >= ref1; i = 0 <= ref1 ? ++m : --m) {
        for (j = n = 0; n <= 3; j = ++n) {
          output[i * 4 + j] = this.col[i].get_hex(this._web_safe, j);
        }
      }
      return output;
    };


    /*
    
    colorset()
    
    Returns a list of lists of the colors in groups of four. This method simply
    allows you to reference a color in the scheme by its group isntead of its
    absolute index in the list of colors.  I am assuming that "colorset()"
    will make it easier to use this module with the templating systems that are
    out there.
    
    For example, if you were to follow the synopsis, say you wanted to retrieve
    the two darkest colors from the first two groups of the scheme, which is
    typically the second color in the group. You could retrieve them with
    "colors()"
    
        first_background  = (scheme.colors())[1];
        second_background = (scheme.colors())[5];
    
    Or, with this method,
    
        first_background  = (scheme.colorset())[0][1]
        second_background = (scheme.colorset())[1][1]
     */

    ColorScheme.prototype.colorset = function() {
      var flat_colors, grouped_colors;
      flat_colors = clone(this.colors());
      grouped_colors = [];
      while (flat_colors.length > 0) {
        grouped_colors.push(flat_colors.splice(0, 4));
      }
      return grouped_colors;
    };


    /*
    
    from_hue( degrees )
    
    Sets the base color hue, where 'degrees' is an integer. (Values greater than
    359 and less than 0 wrap back around the wheel.)
    
    The default base hue is 0, or bright red.
     */

    ColorScheme.prototype.from_hue = function(h) {
      if (h == null) {
        throw "from_hue needs an argument";
      }
      this.col[0].set_hue(h);
      return this;
    };

    ColorScheme.prototype.rgb2ryb = function() {
      var blue, green, iN, maxgreen, maxyellow, red, rgb, white, yellow;
      rgb = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      if ((rgb[0] != null) && typeIsArray(rgb[0])) {
        rgb = rgb[0];
      }
      red = rgb[0], green = rgb[1], blue = rgb[2];
      white = Math.min(red, green, blue);
      red -= white;
      green -= white;
      blue -= white;
      maxgreen = Math.max(red, green, blue);
      yellow = Math.min(red, green);
      red -= yellow;
      green -= yellow;
      if (blue > 0 && green > 0) {
        blue /= 2;
        green /= 2;
      }
      yellow += green;
      blue += green;
      maxyellow = Math.max(red, yellow, blue);
      if (maxyellow > 0) {
        iN = maxgreen / maxyellow;
        red *= iN;
        yellow *= iN;
        blue *= iN;
      }
      red += white;
      yellow += white;
      blue += white;
      return [Math.floor(red), Math.floor(yellow), Math.floor(blue)];
    };

    ColorScheme.prototype.rgb2hsv = function() {
      var b, d, g, h, max, min, r, rgb, s, v;
      rgb = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      if ((rgb[0] != null) && typeIsArray(rgb[0])) {
        rgb = rgb[0];
      }
      r = rgb[0], g = rgb[1], b = rgb[2];
      r /= 255;
      g /= 255;
      b /= 255;
      min = Math.min.apply(Math, [r, g, b]);
      max = Math.max.apply(Math, [r, g, b]);
      d = max - min;
      v = max;
      s;
      if (d > 0) {
        s = d / max;
      } else {
        return [0, 0, v];
      }
      h = (r === max ? (g - b) / d : (g === max ? 2 + (b - r) / d : 4 + (r - g) / d));
      h *= 60;
      h %= 360;
      return [h, s, v];
    };

    ColorScheme.prototype.rgbToHsv = function() {
      var b, d, g, h, max, min, r, rgb, s, v;
      rgb = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      if ((rgb[0] != null) && typeIsArray(rgb[0])) {
        rgb = rgb[0];
      }
      r = rgb[0], g = rgb[1], b = rgb[2];
      r /= 255;
      g /= 255;
      b /= 255;
      max = Math.max(r, g, b);
      min = Math.min(r, g, b);
      h = void 0;
      s = void 0;
      v = max;
      d = max - min;
      s = max === 0 ? 0 : d / max;
      if (max === min) {
        h = 0;
      } else {
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
        }
        h /= 6;
      }
      return [h, s, v];
    };


    /*
    
    from_hex( color )
    
    Sets the base color to the given color, where 'color' is in the hexidecimal
    form RRGGBB. 'color' should not be preceded with a hash (#).
    
    The default base color is the equivalent of #ff0000, or bright red.
     */

    ColorScheme.prototype.from_hex = function(hex) {
      var b, g, h, h0, h1, h2, hsv, i1, i2, num, r, ref1, ref2, rgbcap, s, v;
      if (hex == null) {
        throw "from_hex needs an argument";
      }
      if (!/^([0-9A-F]{2}){3}$/im.test(hex)) {
        throw "from_hex(" + hex + ") - argument must be in the form of RRGGBB";
      }
      rgbcap = /(..)(..)(..)/.exec(hex).slice(1, 4);
      ref1 = (function() {
        var len1, m, results;
        results = [];
        for (m = 0, len1 = rgbcap.length; m < len1; m++) {
          num = rgbcap[m];
          results.push(parseInt(num, 16));
        }
        return results;
      })(), r = ref1[0], g = ref1[1], b = ref1[2];
      ref2 = this.rgb2ryb([r, g, b]), r = ref2[0], g = ref2[1], b = ref2[2];
      hsv = this.rgbToHsv(r, g, b);
      h0 = hsv[0];
      h1 = 0;
      h2 = 1000;
      i1 = null;
      i2 = null;
      h = null;
      s = null;
      v = null;
      h = hsv[0];
      s = hsv[1];
      v = hsv[2];
      this.from_hue(h * 360);
      this._set_variant_preset([s, v, s, v * 0.7, s * 0.25, 1, s * 0.5, 1]);
      return this;
    };


    /*
    
    add_complement( BOOLEAN )
    
    If BOOLEAN is true, an extra set of colors will be produced using the
    complement of the selected color.
    
    This only works with the analogic color scheme. The default is false.
     */

    ColorScheme.prototype.add_complement = function(b) {
      if (b == null) {
        throw "add_complement needs an argument";
      }
      this._add_complement = b;
      return this;
    };


    /*
    
    web_safe( BOOL )
    
    Sets whether the colors returned by L<"colors()"> or L<"colorset()"> will be
    web-safe.
    
    The default is false.
     */

    ColorScheme.prototype.web_safe = function(b) {
      if (b == null) {
        throw "web_safe needs an argument";
      }
      this._web_safe = b;
      return this;
    };


    /*
    
    distance( FLOAT )
    
    'FLOAT'> must be a value from 0 to 1. You might use this with the "triade"
    "tetrade" or "analogic" color schemes.
    
    The default is 0.5.
     */

    ColorScheme.prototype.distance = function(d) {
      if (d == null) {
        throw "distance needs an argument";
      }
      if (d < 0) {
        throw "distance(" + d + ") - argument must be >= 0";
      }
      if (d > 1) {
        throw "distance(" + d + ") - argument must be <= 1";
      }
      this._distance = d;
      return this;
    };


    /*
    
    scheme( name )
    
    'name' must be a valid color scheme name. See "Color Schemes". The default
    is "mono"
     */

    ColorScheme.prototype.scheme = function(name) {
      if (name == null) {
        return this._scheme;
      } else {
        if (ColorScheme.SCHEMES[name] == null) {
          throw "'" + name + "' isn't a valid scheme name";
        }
        this._scheme = name;
        return this;
      }
    };


    /*
    
    variation( name )
    
    'name' must be a valid color variation name. See "Color Variations"
     */

    ColorScheme.prototype.variation = function(v) {
      if (v == null) {
        throw "variation needs an argument";
      }
      if (ColorScheme.PRESETS[v] == null) {
        throw "'$v' isn't a valid variation name";
      }
      this._set_variant_preset(ColorScheme.PRESETS[v]);
      return this;
    };

    ColorScheme.prototype._set_variant_preset = function(p) {
      var i, m, results;
      results = [];
      for (i = m = 0; m <= 3; i = ++m) {
        results.push(this.col[i].set_variant_preset(p));
      }
      return results;
    };

    clone = function(obj) {
      var flags, key, newInstance;
      if ((obj == null) || typeof obj !== 'object') {
        return obj;
      }
      if (obj instanceof Date) {
        return new Date(obj.getTime());
      }
      if (obj instanceof RegExp) {
        flags = '';
        if (obj.global != null) {
          flags += 'g';
        }
        if (obj.ignoreCase != null) {
          flags += 'i';
        }
        if (obj.multiline != null) {
          flags += 'm';
        }
        if (obj.sticky != null) {
          flags += 'y';
        }
        return new RegExp(obj.source, flags);
      }
      newInstance = new obj.constructor();
      for (key in obj) {
        newInstance[key] = clone(obj[key]);
      }
      return newInstance;
    };

    ColorScheme.mutablecolor = (function() {
      mutablecolor.prototype.hue = 0;

      mutablecolor.prototype.saturation = [];

      mutablecolor.prototype.value = [];

      mutablecolor.prototype.base_red = 0;

      mutablecolor.prototype.base_green = 0;

      mutablecolor.prototype.base_saturation = 0;

      mutablecolor.prototype.base_value = 0;

      function mutablecolor(hue) {
        if (hue == null) {
          throw "No hue specified";
        }
        this.saturation = [];
        this.value = [];
        this.base_red = 0;
        this.base_green = 0;
        this.base_blue = 0;
        this.base_saturation = 0;
        this.base_value = 0;
        this.set_hue(hue);
        this.set_variant_preset(ColorScheme.PRESETS['default']);
      }

      mutablecolor.prototype.get_hue = function() {
        return this.hue;
      };

      mutablecolor.prototype.set_hue = function(h) {
        var avrg, color, colorset1, colorset2, d, derivative1, derivative2, en, i, k;
        avrg = function(a, b, k) {
          return a + Math.round((b - a) * k);
        };
        this.hue = Math.round(h % 360);
        d = this.hue % 15 + (this.hue - Math.floor(this.hue));
        k = d / 15;
        derivative1 = this.hue - Math.floor(d);
        derivative2 = (derivative1 + 15) % 360;
        if (derivative1 === 360) {
          derivative1 = 0;
        }
        if (derivative2 === 360) {
          derivative2 = 0;
        }
        colorset1 = ColorScheme.COLOR_WHEEL[derivative1];
        colorset2 = ColorScheme.COLOR_WHEEL[derivative2];
        en = {
          red: 0,
          green: 1,
          blue: 2,
          value: 3
        };
        for (color in en) {
          i = en[color];
          this["base_" + color] = avrg(colorset1[i], colorset2[i], k);
        }
        this.base_saturation = avrg(100, 100, k) / 100;
        return this.base_value /= 100;
      };

      mutablecolor.prototype.rotate = function(angle) {
        var newhue;
        newhue = (this.hue + angle) % 360;
        return this.set_hue(newhue);
      };

      mutablecolor.prototype.get_saturation = function(variation) {
        var s, x;
        x = this.saturation[variation];
        s = x < 0 ? -x * this.base_saturation : x;
        if (s > 1) {
          s = 1;
        }
        if (s < 0) {
          s = 0;
        }
        return s;
      };

      mutablecolor.prototype.get_value = function(variation) {
        var v, x;
        x = this.value[variation];
        v = x < 0 ? -x * this.base_value : x;
        if (v > 1) {
          v = 1;
        }
        if (v < 0) {
          v = 0;
        }
        return v;
      };

      mutablecolor.prototype.set_variant = function(variation, s, v) {
        this.saturation[variation] = s;
        return this.value[variation] = v;
      };

      mutablecolor.prototype.set_variant_preset = function(p) {
        var i, m, results;
        results = [];
        for (i = m = 0; m <= 3; i = ++m) {
          results.push(this.set_variant(i, p[2 * i], p[2 * i + 1]));
        }
        return results;
      };

      mutablecolor.prototype.get_hex = function(web_safe, variation) {
        var c, color, formatted, i, k, len1, len2, m, max, min, n, ref1, rgb, rgbVal, s, str, v;
        max = Math.max.apply(Math, (function() {
          var len1, m, ref1, results;
          ref1 = ['red', 'green', 'blue'];
          results = [];
          for (m = 0, len1 = ref1.length; m < len1; m++) {
            color = ref1[m];
            results.push(this["base_" + color]);
          }
          return results;
        }).call(this));
        min = Math.min.apply(Math, (function() {
          var len1, m, ref1, results;
          ref1 = ['red', 'green', 'blue'];
          results = [];
          for (m = 0, len1 = ref1.length; m < len1; m++) {
            color = ref1[m];
            results.push(this["base_" + color]);
          }
          return results;
        }).call(this));
        v = (variation < 0 ? this.base_value : this.get_value(variation)) * 255;
        s = variation < 0 ? this.base_saturation : this.get_saturation(variation);
        k = max > 0 ? v / max : 0;
        rgb = [];
        ref1 = ['red', 'green', 'blue'];
        for (m = 0, len1 = ref1.length; m < len1; m++) {
          color = ref1[m];
          rgbVal = Math.min.apply(Math, [255, Math.round(v - (v - this["base_" + color] * k) * s)]);
          rgb.push(rgbVal);
        }
        if (web_safe) {
          rgb = (function() {
            var len2, n, results;
            results = [];
            for (n = 0, len2 = rgb.length; n < len2; n++) {
              c = rgb[n];
              results.push(Math.round(c / 51) * 51);
            }
            return results;
          })();
        }
        formatted = "";
        for (n = 0, len2 = rgb.length; n < len2; n++) {
          i = rgb[n];
          str = i.toString(16);
          if (str.length < 2) {
            str = "0" + str;
          }
          formatted += str;
        }
        return formatted;
      };

      return mutablecolor;

    })();

    return ColorScheme;

  })();

  if (( true && module !== null) && (module.exports != null)) {
    module.exports = ColorScheme;
  } else {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return ColorScheme;
      }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
  }

}).call(this);

//# sourceMappingURL=color-scheme.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash.throttle/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.throttle/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prismjs/components/prism-clike.js":
/*!********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-clike.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true,
			greedy: true
		}
	],
	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
		lookbehind: true,
		inside: {
			punctuation: /[.\\]/
		}
	},
	'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	'boolean': /\b(?:true|false)\b/,
	'function': /\w+(?=\()/,
	'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
	'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
	'punctuation': /[{}[\];(),.:]/
};


/***/ }),

/***/ "./node_modules/prismjs/components/prism-core.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
		? self // if in worker
		: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

var Prism = (function (_self){

// Private helper vars
var lang = /\blang(?:uage)?-([\w-]+)\b/i;
var uniqueId = 0;

var _ = {
	manual: _self.Prism && _self.Prism.manual,
	disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
	util: {
		encode: function (tokens) {
			if (tokens instanceof Token) {
				return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
			} else if (Array.isArray(tokens)) {
				return tokens.map(_.util.encode);
			} else {
				return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
			}
		},

		type: function (o) {
			return Object.prototype.toString.call(o).slice(8, -1);
		},

		objId: function (obj) {
			if (!obj['__id']) {
				Object.defineProperty(obj, '__id', { value: ++uniqueId });
			}
			return obj['__id'];
		},

		// Deep clone a language definition (e.g. to extend it)
		clone: function deepClone(o, visited) {
			var clone, id, type = _.util.type(o);
			visited = visited || {};

			switch (type) {
				case 'Object':
					id = _.util.objId(o);
					if (visited[id]) {
						return visited[id];
					}
					clone = {};
					visited[id] = clone;

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = deepClone(o[key], visited);
						}
					}

					return clone;

				case 'Array':
					id = _.util.objId(o);
					if (visited[id]) {
						return visited[id];
					}
					clone = [];
					visited[id] = clone;

					o.forEach(function (v, i) {
						clone[i] = deepClone(v, visited);
					});

					return clone;

				default:
					return o;
			}
		}
	},

	languages: {
		extend: function (id, redef) {
			var lang = _.util.clone(_.languages[id]);

			for (var key in redef) {
				lang[key] = redef[key];
			}

			return lang;
		},

		/**
		 * Insert a token before another token in a language literal
		 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
		 * we cannot just provide an object, we need an object and a key.
		 * @param inside The key (or language id) of the parent
		 * @param before The key to insert before.
		 * @param insert Object with the key/value pairs to insert
		 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
		 */
		insertBefore: function (inside, before, insert, root) {
			root = root || _.languages;
			var grammar = root[inside];
			var ret = {};

			for (var token in grammar) {
				if (grammar.hasOwnProperty(token)) {

					if (token == before) {
						for (var newToken in insert) {
							if (insert.hasOwnProperty(newToken)) {
								ret[newToken] = insert[newToken];
							}
						}
					}

					// Do not insert token which also occur in insert. See #1525
					if (!insert.hasOwnProperty(token)) {
						ret[token] = grammar[token];
					}
				}
			}

			var old = root[inside];
			root[inside] = ret;

			// Update references in other language definitions
			_.languages.DFS(_.languages, function(key, value) {
				if (value === old && key != inside) {
					this[key] = ret;
				}
			});

			return ret;
		},

		// Traverse a language definition with Depth First Search
		DFS: function DFS(o, callback, type, visited) {
			visited = visited || {};

			var objId = _.util.objId;

			for (var i in o) {
				if (o.hasOwnProperty(i)) {
					callback.call(o, i, o[i], type || i);

					var property = o[i],
					    propertyType = _.util.type(property);

					if (propertyType === 'Object' && !visited[objId(property)]) {
						visited[objId(property)] = true;
						DFS(property, callback, null, visited);
					}
					else if (propertyType === 'Array' && !visited[objId(property)]) {
						visited[objId(property)] = true;
						DFS(property, callback, i, visited);
					}
				}
			}
		}
	},
	plugins: {},

	highlightAll: function(async, callback) {
		_.highlightAllUnder(document, async, callback);
	},

	highlightAllUnder: function(container, async, callback) {
		var env = {
			callback: callback,
			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
		};

		_.hooks.run('before-highlightall', env);

		var elements = container.querySelectorAll(env.selector);

		for (var i=0, element; element = elements[i++];) {
			_.highlightElement(element, async === true, env.callback);
		}
	},

	highlightElement: function(element, async, callback) {
		// Find language
		var language = 'none', grammar, parent = element;

		while (parent && !lang.test(parent.className)) {
			parent = parent.parentNode;
		}

		if (parent) {
			language = (parent.className.match(lang) || [,'none'])[1].toLowerCase();
			grammar = _.languages[language];
		}

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		if (element.parentNode) {
			// Set language on the parent, for styling
			parent = element.parentNode;

			if (/pre/i.test(parent.nodeName)) {
				parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
			}
		}

		var code = element.textContent;

		var env = {
			element: element,
			language: language,
			grammar: grammar,
			code: code
		};

		var insertHighlightedCode = function (highlightedCode) {
			env.highlightedCode = highlightedCode;

			_.hooks.run('before-insert', env);

			env.element.innerHTML = env.highlightedCode;

			_.hooks.run('after-highlight', env);
			_.hooks.run('complete', env);
			callback && callback.call(env.element);
		}

		_.hooks.run('before-sanity-check', env);

		if (!env.code) {
			_.hooks.run('complete', env);
			return;
		}

		_.hooks.run('before-highlight', env);

		if (!env.grammar) {
			insertHighlightedCode(_.util.encode(env.code));
			return;
		}

		if (async && _self.Worker) {
			var worker = new Worker(_.filename);

			worker.onmessage = function(evt) {
				insertHighlightedCode(evt.data);
			};

			worker.postMessage(JSON.stringify({
				language: env.language,
				code: env.code,
				immediateClose: true
			}));
		}
		else {
			insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
		}
	},

	highlight: function (text, grammar, language) {
		var env = {
			code: text,
			grammar: grammar,
			language: language
		};
		_.hooks.run('before-tokenize', env);
		env.tokens = _.tokenize(env.code, env.grammar);
		_.hooks.run('after-tokenize', env);
		return Token.stringify(_.util.encode(env.tokens), env.language);
	},

	matchGrammar: function (text, strarr, grammar, index, startPos, oneshot, target) {
		for (var token in grammar) {
			if(!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			if (token == target) {
				return;
			}

			var patterns = grammar[token];
			patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				var pattern = patterns[j],
					inside = pattern.inside,
					lookbehind = !!pattern.lookbehind,
					greedy = !!pattern.greedy,
					lookbehindLength = 0,
					alias = pattern.alias;

				if (greedy && !pattern.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
					pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
				}

				pattern = pattern.pattern || pattern;

				// Don’t cache length as it changes during the loop
				for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {

					var str = strarr[i];

					if (strarr.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						return;
					}

					if (str instanceof Token) {
						continue;
					}

					if (greedy && i != strarr.length - 1) {
						pattern.lastIndex = pos;
						var match = pattern.exec(text);
						if (!match) {
							break;
						}

						var from = match.index + (lookbehind ? match[1].length : 0),
						    to = match.index + match[0].length,
						    k = i,
						    p = pos;

						for (var len = strarr.length; k < len && (p < to || (!strarr[k].type && !strarr[k - 1].greedy)); ++k) {
							p += strarr[k].length;
							// Move the index i to the element in strarr that is closest to from
							if (from >= p) {
								++i;
								pos = p;
							}
						}

						// If strarr[i] is a Token, then the match starts inside another Token, which is invalid
						if (strarr[i] instanceof Token) {
							continue;
						}

						// Number of tokens to delete and replace with the new match
						delNum = k - i;
						str = text.slice(pos, p);
						match.index -= pos;
					} else {
						pattern.lastIndex = 0;

						var match = pattern.exec(str),
							delNum = 1;
					}

					if (!match) {
						if (oneshot) {
							break;
						}

						continue;
					}

					if(lookbehind) {
						lookbehindLength = match[1] ? match[1].length : 0;
					}

					var from = match.index + lookbehindLength,
					    match = match[0].slice(lookbehindLength),
					    to = from + match.length,
					    before = str.slice(0, from),
					    after = str.slice(to);

					var args = [i, delNum];

					if (before) {
						++i;
						pos += before.length;
						args.push(before);
					}

					var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias, match, greedy);

					args.push(wrapped);

					if (after) {
						args.push(after);
					}

					Array.prototype.splice.apply(strarr, args);

					if (delNum != 1)
						_.matchGrammar(text, strarr, grammar, i, pos, true, token);

					if (oneshot)
						break;
				}
			}
		}
	},

	tokenize: function(text, grammar) {
		var strarr = [text];

		var rest = grammar.rest;

		if (rest) {
			for (var token in rest) {
				grammar[token] = rest[token];
			}

			delete grammar.rest;
		}

		_.matchGrammar(text, strarr, grammar, 0, 0, false);

		return strarr;
	},

	hooks: {
		all: {},

		add: function (name, callback) {
			var hooks = _.hooks.all;

			hooks[name] = hooks[name] || [];

			hooks[name].push(callback);
		},

		run: function (name, env) {
			var callbacks = _.hooks.all[name];

			if (!callbacks || !callbacks.length) {
				return;
			}

			for (var i=0, callback; callback = callbacks[i++];) {
				callback(env);
			}
		}
	},

	Token: Token
};

_self.Prism = _;

function Token(type, content, alias, matchedStr, greedy) {
	this.type = type;
	this.content = content;
	this.alias = alias;
	// Copy of the full string this token was created from
	this.length = (matchedStr || "").length|0;
	this.greedy = !!greedy;
}

Token.stringify = function(o, language) {
	if (typeof o == 'string') {
		return o;
	}

	if (Array.isArray(o)) {
		return o.map(function(element) {
			return Token.stringify(element, language);
		}).join('');
	}

	var env = {
		type: o.type,
		content: Token.stringify(o.content, language),
		tag: 'span',
		classes: ['token', o.type],
		attributes: {},
		language: language
	};

	if (o.alias) {
		var aliases = Array.isArray(o.alias) ? o.alias : [o.alias];
		Array.prototype.push.apply(env.classes, aliases);
	}

	_.hooks.run('wrap', env);

	var attributes = Object.keys(env.attributes).map(function(name) {
		return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
	}).join(' ');

	return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';
};

if (!_self.document) {
	if (!_self.addEventListener) {
		// in Node.js
		return _;
	}

	if (!_.disableWorkerMessageHandler) {
		// In worker
		_self.addEventListener('message', function (evt) {
			var message = JSON.parse(evt.data),
				lang = message.language,
				code = message.code,
				immediateClose = message.immediateClose;

			_self.postMessage(_.highlight(code, _.languages[lang], lang));
			if (immediateClose) {
				_self.close();
			}
		}, false);
	}

	return _;
}

//Get current script and highlight
var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

if (script) {
	_.filename = script.src;

	if (!_.manual && !script.hasAttribute('data-manual')) {
		if(document.readyState !== "loading") {
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(_.highlightAll);
			} else {
				window.setTimeout(_.highlightAll, 16);
			}
		}
		else {
			document.addEventListener('DOMContentLoaded', _.highlightAll);
		}
	}
}

return _;

})(_self);

if ( true && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
	global.Prism = Prism;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/prismjs/components/prism-javascript.js":
/*!*************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-javascript.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.javascript = Prism.languages.extend('clike', {
	'class-name': [
		Prism.languages.clike['class-name'],
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
			lookbehind: true
		}
	],
	'keyword': [
		{
			pattern: /((?:^|})\s*)(?:catch|finally)\b/,
			lookbehind: true
		},
		{
			pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: true
		},
	],
	'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	'operator': /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
});

Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
		lookbehind: true,
		greedy: true
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
		alias: 'function'
	},
	'parameter': [
		{
			pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		}
	],
	'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
	'template-string': {
		pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
		greedy: true,
		inside: {
			'template-punctuation': {
				pattern: /^`|`$/,
				alias: 'string'
			},
			'interpolation': {
				pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
				lookbehind: true,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\${|}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	}
});

if (Prism.languages.markup) {
	Prism.languages.markup.tag.addInlined('script', 'javascript');
}

Prism.languages.js = Prism.languages.javascript;


/***/ }),

/***/ "./node_modules/prismjs/components/prism-jsx.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-jsx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(Prism) {

var javascript = Prism.util.clone(Prism.languages.javascript);

Prism.languages.jsx = Prism.languages.extend('markup', javascript);
Prism.languages.jsx.tag.pattern= /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i;

Prism.languages.jsx.tag.inside['tag'].pattern = /^<\/?[^\s>\/]*/i;
Prism.languages.jsx.tag.inside['attr-value'].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i;
Prism.languages.jsx.tag.inside['tag'].inside['class-name'] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;

Prism.languages.insertBefore('inside', 'attr-name', {
	'spread': {
		pattern: /\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,
		inside: {
			'punctuation': /\.{3}|[{}.]/,
			'attr-value': /\w+/
		}
	}
}, Prism.languages.jsx.tag);

Prism.languages.insertBefore('inside', 'attr-value',{
	'script': {
		// Allow for two levels of nesting
		pattern: /=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,
		inside: {
			'script-punctuation': {
				pattern: /^=(?={)/,
				alias: 'punctuation'
			},
			rest: Prism.languages.jsx
		},
		'alias': 'language-javascript'
	}
}, Prism.languages.jsx.tag);

// The following will handle plain text inside tags
var stringifyToken = function (token) {
	if (!token) {
		return '';
	}
	if (typeof token === 'string') {
		return token;
	}
	if (typeof token.content === 'string') {
		return token.content;
	}
	return token.content.map(stringifyToken).join('');
};

var walkTokens = function (tokens) {
	var openedTags = [];
	for (var i = 0; i < tokens.length; i++) {
		var token = tokens[i];
		var notTagNorBrace = false;

		if (typeof token !== 'string') {
			if (token.type === 'tag' && token.content[0] && token.content[0].type === 'tag') {
				// We found a tag, now find its kind

				if (token.content[0].content[0].content === '</') {
					// Closing tag
					if (openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1])) {
						// Pop matching opening tag
						openedTags.pop();
					}
				} else {
					if (token.content[token.content.length - 1].content === '/>') {
						// Autoclosed tag, ignore
					} else {
						// Opening tag
						openedTags.push({
							tagName: stringifyToken(token.content[0].content[1]),
							openedBraces: 0
						});
					}
				}
			} else if (openedTags.length > 0 && token.type === 'punctuation' && token.content === '{') {

				// Here we might have entered a JSX context inside a tag
				openedTags[openedTags.length - 1].openedBraces++;

			} else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === 'punctuation' && token.content === '}') {

				// Here we might have left a JSX context inside a tag
				openedTags[openedTags.length - 1].openedBraces--;

			} else {
				notTagNorBrace = true
			}
		}
		if (notTagNorBrace || typeof token === 'string') {
			if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
				// Here we are inside a tag, and not inside a JSX context.
				// That's plain text: drop any tokens matched.
				var plainText = stringifyToken(token);

				// And merge text with adjacent text
				if (i < tokens.length - 1 && (typeof tokens[i + 1] === 'string' || tokens[i + 1].type === 'plain-text')) {
					plainText += stringifyToken(tokens[i + 1]);
					tokens.splice(i + 1, 1);
				}
				if (i > 0 && (typeof tokens[i - 1] === 'string' || tokens[i - 1].type === 'plain-text')) {
					plainText = stringifyToken(tokens[i - 1]) + plainText;
					tokens.splice(i - 1, 1);
					i--;
				}

				tokens[i] = new Prism.Token('plain-text', plainText, null, plainText);
			}
		}

		if (token.content && typeof token.content !== 'string') {
			walkTokens(token.content);
		}
	}
};

Prism.hooks.add('after-tokenize', function (env) {
	if (env.language !== 'jsx' && env.language !== 'tsx') {
		return;
	}
	walkTokens(env.tokens);
});

}(Prism));


/***/ }),

/***/ "./node_modules/prismjs/components/prism-markup.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-markup.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.markup = {
	'comment': /<!--[\s\S]*?-->/,
	'prolog': /<\?[\s\S]+?\?>/,
	'doctype': /<!DOCTYPE[\s\S]+?>/i,
	'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
		greedy: true,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/i,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'attr-value': {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
				inside: {
					'punctuation': [
						/^=/,
						{
							pattern: /^(\s*)["']|["']$/,
							lookbehind: true
						}
					]
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': /&#?[\da-z]{1,8};/i
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
	Prism.languages.markup['entity'];

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function(env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
	/**
	 * Adds an inlined language to markup.
	 *
	 * An example of an inlined language is CSS with `<style>` tags.
	 *
	 * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addInlined('style', 'css');
	 */
	value: function addInlined(tagName, lang) {
		var includedCdataInside = {};
		includedCdataInside['language-' + lang] = {
			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
			lookbehind: true,
			inside: Prism.languages[lang]
		};
		includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;

		var inside = {
			'included-cdata': {
				pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
				inside: includedCdataInside
			}
		};
		inside['language-' + lang] = {
			pattern: /[\s\S]+/,
			inside: Prism.languages[lang]
		};

		var def = {};
		def[tagName] = {
			pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, tagName), 'i'),
			lookbehind: true,
			greedy: true,
			inside: inside
		};

		Prism.languages.insertBefore('markup', 'cdata', def);
	}
});

Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;


/***/ }),

/***/ "./node_modules/prismjs/themes/prism-tomorrow.css":
/*!********************************************************!*\
  !*** ./node_modules/prismjs/themes/prism-tomorrow.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ "./node_modules/react-dom/cjs/react-dom.production.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-dom/cjs/react-dom.production.min.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.10.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(/*! react */ "./node_modules/react/index.js"),n=__webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js"),r=__webpack_require__(/*! scheduler */ "./node_modules/scheduler/index.js");function t(a){for(var b=a.message,c="https://reactjs.org/docs/error-decoder.html?invariant="+b,d=1;d<arguments.length;d++)c+="&args[]="+encodeURIComponent(arguments[d]);a.message="Minified React error #"+b+"; visit "+c+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ";return a}if(!aa)throw t(Error(227));var ba=null,ca={};
function da(){if(ba)for(var a in ca){var b=ca[a],c=ba.indexOf(a);if(!(-1<c))throw t(Error(96),a);if(!ea[c]){if(!b.extractEvents)throw t(Error(97),a);ea[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;if(fa.hasOwnProperty(h))throw t(Error(99),h);fa[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ha(k[e],g,h);e=!0}else f.registrationName?(ha(f.registrationName,g,h),e=!0):e=!1;if(!e)throw t(Error(98),d,a);}}}}
function ha(a,b,c){if(ia[a])throw t(Error(100),a);ia[a]=b;ja[a]=b.eventTypes[c].dependencies}var ea=[],fa={},ia={},ja={};function ka(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var la=!1,ma=null,na=!1,oa=null,pa={onError:function(a){la=!0;ma=a}};function qa(a,b,c,d,e,f,g,h,k){la=!1;ma=null;ka.apply(pa,arguments)}
function ra(a,b,c,d,e,f,g,h,k){qa.apply(this,arguments);if(la){if(la){var l=ma;la=!1;ma=null}else throw t(Error(198));na||(na=!0,oa=l)}}var sa=null,ta=null,ua=null;function va(a,b,c){var d=a.type||"unknown-event";a.currentTarget=ua(c);ra(d,b,void 0,a);a.currentTarget=null}function wa(a,b){if(null==b)throw t(Error(30));if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
function xa(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var ya=null;function za(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)va(a,b[d],c[d]);else b&&va(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function Aa(a){null!==a&&(ya=wa(ya,a));a=ya;ya=null;if(a){xa(a,za);if(ya)throw t(Error(95));if(na)throw a=oa,na=!1,oa=null,a;}}
var Ba={injectEventPluginOrder:function(a){if(ba)throw t(Error(101));ba=Array.prototype.slice.call(a);da()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!ca.hasOwnProperty(c)||ca[c]!==d){if(ca[c])throw t(Error(102),c);ca[c]=d;b=!0}}b&&da()}};
function Ca(a,b){var c=a.stateNode;if(!c)return null;var d=sa(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==typeof c)throw t(Error(231),b,typeof c);
return c}var Da=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Da.hasOwnProperty("ReactCurrentDispatcher")||(Da.ReactCurrentDispatcher={current:null});Da.hasOwnProperty("ReactCurrentBatchConfig")||(Da.ReactCurrentBatchConfig={suspense:null});
var Ea=/^(.*)[\\\/]/,x="function"===typeof Symbol&&Symbol.for,Fa=x?Symbol.for("react.element"):60103,Ga=x?Symbol.for("react.portal"):60106,Ha=x?Symbol.for("react.fragment"):60107,Ia=x?Symbol.for("react.strict_mode"):60108,Ja=x?Symbol.for("react.profiler"):60114,Ka=x?Symbol.for("react.provider"):60109,La=x?Symbol.for("react.context"):60110,Ma=x?Symbol.for("react.concurrent_mode"):60111,Na=x?Symbol.for("react.forward_ref"):60112,Oa=x?Symbol.for("react.suspense"):60113,Pa=x?Symbol.for("react.suspense_list"):
60120,Qa=x?Symbol.for("react.memo"):60115,Ra=x?Symbol.for("react.lazy"):60116;x&&Symbol.for("react.fundamental");x&&Symbol.for("react.responder");x&&Symbol.for("react.scope");var Sa="function"===typeof Symbol&&Symbol.iterator;function Ta(a){if(null===a||"object"!==typeof a)return null;a=Sa&&a[Sa]||a["@@iterator"];return"function"===typeof a?a:null}
function Ua(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}}
function Va(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case Ha:return"Fragment";case Ga:return"Portal";case Ja:return"Profiler";case Ia:return"StrictMode";case Oa:return"Suspense";case Pa:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case La:return"Context.Consumer";case Ka:return"Context.Provider";case Na:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":
"ForwardRef");case Qa:return Va(a.type);case Ra:if(a=1===a._status?a._result:null)return Va(a)}return null}function Wa(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=Va(a.type);c=null;d&&(c=Va(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Ea,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}
var Xa=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Ya=null,Za=null,$a=null;function ab(a){if(a=ta(a)){if("function"!==typeof Ya)throw t(Error(280));var b=sa(a.stateNode);Ya(a.stateNode,a.type,b)}}function bb(a){Za?$a?$a.push(a):$a=[a]:Za=a}function cb(){if(Za){var a=Za,b=$a;$a=Za=null;ab(a);if(b)for(a=0;a<b.length;a++)ab(b[a])}}function db(a,b){return a(b)}function eb(a,b,c,d){return a(b,c,d)}function fb(){}
var gb=db,hb=!1,ib=!1;function jb(){if(null!==Za||null!==$a)fb(),cb()}new Map;new Map;new Map;var kb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lb=Object.prototype.hasOwnProperty,mb={},nb={};
function ob(a){if(lb.call(nb,a))return!0;if(lb.call(mb,a))return!1;if(kb.test(a))return nb[a]=!0;mb[a]=!0;return!1}function pb(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function qb(a,b,c,d){if(null===b||"undefined"===typeof b||pb(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function B(a,b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f}var C={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){C[a]=new B(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];C[b]=new B(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){C[a]=new B(a,2,!1,a.toLowerCase(),null,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){C[a]=new B(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){C[a]=new B(a,3,!1,a.toLowerCase(),null,!1)});
["checked","multiple","muted","selected"].forEach(function(a){C[a]=new B(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){C[a]=new B(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){C[a]=new B(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){C[a]=new B(a,5,!1,a.toLowerCase(),null,!1)});var rb=/[\-:]([a-z])/g;function sb(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(rb,
sb);C[b]=new B(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(rb,sb);C[b]=new B(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(rb,sb);C[b]=new B(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){C[a]=new B(a,1,!1,a.toLowerCase(),null,!1)});
C.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){C[a]=new B(a,1,!1,a.toLowerCase(),null,!0)});function tb(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}
function ub(a,b,c,d){var e=C.hasOwnProperty(b)?C[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(qb(b,c,e,d)&&(c=null),d||null===e?ob(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
function vb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function xb(a){var b=vb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function yb(a){a._valueTracker||(a._valueTracker=xb(a))}function zb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=vb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Ab(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Bb(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=tb(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Cb(a,b){b=b.checked;null!=b&&ub(a,"checked",b,!1)}
function Db(a,b){Cb(a,b);var c=tb(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Eb(a,b.type,c):b.hasOwnProperty("defaultValue")&&Eb(a,b.type,tb(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Gb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Eb(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function Hb(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function Ib(a,b){a=n({children:void 0},b);if(b=Hb(b.children))a.children=b;return a}
function Jb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+tb(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function Kb(a,b){if(null!=b.dangerouslySetInnerHTML)throw t(Error(91));return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Lb(a,b){var c=b.value;if(null==c){c=b.defaultValue;b=b.children;if(null!=b){if(null!=c)throw t(Error(92));if(Array.isArray(b)){if(!(1>=b.length))throw t(Error(93));b=b[0]}c=b}null==c&&(c="")}a._wrapperState={initialValue:tb(c)}}
function Mb(a,b){var c=tb(b.value),d=tb(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function Nb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var Ob={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function Pb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Pb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var Rb,Sb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==Ob.svg||"innerHTML"in a)a.innerHTML=b;else{Rb=Rb||document.createElement("div");Rb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=Rb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function Tb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}function Ub(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Vb={animationend:Ub("Animation","AnimationEnd"),animationiteration:Ub("Animation","AnimationIteration"),animationstart:Ub("Animation","AnimationStart"),transitionend:Ub("Transition","TransitionEnd")},Wb={},Xb={};
Xa&&(Xb=document.createElement("div").style,"AnimationEvent"in window||(delete Vb.animationend.animation,delete Vb.animationiteration.animation,delete Vb.animationstart.animation),"TransitionEvent"in window||delete Vb.transitionend.transition);function Yb(a){if(Wb[a])return Wb[a];if(!Vb[a])return a;var b=Vb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Xb)return Wb[a]=b[c];return a}
var Zb=Yb("animationend"),$b=Yb("animationiteration"),ac=Yb("animationstart"),bc=Yb("transitionend"),dc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ec=!1,fc=[],gc=null,hc=null,ic=null,jc=new Map,kc=new Map,lc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),
mc="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");function nc(a){var b=oc(a);lc.forEach(function(c){pc(c,a,b)});mc.forEach(function(c){pc(c,a,b)})}function qc(a,b,c,d){return{blockedOn:a,topLevelType:b,eventSystemFlags:c|32,nativeEvent:d}}
function rc(a,b){switch(a){case "focus":case "blur":gc=null;break;case "dragenter":case "dragleave":hc=null;break;case "mouseover":case "mouseout":ic=null;break;case "pointerover":case "pointerout":jc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":kc.delete(b.pointerId)}}function sc(a,b,c,d,e){if(null===a||a.nativeEvent!==e)return qc(b,c,d,e);a.eventSystemFlags|=d;return a}
function tc(a,b,c,d){switch(b){case "focus":return gc=sc(gc,a,b,c,d),!0;case "dragenter":return hc=sc(hc,a,b,c,d),!0;case "mouseover":return ic=sc(ic,a,b,c,d),!0;case "pointerover":var e=d.pointerId;jc.set(e,sc(jc.get(e)||null,a,b,c,d));return!0;case "gotpointercapture":return e=d.pointerId,kc.set(e,sc(kc.get(e)||null,a,b,c,d)),!0}return!1}function uc(a){if(null!==a.blockedOn)return!1;var b=vc(a.topLevelType,a.eventSystemFlags,a.nativeEvent);return null!==b?(a.blockedOn=b,!1):!0}
function wc(a,b,c){uc(a)&&c.delete(b)}function xc(){for(ec=!1;0<fc.length;){var a=fc[0];if(null!==a.blockedOn)break;var b=vc(a.topLevelType,a.eventSystemFlags,a.nativeEvent);null!==b?a.blockedOn=b:fc.shift()}null!==gc&&uc(gc)&&(gc=null);null!==hc&&uc(hc)&&(hc=null);null!==ic&&uc(ic)&&(ic=null);jc.forEach(wc);kc.forEach(wc)}function yc(a,b){a.blockedOn===b&&(a.blockedOn=null,ec||(ec=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,xc)))}
function zc(a){function b(b){return yc(b,a)}if(0<fc.length){yc(fc[0],a);for(var c=1;c<fc.length;c++){var d=fc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==gc&&yc(gc,a);null!==hc&&yc(hc,a);null!==ic&&yc(ic,a);jc.forEach(b);kc.forEach(b)}var D=0,E=2,Ac=1024;function Bc(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,(b.effectTag&(E|Ac))!==D&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Cc(a){if(Bc(a)!==a)throw t(Error(188));}
function Dc(a){var b=a.alternate;if(!b){b=Bc(a);if(null===b)throw t(Error(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Cc(e),a;if(f===d)return Cc(e),b;f=f.sibling}throw t(Error(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw t(Error(189));}}if(c.alternate!==d)throw t(Error(190));}if(3!==c.tag)throw t(Error(188));return c.stateNode.current===c?a:b}function Ec(a){a=Dc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function Fc(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function Gc(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function Hc(a,b,c){if(b=Ca(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=wa(c._dispatchListeners,b),c._dispatchInstances=wa(c._dispatchInstances,a)}
function Ic(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Gc(b);for(b=c.length;0<b--;)Hc(c[b],"captured",a);for(b=0;b<c.length;b++)Hc(c[b],"bubbled",a)}}function Jc(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Ca(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=wa(c._dispatchListeners,b),c._dispatchInstances=wa(c._dispatchInstances,a))}function Kc(a){a&&a.dispatchConfig.registrationName&&Jc(a._targetInst,null,a)}
function Lc(a){xa(a,Ic)}function Mc(){return!0}function Nc(){return!1}function F(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?Mc:Nc;this.isPropagationStopped=Nc;return this}
n(F.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=Mc)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=Mc)},persist:function(){this.isPersistent=Mc},isPersistent:Nc,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=Nc;this._dispatchInstances=this._dispatchListeners=null}});F.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
F.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;Oc(c);return c};Oc(F);function Pc(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}
function Qc(a){if(!(a instanceof this))throw t(Error(279));a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function Oc(a){a.eventPool=[];a.getPooled=Pc;a.release=Qc}var Rc=F.extend({animationName:null,elapsedTime:null,pseudoElement:null}),Sc=F.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Tc=F.extend({view:null,detail:null}),Uc=Tc.extend({relatedTarget:null});
function Vc(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var Wc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zc(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Yc[a])?!!b[a]:!1}function $c(){return Zc}
var ad=Tc.extend({key:function(a){if(a.key){var b=Wc[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=Vc(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Xc[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:$c,charCode:function(a){return"keypress"===a.type?Vc(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?Vc(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),bd=0,cd=0,dd=!1,fd=!1,gd=Tc.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:$c,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=bd;bd=a.screenX;return dd?"mousemove"===a.type?a.screenX-
b:0:(dd=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;var b=cd;cd=a.screenY;return fd?"mousemove"===a.type?a.screenY-b:0:(fd=!0,0)}}),hd=gd.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),id=gd.extend({dataTransfer:null}),jd=Tc.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:$c}),kd=F.extend({propertyName:null,
elapsedTime:null,pseudoElement:null}),ld=gd.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),md=[["blur","blur",0],["cancel","cancel",0],["click","click",0],["close","close",0],["contextmenu","contextMenu",0],["copy","copy",0],["cut","cut",0],["auxclick","auxClick",0],["dblclick","doubleClick",0],["dragend","dragEnd",
0],["dragstart","dragStart",0],["drop","drop",0],["focus","focus",0],["input","input",0],["invalid","invalid",0],["keydown","keyDown",0],["keypress","keyPress",0],["keyup","keyUp",0],["mousedown","mouseDown",0],["mouseup","mouseUp",0],["paste","paste",0],["pause","pause",0],["play","play",0],["pointercancel","pointerCancel",0],["pointerdown","pointerDown",0],["pointerup","pointerUp",0],["ratechange","rateChange",0],["reset","reset",0],["seeked","seeked",0],["submit","submit",0],["touchcancel","touchCancel",
0],["touchend","touchEnd",0],["touchstart","touchStart",0],["volumechange","volumeChange",0],["drag","drag",1],["dragenter","dragEnter",1],["dragexit","dragExit",1],["dragleave","dragLeave",1],["dragover","dragOver",1],["mousemove","mouseMove",1],["mouseout","mouseOut",1],["mouseover","mouseOver",1],["pointermove","pointerMove",1],["pointerout","pointerOut",1],["pointerover","pointerOver",1],["scroll","scroll",1],["toggle","toggle",1],["touchmove","touchMove",1],["wheel","wheel",1],["abort","abort",
2],[Zb,"animationEnd",2],[$b,"animationIteration",2],[ac,"animationStart",2],["canplay","canPlay",2],["canplaythrough","canPlayThrough",2],["durationchange","durationChange",2],["emptied","emptied",2],["encrypted","encrypted",2],["ended","ended",2],["error","error",2],["gotpointercapture","gotPointerCapture",2],["load","load",2],["loadeddata","loadedData",2],["loadedmetadata","loadedMetadata",2],["loadstart","loadStart",2],["lostpointercapture","lostPointerCapture",2],["playing","playing",2],["progress",
"progress",2],["seeking","seeking",2],["stalled","stalled",2],["suspend","suspend",2],["timeupdate","timeUpdate",2],[bc,"transitionEnd",2],["waiting","waiting",2]],nd={},od={},pd=0;for(;pd<md.length;pd++){var qd=md[pd],rd=qd[0],sd=qd[1],td=qd[2],ud="on"+(sd[0].toUpperCase()+sd.slice(1)),vd={phasedRegistrationNames:{bubbled:ud,captured:ud+"Capture"},dependencies:[rd],eventPriority:td};nd[sd]=vd;od[rd]=vd}
var wd={eventTypes:nd,getEventPriority:function(a){a=od[a];return void 0!==a?a.eventPriority:2},extractEvents:function(a,b,c,d){var e=od[a];if(!e)return null;switch(a){case "keypress":if(0===Vc(c))return null;case "keydown":case "keyup":a=ad;break;case "blur":case "focus":a=Uc;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=gd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
id;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=jd;break;case Zb:case $b:case ac:a=Rc;break;case bc:a=kd;break;case "scroll":a=Tc;break;case "wheel":a=ld;break;case "copy":case "cut":case "paste":a=Sc;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=hd;break;default:a=F}b=a.getPooled(e,b,c,d);Lc(b);return b}},xd=wd.getEventPriority,zd=10,Ad=[];
function Bd(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d=c;if(3===d.tag)d=d.stateNode.containerInfo;else{for(;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo}if(!d)break;b=c.tag;5!==b&&6!==b||a.ancestors.push(c);c=Cd(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Fc(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=a.eventSystemFlags,h=null,k=0;k<ea.length;k++){var l=ea[k];l&&(l=l.extractEvents(d,b,f,e,g))&&(h=wa(h,l))}Aa(h)}}
var Dd=!0;function G(a,b){Ed(b,a,!1)}function Ed(a,b,c){switch(xd(b)){case 0:var d=Fd.bind(null,b,1);break;case 1:d=Gd.bind(null,b,1);break;default:d=Hd.bind(null,b,1)}c?a.addEventListener(b,d,!0):a.addEventListener(b,d,!1)}function Fd(a,b,c){hb||fb();var d=Hd,e=hb;hb=!0;try{eb(d,a,b,c)}finally{(hb=e)||jb()}}function Gd(a,b,c){Hd(a,b,c)}
function Id(a,b,c,d){if(Ad.length){var e=Ad.pop();e.topLevelType=a;e.eventSystemFlags=b;e.nativeEvent=c;e.targetInst=d;a=e}else a={topLevelType:a,eventSystemFlags:b,nativeEvent:c,targetInst:d,ancestors:[]};try{if(b=Bd,c=a,ib)b(c,void 0);else{ib=!0;try{gb(b,c,void 0)}finally{ib=!1,jb()}}}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,Ad.length<zd&&Ad.push(a)}}
function Hd(a,b,c){if(Dd)if(0<fc.length&&-1<lc.indexOf(a))a=qc(null,a,b,c),fc.push(a);else{var d=vc(a,b,c);null===d?rc(a,c):-1<lc.indexOf(a)?(a=qc(d,a,b,c),fc.push(a)):tc(d,a,b,c)||(rc(a,c),Id(a,b,c,null))}}
function vc(a,b,c){var d=Fc(c),e=Cd(d);if(null!==e)if(d=Bc(e),null===d)e=null;else{var f=d.tag;if(13===f){a:{if(13===d.tag&&(e=d.memoizedState,null===e&&(d=d.alternate,null!==d&&(e=d.memoizedState)),null!==e)){d=e.dehydrated;break a}d=null}if(null!==d)return d;e=null}else if(3===f){if(d.stateNode.hydrate)return 3===d.tag?d.stateNode.containerInfo:null;e=null}else d!==e&&(e=null)}Id(a,b,c,e);return null}
function Jd(a){if(!Xa)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}var Kd=new ("function"===typeof WeakMap?WeakMap:Map);function oc(a){var b=Kd.get(a);void 0===b&&(b=new Set,Kd.set(a,b));return b}
function pc(a,b,c){if(!c.has(a)){switch(a){case "scroll":Ed(b,"scroll",!0);break;case "focus":case "blur":Ed(b,"focus",!0);Ed(b,"blur",!0);c.add("blur");c.add("focus");break;case "cancel":case "close":Jd(a)&&Ed(b,a,!0);break;case "invalid":case "submit":case "reset":break;default:-1===dc.indexOf(a)&&G(a,b)}c.add(a)}}
var Ld={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Md=["Webkit","ms","Moz","O"];Object.keys(Ld).forEach(function(a){Md.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Ld[b]=Ld[a]})});function Nd(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||Ld.hasOwnProperty(a)&&Ld[a]?(""+b).trim():b+"px"}
function Od(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=Nd(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var Pd=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function Qd(a,b){if(b){if(Pd[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw t(Error(137),a,"");if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw t(Error(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw t(Error(61));}if(null!=b.style&&"object"!==typeof b.style)throw t(Error(62),"");}}
function Rd(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}function Sd(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=oc(a);b=ja[b];for(var d=0;d<b.length;d++)pc(b[d],a,c)}function Td(){}
function Ud(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function Vd(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function Wd(a,b){var c=Vd(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Vd(c)}}
function Xd(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Xd(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function Yd(){for(var a=window,b=Ud();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Ud(a.document)}return b}
function Zd(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}var $d="$",ae="/$",be="$?",ce="$!",de=null,ee=null;function fe(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function ge(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var he="function"===typeof setTimeout?setTimeout:void 0,ie="function"===typeof clearTimeout?clearTimeout:void 0;function je(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}
function ke(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if(c===$d||c===ce||c===be){if(0===b)return a;b--}else c===ae&&b++}a=a.previousSibling}return null}var le=Math.random().toString(36).slice(2),me="__reactInternalInstance$"+le,ne="__reactEventHandlers$"+le,oe="__reactContainere$"+le;
function Cd(a){var b=a[me];if(b)return b;for(var c=a.parentNode;c;){if(b=c[oe]||c[me]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=ke(a);null!==a;){if(c=a[me])return c;a=ke(a)}return b}a=c;c=a.parentNode}return null}function pe(a){a=a[me]||a[oe];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function qe(a){if(5===a.tag||6===a.tag)return a.stateNode;throw t(Error(33));}function re(a){return a[ne]||null}var se=null,te=null,ue=null;
function ve(){if(ue)return ue;var a,b=te,c=b.length,d,e="value"in se?se.value:se.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return ue=e.slice(a,1<d?1-d:void 0)}var we=F.extend({data:null}),xe=F.extend({data:null}),ye=[9,13,27,32],ze=Xa&&"CompositionEvent"in window,Ae=null;Xa&&"documentMode"in document&&(Ae=document.documentMode);
var Be=Xa&&"TextEvent"in window&&!Ae,Ce=Xa&&(!ze||Ae&&8<Ae&&11>=Ae),De=String.fromCharCode(32),Ee={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},Fe=!1;
function Ge(a,b){switch(a){case "keyup":return-1!==ye.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function He(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var Ie=!1;function Je(a,b){switch(a){case "compositionend":return He(b);case "keypress":if(32!==b.which)return null;Fe=!0;return De;case "textInput":return a=b.data,a===De&&Fe?null:a;default:return null}}
function Ke(a,b){if(Ie)return"compositionend"===a||!ze&&Ge(a,b)?(a=ve(),ue=te=se=null,Ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return Ce&&"ko"!==b.locale?null:b.data;default:return null}}
var Le={eventTypes:Ee,extractEvents:function(a,b,c,d){var e;if(ze)b:{switch(a){case "compositionstart":var f=Ee.compositionStart;break b;case "compositionend":f=Ee.compositionEnd;break b;case "compositionupdate":f=Ee.compositionUpdate;break b}f=void 0}else Ie?Ge(a,c)&&(f=Ee.compositionEnd):"keydown"===a&&229===c.keyCode&&(f=Ee.compositionStart);f?(Ce&&"ko"!==c.locale&&(Ie||f!==Ee.compositionStart?f===Ee.compositionEnd&&Ie&&(e=ve()):(se=d,te="value"in se?se.value:se.textContent,Ie=!0)),f=we.getPooled(f,
b,c,d),e?f.data=e:(e=He(c),null!==e&&(f.data=e)),Lc(f),e=f):e=null;(a=Be?Je(a,c):Ke(a,c))?(b=xe.getPooled(Ee.beforeInput,b,c,d),b.data=a,Lc(b)):b=null;return null===e?b:null===b?e:[e,b]}},Me={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Me[a.type]:"textarea"===b?!0:!1}
var Oe={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Pe(a,b,c){a=F.getPooled(Oe.change,a,b,c);a.type="change";bb(c);Lc(a);return a}var Qe=null,Re=null;function Se(a){Aa(a)}function Te(a){var b=qe(a);if(zb(b))return a}function Ue(a,b){if("change"===a)return b}var Ve=!1;Xa&&(Ve=Jd("input")&&(!document.documentMode||9<document.documentMode));
function We(){Qe&&(Qe.detachEvent("onpropertychange",Xe),Re=Qe=null)}function Xe(a){if("value"===a.propertyName&&Te(Re))if(a=Pe(Re,a,Fc(a)),hb)Aa(a);else{hb=!0;try{db(Se,a)}finally{hb=!1,jb()}}}function Ye(a,b,c){"focus"===a?(We(),Qe=b,Re=c,Qe.attachEvent("onpropertychange",Xe)):"blur"===a&&We()}function Ze(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return Te(Re)}function $e(a,b){if("click"===a)return Te(b)}function af(a,b){if("input"===a||"change"===a)return Te(b)}
var bf={eventTypes:Oe,_isInputEventSupported:Ve,extractEvents:function(a,b,c,d){var e=b?qe(b):window,f=e.nodeName&&e.nodeName.toLowerCase();if("select"===f||"input"===f&&"file"===e.type)var g=Ue;else if(Ne(e))if(Ve)g=af;else{g=Ze;var h=Ye}else(f=e.nodeName)&&"input"===f.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(g=$e);if(g&&(g=g(a,b)))return Pe(g,c,d);h&&h(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Eb(e,"number",e.value)}},cf={mouseEnter:{registrationName:"onMouseEnter",
dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},df={eventTypes:cf,extractEvents:function(a,b,c,d,e){var f="mouseover"===a||"pointerover"===a,g="mouseout"===a||"pointerout"===a;if(f&&0===(e&32)&&(c.relatedTarget||c.fromElement)||!g&&!f)return null;
e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;if(g){if(g=b,b=(b=c.relatedTarget||c.toElement)?Cd(b):null,null!==b&&(f=Bc(b),b!==f||5!==b.tag&&6!==b.tag))b=null}else g=null;if(g===b)return null;if("mouseout"===a||"mouseover"===a){var h=gd;var k=cf.mouseLeave;var l=cf.mouseEnter;var m="mouse"}else if("pointerout"===a||"pointerover"===a)h=hd,k=cf.pointerLeave,l=cf.pointerEnter,m="pointer";a=null==g?e:qe(g);e=null==b?e:qe(b);k=h.getPooled(k,g,c,d);k.type=m+"leave";k.target=
a;k.relatedTarget=e;c=h.getPooled(l,b,c,d);c.type=m+"enter";c.target=e;c.relatedTarget=a;d=g;m=b;if(d&&m)a:{h=d;l=m;a=0;for(g=h;g;g=Gc(g))a++;g=0;for(b=l;b;b=Gc(b))g++;for(;0<a-g;)h=Gc(h),a--;for(;0<g-a;)l=Gc(l),g--;for(;a--;){if(h===l||h===l.alternate)break a;h=Gc(h);l=Gc(l)}h=null}else h=null;l=h;for(h=[];d&&d!==l;){a=d.alternate;if(null!==a&&a===l)break;h.push(d);d=Gc(d)}for(d=[];m&&m!==l;){a=m.alternate;if(null!==a&&a===l)break;d.push(m);m=Gc(m)}for(m=0;m<h.length;m++)Jc(h[m],"bubbled",k);for(m=
d.length;0<m--;)Jc(d[m],"captured",c);return[k,c]}};function ef(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var ff="function"===typeof Object.is?Object.is:ef,gf=Object.prototype.hasOwnProperty;function hf(a,b){if(ff(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!gf.call(b,c[d])||!ff(a[c[d]],b[c[d]]))return!1;return!0}
var jf=Xa&&"documentMode"in document&&11>=document.documentMode,kf={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},lf=null,mf=null,nf=null,of=!1;
function pf(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(of||null==lf||lf!==Ud(c))return null;c=lf;"selectionStart"in c&&Zd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return nf&&hf(nf,c)?null:(nf=c,a=F.getPooled(kf.select,mf,a,b),a.type="select",a.target=lf,Lc(a),a)}
var qf={eventTypes:kf,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=oc(e);f=ja.onSelect;for(var g=0;g<f.length;g++)if(!e.has(f[g])){e=!1;break a}e=!0}f=!e}if(f)return null;e=b?qe(b):window;switch(a){case "focus":if(Ne(e)||"true"===e.contentEditable)lf=e,mf=b,nf=null;break;case "blur":nf=mf=lf=null;break;case "mousedown":of=!0;break;case "contextmenu":case "mouseup":case "dragend":return of=!1,pf(c,d);case "selectionchange":if(jf)break;
case "keydown":case "keyup":return pf(c,d)}return null}};Ba.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));sa=re;ta=pe;ua=qe;Ba.injectEventPluginsByName({SimpleEventPlugin:wd,EnterLeaveEventPlugin:df,ChangeEventPlugin:bf,SelectEventPlugin:qf,BeforeInputEventPlugin:Le});new Set;var rf=[],sf=-1;function H(a){0>sf||(a.current=rf[sf],rf[sf]=null,sf--)}
function I(a,b){sf++;rf[sf]=a.current;a.current=b}var tf={},J={current:tf},K={current:!1},uf=tf;function vf(a,b){var c=a.type.contextTypes;if(!c)return tf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function N(a){a=a.childContextTypes;return null!==a&&void 0!==a}
function wf(a){H(K,a);H(J,a)}function xf(a){H(K,a);H(J,a)}function zf(a,b,c){if(J.current!==tf)throw t(Error(168));I(J,b,a);I(K,c,a)}function Af(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw t(Error(108),Va(b)||"Unknown",e);return n({},c,{},d)}function Bf(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||tf;uf=J.current;I(J,b,a);I(K,K.current,a);return!0}
function Cf(a,b,c){var d=a.stateNode;if(!d)throw t(Error(169));c?(b=Af(a,b,uf),d.__reactInternalMemoizedMergedChildContext=b,H(K,a),H(J,a),I(J,b,a)):H(K,a);I(K,c,a)}
var Df=r.unstable_runWithPriority,Ef=r.unstable_scheduleCallback,Ff=r.unstable_cancelCallback,Gf=r.unstable_shouldYield,Hf=r.unstable_requestPaint,If=r.unstable_now,Jf=r.unstable_getCurrentPriorityLevel,Kf=r.unstable_ImmediatePriority,Lf=r.unstable_UserBlockingPriority,Mf=r.unstable_NormalPriority,Nf=r.unstable_LowPriority,Of=r.unstable_IdlePriority,Pf={},Qf=void 0!==Hf?Hf:function(){},Rf=null,Sf=null,Tf=!1,Uf=If(),Vf=1E4>Uf?If:function(){return If()-Uf};
function Wf(){switch(Jf()){case Kf:return 99;case Lf:return 98;case Mf:return 97;case Nf:return 96;case Of:return 95;default:throw t(Error(332));}}function Xf(a){switch(a){case 99:return Kf;case 98:return Lf;case 97:return Mf;case 96:return Nf;case 95:return Of;default:throw t(Error(332));}}function Yf(a,b){a=Xf(a);return Df(a,b)}function Zf(a,b,c){a=Xf(a);return Ef(a,b,c)}function $f(a){null===Rf?(Rf=[a],Sf=Ef(Kf,ag)):Rf.push(a);return Pf}function bg(){if(null!==Sf){var a=Sf;Sf=null;Ff(a)}ag()}
function ag(){if(!Tf&&null!==Rf){Tf=!0;var a=0;try{var b=Rf;Yf(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});Rf=null}catch(c){throw null!==Rf&&(Rf=Rf.slice(a+1)),Ef(Kf,bg),c;}finally{Tf=!1}}}function cg(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}var dg={current:null},eg=null,fg=null,gg=null;function hg(){gg=fg=eg=null}function ig(a,b){var c=a.type._context;I(dg,c._currentValue,a);c._currentValue=b}
function jg(a){var b=dg.current;H(dg,a);a.type._context._currentValue=b}function kg(a,b){for(;null!==a;){var c=a.alternate;if(a.childExpirationTime<b)a.childExpirationTime=b,null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);else if(null!==c&&c.childExpirationTime<b)c.childExpirationTime=b;else break;a=a.return}}function lg(a,b){eg=a;gg=fg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(a.expirationTime>=b&&(mg=!0),a.firstContext=null)}
function ng(a,b){if(gg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)gg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===fg){if(null===eg)throw t(Error(308));fg=b;eg.dependencies={expirationTime:0,firstContext:b,responders:null}}else fg=fg.next=b}return a._currentValue}var og=!1;
function pg(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function qg(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function rg(a,b){return{expirationTime:a,suspenseConfig:b,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function sg(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}
function tg(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=pg(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=pg(a.memoizedState),e=c.updateQueue=pg(c.memoizedState)):d=a.updateQueue=qg(e):null===e&&(e=c.updateQueue=qg(d));null===e||d===e?sg(d,b):null===d.lastUpdate||null===e.lastUpdate?(sg(d,b),sg(e,b)):(sg(d,b),e.lastUpdate=b)}
function ug(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=pg(a.memoizedState):vg(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function vg(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=qg(b));return b}
function wg(a,b,c,d,e,f){switch(c.tag){case 1:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case 3:a.effectTag=a.effectTag&-4097|64;case 0:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return n({},d,e);case 2:og=!0}return d}
function xg(a,b,c,d,e){og=!1;b=vg(a,b);for(var f=b.baseState,g=null,h=0,k=b.firstUpdate,l=f;null!==k;){var m=k.expirationTime;m<e?(null===g&&(g=k,f=l),h<m&&(h=m)):(yg(m,k.suspenseConfig),l=wg(a,b,k,l,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=k:(b.lastEffect.nextEffect=k,b.lastEffect=k)));k=k.next}m=null;for(k=b.firstCapturedUpdate;null!==k;){var A=k.expirationTime;A<e?(null===m&&(m=k,null===g&&(f=l)),h<A&&(h=A)):(l=wg(a,b,k,l,c,d),null!==
k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=k:(b.lastCapturedEffect.nextEffect=k,b.lastCapturedEffect=k)));k=k.next}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===m&&(f=l);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;zg(h);a.expirationTime=h;a.memoizedState=l}
function Ag(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);Bg(b.firstEffect,c);b.firstEffect=b.lastEffect=null;Bg(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function Bg(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;if("function"!==typeof c)throw t(Error(191),c);c.call(d)}a=a.nextEffect}}
var Cg=Da.ReactCurrentBatchConfig,Dg=(new aa.Component).refs;function Eg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}
var Ig={isMounted:function(a){return(a=a._reactInternalFiber)?Bc(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=Fg(),e=Cg.suspense;d=Gg(d,a,e);e=rg(d,e);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);tg(a,e);Hg(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=Fg(),e=Cg.suspense;d=Gg(d,a,e);e=rg(d,e);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);tg(a,e);Hg(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=Fg(),d=Cg.suspense;
c=Gg(c,a,d);d=rg(c,d);d.tag=2;void 0!==b&&null!==b&&(d.callback=b);tg(a,d);Hg(a,c)}};function Jg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!hf(c,d)||!hf(e,f):!0}
function Kg(a,b,c){var d=!1,e=tf;var f=b.contextType;"object"===typeof f&&null!==f?f=ng(f):(e=N(b)?uf:J.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?vf(a,e):tf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Ig;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Lg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Ig.enqueueReplaceState(b,b.state,null)}
function Mg(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Dg;var f=b.contextType;"object"===typeof f&&null!==f?e.context=ng(f):(f=N(b)?uf:J.current,e.context=vf(a,f));f=a.updateQueue;null!==f&&(xg(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(Eg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==
typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Ig.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(xg(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var Ng=Array.isArray;
function Og(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw t(Error(309));var d=c.stateNode}if(!d)throw t(Error(147),a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Dg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw t(Error(284));if(!c._owner)throw t(Error(290),a);}return a}
function Pg(a,b){if("textarea"!==a.type)throw t(Error(31),"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"");}
function Qg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=Rg(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
E,c):d;b.effectTag=E;return c}function g(b){a&&null===b.alternate&&(b.effectTag=E);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Sg(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props,d),d.ref=Og(a,b,c),d.return=a,d;d=Tg(c.type,c.key,c.props,null,a.mode,d);d.ref=Og(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=Ug(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Vg(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function A(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Sg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Fa:return c=Tg(b.type,b.key,b.props,null,a.mode,c),c.ref=Og(a,null,b),c.return=a,c;case Ga:return b=Ug(b,a.mode,c),b.return=a,b}if(Ng(b)||
Ta(b))return b=Vg(b,a.mode,c,null),b.return=a,b;Pg(a,b)}return null}function w(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Fa:return c.key===e?c.type===Ha?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case Ga:return c.key===e?l(a,b,c,d):null}if(Ng(c)||Ta(c))return null!==e?null:m(a,b,c,d,null);Pg(a,c)}return null}function L(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Fa:return a=a.get(null===d.key?c:d.key)||null,d.type===Ha?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case Ga:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Ng(d)||Ta(d))return a=a.get(c)||null,m(b,a,d,e,null);Pg(b,d)}return null}function wb(e,g,h,k){for(var l=null,m=null,q=g,y=g=0,z=null;null!==q&&y<h.length;y++){q.index>y?(z=q,q=null):z=q.sibling;var p=w(e,q,h[y],k);if(null===p){null===q&&(q=z);break}a&&
q&&null===p.alternate&&b(e,q);g=f(p,g,y);null===m?l=p:m.sibling=p;m=p;q=z}if(y===h.length)return c(e,q),l;if(null===q){for(;y<h.length;y++)q=A(e,h[y],k),null!==q&&(g=f(q,g,y),null===m?l=q:m.sibling=q,m=q);return l}for(q=d(e,q);y<h.length;y++)z=L(q,e,y,h[y],k),null!==z&&(a&&null!==z.alternate&&q.delete(null===z.key?y:z.key),g=f(z,g,y),null===m?l=z:m.sibling=z,m=z);a&&q.forEach(function(a){return b(e,a)});return l}function M(e,g,h,k){var l=Ta(h);if("function"!==typeof l)throw t(Error(150));h=l.call(h);
if(null==h)throw t(Error(151));for(var m=l=null,q=g,y=g=0,z=null,p=h.next();null!==q&&!p.done;y++,p=h.next()){q.index>y?(z=q,q=null):z=q.sibling;var M=w(e,q,p.value,k);if(null===M){null===q&&(q=z);break}a&&q&&null===M.alternate&&b(e,q);g=f(M,g,y);null===m?l=M:m.sibling=M;m=M;q=z}if(p.done)return c(e,q),l;if(null===q){for(;!p.done;y++,p=h.next())p=A(e,p.value,k),null!==p&&(g=f(p,g,y),null===m?l=p:m.sibling=p,m=p);return l}for(q=d(e,q);!p.done;y++,p=h.next())p=L(q,e,y,p.value,k),null!==p&&(a&&null!==
p.alternate&&q.delete(null===p.key?y:p.key),g=f(p,g,y),null===m?l=p:m.sibling=p,m=p);a&&q.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===Ha&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Fa:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){if(7===k.tag?f.type===Ha:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===Ha?f.props.children:f.props,h);d.ref=Og(a,k,f);d.return=a;a=d;break a}c(a,
k);break}else b(a,k);k=k.sibling}f.type===Ha?(d=Vg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Tg(f.type,f.key,f.props,null,a.mode,h),h.ref=Og(a,d,f),h.return=a,a=h)}return g(a);case Ga:a:{for(k=f.key;null!==d;){if(d.key===k){if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}c(a,d);break}else b(a,d);d=d.sibling}d=Ug(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||
"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=a,a=d):(c(a,d),d=Sg(f,a.mode,h),d.return=a,a=d),g(a);if(Ng(f))return wb(a,d,f,h);if(Ta(f))return M(a,d,f,h);l&&Pg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:throw a=a.type,t(Error(152),a.displayName||a.name||"Component");}return c(a,d)}}var Wg=Qg(!0),Xg=Qg(!1),Yg={},Zg={current:Yg},$g={current:Yg},ah={current:Yg};function bh(a){if(a===Yg)throw t(Error(174));return a}
function ch(a,b){I(ah,b,a);I($g,a,a);I(Zg,Yg,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Qb(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=Qb(b,c)}H(Zg,a);I(Zg,b,a)}function dh(a){H(Zg,a);H($g,a);H(ah,a)}function eh(a){bh(ah.current);var b=bh(Zg.current);var c=Qb(b,a.type);b!==c&&(I($g,a,a),I(Zg,c,a))}function fh(a){$g.current===a&&(H(Zg,a),H($g,a))}var O={current:0};
function gh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||c.data===be||c.data===ce))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if((b.effectTag&64)!==D)return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}function hh(a,b){return{responder:a,props:b}}
var ih=Da.ReactCurrentDispatcher,jh=0,kh=null,P=null,lh=null,mh=null,Q=null,nh=null,oh=0,ph=null,qh=0,rh=!1,sh=null,th=0;function uh(){throw t(Error(321));}function vh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!ff(a[c],b[c]))return!1;return!0}
function wh(a,b,c,d,e,f){jh=f;kh=b;lh=null!==a?a.memoizedState:null;ih.current=null===lh?xh:yh;b=c(d,e);if(rh){do rh=!1,th+=1,lh=null!==a?a.memoizedState:null,nh=mh,ph=Q=P=null,ih.current=yh,b=c(d,e);while(rh);sh=null;th=0}ih.current=zh;a=kh;a.memoizedState=mh;a.expirationTime=oh;a.updateQueue=ph;a.effectTag|=qh;a=null!==P&&null!==P.next;jh=0;nh=Q=mh=lh=P=kh=null;oh=0;ph=null;qh=0;if(a)throw t(Error(300));return b}
function Ah(){ih.current=zh;jh=0;nh=Q=mh=lh=P=kh=null;oh=0;ph=null;qh=0;rh=!1;sh=null;th=0}function Eh(){var a={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};null===Q?mh=Q=a:Q=Q.next=a;return Q}function Fh(){if(null!==nh)Q=nh,nh=Q.next,P=lh,lh=null!==P?P.next:null;else{if(null===lh)throw t(Error(310));P=lh;var a={memoizedState:P.memoizedState,baseState:P.baseState,queue:P.queue,baseUpdate:P.baseUpdate,next:null};Q=null===Q?mh=a:Q.next=a;lh=P.next}return Q}
function Gh(a,b){return"function"===typeof b?b(a):b}
function Hh(a){var b=Fh(),c=b.queue;if(null===c)throw t(Error(311));c.lastRenderedReducer=a;if(0<th){var d=c.dispatch;if(null!==sh){var e=sh.get(c);if(void 0!==e){sh.delete(c);var f=b.memoizedState;do f=a(f,e.action),e=e.next;while(null!==e);ff(f,b.memoizedState)||(mg=!0);b.memoizedState=f;b.baseUpdate===c.last&&(b.baseState=f);c.lastRenderedState=f;return[f,d]}}return[b.memoizedState,d]}d=c.last;var g=b.baseUpdate;f=b.baseState;null!==g?(null!==d&&(d.next=null),d=g.next):d=null!==d?d.next:null;if(null!==
d){var h=e=null,k=d,l=!1;do{var m=k.expirationTime;m<jh?(l||(l=!0,h=g,e=f),m>oh&&(oh=m,zg(oh))):(yg(m,k.suspenseConfig),f=k.eagerReducer===a?k.eagerState:a(f,k.action));g=k;k=k.next}while(null!==k&&k!==d);l||(h=g,e=f);ff(f,b.memoizedState)||(mg=!0);b.memoizedState=f;b.baseUpdate=h;b.baseState=e;c.lastRenderedState=f}return[b.memoizedState,c.dispatch]}
function Ih(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};null===ph?(ph={lastEffect:null},ph.lastEffect=a.next=a):(b=ph.lastEffect,null===b?ph.lastEffect=a.next=a:(c=b.next,b.next=a,a.next=c,ph.lastEffect=a));return a}function Jh(a,b,c,d){var e=Eh();qh|=a;e.memoizedState=Ih(b,c,void 0,void 0===d?null:d)}
function Kh(a,b,c,d){var e=Fh();d=void 0===d?null:d;var f=void 0;if(null!==P){var g=P.memoizedState;f=g.destroy;if(null!==d&&vh(d,g.deps)){Ih(0,c,f,d);return}}qh|=a;e.memoizedState=Ih(b,c,f,d)}function Lh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function Mh(){}
function Nh(a,b,c){if(!(25>th))throw t(Error(301));var d=a.alternate;if(a===kh||null!==d&&d===kh)if(rh=!0,a={expirationTime:jh,suspenseConfig:null,action:c,eagerReducer:null,eagerState:null,next:null},null===sh&&(sh=new Map),c=sh.get(b),void 0===c)sh.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}else{var e=Fg(),f=Cg.suspense;e=Gg(e,a,f);f={expirationTime:e,suspenseConfig:f,action:c,eagerReducer:null,eagerState:null,next:null};var g=b.last;if(null===g)f.next=f;else{var h=g.next;null!==h&&
(f.next=h);g.next=f}b.last=f;if(0===a.expirationTime&&(null===d||0===d.expirationTime)&&(d=b.lastRenderedReducer,null!==d))try{var k=b.lastRenderedState,l=d(k,c);f.eagerReducer=d;f.eagerState=l;if(ff(l,k))return}catch(m){}finally{}Hg(a,e)}}
var zh={readContext:ng,useCallback:uh,useContext:uh,useEffect:uh,useImperativeHandle:uh,useLayoutEffect:uh,useMemo:uh,useReducer:uh,useRef:uh,useState:uh,useDebugValue:uh,useResponder:uh},xh={readContext:ng,useCallback:function(a,b){Eh().memoizedState=[a,void 0===b?null:b];return a},useContext:ng,useEffect:function(a,b){return Jh(516,192,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Jh(4,36,Lh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Jh(4,
36,a,b)},useMemo:function(a,b){var c=Eh();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Eh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={last:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=Nh.bind(null,kh,a);return[d.memoizedState,a]},useRef:function(a){var b=Eh();a={current:a};return b.memoizedState=a},useState:function(a){var b=Eh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={last:null,
dispatch:null,lastRenderedReducer:Gh,lastRenderedState:a};a=a.dispatch=Nh.bind(null,kh,a);return[b.memoizedState,a]},useDebugValue:Mh,useResponder:hh},yh={readContext:ng,useCallback:function(a,b){var c=Fh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&vh(b,d[1]))return d[0];c.memoizedState=[a,b];return a},useContext:ng,useEffect:function(a,b){return Kh(516,192,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Kh(4,36,Lh.bind(null,b,a),c)},
useLayoutEffect:function(a,b){return Kh(4,36,a,b)},useMemo:function(a,b){var c=Fh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&vh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a},useReducer:Hh,useRef:function(){return Fh().memoizedState},useState:function(a){return Hh(Gh,a)},useDebugValue:Mh,useResponder:hh},Oh=null,Ph=null,Qh=!1;
function Rh(a,b){var c=Sh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function Th(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function Uh(a){if(Qh){var b=Ph;if(b){var c=b;if(!Th(a,b)){b=je(c.nextSibling);if(!b||!Th(a,b)){a.effectTag=a.effectTag&~Ac|E;Qh=!1;Oh=a;return}Rh(Oh,c)}Oh=a;Ph=je(b.firstChild)}else a.effectTag=a.effectTag&~Ac|E,Qh=!1,Oh=a}}function Vh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;Oh=a}
function Wh(a){if(a!==Oh)return!1;if(!Qh)return Vh(a),Qh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!ge(b,a.memoizedProps))for(b=Ph;b;)Rh(a,b),b=je(b.nextSibling);Vh(a);if(13===a.tag)if(a=a.memoizedState,a=null!==a?a.dehydrated:null,null===a)a=Ph;else a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if(c===ae){if(0===b){a=je(a.nextSibling);break a}b--}else c!==$d&&c!==ce&&c!==be||b++}a=a.nextSibling}a=null}else a=Oh?je(a.stateNode.nextSibling):null;Ph=a;return!0}
function Xh(){Ph=Oh=null;Qh=!1}var Yh=Da.ReactCurrentOwner,mg=!1;function R(a,b,c,d){b.child=null===a?Xg(b,null,c,d):Wg(b,a.child,c,d)}function Zh(a,b,c,d,e){c=c.render;var f=b.ref;lg(b,e);d=wh(a,b,c,d,f,e);if(null!==a&&!mg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R(a,b,d,e);return b.child}
function ai(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!bi(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ci(a,b,g,d,e,f);a=Tg(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:hf,c(e,d)&&a.ref===b.ref))return $h(a,b,f);b.effectTag|=1;a=Rg(g,d,f);a.ref=b.ref;a.return=b;return b.child=a}
function ci(a,b,c,d,e,f){return null!==a&&hf(a.memoizedProps,d)&&a.ref===b.ref&&(mg=!1,e<f)?$h(a,b,f):di(a,b,c,d,f)}function ei(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function di(a,b,c,d,e){var f=N(c)?uf:J.current;f=vf(b,f);lg(b,e);c=wh(a,b,c,d,f,e);if(null!==a&&!mg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R(a,b,c,e);return b.child}
function fi(a,b,c,d,e){if(N(c)){var f=!0;Bf(b)}else f=!1;lg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=E),Kg(b,c,d,e),Mg(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=ng(l):(l=N(c)?uf:J.current,l=vf(b,l));var m=c.getDerivedStateFromProps,A="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;A||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Lg(b,g,d,l);og=!1;var w=b.memoizedState;k=g.state=w;var L=b.updateQueue;null!==L&&(xg(b,L,d,g,e),k=b.memoizedState);h!==d||w!==k||K.current||og?("function"===typeof m&&(Eg(b,c,m,d),k=b.memoizedState),(h=og||Jg(b,c,h,d,w,k,l))?(A||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&
g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,h=b.memoizedProps,g.props=b.type===b.elementType?h:cg(b.type,h),k=g.context,l=c.contextType,"object"===typeof l&&null!==l?l=ng(l):(l=N(c)?uf:J.current,l=vf(b,l)),m=c.getDerivedStateFromProps,(A=
"function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Lg(b,g,d,l),og=!1,k=b.memoizedState,w=g.state=k,L=b.updateQueue,null!==L&&(xg(b,L,d,g,e),w=b.memoizedState),h!==d||k!==w||K.current||og?("function"===typeof m&&(Eg(b,c,m,d),w=b.memoizedState),(m=og||Jg(b,c,h,d,k,w,l))?(A||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||
("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,w,l),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,w,l)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=
d,b.memoizedState=w),g.props=d,g.state=w,g.context=l,d=m):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return gi(a,b,c,d,f,e)}
function gi(a,b,c,d,e,f){ei(a,b);var g=(b.effectTag&64)!==D;if(!d&&!g)return e&&Cf(b,c,!1),$h(a,b,f);d=b.stateNode;Yh.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=Wg(b,a.child,null,f),b.child=Wg(b,null,h,f)):R(a,b,h,f);b.memoizedState=d.state;e&&Cf(b,c,!0);return b.child}function hi(a){var b=a.stateNode;b.pendingContext?zf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&zf(a,b.context,!1);ch(a,b.containerInfo)}
var ii={dehydrated:null,retryTime:1};
function ji(a,b,c){var d=b.mode,e=b.pendingProps,f=O.current,g=!1,h;(h=(b.effectTag&64)!==D)||(h=0!==(f&2)&&(null===a||null!==a.memoizedState));h?(g=!0,b.effectTag&=-65):null!==a&&null===a.memoizedState||void 0===e.fallback||!0===e.unstable_avoidThisFallback||(f|=1);I(O,f&1,b);if(null===a){if(g){g=e.fallback;e=Vg(null,d,0,null);e.return=b;if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Vg(g,d,c,null);c.return=b;e.sibling=c;b.memoizedState=
ii;b.child=e;return c}d=e.children;b.memoizedState=null;return b.child=Xg(b,null,d,c)}if(null!==a.memoizedState){a=a.child;d=a.sibling;if(g){e=e.fallback;c=Rg(a,a.pendingProps,0);c.return=b;if(0===(b.mode&2)&&(g=null!==b.memoizedState?b.child.child:b.child,g!==a.child))for(c.child=g;null!==g;)g.return=c,g=g.sibling;d=Rg(d,e,d.expirationTime);d.return=b;c.sibling=d;c.childExpirationTime=0;b.memoizedState=ii;b.child=c;return d}c=Wg(b,a.child,e.children,c);b.memoizedState=null;return b.child=c}a=a.child;
if(g){g=e.fallback;e=Vg(null,d,0,null);e.return=b;e.child=a;null!==a&&(a.return=e);if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Vg(g,d,c,null);c.return=b;e.sibling=c;c.effectTag|=E;e.childExpirationTime=0;b.memoizedState=ii;b.child=e;return c}b.memoizedState=null;return b.child=Wg(b,a,e.children,c)}
function ki(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,last:d,tail:c,tailExpiration:0,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.last=d,f.tail=c,f.tailExpiration=0,f.tailMode=e)}
function li(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;R(a,b,d.children,c);d=O.current;if(0!==(d&2))d=d&1|2,b.effectTag|=64;else{if(null!==a&&(a.effectTag&64)!==D)a:for(a=b.child;null!==a;){if(13===a.tag){if(null!==a.memoizedState){a.expirationTime<c&&(a.expirationTime=c);var g=a.alternate;null!==g&&g.expirationTime<c&&(g.expirationTime=c);kg(a.return,c)}}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;
a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(O,d,b);if(0===(b.mode&2))b.memoizedState=null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)d=c.alternate,null!==d&&null===gh(d)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);ki(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){d=e.alternate;if(null!==d&&null===gh(d)){b.child=e;break}d=e.sibling;e.sibling=c;c=e;e=d}ki(b,!0,c,null,f);break;case "together":ki(b,
!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}function $h(a,b,c){null!==a&&(b.dependencies=a.dependencies);var d=b.expirationTime;0!==d&&zg(d);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw t(Error(153));if(null!==b.child){a=b.child;c=Rg(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Rg(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}
function mi(a){a.effectTag|=4}var ni,oi,pi,qi;ni=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};oi=function(){};
pi=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;bh(Zg.current);a=null;switch(c){case "input":f=Ab(g,f);d=Ab(g,d);a=[];break;case "option":f=Ib(g,f);d=Ib(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=Kb(g,f);d=Kb(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=Td)}Qd(c,d);var h,k;c=null;for(h in f)if(!d.hasOwnProperty(h)&&f.hasOwnProperty(h)&&null!=f[h])if("style"===
h)for(k in g=f[h],g)g.hasOwnProperty(k)&&(c||(c={}),c[k]="");else"dangerouslySetInnerHTML"!==h&&"children"!==h&&"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(ia.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in d){var l=d[h];g=null!=f?f[h]:void 0;if(d.hasOwnProperty(h)&&l!==g&&(null!=l||null!=g))if("style"===h)if(g){for(k in g)!g.hasOwnProperty(k)||l&&l.hasOwnProperty(k)||(c||(c={}),c[k]="");for(k in l)l.hasOwnProperty(k)&&g[k]!==l[k]&&(c||(c={}),
c[k]=l[k])}else c||(a||(a=[]),a.push(h,c)),c=l;else"dangerouslySetInnerHTML"===h?(l=l?l.__html:void 0,g=g?g.__html:void 0,null!=l&&g!==l&&(a=a||[]).push(h,""+l)):"children"===h?g===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(h,""+l):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&(ia.hasOwnProperty(h)?(null!=l&&Sd(e,h),a||g===l||(a=[])):(a=a||[]).push(h,l))}c&&(a=a||[]).push("style",c);e=a;(b.updateQueue=e)&&mi(b)}};qi=function(a,b,c,d){c!==d&&mi(b)};
function ri(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function si(a){switch(a.tag){case 1:N(a.type)&&wf(a);var b=a.effectTag;return b&4096?(a.effectTag=b&-4097|64,a):null;case 3:dh(a);xf(a);b=a.effectTag;if((b&64)!==D)throw t(Error(285));a.effectTag=b&-4097|64;return a;case 5:return fh(a),null;case 13:return H(O,a),b=a.effectTag,b&4096?(a.effectTag=b&-4097|64,a):null;case 19:return H(O,a),null;case 4:return dh(a),null;case 10:return jg(a),null;default:return null}}function ti(a,b){return{value:a,source:b,stack:Wa(b)}}
var ui="function"===typeof WeakSet?WeakSet:Set;function vi(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=Wa(c));null!==c&&Va(c.type);b=b.value;null!==a&&1===a.tag&&Va(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function wi(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){xi(a,c)}}function yi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){xi(a,c)}else b.current=null}
function Di(a,b){switch(b.tag){case 0:case 11:case 15:Ei(2,0,b);break;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:cg(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}break;case 3:case 5:case 6:case 4:case 17:break;default:throw t(Error(163));}}
function Ei(a,b,c){c=c.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do{if(0!==(d.tag&a)){var e=d.destroy;d.destroy=void 0;void 0!==e&&e()}0!==(d.tag&b)&&(e=d.create,d.destroy=e());d=d.next}while(d!==c)}}
function Fi(a,b,c){"function"===typeof Gi&&Gi(b);switch(b.tag){case 0:case 11:case 14:case 15:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var d=a.next;Yf(97<c?97:c,function(){var a=d;do{var c=a.destroy;if(void 0!==c){var g=b;try{c()}catch(h){xi(g,h)}}a=a.next}while(a!==d)})}break;case 1:yi(b);c=b.stateNode;"function"===typeof c.componentWillUnmount&&wi(b,c);break;case 5:yi(b);break;case 4:Hi(a,b,c)}}
function Ii(a){var b=a.alternate;a.return=null;a.child=null;a.memoizedState=null;a.updateQueue=null;a.dependencies=null;a.alternate=null;a.firstEffect=null;a.lastEffect=null;a.pendingProps=null;a.memoizedProps=null;null!==b&&Ii(b)}function Ji(a){return 5===a.tag||3===a.tag||4===a.tag}
function Ki(a){a:{for(var b=a.return;null!==b;){if(Ji(b)){var c=b;break a}b=b.return}throw t(Error(160));}b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw t(Error(161));}c.effectTag&16&&(Tb(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Ji(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&E)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&E)){c=c.stateNode;break a}}for(var e=a;;){var f=5===e.tag||6===e.tag;if(f){var g=f?e.stateNode:e.stateNode.instance;if(c)if(d){f=b;var h=g;g=c;8===f.nodeType?f.parentNode.insertBefore(h,g):f.insertBefore(h,g)}else b.insertBefore(g,c);else d?(h=b,8===h.nodeType?(f=h.parentNode,f.insertBefore(g,h)):(f=h,f.appendChild(g)),h=h._reactRootContainer,null!==h&&void 0!==h||null!==f.onclick||(f.onclick=Td)):b.appendChild(g)}else if(4!==
e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}
function Hi(a,b,c){for(var d=b,e=!1,f,g;;){if(!e){e=d.return;a:for(;;){if(null===e)throw t(Error(160));f=e.stateNode;switch(e.tag){case 5:g=!1;break a;case 3:f=f.containerInfo;g=!0;break a;case 4:f=f.containerInfo;g=!0;break a}e=e.return}e=!0}if(5===d.tag||6===d.tag){a:for(var h=a,k=d,l=c,m=k;;)if(Fi(h,m,l),null!==m.child&&4!==m.tag)m.child.return=m,m=m.child;else{if(m===k)break;for(;null===m.sibling;){if(null===m.return||m.return===k)break a;m=m.return}m.sibling.return=m.return;m=m.sibling}g?(h=
f,k=d.stateNode,8===h.nodeType?h.parentNode.removeChild(k):h.removeChild(k)):f.removeChild(d.stateNode)}else if(4===d.tag){if(null!==d.child){f=d.stateNode.containerInfo;g=!0;d.child.return=d;d=d.child;continue}}else if(Fi(a,d,c),null!==d.child){d.child.return=d;d=d.child;continue}if(d===b)break;for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return;4===d.tag&&(e=!1)}d.sibling.return=d.return;d=d.sibling}}
function Li(a,b){switch(b.tag){case 0:case 11:case 14:case 15:Ei(4,8,b);break;case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[ne]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Cb(c,d);Rd(a,e);b=Rd(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?Od(c,h):"dangerouslySetInnerHTML"===g?Sb(c,h):"children"===g?Tb(c,h):ub(c,g,h,b)}switch(a){case "input":Db(c,d);break;case "textarea":Mb(c,
d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?Jb(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?Jb(c,!!d.multiple,d.defaultValue,!0):Jb(c,!!d.multiple,d.multiple?[]:"",!1))}}}break;case 6:if(null===b.stateNode)throw t(Error(162));b.stateNode.nodeValue=b.memoizedProps;break;case 3:b=b.stateNode;b.hydrate&&(b.hydrate=!1,zc(b.containerInfo));break;case 12:break;case 13:c=b;null===b.memoizedState?d=!1:(d=!0,c=b.child,Mi=Vf());
if(null!==c)a:for(a=c;;){if(5===a.tag)f=a.stateNode,d?(f=f.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(f=a.stateNode,e=a.memoizedProps.style,e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null,f.style.display=Nd("display",e));else if(6===a.tag)a.stateNode.nodeValue=d?"":a.memoizedProps;else if(13===a.tag&&null!==a.memoizedState&&null===a.memoizedState.dehydrated){f=a.child.sibling;f.return=a;a=f;continue}else if(null!==a.child){a.child.return=
a;a=a.child;continue}if(a===c)break a;for(;null===a.sibling;){if(null===a.return||a.return===c)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}Ni(b);break;case 19:Ni(b);break;case 17:break;case 20:break;case 21:break;default:throw t(Error(163));}}function Ni(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new ui);b.forEach(function(b){var d=Oi.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}var Pi="function"===typeof WeakMap?WeakMap:Map;
function Qi(a,b,c){c=rg(c,null);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Ri||(Ri=!0,Si=d);vi(a,b)};return c}
function Ti(a,b,c){c=rg(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){vi(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Ui?Ui=new Set([this]):Ui.add(this),vi(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
var Vi=Math.ceil,Wi=Da.ReactCurrentDispatcher,Xi=Da.ReactCurrentOwner,S=0,Yi=8,Zi=16,$i=32,aj=0,bj=1,cj=2,dj=3,ej=4,fj=5,gj=6,T=S,U=null,V=null,W=0,X=aj,hj=null,ij=1073741823,jj=1073741823,kj=null,lj=0,mj=!1,Mi=0,nj=500,Y=null,Ri=!1,Si=null,Ui=null,oj=!1,pj=null,qj=90,rj=null,sj=0,tj=null,uj=0;function Fg(){return(T&(Zi|$i))!==S?1073741821-(Vf()/10|0):0!==uj?uj:uj=1073741821-(Vf()/10|0)}
function Gg(a,b,c){b=b.mode;if(0===(b&2))return 1073741823;var d=Wf();if(0===(b&4))return 99===d?1073741823:1073741822;if((T&Zi)!==S)return W;if(null!==c)a=1073741821-25*(((1073741821-a+(c.timeoutMs|0||5E3)/10)/25|0)+1);else switch(d){case 99:a=1073741823;break;case 98:a=1073741821-10*(((1073741821-a+15)/10|0)+1);break;case 97:case 96:a=1073741821-25*(((1073741821-a+500)/25|0)+1);break;case 95:a=2;break;default:throw t(Error(326));}null!==U&&a===W&&--a;return a}var vj=0;
function Hg(a,b){if(50<sj)throw sj=0,tj=null,t(Error(185));a=wj(a,b);if(null!==a){var c=Wf();1073741823===b?(T&Yi)!==S&&(T&(Zi|$i))===S?xj(a):(Z(a),T===S&&bg()):Z(a);(T&4)===S||98!==c&&99!==c||(null===rj?rj=new Map([[a,b]]):(c=rj.get(a),(void 0===c||c>b)&&rj.set(a,b)))}}
function wj(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}null!==e&&(U===e&&(zg(b),X===ej&&yj(e,W)),zj(e,b));return e}
function Aj(a){var b=a.lastExpiredTime;if(0!==b)return b;b=a.firstPendingTime;if(!Bj(a,b))return b;b=a.lastPingedTime;a=a.nextKnownPendingLevel;return b>a?b:a}
function Z(a){if(0!==a.lastExpiredTime)a.callbackExpirationTime=1073741823,a.callbackPriority=99,a.callbackNode=$f(xj.bind(null,a));else{var b=Aj(a),c=a.callbackNode;if(0===b)null!==c&&(a.callbackNode=null,a.callbackExpirationTime=0,a.callbackPriority=90);else{var d=Fg();1073741823===b?d=99:1===b||2===b?d=95:(d=10*(1073741821-b)-10*(1073741821-d),d=0>=d?99:250>=d?98:5250>=d?97:95);if(null!==c){var e=a.callbackPriority;if(a.callbackExpirationTime===b&&e>=d)return;c!==Pf&&Ff(c)}a.callbackExpirationTime=
b;a.callbackPriority=d;b=1073741823===b?$f(xj.bind(null,a)):Zf(d,Cj.bind(null,a),{timeout:10*(1073741821-b)-Vf()});a.callbackNode=b}}}
function Cj(a,b){uj=0;if(b)return b=Fg(),Dj(a,b),Z(a),null;var c=Aj(a);if(0!==c){b=a.callbackNode;if((T&(Zi|$i))!==S)throw t(Error(327));Ej();a===U&&c===W||Fj(a,c);if(null!==V){var d=T;T|=Zi;var e=Gj(a);do try{Hj();break}catch(h){Ij(a,h)}while(1);hg();T=d;Wi.current=e;if(X===bj)throw b=hj,Fj(a,c),yj(a,c),Z(a),b;if(null===V)switch(e=a.finishedWork=a.current.alternate,a.finishedExpirationTime=c,Jj(a,c),d=X,U=null,d){case aj:case bj:throw t(Error(345));case cj:if(2!==c){Dj(a,2);break}Kj(a);break;case dj:yj(a,
c);d=a.lastSuspendedTime;c===d&&(a.nextKnownPendingLevel=Lj(e));if(1073741823===ij&&(e=Mi+nj-Vf(),10<e)){if(mj){var f=a.lastPingedTime;if(0===f||f>=c){a.lastPingedTime=c;Fj(a,c);break}}f=Aj(a);if(0!==f&&f!==c)break;if(0!==d&&d!==c){a.lastPingedTime=d;break}a.timeoutHandle=he(Kj.bind(null,a),e);break}Kj(a);break;case ej:yj(a,c);d=a.lastSuspendedTime;c===d&&(a.nextKnownPendingLevel=Lj(e));if(mj&&(e=a.lastPingedTime,0===e||e>=c)){a.lastPingedTime=c;Fj(a,c);break}e=Aj(a);if(0!==e&&e!==c)break;if(0!==
d&&d!==c){a.lastPingedTime=d;break}1073741823!==jj?d=10*(1073741821-jj)-Vf():1073741823===ij?d=0:(d=10*(1073741821-ij)-5E3,e=Vf(),c=10*(1073741821-c)-e,d=e-d,0>d&&(d=0),d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*Vi(d/1960))-d,c<d&&(d=c));if(10<d){a.timeoutHandle=he(Kj.bind(null,a),d);break}Kj(a);break;case fj:if(1073741823!==ij&&null!==kj){f=ij;var g=kj;d=g.busyMinDurationMs|0;0>=d?d=0:(e=g.busyDelayMs|0,f=Vf()-(10*(1073741821-f)-(g.timeoutMs|0||5E3)),d=f<=e?0:e+d-f);
if(10<d){yj(a,c);a.timeoutHandle=he(Kj.bind(null,a),d);break}}Kj(a);break;case gj:yj(a,c);break;default:throw t(Error(329));}Z(a);if(a.callbackNode===b)return Cj.bind(null,a)}}return null}
function xj(a){var b=a.lastExpiredTime;b=0!==b?b:1073741823;if(a.finishedExpirationTime===b)Kj(a);else{if((T&(Zi|$i))!==S)throw t(Error(327));Ej();a===U&&b===W||Fj(a,b);if(null!==V){var c=T;T|=Zi;var d=Gj(a);do try{Mj();break}catch(e){Ij(a,e)}while(1);hg();T=c;Wi.current=d;if(X===bj)throw c=hj,Fj(a,b),yj(a,b),Z(a),c;if(null!==V)throw t(Error(261));a.finishedWork=a.current.alternate;a.finishedExpirationTime=b;Jj(a,b);X===gj?yj(a,b):(U=null,Kj(a));Z(a)}}return null}
function Nj(){(T&(1|Zi|$i))===S&&(Oj(),Ej())}function Jj(a,b){var c=a.firstBatch;null!==c&&c._defer&&c._expirationTime>=b&&(Zf(97,function(){c._onComplete();return null}),X=gj)}function Oj(){if(null!==rj){var a=rj;rj=null;a.forEach(function(a,c){Dj(c,a);Z(c)});bg()}}function Pj(a,b){var c=T;T|=1;try{return a(b)}finally{T=c,T===S&&bg()}}function Qj(a,b,c,d){var e=T;T|=4;try{return Yf(98,a.bind(null,b,c,d))}finally{T=e,T===S&&bg()}}
function Rj(a,b){var c=T;T&=-2;T|=Yi;try{return a(b)}finally{T=c,T===S&&bg()}}
function Fj(a,b){a.finishedWork=null;a.finishedExpirationTime=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,ie(c));if(null!==V)for(c=V.return;null!==c;){var d=c;switch(d.tag){case 1:var e=d.type.childContextTypes;null!==e&&void 0!==e&&wf(d);break;case 3:dh(d);xf(d);break;case 5:fh(d);break;case 4:dh(d);break;case 13:H(O,d);break;case 19:H(O,d);break;case 10:jg(d)}c=c.return}U=a;V=Rg(a.current,null,b);W=b;X=aj;hj=null;jj=ij=1073741823;kj=null;lj=0;mj=!1}
function Ij(a,b){do{try{hg();Ah();if(null===V||null===V.return)return X=bj,hj=b,null;a:{var c=a,d=V.return,e=V,f=b;b=W;e.effectTag|=2048;e.firstEffect=e.lastEffect=null;if(null!==f&&"object"===typeof f&&"function"===typeof f.then){var g=f,h=0!==(O.current&1),k=d;do{var l;if(l=13===k.tag){var m=k.memoizedState;if(null!==m)l=null!==m.dehydrated?!0:!1;else{var A=k.memoizedProps;l=void 0===A.fallback?!1:!0!==A.unstable_avoidThisFallback?!0:h?!1:!0}}if(l){var w=k.updateQueue;if(null===w){var L=new Set;
L.add(g);k.updateQueue=L}else w.add(g);if(0===(k.mode&2)){k.effectTag|=64;e.effectTag&=-2981;if(1===e.tag)if(null===e.alternate)e.tag=17;else{var wb=rg(1073741823,null);wb.tag=2;tg(e,wb)}e.expirationTime=1073741823;break a}f=void 0;e=b;var M=c.pingCache;null===M?(M=c.pingCache=new Pi,f=new Set,M.set(g,f)):(f=M.get(g),void 0===f&&(f=new Set,M.set(g,f)));if(!f.has(e)){f.add(e);var q=Sj.bind(null,c,g,e);g.then(q,q)}k.effectTag|=4096;k.expirationTime=b;break a}k=k.return}while(null!==k);f=Error((Va(e.type)||
"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+Wa(e))}X!==fj&&(X=cj);f=ti(f,e);k=d;do{switch(k.tag){case 3:g=f;k.effectTag|=4096;k.expirationTime=b;var y=Qi(k,g,b);ug(k,y);break a;case 1:g=f;var z=k.type,p=k.stateNode;if((k.effectTag&64)===D&&("function"===typeof z.getDerivedStateFromError||null!==p&&"function"===typeof p.componentDidCatch&&
(null===Ui||!Ui.has(p)))){k.effectTag|=4096;k.expirationTime=b;var u=Ti(k,g,b);ug(k,u);break a}}k=k.return}while(null!==k)}V=Tj(V)}catch(v){b=v;continue}break}while(1)}function Gj(){var a=Wi.current;Wi.current=zh;return null===a?zh:a}function yg(a,b){a<ij&&2<a&&(ij=a);null!==b&&a<jj&&2<a&&(jj=a,kj=b)}function zg(a){a>lj&&(lj=a)}function Mj(){for(;null!==V;)V=Uj(V)}function Hj(){for(;null!==V&&!Gf();)V=Uj(V)}
function Uj(a){var b=Vj(a.alternate,a,W);a.memoizedProps=a.pendingProps;null===b&&(b=Tj(a));Xi.current=null;return b}
function Tj(a){V=a;do{var b=V.alternate;a=V.return;if((V.effectTag&2048)===D){a:{var c=b;b=V;var d=W,e=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:N(b.type)&&wf(b);break;case 3:dh(b);xf(b);d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);(null===c||null===c.child)&&Wh(b)&&mi(b);oi(b);break;case 5:fh(b);d=bh(ah.current);var f=b.type;if(null!==c&&null!=b.stateNode)pi(c,b,f,e,d),c.ref!==b.ref&&(b.effectTag|=128);else if(e){var g=
bh(Zg.current);if(Wh(b)){e=b;f=void 0;c=e.stateNode;var h=e.type,k=e.memoizedProps;c[me]=e;c[ne]=k;switch(h){case "iframe":case "object":case "embed":G("load",c);break;case "video":case "audio":for(var l=0;l<dc.length;l++)G(dc[l],c);break;case "source":G("error",c);break;case "img":case "image":case "link":G("error",c);G("load",c);break;case "form":G("reset",c);G("submit",c);break;case "details":G("toggle",c);break;case "input":Bb(c,k);G("invalid",c);Sd(d,"onChange");break;case "select":c._wrapperState=
{wasMultiple:!!k.multiple};G("invalid",c);Sd(d,"onChange");break;case "textarea":Lb(c,k),G("invalid",c),Sd(d,"onChange")}Qd(h,k);l=null;for(f in k)k.hasOwnProperty(f)&&(g=k[f],"children"===f?"string"===typeof g?c.textContent!==g&&(l=["children",g]):"number"===typeof g&&c.textContent!==""+g&&(l=["children",""+g]):ia.hasOwnProperty(f)&&null!=g&&Sd(d,f));switch(h){case "input":yb(c);Gb(c,k,!0);break;case "textarea":yb(c);Nb(c,k);break;case "select":case "option":break;default:"function"===typeof k.onClick&&
(c.onclick=Td)}d=l;e.updateQueue=d;null!==d&&mi(b)}else{k=f;c=e;h=b;l=9===d.nodeType?d:d.ownerDocument;g===Ob.html&&(g=Pb(k));g===Ob.html?"script"===k?(k=l.createElement("div"),k.innerHTML="<script>\x3c/script>",l=k.removeChild(k.firstChild)):"string"===typeof c.is?l=l.createElement(k,{is:c.is}):(l=l.createElement(k),"select"===k&&(k=l,c.multiple?k.multiple=!0:c.size&&(k.size=c.size))):l=l.createElementNS(g,k);k=l;k[me]=h;k[ne]=c;c=k;ni(c,b,!1,!1);b.stateNode=c;g=d;var m=Rd(f,e);switch(f){case "iframe":case "object":case "embed":G("load",
c);d=e;break;case "video":case "audio":for(d=0;d<dc.length;d++)G(dc[d],c);d=e;break;case "source":G("error",c);d=e;break;case "img":case "image":case "link":G("error",c);G("load",c);d=e;break;case "form":G("reset",c);G("submit",c);d=e;break;case "details":G("toggle",c);d=e;break;case "input":Bb(c,e);d=Ab(c,e);G("invalid",c);Sd(g,"onChange");break;case "option":d=Ib(c,e);break;case "select":c._wrapperState={wasMultiple:!!e.multiple};d=n({},e,{value:void 0});G("invalid",c);Sd(g,"onChange");break;case "textarea":Lb(c,
e);d=Kb(c,e);G("invalid",c);Sd(g,"onChange");break;default:d=e}Qd(f,d);h=void 0;k=f;l=c;var A=d;for(h in A)if(A.hasOwnProperty(h)){var w=A[h];"style"===h?Od(l,w):"dangerouslySetInnerHTML"===h?(w=w?w.__html:void 0,null!=w&&Sb(l,w)):"children"===h?"string"===typeof w?("textarea"!==k||""!==w)&&Tb(l,w):"number"===typeof w&&Tb(l,""+w):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(ia.hasOwnProperty(h)?null!=w&&Sd(g,h):null!=w&&ub(l,h,w,m))}switch(f){case "input":yb(c);
Gb(c,e,!1);break;case "textarea":yb(c);Nb(c,e);break;case "option":null!=e.value&&c.setAttribute("value",""+tb(e.value));break;case "select":d=c;c=e;d.multiple=!!c.multiple;h=c.value;null!=h?Jb(d,!!c.multiple,h,!1):null!=c.defaultValue&&Jb(d,!!c.multiple,c.defaultValue,!0);break;default:"function"===typeof d.onClick&&(c.onclick=Td)}fe(f,e)&&mi(b)}null!==b.ref&&(b.effectTag|=128)}else if(null===b.stateNode)throw t(Error(166));break;case 6:if(c&&null!=b.stateNode)qi(c,b,c.memoizedProps,e);else{if("string"!==
typeof e&&null===b.stateNode)throw t(Error(166));f=bh(ah.current);bh(Zg.current);Wh(b)?(d=b.stateNode,e=b.memoizedProps,d[me]=b,d.nodeValue!==e&&mi(b)):(d=b,e=(9===f.nodeType?f:f.ownerDocument).createTextNode(e),e[me]=b,d.stateNode=e)}break;case 11:break;case 13:H(O,b);e=b.memoizedState;if((b.effectTag&64)!==D){b.expirationTime=d;break a}d=null!==e;e=!1;null===c?Wh(b):(f=c.memoizedState,e=null!==f,d||null===f||(f=c.child.sibling,null!==f&&(h=b.firstEffect,null!==h?(b.firstEffect=f,f.nextEffect=h):
(b.firstEffect=b.lastEffect=f,f.nextEffect=null),f.effectTag=8)));if(d&&!e&&0!==(b.mode&2))if(null===c&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(O.current&1))X===aj&&(X=dj);else{if(X===aj||X===dj)X=ej;0!==lj&&null!==U&&(yj(U,W),zj(U,lj))}if(d||e)b.effectTag|=4;break;case 7:break;case 8:break;case 12:break;case 4:dh(b);oi(b);break;case 10:jg(b);break;case 9:break;case 14:break;case 17:N(b.type)&&wf(b);break;case 19:H(O,b);e=b.memoizedState;if(null===e)break;f=(b.effectTag&64)!==D;h=e.rendering;
if(null===h)if(f)ri(e,!1);else{if(X!==aj||null!==c&&(c.effectTag&64)!==D)for(c=b.child;null!==c;){h=gh(c);if(null!==h){b.effectTag|=64;ri(e,!1);e=h.updateQueue;null!==e&&(b.updateQueue=e,b.effectTag|=4);b.firstEffect=b.lastEffect=null;for(e=b.child;null!==e;)f=e,c=d,f.effectTag&=E,f.nextEffect=null,f.firstEffect=null,f.lastEffect=null,h=f.alternate,null===h?(f.childExpirationTime=0,f.expirationTime=c,f.child=null,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null):(f.childExpirationTime=
h.childExpirationTime,f.expirationTime=h.expirationTime,f.child=h.child,f.memoizedProps=h.memoizedProps,f.memoizedState=h.memoizedState,f.updateQueue=h.updateQueue,c=h.dependencies,f.dependencies=null===c?null:{expirationTime:c.expirationTime,firstContext:c.firstContext,responders:c.responders}),e=e.sibling;I(O,O.current&1|2,b);b=b.child;break a}c=c.sibling}}else{if(!f)if(c=gh(h),null!==c){if(b.effectTag|=64,f=!0,ri(e,!0),null===e.tail&&"hidden"===e.tailMode){d=c.updateQueue;null!==d&&(b.updateQueue=
d,b.effectTag|=4);b=b.lastEffect=e.lastEffect;null!==b&&(b.nextEffect=null);break}}else Vf()>e.tailExpiration&&1<d&&(b.effectTag|=64,f=!0,ri(e,!1),b.expirationTime=b.childExpirationTime=d-1);e.isBackwards?(h.sibling=b.child,b.child=h):(d=e.last,null!==d?d.sibling=h:b.child=h,e.last=h)}if(null!==e.tail){0===e.tailExpiration&&(e.tailExpiration=Vf()+500);d=e.tail;e.rendering=d;e.tail=d.sibling;e.lastEffect=b.lastEffect;d.sibling=null;e=O.current;e=f?e&1|2:e&1;I(O,e,b);b=d;break a}break;case 20:break;
case 21:break;default:throw t(Error(156),b.tag);}b=null}d=V;if(1===W||1!==d.childExpirationTime){e=0;for(f=d.child;null!==f;)c=f.expirationTime,h=f.childExpirationTime,c>e&&(e=c),h>e&&(e=h),f=f.sibling;d.childExpirationTime=e}if(null!==b)return b;null!==a&&(a.effectTag&2048)===D&&(null===a.firstEffect&&(a.firstEffect=V.firstEffect),null!==V.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=V.firstEffect),a.lastEffect=V.lastEffect),1<V.effectTag&&(null!==a.lastEffect?a.lastEffect.nextEffect=
V:a.firstEffect=V,a.lastEffect=V))}else{b=si(V,W);if(null!==b)return b.effectTag&=2047,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=2048)}b=V.sibling;if(null!==b)return b;V=a}while(null!==V);X===aj&&(X=fj);return null}function Lj(a){var b=a.expirationTime;a=a.childExpirationTime;return b>a?b:a}function Kj(a){var b=Wf();Yf(99,Wj.bind(null,a,b));return null}
function Wj(a,b){Ej();if((T&(Zi|$i))!==S)throw t(Error(327));var c=a.finishedWork,d=a.finishedExpirationTime;if(null===c)return null;a.finishedWork=null;a.finishedExpirationTime=0;if(c===a.current)throw t(Error(177));a.callbackNode=null;a.callbackExpirationTime=0;a.callbackPriority=90;a.nextKnownPendingLevel=0;var e=Lj(c);a.firstPendingTime=e;d<=a.lastSuspendedTime?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:d<=a.firstSuspendedTime&&(a.firstSuspendedTime=d-1);d<=a.lastPingedTime&&
(a.lastPingedTime=0);d<=a.lastExpiredTime&&(a.lastExpiredTime=0);a===U&&(V=U=null,W=0);1<c.effectTag?null!==c.lastEffect?(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;if(null!==e){var f=T;T|=$i;Xi.current=null;de=Dd;var g=Yd();if(Zd(g)){if("selectionStart"in g)var h={start:g.selectionStart,end:g.selectionEnd};else a:{h=(h=g.ownerDocument)&&h.defaultView||window;var k=h.getSelection&&h.getSelection();if(k&&0!==k.rangeCount){h=k.anchorNode;var l=k.anchorOffset,m=k.focusNode;k=k.focusOffset;
try{h.nodeType,m.nodeType}catch(Fb){h=null;break a}var A=0,w=-1,L=-1,wb=0,M=0,q=g,y=null;b:for(;;){for(var z;;){q!==h||0!==l&&3!==q.nodeType||(w=A+l);q!==m||0!==k&&3!==q.nodeType||(L=A+k);3===q.nodeType&&(A+=q.nodeValue.length);if(null===(z=q.firstChild))break;y=q;q=z}for(;;){if(q===g)break b;y===h&&++wb===l&&(w=A);y===m&&++M===k&&(L=A);if(null!==(z=q.nextSibling))break;q=y;y=q.parentNode}q=z}h=-1===w||-1===L?null:{start:w,end:L}}else h=null}h=h||{start:0,end:0}}else h=null;ee={focusedElem:g,selectionRange:h};
Dd=!1;Y=e;do try{Xj()}catch(Fb){if(null===Y)throw t(Error(330));xi(Y,Fb);Y=Y.nextEffect}while(null!==Y);Y=e;do try{for(g=a,h=b;null!==Y;){var p=Y.effectTag;p&16&&Tb(Y.stateNode,"");if(p&128){var u=Y.alternate;if(null!==u){var v=u.ref;null!==v&&("function"===typeof v?v(null):v.current=null)}}switch(p&(E|12|Ac)){case E:Ki(Y);Y.effectTag&=~E;break;case 6:Ki(Y);Y.effectTag&=~E;Li(Y.alternate,Y);break;case Ac:Y.effectTag&=~Ac;break;case 1028:Y.effectTag&=~Ac;Li(Y.alternate,Y);break;case 4:Li(Y.alternate,
Y);break;case 8:l=Y,Hi(g,l,h),Ii(l)}Y=Y.nextEffect}}catch(Fb){if(null===Y)throw t(Error(330));xi(Y,Fb);Y=Y.nextEffect}while(null!==Y);v=ee;u=Yd();p=v.focusedElem;h=v.selectionRange;if(u!==p&&p&&p.ownerDocument&&Xd(p.ownerDocument.documentElement,p)){null!==h&&Zd(p)&&(u=h.start,v=h.end,void 0===v&&(v=u),"selectionStart"in p?(p.selectionStart=u,p.selectionEnd=Math.min(v,p.value.length)):(v=(u=p.ownerDocument||document)&&u.defaultView||window,v.getSelection&&(v=v.getSelection(),l=p.textContent.length,
g=Math.min(h.start,l),h=void 0===h.end?g:Math.min(h.end,l),!v.extend&&g>h&&(l=h,h=g,g=l),l=Wd(p,g),m=Wd(p,h),l&&m&&(1!==v.rangeCount||v.anchorNode!==l.node||v.anchorOffset!==l.offset||v.focusNode!==m.node||v.focusOffset!==m.offset)&&(u=u.createRange(),u.setStart(l.node,l.offset),v.removeAllRanges(),g>h?(v.addRange(u),v.extend(m.node,m.offset)):(u.setEnd(m.node,m.offset),v.addRange(u))))));u=[];for(v=p;v=v.parentNode;)1===v.nodeType&&u.push({element:v,left:v.scrollLeft,top:v.scrollTop});"function"===
typeof p.focus&&p.focus();for(p=0;p<u.length;p++)v=u[p],v.element.scrollLeft=v.left,v.element.scrollTop=v.top}ee=null;Dd=!!de;de=null;a.current=c;Y=e;do try{for(p=d;null!==Y;){var Bh=Y.effectTag;if(Bh&36){var cc=Y.alternate;u=Y;v=p;switch(u.tag){case 0:case 11:case 15:Ei(16,32,u);break;case 1:var ed=u.stateNode;if(u.effectTag&4)if(null===cc)ed.componentDidMount();else{var Zj=u.elementType===u.type?cc.memoizedProps:cg(u.type,cc.memoizedProps);ed.componentDidUpdate(Zj,cc.memoizedState,ed.__reactInternalSnapshotBeforeUpdate)}var Ch=
u.updateQueue;null!==Ch&&Ag(u,Ch,ed,v);break;case 3:var Dh=u.updateQueue;if(null!==Dh){g=null;if(null!==u.child)switch(u.child.tag){case 5:g=u.child.stateNode;break;case 1:g=u.child.stateNode}Ag(u,Dh,g,v)}break;case 5:var pk=u.stateNode;null===cc&&u.effectTag&4&&(v=pk,fe(u.type,u.memoizedProps)&&v.focus());break;case 6:break;case 4:break;case 12:break;case 13:if(null===u.memoizedState){var zi=u.alternate;if(null!==zi){var Ai=zi.memoizedState;if(null!==Ai){var Bi=Ai.dehydrated;null!==Bi&&zc(Bi)}}}break;
case 19:case 17:case 20:case 21:break;default:throw t(Error(163));}}if(Bh&128){u=Y;var yd=u.ref;if(null!==yd){var Ci=u.stateNode;switch(u.tag){case 5:var yf=Ci;break;default:yf=Ci}"function"===typeof yd?yd(yf):yd.current=yf}}Y=Y.nextEffect}}catch(Fb){if(null===Y)throw t(Error(330));xi(Y,Fb);Y=Y.nextEffect}while(null!==Y);Y=null;Qf();T=f}else a.current=c;if(oj)oj=!1,pj=a,qj=b;else for(Y=e;null!==Y;)b=Y.nextEffect,Y.nextEffect=null,Y=b;b=a.firstPendingTime;0===b&&(Ui=null);1073741823===b?a===tj?sj++:
(sj=0,tj=a):sj=0;"function"===typeof Yj&&Yj(c.stateNode,d);Z(a);if(Ri)throw Ri=!1,a=Si,Si=null,a;if((T&Yi)!==S)return null;bg();return null}function Xj(){for(;null!==Y;){var a=Y.effectTag;(a&256)!==D&&Di(Y.alternate,Y);(a&512)===D||oj||(oj=!0,Zf(97,function(){Ej();return null}));Y=Y.nextEffect}}function Ej(){if(90!==qj){var a=97<qj?97:qj;qj=90;return Yf(a,ak)}}
function ak(){if(null===pj)return!1;var a=pj;pj=null;if((T&(Zi|$i))!==S)throw t(Error(331));var b=T;T|=$i;for(a=a.current.firstEffect;null!==a;){try{var c=a;if((c.effectTag&512)!==D)switch(c.tag){case 0:case 11:case 15:Ei(128,0,c),Ei(0,64,c)}}catch(d){if(null===a)throw t(Error(330));xi(a,d)}c=a.nextEffect;a.nextEffect=null;a=c}T=b;bg();return!0}function bk(a,b,c){b=ti(c,b);b=Qi(a,b,1073741823);tg(a,b);a=wj(a,1073741823);null!==a&&Z(a)}
function xi(a,b){if(3===a.tag)bk(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){bk(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ui||!Ui.has(d))){a=ti(b,a);a=Ti(c,a,1073741823);tg(c,a);c=wj(c,1073741823);null!==c&&Z(c);break}}c=c.return}}
function Sj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);U===a&&W===c?X===ej||X===dj&&1073741823===ij&&Vf()-Mi<nj?Fj(a,W):mj=!0:Bj(a,c)&&(b=a.lastPingedTime,0!==b&&b<c||(a.lastPingedTime=c,a.finishedExpirationTime===c&&(a.finishedExpirationTime=0,a.finishedWork=null),Z(a)))}function Oi(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=1;1===b&&(b=Fg(),b=Gg(b,a,null));a=wj(a,b);null!==a&&Z(a)}var Vj;
Vj=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==e||K.current)mg=!0;else{if(d<c){mg=!1;switch(b.tag){case 3:hi(b);Xh();break;case 5:eh(b);if(b.mode&4&&1!==c&&e.hidden)return b.expirationTime=b.childExpirationTime=1,null;break;case 1:N(b.type)&&Bf(b);break;case 4:ch(b,b.stateNode.containerInfo);break;case 10:ig(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;if(0!==d&&d>=c)return ji(a,b,c);I(O,O.current&
1,b);b=$h(a,b,c);return null!==b?b.sibling:null}I(O,O.current&1,b);break;case 19:d=b.childExpirationTime>=c;if((a.effectTag&64)!==D){if(d)return li(a,b,c);b.effectTag|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);I(O,O.current,b);if(!d)return null}return $h(a,b,c)}mg=!1}}else mg=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=E);a=b.pendingProps;e=vf(b,J.current);lg(b,c);e=wh(null,b,d,a,e,c);b.effectTag|=1;if("object"===
typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;Ah();if(N(d)){var f=!0;Bf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;var g=d.getDerivedStateFromProps;"function"===typeof g&&Eg(b,d,g,a);e.updater=Ig;b.stateNode=e;e._reactInternalFiber=b;Mg(b,d,a,c);b=gi(null,b,d,!0,f,c)}else b.tag=0,R(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=E);a=b.pendingProps;Ua(e);if(1!==e._status)throw e._result;
e=e._result;b.type=e;f=b.tag=ck(e);a=cg(e,a);switch(f){case 0:b=di(null,b,e,a,c);break;case 1:b=fi(null,b,e,a,c);break;case 11:b=Zh(null,b,e,a,c);break;case 14:b=ai(null,b,e,cg(e.type,a),d,c);break;default:throw t(Error(306),e,"");}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:cg(d,e),di(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:cg(d,e),fi(a,b,d,e,c);case 3:hi(b);d=b.updateQueue;if(null===d)throw t(Error(282));e=b.memoizedState;e=null!==e?e.element:
null;xg(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===e)Xh(),b=$h(a,b,c);else{if(e=b.stateNode.hydrate)Ph=je(b.stateNode.containerInfo.firstChild),Oh=b,e=Qh=!0;if(e)for(c=Xg(b,null,d,c),b.child=c;c;)c.effectTag=c.effectTag&~E|Ac,c=c.sibling;else R(a,b,d,c),Xh();b=b.child}return b;case 5:return eh(b),null===a&&Uh(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,ge(d,e)?g=null:null!==f&&ge(d,f)&&(b.effectTag|=16),ei(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=
b.childExpirationTime=1,b=null):(R(a,b,g,c),b=b.child),b;case 6:return null===a&&Uh(b),null;case 13:return ji(a,b,c);case 4:return ch(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Wg(b,null,d,c):R(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:cg(d,e),Zh(a,b,d,e,c);case 7:return R(a,b,b.pendingProps,c),b.child;case 8:return R(a,b,b.pendingProps.children,c),b.child;case 12:return R(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;
e=b.pendingProps;g=b.memoizedProps;f=e.value;ig(b,f);if(null!==g){var h=g.value;f=ff(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0;if(0===f){if(g.children===e.children&&!K.current){b=$h(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=rg(c,null),l.tag=2,tg(h,l));h.expirationTime<c&&(h.expirationTime=
c);l=h.alternate;null!==l&&l.expirationTime<c&&(l.expirationTime=c);kg(h.return,c);k.expirationTime<c&&(k.expirationTime=c);break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}}R(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,lg(b,c),e=ng(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,R(a,b,d,c),b.child;
case 14:return e=b.type,f=cg(e,b.pendingProps),f=cg(e.type,f),ai(a,b,e,f,d,c);case 15:return ci(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:cg(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=E),b.tag=1,N(d)?(a=!0,Bf(b)):a=!1,lg(b,c),Kg(b,d,e,c),Mg(b,d,e,c),gi(null,b,d,!0,a,c);case 19:return li(a,b,c)}throw t(Error(156),b.tag);};var Yj=null,Gi=null;
function dk(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Yj=function(a){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64))}catch(e){}};Gi=function(a){try{b.onCommitFiberUnmount(c,a)}catch(e){}}}catch(d){}return!0}
function ek(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=D;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function Sh(a,b,c,d){return new ek(a,b,c,d)}
function bi(a){a=a.prototype;return!(!a||!a.isReactComponent)}function ck(a){if("function"===typeof a)return bi(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Na)return 11;if(a===Qa)return 14}return 2}
function Rg(a,b){var c=a.alternate;null===c?(c=Sh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=D,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,
firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Tg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)bi(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case Ha:return Vg(c.children,e,f,b);case Ma:g=8;e|=7;break;case Ia:g=8;e|=1;break;case Ja:return a=Sh(12,c,b,e|8),a.elementType=Ja,a.type=Ja,a.expirationTime=f,a;case Oa:return a=Sh(13,c,b,e),a.type=Oa,a.elementType=Oa,a.expirationTime=f,a;case Pa:return a=Sh(19,c,b,e),a.elementType=Pa,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ka:g=
10;break a;case La:g=9;break a;case Na:g=11;break a;case Qa:g=14;break a;case Ra:g=16;d=null;break a}throw t(Error(130),null==a?a:typeof a,"");}b=Sh(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Vg(a,b,c,d){a=Sh(7,a,d,b);a.expirationTime=c;return a}function Sg(a,b,c){a=Sh(6,a,null,b);a.expirationTime=c;return a}
function Ug(a,b,c){b=Sh(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function fk(a,b,c){this.tag=b;this.current=null;this.containerInfo=a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=this.firstBatch=null;this.callbackPriority=90;this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}
function Bj(a,b){var c=a.firstSuspendedTime;a=a.lastSuspendedTime;return 0!==c&&c>=b&&a<=b}function yj(a,b){var c=a.firstSuspendedTime,d=a.lastSuspendedTime;c<b&&(a.firstSuspendedTime=b);if(d>b||0===c)a.lastSuspendedTime=b;b<=a.lastPingedTime&&(a.lastPingedTime=0);b<=a.lastExpiredTime&&(a.lastExpiredTime=0)}
function zj(a,b){b>a.firstPendingTime&&(a.firstPendingTime=b);var c=a.firstSuspendedTime;0!==c&&(b>=c?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:b>=a.lastSuspendedTime&&(a.lastSuspendedTime=b+1),b>a.nextKnownPendingLevel&&(a.nextKnownPendingLevel=b))}function Dj(a,b){var c=a.lastExpiredTime;if(0===c||c>b)a.lastExpiredTime=b}
function gk(a,b,c,d,e,f){var g=b.current;a:if(c){c=c._reactInternalFiber;b:{if(Bc(c)!==c||1!==c.tag)throw t(Error(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(N(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw t(Error(171));}if(1===c.tag){var k=c.type;if(N(k)){c=Af(c,k,h);break a}}c=h}else c=tf;null===b.context?b.context=c:b.pendingContext=c;b=f;e=rg(d,e);e.payload={element:a};b=void 0===b?null:b;null!==b&&
(e.callback=b);tg(g,e);Hg(g,d);return d}function hk(a,b,c,d){var e=b.current,f=Fg(),g=Cg.suspense;e=Gg(f,e,g);return gk(a,b,c,e,g,d)}function ik(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function jk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Ga,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
Ya=function(a,b,c){switch(b){case "input":Db(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=re(d);if(!e)throw t(Error(90));zb(d);Db(d,e)}}}break;case "textarea":Mb(a,c);break;case "select":b=c.value,null!=b&&Jb(a,!!c.multiple,b,!1)}};
function kk(a){var b=1073741821-25*(((1073741821-Fg()+500)/25|0)+1);b<=vj&&--b;this._expirationTime=vj=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}kk.prototype.render=function(a){if(!this._defer)throw t(Error(250));this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new lk;gk(a,b,null,c,null,d._onCommit);return d};
kk.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
kk.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;if(!this._defer||null===b)throw t(Error(251));if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;if(null===d)throw t(Error(251));d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;b=c;if((T&(Zi|$i))!==S)throw t(Error(253));Dj(a,b);Z(a);bg();b=this._next;this._next=null;
b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children)}else this._next=null,this._defer=!1};kk.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};function lk(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}lk.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
lk.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];if("function"!==typeof c)throw t(Error(191),c);c()}}};function mk(a,b,c){c=null!=c&&!0===c.hydrate;var d=new fk(a,b,c),e=Sh(3,null,null,2===b?7:1===b?3:0);d.current=e;e.stateNode=d;a[oe]=d.current;c&&0!==b&&nc(9===a.nodeType?a:a.ownerDocument);return d}function nk(a,b,c){this._internalRoot=mk(a,b,c)}function ok(a,b){this._internalRoot=mk(a,2,b)}
ok.prototype.render=nk.prototype.render=function(a,b){var c=this._internalRoot,d=new lk;b=void 0===b?null:b;null!==b&&d.then(b);hk(a,c,null,d._onCommit);return d};ok.prototype.unmount=nk.prototype.unmount=function(a){var b=this._internalRoot,c=new lk;a=void 0===a?null:a;null!==a&&c.then(a);hk(null,b,null,c._onCommit);return c};
ok.prototype.createBatch=function(){var a=new kk(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime>=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};function qk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}db=Pj;eb=Qj;fb=Nj;gb=function(a,b){var c=T;T|=2;try{return a(b)}finally{T=c,T===S&&bg()}};
function rk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new nk(a,0,b?{hydrate:!0}:void 0)}
function sk(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=ik(g);h.call(a)}}hk(b,g,a,e)}else{f=c._reactRootContainer=rk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=ik(g);k.call(a)}}Rj(function(){hk(b,g,a,e)})}return ik(g)}function tk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!qk(b))throw t(Error(200));return jk(a,b,null,c)}
var wk={createPortal:tk,findDOMNode:function(a){if(null==a)a=null;else if(1!==a.nodeType){var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw t(Error(188));throw t(Error(268),Object.keys(a));}a=Ec(b);a=null===a?null:a.stateNode}return a},hydrate:function(a,b,c){if(!qk(b))throw t(Error(200));return sk(null,a,b,!0,c)},render:function(a,b,c){if(!qk(b))throw t(Error(200));return sk(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){if(!qk(c))throw t(Error(200));
if(null==a||void 0===a._reactInternalFiber)throw t(Error(38));return sk(a,b,c,!1,d)},unmountComponentAtNode:function(a){if(!qk(a))throw t(Error(40));return a._reactRootContainer?(Rj(function(){sk(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return tk.apply(void 0,arguments)},unstable_batchedUpdates:Pj,unstable_interactiveUpdates:function(a,b,c,d){Nj();return Qj(a,b,c,d)},unstable_discreteUpdates:Qj,unstable_flushDiscreteUpdates:Nj,flushSync:function(a,
b){if((T&(Zi|$i))!==S)throw t(Error(187));var c=T;T|=1;try{return Yf(99,a.bind(null,b))}finally{T=c,bg()}},unstable_createRoot:uk,unstable_createSyncRoot:vk,unstable_flushControlled:function(a){var b=T;T|=1;try{Yf(99,a)}finally{T=b,T===S&&bg()}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[pe,qe,re,Ba.injectEventPluginsByName,fa,Lc,function(a){xa(a,Kc)},bb,cb,Hd,Aa,Ej,{current:!1}]}};function uk(a,b){if(!qk(a))throw t(Error(299),"unstable_createRoot");return new ok(a,b)}
function vk(a,b){if(!qk(a))throw t(Error(299),"unstable_createRoot");return new nk(a,1,b)}
(function(a){var b=a.findFiberByHostInstance;return dk(n({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Da.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Ec(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:Cd,bundleType:0,version:"16.10.2",
rendererPackageName:"react-dom"});var xk={default:wk},yk=xk&&wk||xk;module.exports=yk.default||yk;


/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(/*! ./cjs/react-dom.production.min.js */ "./node_modules/react-dom/cjs/react-dom.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/react-scroll/modules/components/Button.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/components/Button.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _scrollLink = __webpack_require__(/*! ../mixins/scroll-link */ "./node_modules/react-scroll/modules/mixins/scroll-link.js");

var _scrollLink2 = _interopRequireDefault(_scrollLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonElement = function (_React$Component) {
  _inherits(ButtonElement, _React$Component);

  function ButtonElement() {
    _classCallCheck(this, ButtonElement);

    return _possibleConstructorReturn(this, (ButtonElement.__proto__ || Object.getPrototypeOf(ButtonElement)).apply(this, arguments));
  }

  _createClass(ButtonElement, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'input',
        this.props,
        this.props.children
      );
    }
  }]);

  return ButtonElement;
}(_react2.default.Component);

;

exports.default = (0, _scrollLink2.default)(ButtonElement);

/***/ }),

/***/ "./node_modules/react-scroll/modules/components/Element.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/components/Element.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _scrollElement = __webpack_require__(/*! ../mixins/scroll-element */ "./node_modules/react-scroll/modules/mixins/scroll-element.js");

var _scrollElement2 = _interopRequireDefault(_scrollElement);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ElementWrapper = function (_React$Component) {
  _inherits(ElementWrapper, _React$Component);

  function ElementWrapper() {
    _classCallCheck(this, ElementWrapper);

    return _possibleConstructorReturn(this, (ElementWrapper.__proto__ || Object.getPrototypeOf(ElementWrapper)).apply(this, arguments));
  }

  _createClass(ElementWrapper, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      // Remove `parentBindings` from props
      var newProps = _extends({}, this.props);
      if (newProps.parentBindings) {
        delete newProps.parentBindings;
      }

      return _react2.default.createElement(
        'div',
        _extends({}, newProps, { ref: function ref(el) {
            _this2.props.parentBindings.domNode = el;
          } }),
        this.props.children
      );
    }
  }]);

  return ElementWrapper;
}(_react2.default.Component);

;

ElementWrapper.propTypes = {
  name: _propTypes2.default.string,
  id: _propTypes2.default.string
};

exports.default = (0, _scrollElement2.default)(ElementWrapper);

/***/ }),

/***/ "./node_modules/react-scroll/modules/components/Link.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-scroll/modules/components/Link.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _scrollLink = __webpack_require__(/*! ../mixins/scroll-link */ "./node_modules/react-scroll/modules/mixins/scroll-link.js");

var _scrollLink2 = _interopRequireDefault(_scrollLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkElement = function (_React$Component) {
  _inherits(LinkElement, _React$Component);

  function LinkElement() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LinkElement);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LinkElement.__proto__ || Object.getPrototypeOf(LinkElement)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      return _react2.default.createElement(
        'a',
        _this.props,
        _this.props.children
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return LinkElement;
}(_react2.default.Component);

;

exports.default = (0, _scrollLink2.default)(LinkElement);

/***/ }),

/***/ "./node_modules/react-scroll/modules/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-scroll/modules/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Helpers = exports.ScrollElement = exports.ScrollLink = exports.animateScroll = exports.scrollSpy = exports.Events = exports.scroller = exports.Element = exports.Button = exports.Link = undefined;

var _Link = __webpack_require__(/*! ./components/Link.js */ "./node_modules/react-scroll/modules/components/Link.js");

var _Link2 = _interopRequireDefault(_Link);

var _Button = __webpack_require__(/*! ./components/Button.js */ "./node_modules/react-scroll/modules/components/Button.js");

var _Button2 = _interopRequireDefault(_Button);

var _Element = __webpack_require__(/*! ./components/Element.js */ "./node_modules/react-scroll/modules/components/Element.js");

var _Element2 = _interopRequireDefault(_Element);

var _scroller = __webpack_require__(/*! ./mixins/scroller.js */ "./node_modules/react-scroll/modules/mixins/scroller.js");

var _scroller2 = _interopRequireDefault(_scroller);

var _scrollEvents = __webpack_require__(/*! ./mixins/scroll-events.js */ "./node_modules/react-scroll/modules/mixins/scroll-events.js");

var _scrollEvents2 = _interopRequireDefault(_scrollEvents);

var _scrollSpy = __webpack_require__(/*! ./mixins/scroll-spy.js */ "./node_modules/react-scroll/modules/mixins/scroll-spy.js");

var _scrollSpy2 = _interopRequireDefault(_scrollSpy);

var _animateScroll = __webpack_require__(/*! ./mixins/animate-scroll.js */ "./node_modules/react-scroll/modules/mixins/animate-scroll.js");

var _animateScroll2 = _interopRequireDefault(_animateScroll);

var _scrollLink = __webpack_require__(/*! ./mixins/scroll-link.js */ "./node_modules/react-scroll/modules/mixins/scroll-link.js");

var _scrollLink2 = _interopRequireDefault(_scrollLink);

var _scrollElement = __webpack_require__(/*! ./mixins/scroll-element.js */ "./node_modules/react-scroll/modules/mixins/scroll-element.js");

var _scrollElement2 = _interopRequireDefault(_scrollElement);

var _Helpers = __webpack_require__(/*! ./mixins/Helpers.js */ "./node_modules/react-scroll/modules/mixins/Helpers.js");

var _Helpers2 = _interopRequireDefault(_Helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Link = _Link2.default;
exports.Button = _Button2.default;
exports.Element = _Element2.default;
exports.scroller = _scroller2.default;
exports.Events = _scrollEvents2.default;
exports.scrollSpy = _scrollSpy2.default;
exports.animateScroll = _animateScroll2.default;
exports.ScrollLink = _scrollLink2.default;
exports.ScrollElement = _scrollElement2.default;
exports.Helpers = _Helpers2.default;
exports.default = { Link: _Link2.default, Button: _Button2.default, Element: _Element2.default, scroller: _scroller2.default, Events: _scrollEvents2.default, scrollSpy: _scrollSpy2.default, animateScroll: _animateScroll2.default, ScrollLink: _scrollLink2.default, ScrollElement: _scrollElement2.default, Helpers: _Helpers2.default };

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/Helpers.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/Helpers.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* DEPRECATED */

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scroll/modules/mixins/utils.js");
var scrollSpy = __webpack_require__(/*! ./scroll-spy */ "./node_modules/react-scroll/modules/mixins/scroll-spy.js");
var defaultScroller = __webpack_require__(/*! ./scroller */ "./node_modules/react-scroll/modules/mixins/scroller.js");
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
var scrollHash = __webpack_require__(/*! ./scroll-hash */ "./node_modules/react-scroll/modules/mixins/scroll-hash.js");

var protoTypes = {
  to: PropTypes.string.isRequired,
  containerId: PropTypes.string,
  container: PropTypes.object,
  activeClass: PropTypes.string,
  spy: PropTypes.bool,
  smooth: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  offset: PropTypes.number,
  delay: PropTypes.number,
  isDynamic: PropTypes.bool,
  onClick: PropTypes.func,
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  absolute: PropTypes.bool,
  onSetActive: PropTypes.func,
  onSetInactive: PropTypes.func,
  ignoreCancelEvents: PropTypes.bool,
  hashSpy: PropTypes.bool
};

var Helpers = {
  Scroll: function Scroll(Component, customScroller) {

    console.warn("Helpers.Scroll is deprecated since v1.7.0");

    var scroller = customScroller || defaultScroller;

    var Scroll = function (_React$Component) {
      _inherits(Scroll, _React$Component);

      function Scroll(props) {
        _classCallCheck(this, Scroll);

        var _this = _possibleConstructorReturn(this, (Scroll.__proto__ || Object.getPrototypeOf(Scroll)).call(this, props));

        _initialiseProps.call(_this);

        _this.state = {
          active: false
        };
        return _this;
      }

      _createClass(Scroll, [{
        key: 'getScrollSpyContainer',
        value: function getScrollSpyContainer() {
          var containerId = this.props.containerId;
          var container = this.props.container;

          if (containerId) {
            return document.getElementById(containerId);
          }

          if (container && container.nodeType) {
            return container;
          }

          return document;
        }
      }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (this.props.spy || this.props.hashSpy) {
            var scrollSpyContainer = this.getScrollSpyContainer();

            if (!scrollSpy.isMounted(scrollSpyContainer)) {
              scrollSpy.mount(scrollSpyContainer);
            }

            if (this.props.hashSpy) {
              if (!scrollHash.isMounted()) {
                scrollHash.mount(scroller);
              }
              scrollHash.mapContainer(this.props.to, scrollSpyContainer);
            }

            if (this.props.spy) {
              scrollSpy.addStateHandler(this.stateHandler);
            }

            scrollSpy.addSpyHandler(this.spyHandler, scrollSpyContainer);

            this.setState({
              container: scrollSpyContainer
            });
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          scrollSpy.unmount(this.stateHandler, this.spyHandler);
        }
      }, {
        key: 'render',
        value: function render() {
          var className = "";

          if (this.state && this.state.active) {
            className = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim();
          } else {
            className = this.props.className;
          }

          var props = _extends({}, this.props);

          for (var prop in protoTypes) {
            if (props.hasOwnProperty(prop)) {
              delete props[prop];
            }
          }

          props.className = className;
          props.onClick = this.handleClick;

          return React.createElement(Component, props);
        }
      }]);

      return Scroll;
    }(React.Component);

    var _initialiseProps = function _initialiseProps() {
      var _this2 = this;

      this.scrollTo = function (to, props) {
        scroller.scrollTo(to, _extends({}, _this2.state, props));
      };

      this.handleClick = function (event) {

        /*
         * give the posibility to override onClick
         */

        if (_this2.props.onClick) {
          _this2.props.onClick(event);
        }

        /*
         * dont bubble the navigation
         */

        if (event.stopPropagation) event.stopPropagation();
        if (event.preventDefault) event.preventDefault();

        /*
         * do the magic!
         */
        _this2.scrollTo(_this2.props.to, _this2.props);
      };

      this.stateHandler = function () {
        if (scroller.getActiveLink() !== _this2.props.to) {
          if (_this2.state !== null && _this2.state.active && _this2.props.onSetInactive) {
            _this2.props.onSetInactive();
          }
          _this2.setState({ active: false });
        }
      };

      this.spyHandler = function (y) {

        var scrollSpyContainer = _this2.getScrollSpyContainer();

        if (scrollHash.isMounted() && !scrollHash.isInitialized()) {
          return;
        }

        var to = _this2.props.to;
        var element = null;
        var elemTopBound = 0;
        var elemBottomBound = 0;
        var containerTop = 0;

        if (scrollSpyContainer.getBoundingClientRect) {
          var containerCords = scrollSpyContainer.getBoundingClientRect();
          containerTop = containerCords.top;
        }

        if (!element || _this2.props.isDynamic) {
          element = scroller.get(to);
          if (!element) {
            return;
          }

          var cords = element.getBoundingClientRect();
          elemTopBound = cords.top - containerTop + y;
          elemBottomBound = elemTopBound + cords.height;
        }

        var offsetY = y - _this2.props.offset;
        var isInside = offsetY >= Math.floor(elemTopBound) && offsetY < Math.floor(elemBottomBound);
        var isOutside = offsetY < Math.floor(elemTopBound) || offsetY >= Math.floor(elemBottomBound);
        var activeLink = scroller.getActiveLink();

        if (isOutside) {
          if (to === activeLink) {
            scroller.setActiveLink(void 0);
          }

          if (_this2.props.hashSpy && scrollHash.getHash() === to) {
            scrollHash.changeHash();
          }

          if (_this2.props.spy && _this2.state.active) {
            _this2.setState({ active: false });
            _this2.props.onSetInactive && _this2.props.onSetInactive();
          }

          return scrollSpy.updateStates();
        }

        if (isInside && activeLink !== to) {
          scroller.setActiveLink(to);

          _this2.props.hashSpy && scrollHash.changeHash(to);

          if (_this2.props.spy) {
            _this2.setState({ active: true });
            _this2.props.onSetActive && _this2.props.onSetActive(to);
          }
          return scrollSpy.updateStates();
        }
      };
    };

    ;

    Scroll.propTypes = protoTypes;

    Scroll.defaultProps = { offset: 0 };

    return Scroll;
  },
  Element: function Element(Component) {

    console.warn("Helpers.Element is deprecated since v1.7.0");

    var Element = function (_React$Component2) {
      _inherits(Element, _React$Component2);

      function Element(props) {
        _classCallCheck(this, Element);

        var _this3 = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, props));

        _this3.childBindings = {
          domNode: null
        };
        return _this3;
      }

      _createClass(Element, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (typeof window === 'undefined') {
            return false;
          }
          this.registerElems(this.props.name);
        }
      }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
          if (this.props.name !== prevProps.name) {
            this.registerElems(this.props.name);
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          if (typeof window === 'undefined') {
            return false;
          }
          defaultScroller.unregister(this.props.name);
        }
      }, {
        key: 'registerElems',
        value: function registerElems(name) {
          defaultScroller.register(name, this.childBindings.domNode);
        }
      }, {
        key: 'render',
        value: function render() {
          return React.createElement(Component, _extends({}, this.props, { parentBindings: this.childBindings }));
        }
      }]);

      return Element;
    }(React.Component);

    ;

    Element.propTypes = {
      name: PropTypes.string,
      id: PropTypes.string
    };

    return Element;
  }
};

module.exports = Helpers;

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/animate-scroll.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/animate-scroll.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scroll/modules/mixins/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _smooth = __webpack_require__(/*! ./smooth */ "./node_modules/react-scroll/modules/mixins/smooth.js");

var _smooth2 = _interopRequireDefault(_smooth);

var _cancelEvents = __webpack_require__(/*! ./cancel-events */ "./node_modules/react-scroll/modules/mixins/cancel-events.js");

var _cancelEvents2 = _interopRequireDefault(_cancelEvents);

var _scrollEvents = __webpack_require__(/*! ./scroll-events */ "./node_modules/react-scroll/modules/mixins/scroll-events.js");

var _scrollEvents2 = _interopRequireDefault(_scrollEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Gets the easing type from the smooth prop within options.
 */
var getAnimationType = function getAnimationType(options) {
  return _smooth2.default[options.smooth] || _smooth2.default.defaultEasing;
};
/*
 * Function helper
 */
var functionWrapper = function functionWrapper(value) {
  return typeof value === 'function' ? value : function () {
    return value;
  };
};
/*
 * Wraps window properties to allow server side rendering
 */
var currentWindowProperties = function currentWindowProperties() {
  if (typeof window !== 'undefined') {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
  }
};

/*
 * Helper function to never extend 60fps on the webpage.
 */
var requestAnimationFrameHelper = function () {
  return currentWindowProperties() || function (callback, element, delay) {
    window.setTimeout(callback, delay || 1000 / 60, new Date().getTime());
  };
}();

var makeData = function makeData() {
  return {
    currentPositionY: 0,
    startPositionY: 0,
    targetPositionY: 0,
    progress: 0,
    duration: 0,
    cancel: false,

    target: null,
    containerElement: null,
    to: null,
    start: null,
    deltaTop: null,
    percent: null,
    delayTimeout: null
  };
};

var currentPositionY = function currentPositionY(options) {
  var containerElement = options.data.containerElement;
  if (containerElement && containerElement !== document && containerElement !== document.body) {
    return containerElement.scrollTop;
  } else {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
  }
};

var scrollContainerHeight = function scrollContainerHeight(options) {
  var containerElement = options.data.containerElement;
  if (containerElement && containerElement !== document && containerElement !== document.body) {
    return containerElement.scrollHeight - containerElement.offsetHeight;
  } else {
    var body = document.body;
    var html = document.documentElement;

    return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  }
};

var animateScroll = function animateScroll(easing, options, timestamp) {
  var data = options.data;

  // Cancel on specific events
  if (!options.ignoreCancelEvents && data.cancel) {
    if (_scrollEvents2.default.registered['end']) {
      _scrollEvents2.default.registered['end'](data.to, data.target, data.currentPositionY);
    }
    return;
  };

  data.deltaTop = Math.round(data.targetPositionY - data.startPositionY);

  if (data.start === null) {
    data.start = timestamp;
  }

  data.progress = timestamp - data.start;

  data.percent = data.progress >= data.duration ? 1 : easing(data.progress / data.duration);

  data.currentPositionY = data.startPositionY + Math.ceil(data.deltaTop * data.percent);

  if (data.containerElement && data.containerElement !== document && data.containerElement !== document.body) {
    data.containerElement.scrollTop = data.currentPositionY;
  } else {
    window.scrollTo(0, data.currentPositionY);
  }

  if (data.percent < 1) {
    var easedAnimate = animateScroll.bind(null, easing, options);
    requestAnimationFrameHelper.call(window, easedAnimate);
    return;
  }

  if (_scrollEvents2.default.registered['end']) {
    _scrollEvents2.default.registered['end'](data.to, data.target, data.currentPositionY);
  }
};

var setContainer = function setContainer(options) {
  options.data.containerElement = !options ? null : options.containerId ? document.getElementById(options.containerId) : options.container && options.container.nodeType ? options.container : document;
};

var animateTopScroll = function animateTopScroll(y, options, to, target) {
  options.data = options.data || makeData();

  window.clearTimeout(options.data.delayTimeout);

  _cancelEvents2.default.subscribe(function () {
    options.data.cancel = true;
  });

  setContainer(options);

  options.data.start = null;
  options.data.cancel = false;
  options.data.startPositionY = currentPositionY(options);
  options.data.targetPositionY = options.absolute ? y : y + options.data.startPositionY;

  if (options.data.startPositionY === options.data.targetPositionY) {
    if (_scrollEvents2.default.registered['end']) {
      _scrollEvents2.default.registered['end'](options.data.to, options.data.target, options.data.currentPositionY);
    }
    return;
  }

  options.data.deltaTop = Math.round(options.data.targetPositionY - options.data.startPositionY);

  options.data.duration = functionWrapper(options.duration)(options.data.deltaTop);
  options.data.duration = isNaN(parseFloat(options.data.duration)) ? 1000 : parseFloat(options.data.duration);
  options.data.to = to;
  options.data.target = target;

  var easing = getAnimationType(options);
  var easedAnimate = animateScroll.bind(null, easing, options);

  if (options && options.delay > 0) {
    options.data.delayTimeout = window.setTimeout(function () {
      if (_scrollEvents2.default.registered['begin']) {
        _scrollEvents2.default.registered['begin'](options.data.to, options.data.target);
      }
      requestAnimationFrameHelper.call(window, easedAnimate);
    }, options.delay);
    return;
  }

  if (_scrollEvents2.default.registered['begin']) {
    _scrollEvents2.default.registered['begin'](options.data.to, options.data.target);
  }
  requestAnimationFrameHelper.call(window, easedAnimate);
};

var proceedOptions = function proceedOptions(options) {
  options = _extends({}, options);
  options.data = options.data || makeData();
  options.absolute = true;
  return options;
};

var scrollToTop = function scrollToTop(options) {
  animateTopScroll(0, proceedOptions(options));
};

var scrollTo = function scrollTo(toY, options) {
  animateTopScroll(toY, proceedOptions(options));
};

var scrollToBottom = function scrollToBottom(options) {
  options = proceedOptions(options);
  setContainer(options);
  animateTopScroll(scrollContainerHeight(options), options);
};

var scrollMore = function scrollMore(toY, options) {
  options = proceedOptions(options);
  setContainer(options);
  animateTopScroll(currentPositionY(options) + toY, options);
};

exports.default = {
  animateTopScroll: animateTopScroll,
  getAnimationType: getAnimationType,
  scrollToTop: scrollToTop,
  scrollToBottom: scrollToBottom,
  scrollTo: scrollTo,
  scrollMore: scrollMore
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/cancel-events.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/cancel-events.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _passiveEventListeners = __webpack_require__(/*! ./passive-event-listeners */ "./node_modules/react-scroll/modules/mixins/passive-event-listeners.js");

var events = ['mousedown', 'mousewheel', 'touchmove', 'keydown'];

exports.default = {
  subscribe: function subscribe(cancelEvent) {
    return typeof document !== 'undefined' && events.forEach(function (event) {
      return (0, _passiveEventListeners.addPassiveEventListener)(document, event, cancelEvent);
    });
  }
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/passive-event-listeners.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/passive-event-listeners.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Tell the browser that the event listener won't prevent a scroll.
 * Allowing the browser to continue scrolling without having to
 * to wait for the listener to return.
 */
var addPassiveEventListener = exports.addPassiveEventListener = function addPassiveEventListener(target, eventName, listener) {
  var supportsPassiveOption = function () {
    var supportsPassiveOption = false;
    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function get() {
          supportsPassiveOption = true;
        }
      });
      window.addEventListener('test', null, opts);
    } catch (e) {}
    return supportsPassiveOption;
  }();
  target.addEventListener(eventName, listener, supportsPassiveOption ? { passive: true } : false);
};

var removePassiveEventListener = exports.removePassiveEventListener = function removePassiveEventListener(target, eventName, listener) {
  target.removeEventListener(eventName, listener);
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-element.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-element.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _scroller = __webpack_require__(/*! ./scroller */ "./node_modules/react-scroll/modules/mixins/scroller.js");

var _scroller2 = _interopRequireDefault(_scroller);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (Component) {
  var Element = function (_React$Component) {
    _inherits(Element, _React$Component);

    function Element(props) {
      _classCallCheck(this, Element);

      var _this = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, props));

      _this.childBindings = {
        domNode: null
      };
      return _this;
    }

    _createClass(Element, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (typeof window === 'undefined') {
          return false;
        }
        this.registerElems(this.props.name);
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        if (this.props.name !== prevProps.name) {
          this.registerElems(this.props.name);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (typeof window === 'undefined') {
          return false;
        }
        _scroller2.default.unregister(this.props.name);
      }
    }, {
      key: 'registerElems',
      value: function registerElems(name) {
        _scroller2.default.register(name, this.childBindings.domNode);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Component, _extends({}, this.props, { parentBindings: this.childBindings }));
      }
    }]);

    return Element;
  }(_react2.default.Component);

  ;

  Element.propTypes = {
    name: _propTypes2.default.string,
    id: _propTypes2.default.string
  };

  return Element;
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-events.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-events.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var Events = {
	registered: {},
	scrollEvent: {
		register: function register(evtName, callback) {
			Events.registered[evtName] = callback;
		},
		remove: function remove(evtName) {
			Events.registered[evtName] = null;
		}
	}
};

exports.default = Events;

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-hash.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-hash.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _passiveEventListeners = __webpack_require__(/*! ./passive-event-listeners */ "./node_modules/react-scroll/modules/mixins/passive-event-listeners.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scroll/modules/mixins/utils.js");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scrollHash = {
  mountFlag: false,
  initialized: false,
  scroller: null,
  containers: {},

  mount: function mount(scroller) {
    this.scroller = scroller;

    this.handleHashChange = this.handleHashChange.bind(this);
    window.addEventListener('hashchange', this.handleHashChange);

    this.initStateFromHash();
    this.mountFlag = true;
  },
  mapContainer: function mapContainer(to, container) {
    this.containers[to] = container;
  },
  isMounted: function isMounted() {
    return this.mountFlag;
  },
  isInitialized: function isInitialized() {
    return this.initialized;
  },
  initStateFromHash: function initStateFromHash() {
    var _this = this;

    var hash = this.getHash();
    if (hash) {
      window.setTimeout(function () {
        _this.scrollTo(hash, true);
        _this.initialized = true;
      }, 10);
    } else {
      this.initialized = true;
    }
  },
  scrollTo: function scrollTo(to, isInit) {
    var scroller = this.scroller;
    var element = scroller.get(to);
    if (element && (isInit || to !== scroller.getActiveLink())) {
      var container = this.containers[to] || document;
      scroller.scrollTo(to, { container: container });
    }
  },
  getHash: function getHash() {
    return _utils2.default.getHash();
  },
  changeHash: function changeHash(to) {
    if (this.isInitialized() && _utils2.default.getHash() !== to) {
      _utils2.default.pushHash(to);
    }
  },
  handleHashChange: function handleHashChange() {
    this.scrollTo(this.getHash());
  },
  unmount: function unmount() {
    this.scroller = null;
    this.containers = null;
    window.removeEventListener('hashchange', this.handleHashChange);
  }
};

exports.default = scrollHash;

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-link.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-link.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _scrollSpy = __webpack_require__(/*! ./scroll-spy */ "./node_modules/react-scroll/modules/mixins/scroll-spy.js");

var _scrollSpy2 = _interopRequireDefault(_scrollSpy);

var _scroller = __webpack_require__(/*! ./scroller */ "./node_modules/react-scroll/modules/mixins/scroller.js");

var _scroller2 = _interopRequireDefault(_scroller);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _scrollHash = __webpack_require__(/*! ./scroll-hash */ "./node_modules/react-scroll/modules/mixins/scroll-hash.js");

var _scrollHash2 = _interopRequireDefault(_scrollHash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var protoTypes = {
  to: _propTypes2.default.string.isRequired,
  containerId: _propTypes2.default.string,
  container: _propTypes2.default.object,
  activeClass: _propTypes2.default.string,
  spy: _propTypes2.default.bool,
  smooth: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  offset: _propTypes2.default.number,
  delay: _propTypes2.default.number,
  isDynamic: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  duration: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  absolute: _propTypes2.default.bool,
  onSetActive: _propTypes2.default.func,
  onSetInactive: _propTypes2.default.func,
  ignoreCancelEvents: _propTypes2.default.bool,
  hashSpy: _propTypes2.default.bool
};

exports.default = function (Component, customScroller) {

  var scroller = customScroller || _scroller2.default;

  var Link = function (_React$PureComponent) {
    _inherits(Link, _React$PureComponent);

    function Link(props) {
      _classCallCheck(this, Link);

      var _this = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, props));

      _initialiseProps.call(_this);

      _this.state = {
        active: false
      };
      return _this;
    }

    _createClass(Link, [{
      key: 'getScrollSpyContainer',
      value: function getScrollSpyContainer() {
        var containerId = this.props.containerId;
        var container = this.props.container;

        if (containerId && !container) {
          return document.getElementById(containerId);
        }

        if (container && container.nodeType) {
          return container;
        }

        return document;
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.spy || this.props.hashSpy) {
          var scrollSpyContainer = this.getScrollSpyContainer();

          if (!_scrollSpy2.default.isMounted(scrollSpyContainer)) {
            _scrollSpy2.default.mount(scrollSpyContainer);
          }

          if (this.props.hashSpy) {
            if (!_scrollHash2.default.isMounted()) {
              _scrollHash2.default.mount(scroller);
            }
            _scrollHash2.default.mapContainer(this.props.to, scrollSpyContainer);
          }

          _scrollSpy2.default.addSpyHandler(this.spyHandler, scrollSpyContainer);

          this.setState({
            container: scrollSpyContainer
          });
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        _scrollSpy2.default.unmount(this.stateHandler, this.spyHandler);
      }
    }, {
      key: 'render',
      value: function render() {
        var className = "";

        if (this.state && this.state.active) {
          className = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim();
        } else {
          className = this.props.className;
        }

        var props = _extends({}, this.props);

        for (var prop in protoTypes) {
          if (props.hasOwnProperty(prop)) {
            delete props[prop];
          }
        }

        props.className = className;
        props.onClick = this.handleClick;

        return _react2.default.createElement(Component, props);
      }
    }]);

    return Link;
  }(_react2.default.PureComponent);

  var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.scrollTo = function (to, props) {
      scroller.scrollTo(to, _extends({}, _this2.state, props));
    };

    this.handleClick = function (event) {

      /*
       * give the posibility to override onClick
       */

      if (_this2.props.onClick) {
        _this2.props.onClick(event);
      }

      /*
       * dont bubble the navigation
       */

      if (event.stopPropagation) event.stopPropagation();
      if (event.preventDefault) event.preventDefault();

      /*
       * do the magic!
       */
      _this2.scrollTo(_this2.props.to, _this2.props);
    };

    this.spyHandler = function (y) {

      var scrollSpyContainer = _this2.getScrollSpyContainer();

      if (_scrollHash2.default.isMounted() && !_scrollHash2.default.isInitialized()) {
        return;
      }

      var to = _this2.props.to;
      var element = null;
      var elemTopBound = 0;
      var elemBottomBound = 0;
      var containerTop = 0;

      if (scrollSpyContainer.getBoundingClientRect) {
        var containerCords = scrollSpyContainer.getBoundingClientRect();
        containerTop = containerCords.top;
      }

      if (!element || _this2.props.isDynamic) {
        element = scroller.get(to);
        if (!element) {
          return;
        }

        var cords = element.getBoundingClientRect();
        elemTopBound = cords.top - containerTop + y;
        elemBottomBound = elemTopBound + cords.height;
      }

      var offsetY = y - _this2.props.offset;
      var isInside = offsetY >= Math.floor(elemTopBound) && offsetY < Math.floor(elemBottomBound);
      var isOutside = offsetY < Math.floor(elemTopBound) || offsetY >= Math.floor(elemBottomBound);
      var activeLink = scroller.getActiveLink();

      if (isOutside) {
        if (to === activeLink) {
          scroller.setActiveLink(void 0);
        }

        if (_this2.props.hashSpy && _scrollHash2.default.getHash() === to) {
          _scrollHash2.default.changeHash();
        }

        if (_this2.props.spy && _this2.state.active) {
          _this2.setState({ active: false });
          _this2.props.onSetInactive && _this2.props.onSetInactive(to, element);
        }
      }

      if (isInside && (activeLink !== to || _this2.state.active === false)) {
        scroller.setActiveLink(to);

        _this2.props.hashSpy && _scrollHash2.default.changeHash(to);

        if (_this2.props.spy) {
          _this2.setState({ active: true });
          _this2.props.onSetActive && _this2.props.onSetActive(to, element);
        }
      }
    };
  };

  ;

  Link.propTypes = protoTypes;

  Link.defaultProps = { offset: 0 };

  return Link;
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-spy.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-spy.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");

var _lodash2 = _interopRequireDefault(_lodash);

var _passiveEventListeners = __webpack_require__(/*! ./passive-event-listeners */ "./node_modules/react-scroll/modules/mixins/passive-event-listeners.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The eventHandler will execute at a rate of 15fps
var eventThrottler = function eventThrottler(eventHandler) {
  return (0, _lodash2.default)(eventHandler, 66);
};

var scrollSpy = {

  spyCallbacks: [],
  spySetState: [],
  scrollSpyContainers: [],

  mount: function mount(scrollSpyContainer) {
    if (scrollSpyContainer) {
      var eventHandler = eventThrottler(function (event) {
        scrollSpy.scrollHandler(scrollSpyContainer);
      });
      scrollSpy.scrollSpyContainers.push(scrollSpyContainer);
      (0, _passiveEventListeners.addPassiveEventListener)(scrollSpyContainer, 'scroll', eventHandler);
    }
  },
  isMounted: function isMounted(scrollSpyContainer) {
    return scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer) !== -1;
  },
  currentPositionY: function currentPositionY(scrollSpyContainer) {
    if (scrollSpyContainer === document) {
      var supportPageOffset = window.pageXOffset !== undefined;
      var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
      return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    } else {
      return scrollSpyContainer.scrollTop;
    }
  },
  scrollHandler: function scrollHandler(scrollSpyContainer) {
    var callbacks = scrollSpy.scrollSpyContainers[scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer)].spyCallbacks || [];
    callbacks.forEach(function (c) {
      return c(scrollSpy.currentPositionY(scrollSpyContainer));
    });
  },
  addStateHandler: function addStateHandler(handler) {
    scrollSpy.spySetState.push(handler);
  },
  addSpyHandler: function addSpyHandler(handler, scrollSpyContainer) {
    var container = scrollSpy.scrollSpyContainers[scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer)];

    if (!container.spyCallbacks) {
      container.spyCallbacks = [];
    }

    container.spyCallbacks.push(handler);

    handler(scrollSpy.currentPositionY(scrollSpyContainer));
  },
  updateStates: function updateStates() {
    scrollSpy.spySetState.forEach(function (s) {
      return s();
    });
  },
  unmount: function unmount(stateHandler, spyHandler) {
    scrollSpy.scrollSpyContainers.forEach(function (c) {
      return c.spyCallbacks && c.spyCallbacks.length && c.spyCallbacks.splice(c.spyCallbacks.indexOf(spyHandler), 1);
    });

    if (scrollSpy.spySetState && scrollSpy.spySetState.length) {
      scrollSpy.spySetState.splice(scrollSpy.spySetState.indexOf(stateHandler), 1);
    }

    document.removeEventListener('scroll', scrollSpy.scrollHandler);
  },


  update: function update() {
    return scrollSpy.scrollSpyContainers.forEach(function (c) {
      return scrollSpy.scrollHandler(c);
    });
  }
};

exports.default = scrollSpy;

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroller.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroller.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scroll/modules/mixins/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _animateScroll = __webpack_require__(/*! ./animate-scroll */ "./node_modules/react-scroll/modules/mixins/animate-scroll.js");

var _animateScroll2 = _interopRequireDefault(_animateScroll);

var _scrollEvents = __webpack_require__(/*! ./scroll-events */ "./node_modules/react-scroll/modules/mixins/scroll-events.js");

var _scrollEvents2 = _interopRequireDefault(_scrollEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __mapped = {};
var __activeLink = void 0;

exports.default = {

  unmount: function unmount() {
    __mapped = {};
  },

  register: function register(name, element) {
    __mapped[name] = element;
  },

  unregister: function unregister(name) {
    delete __mapped[name];
  },

  get: function get(name) {
    return __mapped[name] || document.getElementById(name) || document.getElementsByName(name)[0] || document.getElementsByClassName(name)[0];
  },

  setActiveLink: function setActiveLink(link) {
    return __activeLink = link;
  },

  getActiveLink: function getActiveLink() {
    return __activeLink;
  },

  scrollTo: function scrollTo(to, props) {

    var target = this.get(to);

    if (!target) {
      console.warn("target Element not found");
      return;
    }

    props = _extends({}, props, { absolute: false });

    var containerId = props.containerId;
    var container = props.container;

    var containerElement = void 0;
    if (containerId) {
      containerElement = document.getElementById(containerId);
    } else if (container && container.nodeType) {
      containerElement = container;
    } else {
      containerElement = document;
    }

    props.absolute = true;

    var scrollOffset = _utils2.default.scrollOffset(containerElement, target) + (props.offset || 0);

    /*
     * if animate is not provided just scroll into the view
     */
    if (!props.smooth) {
      if (_scrollEvents2.default.registered['begin']) {
        _scrollEvents2.default.registered['begin'](to, target);
      }

      if (containerElement === document) {
        window.scrollTo(0, scrollOffset);
      } else {
        containerElement.scrollTop = scrollOffset;
      }

      if (_scrollEvents2.default.registered['end']) {
        _scrollEvents2.default.registered['end'](to, target);
      }

      return;
    }

    /*
     * Animate scrolling
     */

    _animateScroll2.default.animateTopScroll(scrollOffset, props, to, target);
  }
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/smooth.js":
/*!************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/smooth.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  /*
   * https://github.com/oblador/angular-scroll (duScrollDefaultEasing)
   */
  defaultEasing: function defaultEasing(x) {
    if (x < 0.5) {
      return Math.pow(x * 2, 2) / 2;
    }
    return 1 - Math.pow((1 - x) * 2, 2) / 2;
  },
  /*
   * https://gist.github.com/gre/1650294
   */
  // no easing, no acceleration
  linear: function linear(x) {
    return x;
  },
  // accelerating from zero velocity
  easeInQuad: function easeInQuad(x) {
    return x * x;
  },
  // decelerating to zero velocity
  easeOutQuad: function easeOutQuad(x) {
    return x * (2 - x);
  },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function easeInOutQuad(x) {
    return x < .5 ? 2 * x * x : -1 + (4 - 2 * x) * x;
  },
  // accelerating from zero velocity 
  easeInCubic: function easeInCubic(x) {
    return x * x * x;
  },
  // decelerating to zero velocity π
  easeOutCubic: function easeOutCubic(x) {
    return --x * x * x + 1;
  },
  // acceleration until halfway, then deceleration 
  easeInOutCubic: function easeInOutCubic(x) {
    return x < .5 ? 4 * x * x * x : (x - 1) * (2 * x - 2) * (2 * x - 2) + 1;
  },
  // accelerating from zero velocity 
  easeInQuart: function easeInQuart(x) {
    return x * x * x * x;
  },
  // decelerating to zero velocity 
  easeOutQuart: function easeOutQuart(x) {
    return 1 - --x * x * x * x;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function easeInOutQuart(x) {
    return x < .5 ? 8 * x * x * x * x : 1 - 8 * --x * x * x * x;
  },
  // accelerating from zero velocity
  easeInQuint: function easeInQuint(x) {
    return x * x * x * x * x;
  },
  // decelerating to zero velocity
  easeOutQuint: function easeOutQuint(x) {
    return 1 + --x * x * x * x * x;
  },
  // acceleration until halfway, then deceleration 
  easeInOutQuint: function easeInOutQuint(x) {
    return x < .5 ? 16 * x * x * x * x * x : 1 + 16 * --x * x * x * x * x;
  }
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/utils.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/utils.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var pushHash = function pushHash(hash) {
  hash = hash ? hash.indexOf('#') === 0 ? hash : '#' + hash : '';

  if (history.pushState) {
    var loc = window.location;
    history.pushState(null, null, hash ? loc.pathname + loc.search + hash
    // remove hash
    : loc.pathname + loc.search);
  } else {
    location.hash = hash;
  }
};

var getHash = function getHash() {
  return window.location.hash.replace(/^#/, '');
};

var filterElementInContainer = function filterElementInContainer(container) {
  return function (element) {
    return container.contains ? container != element && container.contains(element) : !!(container.compareDocumentPosition(element) & 16);
  };
};

var scrollOffset = function scrollOffset(c, t) {
  return c === document ? t.getBoundingClientRect().top + (window.scrollY || window.pageYOffset) : getComputedStyle(c).position !== "static" ? t.offsetTop : t.getBoundingClientRect().top + c.scrollTop;
};

exports.default = {
  pushHash: pushHash,
  getHash: getHash,
  filterElementInContainer: filterElementInContainer,
  scrollOffset: scrollOffset
};

/***/ }),

/***/ "./node_modules/react/cjs/react.production.min.js":
/*!********************************************************!*\
  !*** ./node_modules/react/cjs/react.production.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.10.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var h=__webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js"),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,aa=n?Symbol.for("react.suspense_list"):60120,ba=n?Symbol.for("react.memo"):
60115,ca=n?Symbol.for("react.lazy"):60116;n&&Symbol.for("react.fundamental");n&&Symbol.for("react.responder");n&&Symbol.for("react.scope");var z="function"===typeof Symbol&&Symbol.iterator;
function A(a){for(var b=a.message,c="https://reactjs.org/docs/error-decoder.html?invariant="+b,d=1;d<arguments.length;d++)c+="&args[]="+encodeURIComponent(arguments[d]);a.message="Minified React error #"+b+"; visit "+c+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ";return a}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C={};
function D(a,b,c){this.props=a;this.context=b;this.refs=C;this.updater=c||B}D.prototype.isReactComponent={};D.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw A(Error(85));this.updater.enqueueSetState(this,a,b,"setState")};D.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function E(){}E.prototype=D.prototype;function F(a,b,c){this.props=a;this.context=b;this.refs=C;this.updater=c||B}var G=F.prototype=new E;
G.constructor=F;h(G,D.prototype);G.isPureReactComponent=!0;var H={current:null},I={suspense:null},J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,c){var d,e={},g=null,l=null;if(null!=b)for(d in void 0!==b.ref&&(l=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,d)&&!L.hasOwnProperty(d)&&(e[d]=b[d]);var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){for(var k=Array(f),m=0;m<f;m++)k[m]=arguments[m+2];e.children=k}if(a&&a.defaultProps)for(d in f=a.defaultProps,f)void 0===e[d]&&(e[d]=f[d]);return{$$typeof:p,type:a,key:g,ref:l,props:e,_owner:J.current}}
function da(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,c,d){if(P.length){var e=P.pop();e.result=a;e.keyPrefix=b;e.func=c;e.context=d;e.count=0;return e}return{result:a,keyPrefix:b,func:c,context:d,count:0}}
function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
function S(a,b,c,d){var e=typeof a;if("undefined"===e||"boolean"===e)a=null;var g=!1;if(null===a)g=!0;else switch(e){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return c(d,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var l=0;l<a.length;l++){e=a[l];var f=b+T(e,l);g+=S(e,f,c,d)}else if(null===a||"object"!==typeof a?f=null:(f=z&&a[z]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),l=
0;!(e=a.next()).done;)e=e.value,f=b+T(e,l++),g+=S(e,f,c,d);else if("object"===e)throw c=""+a,A(Error(31),"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,"");return g}function U(a,b,c){return null==a?0:S(a,"",b,c)}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function ea(a,b){a.func.call(a.context,b,a.count++)}
function fa(a,b,c){var d=a.result,e=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,d,c,function(a){return a}):null!=a&&(N(a)&&(a=da(a,e+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+c)),d.push(a))}function V(a,b,c,d,e){var g="";null!=c&&(g=(""+c).replace(O,"$&/")+"/");b=Q(b,g,d,e);U(a,fa,b);R(b)}function W(){var a=H.current;if(null===a)throw A(Error(321));return a}
var X={Children:{map:function(a,b,c){if(null==a)return a;var d=[];V(a,d,null,b,c);return d},forEach:function(a,b,c){if(null==a)return a;b=Q(null,null,b,c);U(a,ea,b);R(b)},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];V(a,b,null,function(a){return a});return b},only:function(a){if(!N(a))throw A(Error(143));return a}},createRef:function(){return{current:null}},Component:D,PureComponent:F,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:x,render:a}},lazy:function(a){return{$$typeof:ca,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:ba,type:a,compare:void 0===b?null:b}},useCallback:function(a,b){return W().useCallback(a,b)},useContext:function(a,b){return W().useContext(a,b)},useEffect:function(a,b){return W().useEffect(a,b)},useImperativeHandle:function(a,
b,c){return W().useImperativeHandle(a,b,c)},useDebugValue:function(){},useLayoutEffect:function(a,b){return W().useLayoutEffect(a,b)},useMemo:function(a,b){return W().useMemo(a,b)},useReducer:function(a,b,c){return W().useReducer(a,b,c)},useRef:function(a){return W().useRef(a)},useState:function(a){return W().useState(a)},Fragment:r,Profiler:u,StrictMode:t,Suspense:y,unstable_SuspenseList:aa,createElement:M,cloneElement:function(a,b,c){if(null===a||void 0===a)throw A(Error(267),a);var d=h({},a.props),
e=a.key,g=a.ref,l=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,l=J.current);void 0!==b.key&&(e=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(k in b)K.call(b,k)&&!L.hasOwnProperty(k)&&(d[k]=void 0===b[k]&&void 0!==f?f[k]:b[k])}var k=arguments.length-2;if(1===k)d.children=c;else if(1<k){f=Array(k);for(var m=0;m<k;m++)f[m]=arguments[m+2];d.children=f}return{$$typeof:p,type:a.type,key:e,ref:g,props:d,_owner:l}},createFactory:function(a){var b=M.bind(null,a);b.type=a;return b},
isValidElement:N,version:"16.10.2",unstable_withSuspenseConfig:function(a,b){var c=I.suspense;I.suspense=void 0===b?null:b;try{a()}finally{I.suspense=c}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:H,ReactCurrentBatchConfig:I,ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:h}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ./cjs/react.production.min.js */ "./node_modules/react/cjs/react.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/scheduler/cjs/scheduler.production.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/scheduler/cjs/scheduler.production.min.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.16.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});var f,g,h,k,l;
if("undefined"===typeof window||"function"!==typeof MessageChannel){var p=null,q=null,t=function(){if(null!==p)try{var a=exports.unstable_now();p(!0,a);p=null}catch(b){throw setTimeout(t,0),b;}},u=Date.now();exports.unstable_now=function(){return Date.now()-u};f=function(a){null!==p?setTimeout(f,0,a):(p=a,setTimeout(t,0))};g=function(a,b){q=setTimeout(a,b)};h=function(){clearTimeout(q)};k=function(){return!1};l=exports.unstable_forceFrameRate=function(){}}else{var w=window.performance,x=window.Date,
y=window.setTimeout,z=window.clearTimeout,A=window.requestAnimationFrame,B=window.cancelAnimationFrame;"undefined"!==typeof console&&("function"!==typeof A&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!==typeof B&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));if("object"===typeof w&&
"function"===typeof w.now)exports.unstable_now=function(){return w.now()};else{var C=x.now();exports.unstable_now=function(){return x.now()-C}}var D=!1,E=null,F=-1,G=5,H=0;k=function(){return exports.unstable_now()>=H};l=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):G=0<a?Math.floor(1E3/a):33.33};var I=new MessageChannel,J=I.port2;I.port1.onmessage=
function(){if(null!==E){var a=exports.unstable_now();H=a+G;try{E(!0,a)?J.postMessage(null):(D=!1,E=null)}catch(b){throw J.postMessage(null),b;}}else D=!1};f=function(a){E=a;D||(D=!0,J.postMessage(null))};g=function(a,b){F=y(function(){a(exports.unstable_now())},b)};h=function(){z(F);F=-1}}function K(a,b){var c=a.length;a.push(b);a:for(;;){var d=Math.floor((c-1)/2),e=a[d];if(void 0!==e&&0<L(e,b))a[d]=b,a[c]=e,c=d;else break a}}function M(a){a=a[0];return void 0===a?null:a}
function N(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>L(n,c))void 0!==r&&0>L(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>L(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function L(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var O=[],P=[],Q=1,R=null,S=3,T=!1,U=!1,V=!1;
function W(a){for(var b=M(P);null!==b;){if(null===b.callback)N(P);else if(b.startTime<=a)N(P),b.sortIndex=b.expirationTime,K(O,b);else break;b=M(P)}}function X(a){V=!1;W(a);if(!U)if(null!==M(O))U=!0,f(Y);else{var b=M(P);null!==b&&g(X,b.startTime-a)}}
function Y(a,b){U=!1;V&&(V=!1,h());T=!0;var c=S;try{W(b);for(R=M(O);null!==R&&(!(R.expirationTime>b)||a&&!k());){var d=R.callback;if(null!==d){R.callback=null;S=R.priorityLevel;var e=d(R.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?R.callback=e:R===M(O)&&N(O);W(b)}else N(O);R=M(O)}if(null!==R)var m=!0;else{var n=M(P);null!==n&&g(X,n.startTime-b);m=!1}return m}finally{R=null,S=c,T=!1}}
function Z(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}var aa=l;exports.unstable_ImmediatePriority=1;exports.unstable_UserBlockingPriority=2;exports.unstable_NormalPriority=3;exports.unstable_IdlePriority=5;exports.unstable_LowPriority=4;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=S;S=a;try{return b()}finally{S=c}};
exports.unstable_next=function(a){switch(S){case 1:case 2:case 3:var b=3;break;default:b=S}var c=S;S=b;try{return a()}finally{S=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();if("object"===typeof c&&null!==c){var e=c.delay;e="number"===typeof e&&0<e?d+e:d;c="number"===typeof c.timeout?c.timeout:Z(a)}else c=Z(a),e=d;c=e+c;a={id:Q++,callback:b,priorityLevel:a,startTime:e,expirationTime:c,sortIndex:-1};e>d?(a.sortIndex=e,K(P,a),null===M(O)&&a===M(P)&&(V?h():V=!0,g(X,e-d))):(a.sortIndex=c,K(O,a),U||T||(U=!0,f(Y)));return a};exports.unstable_cancelCallback=function(a){a.callback=null};
exports.unstable_wrapCallback=function(a){var b=S;return function(){var c=S;S=b;try{return a.apply(this,arguments)}finally{S=c}}};exports.unstable_getCurrentPriorityLevel=function(){return S};exports.unstable_shouldYield=function(){var a=exports.unstable_now();W(a);var b=M(O);return b!==R&&null!==R&&null!==b&&null!==b.callback&&b.startTime<=a&&b.expirationTime<R.expirationTime||k()};exports.unstable_requestPaint=aa;exports.unstable_continueExecution=function(){U||T||(U=!0,f(Y))};
exports.unstable_pauseExecution=function(){};exports.unstable_getFirstCallbackNode=function(){return M(O)};exports.unstable_Profiling=null;


/***/ }),

/***/ "./node_modules/scheduler/index.js":
/*!*****************************************!*\
  !*** ./node_modules/scheduler/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ./cjs/scheduler.production.min.js */ "./node_modules/scheduler/cjs/scheduler.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/shuffle-array/index.js":
/*!*********************************************!*\
  !*** ./node_modules/shuffle-array/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Randomize the order of the elements in a given array.
 * @param {Array} arr - The given array.
 * @param {Object} [options] - Optional configuration options.
 * @param {Boolean} [options.copy] - Sets if should return a shuffled copy of the given array. By default it's a falsy value.
 * @param {Function} [options.rng] - Specifies a custom random number generator.
 * @returns {Array}
 */
function shuffle(arr, options) {

  if (!Array.isArray(arr)) {
    throw new Error('shuffle expect an array as parameter.');
  }

  options = options || {};

  var collection = arr,
      len = arr.length,
      rng = options.rng || Math.random,
      random,
      temp;

  if (options.copy === true) {
    collection = arr.slice();
  }

  while (len) {
    random = Math.floor(rng() * len);
    len -= 1;
    temp = collection[len];
    collection[len] = collection[random];
    collection[random] = temp;
  }

  return collection;
};

/**
 * Pick one or more random elements from the given array.
 * @param {Array} arr - The given array.
 * @param {Object} [options] - Optional configuration options.
 * @param {Number} [options.picks] - Specifies how many random elements you want to pick. By default it picks 1.
 * @param {Function} [options.rng] - Specifies a custom random number generator.
 * @returns {Object}
 */
shuffle.pick = function(arr, options) {

  if (!Array.isArray(arr)) {
    throw new Error('shuffle.pick() expect an array as parameter.');
  }

  options = options || {};

  var rng = options.rng || Math.random,
      picks = options.picks || 1;

  if (typeof picks === 'number' && picks !== 1) {
    var len = arr.length,
        collection = arr.slice(),
        random = [],
        index;

    while (picks && len) {
      index = Math.floor(rng() * len);
      random.push(collection[index]);
      collection.splice(index, 1);
      len -= 1;
      picks -= 1;
    }

    return random;
  }

  return arr[Math.floor(rng() * arr.length)];
};

/**
 * Expose
 */
module.exports = shuffle;


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
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
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ });