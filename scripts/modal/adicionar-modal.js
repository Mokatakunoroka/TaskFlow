import {input} from "./funcionalidades/entrada-de-dados.js"
const botoes = document.querySelectorAll(".salvar-dialog");

botoes.forEach(botao =>
{
    botao.addEventListener("click", () =>
    {
        SumirRelogio();
        const dados = input(botao);
    })
}
)

function SumirRelogio()
{
    const relogio = document.getElementById("card-relogio");
    relogio.style.display = "none";

    const containerTask = document.getElementById("conteudo-task");
    containerTask.style.minHeight = "70vh";
}