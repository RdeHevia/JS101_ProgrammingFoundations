/*
INPUT: string
  - set of instructions space-separated
OUTPUT: number
EXAMPLE:
[3, 6, 4] 7. MULT -> [3,6] 4 * 7 = 28
[3, 6] 28 MULT -> [3] 6 * 28 = 168
RULES:
- all operations are integers
ALGORITHM:
1. Initialize the stac and register to [] and 0, respectively (outside of
  function)
2. Define an object with all the functions
3. Lowercase the command. Use the command to execute a function
*/


// eslint-disable-next-line max-lines-per-function
function minilang(instructions) {
  let stack = [];
  let value = 0;

  const COMMAND = {
    PLACE: function (instruction) {
      value = instruction;
    },
    PUSH: function () {
      stack.push(value);
    },
    ADD: function () {
      value += stack.pop();
    },
    SUB: function () {
      value -= stack.pop();
    },
    MULT: function () {
      value *= stack.pop();
    },
    DIV: function () {
      value = Math.floor((value / stack.pop()));
    },
    MOD: function () {
      value %= stack.pop();
    },
    POP: function () {
      value = stack.pop();
    },
    PRINT: function () {
      console.log(value);
    }
  };

  let arrayOfInstructions = instructions.split(' ');
  arrayOfInstructions.forEach(instruction => {
    if (Number.isInteger(Number(instruction))) {
      COMMAND.PLACE(Number(instruction));
    } else {
      COMMAND[instruction]();
    }
  });
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
