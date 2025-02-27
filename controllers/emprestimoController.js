const EmprestimoService = require('../services/emprestimoService');

class EmprestimoController {
  static realizarEmprestimo(req, res) {
    const { livroIsbn, usuarioEmail } = req.body;
    try {
      const emprestimo = EmprestimoService.emprestarLivro(livroIsbn, usuarioEmail);
      res.status(201).json(emprestimo); 
    } catch (error) {
      res.status(400).json({ message: error.message }); 
    }
  }

  static devolverLivro(req, res) {
    const { livroIsbn, usuarioEmail } = req.body;
    try {
      const devolucao = EmprestimoService.devolverLivro(livroIsbn, usuarioEmail);
      res.status(200).json(devolucao); 
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static consultarEmprestimos(req, res) {
    const emprestimos = EmprestimoService.consultarEmprestimos();
    res.json(emprestimos); 
  }
}

module.exports = EmprestimoController;
