const fs = require("fs");

let readfileDemo = () =>{
    let filePath = "Ashwini.txt";
    const data = fs.readFileSync(filePath,{encoding:"utf-8"});
    console.log(data);
};

readfileDemo();