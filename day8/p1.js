// async function orderfood(name,time) {
//     return new Promise((reolve,reject)=>{
//         setTimeout(() => {
//            reolve("order"+name+"prepared");
//         }, time);

//     }); 
// }

// async function restaurant() {
//     console.log("order placed");
//     const pizza = await orderfood("pizza",1000);
//     console.log(pizza);
//     console.log("order placed");
//     const burger = await orderfood("burger",1000);
//     console.log(burger);
//     console.log("order placed");
//     const noodles = await orderfood("pizza",1000);
//     console.log(noodles);
//     console.log("All order served");
    

// }
// restaurant();




async function orderfood(name,time) {
    return new Promise((reolve,reject)=>{
        setTimeout(() => {
           reolve("order"+name+"prepared");
        }, time);

    }); 
}

async function restaurant() {
    console.log("order placed");
try{
    const burger = await orderfood("burger",1000);
    console.log(burger);
} catch(error){
    console.log(err);
}
    const pizza = await orderfood("pizza",1000);
    console.log(pizza);
    console.log("order placed");
    const noodles = await orderfood("pizza",1000);
    console.log(noodles);
    console.log("All order served");
    

}
restaurant();
