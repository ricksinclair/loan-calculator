//Hide the results and loading DIVs
document.getElementById("results").style.display = "none";
document.getElementById("loading").style.display = "none";

const calculateResults = function(event) {
  event.preventDefault();
  let income = parseFloat(document.getElementById("income").value, 10);
  let debtPayments = parseFloat(
    document.getElementById("debt-payments").value,
    10
  );
  document.getElementById("loading").style.display = "block";

  setTimeout(() => {
    let cashflow = debtPayments / income;
    let leverageRatioText = document.getElementById("leverage-ratio");
    leverageRatioText.value = cashflow.toFixed(2) * 100 + "%";

    cashflow.toFixed(2) < 0.33
      ? (leverageRatioText.style.color = "green")
      : (leverageRatioText.style.color = "red");

    document.getElementById("loading").style.display = "none";
    document.getElementById("results").style.display = "block";
  }, 2000);
};
document
  .getElementById("leverage-ratio-form")
  .addEventListener("submit", calculateResults);
