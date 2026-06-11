import 
{ 
    idUser,
    SumirRelogio,
    AparecerTask,
    AparecerRelogio,
    SumirTask
} from "./help-card/help-card.js";

import { CriarTask } from "./adicionar-card.js"

//Assim que a página carregar, ele já puxa os cards salvos
document.addEventListener("DOMContentLoaded", carregarCards)

//Carrega os cards do usuário ativo e aplica o filtro escolhido
export function carregarCards(filtro = "todos") {
    const container = document.getElementById("conteudo-task");
    container.innerHTML = "";

    //Pega todos os cards salvos e separa só os cards do usuário atual
    const cards = JSON.parse(localStorage.getItem("cards")) || [];
    const cardsUser = CardsUser(cards);

    //Se o usuário não tiver tarefa, mostra o card do relógio
    if (!cardsUser || cardsUser.length === 0) 
    {
        AparecerRelogio(MensagemFiltroVazio(filtro));
        SumirTask();
        return;
    }

    let tarefasFiltradas = cardsUser;

    //Quando não for "todos", deixa na tela apenas o status escolhido
    if (filtro !== "todos")
    {
        tarefasFiltradas = cardsUser.filter(tarefa =>
        {
            if ( filtro === "pendente"  ||
                 filtro === "concluido" ||
                 filtro === "atrasado" )
            {
                return tarefa.status === filtro;
            }
            return true;
        });
    }

    //Se o filtro não encontrou nada, mostra uma mensagem personalizada
    if (tarefasFiltradas.length === 0)
    {
        AparecerRelogio(MensagemFiltroVazio(filtro));
        SumirTask();
        return;
    }

    //Cria cada card filtrado novamente na tela
    tarefasFiltradas.forEach(card => 
    {
        CriarTask(
            card.idCard,
            card.nome,
            card.descricao,
            card.status,
            card.data
        );
    });

    SumirRelogio();
    AparecerTask();
}

//Procura no localStorage o grupo de cards que pertence ao usuário logado
export function CardsUser(cards) 
{
    const User = cards.find(card => card.id == Number(idUser()));
    return User ? User.card : [];
}

//Define a mensagem do relógio de acordo com o filtro escolhido
function MensagemFiltroVazio(filtro)
{
    if (filtro === "concluido")
    {
        return "Não tem nenhuma tarefa concluida.";
    }

    if (filtro === "pendente")
    {
        return "Não tem nenhuma tarefa pendente.";
    }

    if (filtro === "atrasado")
    {
        return "Não tem nenhuma tarefa atrasada.";
    }

    return "Ainda não foi adicionada nenhuma tarefa!";
}
