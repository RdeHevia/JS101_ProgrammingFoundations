/*
INPUT: array
OUTPUT: a new array
  - with the elements rotated. 1st -> last position on the array
                              2nd element -> 1st element in the array
RULES:
  - Don't mutate the original array
  - argument is not array -> return undefined
  - [] -> []
EXAMPLE:
  [1,2,3] -> [2, 3, 1]
    [2, 3], 1
    [2, 3, 1]
ALGORITHM:
1. Check if the argument is an array or not.
  - if its not -> undefined
2. Make a copy of the original array
3. We remove the first of the array
4. Add that element to the end of the array
5. We return the resulting array
*/

function rotateArray(array) {
  if (!Array.isArray(array)) {
    console.log(undefined);
    return undefined;
  } 

  if (array.length === 0) {
    console.log([]);
    return [];
  }

  let rotatedArray = array.slice();
  let lastElementOfTheArray = rotatedArray.shift();
  rotatedArray.push(lastElementOfTheArray);
  console.log(rotatedArray);
  return rotatedArray;
}



rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]