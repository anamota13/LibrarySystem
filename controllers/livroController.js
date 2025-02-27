const LivroService = require('../services/livroService'); 

class LivroController {
  static cadastrarLivro(req, res) {
    const { titulo, autor, anoPublicacao, isbn } = req.body;
    const livro = LivroService.criarLivro(titulo, autor, anoPublicacao, isbn); 
    res.status(201).json(livro);
  }

  
  static consultarLivrosDisponiveis(req, res) {
    const livros = LivroService.consultarLivrosDisponiveis();
    res.json(livros);
  }

  static deletarLivro(req, res) {
    const { isbn } = req.params;
    const sucesso = LivroService.deletarLivro(isbn);
    if (sucesso) {
      res.status(200).json({ message: "Livro deletado com sucesso!" });
    } else {
      res.status(404).json({ message: "Livro não encontrado." });
    }
  }
}

module.exports = LivroController;
