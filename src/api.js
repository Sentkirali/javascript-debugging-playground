export function fetchFakeUserData() {
  return new Promise((resolve, reject) => {
    const delay = 1200;
    const shouldFail = Math.random() < 0.3;

    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Failed to load fake API data."));
        return;
      }

      resolve({
        id: 1,
        name: "Levente",
        role: "Junior Frontend Developer",
        status: "active"
      });
    }, delay);
  });
}