import { getConnection }  from '../database/database'

const tableName = 'clients'


const queryGet =`SELECT IdClients,NameFull,Identify FROM ${tableName}`;
const getClients = async (req, res) =>{
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
    getClients
};