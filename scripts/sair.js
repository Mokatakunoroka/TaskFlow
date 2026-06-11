import { desativarUsuarios } from "./cadastro/help-cadastro.js"
const sair = document.getElementById("btn-sair");

sair.addEventListener("click", () => 
{
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    desativarUsuarios(usuarios);
    window.location.href = "../../front-end/pages/login.html";
})

