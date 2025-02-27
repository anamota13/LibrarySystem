const Livro = require('../models/livro'); 
const livros = [];

class LivroService {
  static criarLivro(titulo, autor, anoPublicacao, isbn) {
    const livro = new Livro(titulo, autor, anoPublicacao, isbn);
    livros.push(livro);
    return livro;
  }

  
  static consultarLivrosDisponiveis() {
    return livros.filter(livro => !livro.emprestado);
  }

  static deletarLivro(isbn) {
    const index = livros.findIndex(l => l.isbn === isbn);
    if (index !== -1) {
      livros.splice(index, 1);
      return true;
    }
    return false;
  }
}

module.exports = LivroService;
