const mergeSort = (array) => {};

function merge(arr1, arr2) {
  let mergedArray = [];
  let i = 0;
  let j = 0;
  let k = 0;
  let m = arr1.length - 1;
  let n = arr2.length - 1;

  while (i <= m && j <= n) {
    if (arr1[i] < arr2[j]) {
      mergedArray[k] = arr1[i];
      i++;
      k++;
    } else {
      mergedArray[k] = arr2[j];
      j++;
      k++;
    }
  }
  for (; i <= m; i++) mergedArray[k++] = arr1[i];
  for (; j <= n; j++) mergedArray[k++] = arr2[j];
  return mergedArray;
}
let a = [2, 3, 6, 9, 13, 98];
let b = [0, 4, 4, 5, 7, 11, 13, 97];
let c = merge(a, b);
// console.log(c);
let d = merge([8], [0, 234]);
// console.log(d);

function twoWayMergeSort(unsortedArray) {
  let bigArray = [];
  let secondPass = [];
  let thirdPass = [];
  let elem1 = 0;
  let elem2 = 1;
  //rounding up accounts for uneven number of elements
  let noOfPairs = Math.round(unsortedArray.length / 2);
  for (let i = 0; i < noOfPairs; i++) bigArray.push([]);
  for (let index = 0; index < bigArray.length; index++) {
    //The number zero is falsy so this check prevents that
    if (typeof unsortedArray[elem2] == "number") {
      let sortedPair = merge([unsortedArray[elem1]], [unsortedArray[elem2]]);
      bigArray[index] = sortedPair;
    } else {
      bigArray[index].push(unsortedArray[elem1]);
    }
    elem1 += 2;
    elem2 += 2;
  }
  //reset elem variables for reuse
  elem1 = 0;
  elem2 = 1;
  
  let noOfPairsForSecondPass = Math.round(bigArray.length / 2);
  for (let i = 0; i < noOfPairsForSecondPass; i++) secondPass.push([]);
 for (let index = 0; index < secondPass.length; index++) {  
    if (bigArray[elem2]) {
      let sortedPair = merge(bigArray[elem1], bigArray[elem2]);
      secondPass[index] = sortedPair;
    } else {
      secondPass[index] = bigArray[elem1];
    }
    elem1 += 2;
    elem2 += 2;
  }
console.log(secondPass);
  


  return bigArray;
}

twoWayMergeSort([9, 3, 5, 7, 4, 2, 456, 0, 4]);
