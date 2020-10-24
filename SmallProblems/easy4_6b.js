/*
- palindromic number -> true
- no palindromic number -> false
INPUT: integer
OUTPUT: boolean
ALGORITHM:
  1. Transform the integer into a string
  2. Check if the string is a palindrome:
    - Reverse the string. If the reversed string is equal to the original one ->
      true. Else -> false
*/

function isPalindromicNumber(integer) {
  let stringInteger = String(integer);
  return isPalindrome (stringInteger);
}

function isPalindrome (string) {
  return string === string.split('').reverse().join('');
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true