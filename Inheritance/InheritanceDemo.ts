class Person
{
    name:string;

    constructor(pName:string)
    {
        this.name=pName;
    }
}
class Employee extends Person
{
    eid:number;
    constructor(id:number,name:string)
    {
       super(name);
       this.eid=id;
    }
    display():void
    {
         console.log(this.eid);
         console.log(this.name);
    }
}
var emp1=new Employee(101,"John");
emp1.display();


