export function validarEmail(email)
{
    if (email.includes("@") && email.includes("."))
    {
        return {ok: true,
                mensagem: "Email válido"
        };
    }
    throw new Error ("Email inválido.")
}

export function validarSenha(senha, cofirmSenha)
{
    if (senha === cofirmSenha)
    {
        return {ok: true,
                mensagem: "Senha válida"
        }
    }

    throw new Error ("As senhas não são iguais.");
}

export function pegarValores()
{
    return {
        "email": document.getElementById("input-email-Cadastro").value,
        "senha": document.getElementById("password").value,
        "confirm-senha": document.getElementById("confirm-password").value
    }
}

export function mostrarErro(mensagem)
{
    const erro = document.getElementById("msg-erro");
    erro.textContent = mensagem;
}

export function desativarUsuarios(usuarios)
{
    usuarios.forEach(element => {
        if (element.ativo)
        {
            element.ativo = false;
        }
    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios, null, 2))
}

export function verificarDuplicidade(usuarios, email)
{
    usuarios.forEach(element => 
    {
        if (element.email === email)
        {
            throw new Error("Email já cadastrado.")
        }
    })

    return true;
}