/*
INPUT: array of integers from 0 to 19
OUTPUT: array of integers sorted based on its english word
RULES:
ALGORITHM:
  FUNCTION alphabeticNumberSort(array)
    initialize a object numberInEnglish: {1: 'one'...}
    use .sort((a,b)) to sort the array:
      IF numberInEnglish.a< numberInEnglish.b -> -1
      ELSE IF ... > .... -> +1
      ELSE -> 0
    return sorted array
*/

function alphabeticNumberSort(arrayOfIntegers) {
  let numbersInEnglish = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  let arrayOfIntegersSorted = arrayOfIntegers.slice().sort((a,b) => {
    if (numbersInEnglish[a] < numbersInEnglish[b]) {
      return -1;
    } else if (numbersInEnglish[a] > numbersInEnglish[b]) {
      return 1;
    } else {
      return 0;
    }
  });
  console.log(arrayOfIntegersSorted);
  return arrayOfIntegersSorted;
}

alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);