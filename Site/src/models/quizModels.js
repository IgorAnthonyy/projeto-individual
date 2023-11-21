var database = require("../database/config")

function resultadoQuizHtml(acertos, erros, idUsuario) {

    var instrucao = `
        INSERT INTO quizHtml (qtdDeAcertos, qtdDeErros, fkUsuario) VALUES (${acertos}, ${erros}, ${idUsuario});
    `;

    return database.executar(instrucao);

}
function resultadoQuizCss(acertos, erros, idUsuario) {

    var instrucao = `
        INSERT INTO quizCss (qtdDeAcertos, qtdDeErros, fkUsuario) VALUES (${acertos}, ${erros}, ${idUsuario});
    `;

    return database.executar(instrucao);

}
async function tentativaQuiz(idUsuario) {
    var quizHtmlSql = `
        SELECT count(idTentativa) as TentativaHTML FROM quizHtml WHERE fkUsuario = ${idUsuario};`;

    var quizHtml = await database.executar(quizHtmlSql);

    var quizCssSql = `
        SELECT count(idTentativa) as TentativaCss FROM quizCss WHERE fkUsuario = ${idUsuario};`;

    var quizCss = await database.executar(quizCssSql);

    return {
        tentativaQuizHtml: quizHtml[0].TentativaHTML,
        tentativaQuizCss: quizCss[0].TentativaCss,
        totalQuizRealizado: quizHtml[0].TentativaHTML + quizCss[0].TentativaCss
    }
}
async function pegarDadosQuiz(idUsuario) {
    var quizHtmlSql = `
        SELECT qtdDeAcertos as qtdAcertosHtml, qtdDeErros as qtdErrosHtml FROM quizHTml where fkUsuario = ${idUsuario};`;

    var quizHtml = await database.executar(quizHtmlSql);

    var quizCssSql = `
    SELECT qtdDeAcertos as qtdAcertosCss, qtdDeErros as qtdErrosCss FROM quizCss where fkUsuario = ${idUsuario};`;

    var quizCss = await database.executar(quizCssSql);


    console.log(quizHtml)
    console.log(quizCss)
    return {
        dadosQuizHtml: quizHtml,
        dadosQuizCss: quizCss,
    }
}

module.exports = {
    resultadoQuizHtml,
    resultadoQuizCss,
    tentativaQuiz,
    pegarDadosQuiz
};