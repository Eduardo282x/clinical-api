import { getConnection }  from '../database/database'

const tableName = 'examsgeneral';

const getExams = async (req, res) =>{
    try {
        const connection = await getConnection();
        const result = await connection.query(`SELECT * FROM ${tableName}`);
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

const updateExamns = async (req, res) =>{
    try {
        const {Id,Description,Result,Unit, Reference} = req.body;
        const connection = await getConnection();
        const result = await connection.query(`UPDATE ${tableName} SET Description='${Description}',Result='${Result}',Unit='${Unit}',Reference='${Reference}' WHERE Id='${Id}'`);
        if(result){
            res.json({success: true, message: "Orden actualizada"});
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
    getExams,
    updateExamns,
};