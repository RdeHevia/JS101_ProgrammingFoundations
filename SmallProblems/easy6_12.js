/*
INPUT: string
OUTPUT: true or false
RULES:
  returns true if parenthesis are balanced. false otherwise
  (()) ->true
  ())( -> false
DATA STRUCTURE:
    arrayOfParenthesis
ALGORITHM:
    FUNCTION isBalanced(string)
      string -> array -> filter parenthesis in the array -> arrayOfParenthesis
      LOOP over the array. Use forEach
        IF element === '(', sum = sum + 1
        IF element === ')', sum = sum - 1
        IF sum < 0 -> return false
      IF sum = 0 -> return true
      ELSE -> return false
*/

function isBalanced(string) {
  let arrayOfParenthesis = string.split('').filter(char => {
    return (char === '(') || (char === ')');
  });
  let sum = 0;

  for (let idx = 0; idx < arrayOfParenthesis.length; idx+= 1) {
    if (arrayOfParenthesis[idx] === '(') sum += 1;
    if (arrayOfParenthesis[idx] === ')') sum -= 1;
    if (sum < 0) {
      return false;
    }
  }
  return (sum === 0);
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);