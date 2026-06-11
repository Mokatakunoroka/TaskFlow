import { desativarUsuarios } from "./cadastro/help-cadastro.js"

//Botão usado para sair da conta atual
const sair = document.getElementById("btn-sair");

//Desativa o usuário logado e volta para a página de login
sair.addEventListener("click", () => 
{
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    desativarUsuarios(usuarios);
    window.location.href = "../../front-end/pages/login.html";
})

