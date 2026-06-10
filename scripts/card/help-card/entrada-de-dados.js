import { LimparCampos } from "../../modal/limpar-campos.js"
import { Fechar } from "../../modal/abrir-fechar.js";

export function input(botao)
{
    const dados = {
        nome: document.getElementById("nome_tarefa").value,
        descricao: document.getElementById("descricao_tarefa").value,
        prazo: document.getElementById("prazo-tarefa").value,
    };

    LimparCampos(botao);
    Fechar(botao);

    return dados;
}