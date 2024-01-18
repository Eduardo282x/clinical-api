import express from "express";
import morgan from "morgan";
import cors from "cors";
import usersRouter from './routes/users.route'
import authenticationRouter from './routes/authentication.route'
import employesRouter from './routes/employes.route'
import clientsRouter from './routes/clients.route'
import servicesRouter from './routes/services.route'
import factureRouter from './routes/facture.route'

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
app.use('/api/clients',clientsRouter);
app.use('/api/services',servicesRouter);
app.use('/api/facture',factureRouter);

export default app;
