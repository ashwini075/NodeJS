const mysql = require("mysql");


let readAllUser =  () =>{
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
connection.connect();  //promise

let sql = "select * from user";
let result = connection.query(sql,(err,data)=>{
    console.log("db",data);
});


//close connection

connection.end();
console.log(result);
return result;
console.log("connection closed")

  }catch(err) {
    console.log("there is some problem",err.message);
    
  };
};
readAllUser();