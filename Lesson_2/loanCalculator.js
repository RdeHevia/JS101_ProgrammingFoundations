const rlsync = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function emptyLines (nbrOfLines) {
  console.log(`${'\n'.repeat(nbrOfLines)}`);
}

function getFloatInput() {
  let nbrString = rlsync.question();
  let nbr = parseFloat(nbrString);
  while (Number.isNaN(nbr) || nbr < 0 || nbrString.includes(','))  {
    prompt('Number equal or greater than 0 expected. Comma not all allowed.');
    prompt('Please enter a valid value.')
    nbrString = rlsync.question();
    nbr = parseFloat(nbrString);
  }
  return nbr;
}

function loanToMonth(presentValue,interestMonth,nMonths) {
  if (interestMonth === 0) {
    return presentValue / nMonths;
  } else {
    return (
      presentValue * (interestMonth / (1 - ((1 + interestMonth) ** (-nMonths))))
    );
  }
}

function printInputSummary(loan, apr, nbrMonths) {
  emptyLines(3);
  console.log(`SUMMARY:`);
  prompt(`Loan: $ ${loan}`);
  prompt(`APR: ${apr} %`);
  prompt(`Loan duration: ${nbrMonths} months`);
}

function printResultsSummary (monthlyPay, interestPaid, totalPay) {
  emptyLines(1);
  prompt(`Monthly payment: $ ${monthlyPay}`);
  prompt(`Total interests to be paid: $ ${interestPaid}`);
  prompt(`Total amount to be paid: $ ${totalPay}`);
}

emptyLines(3);
console.log('Welcome to the Loan Calculator.');

emptyLines(1);
prompt('Enter the loan amount.');
let loan = getFloatInput();

prompt('Enter the Annual Percent Rate. APR (%).');
let apr = getFloatInput();

prompt('Enter the loan duration in months.');
let nbrMonths = getFloatInput();

let intMonth = apr / 12 / 100;

let monthlyPay = loanToMonth(loan,intMonth,nbrMonths).toFixed(2);
let totalPay = (monthlyPay * nbrMonths).toFixed(2);
let interestPaid = (totalPay - loan).toFixed(2);

printInputSummary(loan, apr, nbrMonths);
printResultsSummary (monthlyPay, interestPaid, totalPay);
emptyLines(3);


