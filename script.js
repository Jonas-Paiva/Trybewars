const enviarBtn = document.getElementById('enviar');
const checkbox = document.getElementById('agreement');
const submitBnt = document.getElementById('submit-btn');
const textareaBtn = document.getElementById('textarea');
const counterBtn = document.getElementById('counter');
const novoForm = document.getElementById('form-data');
const formant = document.getElementById('evaluation-form');

function enviar() {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
    email.value = '';
    password.value = '';
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
  const x = textareaBtn.value;
  const tamanho = x.length;
  const tamanhoC = 500 - tamanho;
  counterBtn.innerText = tamanhoC;
}

// function enviaData() {
//   while (mainT.firstChild) {
//     mainT.removeChild(mainT.firstChild);
//   }
// }

function createListElement(question, answer) {
  const liElement = document.createElement('li');
  liElement.innerHTML = `
    <strong>${question}</strong>
    <span>${answer}</span>
  `;
  return liElement;
}

function renderFormData(formData) {
  formant.style.display = 'none';

  for (let i = 0; i < formData.length; i += 1) {
    const { question, answer } = formData[i];
    const newElement = createListElement(question, answer);
    novoForm.appendChild(newElement);
  }
}

function pegarInfo(e) {
  e.preventDefault();
  const name = document.getElementById('input-name');
  const lastname = document.getElementById('input-lastname');
  const email = document.getElementById('input-email');
  const house = document.getElementById('house');
  const radio = document.querySelector('input[name = "family"]:checked');
  const avaliacao = document.querySelector('input[name = "rate"]:checked');
  const textareaF = document.getElementById('textarea');
  const array = [];
  const checkboxes = document.querySelectorAll('input[class = "subject"]:checked');
  for (let i = 0; i < checkboxes.length; i += 1) { array.push(checkboxes[i].value); }
  const objeto = [{ question: 'Nome:', answer: `${name.value} ${lastname.value}` },
    { question: 'Email:', answer: `${email.value}` },
    { question: 'Casa:', answer: `${house.value}` },
    { question: 'Família:', answer: `${radio.value}` },
    { question: 'Matérias:', answer: `${array}` },
    { question: 'Avaliação:', answer: `${avaliacao.value}` },
    { question: 'Observações:', answer: `${textareaF.value}` }]; renderFormData(objeto);
}

checkbox.addEventListener('click', disabledBtn);
enviarBtn.addEventListener('click', enviar);
textareaBtn.addEventListener('keyup', contador);
submitBnt.addEventListener('click', pegarInfo);
