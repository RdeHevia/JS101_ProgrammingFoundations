/*
- randomly generates Teddy's age
- age to be a random number btw 20 and 120 INCLUSIVE
- logs it to the console.
INPUT: none (just function invocation)
OUTPUT: string, including Teddy's age
EXAMPLES (random number):
0 -> 20
x -> y = (120 - 20) * x + 20
0.5 -> 70
1 -> 120
ALGORITHM:
  1. Generate a random number between 20 and 120 inclusive
    - Round down the number to the nearest integer
  2. Print 'Teddy....age...' to the console.
*/

function printTeddysAge () {
  let age = randomInteger (20, 120);
  console.log(`Teddy is ${age} years old!`);
}

function randomInteger(lowerLimit, upperLimit) {
  let randomNumberBtw1And2 = Math.random();
  let randomNumber =
    ((upperLimit - lowerLimit) * randomNumberBtw1And2)
    + lowerLimit;
  let randomInteger = Math.floor(randomNumber);
  return randomInteger;
}

printTeddysAge();