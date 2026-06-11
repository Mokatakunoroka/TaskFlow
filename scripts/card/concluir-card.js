import 
{ 
    ConcluirCard,
    idUser
}
from "./help-card/help-card.js";

//Escuta os cliques da página para encontrar o botão de concluir
document.addEventListener("click", (event) =>
{
    //Se o clique não veio do botão de concluir, não faz nada
    if(!event.target.classList.contains("concluir-tarefa"))
    {
        return;
    }

    const card = event.target.closest(".task-item");
    const statusSpan = card.querySelector('.status');

    //Muda o status visualmente no card
    statusSpan.textContent = "concluido";
    statusSpan.className = "status concluido";

    //Muda o status também dentro do localStorage
    ConcluirCard(card.getAttribute("data-id"), idUser());
    event.target.disabled = true;
})
