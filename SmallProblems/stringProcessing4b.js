/*
INPUT: string
OUTPUT: string
  - First letter of each word capitalized
  - Words are separated by spaces
ALGORITHM:
  1. Split the string into words.
  2. Capitalize the first letter of each word.
  3. Join wall the words together, separated by spaces.
  4. Return the string.
*/

function wordCap(string) {
  return string
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'