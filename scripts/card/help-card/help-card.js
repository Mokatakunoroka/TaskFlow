const cards = JSON.parse(localStorage.getItem("cards")) || [];

export function SumirRelogio()
{
    const relogio = document.getElementById("card-relogio");
    relogio.style.display = "none";
}

export function AparecerTask()
{
    const containerTask = document.getElementById("conteudo-task");
    containerTask.style.display = "flex";
    containerTask.style.minHeight = "70vh";
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

export function SubirProLocalStorage(nome, descricao, status, data)
{
    const usuarios = JSON.parse(localStorage.getItem("usuarios"));

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

    tarefa.card.push({
        idCard: tarefa.card.length + 1,
        nome: nome,
        descricao: descricao,
        status: status,
        data: data,
    })

    localStorage.setItem("cards", JSON.stringify(cards, null, 2));

    return tarefa.card.length;
}
export function idUser()
{
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

     const user = usuarios.find(user => user.ativo);

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