import { useEffect, useState } from "react";

function ClientForm({ onSaveClient, editingClient }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Quando clicar em "Editar", preencher os inputs
  useEffect(() => {
    if (editingClient) {
      setName(editingClient.name);
      setEmail(editingClient.email);
    }
  }, [editingClient]);

  function handleSubmit(e) {
    e.preventDefault();

    onSaveClient({ name, email });

    setName("");
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <button type="submit">
        {editingClient ? "Salvar" : "Adicionar"}
      </button>
    </form>
  );


  
}

export default ClientForm;
