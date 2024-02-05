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

export const methods = {
    getExams,
};