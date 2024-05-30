
class Employee{
constructor(id,name){
this.id=id;
this.name=name;
}
detail(){
console.log(this.id+" "+this.name)
}
}
let e1=new Employee(10,"Qadir Adamson");
let e2=new Employee("Victor Hug");
let e3=new Employee(12)
e1.detail();
e2.detail();
e3.detail();