export function validateEventPayload(payload) {
  const errors = [];

  if (!payload || typeof payload !== "object") {
    errors.push("Payload must be an object.");
  }

  if (!payload.eventName || typeof payload.eventName !== "string") {
    errors.push("eventName is required and must be a string.");
  }

  if (!payload.timestamp || typeof payload.timestamp !== "string") {
    errors.push("timestamp is required and must be a string.");
  }

  if (!payload.page || typeof payload.page !== "string") {
    errors.push("page is required and must be a string.");
  }

  if (typeof payload.consentGiven !== "boolean") {
    errors.push("consentGiven is required and must be a boolean.");
  }

  if (!payload.properties || typeof payload.properties !== "object") {
    errors.push("properties is required and must be an object.");
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}