const Livro = require('../models/livro');
const livros = [];  

class LivroService {
  // Função para criar um livro
  static criarLivro(titulo, autor, anoPublicacao, isbn) {
    const livro = new Livro(titulo, autor, anoPublicacao, isbn);
    livros.push(livro);
    console.log(livros);
    return livro;
  }

  // Função para consultar livros disponíveis
  static consultarLivrosDisponiveis() {
    return livros.filter(l => !l.emprestado);  // Retorna apenas os livros não emprestados
  }

  // Função para deletar um livro
  static deletarLivro(isbn) {
    const index = livros.findIndex(l => l.isbn === isbn);
    if (index !== -1) {
      livros.splice(index, 1);  // Remove o livro do array
      return true;
    }
    return false;
  }

  // Função para consultar um livro específico pelo ISBN
  static consultarLivroPorIsbn(isbn) {
    return livros.find(l => l.isbn === isbn);  // Retorna o livro com o ISBN fornecido
  }
}

module.exports = LivroService;
