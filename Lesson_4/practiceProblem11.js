let statement = "The Flintstones Rock";

function letterCounter (sentence) {
  let letterCount = {};
  let arrayOfLetters = sentence.split('');

  arrayOfLetters.forEach(character => {
    if (character !== ' ') {
      if (letterCount.hasOwnProperty(character)) {
        letterCount[character] += 1;
      } else {
        letterCount[character] = 1;
      }
    }
  });
  return letterCount;
}

let letterFrequency = letterCounter(statement);

console.log(letterFrequency);