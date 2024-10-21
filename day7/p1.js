// function fetchdata() {
//     return new Promise((resolve,reject) =>{
//         let data={id:1,name:"a",city:"gzb"};
//         setTimeout(()=>{
//             resolve(data);
//         },3000);
//     });
// }

// fetchdata().then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log( error);
// })


  function fetchdata1() {
    return new Promise((resolve,reject) =>{
        const st= [
            {name:'A', score:54},
            {name:'B', score:24}, 
           {name:'C', score:84},
           {name:'D', score:14},
           {name:'E', score:45},
          ];
        
        setTimeout(()=>{
            resolve(st);
        },3000);
    });
}

fetchdata1()
.then((st)=>{
    let sum = st.map((x)=>x.score).reduce((x,y)=>x+y,0);
    console.log(sum);
})
.catch((error)=>{
    console.log( error);
})