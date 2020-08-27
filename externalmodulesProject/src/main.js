let helloworld = async () =>{
    for (let i=0;i<10;i++){
        console.log("I am async function");
    };
    console.log("I am done!!");
};
let hellouniverse = async () =>{
    for (let i=0;i<10;i++){
        console.log("I am async uni function");
    };
    console.log("I am done 123!!");
};
helloworld();
hellouniverse();