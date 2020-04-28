function isPalindrome (text) {
  return text === text.split('').reverse().join('');
}

function isPalindromicNumber (integer) {
  return isPalindrome(integer.toString());
}
console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true)