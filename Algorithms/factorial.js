// fact(4) => 4*3*2*1 = 24
// fact(5) => 5*4*3*2*1 = 120
// fact(0) = 1
// fact(1) = 1

// Big-O = O(n)
function factorial(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

5;

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(4));
console.log(factorial(5));
