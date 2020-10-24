/*
INPUT: string
OUTPUT: boolean
- palidrome -> true
- not palindrom -> false
RULES:
  palindrome reads the same forward and backwards
  case sensitive. e.g. Madam -> not a palindrome
  character matters (including spaces)
ALGORITHM:
  1. Compare the first character with the last one.
  2. If they are NOT equal -> the word is not a palindrome. If they
  are equal -> repeat step 1 for the next pair of characters
  3. If all the characters checked result to be equal -> the string is a palindrome

*/

function isPalindrome(sentence) {
  return sentence === sentence.split('').reverse().join('');
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true