/*
INPUT: 3 positive integers
OUTPUT: string
RULES: 
  (nbr1, nbr2, nbr3) -> average = (nbr1+nbr2+nbr3)/3
  A, B,...F based on score
  assume arguments are positive integers smaller than 100.
ALGORITHM:
  FUNCTION getGrade (score1, score2, score3)
    SET average = (score1 + score2+ score3)/3
    IF blabla
*/

function getGrade (score1, score2, score3) {
  let averageScore = (score1 + score2 + score3) / 3;
  let averageScoreRoundedDown = Math.floor(averageScore / 10) * 10

  switch(averageScoreRoundedDown) {
    case (90):
      return 'A';
    case (80):
      return 'B';
    case (70):
      return 'C';
    case (60):
      return 'D';
    default:
      return 'F';
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"