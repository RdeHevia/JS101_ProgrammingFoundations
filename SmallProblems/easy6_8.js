/*
INPUT: 2 integers (count,starting Number)
OUTPUT: array of integers
EXPLICIT RULES:
  - Return array should contain the same number of elements as count
  - The value of each element should be multiple of the first value
  - assume count >= 0
  - starting number can be any integer
  - if count is 0 -> return []
ALGORITHM:
  FUNCTION sequence (count, startingNumber)
    IF count === 0 -> return []
    ELSE
      SET arraySequence = []
      LOOP idx = 1, idx <= count  
        arraySequence.push(startingNumber * idx)
      RETURN arraySequence
*/

function sequence(count, startingNumber) {
  let sequenceOfMultiples = [];
  for (let idx = 1; idx <= count; idx += 1) {
    sequenceOfMultiples.push (startingNumber * idx);
  }
  return sequenceOfMultiples;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []