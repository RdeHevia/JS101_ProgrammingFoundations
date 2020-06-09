/*
INPUT: (array of numbers, array of numbers)
OUTPUT: new array with all the product combos
RULES:
  array1 = Ai
  array2 = Bj
  newArray.length = i * j
  newArray = C
  return value should be sorted in ascending order
ALGORITHM:
  FUNCTION multiplyAllPairs (array1, array2)
    let newArray = []
    LOOP i (use forEach)
      LOOP j (use forEach)
        Ck = Ai * Bj (use push)
    newArray.sort()
*/

function multiplyAllPairs(array1, array2) {
  let productCombos = [];
  array1.forEach(number1 => {
    array2.forEach(number2 => productCombos.push(number1 * number2));
  });
  return productCombos.sort((number1,number2) => number1 - number2);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));