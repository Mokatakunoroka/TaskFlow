const botoesModais = document.querySelectorAll(".btn-modal");

const modal = document.getElementById("modal");

botoesModais.forEach(botao => 
{
    if (botao.getAttribute("id") == "btn-mostrar-modal")
    {
        botao.addEventListener("click", () =>
        {
            modal.showModal();
        });
    }

    if (botao.getAttribute("id") == "close-modal")
    {
        botao.addEventListener("click", () => 
        {
            modal.close();
        })
    }
})
