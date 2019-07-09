//set global event listeners
document
  .getElementById("loan-form")
  .addEventListener("submit", calculateResults);

//
function calculateResults(e) {
  console.log("Calculating...");

  // Set DOM selector variables
  const loanAmountDOM = document.getElementById("amount");
  const interestRateDOM = document.getElementById("interest-rate");
  const repaymentYearsDOM = document.getElementById("years");
  const monthlyPaymentDOM = document.getElementById("monthly-payment");
  const totalPaymentDOM = document.getElementById("total-payment");
  const totalInterestDOM = document.getElementById("total-interest");

  //Set value variables

  const loanAmount = parseFloat(loanAmountDOM.value);
  const interestRate = parseFloat(interestRateDOM.value);
  const principle = parseFloat(loanAmountDOM);

  e.preventDefault();
}
