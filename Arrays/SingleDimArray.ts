// Array Declaration and Initialization

var fruits1:string[]=["mango","apple","banana"];

fruits1.pop();
//or
var fruits2:Array<string>;  //declaration
fruits2=["apple","mango","banana"]; //initialization
console.log(fruits1);
console.log(fruits2);


// // multi type array
// var values1:(string | number)[]=["apple",100,"banana",10];
// //or
// var values2:Array<string | number>=["apple",100,"banana",10];
// console.log(values1);
// console.log(values2);

// How to Access Array Element
// var fruit:string[]=["Apple", "orange", "Banana"];
// console.log(fruit[0]);
// console.log(fruit[1]);
// console.log(fruit[2]);
// console.log(fruit[3]);  // undefined

// // Access array element using for loop 
// for(var i=0;i<fruits.length;i++)
// {
//     console.log(fruits[i]); 
// }
// // reading element using for loop with in operator........
// for(var j in fruit)
// {
//     console.log(fruit[j]); 
// }