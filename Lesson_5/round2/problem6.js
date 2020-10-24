let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

for (let memberName in munsters) {
  console.log(
    `${memberName} is a ${munsters[memberName].age}-years-old ${munsters[memberName].gender}`
  );
}

Object.keys(munsters).forEach(memberName => {
  console.log(
    `${memberName} is a ${munsters[memberName].age}-years-old ${munsters[memberName].gender}`
  );
})