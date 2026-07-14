export function validateSignupForm(name, email) {
  const errors = [];

  if (name.trim() === "") {
    errors.push("Name is required.");
  }

  if (name.trim().length > 0 && name.trim().length < 2) {
    errors.push("Name must be at least 2 characters long.");
  }

  if (email.trim() === "") {
    errors.push("Email is required.");
  }

  if (email.trim() !== "" && !email.includes("@")) {
    errors.push("Email must contain @.");
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}