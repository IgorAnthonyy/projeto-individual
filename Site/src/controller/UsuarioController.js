const UsuarioService = require("../service/UsuarioService");

class UsuarioController {
    constructor() {
        this.usuarioService = new UsuarioService();
    }

    async login(req, res) {
        var usuario = {
            email: req.body.email,
            senha: req.body.senha
        }

        var usuarioAuth = await this.usuarioService.login(usuario);

        res.status(200).json(usuarioAuth);
    }
    async cadastro(req, res){
        var usuario = {
            email: req.body.email,
            senha: req.body.senha,
            nome: req.body.nome,
            telefone: req.body.telefone,
            cep: req.body.cep,
            uf: req.body.uf,
            cidade: req.body.cidade,
            bairro: req.body.bairro,
            rua: req.body.rua,
            complemento: req.body.complemento
        }

        var usuarioAuth = await this.usuarioService.cadastro(usuario);

        res.status(200).json(usuarioAuth)
    }
}

module.exports = UsuarioController;