/*
INPUT: string
OUTPUT: array of substrings
EXAMPLE:
abc -> a, ab, abc
a -> a
ALGORITHM:
  1. For the first element of the array:
    - Create a substring with the first character
    - Add the substring to a new array
  2. For the element N:
    - Create a substring with the characters from 1 to N
    - Add the substring into the new array
  3. Return the array
IMPLEMENTATION using map, filter or reduce.
  1. 'abc' -> [a, b, c]
  2. [].map (element => {
    substring = substring + element
    return substring
  })
*/

function leadingSubstrings (string) {
  return string
    .split('')
    .map((_, idx) => string.slice(0, idx + 1));
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]