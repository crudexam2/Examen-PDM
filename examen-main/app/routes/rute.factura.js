import {Router} from "express";
import { crearProducto, eliminarProducto, modificarProducto, mostrarProducto, mostrarProductoID } from "../controller/control.js";


export const rutaUser = Router();

rutaUser.post("/user", crearProducto);
rutaUser.get("/user", mostrarProducto);
rutaUser.get("/user/:id", mostrarProductoID);
rutaUser.put("/user", modificarProducto);
rutaUser.delete("/user", eliminarProducto); 



