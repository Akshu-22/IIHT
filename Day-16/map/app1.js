let students[];

class studentData{
    constructor(id,name,city,clearedExam){
        this.id=id;
        this.name=name;
        this.city=city;
        this.clearedExam=clearedExam;
    }

}

 fetch('student.json')
    .then( response=>response.json())
    .then( response=>students=[...])
    console.log(stud); 
