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
        botao.closest("dialog").close();
    })
})