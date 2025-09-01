const mergeSort = (array) => {};

function merge(arr1, arr2) {
  let mergedArray = [];
  let i = 0;
  let j = 0;
  let k = 0;
  let m = arr1.length - 1;
  let n = arr2.length - 1;
  let noOfLoops = m + n;

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
  // for (let index = 0; index < noOfLoops; index++) {
  //   if (arr1[i] < arr2[j]) {
  //     mergedArray.push(arr1[i]);
  //     i++;
  //   } else if (arr1[i] == arr2[j]) {
  //     mergedArray.push(arr1[i]);
  //     i++;
  //   } else {
  //     mergedArray.push(arr2[j]);
  //     j++;
  //   }
  // }

  return mergedArray;
}
let a = [2, 3, 6, 9, 13, 98];
let b = [0, 4, 4, 5, 7, 11, 13, 97];
let c = merge(a, b);
// console.log(c);
let d = merge([8], [234]);
console.log(d);

function twoWayMergeSort(unsortedArray) {
  let bigArray = [];
  let elem1 = 0;
  let elem2 = 1;
  //rounding up accounts for uneven number of elements
  let noOfPairs = Math.round(unsortedArray.length / 2);
  for (let i = 0; i < noOfPairs; i++) bigArray.push([]);
  for (let index = 0; index < bigArray.length; index++) {
    if (unsortedArray[elem2]) {
      let sortedPair = merge([unsortedArray[elem1]], [unsortedArray[elem2]]);
      bigArray[index].push(sortedPair);
    }
    bigArray[index].push(unsortedArray[elem2]);
    elem1 += 2;
    elem2 += 2;
    // console.log(bigArray[index].length);

    if (bigArray[index].length == 2) {
      console.log({ f: bigArray[index][0], s: bigArray[index][1] });
      console.log(merge([bigArray[index][0]], [bigArray[index][1]]));

      // bigArray[index] = merge(bigArray[index][0], bigArray[index][1]);
    }
  }

  console.log(bigArray);
}

// twoWayMergeSort([9, 3, 5, 7, 4]);
