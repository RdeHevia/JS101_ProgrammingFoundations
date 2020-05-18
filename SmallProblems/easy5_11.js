/*
INPUT: integer
OUTPUT: string
RULES:
  Take positive and negative integers (minutes)
  Return the time in 24h format (hh:mm)
  Can NOT use Date
OBSERVATIONS:
  1day=24h=1440 min
  -1437min / 60 = - 23.95; 24- 23.95 = 0.05 h = 3min -> 00:03
  3000 min / 60 = 50h; 50 / 24 = 2.0833 days; 0.0833 days * 24 = 2h
  nbrOfMin = 3000
  nbrOfHour = 50
  nbrOfDay = 2.0833
  hoursInADay = (nbrOfDay - Floor(nbrOfDay)) * 24 = 2h

  nbrOfMin = 35
  nbroOfHour = 0.5833
  nbrOfDay = 0.02431
  hoursInADay = (nbrOfDay - Floor(nbrOfDay)) * 24 = 0.5833
  hours = Floor (hoursInADay) = 0
  minutes = (hoursInADay - hours) * 60 = 35
  hours : minutes

  nbrOfMin = -1437
  nbrOfHours = -23.95
  nbrOfDays = -0.9979
  hoursInADay = (nbrOfDay - Floor(nbrOfDay)) * 24 = (-0.9979 -(-1)) * 24
ALGORITHM:
  FUNCTION timeOfDay (timeInMin)
    SET hours
    SET minutes
    SET nbrOfDays = timeInMin / 60 / 24
    SET hoursInADay = (nbrOfDay - Floor(nbrOfDay)) * 24
    SET hours = Floor (hoursInADay)
    SET minutes = (hoursInADay - hours) * 60
    pad zeros for hours and minutes
    return hours : minutes
*/

function padOneZero (integer) {
  let integerString = String(integer);
  if (integerString.length < 2 && integer < 10) {
    integerString = '0' + integerString;
  }
  return integerString;
}

function timeOfDay (timeInMin) {
  const MIN_PER_HOUR = 60;
  const HOURS_PER_DAY = 24;
  let timeInDays = (timeInMin / MIN_PER_HOUR) / HOURS_PER_DAY;
  let hoursInOneDay = (timeInDays - Math.floor(timeInDays)) * HOURS_PER_DAY;
  let hours = Math.floor (hoursInOneDay);
  let minutes = Math.round((hoursInOneDay - hours) * MIN_PER_HOUR);
  return padOneZero(hours) + ':' + padOneZero(minutes);
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");