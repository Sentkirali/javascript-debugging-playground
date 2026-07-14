import { addNumbers } from "./calculator.js";
import { validateSignupForm } from "./validation.js";
import { fetchFakeUserData } from "./api.js";

const numberAInput = document.querySelector("#number-a");
const numberBInput = document.querySelector("#number-b");
const calculateButton = document.querySelector("#calculate-btn");
const calculatorResult = document.querySelector("#calculator-result");
const signupForm = document.querySelector("#signup-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const formMessage = document.querySelector("#form-message");
const loadDataButton = document.querySelector("#load-data-btn");
const apiResult = document.querySelector("#api-result");

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

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const validationResult = validateSignupForm(
    nameInput.value,
    emailInput.value
  );

  if (!validationResult.isValid) {
    formMessage.textContent = validationResult.errors.join(" ");
    formMessage.classList.remove("success");
    formMessage.classList.add("error");

    addLog(
      `Form validation failed: ${validationResult.errors.join(" ")}`,
      "error"
    );

    return;
  }

  formMessage.textContent = "Form submitted successfully.";
  formMessage.classList.remove("error");
  formMessage.classList.add("success");

  addLog(
    `Form submitted successfully for ${emailInput.value}`,
    "success"
  );

  signupForm.reset();
});
loadDataButton.addEventListener("click", async () => {
  apiResult.textContent = "Loading data...";
  loadDataButton.disabled = true;

  addLog("API request started.", "warning");

  try {
    const data = await fetchFakeUserData();

    apiResult.innerHTML = `
      <strong>User loaded:</strong><br />
      ID: ${data.id}<br />
      Name: ${data.name}<br />
      Role: ${data.role}<br />
      Status: ${data.status}
    `;

    addLog(`API request successful: loaded user ${data.name}`, "success");
  } catch (error) {
    apiResult.textContent = error.message;
    addLog(`API request failed: ${error.message}`, "error");
  } finally {
    loadDataButton.disabled = false;
  }
});