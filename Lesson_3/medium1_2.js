let munstersDescription = "The Munsters are creepy and spooky.";
let newArr = [];

for (let i = 0; i < munstersDescription.length; i += 1) {
  if (munstersDescription[i] === munstersDescription[i].toUpperCase()) {
    newArr = newArr + munstersDescription[i].toLowerCase()
  } else {
    newArr = newArr + munstersDescription[i].toUpperCase();
  }
}

console.log(newArr);

