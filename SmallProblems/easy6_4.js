/*
INPUT: non-empty string
OUTPUT: string (the middle character of the string)
RULES:
  odd length -> 1 character
  even length -> 2 middle characters
ALGORITHM:
  FUNCTION centerOf(sentence)
    IF sentence.length is odd:
      return sentence[floor(length / 2)]
    ELSE IF sentence.length is even:
      return sentence(length/2-1) + sentence(length/2)
*/

function centerOf (sentence) {
  if (sentence.length % 2 === 0) {
    return sentence.slice((sentence.length / 2) - 1, (sentence.length / 2) + 1);
  } else {
    return sentence[Math.floor(sentence.length / 2)];
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"