import { CardsUser } from "./card/carregar-cards.js";

//Botao que gera o arquivo de relatorio das tarefas
const btn_relatorio = document.getElementById("btn-relatorio");

//Quando clicar, monta um resumo simples das tarefas do usuario
btn_relatorio.addEventListener("click", () => 
{
    const cards = JSON.parse(localStorage.getItem("cards")) || [];
    const cardsUser = CardsUser(cards);

    //Se nao tiver tarefa, nao tem relatorio para baixar
    if (cardsUser.length == 0)
    {
        return;
    }

    let texto = "                  RELATÓRIO DAS TAREFAS                  \n\n";

    let tpendetes = 0;
    let tconcluidas = 0;
    let tatrasadas = 0;
    const tarefasTotais = cardsUser.length;

    //Conta quantas tarefas existem em cada status
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

    //So adiciona no texto os status que realmente existem
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

    //Depois de montar o texto, baixa o arquivo para o usuario
    download(texto, "Relatório - TaskFlow 2026");
})

//Cria um arquivo de texto temporario e forca o download
function download(conteudo, nomeArquivo)
{
    const blob = new Blob([conteudo], { type: 'text/plain' })

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = nomeArquivo;

    document.body.appendChild(a);

    a.click();

    //Remove o link temporario depois do download
    document.body.removeChild(a);
    URL.revokeObjectURL(URL);
}
