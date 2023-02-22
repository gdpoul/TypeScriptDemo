var Employee = /** @class */ (function () {
    function Employee(id, name, dno) {
        this.eid = id;
        this.ename = name;
        this.deptno = dno;
    }
    Employee.prototype.display = function () {
        console.log(this.eid);
        console.log(this.ename);
        console.log(this.deptno);
    };
    return Employee;
}());
// Object Creation
var emp = new Employee(101, "John", 10);
emp.display();
