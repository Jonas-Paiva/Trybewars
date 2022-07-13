const enviarBtn = document.getElementById('enviar');
const checkbox = document.getElementById('agreement');
const submitBnt = document.getElementById('submit-btn');

function enviar() {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function disabledBtn() {
  if (submitBnt.hasAttribute('disabled') === true) {
    submitBnt.removeAttribute('disabled');
  } else {
    submitBnt.setAttribute('disabled', 'disabled');
  }
}

checkbox.addEventListener('click', disabledBtn);

enviarBtn.addEventListener('click', enviar);
