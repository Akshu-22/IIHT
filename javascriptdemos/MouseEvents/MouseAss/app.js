let item=document.getElementById("name");
item.addEventListener("blur",fn,true);
let body=document.getElementById("body")
document.addEventListener("mousemove",fn2,true);
function fn2(event){
    let x=event.clientX;
    let y=event.clientY;
    document.getElementById("mouse").innerHTML=x+" "+y;
   body.style.backgroundColor=`rgb(${x} ${y} 400)`;
}
function fn(){
    console.log(document.getElementById("name").value);
}