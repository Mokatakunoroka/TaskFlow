const botoesModais = document.querySelectorAll(".btn-modal");
const modais = document.querySelectorAll(".modal");

botoesModais.forEach(botao =>
{
    if (botao.id === "btn-mostrar-modal")
    {
        botao.addEventListener("click", () =>
        {
            document.getElementById("escolher-modal").showModal();
        });
    }

    if (["close-modal1", "close-modal2", "close-modal3"].includes(botao.id))
    {
        botao.addEventListener("click", () =>
        {
            botao.closest("dialog").close();
        });
    }
});