interface IEmployee
{
    empname:string;
    empid:number;
    empsal:number;
    displayData:() => void;
}

var emp:IEmployee=
{
    empname:"John",
    empid:101,
    empsal:50000,
    displayData():void{
       console.log(this.empname+" "+this.empid+" "+this.empsal);
    }
}
console.log(emp.empname);
console.log(emp.empid);
console.log(emp.empsal);
emp.displayData();