// 14min GOOD

/*
INPUT: 2 strings
OUTPUT: boolean
 - if a substring of str1 can be rearreanged to match str2 -> true
 - else -> false
RULES:
  - rearreanged possible if: all characters of str2 included in str1
  - pay attention to repeated characters
  - assume lowercase
  - assume no punctuation
EXAMPLES:
rkqodlw, world: (r)kq(o)(d)(l)(w) -> world world
ALGORITHM:
  1. Compare the characters of str2 with str1. For each character of str2:
    - If the character is included in str1: remove it from str1 and add it to a
      new string
  2. If at the end of the iteration str2 === the new string -> true. else -> false
*/

function scramble(str1, str2) {
  let matchingCharacters = '';
  str2.split('').forEach(char => {
    if (str1.includes(char)) {
      matchingCharacters += char;
      str1 = str1.replace(char,'');
    }
  });
  return matchingCharacters === str2;
}
console.log(scramble('javaass', 'jjss') === false);
console.log(scramble('rkqodlw','world') === true);
console.log(scramble('katas', 'steak') === false);
console.log(scramble('scriptjava','javascript') === true);

