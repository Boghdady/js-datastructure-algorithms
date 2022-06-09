const user = {
  name: 'Ahmed',
  age: 27,
  canWork: function () {
    console.log('Work as a programmer');
  },
  2: 'Basem',
};

// access O(1)
console.log(user.name);

// insert O(1)
user.city = 'ismailia';
console.log(user);

console.log(user['2']);

// delete and search ==  O(1)

// note :  If there is Hash Collision the insert  and read = O(n)
// Hash collision depend on memory space

// Hash collision means store the key and value at the same memory address
