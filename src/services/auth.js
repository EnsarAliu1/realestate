const baseUrl = "http://localhost:3000";

export function registerUser(newUser) {
  return fetch(`${baseUrl}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  }).then((response) => response.json());
}
