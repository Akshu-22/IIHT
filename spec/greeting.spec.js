const greeting = require('./greeting')
describe("testing greeting funciton",function(){
    it("test return value of greeting",function(){
        expect(greeting()).toEqual('good morning');
    });
});