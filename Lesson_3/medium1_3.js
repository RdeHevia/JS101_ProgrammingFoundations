function factors(number) {
  if (number > 0 ) {
    let divisor = number;
    let factors = [];
    do {
      if (number % divisor === 0) {
        factors.push(number / divisor);
      }
      divisor -= 1;
    } while (divisor !== 0);
    return factors;
  } else {
    return 'Error';
  }
}


console.log(factors(6));