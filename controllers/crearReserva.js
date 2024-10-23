// reserva.js
import { ModeloReserva } from "../database/models/ReservaUsuario.js";

export const crearReserva = async (req, res, next) => {
    const { nombre, email, fecha, hora, personas } = req.body;

    try {
        // Crear un código único para la reserva
        const codigoReserva = Math.random().toString(36).slice(2);

        // Crear una nueva reserva con los datos proporcionados
        const nuevaReserva = new ModeloReserva({
            nombre,
            email,
            fecha,
            hora,
            personas,
            codigoReserva,
        });

        // Guardar la reserva en la base de datos
        await nuevaReserva.save();

        // Responder con la información de la reserva
        res.json({
            message: "Reserva creada exitosamente",
            reserva: nuevaReserva,
        });
    } catch (error) {
        next(new Error("Error al crear la reserva"));
    }
};
