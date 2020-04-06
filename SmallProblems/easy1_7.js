/*
Input: 2 strings
Output: 1 string
Rules: Write a function that:
  - Take 2 strings as arguments
  - determines the longer of the 2 strings
  - concatenates short + long + short
  - assume strings are of different lenghts
Algorithm:

  ~ FUNCTION shortLongShort (string1, string2)
    - let longString
    - let shortString
    -IF string1.length > string2.length
      - longString=string1
      - shortString=string2
    -ELSE
      - longString=string2
      - shortString=string1
    -RETURN shortString + longString + shortString
*/

function shortLongShort (string1, string2) {
  let longString;
  let shortString;

  if (string1.length >= string2.length) {
    longString = string1;
    shortString = string2;
  } else {
    longString = string2;
    shortString = string1;
  }
  return shortString + longString + shortString;
}

console.log(shortLongShort('abc ', 'defgh '));    // "abcdefghabc"
console.log(shortLongShort('abcde ', 'fgh '));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"
