/*
INPUT: string
OUTPUT: boolean
  - parenthesis are balanced -> true
  - paranthesis are not balanced -> false
RULES:
  - parenthesis balanced if they occur in ( ) pairs
EXAMPLES:
  - ( ) -> true Order OK, Number OK -> true; 1 - 1 = 0
  - (()) -> true Order OK, Number OK -> true 1 + 1 - 1 - 1 = 0
  - ) ( -> false. ORder NO -> false - 1
  - ()) -> false Order OK, Number NO -> false
  - (() . Order OK. Number NO -> false
  - () () . Order OK, Number OK
ALGORITHM:
  0. Create a balance variable to keep track of the parenthesis
    - ( -> + 1
    - ) -> - 1
  1. Iterate over all the characters of the string. For each parenthesis found:
    - If the parenthesis is ( -> add +1 to balance
    - Else if the parenthesis is ) -> add -1 to balance
    
    If current balance is < 0 -> the order isn't correct -> false
  2. If the final balance is not equal to 0 -> the number of parenthesis are not
      balance -> false. ELSE -> true
*/

// eslint-disable-next-line max-lines-per-function
function isBalanced(string) {
  let balanceTracker = 0;

  let arrayOfParenthesis = string.split('').filter(char => {
    return (char === '(') || (char === ')');
  });

  for (let idx = 0; idx < arrayOfParenthesis.length; idx += 1) {
    let element = arrayOfParenthesis[idx];

    switch (element) {
      case ('('):
        balanceTracker += 1;
        break;
      case (')'):
        balanceTracker -= 1;
        break;
      default:
    }
    if (balanceTracker < 0) {
      return false;
    }
  }

  return balanceTracker === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);