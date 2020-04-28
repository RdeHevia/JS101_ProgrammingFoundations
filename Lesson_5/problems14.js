/*
INPUT: object
OUTPUT: array of Level #4 elements (see structure)
RULES: Return:
  - colors capitalized
  - sizes all in Uppercase
STRUCTURE:
  Level 1: object
    2: fruit (keys) and objects (values)
      3: type, colors, size (keys)
        4: strings and arrays
          5: strings
ALGORITHM:
  SET arrayProperties = []
  Leve 2: LOOP over obj keys
    Level 3: IF key === fruit:
      Level 4: push 'colors' arrays to arrayProperties with the first letter capitalized:
        Level 5: LOOP over array elements and capitalized the first letter
    Lever 3" IF key === vegetable:
      Level 4: push "size" strings to arrayProperties
*/

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let arrayProperties = [];
for (let key in obj) {
  if (obj[key].type === 'fruit') {
    arrayProperties.push(
      obj[key]['colors'].map(element => {
        return element[0].toUpperCase() + element.slice(1);
      })
    );
  }
  if (obj[key].type === 'vegetable') {
    arrayProperties.push(obj[key]['size'].toUpperCase());
  }
}

console.log(arrayProperties);

let arrayProperties2 = Object.values(obj).map(subObject => {
  if (subObject.type === 'fruit') {
    return subObject.colors.map(word => {
      return word[0].toUpperCase() + word.slice(1);
    });
  } else {
    return subObject.size.toUpperCase();
  }
});

console.log(arrayProperties2);