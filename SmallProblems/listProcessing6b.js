/*
INPUT: string
OUTPUT: array of strings
  - all the substring palindromes of the string
RULES:
  - special characters counts for palindrome purposes
  - returned substrings should be sorted by appearance on the string
  - duplicate substrings should be included multiple times.
  - assume single characters are not palindromes
EXAMPLE:
  madam -> madam, ada
    ma
    mad
    mada
    madam <-
    ad
    ada <-
    adam
    d
    da
    dam
    ...

'abcd' -> 2 checks, idx 0 ->1 = length / 2 - 1
'abcde' -> 2 checks, idx 0 -> 1 = floor(length / 2) - 1
ALGORITHM:
  1. Generate all the possible substrings
    1.0. Create an empty array
    1.1. Loop over all characters of the string. For char at idx i:
      - Loop from that character to the end of the array. For the idx j:
        - Create a substring btw idx i and j. Add to the array.
    1.2.Return the array
  2. Return an array by filtering the substrings that are palindromes.
    For each substring, check if the substring is palindrome or not.
      2.1. first letter === last letter
      2.2. true -> continue with the next iteration: letterI === letterN-I
            false -> stop the loop and return false
*/

function generateSubstrings(string) {
  let arrayOfSubstrings = [];

  for (let idxI = 0; idxI < string.length; idxI += 1) {

    for (let idxJ = idxI; idxJ < string.length; idxJ += 1) {
      let substring = string.slice(idxI, idxJ + 1);
      arrayOfSubstrings.push(substring);
    }
  }
  return arrayOfSubstrings;
}

function isPalindrome (string) {
  if (string.length <= 1) {
    return false;
  }
  for (let idx = 0; idx < Math.floor(string.length / 2); idx += 1) {
    if (string[idx] !== string[string.length - idx - 1]) {
      return false;
    }
  }
  return true;
}

function palindromes (string) {
  let arrayOfSubstrings = generateSubstrings(string);

  return arrayOfSubstrings.filter(substring => isPalindrome(substring));
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]