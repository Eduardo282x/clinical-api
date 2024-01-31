import { configDotenv } from "dotenv";

configDotenv();

export default {
    host: process.env.HOST || 'viaduct.proxy.rlwy.net',
    database: process.env.DATABASE || 'railway',
    user: process.env.USER || 'root',
    password: process.env.PASSWORD || 'adeFHFa45H6GF4eHAEgCaBb-c6-AChgb',
};