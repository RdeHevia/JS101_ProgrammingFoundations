let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let sum = 0;
for (let property in munsters) {
  if (munsters[property]['gender'] === 'male') sum += munsters[property].age;
}
console.log(sum);


let sum2 = 0;
Object.values(munsters).forEach(obj => {
  if(obj.gender === 'male') sum2 += obj.age;
})
console.log(sum2);