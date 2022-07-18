// Problem : Given an array of integers, sort the array.
// Sorting can be "ASE" Or "DES"

// idea :
// [-6, 20, 8, -2, 4]
// 1) compare -6, 20, 20 > -6, do not any thing and move to next element
// compare 20,8 => 20 > 8 then swap => [-6,8,20,-2,4]
// compare 20, -2 => 20 > -2, the swap => [-6,8,-2,20,4]
// compare 20, 4 => 20 > 4, then swap => [-6,8,-2,4,20]
// End of array. Elements swapped ? Yes? then repeat the comparison

// [-6,8,-2,4,20]
// 2) compare -6,8 => -6 < 8 ,  do not any thing and move to next element
// compare 8,-2 => 8 > -2 => then swap => [-6, -2, 8, 4, 20]
// compare 8,4 => 8 > 4 => then swap [-6,-2,4,8,20]
// compare 8,20 => 8<20 , then don't do any thing
// End of array. Elements swapped ? Yes? then repeat the comparison

// [-6,-2,4,8,20]
// 3) compare -6, -2 => -6 < -2 => do not any thing and move to next element
// compare -2,4 => -2 < 4 => do not any thing and move to next element
// compare 4,8 => 4<8 => do not any thing and move to next element
// compare 8,20 => 8< 20 => do not any thing and move to next element
// End of array. Elements swapped ? No? then Array sorted successfully

// Big-O  => O(n^2)
function bubbleSort(list) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < list.length; i++) {
      if (list[i] > list[i + 1]) {
        let temp;
        temp = list[i];
        list[i] = list[i + 1];
        list[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return list;
}

console.log(bubbleSort([-6, 20, 8, -2, 4]));
console.log(bubbleSort([-6, 18, 5, -4, 3]));
