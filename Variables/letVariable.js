var a = 100; // global variable
a = 200; // can update let variable 
console.log(a);
function add() {
    a = 15; //  can update let global variable inside a block
    var name = "Ganesh";
    console.log(a);
    if (true) {
        var l = 20;
        l = 21;
    }
    // console.log(l);  // cannot access outside the block
    console.log(name);
}
add();
