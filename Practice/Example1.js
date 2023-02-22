// create a Callback function
function myCallbackFunction(i) {
    i >= 0;
}
// Keep only positive numbers
function removeNeg(arr, callback) {
    var myArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            myArray.push(arr[i]);
        }
    }
    return myArray;
}
var arr = [4, 1, -20, -7, 5, 9, -6];
var positiveArray = removeNeg(arr, myCallbackFunction);
console.log(positiveArray);
