// Problem : Given an array of integers, sort the array.
// Sorting can be "ASE" Or "DES"

// Idea
// 1) Identify the pivot element in the array
// can be first or last or random or median
// 2) put everything that's smaller than the pivot into a "left" array and everything that greater the pivot into a "right" array
// Repeat the process for the individual "left" and "right" arrays till you have an array of length 1, which is sorted by definition

function quickSort(arr) {
  // base case
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([8, 20, -2, 4, -6]));
