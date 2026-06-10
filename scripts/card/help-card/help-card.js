const cards = JSON.parse(localStorage.getItem("cards")) || []

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
                    nome: nome,
                    descricao: descricao,
                    status: status,
                    data: data,
                }
            ]
        }

        cards.push(info);
        localStorage.setItem("cards", JSON.stringify(cards, null, 2));
        return;
    }

    tarefa.card.push({
        nome: nome,
        descricao: descricao,
        status: status,
        data: data,
    })

    localStorage.setItem("cards", JSON.stringify(cards, null, 2));
}