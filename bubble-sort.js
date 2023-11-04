
function bubbleSort(arr) {
  let count = 1;

  while(count > 0) {
    count = 0;

    for(i = 0; i < arr.length; i++) {
      if(arr[i] > arr[i+ 1]) {
      [arr[i], arr[i+1]] =  [arr[i + 1], arr[i]];
      count++;
       }
    }

    return arr;

  }
        console.log(arr.join(","));
}
module.exports = bubbleSort;