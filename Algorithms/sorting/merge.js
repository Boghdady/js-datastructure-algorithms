// Problem : Given an array of integers, sort the array.
// Sorting can be "ASE" Or "DES"

// idea: [-6, 20, 8, -2,4]
// 1) split array to two array
// left array = -6, 20 | right = [8,-2,4]
// 2) check if the array length is 1, if not divide the arrays again
// left arrays = [-6], [20] | right arrays = [8], [-2,4]
// 3) check if the array length is 1, if not divide the arrays again
// left arrays = [-6], [20] | right arrays = [8], [-2], [4]
// merge arrays
// [-6, 20] , [-2, 4, 8]
// make a comparison
// [-6, -2, 4, 8, 20]

function mergeSort(arr) {
  // Base case
  if (arr.length < 2) {
    return arr;
  }
  // divide the array
  const middle = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middle);
  const rightArr = arr.slice(middle);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      // shift delete the element for right array after putting it in sorted array
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}

console.log(mergeSort([-6, 20, 8, -2, 4]));
