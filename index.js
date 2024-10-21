import express from "express";
import "dotenv/config";
import cors from "cors";
import { conectarDB } from "./database/conexion.js";


const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
await conectarDB();
