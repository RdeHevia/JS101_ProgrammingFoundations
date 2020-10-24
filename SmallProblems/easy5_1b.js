/*

INPUT:  floating point number
OUTPUT: string (the number in degrees-minutes-seconds format)
EXAMPLE:
  - 76.73 -> 76 deg 43.8 min -> 76 deg 43 min 48 sec
ALGORITHM:
  1. Round down the given number and assig it to the degrees.
  2. Calculate the difference btw the original number and the rounded one
  3. Multiply that differe by 60. Round it down and assign to the minutes
  4. Same for seconds.
  5. Return a string with the deg-min-sec format. (0-00-00)
    - Degrees -> no special format required
    - Minutes and seconds -> 2 digits required
      IF the number has only 1 digit -> add a zero at the beggining
*/

function dms(number) {
  let degrees = Math.floor(number);
  let remainderDegrees = number - degrees;
  let minutes = Math.floor(remainderDegrees * 60);
  let remainderMinutes = (remainderDegrees * 60) - minutes;
  let seconds = Math.round(remainderMinutes * 60);

  let degreesString = formatNumber(degrees,'°');
  let minutesString = formatNumber(minutes,`'`);
  let secondsString = formatNumber(seconds,`"`);

  return degreesString + minutesString + secondsString;
}

function formatNumber(number, dmsSymbol) {
  if (dmsSymbol === '°') {
    return String(number) + dmsSymbol;
  } else if (String(number).length === 1) {
    return '0' + String(number) + dmsSymbol;
  } else {
    return String(number) + dmsSymbol;
  }
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"