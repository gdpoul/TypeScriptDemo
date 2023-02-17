// how to declare 2D Array
var myarray = [[10, 20], [30, 40], [50, 60]];
console.log(myarray);
// 2D Multi Type Array
var myarray2 = [["abc", 10], [100, "xyz"]];
console.log(myarray2);
// Access 2D array element
console.log(myarray2[0][0]);
console.log(myarray2[0][1]);
console.log(myarray2[1][0]);
console.log(myarray2[1][1]);
// access 2D array using for loop
console.log("reading data from array using for loop------------");
// for(var i=0;i<myarray2.length;i++)
// {
//     for(var j=0;j<myarray2[i].length;j++)
//     {
//       console.log(myarray2[i][j]);
//     }
// }
console.log("reading data from array using for loop with in operator------------");
for (var i in myarray2) {
    for (var j in myarray2[i]) {
        console.log(myarray2[i][j]);
    }
}
