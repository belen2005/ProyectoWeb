import { modeloProductos } from "../database/models/modeloProductos.js";
import { formatearFiltrosDB } from "../utils/functions.js";

export const getProductos = (req, res, next) => {
  const filtroProducto = formatearFiltrosDB(req.query.producto);

  const filtros = {};
  if (filtroProducto) filtros.producto = filtroProducto;

  modeloProductos
    .find(filtros) // Utiliza los filtros aquí
    .then((data) => {
      console.log("Datos obtenidos de MongoDB:", data);
      if (data.length === 0) {
        res.send("no encontramos productos");
      } else {
        res.send(data);
      }
    })
    .catch((error) => {
      next(error);
    });
};
