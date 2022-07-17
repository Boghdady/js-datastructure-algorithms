// @Problem : Given an array of "n" elements and a target element "t", find the index of "t" in the array. Return -1 if the target element is not found.

// @Examples :
// arr = [-5, 2, 10, 4, 6], t= 10 => Should return 2
// arr = [-5, 2, 10, 4, 6], t= 20 => Should return -1

// Big-O = O(n)
function linearSearch(list, target) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([-5, 2, 10, 4, 6], 10));
console.log(linearSearch([-5, 2, 10, 4, 6], 4));
console.log(linearSearch([-5, 2, 10, 4, 6], 20));
