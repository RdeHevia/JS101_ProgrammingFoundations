let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let minAge = Object.values(ages).sort((a,b) => a - b)[0];
console.log(minAge);