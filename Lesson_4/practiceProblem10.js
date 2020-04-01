let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let min = ages.Herman;
Object.values(ages).forEach(number => {
  if (number < min) min = number;
})

console.log(min);

let min2 = Math.min(...Object.values(ages));

console.log(min2);