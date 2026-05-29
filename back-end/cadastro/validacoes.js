
export function validarEmail(email)
{
    if (email.includes("@") && email.includes("."))
    {
        return {ok: true,
                mensagem: "Email válido" 
        };
    }
    return {ok: false,
            mensagem: "Email inválido."
    }
}