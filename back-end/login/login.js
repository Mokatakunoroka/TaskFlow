import { ValidarUsuario, PegarValores, MostrarErro, ativarUsuario } from "./help-login.js";

const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const botaoLogin = document.getElementById("btn-login");

botaoLogin.addEventListener("click", Login)

function Login(event)
{
    event.preventDefault();

    const dados = PegarValores();

    try
    {
        const usuarioValidado = ValidarUsuario(dados.email.trim(), dados.senha.trim());

        ativarUsuario(usuarios, dados.email);

        window.location.href = "../../front-end/pages/index.html"
    }
    catch (erro)
    {
        MostrarErro(erro.message);
    }
}
