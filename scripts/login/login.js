//importa as funções de help-login
import { 
    ValidarUsuario,
    PegarValores,
    MostrarErro,
    ativarUsuario, 
    desativarUsuarios} from "./help-login.js";

//armazena o JSON em uma constante
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

//Botão que posteriormente receberá um evento de click
const botaoLogin = document.getElementById("btn-login");

//o botão está ouvindo o evento "click" e assim que for clicado ele vai chamar a função Login
botaoLogin.addEventListener("click", Login)


//Realiza o Login do usuário
function Login(event)
{
    //Não permite a tela recarregar devido ao formulário
    event.preventDefault();

    //Puxa os valores dos inputs e armazena
    const dados = PegarValores();

    //try é usado para ver se vai acontecer algum erro
    try
    {
        //uma função que valida o usuário, caso contrário ele lança um erro
        ValidarUsuario(dados.email.trim(), dados.senha.trim());

        //Desativa todos os usuários
        desativarUsuarios(usuarios);

        //Ativa o usuário
        ativarUsuario(usuarios, dados.email);

        //Muda a página para o index.html
        window.location.href = "../../front-end/pages/index.html"
    }
    catch (erro)
    {
        //Mostra o erro lançado
        MostrarErro(erro.message);
    }
}

desativarUsuarios(usuarios);
