// Problem : Give a natural number, determine the number is prime or not
// Prime number is a natural number that greater than 1 and not a product of two smaller natural numbers
// isPrime(5) = true => (1*5, 5*1)
// isPrime(4) = false => (4*1, 2*2, 1*4)

// Big-O = O(sqrt(n))
// Math.sqrt(9) = 3
// Math.sqrt(16) = 4
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1)); // false
console.log(isPrime(4)); //  false
console.log(isPrime(5)); // true
console.log(isPrime(13)); // true
console.log(isPrime(24)); // false
