import {LimparCampos} from "./limpar-campos.js"

const abrirModal = document.getElementById("btn-mostrar-modal");
const fecharModais = document.querySelectorAll(".btn-close-modal");

abrirModal.addEventListener("click", () =>
{
    document.getElementById("escolher-modal").showModal();
})


fecharModais.forEach(botao => 
{
    botao.addEventListener("click", () => 
    {
        LimparCampos(botao);
        botao.closest("dialog").close();
    })
})

export function Fechar(botao)
{
    LimparCampos(botao);
    botao.closest("dialog").close();
}
