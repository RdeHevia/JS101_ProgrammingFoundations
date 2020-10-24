function multiplyAllPairs(array1, array2) {
  let multiplications = multiply(array1, array2);
  console.log(filterPairs(multiplications).sort((a,b) => a - b));
}

function filterPairs(array) {
  return array.filter(num => num % 2 === 0);
}

function multiply(array1, array2) {
  let multiplication = [];

  array1.forEach(num1 => {
    array2.forEach(num2 => {
      multiplication.push(num1 * num2);
    });
  });
  return multiplication;
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]