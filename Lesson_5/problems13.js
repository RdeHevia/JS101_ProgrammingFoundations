/*
ALGORITHM:
  LOOP over sub-arrays
    calculate the sum of the odd numbers of each sub array
  Sort the arrays based on the result
*/

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
let arr2 = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((a,b) => {
  let sumOddA = 0;
  let sumOddB = 0;
  a.forEach (number => {
    if (number % 2 !== 0) sumOddA += number;
  });

  b.forEach (number => {
    if (number % 2 !== 0) sumOddB += number;
  });
  return sumOddA - sumOddB;
});

console.log(arr);

arr2.sort((a,b) => {
  let sumOddA = a.filter(num => num % 2).reduce((acc,currentVal) => {
    return acc + currentVal;
  });
  let sumOddB = b.filter(num => num % 2).reduce((acc,currentVal) => {
    return acc + currentVal;
  });
  return sumOddA - sumOddB;
});

console.log(arr2);