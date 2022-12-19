class Student{
    constructor(id,name,email){
        this.id=id;
        this.name=name;
        this.email=email;
    }
    
}

class StudentDAO{
    
    findAll(){

    }

    delete(id){
        
    }


}

class StudentService{
    constructor(dao){
        this.dao=dao;

    }

    delete=(id)=>this.dao.delete(id);

    findAll=()=>this.dao.findAll();
 

}

module.exports={Student,StudentDAO,StudentService};