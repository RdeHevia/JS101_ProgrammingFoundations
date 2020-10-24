/*
Given a non-empty string check if it can be constructed by taking a substring of
it and appending multiple copies of the substring together. You may assume
the given string consists of lowercase Engish letters only

- Check if string can be constructued with substrings
Example 1:
Input: "abab"
Output: True
Explanation: It's the substring "ab" twice

Example 2:
Input: "aba"
Output: False

Example 3:
abcabcabc ->
  - ab -> ab + ab + ab .... === abc...? NO
  - abc -> abc + abc + abc -> abcabcabc -> YES

RULES:
Assumption: substrings is 2 or more characters
Assumption: only 1 substring is used to construct the string

ALGORITHM:
  1. Extract a substring of 2 characters
  2. Calculate the number of substrings: string.length / substring.length
    - If the number of repetions is not an integer -> check next substring
    - If substring + substring ... === string -> true
    - Else go to the next substring (3 characters) and repeat step 1 and 2.
  3. Repeat step 1 and 2 until number of repetions < 2
  4. If we get to the end of the loop -> return false
*/

function repeatedSubstringPattern(string) {
  if (string.length <= 2) return false;
  let stringComposedOfSubstrings = false;
  for (let idx = 2; idx < string.length; idx += 1) {
    let substring = string.slice(0,idx);
    let numberOfSubstrings = string.length / substring.length;
    if (Math.round(numberOfSubstrings) !== numberOfSubstrings) continue;
    if (substring.repeat(numberOfSubstrings) === string) {
      stringComposedOfSubstrings = true;
      break;
    }
  }
  return stringComposedOfSubstrings;
}

console.log(repeatedSubstringPattern("abab") === true);
console.log(repeatedSubstringPattern("aba") === false);
console.log(repeatedSubstringPattern("aabaaba") === false);
console.log(repeatedSubstringPattern("abcabcabcabc") === true);

// 28 min