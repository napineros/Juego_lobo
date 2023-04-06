// Variables para el juego
var score = 0;
var errors = 0;

// Elementos de la interfaz
var startButton = document.getElementById('start-button');
var answerInput = document.getElementById('answer-input');
var scoreDisplay = document.getElementById('score-display');
var errorDisplay = document.getElementById('error-display');
var feedbackDisplay = document.getElementById('feedback-display');

// Función para iniciar el juego
function startGame() {
  // Configurar el juego
  score = 0;
  errors = 0;

  // Mostrar la interfaz
  answerInput.style.display = 'block';
  scoreDisplay.style.display = 'block';
  errorDisplay.style.display = 'block';
  feedbackDisplay.style.display = 'block';

  // Empezar el primer problema
  generateProblem();
}

// Función para generar un problema aleatorio
function generateProblem() {
  var num1 = Math.floor(Math.random() * 10) + 1;
  var num2 = Math.floor(Math.random() * 10) + 1;
  var operator = Math.floor(Math.random() * 4); // 0 = +, 1 = -, 2 = x, 3 = ÷
  var problemText = '';

  switch (operator) {
    case 0:
      problemText = num1 + ' + ' + num2 + ' =';
      answer = num1 + num2;
      break;
    case 1:
      problemText = num1 + ' - ' + num2 + ' =';
      answer = num1 - num2;
      break;
    case 2:
      problemText = num1 + ' x ' + num2 + ' =';
      answer = num1 * num2;
      break;
    case 3:
      problemText = num1 * num2 + ' ÷ ' + num2 + ' =';
      answer = num1;
      break;
  }

  problemDisplay.textContent = problemText;
}

// Función para comprobar la respuesta del usuario
function checkAnswer() {
  var userAnswer = parseInt(answerInput.value);

  if (userAnswer === answer) {
    score++;
    feedbackDisplay.textContent = '¡Correcto!';
  } else {
    errors++;
    feedbackDisplay.textContent = 'Incorrecto. Inténtalo de nuevo.';
  }

  scoreDisplay.textContent = 'Puntaje: ' + score;
  errorDisplay.textContent = 'Errores: ' + errors;

  if (errors === 3) {
    gameOver(false);
  }