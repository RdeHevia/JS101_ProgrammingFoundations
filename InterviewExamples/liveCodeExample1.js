/* You have to create a function that takes a positive integer number and
returns the next bigger number formed by the same digits:

12 -> 21
513 -> 531
2017 -> 2071
If no bigger number can be composed using those digits, return -1:
  9 -> -1
  111 -> -1
  531 -> -1
INPUT: integer
OUTPUT: integer
  - next bigger number formed by the same digits
EXAMPLE:
  513 -> 531
  113 -> 131
  131 -> 311
  1: *311*, 131
  3: 1 13
  1: 13 1
  1321 -> 2311
  1: 3121, *2311*
  3: 1 231, 1 123
  2: 13 12
  1: 132 1
ALGORITHM:
  1. For each digit, find all the possible permutations that can be formed
    with the contiguous numbers.
  2. Once we have all the permutations, filter the numbers that are bigger than
    the original number.
  3. Of the filtered number, return the smalllest one.
findAllPermutations:
  1. Transform the integer into an string
  2. Loop over the digits. For each digit at index idxI:
    Swap the digit at idxI with the digit at idxJ. (idxJ: idxI to length - 1)
  3. Return the result array
DATA STRUCTURE:
  numberPermutations: [permuntaton1, permunation2...] (numbers)
*/

function swapCharacters(characters, idxI, idxJ) {
  let arrayOfCharacters = characters.split('');
  let digitAtIndexI = arrayOfCharacters[idxJ];
  let digitAtIndexJ = arrayOfCharacters[idxI];
  arrayOfCharacters[idxI] = digitAtIndexI;
  arrayOfCharacters[idxJ] = digitAtIndexJ;
  return arrayOfCharacters.join('');
}

//console.log(swapCharacters('abcd',0,1));

function findAllPermutations(integer) {
  let digits = String(integer);
  let permutations = [];

  for (let idxI = 0; idxI < digits.length; idxI += 1) {
    for (let idxJ = idxI + 1; idxJ < digits.length; idxJ += 1) {
      permutations.push(Number(swapCharacters(digits,idxI,idxJ)));
    }
  }
  return permutations;
}
console.log(findAllPermutations(131));
function  nextBiggerNum(integer) {
  let numberPermutations = findAllPermutations(integer);
  let biggerNumbers = numberPermutations.filter(num => num > integer);
  return (biggerNumbers.sort((a,b) => a - b)[0] || -1);
}

console.log(nextBiggerNum(9) === -1);
console.log(nextBiggerNum(12) === 21);
console.log(nextBiggerNum(513) === 531);
console.log(nextBiggerNum(2017) === 2071);
console.log(nextBiggerNum(111) === -1);
console.log(nextBiggerNum(531) === -1);
console.log(nextBiggerNum(123456789) === 123456798);