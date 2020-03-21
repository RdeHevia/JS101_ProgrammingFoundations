let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

let arrFlintstones = Object.entries(flintstones).filter(pair => pair[0] === 'Barney').shift();
console.log(arrFlintstones);
