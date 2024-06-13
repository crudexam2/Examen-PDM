"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _ruteFactura = require("./rute.factura.js");
var ruta = (0, _express.Router)();
ruta.use("/api", _ruteFactura.rutaUser);
var _default = exports["default"] = ruta;