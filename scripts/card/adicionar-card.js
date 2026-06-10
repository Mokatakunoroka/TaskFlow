import {
    SumirRelogio,
    SubirProLocalStorage,
    AparecerTask,
    EncurtarDescricao
} from "./help-card/help-card.js"

import { input } from "./help-card/entrada-de-dados.js"

const botoes = document.querySelectorAll(".salvar-dialog");


botoes.forEach(botao =>
{
    botao.addEventListener("click", () =>
    {
        SumirRelogio();
        
        const dados = input(botao);

        const idCard = SubirProLocalStorage(
            dados.nome,
            dados.descricao,
            "pendente",
            dados.prazo
        );

        CriarTask(
            idCard,
            dados.nome,
            dados.descricao,
            "pendente",
            dados.prazo
        );

        AparecerTask();

    })
})

export function CriarTask(idCard, nome, descricao, status, prazo)
{
    const containerTask = document.getElementById("conteudo-task");

    containerTask.insertAdjacentHTML("beforeend",
    `
    <article class="task-item" data-id="${idCard}">
        <header class="header-task">
            <div class="info-geral">
                <span>Tarefa</span>
                <span class="status ${status.toLowerCase()}">${status}</span>
            </div>

            <button class="btn-fechar-card">x</button>
        </header>

        <div class="body-task">
            <h2>${nome}</h2>
            <p>${EncurtarDescricao(descricao)}</p>
        </div>

        <footer class="footer-task">
            <time>Prazo: ${prazo}</time>

            <button class="concluir-tarefa">
                CONCLUIR
            </button>
        </footer>
    </article>
    `);
}