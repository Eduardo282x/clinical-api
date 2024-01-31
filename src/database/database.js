import mysql from "mysql2";
import config from "../config";

const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    port: 10772,
    password: config.password,
    insecureAuth: true
});

const getConnection = () => {
    return connection;
};

module.exports = {
    getConnection
};
