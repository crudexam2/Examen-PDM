"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rutaUser = void 0;
var _express = require("express");
var _control = require("../controller/control.js");
var rutaUser = exports.rutaUser = (0, _express.Router)();
rutaUser.post("/user", _control.crearProducto);
rutaUser.get("/user", _control.mostrarProducto);
rutaUser.get("/user/:id", _control.mostrarProductoID);
rutaUser.put("/user", _control.modificarProducto);
rutaUser["delete"]("/user", _control.eliminarProducto);