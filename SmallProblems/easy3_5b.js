/*
INPUT: positive integer n
OUTPUT: triangle of stars (*) nxn
RULES:
  orientation:
    * -> 2 spaces + 1 *
   ** -> 1 space _ 2 *
  *** -> 3 stars
ALGORITHM:
  FUNCTION triangle(n)
    for each line we need to print a total of n characters
    SET numberOfSpaces = n - 1
    SET numberOfStars = 1
    LOOP until the numberOfStars = n
      PRINT ' ' numberOfSpaces-times + '*' numberOfStars-times
*/

function triangle(n) {
  for(let numberOfStars = 1; numberOfStars <= n; numberOfStars += 1) {
    let numberOfSpaces = n - numberOfStars;
    console.log(' '.repeat(numberOfSpaces) + '*'.repeat(numberOfStars));
  }
}

triangle(5);
triangle(9);