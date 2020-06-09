/*
INPUT: sentence (string)
OUTPUT: sentence (string)
RULES:
  if word has 5 or more characters -> reverse
  else don't
ALGORITHM:
  function reverseWords (sentence)
    split sentence into words -> assign them to an array
    LOOP over words
      IF word.length >= 5:
        split into an array
        reverse array
        join
    join all the words
*/

function reverseWords (sentence) {
  let arrayOfReversedWords = sentence.split(' ').map(word => {
    if (word.length >= 5) {
      let reversedWord = word.split('').reverse().join('');
      return reversedWord;
    } else {
      return word;
    }
  });

  return arrayOfReversedWords.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"