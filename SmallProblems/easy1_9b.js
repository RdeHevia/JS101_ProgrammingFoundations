/*
INPUT:
OUTPUT:
RULES:
  year < 1752 -> year is leap if divisible by 4
  year >= 1752 -> current algorithm
*/


function isLeapYear(year) {
  if (year < 1752) {
    console.log(!(year % 4));
    return !(year % 4);
  } else if (!(year % 4) && (year % 100)) {
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