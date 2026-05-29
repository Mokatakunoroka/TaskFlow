import { ValidarUsuario, PegarValores, MostrarErro } from "./help-login.js";

const botaoLogin = document.getElementById("btn-login");

botaoLogin.addEventListener("click", Login)

function Login(event)
{
    event.preventDefault();
    const dados = PegarValores();

    const usuarioValidado = ValidarUsuario(dados.email.trim(), dados.senha.trim());

    if (usuarioValidado.ok)
    {
        window.location.href = "../../front-end/pages/index.html"
        return;
    }

    MostrarErro(usuarioValidado.mensagem);
}
