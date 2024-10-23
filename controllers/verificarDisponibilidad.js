import { ModeloReserva } from "../database/models/ReservaUsuario.js";


const LIMITE_PERSONAS_POR_HORARIO = 10;

export const verificarDisponibilidad = async (req, res, next) => {
  const { fecha, hora, personas } = req.body;

  try {
    // Buscar todas las reservas en la misma fecha y hora
    const reservasExistentes = await ModeloReserva.find({ fecha, hora });

    // Sumar el número total de personas ya reservadas en esa franja horaria
    const personasReservadas = reservasExistentes.reduce((total, reserva) => {
      return total + reserva.personas;
    }, 0);

    // Verificar si hay suficiente espacio para la nueva reserva
    if (personasReservadas + personas <= LIMITE_PERSONAS_POR_HORARIO) {
      res.json({
        disponible: true,
        message: "Hay espacio disponible para la reserva",
      });
    } else {
      res.json({
        disponible: false,
        message: "No hay suficiente espacio para la reserva",
      });
    }
  } catch (error) {
    next(new Error("Error al verificar la disponibilidad"));
  }
};
