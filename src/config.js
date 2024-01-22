import { configDotenv } from "dotenv";

configDotenv();

export default {
    host: process.env.HOST || 'localhost',
    database: process.env.DATABASE || 'clinical-system',
    user: process.env.USER || 'root',
    password: process.env.PASSWORD || '123456',
};