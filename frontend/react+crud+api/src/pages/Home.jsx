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
  //  estado de loading começando como 'true'
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadClients();
  }, []);

  async function loadClients() {
    try {
      setLoading(true);

      // Força o React a respirar por 100ms antes de travar a thread com o fetch
      // await new Promise(resolve => setTimeout(resolve, 100));

      const data = await getClients();
      setClients(data);
    } catch (error) {
      console.error("Erro ao carregar clientes:", error);
    } finally {
      setLoading(false);
    }
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
    if (window.confirm("Deseja realmente excluir este cliente?")) {
      await deleteClient(id);
      loadClients();
    }
  }

  function handleEditClient(client) {
    setEditingClient(client);
  }

  return (
    <>
      <h1>Gerenciamento de Clientes</h1>

      <ClientForm
        onSaveClient={handleSaveClient}
        editingClient={editingClient}
      />

      {/* 2. Verificação: Se loading for true, mostra a mensagem. Se não, mostra a lista */}
      {loading ? (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Carregando dados...</p>
          <small>O servidor gratuito do Render pode demorar até 1 min para acordar.</small>
        </div>
      ) : (
        <ClientList
          clients={clients}
          onDeleteClient={handleDeleteClient}
          onEditClient={handleEditClient}
        />
      )}
    </>
  );
}

export default Home;