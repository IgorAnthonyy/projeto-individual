const UsuarioRepository = require("../repositories/usuarioRepository");
const ResponseResult = require("../models/responseResult")

class UsuarioService {
    constructor() {
        this.usuarioRepository = new UsuarioRepository();
    }

    async login(usuario) {
        return await this.usuarioRepository.ObterUsuario(usuario);
    }
    async cadastrar(usuario) {
        const result = new ResponseResult();

        var validacao = await this.usuarioRepository.validarEmailExistente(usuario)

        if (usuario.email == validacao[0]?.email) {
            result.atribuirErros('Email existente');
            return result;
        }

        await this.usuarioRepository.criarUsuario(usuario);

        return result;
    }
}

// o que está retornando?????
// melhor amigo do programador CONSOLE LOG
// para chamar o objeto, primeiro chama ele e coloca . o atributo

module.exports = UsuarioService;