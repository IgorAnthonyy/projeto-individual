const { executar, GetConnection } = require('../database/database');

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

    async criarUsuario(usuarioComEndereco) {
        var connection = await GetConnection();
        const { email, senha, nome, telefone } = usuarioComEndereco;
        const sqlInsertUsuario = `INSERT INTO usuario (email, senha, nome, telefone) VALUES (?, ?, ?, ?)`

        await connection.execute(sqlInsertUsuario, [email, senha, nome, telefone]);

        const [rows] = await connection.execute('SELECT LAST_INSERT_ID() as idUsuario');

        const idUsuario = rows[0].idUsuario;

        await this.#criarUsuarioEndereco(connection, { ...usuarioComEndereco, idUsuario: idUsuario });
    }

    async #criarUsuarioEndereco(connection, endereco) {
        const { cep, uf, cidade, bairro, rua, complemento, idUsuario } = endereco;

        const sqlInsertEndereco = `INSERT INTO endereco (cep, uf, cidade, bairro, rua, complemento, fkUsuario) VALUES (?, ?, ?, ?, ?, ?, ?);`;

        await connection.execute(sqlInsertEndereco, [cep, uf, cidade, bairro, rua, complemento, idUsuario]);
    }

    async validarEmailExistente(validaEmail) {
        var connection = await GetConnection();
        const { email } = validaEmail;

        const sqlValidaEmail = `SELECT * FROM usuario WHERE email = ? LIMIT 1;`;

        const [rows] = await connection.query(sqlValidaEmail, [email]);

        return rows;
    }
}


// Analisar se é um array ou um objetvo

module.exports = UsuarioRepository;