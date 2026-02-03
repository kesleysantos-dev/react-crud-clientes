const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// "Banco de dados" em memória
let clients = [
  { id: 1, name: "João", email: "joao@email.com" },
  { id: 2, name: "Maria", email: "maria@email.com" },
];

// GET - listar clientes
app.get("/clients", (req, res) => {
  res.json(clients);
});

// POST - criar cliente
app.post("/clients", (req, res) => {
  const newClient = {
    id: Date.now(),
    name: req.body.name,
    email: req.body.email,
  };

  clients.push(newClient);
  res.status(201).json(newClient);
});

// DELETE - Deletar Clientes
app.delete("/clients/:id", (req, res) => {
  const id = Number(req.params.id);

  clients = clients.filter((client) => client.id !== id);

  res.status(204).end();
});

//UPDATE - Editar Clientes
app.put("/clients/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = clients.findIndex(
    (client) => client.id === id
  );

  if (index === -1) {
    return res.status(404).json({ message: "Cliente não encontrado" });
  }

  clients[index] = {
    ...clients[index],
    ...req.body,
  };

  res.json(clients[index]);
});


// servidor
app.listen(PORT, () => {
  console.log(`✅ Backend rodando em http://localhost:${PORT}`);
});
