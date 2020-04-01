let myNumbers = [1, 4, 3, 7, 2, 6];

function doubleOddIndexes (numbers) {
  let newNumbers = [];

  for (let index = 0; index < numbers.length; index += 1) {
    if (index % 2 === 0) newNumbers.push(numbers[index]);
    else newNumbers.push(numbers[index] * 2);
  }
  return newNumbers;
}

console.log(doubleOddIndexes(myNumbers));