/*
INPUT: 3 integer values
  - angles in degrees
OUTPUT: string
  - valid triangle if: angleA + angleB + angleC = 180 AND all angles are > 0 deg
  - all angles < 90deg -> acute
  - 1 angle is 90 deg -> rectangle
  - 1 angle greater than 90 deg -> obtuse
RULES:
  - assume no floating numbers.
ALGORITHM:
1. Check if the triangle is valid. Yes -> continue. No -> return invalid
2. Check if the triangle is rectangle.
3. CHeck if its acute. -> calculate maximum angle. If max angle is < 90 -> acute
4. If the triangle is neither acute or rectangle -> obtuse
*/

function triangle(...angles) {

  if (!triangleIsValid(angles)) {
    return 'invalid';
  }

  return typeOfTriangleByAngle(angles);
}

function triangleIsValid(angles) {
  let sumOfAngles = angles.reduce((sum, angle) => sum + angle);
  let anglesEqualToZero = angles.filter(angle => angle === 0);

  return (sumOfAngles === 180) && (anglesEqualToZero.length === 0);
}

function typeOfTriangleByAngle(angles) {
  if (angles.some(angle => angle === 90)) {
    return 'rectangle';
  } else if (angles.every(angle => angle < 90)) {
    return 'acute';
  } else {
    return 'obtuse';
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"