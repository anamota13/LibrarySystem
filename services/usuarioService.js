class Usuario {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
  }
}

const usuarios = []; 

class UsuarioService {
  static cadastrarUsuario(nome, email) {
    const usuario = new Usuario(nome, email);
    usuarios.push(usuario);  
    return usuario;
  }

  // Função para listar todos os usuários
  static listarUsuarios() {
    return usuarios;
  }

  // Função para consultar um usuário por e-mail
  static consultarUsuarioPorEmail(email) {
    return usuarios.find(u => u.email.toLowerCase() === email.toLowerCase());
  }

  // Função para deletar um usuário
  static deletarUsuario(email) {
    const index = usuarios.findIndex(u => u.email.toLowerCase() === email.toLowerCase());
    if (index !== -1) {
      usuarios.splice(index, 1);  
      return true;
    }
    return false;  
  }
}

module.exports = UsuarioService;
