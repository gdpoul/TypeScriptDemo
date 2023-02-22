var n = 15;
function demo() {
    console.log(n);
    n = 20;
    var a = 120;
    if (true) {
        var x = 100;
        console.log(n);
    }
    console.log(x);
}
console.log(n);
demo();
