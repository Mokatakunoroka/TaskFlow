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

//Essa função pega os valores dos inputs de Login
export function PegarValores()
{
    return{
        "email": document.getElementById("input-email").value,
        "senha": document.getElementById("input-password").value
    }
}

//Essa função mostra as mensagens de erro no paragráfo com id msg-erro
export function MostrarErro(mensagem)
{
    const erro = document.getElementById("msg-erro");
    erro.textContent = mensagem;
}

//Ela ativa o usuário que está entrando.
export function ativarUsuario(usuarios, email)
{
    usuarios.forEach(element => {
        console.log(element, email)
        if (element.email === email)
        {
            element.ativo = true;
        }
    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios, null, 2));
}

//Essa função dessativa todos os usuários
export function desativarUsuarios(usuarios)
{
    //percore cada dicionário individualmente dentro do array
    usuarios.forEach(element => {
        //verifica se a propriedade ativo do elemento é verdadeira
        if (element.ativo)
        {
            //se sim, muda seu valor lógio para falso
            element.ativo = false;
        }
    });

    //salva as mudanças realizadas.
    localStorage.setItem("usuarios", JSON.stringify(usuarios, null, 2))
}