const isPrime = require('../src/prime')

describe("testing Length of String",function(){

   /* it("function isPrime(num) should check if number is Prime",function(){

        expect(isPrime(4)).toBeFalsy();
    
       })*/
       it("function isPrime(num) should check if number is even",function(){

        expect(isPrime(13)).toBeTruthy();
    
       });
});