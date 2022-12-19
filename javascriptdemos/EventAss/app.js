
let item=document.getElementById("name");
item.addEventListener("blur",fn,true);
function fn(){
    console.log(document.getElementById("name").value);
}