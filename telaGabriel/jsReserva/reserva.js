function validar() {
    var nome = document.getElementById("nome")
    var tel = document.getElementById("tel")
    var email = document.getElementById("email")
    var data = document.getElementById("data")
    var time = document.getElementById("time")
    var pessoas = document.getElementById("pessoas")

    if(nome.value == "") { 
        alert("Por favor verifique se todos os dados foram preenchidos.");
        nome.focus();
        return;
    } 

    if(tel.value == "") {
        alert("Por favor verifique se todos os dados foram preenchidos.");
        telefone.focus();
        return;
    }

    if(email.value == "") {
        alert("Por favor verifique se todos os dados foram preenchidos.");
        email.focus();
        return;
    }
    
    if(data.value == "") {
        alert("Por favor verifique se todos os dados foram preenchidos.");
        data.focus();
        return;
    }

    if(time.value == "") {
        alert("Por favor verifique se todos os dados foram preenchidos.");
        time.focus();
        return;
    }

    if(pessoas.value == "") {
        alert("Por favor verifique se todos os dados foram preenchidos.");
        pessoas.focus();
        return;
    } else {
        alert("Sua Reserva foi salva, estamos te aguardando no Olympus!")
    }
}



function cancel() {
    alert("Sua reserva foi cancelada!")
}