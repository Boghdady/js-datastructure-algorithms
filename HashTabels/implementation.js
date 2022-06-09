class HashTable {
  constructor(size = 7) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.data.length;
    }
    return hash;
  }

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
}

// Final Result for HashTable =>  [ ["name", "Ahmed"], ["age": 27] ]
const hashTable = new HashTable();

// Set data  to hash Table
hashTable.set('name', 'Ahmed');
hashTable.set('age', 27);
hashTable.set('city', 'Ismailia');

console.log(hashTable.data);

// Get data from Hash Table
console.log(hashTable.get('name'));
console.log(hashTable.get('age'));
console.log(hashTable.get('city'));
console.log(hashTable.get('address'));
