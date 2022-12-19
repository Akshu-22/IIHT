const {Shape,CreateShape,ColorShape}= require ('../src/shape');

describe('color shape test',function(){
    it("should call createShape",function(){
        let shape=new Shape(4,20,30);
        console.log(shape);
        let createShape=new CreateShape(shape);
        console.log(createShape);
        let colorShape=new ColorShape(createShape);
        console.log(colorShape);

        spyOn(createShape,'coCreateShape').and.returnValue("4 20 30");

        expect(colorShape.create()).toEqual("4 20 30");
    })
})