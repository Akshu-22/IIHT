let div =document.createElement('div');
div.id='divid';
div.className='div1';
div.innerHTML='<h2>This is h2</h2>';
document.body.appendChild(div);

const h1 =  document.createElement('h1');
h1.innerText='This is H1';
h1.after(div);


let list1  = document.createElement("ul");

let arr = ["Home","About us","Contact Us","Products"];

let nodes = arr.map(
    e=>{
       let listitem =  document.createElement('li');
       listitem.textContent= e;
       list1.appendChild(listitem) ;

    }

);
document.body.appendChild(list1);
list1.after(h1);


