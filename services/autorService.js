const Autor = require('../models/autor');
const autores = [];

class AutorService {
  static criarAutor(nome, nacionalidade) {
    const autor = new Autor(nome, nacionalidade);
    autores.push(autor);
    return autor;
  }

  static listarAutores() {
    return autores;
  }

  static deletarAutor(nome) {
    const index = autores.findIndex(a => a.nome === nome);
    if (index !== -1) {
      autores.splice(index, 1); 
      return true;
    }
    return false;
  }
}

module.exports = AutorService;
