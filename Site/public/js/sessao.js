function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("user");
    var bNome = document.getElementById("b_nome");
    var bEmail = document.getElementById("b_email")
    var usuarioNome = document.getElementById("usuario_nome")
    var bTelefone = document.getElementById("b_telefone")
    var bCidade = document.getElementById("b_cidade")
    var bBairro = document.getElementById("b_bairro")
    var bRua = document.getElementById("b_rua")

    if (email != null && nome != null) {
        user.style.display = 'flex'
        cel.style.display = 'none'
        bNome.innerHTML = nome
        usuarioNome.innerHTML = nome
        bEmail.innerHTML = email
        bTelefone.innerHTML = telefone
    } 
}
function sair(){

    sessionStorage.removeItem('EMAIL_USUARIO')
    sessionStorage.removeItem('NOME_USUARIO')
    setTimeout(function () {
        window.location = "/login.html";
    }, 1000);
}
function perfil(){
    if(colAparecer.style.display == 'block'){
        colAparecer.style.display = 'none'
    }else {
        colAparecer.style.display = 'block'
    }
}