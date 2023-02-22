var n:number=15;  // global variable

function demo()
{
console.log(n);
n=20;
    var a:number=120;  // local variable
    if(true){
        var x:number=100;
        console.log(n)
    }
    console.log(x);
}
console.log(n);

demo();



