import { getConnection }  from '../database/database'

const tableName = 'users'
const queryAssisten = `SELECT users.NameFull,users.Identify, roles.RolDes as Rol FROM ${tableName} join roles on users.Rol = roles.Id_Rol`
const getSecurityKeyEmployes = async (req, res) =>{
    try {
        const { SecurityKey } = req.body;
        const connection = await getConnection();
        const result = await connection.query(`${queryAssisten} WHERE SecurityKey = '${SecurityKey}'`);
        res.json(result[0]);
        }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

const queryGet =`SELECT Id,NameFull FROM ${tableName}`;
const getEmployes = async (req, res) =>{
    try {
        const { SecurityKey } = req.body;
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
    getSecurityKeyEmployes,
    getEmployes
};