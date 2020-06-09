/*
INPUT: string
OUTPUT: array of substrings
RULES:
  return all the substrings of a string
  the strings should be ordered by position
  strings that start at the same character should be ordered by length
    a -> a, ab, abc, abcd, abcde
    b -> b, bc, bcd, bcde
    c -> cd, cde
    d -> d, de
    e -> e
 ALGORITHM:
  FUNCTION substrings (string)
    let arrayOfSubstrings = []
    LOOP idx = 0 to idx < string.lenth // Use split().forEach()
      let substring =  string.slice(idx)
      arrayOfSubstrings.push (substringsAtStart (substring))
    return flatten arrayOfSubstrings
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

console.log(substrings('abcde'));
console.log(substrings('madam'));