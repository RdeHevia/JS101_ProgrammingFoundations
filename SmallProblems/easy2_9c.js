/*
INPUT: integer in string
OUTPUT: integer
EXAMPLE:
321: 3 * 10**2 + 2 * 10**1 + 1 * 10**0; idx=n -> 10**(length - 1 + n)
ALGORITHM:
1. Split the digits of the string and transform to number format
2. For each digit, multiply by 10**(length - 1 + n)
3. Add all the numbers together
*/

function digitCharToNumber(char) {
  const DIGITS = {
    0:0, 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9
  };
  return DIGITS[char];
}

function generateBase10(numberOfDigits) {
  let base10 = [];
  for (let idx = numberOfDigits - 1; idx >= 0; idx -= 1) {
    base10.push(10 ** idx);
  }
  return base10;
}

function sumProduct(array1, array2) {
  let product = array1.map((num1,idx) => {
    let num2 = array2[idx];
    return num1 * num2;
  });
  return product.reduce((sum,num) => sum + num);
}

function stringToInteger(integerInStringFormat) {
  let digitsOfTheNumber = integerInStringFormat.split('')
    .map(digitChar => digitCharToNumber(digitChar));

  let numberOfDigits = digitsOfTheNumber.length;
  let base10 = generateBase10(numberOfDigits);
  let number = sumProduct(digitsOfTheNumber, base10);
  return number;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true