export function SumirRelogio()
{
    const relogio = document.getElementById("card-relogio");
    relogio.style.display = "none";
}

export function AparecerRelogio()
{
    const relogio = document.getElementById("card-relogio");
    relogio.style.display = "flex";
}

export function AparecerTask()
{
    const containerTask = document.getElementById("conteudo-task");
    containerTask.style.display = "flex";
    containerTask.style.minHeight = "70vh";
}

export function SumirTask()
{
    const containerTask = document.getElementById("conteudo-task");
    containerTask.style.display = "none";
}
export function EncurtarDescricao(descricao)
{
    descricao = descricao.trim();

    if (descricao.length <= 30)
    {
        return descricao;
    }

    return descricao.slice(0, 30) + "...";
}

function PegarCards()
{
    return JSON.parse(localStorage.getItem("cards")) || [];
}

export function SubirProLocalStorage(nome, descricao, status, data)
{
    const usuarios = JSON.parse(localStorage.getItem("usuarios"));
    const cards = PegarCards();

    const user = usuarios.find(usuario => usuario.ativo);
    const tarefa = cards.find(tarefa => tarefa.id == user.id);

    if (!tarefa)
    {
        const info = 
        {
            id: user.id,
            card: 
            [
                {
                    idCard: 1,
                    nome: nome,
                    descricao: descricao,
                    status: status,
                    data: data,
                }
            ]
        }

        cards.push(info);
        localStorage.setItem("cards", JSON.stringify(cards, null, 2));
        return 1;
    }

    const idCard = GerarProximoIdCard(tarefa.card);

    tarefa.card.push({
        idCard: idCard,
        nome: nome,
        descricao: descricao,
        status: status,
        data: data,
    })

    localStorage.setItem("cards", JSON.stringify(cards, null, 2));

    return idCard;
}

function GerarProximoIdCard(cardsUsuario)
{
    if (cardsUsuario.length === 0)
    {
        return 1;
    }

    let maiorId = [];

    cardsUsuario.forEach(card => {
        maiorId.push(card.idCard)
    });
    return Math.max(...maiorId) + 1;
}

export function idUser()
{
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const user = usuarios.find(user => user.ativo);

    if (!user) return null;

    return user.id;
}

export function ConcluirCard(idCard, idUser)
{
    const cards = JSON.parse(localStorage.getItem("cards") || "[]");

    const cardUser = cards.find(card => card.id == idUser);

    if (!cardUser) return;

    const tarefa = cardUser.card.find(
        tarefa => tarefa.idCard == idCard
    );

    if (!tarefa) return;

    tarefa.status = "concluido";

    localStorage.setItem(
        "cards",
        JSON.stringify(cards, null, 2)
    );

}

export function ExcluirCard(idCard, idUser)
{
    const cards = JSON.parse(localStorage.getItem("cards")) || [];

    const cardUser = cards.find( card => card.id == idUser);

    if (!cardUser) return false;

    const quantidadeAntes = cardUser.card.length;

    cardUser.card = cardUser.card.filter(tarefa => tarefa.idCard != idCard);

    localStorage.setItem("cards", JSON.stringify(cards, null, 2) );

    return cardUser.card.length < quantidadeAntes;
}
