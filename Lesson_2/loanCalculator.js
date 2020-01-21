const rlsync = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function emptyLines (nbrOfLines) {
  console.log(`${'\n'.repeat(nbrOfLines)}`);
}

function getFloatInput() {
  let nbr = parseFloat(rlsync.question());
  while (Number.isNaN(nbr) || nbr<0) {
    prompt('Number equal or greater than 0 expected. Please enter a valid value.');
    nbr = parseFloat(rlsync.question());
  }
  return nbr;
}

function loanToMonth(presentValue,interestMonth,nMonths) {
  if (interestMonth === 0) {
    return presentValue / nMonths;
  } else {
    return presentValue * (interestMonth / (1 - (1 + interestMonth) ** (-nMonths)));
  }
}

emptyLines(3);
console.log('Welcome to the Loan Calculator.');

emptyLines(1);
prompt('Enter the loan amount.');
let loan = getFloatInput();

prompt('Enter the Annual Percent Rate. APR (%).');
let apr = parseFloat(rlsync.question());

prompt('Enter the loan duration in months.');
let nbrMonths = parseFloat(rlsync.question());

let intMonth = apr / 12 / 100;

let monthlyPay = loanToMonth(loan,intMonth,nbrMonths).toFixed(2);
let totalPay = (monthlyPay * nbrMonths).toFixed(2);
let interestPaid = (totalPay - loan).toFixed(2);

emptyLines(3);
console.log(`SUMMARY:`);
prompt(`Loan: $ ${loan}`);
prompt(`APR: ${apr} %`);
prompt(`Loan duration: ${nbrMonths} months`);

emptyLines(1);
prompt(`Monthly payment: $ ${monthlyPay}`);
prompt(`Total interests to be paid: $ ${interestPaid}`);
prompt(`Total amount to be paid: $ ${totalPay}`);

emptyLines(3);


