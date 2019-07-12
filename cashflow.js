//set global event listeners
document.getElementById("results").style.display = "none";
document.getElementById("loading").style.display = "none";

const calculateResults = function(event) {
  event.preventDefault();
  let income = parseFloat(document.getElementById("income").value, 10);
  let expenses = parseFloat(document.getElementById("expenses").value, 10);
  document.getElementById("loading").style.display = "block";

  setTimeout(() => {
    let cashflow = income - expenses;
    let cashflowtext = document.getElementById("cashflow");
    cashflowtext.value = cashflow.toFixed(2);

    cashflow.toFixed(2) > 0
      ? (cashflowtext.style.color = "green")
      : (cashflowtext.style.color = "red");

    document.getElementById("loading").style.display = "none";
    document.getElementById("results").style.display = "block";
  }, 2000);
};
document
  .getElementById("cashflow-form")
  .addEventListener("submit", calculateResults);
