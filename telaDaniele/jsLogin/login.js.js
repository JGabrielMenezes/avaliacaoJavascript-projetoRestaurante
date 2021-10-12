let formulario = document.getElementById("login");
let esquecerSenha = document.getElementById("click");

formulario.addEventListener("submit", event=>{ 
    event.preventDefault();
    let nome = document.getElementById("nome");
    let senha = document.getElementById("senha");
    if(nome.value=="" || senha.value==""){
        alerta("Por favor verifique se todos os dados foram preenchidos.")
    }
    else{
        alerta("Seja bem vinde ao Restaurante Olympus!")

    }
})

esquecerSenha.addEventListener("click", event =>{
  event.preventDefault();
  alerta(" Para recuperar a senha, entre em contato com o restaurante.");
})



var modal = document.getElementById("myModal");


var span = document.getElementsByClassName("close")[0];

function alerta(message) {
  modal.style.display = "block";
  document.getElementById("messageRetorno").textContent=message;
}

span.onclick = function() {
  modal.style.display = "none";
}

