const my = new Promise((resolve,reject)=>{
let success = true; 
 setTimeout(()=>{
    if (success) {  
    resolve("Operation succeeded!"); 
 }
    else{
    reject("Operation failed!");
}
},2000);
});
 
my.then((message)=>{
    console.log("recieved "+ message);
})
.catch((error)=>{
    console.log("failed "+ error);
})


//resolove promise 
function task(message,delay){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(message);
            resolve();
        },delay);
    });
}
task("first task",1000)
.then(()=> task("second task",2000))
.then(()=> task(" third task",3000));