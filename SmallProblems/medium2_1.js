/*
INPUT: string
OUPTUT: object:
  - % lower cased letters
  - % upper cased letters
  - % characters that are neither
RULES:
  - percetages values -> 2 decimals of precission
  - no empty strings passed as arguments
ALGORITHM:
1. Determine the number of characters of the string
2. Count the number of letters that are lower cased
3. Same for upper cased letters
4. Number of special characters = length of string - lowercased - uppercased
5. Calculate the percentages: partialValue / totalValue * 100 and add to the
  object.
6. Return the information in the right format
*/

// eslint-disable-next-line max-lines-per-function
function letterPercentages(string) {
  let totalNumberOfChars = string.length;
  let numberOfLowerCasedLetters = (string.match(/[a-z]/g) || []).length;
  let numberOfUpperCasedLetters = (string.match(/[A-Z]/g) || []).length;

  let numberOfNonLetterCharacters = totalNumberOfChars - 
    numberOfLowerCasedLetters -
    numberOfUpperCasedLetters;

  const DIGITS_OF_PRECISION = 2;

  let percentageOfLowerCasedLetters = percentage(
    numberOfLowerCasedLetters,
    totalNumberOfChars,
    2
  );

  let percentageOfUpperCasedLetters = percentage(
    numberOfUpperCasedLetters,
    totalNumberOfChars,
    2
  );

  let percentageOfNonLetters = percentage(
    numberOfNonLetterCharacters,
    totalNumberOfChars,
    2
  );
  return {
    lowercase: percentageOfLowerCasedLetters,
    uppercase: percentageOfUpperCasedLetters,
    neither: percentageOfNonLetters,
  }
}

function percentage(partialValue, totalValue, digitsOfPrecision) {
  return ((partialValue / totalValue) * 100).toFixed(2);
}


console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }