import { getConnection }  from '../database/database'

const tableName = 'services'
const queryGet =`SELECT * FROM ${tableName}`;
const getServices = async (req, res) =>{
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

export const methods = {
    getServices
};