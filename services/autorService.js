const Autor = require('../models/autor');
const autores = []; // Lista onde os autores serão armazenados.

class AutorService {
  static criarAutor(nome, nacionalidade) {
    const autor = new Autor(nome, nacionalidade);
    autores.push(autor);  // Adiciona o autor à lista de autores
    return autor;
  }

  static listarAutores() {
    return autores; // Retorna todos os autores cadastrados
  }

  static deletarAutor(nome) {
    const index = autores.findIndex(a => a.nome === nome);
    if (index !== -1) {
      autores.splice(index, 1); // Remove o autor pelo nome
      return true;
    }
    return false;
  }
}

module.exports = AutorService;
