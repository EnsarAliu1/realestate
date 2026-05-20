const baseUrl = "http://localhost:3000";

export function getAllProperties() {
  return fetch(`${baseUrl}/properties`).then((response) => {
    return response.json();
  });
}
