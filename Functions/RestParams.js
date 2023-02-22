function greet(greet_msg) {
    var name = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        name[_i - 1] = arguments[_i];
    }
    return greet_msg + " " + name;
}
console.log(greet("Hello", "John")); // Hello John
console.log(greet("Hello")); // Hello
console.log(greet("Hello", "John", "smith")); // Hello John,smith
