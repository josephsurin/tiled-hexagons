"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _assignDeep = _interopRequireDefault(require("assign-deep"));

var _hexagon = _interopRequireDefault(require("./hexagon"));

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