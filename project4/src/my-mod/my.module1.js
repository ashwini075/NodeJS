console.log("hello i am function");
let sum = function(n1,n2)  {
return n1 + n2;
}
let diff = function(n1,n2)  {
    return n1 - n2;
    }

let mul = function(n1,n2)  {
    return n1 * n2;
        }
let div = function(n1,n2)  {
    return n1 / n2;
        }        
module.exports = {
     sum,
     diff,
     mul,
     div,

};