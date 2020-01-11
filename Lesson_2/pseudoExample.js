let numbers=[3, 14, 12, 2, 1214, 7];
let iterator = 1;
let savedNumber=0;

numbers.forEach(item=>{
  if (item>savedNumber) {
    savedNumber=item;
  }
})

console.log(savedNumber);

