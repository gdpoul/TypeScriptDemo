
// callback function
function myDisplayer(sum:number) {
    console.log("sum of two numbr is: "+sum);
  }
  
  function myCalculator(num1:number, num2:number, callback) {
    let sum = num1 + num2;
    callback(sum);
  }
  
  myCalculator(95, 15, myDisplayer);

  