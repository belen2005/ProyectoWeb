import { Schema, model } from "mongoose";

const schemaBrava=new Schema({
    id: {type:Number, unique: true},
    producto:String,
    precio:String,
    descripción:String,
})

export const modeloProductos=model("Producto", schemaBrava)