/*
INPUT: object
OUTPUT: number
RULES: compute total age of male members
ALGORITHM:
  * loop over object keys (familyMembers)
  * IF familyMember.gender === male -> sum that number.
*/
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let sumAge = 0;
for (let member in munsters) {
  if (munsters[member].gender === 'male') {
    sumAge += munsters[member].age;
  }
}
let sumAge2 = 0;
Object.values(munsters).forEach(member => {
  if (member.gender === 'male') {
    sumAge2 += member.age;
  }
})
console.log(sumAge);
console.log(sumAge2);