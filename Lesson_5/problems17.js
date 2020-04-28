/*
DESCRIPTION:
  UUID: 
    - unique identifier
    - even for not syncronized computers
    - accomplished through randomization
INPUT: none
OUTPUT: string with hexadecimal characters: 8-4-4-4-12
RULES:
  Write a function that returns a UUID.
  UUID: 8-4-4-4-12 hexadecimal characters
  hexadecimal: 
    0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f
    a=10, b=11, c=12, ..., f=15
ALGORITHM:
  FUNCTION randomNumber(lowerBound, upperBound)
    SET number0to1 = Math.random()
    SET domain = upperBound - lowerBound + 1
    0 * 16 = 0
    1 * 16 = 16
    number0to1 * domain -> floor

  FUNCTION UUID_GENERATOR ()
    let arrayUUID = {}
    let hexaDecimalCharacters = {0:0, 1:1,...,10:a,...15:f}
    LOOP i=0 to i=31:
      number = randomNumber(0,16)
      arrayUUI.push(hexaDecimalCharacter[number])
    arrayUUI -> stringUUI separated like 8-4-4-4-12 and return it
*/

function randomNumber(lowerBound, upperBound) {
  let number0to1 = Math.random();
  let domainLength = upperBound - lowerBound + 1;
  return Math.floor(number0to1 * domainLength);
}

function UUID_GENERATOR () {
  let arrayUUID = [];
  const DASH_INDEX = [8, 12, 16, 20]
  const HEXADECIMAL_CHARS = {
    0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9,
    10: 'a', 11: 'b', 12: 'c', 13: 'd', 14: 'e', 15: 'f'
  }
  for (let idx = 1; idx <= 32; idx += 1) {
    let number = randomNumber (0, 15);
    arrayUUID.push(HEXADECIMAL_CHARS[number]);
    if (DASH_INDEX.includes(idx)) arrayUUID.push('-');
  }
  let stringUUID = arrayUUID.join('');
  return stringUUID;
}

console.log(UUID_GENERATOR());