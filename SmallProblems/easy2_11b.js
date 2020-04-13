/*
INPUT: Number
OUTPUT: String
RULES: Write a function that:
  - converts a positive integer into a string
  - you can't use javascript methods like toString, etc.
  - assume the input is going to be always correct
ALGORITHM:
  - FUNCTION integerToString (integer)
    - SET arrayDigits = ["0", "1",....]
    - Split the integer variable into its decimals. And assign it to an array
      "digitsInInteger". E.g. integer = 753
      - let n = 1
      - SET digitsInInteger = [integer % 10 ** n] -> [3]
      - LOOP while integer % 10 ** n !== integer (start with n=2)
        - let digitExtracted =(integer % 10 ** n) - digitsInInteger[n-2] / (10 ** (n-1))
        - push digitExtracted into digitsInInteger
    - SET integerString = ""
    - LOOP over arrayDecimals elements
      - integerString = integerString + arrayDigits[arrayDecimals[i]]
    - return integerString

ALGORITHM2:
  - FUNCTION integerToString (integer)
    - SET arrayDigits = ["0", "1",....]
    - Split the integer variable into its decimals. And assign it to an array
      "digitsInInteger". E.g. integer = 753
      - SET n=1
      - DO WHILE integer/(10 ** n ) > 1
        - truncatedNumber = TRUNCATE integer / (10 ** n).
        - decimal = (truncatedNumber - integer/(10**n)) * (10**n)
        - decimalArray.push(decimal)
      - reverse decimalArray
    return decimalArray.join('')

*/


function integerToString (integer) {
  //const DIGITS_STRING = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  //let integerString = "";
  let n = 1;
  let splitedInteger = [];
  do {
    let truncatedNumber = Math.trunc(integer / (10 ** n));
    let decimal = (truncatedNumber - (integer/ (10 ** n) * (10 ** n))
    console.log(decimal)
    //splitedInteger.push(decimal);
    n += 1;
  } while (integer / (10 ** n) > 1)

  return digitsInInteger.join('');
}


//console.log(integerToString(4321));      // "4321"
integerToString(4321)
//integerToString(0);         // "0"
//integerToString(5007);      // "5000"
//integerToString(1234567890);      // "1234567890"