import { getConnection }  from '../database/database'

const authenticateUser = async (req, res) =>{
    try {
        const { Username, Password } = req.body;
        const User = { Username, Password}
        const connection = await getConnection();
        const result = await connection.query(`SELECT users.Id, users.Name, users.Lastname, users.Username, roles.RolDes as Rol FROM users join roles on users.Rol = roles.Id_Rol WHERE Username='${Username}' and Password='${Password}'`);
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