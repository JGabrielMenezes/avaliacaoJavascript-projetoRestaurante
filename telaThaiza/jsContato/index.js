function validar() {
    // pegando o valor do nome pelos names
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var telefone = document.getElementById("telefone");
    var assunto = document.getElementById("assunto");
    var mensagem = document.getElementById("mensagem").checked;

    // verificar se o nome está vazio
  if (nome.value == "") {
    alert("Por favor verifique se todos os dados foram preenchidos.");

    // Deixa o input com o focus
    nome.focus();
    // retorna a função e não olha as outras linhas
    return;
  }
  if (email.value == "") {
    alert("Por favor verifique se todos os dados foram preenchidos.");
    email.focus();
    return;
  }
  if (telefone.value == "") {
    alert("Por favor verifique se todos os dados foram preenchidos.");
    telefone.focus();
    return;
  }
  if (assunto.value == "") {
    alert("Por favor verifique se todos os dados foram preenchidos.");
    assunto.focus();
    return;
  }
  if (mensagem.value == "") {
    alert("Por favor verifique se todos os dados foram preenchidos.");
    mensagem.focus();
    return;
  } 
}

