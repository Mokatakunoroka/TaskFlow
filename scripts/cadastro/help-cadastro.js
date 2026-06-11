//Função que valida Email
export function validarEmail(email)
{
    //verifica se email tem @ e .
    if (email.includes("@") && email.includes("."))
    {
        //se é valido, retorna verdadeiro
        return true;
    }
    //se não contem @ e nem . ele lança um erro
    throw new Error ("Email inválido.")
}

//função que valida a senha
export function validarSenha(senha, cofirmSenha)
{
    //verifica se as duas senhas são iguais
    if (senha === cofirmSenha)
    {
        //se sim, retorna verdadeiro
        return true;
    }

    //se não, lança um erro
    throw new Error ("As senhas não são iguais.");
}

//Uma função que retorna os valores dos inputs
export function pegarValores()
{
    //Retorna tudo em um objeto para facilitar a validacao depois
    return {
        "email": document.getElementById("input-email-Cadastro").value,
        "senha": document.getElementById("password").value,
        "confirm-senha": document.getElementById("confirm-password").value
    }
}

//Função que altera o conteúdo de texto do elemento que tem o id "msg-erro"
export function mostrarErro(mensagem)
{
    const erro = document.getElementById("msg-erro");
    erro.textContent = mensagem;
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

//Essa função verifica se já não existe um outro email igual
export function verificarDuplicidade(usuarios, email)
{
    //percore cada dicionário individualmente dentro do array
    usuarios.forEach(element => 
    {
        //verifica se a propriedade email é igual ao email digitado atual
        if (element.email === email)
        {
            //se sim, lança um erro
            throw new Error("Email já cadastrado.")
        }
    })
}
