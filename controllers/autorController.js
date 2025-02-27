const AutorService = require('../services/autorService');

class AutorController {
  static cadastrarAutor(req, res) {
    const { nome, nacionalidade } = req.body;
    const autor = AutorService.criarAutor(nome, nacionalidade);
    res.status(201).json(autor); 
  }

  static listarAutores(req, res) {
    const autores = AutorService.listarAutores();
    res.json(autores);
  }

  static deletarAutor(req, res) {
    const { nome } = req.params;
    const sucesso = AutorService.deletarAutor(nome);
    if (sucesso) {
      res.status(200).json({ message: "Autor deletado com sucesso!" });
    } else {
      res.status(404).json({ message: "Autor não encontrado." });
    }
  }
}

module.exports = AutorController;
