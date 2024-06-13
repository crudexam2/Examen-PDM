"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _routes = _interopRequireDefault(require("./routes/routes.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_dotenv["default"].config();
var app = (0, _express["default"])();
app.use(_express["default"].json());
app.set("port", process.env.PORT);
app.use("/", _routes["default"]);
var _default = exports["default"] = app;