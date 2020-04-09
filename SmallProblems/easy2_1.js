/*
QUESTIONS:
INPUT: function greetings (array, object)
OUTPUT: string
RULES: function that...
  - Takes 2 arguments: (array, object)
  - array.length >= 2
  - array = ["John", "Q", "Doe"] -> John Q Doe
  - object has 2 keys: "title" and "occupation"; and 2 values
  - object = { title: "Master", occupation: "Plumber" } -> "Master Plumber"

ALGORITHM:

- SET function greetings (arrayName, objectJob)
  - let fullName = join arrrayName separated by ' '
  - let titleOccupation = join the values of objectJob separated by ' '
  - PRINT Hello, *fullName*! Nice to have a *titleOccupation* around.
*/

function greetings (arrayName, objectJob) {
  let fullName = arrayName.join(' ');
  let titleOccupation = Object.values(objectJob).join(' ');

  return (`Hello, ${fullName}! Nice to have a ${titleOccupation} around.`);
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);