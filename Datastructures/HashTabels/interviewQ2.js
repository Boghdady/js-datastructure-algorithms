// @Problem : Find First Recurring Number
// @Input : [1,3,4,5,1,6,3] , Output : return "1"
// Input : [1,3,4,6,2] , Output : return "undefined"

// First solution : O(n) = n^2 not the best solution
function findFirstRecurringNumber(input) {
  for (let i = 0; i < input.length; i++) {
    for (j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
}

console.log(findFirstRecurringNumber([1, 3, 4, 5, 5, 6, 3]));

// Second solution :
function findFirstRecurringNumber2(input) {
  let obj = {};
  for (let i = 0; i < input.length; i++) {
    if (obj[input[i]]) {
      return input[i];
    } else {
      obj[input[i]] = true;
    }
  }

  return undefined;
}

console.log(findFirstRecurringNumber2([1, 3, 4, 9, 5, 6, 3]));
