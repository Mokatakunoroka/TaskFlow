import { AparecerRelogio, ExcluirCard, idUser, SumirTask } from "./help-card/help-card.js";

document.addEventListener("click", (event) =>
{
    if (!event.target.classList.contains("btn-fechar-card"))
    {
        return;      
    }

    const card = event.target.closest("article");
    const usuarioAtivo = Number(idUser());
    const idCard = Number(card.getAttribute("data-id"));

    if (!usuarioAtivo || !idCard)
    {
        return;
    }

    const excluiu = ExcluirCard(idCard, usuarioAtivo);

    if (!excluiu)
    {
        return;
    }

    card.remove();

    const cardsAtualizados = JSON.parse(localStorage.getItem("cards")) || [];
    const cardUserAtualizado = cardsAtualizados.find(
        card => card.id == usuarioAtivo
    );

    if (!cardUserAtualizado || cardUserAtualizado.card.length === 0)
    {
        AparecerRelogio();
        SumirTask();
    }

})
