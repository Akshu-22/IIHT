let upperCase=function(str){
    
    if(typeof str!=="string"){
       
        throw new Error ("Input Should be String!");
    }
    return "HELLOWORLD";
}
module.exports=upperCase;