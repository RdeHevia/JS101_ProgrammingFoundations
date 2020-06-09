/*
INPUT: string
OUTPUT: array of substrings
RULES:
  return all the substrings that start from the beg of the string
  ordered from shortest to longest
ALGORITHM:
  FUNCTION substringsAtStart (string)
    SET arrayOfSubStrings = []
    SET substring = ''
    LOOP idx = 0 to string.length - 1 // use split().forEach
      substring += string[idx];
      arrayOfSubStrings.push(substring)
    RETURN arrayOfSubStrings;
*/

function substringsAtStart (string) {
  let arrayOfSubStrings = [];
  let subString = '';
  string.split('').forEach(character => {
    subString += character;
    arrayOfSubStrings.push(subString);
  });
  return arrayOfSubStrings;
}

console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]