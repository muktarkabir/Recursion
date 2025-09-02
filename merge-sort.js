function merge(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) throw new Error("Pass in arrays of numbers");
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
const a = [2, 3, 6, 9, 13, 98];
const b = [0, 4, 4, 5, 7,];
merge(a, b); // [0,2, 3, 4,4,5, 6, 7, 9, 13, 98]

function twoWayMergeSort(unsortedArray) {
  if (!Array.isArray(unsortedArray)) throw new Error("Pass in an array of numbers");
  let bigArray = [];
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
  //I realized that its more efficient to merge everything together at this point.
  let numberOfMerges = bigArray.length - 1;
  //Figured out the number of merges required is the number of arrays minus one
  for (let i = 0; i < numberOfMerges; i++) {
    let a = bigArray.shift();
    let b = bigArray.shift();
    let c = merge(a, b);
    bigArray.unshift(c);
    //repeating this until there is only one array left which will then be sorted.
  }
  return bigArray[0];
}

twoWayMergeSort([9, 0, 3, 5, 4, 2, 54, 6, 3, 2, 555]); // [ 0, 2, 2, 3, 3,4, 5, 6, 9, 54,555]

const mergeSort = (
  array,
  low = 0,
  high = array.length - 1,
  mid = Math.floor((low + high) / 2)
) => {
  if (!Array.isArray(array)) throw new Error("Pass in an array of numbers");

  if (array.length == 2) {
    const merged = merge([array.at(-2)], [array.at(-1)]);
    return merged;
  } else if (array.length == 1) {
    return array;
  }
  // if (low < high) {
    let left = mergeSort(array.slice(low, mid + 1));
    let right = mergeSort(array.slice(mid + 1, high + 1));
    const mergedAndSorted = merge(left, right);
    return mergedAndSorted;
  // }
};

mergeSort([31, 5, 7, 12, 23, 3, 1, 11, 43, 6, 8, 9, 5]); //[1,3,5,5,6,7,8,9,11,12,23,31,43]
