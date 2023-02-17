let mystrign1="Ganesh P";
var mystring: string="Ganesh Poul";

// charAt() --> return character based on index
console.log(mystring.charAt(5)); //h

//concat()  --> concat multiple string
var str1:string="welcome";
var str2:string=" type";
var str3:string="script";
console.log(str1.concat(str2)); // welcome type
console.log(str1.concat(str2).concat(str3)); //welcome typescript

//replace() -> replace one char to other
var str="abbbababababb";
var s="TypeScript";
console.log(str.replace('b','a')); // replace first char
console.log(s.replace('Type','Java')); // replace word


// split() 
var fruits:string="Apple Banana Orange";
console.log(fruits.split(' ')); //[ 'Apple', 'Banana', 'Orange' ]
console.log(fruits.split(' ',2)); //[ 'Apple', 'Banana' ]

//substring()

str="Welcome";
console.log(str.substring(0,3)); // Wel
console.log(str.substring(2,5)); // lco

//toUpperCase() && toLowerCase()

str="TypeScript Programming";
console.log(str.toUpperCase());  // TYPESCRIPT PROGRAMMING
console.log(str.toLowerCase());  // typescript programming

//trim() --> Remove spaces
str="  welcome  ";
console.log(str.trim());  // welcome
console.log(str.trimRight());
console.log(str.trimLeft());

