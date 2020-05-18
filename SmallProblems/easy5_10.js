/*
INPUT: array of integers
OUTPUT:
RULES: function
  average of the components
  rounded down (integer value)
ALGORITHM:
  function average (arrayOfNumber)
    LOOP over the array elements and sum them -> sum
    average = sum / arrayOfNumbers.length
    return floor(average)
*/

function average(arrayOfIntegers) {
  let sum = arrayOfIntegers.reduce((acc,currentVal) => acc + currentVal);
  return Math.floor(sum / arrayOfIntegers.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40