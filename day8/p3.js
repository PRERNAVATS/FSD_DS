async function fetchdata(){
try{
    let response = await fetch("https://api.github.com/users?per+page=10");
    let data = await response.json();
    data.forEach(element) =>{
        console.log)"login $(element.login)
    }
    console.log(data);
} catch(error){}
}
fetchdata();