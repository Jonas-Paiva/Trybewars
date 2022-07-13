const enviarBtn = document.getElementById('enviar');
const checkbox = document.getElementById('agreement');
const submitBnt = document.getElementById('submit-btn');
const textareaBtn = document.getElementById('textarea');
const counterBtn = document.getElementById('counter');

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

function contador() {
  const x = (textareaBtn.value);
  const tamanho = x.length;
  tamanhoC = 500-tamanho;
  counterBtn.innerText = tamanhoC;
}


checkbox.addEventListener('click', disabledBtn);
enviarBtn.addEventListener('click', enviar);
textareaBtn.addEventListener('keyup',contador);

