const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_config = {
   
        host: "localhost",             // ip address of server running mysql
        user: "root",                 // user name to your mysql database
        password: "123456" ,           // corresponding password
        database: 'dac20',
   
};

let addRecord = async () =>{
    const Connection = mysql.createConnection(DB_config);
    await Connection.connectAsync();
    
    await Connection.endAsync();
}