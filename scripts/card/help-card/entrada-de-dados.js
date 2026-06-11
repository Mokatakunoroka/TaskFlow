import { LimparCampos } from "../../modal/limpar-campos.js"
import { Fechar } from "../../modal/abrir-fechar.js";

//Pega os valores digitados no modal de tarefa
export function input(botao)
{
    const dados = {
        nome: document.getElementById("nome_tarefa").value,
        descricao: document.getElementById("descricao_tarefa").value,
        prazo: document.getElementById("prazo-tarefa").value,
    };

    //Depois de pegar os dados, limpa e fecha o modal
    LimparCampos(botao);
    Fechar(botao);

    return dados;
}
