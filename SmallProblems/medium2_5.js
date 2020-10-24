/*
featured number:
  - odd number N % 2 !== 0 
  - multiple of 7 -> N % 7 === 0
  - digits appear only once
INPUT: integer
OUTPUT: next feutured number greater than the input
  - Issue an error if there is no featured number
ALGORITHM:
  1. Find the next number that is multiple of 7. Make that the starting number
  2. Iterate from that number in increments of 7 until the followings condit.
    are met:
    - the number is odd: N % 2 !== 0
    - digits appear only once
      - Split the digits into an array
      - Sort the array
      - Compare all subsequent digits. If 2 digits are the same -> return false
      Else -> true
  3. Once the conditions are met -> return the featured number
  4. If the conditions aren't met and the number is greater than 9876543201 ->
    return there is no possible ....
*/

function featured(integer) {

  if (integer >= 9876543201) {
    return "There is no possible number that fulfills those requirements."
  }

  let nextMultipleOf7 = findNextMultipleOf7 (integer);
  let featuredNumber;
  let number = nextMultipleOf7;

  while(!featuredNumber) {
    if (isOdd(number) && digitsAppearOnlyOnce(number)) {
      featuredNumber = number;
    } 
    else {
      number += 7;
    }
  }

  return featuredNumber;
}

function findNextMultipleOf7 (integer) {
  let nextNumber = integer + 1;
  while (nextNumber % 7 !== 0) {
    nextNumber += 1;
  }
  return nextNumber;
}

function isOdd(number) {
  return number % 2 !== 0;
}

function digitsAppearOnlyOnce(number) {
  let arrayOfDigits = String(number).split('').sort();

  for (let idx = 0; idx < arrayOfDigits.length - 1; idx += 1) {
    if (arrayOfDigits[idx] === arrayOfDigits[idx + 1]) {
      return false;
    }
  }

  return true;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."