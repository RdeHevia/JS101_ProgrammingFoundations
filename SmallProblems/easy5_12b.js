/*
2 functions that takes the time in 24h format HH:MM and returns the time in minutes

EXAMPLES:
after(12:34) -> 12*60 + 34 = 754
before(12:34) -> 24*60 - 12*60 - 34 = 1440 - 754 = 686
after(00:00) -> 0*60 + 0 = 0
before(00:00) -> 0
after(24:00) -> 0
before 24:00 -> 0

ALGORITHM:
1. Convert HH into a number. Convert MM into a number.
2. Calculate numberOfMinutes: HH*60 + MM
3. If numberOfMinutes === 1440 or 0 -> return 0
After:
  4. return numberOfMinutes
Before:
  4. return 1440 - numberOfMinutes
*/

function afterMidnight(hoursAndMinutes) {
  let numberOfMinutes = from24HourFormatToMinutes(hoursAndMinutes);
  if (numberOfMinutes === 1440) {
    return 0;
  } else {
    return numberOfMinutes;
  }
}

function beforeMidnight(hoursAndMinutes) {
  let numberOfMinutes = from24HourFormatToMinutes(hoursAndMinutes);
  if (numberOfMinutes === 0) {
    return 0;
  } else {
    return 1440 - numberOfMinutes;
  }
}

function from24HourFormatToMinutes(hoursAndMinutes) {
  let hours = parseInt(hoursAndMinutes.slice(0,2),10);
  let minutes = parseInt(hoursAndMinutes.slice(3),10);
  return (hours * 60) + minutes;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);