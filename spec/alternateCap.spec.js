const alternateCap = require('../src/alternateCap')

describe("testing UpperCase of string",function(){

    it("function alternateCap() should return alternate uppercase",function(){

        expect(alternateCap("javascript")).toEqual("jAvAsCrIpT");
       
       })
});