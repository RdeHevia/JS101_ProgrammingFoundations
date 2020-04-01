let myNumbers = [1, 4, 3, 7, 2, 6];

function multiply(numbers, multiplicationNumber) {
  let counter = 0;

  while (counter < numbers.length) {
    let currentNum = numbers[counter];
    numbers[counter] = currentNum * multiplicationNumber;

    counter += 1;
  }

  return numbers;
}

console.log(multiply(myNumbers,3));