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
    async cadastrar(req, res) {
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

        var usuarioAuth = await this.usuarioService.cadastrar(usuario);

        const { notification } = usuarioAuth;

        if (notification.length != 0) {
            res.status(400).json({ notification });
            return;
        }

        res.status(201).json(usuarioAuth)
    }
}

module.exports = UsuarioController;

// o que é uma class - Uma classe é uma forma (molde)

//login > app.js > route > controller > service > repository > (repository chama o bd)