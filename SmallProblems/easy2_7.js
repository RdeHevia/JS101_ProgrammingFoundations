/*
INPUT: Two primitives.
OUTPUT: Boolean
RULES: Write a function xor that:
  - (falsy, truthy) -> true
  - (falsy, falsy) -> false
  - (truthy, truthy) -> false
  - It accepts any type of primitive value
ALGORITHM:
  FUNCTION xor(primitive1, primitive2)
    - IF (primitive1) -> primitiveBinary1 = 1
      ELSE -> primitiveBoolean1 = 0
    - IF (primitive2) -> primitiveBinary2 = 1
      ELSE -> primitiveBoolean1 = 0
    let BinarySum = primitiveBinary1 + primitiveBinary2

    - IF (binarySum === 1) -> true
      ELSE -> false
*/

function xor (primitive1, primitive2) {
  let primitiveBinary1 = 0;
  let primitiveBinary2 = 0;

  if (primitive1) primitiveBinary1 = 1;
  if (primitive2) primitiveBinary2 = 1;

  return (primitiveBinary1 + primitiveBinary2 === 1);
}

console.log(xor(5, 0));
console.log(xor(false, true));
console.log(xor(1, 1));
console.log(xor(true, true));