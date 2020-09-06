/*
INPUT: array
OUTPUT: new array
RULES. function that:
  * rotates an array (1st element to the end of the array)
  * don't modify the original array (use slice)
  * if input is not an array -> return undefined
  * if input is an empty array -> return []
ALGORITHM:
  FUNCTION rotateArray(array)
    IF array is not an array -> RETURN undefined
    ELSE IF array is empty -> RETURN []
    ELSE
      create a copy of the original array ->rotatedArray
      lastElement = first element of rotatedArray -> use shift
      push lastElement to the end of the array -> use push
      RETURN rotatedArray
*/

function rotateArray (array) {
  if (!Array.isArray(array)) {
    return undefined;
  } else if (array.length === 0) {
    return array;
  } else {
    let rotatedArray = array.slice();
    let lastElement = rotatedArray.shift();
    rotatedArray.push(lastElement);
    return rotatedArray;
  }
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]