/*
INPUT: string
OUTPUT: object
RULES:
  object that expresses the frequency with each letter occurs.
ALGORITHM/DATA STRUCTURE:
let characterFrequency = {}
  LOOP over string characters (use for)
    IF the character is a space -> continue;
    ELSE IF the character is NOT included in the object
      characterFrenquency[character] = 1
    ELSE
      characterFrenquency[character] += 1
*/
let statement = "The Flintstones Rock";
let letterFrenquency = {};

for (let index = 0; index < statement.length; index += 1) {
  let char = statement[index];
  if (char === ' ') continue;

  if (letterFrenquency.hasOwnProperty(char)) {
    letterFrenquency[char] += 1;
  } else {
    letterFrenquency[char] = 1;
  }

}

console.log(letterFrenquency);

