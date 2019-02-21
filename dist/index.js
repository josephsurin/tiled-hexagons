"use strict";

var _hexagon = _interopRequireDefault(require("./hexagon"));

var _tiledHexagons = _interopRequireDefault(require("./tiled-hexagons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Hexagon: _hexagon.default,
  TiledHexagons: _tiledHexagons.default
};