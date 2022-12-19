const {Student,StudentDAO,StudentService}= require ('../src/student');

let students;
let service;
let dao;

beforeEach(function(){

let s1=new Student(101,'Akshu','patilakshu@gmail.com');
let s2=new Student(102,'Jay','jay@gmail.com');
let s3=new Student(103,'Rashmi','rashmi@gmail.com');

students=[s1,s2,s3];
dao= new StudentDAO();
service=new StudentService(dao);


})


describe("student service class",function(){

    it ("delete data from db",function(){

        let size=students.length;

        spyOn(dao,'delete').and.callFake(function(id){
            console.log(students.length);
            for(let i=0;i<students.length;i++){
                if(students[i].id===id){
                    console.log(students[i]);
                    students.splice(i,1);
                    console.log('delete the student');
                    
                break;
                }
                else{
                    throw new Error('no such id');
                }
        
        
            }
            console.log(students.length);
            return students.length;
        
        });

    expect(service.delete(101)).toEqual(size-1);

});
    it('retrive all students',function(){

        spyOn(dao,'findAll').and.returnValue(students);
        expect(service.findAll()).toEqual(students);
        
    });

}); 

