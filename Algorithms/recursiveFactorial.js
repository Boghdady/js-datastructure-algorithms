// Recursive case : fac(5) = 5 * fact(4)
// Base case : fact(0) = 1, fact(1) = 1

function recursiveFactorial(n) {
  if (n < 2) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(0));
console.log(recursiveFactorial(1));
console.log(recursiveFactorial(4));
console.log(recursiveFactorial(5));
