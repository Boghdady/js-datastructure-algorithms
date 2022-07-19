// Problem : Given an array of integers, sort the array.
// Sorting can be "ASE" Or "DES"

// Big-O = O(n^2)
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
  return arr;
}

console.log(insertionSort([-6, 20, 8, -2, 4]));
console.log(insertionSort([-6, 18, 5, -4, 3]));
