//Hide the results and loading DIVs
document.getElementById("results").style.display = "none";
document.getElementById("loading").style.display = "none";

const calculateResults = function(event) {
  event.preventDefault();
  document.getElementById("results").style.display = "none";
  //Trigger calculations based on radio button status
  document.getElementById("income-radio").checked
    ? leverageRatioIncome()
    : leverageRatioEquity();

  //pull current values from DOM
  let income = parseFloat(document.getElementById("income").value, 10);
  let equity = parseFloat(document.getElementById("equity").value, 10);
  let debtPayments = parseFloat(
    document.getElementById("debt-payments").value,
    10
  );

  //handle ui aesthetic loading gif

  document.getElementById("loading").style.display = "block";

  function leverageRatioEquity() {
    setTimeout(() => {
      let leverageRatio = debtPayments / equity;
      let leverageRatioText = document.getElementById("leverage-ratio");
      leverageRatioText.value = leverageRatio.toFixed(2) * 100 + "%";

      leverageRatio.toFixed(2) < 0.33
        ? (leverageRatioText.style.color = "green")
        : (leverageRatioText.style.color = "red");

      document.getElementById("loading").style.display = "none";
      document.getElementById("results").style.display = "block";
    }, 2000);
  }
  function leverageRatioIncome() {
    setTimeout(() => {
      let leverageRatio = debtPayments / income;
      let leverageRatioText = document.getElementById("leverage-ratio");
      leverageRatioText.value = leverageRatio.toFixed(2) * 100 + "%";

      //turn red or green depending on recommended threshold
      leverageRatio.toFixed(2) < 0.33
        ? (leverageRatioText.style.color = "green")
        : (leverageRatioText.style.color = "red");

      document.getElementById("loading").style.display = "none";
      document.getElementById("results").style.display = "block";
    }, 2000);
  }
};

//event listener callback for calculation selection
function calcChoose(event) {
  event.preventDefault();
  //clear all values
  document.getElementById("income").value = null;
  document.getElementById("equity").value = null;
  document.getElementById("debt-payments").value = null;
  console.log("Calculator Choosen");

  //initialize depending on radio button condition
  if (document.getElementById("income-radio").checked) {
    console.log("using Income Calculator");
    document.getElementById("equity-group").style.display = "none";
    document.getElementById("income-group").style.display = "block";
  } else if (document.getElementById("equity-radio").checked) {
    document.getElementById("equity-group").style.display = "block";
    document.getElementById("income-group").style.display = "none";
    console.log("using Equity calculator ");
  }
}

//add event listeners
document
  .getElementById("leverage-ratio-form")
  .addEventListener("submit", calculateResults);
document.getElementById("calc-choose").addEventListener("change", calcChoose);
