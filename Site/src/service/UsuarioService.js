const UsuarioRepository = require("../repositories/usuarioRepository");

class UsuarioService {
    constructor(){
        this.usuarioRepository = new UsuarioRepository();
    }

    async login(usuario)
    {
        return await this.usuarioRepository.ObterUsuario(usuario);
    }
}

module.exports = UsuarioService;