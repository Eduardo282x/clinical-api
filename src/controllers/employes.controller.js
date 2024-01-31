import { getConnection }  from '../database/database'

const tableName = 'users';
const tableNameAssistent = 'assistent';
const getSecurityKeyEmployes = async (req, res) =>{
    const queryAssisten = `SELECT users.Id, users.NameFull,users.Identify, roles.RolDes as Rol FROM ${tableName} join roles on users.Rol = roles.Id_Rol`
    try {
        const { SecurityKey } = req.body;
        const connection = getConnection();
        connection.query(`${queryAssisten} WHERE SecurityKey = '${SecurityKey}'`, (err, result) => {
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
                res.json({message: 'Ha ocurrido un error: ' + err, success: false});
            }
        });
        }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

const getEmployes = async (req, res) =>{
    const queryGet =`SELECT Id,NameFull FROM ${tableName}`;
    try {
        const connection = getConnection();
        connection.query(queryGet, (err, result) => {
            if(result){
                res.json(result);
            } else {
                res.json({message: 'Ha ocurrido un error: ' + err, success: false});
            }
        });
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
        const connection = getConnection();
        connection.query(`${queryGet} WHERE ID = ${Id}`, (err, result) => {
            if(result){
                res.json(result[0]);
            } else {
                res.json({message: 'Ha ocurrido un error: ' + err, success: false});
            }
        });
        }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}
const getAssistent = async (req, res) =>{
    const queryGet =`SELECT assistent.Id, users.NameFull, assistent.DateStart, assistent.DateEnd FROM ${tableNameAssistent} join ${tableName} on assistent.IdUser = users.Id`;
    try {
        const { DateStart, DateEnd } = req.body;
        const parseEnd = new Date(DateEnd);
        parseEnd.setDate(parseEnd.getDate() + 1);
        const connection = getConnection();
        connection.query(`${queryGet} WHERE DateStart BETWEEN '${DateStart}' and '${parseEnd.toISOString()}'`, (err, result) => {
            if(result){
                res.json(result);
            } else {
                res.json({message: 'Ha ocurrido un error: ' + err, success: false});
            }
        });
        }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}
const getSecurityKeys = async (req, res) =>{
    const queryKeys =`SELECT SecurityKey FROM ${tableName}`;
    try {
        const connection = getConnection();
        connection.query(queryKeys, (err, result) => {
            if(result){
                res.json(result);
            } else {
                res.json({message: 'Ha ocurrido un error: ' + err, success: false});
            }
        });
        }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

const addEmployes = async (req, res) =>{
    const queryAdd =`INSERT INTO ${tableName} (NameFull, Identify, Age, Sex, Birthdate, PhonePrimary, PhoneSecundary, Email, Address, MedicalData, SecurityKey, Username, Password, Rol)`;
    try {
        const {NameFull,Identify,Age,Sex,Birthdate,PhonePrimary,PhoneSecundary,Email,Address,MedicalData,SecurityKey,Username,Password,Rol} = req.body;
        const connection = getConnection();
        connection.query(`${queryAdd} VALUES ('${NameFull}','${Identify}','${Age}','${Sex}','${Birthdate}','${PhonePrimary}','${PhoneSecundary}','${Email}','${Address}','${MedicalData}','${SecurityKey}','${Username}','${Password}','${Rol}')`, (err, result) => {
            if(result){
                res.json({message: 'Cliente agregado exitosamente.', success: true});
            } else {
                res.json({message: 'Ha ocurrido un error inesperado: ' + err, success: false});
            }
        });
        }
    catch (err) {
        res.status(500);
        res.send(err.message);
        res.json({message: 'Ah ocurrido un error inesperado.', success: false});
    }
}
const editEmployes = async (req, res) =>{
    try {
        const {Id, NameFull,Identify,Age,Sex,Birthdate,PhonePrimary,PhoneSecundary,Email,Address,MedicalData,SecurityKey,Username,Password,Rol} = req.body;
        const connection = getConnection();
        connection.query(`UPDATE ${tableName} SET NameFull='${NameFull}',Identify='${Identify}',Age='${Age}',Sex='${Sex}',Birthdate='${Birthdate}',PhonePrimary='${PhonePrimary}',PhoneSecundary='${PhoneSecundary}',Email='${Email}',Address='${Address}',MedicalData='${MedicalData}',SecurityKey='${SecurityKey}',Username='${Username}',Password='${Password}',Rol='${Rol}' WHERE Id = '${Id}'`, (err, result) => {
            if(result){
                res.json({message: 'Cliente Editado exitosamente.', success: true});
            } else {
                res.json({message: 'Ha ocurrido un error inesperado: ' + err, success: false});
            }
        });
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
        const connection = getConnection();
        connection.query(`${queryDelete} where Id = '${Id}'`, (err, result) => {
            if(result){
                res.json({message: 'Empleado Eliminado.', success: true});
            } else {
                res.json({message: 'Ha ocurrido un error inesperado: ' + err, success: false});
            }
        });
        }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

export const methods = {
    getSecurityKeyEmployes,
    addEmployes,
    getAssistent,
    getSecurityKeys,
    editEmployes,
    getAllEmploye,
    getEmployes,
    deleteEmployes
};