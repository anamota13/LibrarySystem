class Livro {
  constructor(titulo, autor, anoPublicacao, isbn) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
    this.isbn = isbn;
    this.emprestado = false; 
  }

  emprestar() {
    this.emprestado = true; 
  }

  devolver() {
    this.emprestado = false; 
  }
}

module.exports = Livro;
