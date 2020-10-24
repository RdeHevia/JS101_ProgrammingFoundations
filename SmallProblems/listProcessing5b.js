/*
INPUT: string
OUTPUT: array that contains all the substrings
  - All substrings that start at index 0, all substrings at idx 1, etc
ALGORITHM:
  1. For the first character:
    - Add all the possible substrings that start with that character into an
      array
  2. For each character:
    - Do the same, adding the substrings into the same array
  3. Order the substrings from shortest to longest
*/

function leadingSubstrings (string) {
  return string
    .split('')
    .map((_, idx) => string.slice(0, idx + 1));
}

function substrings (string) {
  let arrayOfSubStrings = [];
  for (let idx = 0; idx < string.length; idx += 1) {
    arrayOfSubStrings.push(...leadingSubstrings(string.slice(idx)));
  }
  return arrayOfSubStrings.sort();
}

console.log(substrings('abcde'));