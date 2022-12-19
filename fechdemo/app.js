async function fetch2(){

    let resp = await fetch("https://jsonplaceholder.typicode.com/users/4");
    let data= await resp.json();
    console.log(data);
}
fetch2()