import { CardsUser } from "./carregar-cards.js"
function tarefaAtrasada(tarefa)
{
    const prazo = new Date(tarefa.data);
    prazo.setHours(0, 0, 0, 0);

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    return prazo < hoje;
}

document.addEventListener("click", () => 
{
    const cards = JSON.parse(localStorage.getItem("cards")) || [];
    const cardsUser = CardsUser(cards);

    cardsUser.forEach(card => 
    {
        if (tarefaAtrasada(card) && card.status !== "atrasado")
        {
            const tarefa = document.querySelector(`[data-id="${card.idCard}"]`);
            const span = tarefa.querySelector(".status");

            span.setAttribute("class", "status atrasado");
            span.textContent = "atrasado";
            tarefa.setAttribute("data-status", "atrasado");

            card.status = "atrasado";

            localStorage.setItem("cards", JSON.stringify(cards));
        }    
    });
})