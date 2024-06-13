import { Router } from "express";
import { rutaUser } from "./rute.factura.js";

const ruta = Router();
ruta.use("/api",rutaUser);

export default ruta;