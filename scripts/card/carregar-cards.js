import 
{ 
    idUser,
    SumirRelogio,
    AparecerTask,
    AparecerRelogio,
    SumirTask
} from "./help-card/help-card.js";

import { CriarTask } from "./adicionar-card.js"

document.addEventListener("DOMContentLoaded", carregarCards)

export function carregarCards(filtro = "todos") {
    const container = document.getElementById("conteudo-task");
    container.innerHTML = "";

    const cards = JSON.parse(localStorage.getItem("cards")) || [];
    const cardsUser = CardsUser(cards);

    if (!cardsUser || cardsUser.length === 0) 
    {
        AparecerRelogio();
        SumirTask();
        return;
    }

    let tarefasFiltradas = cardsUser;

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

export function CardsUser(cards) 
{
    const User = cards.find(card => card.id == Number(idUser()));
    return User ? User.card : [];
}
