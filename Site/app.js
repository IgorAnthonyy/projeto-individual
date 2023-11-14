
const path = require("path");
const express = require("express");
var cors = require("cors");

const mainRouter = require("./src/routes/main-route");
const usuarioRouter = require("./src/routes/route-usuario")

const PORTA = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", mainRouter);
app.use("/usuario", usuarioRouter)

app.listen(3000, () => {
    console.log(`Estamos rodando na porta ${PORTA}`)
});