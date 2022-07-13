const enviarBtn = document.getElementById('enviar');

function enviar() {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    if(email.value == 'tryber@teste.com' && password.value == '123456'){
        alert('Olá, Tryber!');
    }else{
        alert("Email ou senha inválidos.")
    }

}

enviarBtn.addEventListener('click', enviar)
