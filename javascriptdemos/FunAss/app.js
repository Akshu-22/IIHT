function subtract(x,y){
    return x-y;
}
let val;
val=subtract(9,2);
console.log(`subtract: ${val}`);

let product = function(x,y){
    return x*y;
};
console.log(`product: ${product(5,6)}`);


const addItem={
   addItem:function(){
    console.log('Item Added');
   } 
}

const removeItem={
    removeItem:function(){
        console.log('Item Removed');
    }

}
console.log(addItem);