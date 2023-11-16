const express = require("express");
const UsuarioController = require("../controller/UsuarioController");
const router = express.Router();


const usuarioController = new UsuarioController();

router.post('/login', (req, res) => {
     usuarioController.login(req, res);

});
router.post('/cadastro', (req, res) => {
     usuarioController.cadastro(req, res);
});


module.exports = router;
