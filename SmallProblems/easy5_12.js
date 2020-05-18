function afterMidnight (timeIn24hFormat) {
  const MIN_PER_HOUR = 60;
  let hours = +timeIn24hFormat.slice(0,2);
  let minutes = +timeIn24hFormat.slice(-2);
  if (hours === 24) {
    return 0;
  } else {
    return (hours * MIN_PER_HOUR) + minutes;
  }
}

function beforeMidnight (timeIn24hFormat) {
  const MIN_PER_HOUR = 60;
  const HOUR_PER_DAY = 24;
  const MIN_PER_DAY = MIN_PER_HOUR * HOUR_PER_DAY;
  if (afterMidnight(timeIn24hFormat) === 0) {
    return afterMidnight(timeIn24hFormat);
  } else {
    return MIN_PER_DAY - afterMidnight(timeIn24hFormat);
  }
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);

console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);