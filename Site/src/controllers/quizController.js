var quizModel = require("../models/quizModels");

function resultadoQuizHtml(req, res, idUsuario) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var acertos = req.body.acertosServer;
    var erros = req.body.errosServer;
    var idUsuario = req.body.idUsuarioServer;
    // Faça as validações dos valores

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    quizModel.resultadoQuizHtml(acertos, erros, idUsuario)
        .then(
            function (resultado) {
                res.status(201).json()
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function resultadoQuizCss(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var acertos = req.body.acertosServer;
    var erros = req.body.errosServer;
    var idUsuario = req.body.idUsuarioServer;
    // Faça as validações dos valores

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    quizModel.resultadoQuizCss(acertos, erros, idUsuario)
        .then(
            function (resultado) {
                res.status(201).json()
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function tentativaQuiz(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var idUsuario = req.body.idUsuarioServer;
    // Faça as validações dos valores

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    quizModel.tentativaQuiz(idUsuario)
        .then(
            function (resultado) {
                res.status(201).json(resultado)
            }
        ).catch(
            function (erro) {
                console.log("erro");
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function pegarDadosQuiz(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var idUsuario = req.body.idUsuarioServer;
    // Faça as validações dos valores

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    quizModel.pegarDadosQuiz(idUsuario)
        .then(
            function (resultado) {
                res.status(201).json(resultado)
            }
        ).catch(
            function (erro) {
                console.log("erro");
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}


module.exports = {
    resultadoQuizHtml,
    resultadoQuizCss,
    tentativaQuiz,
    pegarDadosQuiz
}