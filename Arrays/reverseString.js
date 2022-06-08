// Create a function that reverse a string
// Input : "Welcome to index group"
// Output Should be: "puorg xedni ot emoclew"

// First Solution
function reverse(str) {
  if (!str || str.length < 2 || typeof str !== 'string') {
    throw new Error('Invalid input string');
  }
  return str.split('').reverse().join('');
}
console.log(reverse('Welcome to index group'));

// Second Solution
const reverseTwo = (str) => [...str].reverse().join('');
console.log(reverseTwo('Welcome to index group'));

// Third Solution
function reverseThree(str) {
  // loop from tail to head and add each character to array
  const reverseArr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reverseArr.push(str[i]);
  }
  return reverseArr.join('');
}
console.log(reverseThree('Welcome to index group'));
