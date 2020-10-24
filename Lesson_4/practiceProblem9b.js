let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let agesSum = Object.values(ages).reduce((sum, element) => sum + element);
console.log(agesSum);