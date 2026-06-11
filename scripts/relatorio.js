import { CardsUser } from "./card/carregar-cards.js";

const btn_relatorio = document.getElementById("btn-relatorio");

btn_relatorio.addEventListener("click", () => 
{
    const cards = JSON.parse(localStorage.getItem("cards")) || [];
    const cardsUser = CardsUser(cards);

    if (cardsUser.length == 0)
    {
        return;
    }

    let texto = "                  RELATÓRIO DAS TAREFAS                  \n\n";

    let tpendetes = 0;
    let tconcluidas = 0;
    let tatrasadas = 0;
    const tarefasTotais = cardsUser.length;

    cardsUser.forEach(card => 
    {
        if (card.status == "pendente")
        {
            tpendetes++;
        }

        if (card.status == "concluido")
        {
            tconcluidas++;
        }

        if (card.status == "atrasado")
        {
            tatrasadas++;
        }
    })

    if (tpendetes != 0)
    {
        texto += `Tem ${tpendetes} tarefas pendentes!\n`;
    }

    if (tconcluidas != 0)
    {
        texto += `Há um total de ${tconcluidas} tarefas concluidas.\n`;
    }
    
    if (tatrasadas)
    {
        texto += `Você perdeu o prazo de ${tatrasadas}, faça o quanto antes!\n`;
    }

    texto += `Tarefas totais: ${tarefasTotais}`;

    download(texto, "Relatório - TaskFlow 2026");
})

function download(conteudo, nomeArquivo)
{
    const blob = new Blob([conteudo], { type: 'text/plain' })

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = nomeArquivo;

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(URL);
}