const studentData=new Map();
studentData.set("jay",[56,30,22]);
studentData.set("deep",[65,40,76]);
studentData.set("riya",[56,78,90]);
studentData.set("jyoti",[80,67,45]);

console.log(studentData);


function addMarks(){
    studentData.forEach((value,key)=>{
        if (key==="jay")
        {
            value.push(100);
        }
        console.log(`${key} ${value}`)

    });
}
addMarks();

function getTotal(){
    studentData.forEach((value,key)=>{
        let total=0;
        for(let i=0;i<value.length;i++)
        {
            total +=value[i];
        }
    console.log(`${key} ${total}`);

    });
    
}
getTotal();


function addMarks1(){
    studentData.forEach((value,key)=>{

    if(studentData.has(key))
      {
        
        studentData.set(key,[studentData.get(key),value]);
        console.log(`${key} ${value}`);
    
      }
      
      else{
        studentData.set(key,[value]);
      }
      return studentData.get(key);
    });

}


  //addMarks1();

 // let nisha=new Student(999,'nisha','bangalore',true);
  console.log(addMarks1("jay",[12,23,34]));

