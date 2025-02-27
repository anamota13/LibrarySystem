# Sistema de Biblioteca - LibrarySystem

## Descrição

Este é um sistema de biblioteca simples desenvolvido com **Node.js**, utilizando conceitos de **Programação Orientada a Objetos (POO)**. O projeto permite o cadastro de livros, usuários e realiza operações de empréstimo e devolução de livros.

### Funcionalidades:
- Cadastro de livros
- Cadastro de usuários
- Realização de empréstimos
- Devolução de livros
- Consulta de empréstimos realizados

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express**: Framework para facilitar a criação da API.
- **Body-Parser**: Middleware para lidar com dados JSON nas requisições.
- **Programação Orientada a Objetos (POO)**: Estruturação do código utilizando classes e objetos.

## Estrutura de Pastas

O projeto está dividido nas seguintes pastas:

- **models**: Contém as classes que representam os modelos de dados (Livro, Usuário, Empréstimo).
- **services**: Contém as lógicas de negócio para manipulação dos dados (como empréstimos, devoluções, etc).
- **controllers**: Contém os controladores que fazem a ponte entre as rotas da API e os serviços.
- **routes**: Define as rotas da API para interagir com o sistema de biblioteca.

## Como Rodar o Projeto

### 1. Clonar o Repositório

Primeiro, clone o repositório para o seu computador:

```
git clone https://github.com/anamota13/LibrarySystem
```

### 2. Instalar Dependências
Após clonar o repositório, navegue até o diretório do projeto e instale as dependências:

```
cd LibrarySystem
npm install
```

### 3. Iniciar o Servidor
Para rodar o servidor, utilize o comando:

```
node App.js
```

### 4. Testar as Funcionalidades com o Postman
Agora, você pode usar o Postman para testar as rotas da API.

1. Cadastro de Livro
Endpoint: POST http://localhost:3000/livros

Corpo da requisição (exemplo):

```
{
  "titulo": "Dom Casmurro",
  "autor": "Machado de Assis",
  "anoPublicacao": 1899,
  "isbn": "978-8520911713"
}
```
2. Cadastrar Autores
Endpoint: POST http://localhost:3000/autores

Corpo da requisição (exemplo):

```
 {
  "nome": "Machado de Assis",
  "nacionalidade": "Brasileiro",
  "dataNascimento": "1839-06-21",
  "dataFalecimento": "1908-09-29"
}
```

3. Cadastro de Usuário
Endpoint: POST http://localhost:3000/usuarios

Corpo da requisição (exemplo):

```
{
    "nome": "João da Silva",
    "email": "joao.silva@gmail.com"
}
```

4. Realizar Empréstimo
Endpoint: POST http://localhost:3000/emprestimos

Corpo da requisição (exemplo):

```
  {
  "livroIsbn": "978-8520911713",
  "usuarioEmail": "joao.silva@gmail.com"
}
```

# Explicação Geral das Rotas
### Rota de Livros
- **GET /livros**: Consultar todos os livros disponíveis.
- **DELETE /livros/:isbn**: Deletar um livro pelo ISBN.
- **GET /livros/:isbn**: Consultar um livro específico pelo ISBN.

### Rota de Autores
- **POST /autores**: Cadastrar um novo autor.
- **GET /autores**: Listar todos os autores.
- **DELETE /autores/:nome**: Deletar um autor pelo nome.

### Rota de Usuários
- **POST /usuarios**: Cadastrar um novo usuário.
- **GET /usuarios**: Listar todos os usuários.
- **DELETE /usuarios/:email**: Deletar um usuário pelo email.
- **GET /usuarios/:email**: Consultar um usuário pelo email.

### Rota de Empréstimos
- **POST /emprestimos**: Realizar um empréstimo de livro.
- **POST /devolucoes**: Registrar a devolução de um livro.
- **GET /emprestimos**: Consultar todos os empréstimos realizados.

#### OBS: Certifique-se de que todas as dependências estão instaladas e que está dentro da pasta correta. 


