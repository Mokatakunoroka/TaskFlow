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
    const status = card.querySelectorAll("span")[1];

    status.textContent = "concluido";

    status.classList = "status concluido";

    ConcluirCard(Number(card.getAttribute("data-id")), Number(idUser()));
})