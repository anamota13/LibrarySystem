const LivroService = require('../services/livroService'); 


class LivroController {
  static cadastrarLivro(req, res) {
    const { titulo, autor, anoPublicacao, isbn } = req.body;
    const livro = LivroService.criarLivro(titulo, autor, anoPublicacao, isbn);
    console.log('Livro criado:', livro); // Log para verificar se o livro foi criado corretamente
    res.status(201).json(livro);
  }

  static consultarLivrosDisponiveis(req, res) {
    const livros = LivroService.consultarLivrosDisponiveis();
    console.log('Livros disponíveis:', livros); // Log para verificar se os livros estão disponíveis
    res.json(livros);
  }

  static deletarLivro(req, res) {
    const { isbn } = req.params;
    const sucesso = LivroService.deletarLivro(isbn);
    if (sucesso) {
      res.status(200).json({ message: 'Livro deletado com sucesso!' });
    } else {
      res.status(404).json({ message: 'Livro não encontrado.' });
    }
  }

  static consultarLivroPorIsbn(req, res) {
    const { isbn } = req.params;
    const livro = LivroService.consultarLivroPorIsbn(isbn);
    if (livro) {
      console.log('Livro encontrado:', livro); // Log para verificar se o livro foi encontrado
      res.json(livro);
    } else {
      res.status(404).json({ message: 'Livro não encontrado.' });
    }
  }
}

module.exports = LivroController;
