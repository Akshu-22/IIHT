const upperCase = require('../src/upperCase')

describe("testing UpperCase of string",function(){

    it("test return upperCase",function(){

        expect(upperCase("helloworld")).toEqual("HELLOWORLD");
    })
    it("function stringUpperCase(nonStr) should throw Error",function(){
        let str=12;
        expect(upperCase(str)).toThrow();  
    
       })
});