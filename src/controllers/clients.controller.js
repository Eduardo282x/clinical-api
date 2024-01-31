import { getConnection }  from '../database/database'

const tableName = 'clients'

const getClients = async (req, res) =>{
    const queryGet =`SELECT IdClients,NameFull,Identify FROM ${tableName}`;
    try {
        const connection = getConnection();
        connection.query(queryGet, (err, result) => {
            if(result){
                res.json(result);
            } else {
                res.json(err);
            }
        });
        }
    catch (err) {
        res.status(500)
        console.log(err.message);
        res.send(err.message)
    }
}

const getAllClient = async (req, res) =>{
    const queryGet =`SELECT * FROM ${tableName}`;
    try {
        const {IdClients} = req.body;
        const connection = getConnection();
        connection.query(`${queryGet} WHERE IdClients = '${IdClients}'`, (err, result) => {
            if(result.length > 0){
                res.json(result[0]);
            }else {
                res.json({message: 'Cliente no encontrado.', success: false, client: result});
            }
        });
        }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}
const getOneClient = async (req, res) =>{
    const queryGet =`SELECT IdClients,NameFull,Identify FROM ${tableName}`;
    try {
        const {clientIdentify} = req.body;
        const connection = getConnection();
        connection.query(`${queryGet} WHERE Identify = 'V${clientIdentify}'`, (err, result) => {
            if(result.length > 0){
                res.json({message: 'Cliente encontrado.', success: true, client: result[0]});
            }else {
                res.json({message: 'Cliente no encontrado.', success: false, client: result});
            }
        });
        }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

const deleteTable = async (req, res) =>{
    const queryAdd =`DROP TABLE ${tableName}`;
    try {
        const connection = getConnection();
        connection.query(`${queryAdd}`, (err, result) => {
            if(result){
                res.json({message: 'Tabla Eliminada.', success: true});
            } else {
                res.json({message: 'Ha ocurrido un error inesperado.' + err , success: false});
            }
        });
        
        }
    catch (err) {
        res.status(500);
        res.send(err.message);
        res.json({message: 'Ah ocurrido un error inesperado.', success: false});
    }
}

const addClients = async (req, res) =>{
    const queryAdd =`INSERT INTO ${tableName} (NameFull, Identify, Birhdate, Age, PhonePrimary, PhoneSecundary, Email, Address, Sex)`;
    try {
        const connection = getConnection();
        const {NameFull,Identify,Birhdate,Age,PhonePrimary,PhoneSecundary,Email,Address,Sex} = req.body;
        connection.query(`${queryAdd} VALUES ('${NameFull}','${Identify}','${Birhdate}','${Age}','${PhonePrimary}','${PhoneSecundary}','${Email}','${Address}','${Sex}')`, (err, result) => {
            if(result){
                res.json({message: 'Cliente agregado exitosamente.', success: true});
            } else {
                res.json({message: 'Ha ocurrido un error inesperado.' + err , success: false});
            }
        });
        
        }
    catch (err) {
        res.status(500);
        res.send(err.message);
        res.json({message: 'Ah ocurrido un error inesperado.', success: false});
    }
}

const deleteClient = async (req, res) =>{
    const queryDelete =`DELETE FROM ${tableName}`;
    try {
        const { Id } = req.body;
        const connection = getConnection();
        connection.query(`${queryDelete} where IdClients = '${Id}'`, (err, result) => {
            res.json(result);
        });
        }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

export const methods = {
    getClients,
    addClients,
    deleteTable,
    getAllClient,
    getOneClient,
    deleteClient
};