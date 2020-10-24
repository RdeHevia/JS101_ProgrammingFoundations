// 29min. good

//Find the length of the longest substring in the given string that is the same in reverse.

//As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

//If the length of the input string is 0, return value must be 0.

//Example:
//"a" -> 1
//"aab" -> 2
//"abcde" -> 1
//"zzbaabcd" -> 4
//"" -> 0
/*
INPUT: string
OUTPUT: integer
  length of the longest palindrome of the given string
EXAMPLE:
  ababcccgs -> abab ccc -> 4 3 -> return 4
  'a a' -> 3
  '' -> 0
RULES:
  - palindromic characters
ALGORITHM:
  1. Find all the palindromes of the string.
  2. Return the length of the longest one
findAllPalindromes:
EXAMPLE (check if string is a palindrome):
  aba === reverse(aba) -> palindrome
  abc !=== reverse(abc) = cba -> not a palindrome
EXAMPLE:
  abac:
    a: a, ab, abc, abac
    b: b, ba, bac
    a: a, ac
    c: c
ALGORITHM:
  1. Find all the possible substrings with consecutive characters of the given
    string. Store the into an array [substrings1, substring2...]
  2. Filter the substrings that are palindromes. Return the new array.
findSubstrings(string):
  1. Iterate over the characters of the string. For a character at index idxI:
    - Create a substring with the characters between idxI and idxJ
    - Add the substring into the returning array
*/

function findLongestString(arrayOfStrings) {
  return arrayOfStrings.sort((a,b) => b.length - a.length)[0];
}

function findSubstrings(string) {
  let substrings = [];
  for (let idxI = 0; idxI < string.length; idxI += 1) {
    for (let idxJ = idxI; idxJ < string.length; idxJ += 1) {
      substrings.push(string.slice(idxI, idxJ + 1));
    }
  }
  return substrings;
}
findSubstrings('abac');
function findAllPalindromes(string) {
  let substrings = findSubstrings(string);
  return substrings.filter(substring => isPalindrome(substring));
}

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

function longestPalindrome(string) {
  if (string.length === 0) {
    return 0;
  }
  let palindromes = findAllPalindromes(string);
  return findLongestString(palindromes).length;
}

console.log(longestPalindrome("a")); // 1
console.log(longestPalindrome("aa")); // 2
console.log(longestPalindrome("baa")); // 2
console.log(longestPalindrome("aab")); // 2
console.log(longestPalindrome("baabcd")); // 4
console.log(longestPalindrome("baablkj12345432133d")); // 9