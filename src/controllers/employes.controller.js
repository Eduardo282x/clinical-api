import { getConnection }  from '../database/database'

const queryAssisten = 'SELECT users.NameFull,users.Identify, roles.RolDes as Rol FROM `users` join roles on users.Rol = roles.Id_Rol'
const getEmployes = async (req, res) =>{
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

export const methods = {
    getEmployes,
};