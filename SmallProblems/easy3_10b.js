/*
INPUT: number (year)
OUTPUT: string (century)
  - century number + 'st', 'nd', 'rd' or 'th', as appropiated.
EXAMPLES:
  2000 -> 20th : 2000 / 100 = 20
  2001 -> 21st // 2001 / 100 = 20.XX -> round up -> 21
  12 -> 1st // 12 / 100 = 0.XX -> round up -> 1
ALGORITHM:
  1. Determine century a year belongs to:
    a) Divide the year by 100
    b) round up the resulting number
  2. Transform the century number into a string format
  3. Based on the first digit of century, add 'st', 'nd'... to the string
  4. Return the string
*/

function century(year) {
  let centuryNumber = Math.ceil(year / 100).toString();
  let firstDigit = centuryNumber[centuryNumber.length - 1];
  let century;
  switch (firstDigit) {
    case '1':
      century = centuryNumber + 'st';
      break;
    case '2':
      century = centuryNumber + 'nd';
      break;
    case '3':
      century = centuryNumber + 'rd';
      break;
    default:
      century = centuryNumber + 'th';
  }
  console.log(century);
  return century;
}
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"