const executar = require('../database/database');

class UsuarioRepository {
    constructor() {
    }

    async ObterUsuario(usuario) {
        const { email, senha } = usuario;

        return await executar(
            `SELECT * 
             FROM usuario  
             WHERE email = '${email}'
               AND senha = '${senha}';`);
    }
}


module.exports = UsuarioRepository;