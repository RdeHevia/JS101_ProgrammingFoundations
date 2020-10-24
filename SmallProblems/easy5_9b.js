/*
INPUT: array of strings
OUTPUT: log to the console: string => frequency
ALGORITHM:
1. Create an empty object
2. For each word of the array:
  - If the object has NOT the word as a property -> (key,value) = word, 1
  - If the object has the word as a property -> add 1 to the existing value
3. For each property of the object:
  - Log to the console: property => value
*/

function countOccurrences (array) {
  let wordCounts = {};

  array.forEach(word => {
    if (wordCounts.hasOwnProperty(word)) {
      wordCounts[word] += 1;
    } else {
      wordCounts[word] = 1;
    }
  });

  Object.keys(wordCounts).forEach(property => {
    console.log(`${property} => ${wordCounts[property]}`);
  });
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);