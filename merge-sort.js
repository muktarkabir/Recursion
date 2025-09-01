const mergeSort = (array) => {};

function merge() {
  let a = [2, 3, 6, 8, 9];
  let b = [0, 4,4, 5, 7, 9];
  let c = [];
  let i = 0;
  let j = 0;
  let noOfLoops = a.length + b.length;
  for (let index = 0; index < noOfLoops; index++) {
    if (a[i] < b[j]) {
      c.push(a[i]);
      i++;
    } else if (a[i] == b[j]) {
       c.push(a[i]);
      i++; 
    } else {
      c.push(b[j]);
      j++;
    }
  }

  console.log(c);
}
merge();
