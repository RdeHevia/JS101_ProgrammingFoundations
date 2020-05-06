/*
INPUT: angle (float)
OUTPUT: angle in degrees, minutes, seconds (string)
RULES: use degree, minute and second symbols.
ALGORITHM:
  FUNCTION dms (angleInDegrees)
    degrees <- substract the decimals1 of angleInDegrees and round it
    minutes <- decimals1*60 - decimals2, and round it
    seconds <- decimals2*60, and round it
    join everything together with the characters
*/

function dms (angleInDegrees) {
  let degrees = Math.floor(angleInDegrees);
  let rest = angleInDegrees - degrees;
  let minutes = Math.round(Math.floor(rest * 60));
  rest = (rest * 60) - minutes;
  let seconds = Math.round(Math.floor(rest * 60));
  return ''.concat(
    degrees,`°`, padZeros(minutes.toString()), `'`,
    padZeros(seconds.toString()), `"`
  );
}

function padZeros (numString) {
  if (numString === '0') {
    return numString + '0';
  } else {
    return numString;
  }
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"