const API_URL = "http://localhost:3000/clients";

export async function getClients() {
  const response = await fetch(API_URL);
  return response.json();
}

export async function createClient(client) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(client),
  });

  return response.json();
}
export async function deleteClient(id) {
  await fetch(`http://localhost:3000/clients/${id}`, {
    method: "DELETE",
  });
}

export async function updateClient(id, client) {
  const res = await fetch(
    `http://localhost:3000/clients/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(client),
    }
  );

  return res.json();
}
