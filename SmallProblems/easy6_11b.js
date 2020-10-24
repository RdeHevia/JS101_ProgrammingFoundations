/*
INPUT: array
OUTPUT: the same array reversed
RULES:
  - We can't use the reverse method
  - reverse the elements in place Mutates the calling array
  - Returns the mutated array
EXAMPLE:
  - [a, b, c, d] -> [d, c, b, a]
    U[0] -> U[3]
    U[3] -> U[0]
    U[1] -> U[2]
    Generalized:
    U[i] -> U[3 - i] 3 (array length - 1)
    U[3 - i] -> U[i]
ALGORITHM:
  1. Iteration idx 0:
    - Assign the first element to an auxiliar variable
    - Assign the last element to the first one
    - Assign the element saved in the auxiliar variable to the last element of
      the array
  2. Iteration i:
    U[i] -> aux
    U[array.length - 1 - i] -> U[i]
    aux -> U[array.length - 1 - i]
  3. Repeat N times
    - array length even -> N = array.length / 2
    - odd  -> N = (array.length - 1) / 2 or roundDonw(array.length / 2 )
*/

function reverse(array) {
  let limit = Math.floor(array.length / 2);

  for (let leftIdx = 0; leftIdx < limit; leftIdx += 1) {
    let rightIdx = array.length - 1 - leftIdx;
    let swap = array[leftIdx];
    array[leftIdx] = array[rightIdx];
    array[rightIdx] = swap;
  }
  return array;
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true