const login = document.querySelector(".caixa-login")

const cadastro = document.querySelector(".caixa-cadastro")

const mascara = document.querySelector(".mascara-formulario")

function logain(){
    login.style.left = "650px"
    login.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function novo(){
    cadastro.style.left = "640px"
    cadastro.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function esconder(){
    login.style.left = "-410%"
    login.style.transform = "translateX(0)"
    cadastro.style.left = "-410%"
    cadastro.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}