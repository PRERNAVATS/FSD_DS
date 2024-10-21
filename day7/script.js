const st= [
    {name:'A', score:54},
    {name:'B', score:24}, 
    {name:'C', score:84},
    {name:'D', score:14},
    {name:'E', score:45},
];
let a = st.filter((st)=>st.score>60);
console.log(a);