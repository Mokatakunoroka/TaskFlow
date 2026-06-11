import {LimparCampos} from "./limpar-campos.js"

//Botão que abre o modal para criar uma nova tarefa
const abrirModal = document.getElementById("btn-mostrar-modal");

//Botões que fecham os modais
const fecharModais = document.querySelectorAll(".btn-close-modal");

//Abre o modal principal de tarefas
abrirModal.addEventListener("click", () =>
{
    document.getElementById("modal-tarefa").showModal();
})

//Fecha o modal pelo botão X e limpa os campos antes
fecharModais.forEach(botao => 
{
    botao.addEventListener("click", () => 
    {
        LimparCampos(botao);
        botao.closest("dialog").close();
    })
})

//Função usada por outros arquivos para fechar o modal depois de salvar
export function Fechar(botao)
{
    LimparCampos(botao);
    botao.closest("dialog").close();
}
