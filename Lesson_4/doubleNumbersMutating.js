let myNumbers = [1, 4, 3, 7, 2, 6];

function doubleNumbers(numbers) {
  for (let index = 0; index < numbers.length; index += 1) {
    numbers[index] *= 2;
  }

  return numbers;
}

console.log(doubleNumbers(myNumbers));
console.log(myNumbers);