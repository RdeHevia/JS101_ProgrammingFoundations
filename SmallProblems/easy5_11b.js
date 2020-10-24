/*
number of minutes:
  - positive -> after midnight
  - negative -> before midnight
INPUT: integer (number of minutes)
OUTPUT: string
  - time in 24h format
EXAMPLES:
  0 -> 00:00
  3000min -> 50h = 2 days 2h -> 02:00
  -1437 min -> -23.95h -> 24 - 23.95 = 0.05h = 3 min -> 00:03
  -4231 -> -2.94 days = - 2 days 22.5 hours -> 1.483h = 1h 29min
ALGORITHM:
1. Divide the number of minutes by (60 min/h * 24 h/day = 1440 min/day).
2. Discard the integer part of the time in days. In other words, keep only the
  remainder.
3. Calculate the number of hours, multiplying by 24 h/day.
4. If number of hours:
  - is positive -> OK
  - is negative -> positive number of hours = 24 + negative number of hours
5. Keep the integer part of the number. That will be the hours hh.
6. Multiply the remainder by 60 min/h. That will be the minutes mm.
7. Format the numbers
  - transform the number into a string
  - if the length of the string is 1 -> add a 0
  - else -> do nothing
8. Print them to the console
*/

function timeOfDay(numberOfMinutes) {
  const MIN_IN_AN_HOUR = 60;
  const HOUR_IN_A_DAY = 24;
  const MIN_IN_A_DAY = MIN_IN_AN_HOUR * MIN_IN_AN_HOUR;

  let numberOfHours = (numberOfMinutes / MIN_IN_AN_HOUR) % HOUR_IN_A_DAY;
  let timeInHours;
  if (numberOfHours >= 0) {
    timeInHours = numberOfHours;
  } else {
    timeInHours = 24 + numberOfHours;
  }

  let [hours, minutes] = splitTimeInHoursIntoHoursMinutes (timeInHours);
  return formatTime(hours,minutes);
}

function splitTimeInHoursIntoHoursMinutes (timeInHours) {
  const MIN_IN_AN_HOUR = 60;
  let hours = Math.floor(timeInHours);
  let minutes = Math.round((timeInHours - hours) * MIN_IN_AN_HOUR)
  return [hours, minutes];
}

function formatTime(hours,minutes) {
  let formatedHours = twoDigits(hours);
  let formatedMinutes = twoDigits(minutes);
  return formatedHours + ':' + formatedMinutes;
}

function twoDigits(number) {
  let numberInStringFormat = String(number);

  if (numberInStringFormat.length === 1) {
    numberInStringFormat = '0' + numberInStringFormat;
  }

  return numberInStringFormat;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");