const mariabDB = require('mariadb');
// const config = require('config');



const pool = mariabDB.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    //database: config.get('v1.DB_NAME'),
    password: 'root',
    port: 3306,
    timeout: 36000,
    bigIntAsNumber: true,
    multipleStatements: true,
    insertIdAsNumber: true,

});

module.exports={
    pool
}





