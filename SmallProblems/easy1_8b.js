/*
INPUT: year (positive integer)
OUTPUT: leap-> true, no leap-> false
RULES:
  Leap year:
    - IF year divisible by 4 except if year is divisible by 100
    - IF year the year is divisible by 100 and 400 -> leap year
    - IF year divisible by 100 -> not leap

    - IF year is multiple of 4 but not 100 -> leap
    - IF year is multiple of 400 -> leap
    - ELSE -> not leap
ALGORITHM:
  FUNCTION isLeapYear(year)
    Conditional
*/

function isLeapYear(year) {
  if (!(year % 4) && (year % 100)) {
    console.log(true);
    return true;
  } else if (!(year % 400)) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true
