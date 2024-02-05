import { getConnection }  from '../database/database'

const tableName = 'users';
const tableNameAssistent = 'assistent';
const getSecurityKeyEmployes = async (req, res) =>{
    const queryAssisten = `SELECT users.Id, users.NameFull,users.Identify, roles.RolDes as Rol FROM ${tableName} join roles on users.Rol = roles.Id_Rol`
    try {
        const { SecurityKey } = req.body;
        const date = new Date();
        const connection = await getConnection();
        const result = await connection.query(`${queryAssisten} WHERE SecurityKey = '${SecurityKey}'`);
        if(result){
            if(result.length > 0){
                res.json(result[0]);
                try{
                    connection.query(`INSERT INTO ${tableNameAssistent} (IdUser) VALUES ('${result[0].Id}')`, (err, result) => {
                        console.log(result);
                    });
                }
                catch(err) {
                    console.log(err);
                }
            } else {    
                res.json({message: 'No se encontro empleado', success: false});
            }
        }else {
            res.json({message: 'Ha ocurrido un error: ', success: false});
        }
        }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

const getEmployes = async (req, res) =>{
    const queryGet =`SELECT Id,NameFull FROM ${tableName} Where Rol != 1`;
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
const getAllEmploye = async (req, res) =>{
    const queryGet =`SELECT * FROM ${tableName}`;
    try {
        const { Id } = req.body;
        const connection = await getConnection();
        const result = await connection.query(`${queryGet} WHERE ID = ${Id}`);
        res.json(result[0]);
        }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

const getSecurityKeys = async (req, res) =>{
    const queryKeys =`SELECT SecurityKey FROM ${tableName}`;
    try {
        const connection = await getConnection();
        const result = await connection.query(queryKeys);
        res.json(result);
        }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

const addEmployes = async (req, res) =>{
    const queryAdd =`INSERT INTO ${tableName} (NameFull, Identify, Age, Sex, Birthdate, PhonePrimary, PhoneSecundary, Email, Address, MedicalData, SecurityKey, Username, Password, Rol)`;
    try {
        const connection = await getConnection();
        const {NameFull,Identify,Age,Sex,Birthdate,PhonePrimary,PhoneSecundary,Email,Address,MedicalData,SecurityKey,Username,Password,Rol} = req.body;
        const result = await connection.query(`${queryAdd} VALUES ('${NameFull}','${Identify}','${Age}','${Sex}','${Birthdate}','${PhonePrimary}','${PhoneSecundary}','${Email}','${Address}','${MedicalData}','${SecurityKey}','${Username}','${Password}','${Rol}')`);
            if(result){
                res.json({message: 'Cliente agregado exitosamente.', success: true});
            } else {
                res.json({message: 'Ha ocurrido un error inesperado.', success: false});
            }
        }
    catch (err) {
        res.status(500);
        res.send(err.message);
        res.json({message: 'Ah ocurrido un error inesperado.', success: false});
    }
}
const editEmployes = async (req, res) =>{
    try {
        const connection = await getConnection();
        const {Id, NameFull,Identify,Age,Sex,Birthdate,PhonePrimary,PhoneSecundary,Email,Address,MedicalData,SecurityKey,Username,Password,Rol} = req.body;
        const result = await connection.query(`UPDATE ${tableName} SET NameFull='${NameFull}',Identify='${Identify}',Age='${Age}',Sex='${Sex}',Birthdate='${Birthdate}',PhonePrimary='${PhonePrimary}',PhoneSecundary='${PhoneSecundary}',Email='${Email}',Address='${Address}',MedicalData='${MedicalData}',SecurityKey='${SecurityKey}',Username='${Username}',Password='${Password}',Rol='${Rol}' WHERE Id = '${Id}'`);
            if(result){
                res.json({message: 'Cliente Editado exitosamente.', success: true});
            } else {
                res.json({message: 'Ha ocurrido un error inesperado.', success: false});
            }
        }
    catch (err) {
        res.status(500);
        res.send(err.message);
        res.json({message: 'Ah ocurrido un error inesperado.', success: false});
    }
}
const deleteEmployes = async (req, res) =>{
    const queryDelete =`DELETE FROM ${tableName}`;
    try {
        const { Id } = req.body;
        const connection = await getConnection();
        const result = await connection.query(`${queryDelete} where Id = '${Id}'`);
        res.json(result);
        }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

export const methods = {
    getSecurityKeyEmployes,
    addEmployes,
    getSecurityKeys,
    editEmployes,
    getAllEmploye,
    getEmployes,
    deleteEmployes
};