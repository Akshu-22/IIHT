let string = "Ak$hata$";

try{

    if(string.includes('$')){

        throw "Invalid String";

    }

    console.log("Valid String");

}catch(err){

    console.log("Please Enter a valid string");

}