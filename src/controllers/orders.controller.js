import { getConnection }  from '../database/database'

const tableName = 'orders';
const tableNameFacture = 'facture';
const tableNameClients = 'clients';
const getOrders = async (req, res) =>{
    try {
        const connection = await getConnection();
        const result = await connection.query(`SELECT orders.IdOrders, facture.IdFacture, clients.Identify, clients.NameFull FROM ${tableName} join ${tableNameFacture} on orders.IdFacture = facture.IdFacture join ${tableNameClients} on orders.IdClient = clients.IdClients`);
        if(result.length > 0){
            res.json({success: true, response: result});
        } else {
            res.json({success: false});
        }
    }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

export const methods = {
    getOrders,
};