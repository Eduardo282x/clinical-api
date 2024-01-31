import { getConnection }  from '../database/database'

const tableName = 'facture'
const tableNamePay = 'pays'
const tableTempFacture = 'tempfacture'
const tableBank = 'banks'
const tablePayment = 'payments'
const getFacture = async (req, res) =>{
    const queryGet =`SELECT * FROM ${tableName}`;
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

const getFactures = async (req, res) =>{
    const queryFactures =`SELECT facture.IdFacture, clients.IdClients, clients.NameFull, clients.Identify, facture.DateFacture FROM ${tableName} join clients on facture.IdClient = clients.IdClients`;
    try {
        const connection = await getConnection();
        const result = await connection.query(`${queryFactures}`);
        res.json(result);
        }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}
const getTempFacture = async (req, res) =>{
    const queryTempFacture =`SELECT tempfacture.IdServices, tempfacture.IdFacture, services.CodService, services.Description, tempfacture.Amount, services.Cost, tempfacture.Amount * services.Cost as Total  FROM ${tableTempFacture} join services on tempfacture.IdServices = services.IdService`;
    const queryFacture =`SELECT IdFacture FROM ${tableName}`;
    const addFacture =`INSERT INTO ${tableName} (IdUser, IdClient, SubTotal, BankClient, Total)`;
    const getLastFacture =`SELECT IdFacture FROM ${tableName} order by IdFacture DESC LIMIT 1;`;
    try {
        const connection = await getConnection();
        const {IdUser, IdClient, IdFacture} = req.query;
        let getIdFacture;

        const getFacture = await connection.query(`${queryFacture} WHERE IdUser = ${IdUser} AND IdClient = '${IdClient}' AND IdFacture='${IdFacture}'`);
            
        if(getFacture && getFacture.length > 0){
            getIdFacture= getFacture[0].IdFacture;
        }else {
            try{
                const createFacture = await connection.query(`${addFacture} VALUES ('${IdUser}', '${IdClient}', '0', '0', '0')`);
            } catch(err){
                console.log(err);
            }
        }
        const result = await connection.query(`${queryTempFacture} WHERE IdUser = ${IdUser} AND IdClient = '${IdClient}'`);
        const facture = getIdFacture ? getIdFacture : getLastFacture[0].IdFacture
        res.json({tempFactures: result, IdFacture: facture});
        }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}
const addFacture = async (req, res) =>{
    const queryAddFacture =`INSERT INTO ${tableName} (IdUser, IdClient, SubTotal, BankClient, Total) VALUES`;
    const queryFindFacture =`SELECT * FROM ${tableName}`;
    const queryAddPay =`INSERT INTO ${tableNamePay} (IdFacture, Phone, Identity, IdBank, IdPayment, Ref, Total, IdClient) VALUES`;
    try {
        const connection = await getConnection();
        const {IdUser,IdClient,SubTotal, BankClient,Total, Phone, Identity, IdPayment,Ref} = req.body;
        const result = await connection.query(`${queryAddFacture} ('${IdUser}','${IdClient}','${SubTotal}','${BankClient}','${Total}')`);
        if(result){
            const findFacture = await connection.query(`${queryFindFacture} WHERE IdUser='${IdUser}' AND IdClient='${IdClient}'`)
            try{
                const addPay = await connection.query(`${queryAddPay} ('${findFacture[0].IdFacture}','${Phone}','${Identity}','${BankClient}','${IdPayment}','${Ref}','${Total}','${IdClient}' )`);
                res.json({message:'Factura creada.', success: true});
            }
            catch(err){
                res.json({message: err, success: false});
            }
        } else {
            res.json({message:'Ha ocurrido un error.', success: false});
        }
        }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}
const getPay = async (req, res) =>{
    const queryAddFacture =`INSERT INTO ${tableName} (IdUser, IdClient, SubTotal, BankClient, Total) VALUES`;
    const queryFindFacture =`SELECT * FROM ${tableName}`;
    const queryAddPay =`INSERT INTO ${tableNamePay} (IdFacture, Phone, Identity, IdBank, IdPayment, Ref, Total, IdClient) VALUES`;
    try {
        const connection = await getConnection();
        const {IdUser,IdClient,SubTotal, BankClient,Total, Phone, Identity, IdPayment,Ref} = req.body;
        const result = await connection.query(`${queryAddFacture} ('${IdUser}','${IdClient}','${SubTotal}','${BankClient}','${Total}')`);
        if(result){
            const findFacture = await connection.query(`${queryFindFacture} WHERE IdUser='${IdUser}' AND IdClient='${IdClient}'`)
            try{
                const addPay = await connection.query(`${queryAddPay} ('${findFacture[0].IdFacture}','${Phone}','${Identity}','${BankClient}','${IdPayment}','${Ref}','${Total}','${IdClient}' )`);
                res.json({message:'Factura creada.', success: true});
            }
            catch(err){
                res.json({message: err, success: false});
            }
        } else {
            res.json({message:'Ha ocurrido un error.', success: false});
        }
        }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}
const deleteFacture = async (req, res) =>{
    const queryDeleteFacture =`DELETE FROM ${tableName} `;
    try {
        const connection = await getConnection();
        const {IdFacture } = req.body;
        console.log(IdFacture);
        try{
            const result = await connection.query(`${queryDeleteFacture} WHERE IdFacture = '${IdFacture}'`);
            if(result){
                res.json({message:'Factura Anulada.', success: true});
            } else {
                res.json({message:'Ha ocurrido un error.', success: false});
            }
        }catch(err){
            console.log(err);
        }
    }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
};
const addTempFacture = async (req, res) =>{
    const queryAddTempFacture =`INSERT INTO ${tableTempFacture} (IdUser, IdServices,IdClient, Amount) VALUES`;
    const queryVerifyTemp =`SELECT * FROM ${tableTempFacture} `;
    try {
        const connection = await getConnection();
        const {IdUser, IdServices,IdClient, Amount} = req.body;
        const verify = await connection.query(`${queryVerifyTemp} WHERE IdUser = '${IdUser}' and IdServices = '${IdServices}' and IdClient = '${IdClient}'`);
        if(verify && verify.length > 0){
            return res.json({message:'El servicio ya fue agregado', success: false});
        }
        const result = await connection.query(`${queryAddTempFacture} ('${IdUser}','${IdServices}','${IdClient}','${Amount}')`);
        if(result){
            res.json({message:'Servicio agregado.', success: true});
        } else {
            res.json({message:'Ha ocurrido un error.', success: false});
        }
        }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}
const editTempFacture = async (req, res) =>{
    const queryEditTempFacture =`UPDATE ${tableTempFacture} SET `;
    try {
        const connection = await getConnection();
        const {IdUser, IdServices,IdClient, Amount} = req.body;
        const result = await connection.query(`${queryEditTempFacture} Amount='${Amount}' WHERE IdServices='${IdServices}' and IdUser='${IdUser}' and IdClient = '${IdClient}'`);
        if(result){
            res.json({message:'Servicio modificado.', success: true});
        }else {
            res.json({message:'Error', success: false});
        }
        }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}
const deleteTempFacture = async (req, res) =>{
    const queryDeleteTemp =`DELETE FROM ${tableTempFacture} `;
    try {
        const connection = await getConnection();
        const {IdUser, IdServices, IdClient, Amount} = req.body;
        const verify = await connection.query(`${queryDeleteTemp} WHERE IdUser = '${IdUser}' and IdServices = '${IdServices}' and IdClient = '${IdClient}'`);
        res.json({message:'Servicio eliminado.', success: true});
        }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
};
const getBanks = async (req, res) =>{
    const queryBank =`SELECT * FROM ${tableBank} ORDER BY BankName ASC`;
    try {
        const connection = await getConnection();
        const result = await connection.query(`${queryBank}`);
        res.json(result);
        }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}
const getPayMents = async (req, res) =>{
    const queryTempFacture =`SELECT * FROM ${tablePayment}`;
    try {
        const connection = await getConnection();
        const result = await connection.query(`${queryTempFacture}`);
        res.json(result);
        }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

export const methods = {
    getFactures,
    addTempFacture,
    deleteFacture,
    addFacture,
    getTempFacture,
    getBanks,
    getPayMents,
    editTempFacture,
    deleteTempFacture
};