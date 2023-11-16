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
    async criarUsuario(usuario) {
        const { email, senha, nome, telefone, cep, uf, cidade, bairro, rua, complemento} = usuario;

        return await executar(
            `INSER INTO endereco (cep, uf, cidade, bairro, rua, complemento) VALUES
             ('${cep}', '${uf}', '${cidade}', '${bairro}', '${rua}', '${complemento}');
             
             INSER INTO usuario (email, senha, nome, telefone, fkEndereco) VALUES
            ('${email}', '${senha}', '${nome}', '${telefone}', '${rua}');   
            `
            );
    }
}


module.exports = UsuarioRepository;