// Problem : You have two array .. find the common item
// Input : Two Arrays : [1, 3, 5] - [2, 4, 5]
// Output : true

// ? 1) First solution make two for loop, first loop will hold first item in the first array and compare it with all items in the second array, and repeat until find the matched item
// this solution not efficient because the big-o will be O(n^2)
function itemInCommon(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(itemInCommon([1, 3, 5], [2, 4, 5]));

// ? 2) Second solution is better, doing loop for the first array and add it's items in the object as keys =true, for example {1: true, 3: true, 5: true} . then doing loop in the second array and check if the object contain the second array items
// that solution is efficient because the big-o will be O(n)
function checkItemInCommon(arr1, arr2) {
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = true;
  }
  for (let j = 0; j < arr2.length; j++) {
    if (obj[arr2[j]]) return true;
  }
  return false;
}

console.log(checkItemInCommon([1, 3, 5], [2, 4, 8]));
