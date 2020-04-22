/*
INPUT: string
OUTPUT: boolean
RULES: write a function that:
  palindrome -> true
  no palindrome -> false
  no case sensitive: madam -> true, Madam-> true
  no alphanumeric characters are ignored (spaces. commas,...)
ALGORITHM:
  FUNCTION isPalindrome (text)
    alphabet = 'abcdef...12345...'
    textLowerCased = text.toLowerCase()
    Convert textLowerCased to array -> textArray
    filter elements included in textArray:
      if element included in alphabet -> add to filteredTextArray
      else -> no filter
    transform filteredTextArray to text and compare it with its reverse part.
*/

function isRealPalindrome (text) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz1234567890';
  let textLowerCasedArray = text.toLowerCase().split('');
  let filteredTextArray = textLowerCasedArray.filter(character => {
    return alphabet.includes(character);
  });
  return filteredTextArray.join('') === filteredTextArray.reverse().join('');
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false