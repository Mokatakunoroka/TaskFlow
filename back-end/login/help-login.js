const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

//Valida o usuário
export function ValidarUsuario(emailDigitado, senha)
{
    //Ele pega o primeiro usuario que ele encontrar que tenha o mesmo email digitado
    const usuarioEncontrado = usuarios.find(usuario => usuario.email === emailDigitado);

    //Verifica se o usuário existe.
    if (usuarioEncontrado == undefined)
    {
        throw new Error("Usuário não existe.")
    }

    //Verifica se o ele encontrou o usuario e verifica se a senha do usuario é igual a digitada
    if (usuarioEncontrado.senha === senha)
    {
        return {ok: true,
                mensagem: "Usuario logado com suscesso."
        }
    }

    throw new Error("Email ou senha inválidos")
}

export function PegarValores()
{
    return{
        "email": document.getElementById("input-email").value,
        "senha": document.getElementById("input-password").value
    }
}

export function MostrarErro(mensagem)
{
    const erro = document.getElementById("msg-erro");
    erro.textContent = mensagem;
}

export function ativarUsuario(usuario, email)
{
    usuario.forEach(element => {
        if (element.email === email)
        {
            element.ativar = true;
        }
    });
}