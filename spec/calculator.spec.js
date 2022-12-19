const Calculator = require('./calculator');

let calculator;
beforeEach(function()
{
  console.log('creating object');
  
     calculator=new Calculator();   
});

describe("Calculator test suite",function(){

    it("add function test",function(){
 
        expect(calculator.add(3,4)).toEqual(7);
        expect(calculator.sub(4,3)).toEqual(1);


    });


});