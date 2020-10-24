/*
INPUT: firstName lastName
OUTPUT: lastName, firstName
ALGORITHM:
1. Split the string into First Name and Last Name. Assign to variables
2. Return as per OUTPUT.
*/

function swapName(fullName) {
  return fullName.split(' ').reverse().join(', ');
}

console.log(swapName('Joe Roberts'));