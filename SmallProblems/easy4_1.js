/*
INPUT: function execution
OUTPUT: string
RULES: program that logs Teddy age
  random number btw 20 to 120 (both inclusive)
  logs it to the console
ALGORITH:
  random0to1 = Math.random()
  domain length = end - origin = 120- 20 = 100
  randomAge = random0to1 *domainLength +origin
  e.g. 0.23456:
    0.23456 * domain length -> 23.456
    23.456 round -> 23
    23 + origin = 23 +20 =43
*/

function randomNumber (origin, end) {
  let domainLength = end - origin;
  return Math.round((Math.random() * domainLength)) + origin;
}

function printTeddyAge () {
  console.log(`Teddy is ${randomNumber(20,120)} years old!`);
}

printTeddyAge();