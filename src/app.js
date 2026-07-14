import { addNumbers } from "./calculator.js";

const numberAInput = document.querySelector("#number-a");
const numberBInput = document.querySelector("#number-b");
const calculateButton = document.querySelector("#calculate-btn");
const calculatorResult = document.querySelector("#calculator-result");

const debugLog = document.querySelector("#debug-log");
const clearLogButton = document.querySelector("#clear-log-btn");

function addLog(message, type = "info") {
  const logItem = document.createElement("li");

  const timestamp = new Date().toLocaleTimeString();

  logItem.textContent = `[${timestamp}] ${message}`;

  if (type === "success") {
    logItem.classList.add("success");
  }

  if (type === "error") {
    logItem.classList.add("error");
  }

  if (type === "warning") {
    logItem.classList.add("warning");
  }

  debugLog.prepend(logItem);
}

function handleCalculation() {
  try {
    const result = addNumbers(numberAInput.value, numberBInput.value);

    calculatorResult.textContent = result;
    addLog(`Calculation successful: ${numberAInput.value} + ${numberBInput.value} = ${result}`, "success");
  } catch (error) {
    calculatorResult.textContent = "Error";
    addLog(`Calculation failed: ${error.message}`, "error");
  }
}

calculateButton.addEventListener("click", handleCalculation);

clearLogButton.addEventListener("click", () => {
  debugLog.innerHTML = "";
});