import 
{ 
    ConcluirCard,
    idUser
}
from "./help-card/help-card.js";

document.addEventListener("click", (event) =>
{
    if(!event.target.classList.contains("concluir-tarefa"))
    {
        return;
    }

    const card = event.target.closest(".task-item");
    const statusSpan = card.querySelector('.status');


    statusSpan.textContent = "concluido";
    statusSpan.className = "status concluido";

    ConcluirCard(card.getAttribute("data-id"), idUser());
    event.target.disabled = true;
})