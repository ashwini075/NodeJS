const Promise = require("bluebird");

const mysql = require("mysql");

// Note that the library's classes are not properties of the main export
// so we require and promisifyAll them manually

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let readAllUser = async () =>{
  try{
    console.log("I am trying to connect Database!!");
    const connection = mysql.createConnection({
        host: "localhost",             // ip address of server running mysql
        user: "root",                 // user name to your mysql database
        password: "123456" ,           // corresponding password
        database: 'dac20',
    });
    console.log("connection successful");
    //connection open
await connection.connectAsync();  //promise

let sql = "select * from user";
let result = await connection.queryAsync(sql);
console.log(result);
return result;

//close connection
await connection.endAsync();
console.log("connection closed")

  }catch(err) {
    console.log("there is some problem",err.message);
    
  };
};
readAllUser();