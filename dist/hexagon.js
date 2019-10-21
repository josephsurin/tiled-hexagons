"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _generateHexSVG = require("./generateHexSVG");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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