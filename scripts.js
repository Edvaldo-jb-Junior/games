const login = document.querySelector(".caixa-login")

const cadastro = document.querySelector(".caixa-cadastro")

function logain(){
    login.style.left = "80%"
    login.style.transform = "translateX(-50%)"
}

function novo(){
    cadastro.style.left = "80%"
    cadastro.style.transform = "translateX(-50%)"
}

function esconder(){
    login.style.left = "-450%"
    login.style.transform = "translateX(0)"
    cadastro.style.left = "-450%"
    cadastro.style.transform = "translateX(0)"
}