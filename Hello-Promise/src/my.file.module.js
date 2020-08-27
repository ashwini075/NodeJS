const fs = require("fs") ;                                //fs = file system  (internal module)
let readfile = () =>{
    console.log("read file done here");
    fs.readFile();
}
let writefile = () =>{
    console.log("write file done here");
}

module.exports = {
    readfile,
    writefile,
}