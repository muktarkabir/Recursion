const mergeSort = (array) => {};

function merge(arr1, arr2) {
  let mergedArray = [];
  let i = 0;
  let j = 0;
  let noOfLoops = arr1.length + arr2.length;
  for (let index = 0; index < noOfLoops; index++) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else if (arr1[i] == arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  return mergedArray;
}
let a = [2, 3, 6, 8, 9];
let b = [0, 4, 4, 5, 7, 9, 11, 34];
let c = merge(a,b);
console.log(c);

