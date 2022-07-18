// Problem: The same problem for binary search
// to use recursive : break down the problem into smaller version of  the same problem, identify the base case for recursion

// base case :
// 1. startIndex > endIndex
// 2. target === list[middleIndex]

// Big-O = O(logn)

function recursiveBinarySearch(list, target) {
  return search(list, target, 0, list.length - 1);
}

function search(list, target, startIndex, endIndex) {
  // Base case
  if (startIndex > endIndex) {
    return -1;
  }
  let middleIndex = Math.floor((startIndex + endIndex) / 2);
  if (target === list[middleIndex]) {
    return middleIndex;
  }

  // recursive case
  if (target < list[middleIndex]) {
    return search(list, target, startIndex, middleIndex - 1);
  } else {
    return search(list, target, middleIndex + 1, endIndex);
  }
}

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)); // -1
