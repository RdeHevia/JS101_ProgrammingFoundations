/*
INPUT: string
OUTPUT: array of strings
RULES:
  - function returns a list of all palindromic substrings
    * palindrome: it reads the same forward and backward
    * case sentive: 'AbcbA' is a palindrome. 'Abcba' is not
    * symbol sensitve: 'Abc-bA' isn't a palindrome
    * single character: Assume it's not a palidrome ('a' isn't a palindrome)
  - list to be sorted by:
    * order of appearance in the input string
  - duplicate substrings should be included multiple times
  - use function substrings() from previous exercise
ALGORITHM:
  FUNCTION palindromes (string)
    let allSubstrings = substrings (string);
    let arrayOfPalindromes = filter substrings that are palindromes:
      isPalindrom(substring) === true
    return arrayOfPalindromes
  FUNCTION isPalindrome (string)
    IF string.length % 2 === 0
      loopLimit = string.length / 2
    ELSE
      loopLimit = string.length / 2 - 1
    let 
    LOOP idx = 0 to loopLimit // use for
      IF string[idx] === string [length - 1 - idx]
        let palindromeTrueOrFalse = true
      ELSE
        let palindromeTrueOrFalse = false
        break;
    return let palindromeTrueOrFalse;
*/

function substringsAtStart (string) {
  let arrayOfSubstrings = [];
  let subString = '';
  string.split('').forEach(character => {
    subString += character;
    arrayOfSubstrings.push(subString);
  });
  return arrayOfSubstrings;
}

function substrings (string) {
  let arrayWithAllTheSubstrings = [];
  string.split('').forEach((_,idx) => {
    arrayWithAllTheSubstrings.push(substringsAtStart(string.slice(idx)));
  });
  return arrayWithAllTheSubstrings.flat(1);
}

function isPalindrome (string) {
  let loopLimit = Math.floor(string.length / 2);
  let isPalindromicString;
  for (let idx = 0; idx < loopLimit; idx += 1) {
    if (string[idx] !== string [string.length - 1 - idx]) {
      isPalindromicString = false;
      break;
    } else {
      isPalindromicString = true;
    }
  }
  return isPalindromicString;
}

function palindromes(string) {
  let allSubstrings = substrings (string);
  let allPalindromes = allSubstrings.filter(substring => {
    return isPalindrome(substring);
  });
  return allPalindromes;
}

console.log(palindromes('abcd'));
console.log(palindromes('madam'));
console.log(palindromes('hello-madam-did-madam-goodbye'));
console.log(palindromes('knitting cassettes'));