/*
INPUT: positive integer
OUTPUT: strings made of " " and "*"
RULES: Write a function that:
  Prints a straight triangle made of *.
  Each side has n "*". (n is the number of stars)
  Vertical side is at the right side
IMPLICIT RULES:
  The program prints n lines
  Each line has n characters:
    Line 1: has n-1 spaces and 1 star
    Line i: has n-i spaces and i stars
    Line n: has 0 spaces and n stars
ALGORITHM:
  FUNCTION triangle (nbrOfStars)
  LOOP i = 1 to i <= n
    PRINT " ".repeat(n-i) + "*".repeat(i)
*/

function triangle (nbrOfStars) {
  for (let index = 1; index <= nbrOfStars; index += 1) {
    console.log(" ".repeat(nbrOfStars - index) + "*".repeat (index));
  }
}

triangle(5);
triangle(9);