const trocarPara = document.getElementById("opcoes");
const continuar = document.getElementById("continuar-modal");

continuar.addEventListener("click", () =>
{
    const idModal = trocarPara.value;
    if(idModal == "")
    {
        return;
    }

    continuar.closest("dialog").close();
    document.getElementById(idModal).showModal();
})