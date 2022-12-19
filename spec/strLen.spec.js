const strLen = require('../src/strLen')

describe("testing Length of String",function(){

    it("test return length of string",function(){

        expect(strLen("helloworld")).toEqual(10);
    })

   it("function stringUpperCase(nonStr) should throw Error",function(){
        let str=12;
        expect(strLen(str)).toThrow(); 
    
       
    
       });
});