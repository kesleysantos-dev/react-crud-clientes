# React CRUD de Clientes

Projeto simples de CRUD (Create, Read, Update, Delete) desenvolvido com React, com foco em estudo e prática de consumo de API e gerenciamento de estado.

## 📌 Funcionalidades

- Listar clientes
- Cadastrar novo cliente
- Editar cliente existente
- Remover cliente
- Integração com API REST

## 🛠️ Tecnologias utilizadas

- React
- Vite
- JavaScript
- CSS
- Node.js (API)

## 🧠 Conceitos praticados

- Componentização
- Hooks (`useState`, `useEffect`)
- Comunicação entre componentes via props
- Consumo de API com `fetch`
- Fluxo de edição de dados
- Organização de pastas (components, pages, services)

## ▶️ Como rodar o projeto

## Frontend
```bash
npm install
npm run dev

### Backend (API)

Para iniciar o backend, execute:

```bash
node server.js


A aplicação frontend roda em:
http://localhost:5173

A API roda em:
http://localhost:3000


###ESTRUTURA DO PROJETO:
src/
 ├─ components/
 │   ├─ ClientForm.jsx
 │   └─ ClientList.jsx
 ├─ pages/
 │   └─ Home.jsx
 ├─ services/
 │   └─ api.js
 └─ index.css
