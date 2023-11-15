const {pool} = require('../../../../config/db');
//This method executes query received in parameters along with values came from client.
exports.executeQuery = async (query, args) => {
    let conn;
    try {
         conn = await pool.getConnection();
        //console.log(args);
        const result = await conn.query(query, args).then((rows, fields) => {
             console.log('rows',rows);
            return rows;
        })
        return result;
    }catch(error){
        // await conn.rollback();
        if (error.errno == "1062") {
            return "duplicate entry"
        }
        return error;
    }
     finally {
        if (conn) conn.release(); //release to pool
        
    }

}
