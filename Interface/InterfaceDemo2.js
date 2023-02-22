var C1 = /** @class */ (function () {
    function C1() {
    }
    C1.prototype.sum = function () {
        return (this.a + this.b);
    };
    C1.prototype.sub = function () {
        return (this.x - this.y);
    };
    return C1;
}());
var obj = new C1();
obj.a = 100;
obj.b = 300;
obj.x = 2000;
obj.y = 1000;
console.log(obj.sum());
console.log(obj.sub());
