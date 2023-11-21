var database = require("../database/config")

function autenticar(email, senha, idUsuario) {
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    consultarTelefone(email, senha)
    return database.executar(instrucao);
}

function cadastrar(email, senha, nome, telefone) {
    
    var instrucao = `
        INSERT INTO usuario (email, senha, nome ,telefone) VALUES ('${email}', '${senha}', '${nome}','${telefone}');
    `;

    return database.executar(instrucao);

}

    function consultarTelefone (email, senha){
    var instrucao = `
        SELECT telefone FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    return database.executar(instrucao);
}
module.exports = {
    autenticar,
    cadastrar,
    consultarTelefone,
};