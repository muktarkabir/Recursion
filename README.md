# Recursions

This project is a collection of JavaScript implementations exploring **recursion**, **iteration**, and **sorting algorithms**.  
It includes Fibonacci sequence generators, array merging utilities, and both iterative and recursive approaches to **merge sort**.

---

## Features

- **Fibonacci (Iterative)**: Generates the Fibonacci sequence up to a given number using a loop.  
- **Fibonacci (Recursive)**: Builds the sequence recursively by breaking down the problem into smaller subproblems.  
- **Merge Function**: Merges two sorted arrays into one sorted array.  
- **Two-Way Merge Sort**: Iterative approach to sorting that pairs up elements, merges them, and combines results until fully sorted.  
- **Recursive Merge Sort**: Classic divide-and-conquer algorithm that recursively splits arrays and merges them back in sorted order.  

---

## What I Learned

- How to use **recursion** to solve problems by breaking them into smaller, simpler tasks.  
- Implementing **iterative vs recursive solutions** and understanding their tradeoffs.   
- How to build efficient **sorting algorithms** like merge sort.  

---

## Installation

Clone the repository:

```bash
git clone https://github.com/muktarkabir/Recursion.git
```
```bash
cd Recursion
```
## Usage

Run the functions directly with Node.js:
```bash
node fibonacci.js
node merge-sort.js
```
## Sample Input/Output
### Fibonacci (Iterative)
```js
fibs(7);
// Output: [0, 1, 1, 2, 3, 5, 8]
```
### Fibonacci (Recursive)
```js
fibsRecursive(7);
// Output: [0, 1, 1, 2, 3, 5, 8]
```

### Merge Function
```js
merge([2, 4], [1, 3]);
// Output: [1, 2, 3, 4]
```

### Two-Way Merge Sort
```js
twoWayMergeSort([9, 3, 2, 7]);
// Output: [2, 3, 7, 9]
```
### Recursive Merge Sort
```js
mergeSort([9, 3, 2, 7]);
// Output: [2, 3, 7, 9]

mergeSort([43,2,4 3, 2,7, 5,9]);
// Output: [2, 2, 3, 4, 5 7, 9, 43]
```