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

console.log(fibs(8));
