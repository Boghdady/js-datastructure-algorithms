// Conditions: list should be sorted (ASE)
// We have (Start, Middle, End) Points

// pseudocode
// 1) If the array is empty, return -1 as the element cannot be found.
// 2) if the array has elements, find the middle element in the array. if target is equal to the middle element, return the middle element index.
// 3) If target is less than the middle element, binary search left half of the array
// 4) If target greater than the middle element, binary search right half of the array

// Big-O = O(logn)
function binarySearch(list, target) {
  let startIndex = 0;
  let endIndex = list.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    if (list[middleIndex] === target) {
      return middleIndex;
    }

    if (target > list[middleIndex]) {
      startIndex = middleIndex + 1;
    }
    if (target < list[middleIndex]) {
      endIndex = middleIndex - 1;
    }
  }
  return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // -1
