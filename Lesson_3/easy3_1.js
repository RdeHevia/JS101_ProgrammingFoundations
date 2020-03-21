let numbers = [1, 2, 3, 4];

//1) numbers = [];

/*

2) let numbersLength = numbers.length;

for (let i = 0; i < numbersLength; i += 1) {
  numbers.pop();
}
*/

// 3) numbers.length = 0;

numbers.splice(0);

console.log(numbers);