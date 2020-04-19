/*
INPUT: positive integer (year)
OUTPUT: string (century)
RULES:
  years start at 1.
  end in 1: st
  end in 2: nd
  end in 3: rd
  else: th
ALGORITHM:
  IF year % 100 === 0
    century = (year - year % 100) / 100
  ELSE
    century = (year - year % 100) / 100 + 1
*/

let centurySuffix = (centuryNumber) => {
  switch (centuryNumber % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
};

let century = (year) => {
  let centuryNumber;

  centuryNumber = ((year - (year % 100)) / 100);
  if (year % 100) centuryNumber += 1;

  return centuryNumber + centurySuffix (centuryNumber);
};

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"