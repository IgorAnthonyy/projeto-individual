var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");
var quizController = require("../controllers/quizController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});
router.post("/quizHtml", function (req, res) {
    quizController.resultadoQuizHtml(req, res);
});
router.post("/quizCss", function (req, res) {
    quizController.resultadoQuizCss(req, res);
});
router.post("/analytics", function (req, res) {
    quizController.tentativaQuiz(req, res);
});
router.post("/analytics/dashboard", function (req, res) {
    quizController.pegarDadosQuiz(req, res);
});


module.exports = router;