// Array Declaration and Initialization
var fruits1 = ["mango", "apple", "banana"];
//or
var fruits2; //declaration
fruits2 = ["apple", "mango", "banana"]; //initialization
console.log(fruits1);
console.log(fruits2);
// multi type array
var values1 = ["apple", 100, "banana", 10];
//or
var values2 = ["apple", 100, "banana", 10];
console.log(values1);
console.log(values2);
// How to Access Array Element
var fruits = ["Apple", "orange", "Banana"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]); // undefined
// Access array element using for loop 
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
for (var j in fruits) {
    console.log(fruits[j]);
}
