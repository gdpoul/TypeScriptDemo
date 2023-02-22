// create a Callback function

const myCallbackFunction=(i:number)=> i>=0;

// Keep only positive numbers
function removeNeg(arr:number[], callback):number[] {

    const myArray:number[] = [];
   
    for(let i=0;i<arr.length;i++){
        
      if(callback(arr[i])){
        myArray.push(arr[i]);
      }
    }
    return myArray;
  }

  const arr:number[] = [4, 1, -20, -7, 5, 9, -6];
  
   var positiveArray= removeNeg(arr, myCallbackFunction);
   console.log(positiveArray);
   
  