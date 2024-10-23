
import { Schema, model } from "mongoose";

const schemaReserva = new Schema({
    nombre: String,
    email: { type: String, required: true },
    fecha: { type: Date, required: true },
    hora: { type: String, required: true },
    personas: { type: Number, required: true },
    codigoReserva: { type: String, unique: true }, // Código único para cada reserva
});

export const ModeloReserva = model("reserva", schemaReserva);
