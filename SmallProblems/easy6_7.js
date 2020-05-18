/*
INPUT: string: first name - space - last name
OUTPUT: string: last name - comma - space - first name
EXPLICIT RULES:
  see INPUT and OUTPUT
IMPLICIT RULES:
  Raul de Hevia Sanchez -> de Hevia Sanchez, Raul
ALGORITHM:
  FUNCTION swapName (fullName)
    find first space -> firstSpaceIndex
    lastName = substring to the right of firstSpaceIndex
    firstName = substring to the left of firstSpaceIndex
    return lastName + ', ' + firstName
*/

function swapName (fullName) {
  let firstSpaceIndex = fullName.split('').findIndex(char => char === ' ');
  let firstName = fullName.slice(0,firstSpaceIndex);
  let lastName = fullName.slice(firstSpaceIndex + 1);

  return `${lastName}, ${firstName}`;
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Roberts, Joe"