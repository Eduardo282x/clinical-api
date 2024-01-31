import { getConnection }  from '../database/database'

const queryAuthentication = 'SELECT users.Id, users.NameFull, users.Username, roles.RolDes as Rol, roles.Id_Rol FROM users join roles on users.Rol = roles.Id_Rol';
const authenticateUser = async (req, res) =>{
    try {
        const { Username, Password } = req.body;
        const User = { Username, Password}
        const connection = await getConnection();
        const result = await connection.query(`${queryAuthentication} WHERE Username='${Username}' and Password='${Password}'`);
        if(result.length > 0){
            try{
                res.json({message:'Bienvenido', success: true, userData: result[0]});
            }
            catch(ex){
                console.log(ex);
            }
        } else {
            res.json({message:'Usuario no encontrado', success: false});
        }
    }
    catch (err) {
        console.log(err);
        res.status(500)
        res.send(err.message)
    }
}

export const methods = {
    authenticateUser,
};