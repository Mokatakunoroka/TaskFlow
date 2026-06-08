import { LimparCampos } from "./limpar-campos.js"
import { Fechar } from "./abrir-fechar.js";
export function input(botao)
{
    const campos = botao.closest("dialog").querySelectorAll("input, textarea");
    const dados = {};

    campos.forEach(campo => {
        const valor = campo.value.trim();

        if (valor !== "") {
            dados[campo.id] = valor;
        }
    });

    LimparCampos(botao)
    Fechar(botao);
    return dados;
}