const fibs = (num) => {
  const sequence = [];
  let current = 1;
  let previous = 0;
  sequence.push(previous, current);
  while (num > 2) {
    sequence.push(current + previous);
    current = sequence.at(-1);
    previous = sequence.at(-2);
    num--;
  }

  return sequence;
};

console.log(fibs(10));

const fibsRecursive = (num) => {
    if (num == 0) {
        return [0];
    }
    if (num == 1) {
        return [0,1];
    }
    const arr = fibsRecursive(num -1);
    arr.push(arr.at(-1) + arr.at(-2));
    return arr;
};

console.log(fibsRecursive(10));
