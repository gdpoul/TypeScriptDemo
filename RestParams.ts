function greet(greet_msg:string, ...name:string[])
{
    return greet_msg+" "+name;
}
console.log(greet("Hello","John")); // Hello John
console.log(greet("Hello"));        // Hello
console.log(greet("Hello","John","smith")); // Hello John,smith