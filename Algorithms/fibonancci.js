// fib(2) => [0,1]
// fib(3) => [0,1,1]
// fib(7) => [0,1,1,2,3,5,8]

/**
 *
 * @param n number of items that will display
 * big(O) = O(n)
 */
function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));
