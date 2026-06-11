//Esconde o aviso do relógio quando existem tarefas na tela
export function SumirRelogio()
{
    const relogio = document.getElementById("card-relogio");
    relogio.style.display = "none";
}

//Mostra o relógio quando o usuário ainda não tem tarefas
export function AparecerRelogio()
{
    const relogio = document.getElementById("card-relogio");
    relogio.style.display = "flex";
}

//Mostra o container onde ficam os cards
export function AparecerTask()
{
    const containerTask = document.getElementById("conteudo-task");
    containerTask.style.display = "flex";
    containerTask.style.minHeight = "55vh";
}

//Esconde o container das tarefas
export function SumirTask()
{
    const containerTask = document.getElementById("conteudo-task");
    containerTask.style.display = "none";
}

//Diminui descrições muito grandes para caber melhor no card
export function EncurtarDescricao(descricao)
{
    descricao = descricao.trim();

    if (descricao.length <= 30)
    {
        return descricao;
    }

    return descricao.slice(0, 30) + "...";
}

//Salva uma nova tarefa dentro do usuário ativo no localStorage
export function SubirProLocalStorage(nome, descricao, status, data)
{
    const usuarios = JSON.parse(localStorage.getItem("usuarios"));
    const cards = JSON.parse(localStorage.getItem("cards")) || [];

    const user = usuarios.find(usuario => usuario.ativo);
    const tarefa = cards.find(tarefa => tarefa.id == user.id);

    //Se o usuário ainda não tem nenhuma tarefa, cria a primeira estrutura
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

    //Se já existe uma lista de tarefas, só adiciona a próxima
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

//Gera o próximo id com base no maior id que o usuário já tem
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

//Retorna o id do usuário que está marcado como ativo
export function idUser()
{
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const user = usuarios.find(user => user.ativo);

    if (!user) return null;

    return user.id;
}

//Marca uma tarefa como concluída dentro do localStorage
export function ConcluirCard(idCard, idUser)
{
    const cards = JSON.parse(localStorage.getItem("cards") || "[]");


    const cardUser = cards.find(card => card.id == idUser);

    if (!cardUser) return;


    const tasksDoUsuario = cardUser.card;

    const tarefa = tasksDoUsuario.find(
        tarefa => tarefa.idCard == idCard
    );

    if (!tarefa) return;

    tarefa.status = "concluido";

    localStorage.setItem("cards", JSON.stringify(cards, null, 2))
}

//Remove uma tarefa do usuário e informa se a exclusão aconteceu
export function ExcluirCard(idCard, idUser)
{
    const cards = JSON.parse(localStorage.getItem("cards")) || [];

    const cardUser = cards.find( card => card.id == idUser);

    if (!cardUser) return false;

    const quantidadeAntes = cardUser.card.length;

    cardUser.card = cardUser.card.filter(tarefa => tarefa.idCard != idCard);

    localStorage.setItem("cards", JSON.stringify(cards, null, 2));

    return cardUser.card.length < quantidadeAntes;
}
