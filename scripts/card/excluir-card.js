import { AparecerRelogio, ExcluirCard, idUser, SumirTask } from "./help-card/help-card.js";

document.addEventListener("click", (event) =>
{
    if (!event.target.classList.contains("btn-fechar-card"))
    {
        return;      
    }

    const card = event.target.closest("article");
    card.style.display = "none";

    const cards = JSON.parse(
        localStorage.getItem("cards")
    ) || [];

    const cardUser = cards.find(
        card => card.id == Number(idUser())
    );

    if (cardUser.card.length <= 1)
    {
        AparecerRelogio();
        SumirTask();
    }

    ExcluirCard(Number(card.getAttribute("data-id")), Number(idUser()));

})