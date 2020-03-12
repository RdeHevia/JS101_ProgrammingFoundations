let advice = "Few things in life are as important as house training your pet dinosaur. Really important!";

let newAdvice = advice.replace('important','urgent');
let newAdviceAllReplaced = advice.replace(/important/g,'urgent');
console.log(advice);
console.log(newAdvice);
console.log(newAdviceAllReplaced);