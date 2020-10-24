/*
INPUT: year (integer)
OUTPUT: number of Fridays 13th
ALGORITHM:
1. Create a date object for each month of the given year: Month-13-Year
2. Check if that day was Friday
  - YES -> count it
  - NO -> not count it
3. Return the final count
*/

function fridayThe13ths(year) {
  let numberOfFridays13th = 0;

  for (let month = 0; month <= 11; month += 1) {
    let date = new Date(`${month}-13-${year}`);
    let dayOfTheWeek = date.getDay();
    let friday = 5;

    if (dayOfTheWeek === friday) {
      numberOfFridays13th += 1;
    }
  }

  return numberOfFridays13th;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2