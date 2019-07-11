//set global event listeners
document.getElementById("results").style.display = "none";
document.getElementById("loading").style.display = "none";

document
  .getElementById("loan-form")
  .addEventListener("submit", function(event) {
    event.preventDefault();
    //Show Loader
    document.getElementById("loading").style.display = "block";
    setTimeout(calculateResults, 1500);
  });

//
function calculateResults() {
  console.log("Calculating results...");

  // Set DOM selector variables
  const loanAmount = document.getElementById("amount");
  const interestRate = document.getElementById("interest-rate");
  const repaymentYears = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  //Set value variables
  const principle = parseFloat(loanAmount.value);
  const calculatedInterest = parseFloat(interestRate.value) / 100 / 12;
  const calculatedPayments = parseFloat(repaymentYears.value) * 12;

  //Compute monthly payment

  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principle * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principle).toFixed(2);
    //Show results
    document.getElementById("results").style.display = "block";

    //Hide spinner
    document.getElementById("loading").style.display = "none";
  } else {
    console.log("check your numbers");
  }
}
