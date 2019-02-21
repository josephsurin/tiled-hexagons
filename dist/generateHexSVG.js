"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateHexSVG = generateHexSVG;

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