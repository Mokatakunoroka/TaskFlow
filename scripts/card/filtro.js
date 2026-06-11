import { carregarCards } from "./carregar-cards.js";

//Select responsável por escolher qual status vai aparecer
const filtroSelect = document.getElementById("filtro-status");

//Pega o valor selecionado e manda o carregamento refazer a lista
function aplicarFiltro() {
    const filtro = filtroSelect.value;
    carregarCards(filtro);
}

//Toda vez que o usuário trocar o filtro, atualiza os cards
filtroSelect.addEventListener("change", aplicarFiltro);

//Ao entrar na página, começa mostrando todas as tarefas
document.addEventListener("DOMContentLoaded", () => 
{
    if (filtroSelect) 
    {
        filtroSelect.value = "todos";
        carregarCards("todos");
    }
});
