import express from "express";
import morgan from "morgan";
import cors from "cors";
import usersRouter from './routes/users.route'
import authenticationRouter from './routes/authentication.route'
import employesRouter from './routes/employes.route'
import clientsRouter from './routes/clients.route'
import ordersRouter from './routes/orders.route'
import examsRouter from './routes/exams.route'
import servicesRouter from './routes/services.route'
import factureRouter from './routes/facture.route'
import assistentRouter from './routes/assistent.route'
import presupuestoRouter from './routes/presupuesto.route'
import facturepdfRouter from './routes/facturepdf.route'

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
app.use('/api/orders',ordersRouter);
app.use('/api/examns',examsRouter);
app.use('/api/assistent',assistentRouter);
app.use('/api/presupuesto',presupuestoRouter);
app.use('/api/services',servicesRouter);
app.use('/api/facture',factureRouter);
app.use('/api/facturepdf',facturepdfRouter);

export default app;
