React CRUD de Clientes

Projeto de CRUD (Create, Read, Update, Delete) desenvolvido com React, com foco em estudo e prática de consumo de API REST, gerenciamento de estado e organização de projeto frontend.

O sistema permite o gerenciamento básico de clientes, simulando um cenário comum de aplicações reais (painéis administrativos, sistemas internos, etc).

📌 Funcionalidades

Listagem de clientes

Cadastro de novos clientes

Edição de clientes existentes

Remoção de clientes

Integração com API REST

🛠️ Tecnologias utilizadas
Frontend

React

Vite

JavaScript

CSS

Backend

Node.js

Express

🧠 Conceitos praticados

Componentização no React

Hooks (useState, useEffect)

Comunicação entre componentes via props

Consumo de API com fetch

Controle de fluxo de edição (criar / editar)

Separação de responsabilidades (components, pages, services)

Integração frontend ↔ backend

🌐 Backend (API)

O backend está hospedado no Render (plano gratuito).

📌 Observações importantes:

A API pode levar alguns segundos para responder no primeiro acesso, pois o serviço pode entrar em modo de espera.

Os dados são armazenados em memória, apenas para fins de demonstração. Ao reiniciar o serviço, os dados podem ser resetados.

Endpoint principal da API:

/clients

▶️ Como rodar o projeto localmente (Frontend)
npm install
npm run dev


A aplicação frontend roda em:

http://localhost:5173

📁 Estrutura do projeto (Frontend)
src/
 ├─ components/
 │   ├─ ClientForm.jsx
 │   └─ ClientList.jsx
 ├─ pages/
 │   └─ Home.jsx
 ├─ services/
 │   └─ api.js
 └─ index.css

🎯 Objetivo do projeto

Este projeto foi desenvolvido com o objetivo de consolidar conhecimentos em React, especialmente no consumo de APIs e na construção de interfaces dinâmicas, servindo como peça de portfólio para vagas de Frontend Developer Júnior.