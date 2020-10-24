//////////
// 30 min total
// You are given an array of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// #Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

/*
INPUT: array of strings
OUTPUT: string
  the longest string formed by the k consecutive strings
RULES:
  if the length of the array is 0 or leser than k -> return ''
  if k <= 0 -> return ''
EXAMPLE:
abc, de, fg ; n:3 k =2: 2 iterations = 3 - 2 + 1
  abc + de <- return this one (longer)
  de + fg
abc, de, fg, hj: n=4 k=3: 2 iterations = 4 - 3 + 1 = n - k + 1
abcdefg
defghj
ALGORITHM:
  1. Create an array with all the strings that can be formed with k-consecutive strings of the orignal array.
  2. Find the longest string and return it

getConsecutiveStrings:
  0. Check if n and k fulfill the conditions. Return '' if not.
  1. Iterate from idx 0 to idx n - k. For a string at idx i:
    - concatenate all strings from idx i to idx i + k - 1
    - add the resultant string to a new array
  2. return the new array
*/

function getConsecutiveStrings(arrayOfStrings, k) {
  let n = arrayOfStrings.length;

  if (n === 0 || k > n || k <= 0) {
    return [""];
  }

  let consecutiveConcatenatedStrings = [];

  for (let idx = 0; idx <= arrayOfStrings.length - k; idx += 1) {
    let consecutiveStrings = arrayOfStrings.slice(idx, idx + k);
    consecutiveConcatenatedStrings.push(consecutiveStrings.join(''));
  }
  console.log(consecutiveConcatenatedStrings);
  return consecutiveConcatenatedStrings;
}


function longestConsec(arrayOfStrings, k) {
  let newStrings = getConsecutiveStrings(arrayOfStrings, k );
  return newStrings.sort((a,b) => b.length - a.length)[0];
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