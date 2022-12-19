
function colorChng(){
    let item = document.getElementById('d1');
    if (item.classList.contains('d1')){
        item.classList.remove('d1');
    }
    else{
       
       item.classList.add('p2');
       item.classList.toggle('p1');
        
    }
    


}
