/*
INPUT: 2 arrays
OUTPUT: 1 new array
RULES:
  wi=ui*vi; i=0 .... n
  assume the arguments contains the same number of elements
ALGORITHM:
   FUNCTION multiplyList (array1, array2)
    LOOP i=0 to array1.length
      multipliedArray.push(array1[i]*array2[i])
    return multipliedArray
*/

function multiplyList(array1,array2) {
  let multiplication = [];
  for (let idx = 0; idx < array1.length; idx += 1) {
    multiplication.push(array1[idx] * array2[idx]);
  }
  return multiplication;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
