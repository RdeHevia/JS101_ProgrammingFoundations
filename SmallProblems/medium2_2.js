/*
INPUT: 3 integers (sides of the triangle)
OUTPUT: string
  - equilateral: all sides equal
  - isosceles: 2 sides equal
  - scalene: sides not equal
  - invalid:
    - if there is 1 side = 0
    - a + b is not > c
ALGORITHM:
  1. Order the sides by length in ascendent order
  2. If a side = 0 -> triangle is invalid
  3. If side1 + side2 <= side 3 -> invalid
  4. If the triangle is valid:
    - If side1 = side2 = side3 -> equilateral
    - If one of sides is different -> isosceles
    - All sides different -> scalene
*/

function isTriangleValid(sides) {
  let sidesEqualToZero = sides.filter(side => side === 0);
  let sumOfShorterSides = sides[0] + sides[1];

  if (!sidesEqualToZero.length && sumOfShorterSides > sides[2]) {
    return true;
  } else {
    return false;
  }
}

function isTriangleEquilateral(sides) {
  return (sides[0] === sides[1]) && (sides[1] === sides[2]);
}

function isTriangleIsosceles(sides) {
  return (sides[0] === sides[1]) || 
    (sides[0] === sides[2]) || 
    (sides[1] === sides[2]);
}

function triangle(...sides) {
  sides.sort((a,b) => a - b);

  if (!isTriangleValid(sides)) {
    return 'invalid';
  }

  if (isTriangleEquilateral(sides)) {
    return 'equilateral';
  } else if (isTriangleIsosceles(sides)) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
