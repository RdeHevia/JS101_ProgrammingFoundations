/*
INPUT: array
OUTPUT: 2 arrays (1/2 , 1/2)
RULES:
  - even number of elements: [first half] [second half]
  - odd: [first half + 1] [second half]
  - empty: [] []
OTHER:
  - don't mutate the argument array
ALGORITHM:
  FUNCTION halvsies (array)
    arrayLength = length of the array
    IF arrayLength = 0 -> return [], []
    IF arrayLength is even -> return
      1st array from idx = 0 to arrayLength/2-1
      2nd array from idx = arrayLength/2 to arrayLength-1
    IF arrayLength is odd ->
      1st array from 0 to roundedUp(arrayLength/2) - 1
      2nd ....
*/

function halvsies(array) {
  let firstHalf = array.slice(0, Math.ceil(array.length / 2));
  let secondHalf = array.slice(Math.ceil(array.length / 2));

  return [firstHalf, secondHalf];

}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]

