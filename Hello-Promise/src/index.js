const fs = require("fs");

let readFileDemo = () => {
    const filePath = "Ashwini.txt";
    fs.readFile(filePath ,{encoding:"utf-8"},(err,data) =>{
        console.log(data);
    });


};


let readFilewithExpectionDemo = () => {
    try{
    const filePath = "Ashwini.txt";
    fs.readFile(filePath ,{encoding:"utf-8"},(err,data) =>{
        console.log(data);
    });
}catch(err){
console.log("There is some error",err.message);
}
};
//readFileDemo();
readFilewithExpectionDemo();