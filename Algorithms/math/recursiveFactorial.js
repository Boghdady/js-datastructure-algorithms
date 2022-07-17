// Recursive case : fac(5) = 5 * fact(4)
// Base case : fact(0) = 1, fact(1) = 1
// Big-O = O(n)
function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(0));
console.log(recursiveFactorial(1));
console.log(recursiveFactorial(4));
console.log(recursiveFactorial(5));

// Tracing
// 1) recursiveFactorial(5) => 5 * recursiveFactorial(4)
// 2) recursiveFactorial(4) =>  4 * recursiveFactorial(3)
// 3) recursiveFactorial(3) =>  3 * recursiveFactorial(2)
// 4) recursiveFactorial(2) =>  2 * recursiveFactorial(1)
// 5) recursiveFactorial(1) => 1 * recursiveFactorial(0)
// 6) recursiveFactorial(0) = return 1
