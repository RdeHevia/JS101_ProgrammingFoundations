/*
PROBLEM: function that
  - calculates the average of 3 scores
  - returns the letter (grade)
INPUT: 3 numbers
OUTPUT: string (A, B....)
RULES:
  - input is from 0 to 100
ALGORITHM:
  FUNCTION getGrade (score1, score2, score3)
    calculate the score average = (score1 + score2 + score) / 3
    compare the number of the associated score ranges -> assign a grade (letter)
    return the grade
*/

function getGrade(score1, score2, score3) {
  let averageScore = (score1 + score2 + score3) / 3;
  if (averageScore < 60) {
    return 'F';
  } else if (averageScore < 70) {
    return 'D';
  } else if (averageScore < 80) {
    return 'C';
  } else if (averageScore < 90) {
    return 'B';
  } else {
    return 'A';
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"