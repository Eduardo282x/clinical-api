import { getConnection }  from '../database/database'

const tableName = 'facture'
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

const getTempFacture = async (req, res) =>{
    const queryTempFacture =`SELECT tempfacture.IdServices, services.CodService, services.Description, tempfacture.Amount, services.Cost, tempfacture.Amount * services.Cost as Total  FROM ${tableTempFacture} join services on tempfacture.IdServices = services.IdService`;
    try {
        const connection = await getConnection();
        const {IdUser} = req.query;
        const result = await connection.query(`${queryTempFacture} WHERE IdUser = ${IdUser}`);
        res.json(result);
        }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}
const addTempFacture = async (req, res) =>{
    const queryAddTempFacture =`INSERT INTO ${tableTempFacture} (IdUser, IdServices, Amount) VALUES`;
    const queryVerifyTemp =`SELECT * FROM ${tableTempFacture} `;
    try {
        const connection = await getConnection();
        const {IdUser, IdServices, Amount} = req.body;
        const verify = await connection.query(`${queryVerifyTemp} WHERE IdUser = '${IdUser}' and IdServices = '${IdServices}'`);
        if(verify && verify.length > 0){
            return res.json({message:'El servicio ya fue agregado', success: false});
        }
        const result = await connection.query(`${queryAddTempFacture} ('${IdUser}','${IdServices}','${Amount}')`);
        res.json({message:'Servicio agregado.', success: true});
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
        const {IdUser, IdServices, Amount} = req.body;
        const result = await connection.query(`${queryEditTempFacture} Amount='${Amount}' WHERE IdServices='${IdServices}' and IdUser='${IdUser}'`);
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
        const {IdUser, IdServices, Amount} = req.body;
        const verify = await connection.query(`${queryDeleteTemp} WHERE IdUser = '${IdUser}' and IdServices = '${IdServices}'`);
        res.json({message:'Servicio eliminado.', success: true});
        }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}
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
    addTempFacture,
    getTempFacture,
    getBanks,
    getPayMents,
    editTempFacture,
    deleteTempFacture
};