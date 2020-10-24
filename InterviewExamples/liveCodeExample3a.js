/*
Given 2 strings, your job is to find out if there is a substring that appears
in both strings. You will return true if you find a substring that appears in
both strings, or false if you do not. We only care about substrings that
are longer than one letter long.
*/

/*
INPUT: string, string
OUTPUT: boolean
  - a substring that appears in both strings -> true
  - else -> false
RULES:
  - substring has 2 or more characters 
  - case insensitive
EXAMPLES:
  Something, Fun -> n -> false
  Something, Home -> ome -> true
  BANANA, banana -> true
  1234567, 541265 -> 12 -> true
EXAMPLE all substrings:
  - abcd: 
  0  ab, abc, abcd, 
  1  bc, bcd, 
  2  cd
ALGORITHM:
  1. Find all the substrings for one of the words (the second one)
    - Iterate from idx 0 to idx = length of the string - 1. For each character:
      - Find all the substrings that start with that character
        - Create a substring that starts from that character
        - Slice the substrings
  2. For each substring, check if this one is contained in the other string
    - YES -> true
    - ELSE -> false
*/

function subsequentSubstringsFromIndex(idx,string) {
  let arrayOfSubstrings = [];

  for (let idx2 = idx + 2; idx2 <= string.length; idx2 += 1) {
    arrayOfSubstrings.push(string.slice(idx, idx2));
  }
  return arrayOfSubstrings;
}

// console.log(findAllSubstrings('abcd'));

function findAllSubstrings(string) {
  let arrayOfSubstrings = [];
  for (let idx = 0; idx < string.length - 1; idx += 1) {
    arrayOfSubstrings.push(...subsequentSubstringsFromIndex(idx,string));
  }
  return arrayOfSubstrings;
}

function substringTest(string1, string2) {
  let substrings = findAllSubstrings(string2.toLowerCase());
  for (let idx = 0; idx < substrings.length; idx += 1) {
    if (string1.toLowerCase().includes(substrings[idx])) {
      return true;
    }
  }

  return false;
}


console.log(substringTest('Something', 'Fun') === false);
console.log(substringTest('Something', 'Home') === true);
console.log(substringTest('Something', '') === false);
console.log(substringTest('', 'Something') === false);
console.log(substringTest('BANANA', 'banana') === true);
console.log(substringTest('test', '111t') === false);
console.log(substringTest('', '') === false);
console.log(substringTest('1234567', '541265') === true);
console.log(substringTest('supercalifragilisticexpialidocious', 'ca') === true);