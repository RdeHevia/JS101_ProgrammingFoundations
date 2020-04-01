let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let sum = Object.values(ages).reduce((acc, currentVal) => acc + currentVal);
console.log(sum);