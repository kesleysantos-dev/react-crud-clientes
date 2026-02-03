import { useEffect, useState } from "react";

import {
  getClients,
  createClient,
  updateClient,
  deleteClient
} from "../services/api";

import ClientForm from "../components/ClientForm";
import ClientList from "../components/ClientList";

function Home() {
  const [clients, setClients] = useState([]);
  const [editingClient, setEditingClient] = useState(null);

  useEffect(() => {
    loadClients();
  }, []);

  async function loadClients() {
    const data = await getClients();
    setClients(data);
  }

  async function handleSaveClient(client) {
    if (editingClient) {
      await updateClient(editingClient.id, client);
      setEditingClient(null);
    } else {
      await createClient(client);
    }

    loadClients();
  }

  async function handleDeleteClient(id) {
    await deleteClient(id);
    loadClients();
  }

  function handleEditClient(client) {
    setEditingClient(client);
  }

  return (
    <>
      <h1>Clientes</h1>

      <ClientForm
        onSaveClient={handleSaveClient}
        editingClient={editingClient}
      />

      <ClientList
        clients={clients}
        onDeleteClient={handleDeleteClient}
        onEditClient={handleEditClient}
      />
    </>
  );
}

export default Home;
