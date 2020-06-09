/*
INPUT: array of integers between 0 and 19 
OUTPUT: array of integers sorted
RULES:
  sorting based on the English word for each number
  Assumed: return a new array (it doesn't mutate the caller)
DATA STRUCTURE / ALGORITHM:
FUNCTION aplhabeticNumberSort(arrayOfIntegers)
  SET numberEnglishWords = {0: 'zero',...}
  Use arrayOfIntegers.sort() to compare the values of the array referencing to
  the object values.
  Return new array
*/

function alphabeticNumberSort(arrayOfIntegers) {
  let numbersInWordsString = 'zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen';
  let numbersInWordsArray = numbersInWordsString.split(', ');
  console.log(numbersInWordsArray);
  console.log(numbersInWordsArray[7])
  let sortedArray = arrayOfIntegers.slice().sort((a,b) => {
    return numbersInWordsArray[a] - numbersInWordsArray[b];
  });
  console.log(sortedArray);
  return sortedArray;
}

alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
