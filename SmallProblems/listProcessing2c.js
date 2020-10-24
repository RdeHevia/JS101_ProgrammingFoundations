/*
INPUT: array of integers 0 to 19
OUTPUT: array of integers sorted based on the english word
EXAMPLE:
[0,1,2] // [zero, one, two] -> one, two, zero -> [1, 2, 0]
ALGORITHM:
  1. initialize an object with the integers and the english words: 0:zero
  2. Sort the array by the value of the object.
*/


function alphabeticNumberSort(arrayOfIntegers) {
  const integersEnglishWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
  'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
  'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  return arrayOfIntegers.sort((a,b) => {
    if(integersEnglishWords[a] < integersEnglishWords[b]) {
      return -1;
    } else if (integersEnglishWords[a] > integersEnglishWords[b]) {
      return +1;
    } else {
      return 0;
    }
  });
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));