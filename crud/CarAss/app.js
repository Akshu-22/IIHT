
let form1 = document.forms[0];

function loadEventListener(){
    console.log("loadEventListener");
    form1.addEventListener("submit",submit,true);
}

loadEventListener();

function submit(){
    let carName = document.getElementById("carName").value;
    
   
    let price = document.getElementById("price").value;

    console.log(carName,price);
    let carArray = new Array(carName,price);

   alert(carArray);
     print(carArray);
   // console.log(carArray);

}