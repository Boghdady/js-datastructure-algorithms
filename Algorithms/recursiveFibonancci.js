// O(n) - iterative solution
// O(2^n) - recursive solution
function recursiveFibonacci(n) {
  // base case
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0)); // 0
console.log(recursiveFibonacci(1)); // 1
console.log(recursiveFibonacci(6)); // 8

// trace
// recursiveFibonacci(6)
// 1) n = 6 =>  recursiveFibonacci(5) + recursiveFibonacci(4)
// 2) n = 4 => recursiveFibonacci(3) + recursiveFibonacci(2)
// 3) n = 2 => recursiveFibonacci(2) = 2
