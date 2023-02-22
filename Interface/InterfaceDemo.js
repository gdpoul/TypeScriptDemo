var emp = {
    empname: "John",
    empid: 101,
    empsal: 50000,
    displayData: function () {
        console.log(this.empname + " " + this.empid + " " + this.empsal);
    }
};
console.log(emp.empname);
console.log(emp.empid);
console.log(emp.empsal);
emp.displayData();
