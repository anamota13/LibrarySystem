const express = require('express');
const bodyParser = require('body-parser');
const LivroController = require('./controllers/livroController.js');
const AutorController = require('./controllers/autorController.js');
const UsuarioController = require('./controllers/usuarioController.js');
const EmprestimoController = require('./controllers/emprestimoController.js');

const app = express();
app.use(bodyParser.json());


//Rota Livro
app.post('/livros', LivroController.cadastrarLivro);
app.get('/livros', LivroController.consultarLivrosDisponiveis);
app.delete('/livros/:isbn', LivroController.deletarLivro);
app.get('/livros/:isbn', LivroController.consultarLivroPorIsbn);



//Rota Autores
app.post('/autores', AutorController.cadastrarAutor);
app.get('/autores', AutorController.listarAutores);
app.delete('/autores/:nome', AutorController.deletarAutor);


//Rota Usuários
app.post('/usuarios', UsuarioController.cadastrarUsuario); 
app.get('/usuarios', UsuarioController.listarUsuarios); 
app.delete('/usuarios/:email', UsuarioController.deletarUsuario); 
app.get('/usuarios/:email', UsuarioController.consultarUsuarioPorEmail);


// Rotas Empréstimos
app.post('/emprestimos', EmprestimoController.realizarEmprestimo); 
app.post('/devolucoes', EmprestimoController.devolverLivro); 
app.get('/emprestimos', EmprestimoController.consultarEmprestimos);


// Iniciar o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });