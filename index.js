const randomNumber = Math.floor(Math.random() * 100) + 1; // número aleatório entre 1 e 100
let remainingTries = 10; // número de tentativas restantes

// seleciona os elementos da DOM
const guessInput = document.getElementById('user-guess');
const guessButton = document.getElementById('guess-button');
const result = document.querySelector('.result');
const remainingTriesDisplay = document.getElementById('remaining-tries');

// função que é chamada quando o botão "Adivinhar" é clicado
function checkGuess() {
  const userGuess = parseInt(guessInput.value); // converte a string do input em um número inteiro

  // verifica se o número é válido (entre 1 e 100)
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    result.innerHTML = 'Por favor, insira um número válido entre 1 e 100.';
    result.style.color = '#E74C3C';
    guessInput.value = '';
    guessInput.focus();
    return;
  }

  // verifica se o número é igual ao número aleatório
  if (userGuess === randomNumber) {
    result.innerHTML = `Parabéns, você acertou! O número era ${randomNumber}.`;
    result.style.color = '#2ECC71';
    guessInput.disabled = true;
    guessButton.disabled = true;
    return;
  }

  // se o número não é igual, verifica se é maior ou menor
  remainingTries--;
  remainingTriesDisplay.innerHTML = remainingTries;
  if (userGuess < randomNumber) {
    result.innerHTML = 'O número é maior.';
  } else {
    result.innerHTML = 'O número é menor.';
  }
  result.style.color = '#E67E22';
  guessInput.value = '';
  guessInput.focus();

  // se o número de tentativas acabou, o jogo termina
  if (remainingTries === 0) {
    result.innerHTML = `Suas tentativas acabaram. O número era ${randomNumber}.`;
    result.style.color = '#E74C3C';
    guessInput.disabled = true;
    guessButton.disabled = true;
  }
}

// adiciona um evento de click ao botão "Adivinhar"
guessButton.addEventListener('click', checkGuess);

// adiciona um evento de pressionar tecla ao input de adivinhação
guessInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    checkGuess();
  }
});
