"use strict";
exports.__esModule = true;
exports.Myclass = exports.myfun = exports.x = void 0;
// varaiable
exports.x = "welcome";
// simple function
function myfun() {
    console.log("this is my function..");
}
exports.myfun = myfun;
// create class
var Myclass = /** @class */ (function () {
    function Myclass(a, b) {
        var _this = this;
        this.add = function () {
            return (_this.a + _this.b);
        };
        this.a = a;
        this.b = b;
    }
    return Myclass;
}());
exports.Myclass = Myclass;
