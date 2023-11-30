function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var telefone = sessionStorage.TELEFONE_USUARIO;
    var cep = sessionStorage.CEP_USUARIO;
   
    var bNome = document.getElementById("b_nome");
    var bEmail = document.getElementById("b_email")
    var usuarioNome = document.getElementById("usuario_nome")
    var bTelefone = document.getElementById("b_telefone")

    if (email != null && nome != null) {
        user.style.display = 'flex'
        cel.style.display = 'none'
        bNome.innerHTML = nome
        usuarioNome.innerHTML = nome
        bEmail.innerHTML = email
        bTelefone.innerHTML = telefone

    } 
    if(cep != null){
        bxEn.style.display = 'none'
    }
}
function sair(){

    sessionStorage.removeItem('EMAIL_USUARIO')
    sessionStorage.removeItem('NOME_USUARIO')
    sessionStorage.removeItem('ID_USUARIO')
    sessionStorage.removeItem('TELEFONE_USUARIO')
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