import express from "express";
import dotenv from "dotenv";
dotenv.config();
import ruta from "./routes/routes.js";

const app = express();

app.use(express.json());
app.set("port", process.env.PORT);
app.use("/", ruta);

export default app;