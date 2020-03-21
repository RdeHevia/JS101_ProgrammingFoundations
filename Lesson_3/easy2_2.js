let numbers = [1, 2, 3, 4, 5];
//numbers.reverse();
//console.log(numbers); // [ 5, 4, 3, 2, 1 ]
let reversedNumbers = numbers.slice().reverse();
console.log(numbers);
console.log(reversedNumbers);


numbers = [1, 2, 3, 4, 5];
let reversedNumbers2 = [...numbers].sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]
console.log(reversedNumbers2);

let reversedNumbers3 = numbers.slice().sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]
console.log(reversedNumbers3);

