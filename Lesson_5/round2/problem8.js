/*
INPUT: object of arrays
OUTPUT: log all vowels contained in the arrays
RULES:
  * use forEach
ALGORITHM:
  *obj
    * keys: first, sencond...
    * values: []
  
  Object.values(obj).forEach(forEach(forEach))
*/

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).forEach(array => {
  console.log(array.map(word => {
    return word.split('').filter(char => 'aeiou'.includes(char)).join('');
  }));
});
