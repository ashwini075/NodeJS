const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let readAllUser = async ()=>{
    try{
        console.log("I am about to read the DB");
        const connection = mysql.createConnection({
            host: "localhost",             // ip address of server running mysql
            user: "root",                 // user name to your mysql database
            password: "123456" ,           // corresponding password
            database: 'dac20',
          });
     await connection.connectAsync();

     console.log("CONNECTION.SUCCESSFUL!!");

     await connection.endAsync();
    }catch(err){
        console.log(err);
    }
}
readAllUser();
