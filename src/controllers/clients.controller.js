import { getConnection }  from '../database/database'

const tableName = 'clients'

const getClients = async (req, res) =>{
    const queryGet =`SELECT IdClients,NameFull,Identify FROM ${tableName}`;
    try {
        const connection = await getConnection();
        const result = await connection.query(queryGet);
        res.json(result);
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
        const connection = await getConnection();
        const result = await connection.query(`${queryGet} WHERE IdClients = '${IdClients}'`);
        if(result.length > 0){
            res.json(result[0]);
        }else {
            res.json({message: 'Cliente no encontrado.', success: false, client: result});
        }
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
        const connection = await getConnection();
        const result = await connection.query(`${queryGet} WHERE Identify = '${clientIdentify}'`);
        if(result.length > 0){
            res.json({message: 'Cliente encontrado.', success: true, client: result[0]});
        }else {
            res.json({message: 'Cliente no encontrado.', success: false, client: result});
        }
        }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

const addClients = async (req, res) =>{
    const queryAdd =`INSERT INTO ${tableName} (NameFull, Identify, Birhdate, Age, PhonePrimary, PhoneSecundary, Email, Address, Sex)`;
    try {
        const connection = await getConnection();
        const {NameFull,Identify,Birhdate,Age,PhonePrimary,PhoneSecundary,Email,Address,Sex} = req.body;
        const result = await connection.query(`${queryAdd} VALUES ('${NameFull}','${Identify}','${Birhdate}','${Age}','${PhonePrimary}','${PhoneSecundary}','${Email}','${Address}','${Sex}')`);
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

const updateClients = async (req, res) =>{
    try {
        const connection = await getConnection();
        const {NameFull,Identify,Birhdate,Age,PhonePrimary,PhoneSecundary,Email,Address,Sex, IdClients} = req.body;
        const result = await connection.query(`UPDATE ${tableName} SET NameFull='${NameFull}',Identify='${Identify}',Birhdate='${Birhdate}',Age='${Age}',PhonePrimary='${PhonePrimary}',PhoneSecundary='${PhoneSecundary}',Email='${Email}',Address='${Address}',Sex='${Sex}' WHERE IdClients='${IdClients}'`);
        if(result){
            res.json({message: 'Cliente editado exitosamente.', success: true});
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

const deleteClient = async (req, res) =>{
    const queryDelete =`DELETE FROM ${tableName}`;
    try {
        const { Id } = req.body;
        const connection = await getConnection();
        const result = await connection.query(`${queryDelete} where IdClients = '${Id}'`);
        res.json(result);
        }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

export const methods = {
    getClients,
    addClients,
    updateClients,
    getAllClient,
    getOneClient,
    deleteClient
};