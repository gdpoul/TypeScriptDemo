class Employee
{
    eid:number;
    ename:string;
    deptno:number;

    constructor(id:number,name:string,dno:number)
    {
        this.eid=id;
        this.ename=name;
        this.deptno=dno;
    }
     display():void
    {
       console.log(this.eid);
       console.log(this.ename);
       console.log(this.deptno);
    }
}

// Object Creation
var emp=new Employee(101,"John",10);
emp.display();