/*
INPUT: string
OUTPUT: boolean
RULES: write a function that:
  palindrome -> true
  no palindrome -> false
  it's case sensitive: madam -> true, Madam-> false
  all characters matter (spaces, commas, etc)
ALGORITHM:
  FUNCTION isPalindrome (text)
    LOOP idx = 0 to idx < text.length
      IF text[idx] !== text[text.length-1-idx] -> return false
    return true
*/

function isPalindrome(text) {
  for (let idx = 0; idx < text.length; idx += 1) {
    if (text[idx] !== text[text.length - 1 - idx]) return false;
  }
  return true;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true

function isPalindrome2 (text) {
  return text === text.split('').reverse().join('');
}

console.log(isPalindrome2('madam'));               // true
console.log(isPalindrome2('Madam'));               // false (case matters)
console.log(isPalindrome2("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome2('356653'));              // true