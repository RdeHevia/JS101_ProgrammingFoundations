/*
INPUT: array of numbers
OUTPUT: string
  number with 3 decimals
RULES:
  multiply all numbers / (number of elements) -> rounded to 3 decimals
ALGORITHM:
  let multiplication = 1;
  LOOP 0 to array.length
    multiplication *= number[i]
  let roundadedProductAverage = Round(multiplication / array.length * 1000) / 1000
  transform number to string and fixed 3 decimals -> return
*/

function multiplicativeAverage(array) {
  let multiplication = 1;
  array.forEach(num => {
    multiplication *= num;
  });
  return (multiplication / array.length).toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"