function myDisplayer(sum) {
    console.log(sum);
}
function myCalculator(num1, num2, callback) {
    var sum = num1 + num2;
    callback(sum);
}
myCalculator(95, 15, myDisplayer);
