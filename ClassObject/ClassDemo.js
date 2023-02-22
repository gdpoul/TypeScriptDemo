// Class Creation
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.setData = function (id, name, dno) {
        this.eid = id;
        this.ename = name;
        this.deptno = dno;
    };
    Employee.prototype.display = function () {
        var abc = "aaa";
        console.log(this.eid);
        console.log(this.ename);
        console.log(this.deptno);
    };
    return Employee;
}());
// Object Creation
var emp = new Employee();
// emp.eid=101;
// emp.ename="John";
// emp.deptno=10;
emp.setData(101, "John", 11);
emp.display();
