// // const st= [
//     {name:'A', score:54},
//     {name:'B', score:24}, 
//     {name:'C', score:84},
//     {name:'D', score:14},
//     {name:'E', score:45},
// ];
// let a = st.filter((st)=>st.score>60) 
// .map((st)=>st.score*2)
// .reduce((x,y)=>x+y,0)
// ; 
// console.log(a);


sayHello = () =>{
    console.log("I am hello function")
};
console.log("Task started")
setTimeout(sayHello,3000)
console.log("Task end")


// another callback hell function
console.log("Start");
setTimeout(()=>{
    console.log("first");
    setTimeout(()=>{
        console.log("second");
        setTimeout(()=>{
            console.log("third");

        },3000)
    },2000)

},1000);