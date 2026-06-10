import 
{ 
    idUser,
    SumirRelogio,
    AparecerTask
} from "./help-card/help-card.js";

import { CriarTask } from "./adicionar-card.js"

document.addEventListener("DOMContentLoaded", () =>
{
    const cards = JSON.parse(localStorage.getItem("cards")) || [];
    const User = cards.find(card => card.id == Number(idUser()));

    if (!User || User.card.length === 0)
    {
        return;
    }

    const cardsUser = User.card;

    cardsUser.forEach(card =>
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
})
