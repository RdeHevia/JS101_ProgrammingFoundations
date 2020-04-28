let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

for (let familyMember in munsters) {
  console.log(
    `${familyMember} is a ${munsters[familyMember].age}-years-old`,
    `${munsters[familyMember].gender}`
  );
}

Object.entries(munsters).forEach(entry => {
  console.log(`${entry[0]} is a ${entry[1].age}-year-old ${entry[1].gender}`);
});
