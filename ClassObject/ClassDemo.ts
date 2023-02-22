// Class Creation
export class Employee
{
    eid:number;
    ename:string;
    deptno:number;

    setData(id:number,name:string,dno:number):void
    {
        this.eid=id;
        this.ename=name;
        this.deptno=dno;
    }
     display():void
    {
       var abc:string="aaa";
       console.log(this.eid);
       console.log(this.ename);
       console.log(this.deptno);
    }
}

// Object Creation
var emp=new Employee();

// emp.eid=101;
// emp.ename="John";
// emp.deptno=10;
emp.setData(101,"John",11);
emp.display();