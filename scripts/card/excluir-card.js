import { AparecerRelogio, ExcluirCard, idUser, SumirTask } from "./help-card/help-card.js";

//Escuta os cliques para saber quando o usuário quer apagar um card
document.addEventListener("click", (event) =>
{
    //Se não clicou no botão de fechar, o código para por aqui
    if (!event.target.classList.contains("btn-fechar-card"))
    {
        return;      
    }

    const card = event.target.closest("article");
    const usuarioAtivo = Number(idUser());
    const idCard = Number(card.getAttribute("data-id"));

    //Garante que existe usuário ativo e card válido antes de excluir
    if (!usuarioAtivo || !idCard)
    {
        return;
    }

    //Remove a tarefa do localStorage
    const excluiu = ExcluirCard(idCard, usuarioAtivo);

    if (!excluiu)
    {
        return;
    }

    card.remove();

    //Depois de apagar, verifica se ainda sobrou algum card para o usuário
    const cardsAtualizados = JSON.parse(localStorage.getItem("cards")) || [];
    const cardUserAtualizado = cardsAtualizados.find(
        card => card.id == usuarioAtivo
    );

    if (!cardUserAtualizado || cardUserAtualizado.card.length === 0)
    {
        //Se não sobrou tarefa, volta para a tela do relógio
        AparecerRelogio();
        SumirTask();
    }

})
