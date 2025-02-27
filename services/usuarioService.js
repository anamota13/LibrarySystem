const Usuario = require('../models/usuario');
const usuarios = [];

class UsuarioService {
  static criarUsuario(nome, email) {
    const usuario = new Usuario(nome, email);
    usuarios.push(usuario);
    return usuario;
  }

  static listarUsuarios() {
    return usuarios;
  }

  static deletarUsuario(email) {
    const index = usuarios.findIndex(u => u.email === email);
    if (index !== -1) {
      usuarios.splice(index, 1); 
      return true;
    }
    return false;
  }
}

module.exports = UsuarioService;
