//importa as funções de help-cadastro
import {
    validarEmail,
    validarSenha,
    pegarValores,
    mostrarErro,
    desativarUsuarios,
    verificarDuplicidade
    } from "./help-cadastro.js";

//cria uma constante que recebe o Json usuários
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

//Um botão que posteriomente vai ouvir o evento click
const botaoCadastrar = document.getElementById("btn-cadastro");

//Ouve o evento click e assim que recebe ele executa a função cadastrar
botaoCadastrar.addEventListener("click", cadastrar)

//cadastra novos usuários
function cadastrar(event)
{
    //não permite que a página recarregue devido ao formulário
    event.preventDefault();

    //armazena os inputs do usuário
    const dados = pegarValores();
    try
    {
        //Valida Email, Senha e duplicidade caso alguma seja inválida, lança um erro que é tratado depois
        validarEmail(dados.email);
        validarSenha(dados.senha, dados["confirm-senha"]);
        verificarDuplicidade(usuarios, dados.email);
        
        //Desativa todos os usuários anteriores
        desativarUsuarios(usuarios);

        //Cria um objeto (dicionário) que recebe as informações do usuário
        const novoUsuario = 
        {
            //Dados principais do novo usuario
            email: dados.email,
            senha: dados.senha,
            id: usuarios.length + 1,
            ativo: true
        }

        //adiciona o novo usuário no array "usuarios"
        usuarios.push(novoUsuario)

        //adiciona o array "usuarios" no local storage
        localStorage.setItem("usuarios", JSON.stringify(usuarios, null, 2))

        //Muda a página para o index.html
        window.location.href = "../../front-end/pages/index.html"
    }
    catch (erro)
    {
        //Mostra as mensagens dos erros.
        mostrarErro(erro.message)
    }
}
