const UsuarioService = require('../services/usuarioService');

class UsuarioController {
  // Função para cadastrar o usuário
  static cadastrarUsuario(req, res) {
    const { nome, email } = req.body;
    const usuario = UsuarioService.cadastrarUsuario(nome, email);
    res.status(201).json(usuario);
  }

  // Função para listar todos os usuários
  static listarUsuarios(req, res) {
    const usuarios = UsuarioService.listarUsuarios();
    res.status(200).json(usuarios);
  }

  // Função para consultar um usuário por e-mail
  static consultarUsuarioPorEmail(req, res) {
    const { email } = req.params;
    console.log(`Buscando usuário com o e-mail: ${email}`);  // Log para verificar o e-mail recebido
    try {
      const usuario = UsuarioService.consultarUsuarioPorEmail(email);
      if (!usuario) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
      }
      res.status(200).json(usuario);  // Retorna o usuário se encontrado
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // Função para deletar o usuário
  static deletarUsuario(req, res) {
    const { email } = req.params;
    const sucesso = UsuarioService.deletarUsuario(email);
    if (sucesso) {
      res.status(200).json({ message: 'Usuário deletado com sucesso!' });
    } else {
      res.status(404).json({ message: 'Usuário não encontrado.' });
    }
  }
}

module.exports = UsuarioController;
