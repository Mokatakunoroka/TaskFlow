import {
    validarEmail,
    validarSenha,
    pegarValores,
    mostrarErro,
    desativarUsuarios,
    verificarDuplicidade
    } from "./validacoes.js";

const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

const botaoCadastrar = document.getElementById("btn-cadastro");

botaoCadastrar.addEventListener("click", cadastrar)

function cadastrar(e)
{
    e.preventDefault();
    const dados = pegarValores();
    try
    {
        validarEmail(dados.email);
        validarSenha(dados.senha, dados["confirm-senha"]);
        verificarDuplicidade(usuarios, dados.email);
        
        desativarUsuarios(usuarios);
        const novoUsuario = 
        {
            email: dados.email,
            senha: dados.senha,
            id: usuarios.length + 1,
            ativo: true
        }

        usuarios.push(novoUsuario)

        localStorage.setItem("usuarios", JSON.stringify(usuarios, null, 2))

        console.log("cheguei aqui")
        window.location.href = "../../front-end/pages/index.html"
    }
    catch (erro)
    {
        mostrarErro(erro.message)
    }
}