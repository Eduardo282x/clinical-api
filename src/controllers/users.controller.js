import { getConnection }  from '../database/database'

const tableName = 'users';
const tableNameRol = 'roles';
const getUsers = async (req, res) =>{
    try {
        const connection = getConnection();
        connection.query(`SELECT * FROM ${tableName}`, (err, rows) => {
            if(result){
                res.json({success: true, response: rows});
            } else {
                res.json({success: false, response: err});
            }
        });
    }
    catch (err) {
        res.status(500)
        res.json({messageError: err.message});
        // res.send(err.message)
    }
}
const getRoles = async (req, res) =>{
    try {
        const connection = getConnection();
        connection.query(`SELECT * FROM ${tableNameRol} WHERE Id_Rol != 1`, (err, result) => {
            if(result && result.length > 0){
                res.json({success: true, response: result});
            }else{
                res.json({success: false, message: 'No se encontraron roles.'});
            }
        });
    }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

export const methods = {
    getUsers,
    getRoles
};