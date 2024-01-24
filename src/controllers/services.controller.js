import { getConnection }  from '../database/database'

const tableName = 'services'
const getServices = async (req, res) =>{
    const queryGet =`SELECT * FROM ${tableName}`;
    try {
        const connection = await getConnection();
        const result = await connection.query(queryGet);
        res.json(result);
        }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

const getServicesAvalible = async (req, res) =>{
    const queryGetAvalible =`SELECT IdService, CodService, Description, Cost FROM ${tableName} WHERE Avalible = 1`;
    try {
        const connection = await getConnection();
        const result = await connection.query(queryGetAvalible);
        res.json(result);
        }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

export const methods = {
    getServices,
    getServicesAvalible
};