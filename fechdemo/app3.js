
let data={
    id:101,

    name:"Akshata",

    phone:9067653967,

    username:"Akpatil"

}

let post2={

    id:102,

    name:"jay",

    phone:9067653967,

    username:"jaykumar"

}

fetch('https://jsonplaceholder.typicode.com/posts',{

    method:"POST",

    body: JSON.stringify(data),

    headers: {"Content-type":"application/json"}

}).then(response =>response.json())

    .then(json=>console.log(json))

    .catch(err=>console.log(err))

async function post(){

    let response= await fetch('https://jsonplaceholder.typicode.com/posts',{

        method:"POST",

        body: JSON.stringify(post2),

        headers: {"Content-type":"application/json"}

    })

    let data = await response.json()

    console.log(data)

}

post()