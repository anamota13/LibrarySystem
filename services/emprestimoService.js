const Livro = require('../models/livro'); 
const Usuario = require('../models/usuario'); 
const Emprestimo = require('../models/emprestimo');
const livros = []; 
const usuarios = []; 
const emprestimos = []; 

class EmprestimoService {
  
  static emprestarLivro(isbn, email) {
    const livro = livros.find(l => l.isbn === isbn && !l.emprestado); 
    const usuario = usuarios.find(u => u.email === email);

    if (!livro) {
      throw new Error('Livro não disponível ou não encontrado.');
    }

    if (!usuario) {
      throw new Error('Usuário não encontrado.');
    }

   
    livro.emprestar();

    
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
