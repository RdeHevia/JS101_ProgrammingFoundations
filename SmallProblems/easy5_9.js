/*
INPUT: array of strings
OUTPUT: log to the console (strings)
RULES:
  count elements in an array
  log them
  case sensitive
ALGORITHM:
  FUNCTION countOcurrences(array)
    SET elementFrequency = {}
    LOOP over elements of the array
      IF elementFrequency has element[i] as a property
        elementFrequency[element[i]] += 1
      ELSE
        elementFrequency[element[i]] = 1
    LOOP over elementFrequency keys
      prompt (key, value)
  FUNCTION prompt (key, value)
    log to console
*/

function countOccurrences (array) {
  let elementFrequency = {};
  array.forEach (element => {
    if (elementFrequency.hasOwnProperty(element)) {
      elementFrequency[element] += 1;
    } else {
      elementFrequency[element] = 1;
    }
  });

  for (let element in elementFrequency) {
    console.log(`${element} => ${elementFrequency[element]}`);
  }
}
let vehicles = [
  'car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);