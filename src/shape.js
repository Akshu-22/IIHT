class Shape{
    constructor(numofsides,length,breadth){
        this.numofsides=numofsides;
        this.length=length;
        this.breadth=breadth;

    }

}

class CreateShape{
     
    constructor(shape){
      
        this.shape=shape;
    }
    coCreateShape=()=>{
        return `${this.shape.numofside} ${this.shape.length} ${this.shape.breadth}`;
    }
    


}

class ColorShape{
    constructor(createShape){
        this.createShape=createShape;
    }

    create(){
        return this.createShape.coCreateShape();
     }

}

module.exports={Shape,CreateShape,ColorShape};