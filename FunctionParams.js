// function greet(greet:string,name:string):string
// {
//     return greet+"  "+name;
// }
// console.log(greet("Welcome","John"));  //ok
//console.log(greet("Welcome"));  // error
//console.log(greet("Welcome","John","smith")); //error
// Optional Parameter(syntax: var_name ?)
// function greet(greet:string,name?:string):string
// {
//     return greet+"  "+name;
// }
// console.log(greet("Welcome","John"));  //ok
// console.log(greet("Welcome"));         //ok
//console.log(greet("Welcome","John","smith")); //error
// Default parameters
function greet(name, greet) {
    if (greet === void 0) { greet = "Hello"; }
    return greet + "  " + name;
}
console.log(greet("John")); //ok
console.log(greet("John", "Welcome")); //ok
//console.log(greet("Welcome","John","smith")); //error
