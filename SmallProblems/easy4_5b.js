/*
palindrome -> returns true
not palindrome -> returns false
RULES:
case insensitive -> Madam is a palindrome
ignore all non-alphanumeric characters -> Ma ;aM -> true

ALGORITHM:
1. Lowercase the string
2. Remove all non-alphanumeric characters
3. Compare the first and last letter:
  - if they are different -> the word is not a palindrome
  - if they are the same -> go to the next iteration
*/

function isRealPalindrome(sentence) {
  const ALPHANUMERIC = 'abcdefghijklmnopqrstuvwxyz1234567890';
  let lowerCasedSentence = sentence.toLowerCase();
  let alphanumericOnlySentence = lowerCasedSentence
    .split('')
    .filter(char => ALPHANUMERIC.includes(char))
    .join('');

  return isPalindrome(alphanumericOnlySentence);
}

function isPalindrome(sentence) {
  return sentence === sentence.split('').reverse().join('');
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false