/*
QUESTIONS:
INPUT: string
OUTPUT: number
RULES: Write a function that...
  - takes a string as an argument
  - returns its ASCII value
  - ASCII(string) = ASCII(string(0)) + ASCII(string(1)) +...
ALGORITHM:
  - function asciiValue (str)
    - SET asciiSum = 0;
    - LOOP char = 0 to char < str.length
      - asciiSum += str.charCodeAt(char)
    - return asciiSum
*/

function asciiValue (string) {
  let asciiSum = 0;
  for (let index = 0; index < string.length; index += 1) {
    asciiSum += string.charCodeAt(index);
  }
  return asciiSum;
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0