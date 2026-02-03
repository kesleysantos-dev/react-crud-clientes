function ClientList({ clients, onDeleteClient, onEditClient }) {
  return (
    <ul>
      {clients.map((client) => (
        <li key={client.id}>
          <div className="client-info">
            <strong>{client.name}</strong>
            <span>{client.email}</span>
          </div>

          <div className="client-actions">
            <button onClick={() => onEditClient(client)}>
              Editar
            </button>

            <button onClick={() => onDeleteClient(client.id)}>
              Excluir
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ClientList;
