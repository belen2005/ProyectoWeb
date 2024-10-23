import express from "express";
import "dotenv/config";
import cors from "cors";
import { conectarDB } from "./database/conexion.js";
import { getProductos } from "./controllers/getProductos.js";
import { getProductoById } from "./controllers/getProductoById.js";
import { deleteProducto } from "./controllers/deleteProducto.js";
import { mostrarDatosRequest } from "./middlewares/mostrarDatosRequest.js";
import { manejadorErrores } from "./middlewares/manejadorErrores.js";



const app = express();
const port = 4000;
app.use(express.json());
app.use(cors());
await conectarDB();


app.use(mostrarDatosRequest)

app.get("/",(req,res)=>{
  res.send("Api Brava")
})
app.get("/productos", getProductos)
app.get("/producto/:id", getProductoById);
app.delete("/producto/:id", deleteProducto);


//middleware manejador de errores
app.use(manejadorErrores);

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
  });
