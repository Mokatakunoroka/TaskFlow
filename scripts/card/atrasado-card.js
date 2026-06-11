import { CardsUser } from "./carregar-cards.js"

//Verifica se o prazo da tarefa já ficou para trás
function tarefaAtrasada(tarefa)
{
    const prazo = new Date(tarefa.data);
    prazo.setHours(0, 0, 0, 0);

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    return prazo < hoje;
}

//Ao clicar na página, ele atualiza as tarefas pendentes que passaram do prazo
document.addEventListener("click", () => 
{
    const cards = JSON.parse(localStorage.getItem("cards")) || [];
    const cardsUser = CardsUser(cards);

    //Percorre as tarefas do usuário ativo procurando atrasadas
    cardsUser.forEach(card => 
    {
        if (tarefaAtrasada(card) && card.status == "pendente")
        {
            //Atualiza o card na tela
            const tarefa = document.querySelector(`[data-id="${card.idCard}"]`);
            const span = tarefa.querySelector(".status");

            span.setAttribute("class", "status atrasado");
            span.textContent = "atrasado";
            tarefa.setAttribute("data-status", "atrasado");

            card.status = "atrasado";

            //Salva a mudança também no localStorage
            localStorage.setItem("cards", JSON.stringify(cards));
        }    
    });
})
