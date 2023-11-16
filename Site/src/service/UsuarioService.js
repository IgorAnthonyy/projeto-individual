const UsuarioRepository = require("../repositories/usuarioRepository");

class UsuarioService {
    constructor(){
        this.usuarioRepository = new UsuarioRepository();
    }

    async login(usuario)
    {
        return await this.usuarioRepository.ObterUsuario(usuario);
    }
    async cadastro(usuario)
    {
        return await this.usuarioRepository.criarUsuario(usuario);
    }
    async cadastroEndereco(usuario)
    {
        return await this.usuarioRepository.criarUsuarioEndereco(usuario);
    }
}

module.exports = UsuarioService;