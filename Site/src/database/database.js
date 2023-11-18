const mysql = require("mysql2");
const mysqlPromise = require('mysql2/promise');

var mySqlConfig = {
    host: "localhost",
    database: "codecraft",
    user: "root",
    password: "fUtur@13",
};

async function GetConnection() {
    const connection = await mysqlPromise.createConnection(mySqlConfig);

    connection.on('error', function (err) {
        console.log(`Error while creating a MySQL connection: ${err.toString()}`);    
    });

    return connection;
}

function executar(instrucao) {
    return new Promise(function (resolve, reject) {
        var conexao = mysql.createConnection(mySqlConfig);
        conexao.connect();
        conexao.query(instrucao, function (erro, resultados) {
            conexao.end();
            if (erro) {
                reject(erro);
            }
            console.log(resultados);
            resolve(resultados);
        });
        conexao.on('error', function (erro) {
            return ("ERRO NO MySQL WORKBENCH: ", erro.sqlMessage);
        });
    });
}

module.exports = { executar, GetConnection };