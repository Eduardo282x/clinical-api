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
        res.json({message: 'Cliente agregado exitosamente.', success: true});
        }
    catch (err) {
        res.status(500);
        res.send(err.message);
        res.json({message: 'Ah ocurrido un error inesperado.', success: false});
    }
}

export const methods = {
    getClients,
    addClients,
    getOneClient,
};