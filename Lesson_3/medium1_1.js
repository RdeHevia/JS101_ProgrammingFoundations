let str = 'The Flintstones Rock!';
/*
for (let i = 0; i <10; i += 1) {
  str = ' ' + str;
  console.log(str);
}
*/

for (let i = 1; i <= 10; i += 1) {
  console.log(' '.repeat(i) + str);
}