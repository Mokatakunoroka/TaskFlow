import {
    SumirRelogio,
    SubirProLocalStorage,
    AparecerTask,
    EncurtarDescricao
} from "./help-card/help-card.js"

import { input } from "./help-card/entrada-de-dados.js"

//Botões que salvam a tarefa dentro do modal
const botoes = document.querySelectorAll(".salvar-dialog");

//Cada botão recebe o evento para criar uma nova tarefa
botoes.forEach(botao =>
{
    botao.addEventListener("click", () =>
    {
        //Quando adiciona uma tarefa, o aviso do relógio sai da tela
        SumirRelogio();
        
        //Pega os dados digitados no modal
        const dados = input(botao);

        //Salva a tarefa no localStorage e recebe o id dela
        const idCard = SubirProLocalStorage(
            dados.nome,
            dados.descricao,
            "pendente",
            dados.prazo
        );

        //Cria o card visual na tela
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

//Monta o HTML de uma tarefa e coloca dentro do container principal
export function CriarTask(idCard, nome, descricao, status, prazo)
{
    const containerTask = document.getElementById("conteudo-task");

    containerTask.insertAdjacentHTML("beforeend",
    `
    <article class="task-item" data-id="${idCard}" data-status="${status}">
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
