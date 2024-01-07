import express from "express";
import morgan from "morgan";
import cors from "cors";
import usersRouter from './routes/users.route'
import authenticationRouter from './routes/authentication.route'
import employesRouter from './routes/employes.route'

const app = express();

// Settings
app.set("port",3002);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/authentication',authenticationRouter);
app.use('/api/users',usersRouter);
app.use('/api/employes',employesRouter);

export default app;
