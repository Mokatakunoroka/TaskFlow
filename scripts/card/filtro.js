import { carregarCards } from "./carregar-cards.js";

const filtroSelect = document.getElementById("filtro-status");

function aplicarFiltro() {
    const filtro = filtroSelect.value;
    carregarCards(filtro);
}

filtroSelect.addEventListener("change", aplicarFiltro);

document.addEventListener("DOMContentLoaded", () => 
{
    if (filtroSelect) 
    {
        filtroSelect.value = "todos";
        carregarCards("todos");
    }
});