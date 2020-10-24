/*
INPUT: array of numbers or strings
OUTPUT: same array but sorted
RULES: 
  - mutates the array
  - it doesn't return any explict value
  - array contains at least 2 elements
  - stop iterating: when we go through the array and there is swaps
EXAMPLE:
 [3,2,1]
 0: 3, 2 -> 2, 3, 1
 1: 3, 1 -> 2, 1, 3
 2: 2, 1 -> 1, 2, 3
 ...
ALGORITHM:
1. LOOP until we don't need to swap any element of the array
  - LOOP over the elements of the array. At index idx:
    - If element[idx] > element[idx + 1] -> swap the elements
    - Else -> continue the loop
  - At the end of the inner LOOP, check if at least 2 elements have been swapped
    - YES -> reset idx to 0, and start the inner loop again
    - NO -> break the loop
*/

function bubbleSort(array) {
  while (true) {

    let twoOrMoreElementsHasBeenSwapped = false;

    for (let idx = 0; idx < array.length - 1; idx += 1) {
      if (array[idx] > array[idx + 1]) {
        [array[idx],array[idx + 1]] = [array[idx + 1],array[idx]];
        twoOrMoreElementsHasBeenSwapped = true;
      }
    }

    if (!twoOrMoreElementsHasBeenSwapped) break;
  }
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]