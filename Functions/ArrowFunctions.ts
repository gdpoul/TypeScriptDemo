/* Fat Arrow Function 
   for fat arrow funciton we cannot use function keyword
*/
var sum=(x:number,y:number):number=>
{
   return x+y;
}
console.log(sum(2,10));


/* Parameter less Arrow functions
   if the function body consist of only one statement
   there is no need of curly brackets and return keyword
*/
var Print=()=>
{
    console.log("Welcome to TypeScript");
}
// or
// var Print=()=>  console.log("Welcome to TypeScript");
// Print();

var sum=(x:number,y:number)=> x+y;
console.log(sum(100,200));