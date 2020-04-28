let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).forEach(value => {
  value.forEach(word => word.split('').forEach(letter => {
    if ('aeiou'.includes(letter)) console.log(letter);
  }));
});