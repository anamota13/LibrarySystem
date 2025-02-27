const UsuarioService = require('../services/usuarioService'); 
const LivroService = require('../services/livroService');  
const Emprestimo = require('../models/emprestimo');
const emprestimos = []; 

class EmprestimoService {
  static emprestarLivro(isbn, email) {
    const livro = LivroService.consultarLivroPorIsbn(isbn); 

    
    if (!livro || livro.emprestado) {
      throw new Error('Livro não disponível ou não encontrado.');
    }

    
    const usuario = UsuarioService.consultarUsuarioPorEmail(email); 

    if (!usuario) {
      throw new Error('Usuário não encontrado.');
    }

    // Marca o livro como emprestado
    livro.emprestar();

    // Cria o empréstimo e o adiciona ao array de empréstimos
    const emprestimo = new Emprestimo(livro, usuario, new Date());
    emprestimos.push(emprestimo);

    return emprestimo;
  }

  static devolverLivro(isbn, email) {
    const emprestimo = emprestimos.find(e => e.livro.isbn === isbn && e.usuario.email === email);

    if (!emprestimo) {
      throw new Error('Empréstimo não encontrado.');
    }

    
    emprestimo.livro.devolver();
    return emprestimo;
  }

  static consultarEmprestimos() {
    return emprestimos;
  }
}

module.exports = EmprestimoService;
