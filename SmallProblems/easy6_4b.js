/*
INPUT: non-empty string
OUTPUT: middle character(s) of the string. (string)
RULES:
  - odd length -> return 1 character. 
      length = 5 -> index = 2 = (5 - 1) / 2 = (n - 1) / 2
  - even length -> return 2 characters. 
      length = 6 -> idx1 = 2 = 6 / 2 - 1 = n / 2 - 1
                    idx2 = 3 = 6 / 2 = n / 2 - 1 + 1
ALGORITHM:
  FUNCTION centerOf(string)
    - IF length of string is odd
        - return string[(n-1)/2]
    - ELSE
        - return string[...] + string[... + 1]
*/

function centerOf(string) {
  let length = string.length;
  if (length % 2 !== 0) {
    return string[(length - 1) / 2];
  } else {
    return string.slice((length / 2) - 1, (length / 2) + 1);
  }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"