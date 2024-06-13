import { config } from "dotenv";
import pool from "../config/db.mysql.js";
import {success, error} from "../config/msj.js"

config();


export const crearProducto = async(req,res)=>{
    const nombre = req.body.nombre;
    const cantidad = req.body.cantidad;
    const precio = req.body.precio;
    try {
        const respuesta = await pool.query(`CALL sp_crear('${nombre}', '${cantidad}', '${precio}');`);
        if (respuesta[0].affectedRows == 1){
            success(req,res,200, "Producto agregado");
        }else{
            error(req,res,400, "No se puede agregar")
        }
        
    } catch (err) {
        error(req, res, 501, err)
    }
};

export const mostrarProducto = async(req, res)=>{
    try {
        const respuesta = await pool.query(`CALL sp_todos();`);
        console.log(respuesta);
        success(req,res,200,respuesta[0])
    } catch (err) {
        error(req, res, 500, err)
    }
};

export const mostrarProductoID = async(req,res)=>{
    let id = req.params.id;
    try {   
        const respuesta = await pool.query(`CALL sp_buscar(${id});`);
        console.log(respuesta);
        success(req,res,200,respuesta[0])
    } catch (err) {
        error(req, res, 500, err)
    }
};

export const modificarProducto = async(req,res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const cantidad = req.body.cantidad;
    const precio = req.body.precio;

    try {
        const respuesta = await pool.query(`CALL sp_modificar('${nombre}', '${cantidad}', '${precio}', '${id}');`);
        if (respuesta[0].affectedRows == 1){
            success(req,res,200, "Producto modificado");
        }else{
            error(req,res,400, "No se puede modificar")
        }
        
    } catch (err) {
        error(req, res, 501, err)
    }
};

export const eliminarProducto = async(req,res)=>{
    const id = req.body.id;
    try {
        const respuesta = await pool.query(`CALL sp_borrar('${id}');`);
        if (respuesta[0].affectedRows == 1){
            success(req,res,200, "Producto eliminado");
        }else{
            error(req,res,400, "No se puede eliminar")
        }
        
    } catch (err) {
        error(req, res, 501, err)
    }
};
