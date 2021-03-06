class HashTable {
  constructor(size = 7) {
    this.data = new Array(size);
  }

  // O(1)
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.data.length;
    }
    return hash;
  }

  // O(1)
  set(key, value) {
    // Create an index between 0 to 6 if the array size is 7
    const index = this._hash(key);
    // check if there is data in the memory spot
    if (!this.data[index]) {
      this.data[index] = [];
    }
    this.data[index].push([key, value]);

    return this;
  }

  // O(1) , but in rarely cases may be collision happen so the big-o will be O(n)
  get(key) {
    const index = this._hash(key);
    // check if there is data in specific spot
    if (this.data[index]) {
      for (let i = 0; i < this.data[index].length; i++) {
        if (this.data[index][i][0] === key) {
          return this.data[index][i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    let allKeys = [];
    for (let i = 0; i < this.data.length; i++) {
      // Check if spot has a value
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          allKeys.push(this.data[i][j][0]);
        }
      }
    }
    return allKeys;
  }
}
// Final Result for HashTable =>  [ ["name", "Ahmed"], ["age": 27] ]
const hashTable = new HashTable();

// Set data  to hash Table
hashTable.set('name', 'Ahmed');
hashTable.set('age', 27);
hashTable.set('city', 'Ismailia');
hashTable.set('job', 'Software Engineer');

console.log(hashTable.data);

// Get data from Hash Table
console.log('get name :', hashTable.get('name'));
console.log('get age :', hashTable.get('age'));
console.log('get city :', hashTable.get('city'));
console.log(hashTable.get('address'));

// Get all hash table keys
console.log('Hash table keys: ', hashTable.keys());
