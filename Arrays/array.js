class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  access(index) {
    return this.data[index];
  }

  pop() {
    const lastElement = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastElement;
  }

  delete(index) {
    const deletedItem = this.data[index];
    this.shiftItems(index);
    return deletedItem;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const namesArr = new Array();

// push
namesArr.push('Ahmed');
namesArr.push('Bakr');
const length = namesArr.push('Mohamed');

console.log(length);
console.log('push: ', namesArr);

// access
// console.log(namesArr.access(2));

// pop
// const deleted = namesArr.pop();
// console.log(namesArr);
// console.log('pop : ', deleted);

// delete
const deleted = namesArr.delete(1);
console.log('delete: ', namesArr);
console.log('deleted item: ', deleted);
