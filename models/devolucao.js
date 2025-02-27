const Emprestimo = require('./emprestimo');

class Devolucao extends Emprestimo {
  constructor(livro, usuario, dataEmp, dataDev) {
    super(livro, usuario, dataEmp); 
    this.dataDev = dataDev;  
    this.livro.emprestado = false;  
  }
}

module.exports = Devolucao;
