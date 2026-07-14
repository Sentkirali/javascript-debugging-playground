export function addNumbers(firstValue, secondValue) {
  if (firstValue.trim() === "" || secondValue.trim() === "") {
    throw new Error("Both fields are required.");
  }

  const firstNumber = Number(firstValue);
  const secondNumber = Number(secondValue);

  if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
    throw new Error("Both values must be valid numbers.");
  }

  return firstNumber + secondNumber;
}