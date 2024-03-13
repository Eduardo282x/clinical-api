import express from "express";
import morgan from "morgan";
import cors from "cors";
import apiRouter from "./routes/api.routes";

const app = express();

//Settings
app.set("port", 3000);

//Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//Routes
app.use('/api', apiRouter);

export default app;