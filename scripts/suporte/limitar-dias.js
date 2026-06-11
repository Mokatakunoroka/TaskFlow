//Pega a data de hoje no formato que o input date entende
const hoje = new Date().toISOString().split("T")[0];

//Não deixa o usuário escolher uma data anterior ao dia atual
document.getElementById("prazo-tarefa").min = hoje;
