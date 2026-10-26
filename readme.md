# Projeto Final de PPI (4ª Etapa) - Sistema de Gerenciamento de Livros

Este projeto é uma aplicação web desenvolvida para a avaliação final da 4ª etapa da disciplina de **Programação para Internet (PPI)**, do curso Técnico Integrado em Informática no IFRN Campus Macau.

---

## 👨‍🎓 Autor & Informações Acadêmicas

* **Aluno:** Phelipy GF. Julião
* **Curso:** Técnico Integrado em Informática (4º Ano)
* **Instituição:** Instituto Federal do Rio Grande do Norte (IFRN) — Campus Macau
* **Disciplina:** Programação para Internet (PPI)
* **Professor:** Tiago de Oliveira Barreto

---

## 🛠️ Tecnologias Utilizadas

A aplicação foi construída utilizando o ambiente Node.js e as seguintes bibliotecas/tecnologias:

* [**Express**](https://expressjs.com/): Framework web para criação das rotas e servidor HTTP.
* [**Express Handlebars**](https://www.npmjs.com/package/express-handlebars): Template engine para renderização das páginas dinâmicas.
* [**MySQL2**](https://www.npmjs.com/package/mysql2): Driver de conexão e manipulação do banco de dados MySQL.
* [**Nodemon**](https://www.npmjs.com/package/nodemon): Ferramenta para reinicialização automática do servidor durante o desenvolvimento.
* **CSS3 / HTML5:** Estilização e estruturação visual das páginas.

---

## 📁 Estrutura do Projeto

A organização dos diretórios e arquivos do repositório segue a estrutura abaixo:

```text
PROJETO_FINAL_PPI_2026/
├── node_modules/
├── public/
│   └── css/
│       ├── home.css
│       ├── main.css
│       ├── registerBooks.css
│       └── style.css
├── views/
│   ├── layouts/
│   │   └── main.handlebars
│   ├── home.handlebars
│   └── registerBooks.handlebars
├── index.js
├── package.json
├── package-lock.json
├── script bd_livros_4m.sql
└── README.md
```

---

## ⚙️ Guia do Passo a Passo (Construção do Projeto)

Caso queira recriar a estrutura do projeto do zero, siga as etapas abaixo:

1. **Iniciar o projeto Node.js:**
   ```bash
   npm init -y
   ```
   *(Cria o arquivo `package.json` base no diretório)*

2. **Instalar as dependências necessárias:**
   ```bash
   npm install express nodemon express-handlebars mysql2
   ```

3. **Configurar os scripts no `package.json`:**
   Abra o arquivo `package.json` e adicione os scripts de execução dentro da seção `"scripts"`:
   ```json
   "scripts": {
     "start": "node index.js",
     "dev": "nodemon index.js"
   }
   ```

4. **Criar a estrutura de pastas e templates (Handlebars):**
   * Crie a pasta `views/` para armazenar os arquivos de templates principais (`.handlebars`).
   * Crie a subpasta `views/layouts/` para armazenar o arquivo principal de layout (`main.handlebars`).
   * Crie a pasta `public/css/` para armazenar os arquivos de estilização estáticos.

5. **Configurar o Banco de Dados:**
   * Importe e execute o arquivo `script bd_livros_4m.sql` no seu MySQL Server para gerar a base de dados e tabelas do projeto.

---

## 🚀 Como Executar o Projeto Criado

### Pré-requisitos

* Node.js instalado na máquina.
* Servidor MySQL em execução (ex: MySQL Workbench, XAMPP, etc.).

### Executando

1. **Instale as dependências (se clonou o repositório):**
   ```bash
   npm install
   ```

2. **Importe o script SQL:**
   Execute o script `script bd_livros_4m.sql` no banco de dados local.

3. **Inicie a aplicação:**
   * **Modo Padrão:**
     ```bash
     npm start
     ```
   * **Modo Desenvolvimento (com reinicialização automática):**
     ```bash
     npm run dev
     ```

4. **Acesse no navegador:**
   Abra [http://localhost:3000](http://localhost:3000) (ou na porta configurada no seu `index.js`).

---

## 📝 Funcionalidades

* Visualização e listagem dos livros cadastrados (`home.handlebars`).
* Formulário e rotas para cadastro de novos livros (`registerBooks.handlebars`).
* Integração e persistência dos dados via banco MySQL com `mysql2`.