// Problem- Given two finite non-empty sets, find their cartesian product
// in mathematics the cartesian product of two sets A and B, denoted A*B, is the set of all ordered pair (a,b)
// example: A= [1,2] , B= [3,4]
// CartesianProduct = [[1,3], [1,4], [2,3], [2,4]]

function cartesianProduct(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }

  return result;
}

const a = [1, 2];
const b = [3, 4, 5];

// Big-o = O(n*m)
// if length or two arrays are equals then Big-o = O(n^2)
console.log(cartesianProduct(a, b));
