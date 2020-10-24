//////////
// 25 min total. Great!
// You are given an array of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// #Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

/*
INPUT: array of strings, number of consecutive strings
OUTPUT: string -> longest string formed with k-consetive strings of the array
EXAMPLE:
[abc, de, fghi, l], k = 2 -> defghi ; 3 iterations = 4 - 2 + 1
abc + de 
de + fghi <-
fghi + l
[abc, de, fghi, l], k = 3 -> 2 iterations = 4 - 3 + 1
abc + de + fghi <-
de + fghu + l
[n-elements] k -> n - k + 1 iterations
ALGORITHM:
  0. Check conditions. return '' if not met
  1. Find all the strings that can be formed with k-consecutive strings
  2. Return the longest one
findConsecutiveStrings(arrayOfStrings,numberOfConsecutiveStrings):
  1. Iterate from idx=0 to idx < length - numberOfConsecituveStrings - 1. For each iteration:
    - concatenate the strings from idx to idx + k - 1. Add to an empty array
  2. Return the array
*/

function findConsecutiveStrings(arrayOfStrings,numberOfConsecutiveStrings) {
  let consecutiveStrings = [];
  let loopLimit = arrayOfStrings.length - numberOfConsecutiveStrings + 1;
  for (let idx = 0; idx < loopLimit; idx += 1) {
    let stringsToConcatenate = arrayOfStrings.slice(idx, idx + numberOfConsecutiveStrings );
    consecutiveStrings.push(stringsToConcatenate.join(''));
  }
  return consecutiveStrings;
}

// console.log(findConsecutiveStrings(['abc', 'de', 'fghi', 'l'],1));

function longestConsec(arrayOfStrings,numberOfConsecutiveStrings) {
  let numberOfStrings = arrayOfStrings.length;
  if ((numberOfStrings === 0) || (numberOfConsecutiveStrings > numberOfStrings) || (numberOfConsecutiveStrings <= 0)) {
    return '';
  }
  let consecutiveStrings = findConsecutiveStrings(arrayOfStrings, numberOfConsecutiveStrings);
  return consecutiveStrings.sort((a,b) => b.length - a.length)[0];
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true
console.log(longestConsec([], 3) === ""); // true
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true