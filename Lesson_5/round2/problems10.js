let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];
let orderedArr = arr.map(subArray => {
  if (typeof subArray[0] === 'number') {
    return subArray.slice().sort((a,b) => b - a);
  } else {
    return subArray.slice().sort().reverse();
  }
});

console.log(arr);
console.log(orderedArr);