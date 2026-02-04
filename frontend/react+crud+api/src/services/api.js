const API_URL = "https://react-crud-clientes-backend-ks.onrender.com/clients";

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
  await fetch(`https://react-crud-clientes-backend-ks.onrender.com/clients/${id}`, {
    method: "DELETE",
  });
}

export async function updateClient(id, client) {
  const res = await fetch(
    `https://react-crud-clientes-backend-ks.onrender.com/clients/${id}`,
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
