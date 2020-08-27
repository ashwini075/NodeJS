
//Asynchronus function
//async=>keyword makes function asynchronus and it always returns Promise
let helloworld = async  () =>{
     console.log("I am async function");
     return 1;
    };

//rule of promise
helloworld()
  .then((data) =>{
    console.log(data);
    }).catch((err) =>{
    console.log(err);
    });

    