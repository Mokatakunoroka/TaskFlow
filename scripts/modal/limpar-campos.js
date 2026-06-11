//Limpa todos os inputs e textareas do modal atual
export function LimparCampos(botao)
{
    const campos = botao.closest("dialog").querySelectorAll("input, textarea");
    campos.forEach(elementos => {
        elementos.value = "";
    });
}
