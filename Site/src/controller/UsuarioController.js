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
}

module.exports = UsuarioController;