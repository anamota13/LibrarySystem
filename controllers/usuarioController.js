const UsuarioService = require('../services/usuarioService');

class UsuarioController {
  static cadastrarUsuario(req, res) {
    const { nome, email } = req.body;
    const usuario = UsuarioService.criarUsuario(nome, email);
    res.status(201).json(usuario); 
  }

  static listarUsuarios(req, res) {
    const usuarios = UsuarioService.listarUsuarios();
    res.json(usuarios);
  }

  static deletarUsuario(req, res) {
    const { email } = req.params;
    const sucesso = UsuarioService.deletarUsuario(email);
    if (sucesso) {
      res.status(200).json({ message: "Usuário deletado com sucesso!" });
    } else {
      res.status(404).json({ message: "Usuário não encontrado." });
    }
  }
}

module.exports = UsuarioController;
