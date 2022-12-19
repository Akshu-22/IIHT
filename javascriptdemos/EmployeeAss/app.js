class Employee{
    constructor(id,name,age,salary)
{
    this.id=id;
    this.name=name;
    this.age=age;
    this.salary=salary;
}

get id(){
    return this._id;
}

set id(val){
    this._id=val;

}
get name(){
    return this._name;

}
set name(val){
    this._name=val;

}
get age(){
    return this._age;
}
set age(val){
    this._age=val;

}
get salary(){
    return this._salary;
}
set salary(val){
    this._salary=val;
}
display()
{
    console.log(`Employee details: ${this.id} ${this.name} ${this.age} ${this.salary}`);
}
    
}
class Manager extends Employee{
    constructor(id,name,age,salary,mnid,mname)
    {
        super(id,name,age,salary);
        this.mnid=mnid;
        this.mname=mname;

    }
    get mnid(){
        return this._mnid;
    }
    set mnid(val){
        this._mnid=val;
    }
    get mname(){
        return this._mname;
    }
    set mname(val){
        this._mname=val;
    }
    display2()
{
    console.log(`Manager details: ${this.display()} ${this.mnid} ${this.mname}`);
}
    
}



//let emp = new Employee(101,'akshu',22,20000);
//emp.display();

//let emp1 = new Employee(102,'jay',21,30000);
//emp1.display();

//let emp2 = new Employee(103,'riya',23,20600);
//emp2.display();

let mn = new Manager(102,'akshu',22,20000,501,'sriram');
mn.display2();

let mn1 = new Manager(104,'jay',24,60000,501,'Riya');
mn1.display2();