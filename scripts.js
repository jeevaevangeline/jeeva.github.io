let randomNumber;
let attempts = 0;

const submitGuessButton = document.getElementById('submitGuess');
const userGuessInput = document.getElementById('userGuess');
const feedbackElement = document.getElementById('feedback');
const resetGameButton = document.getElementById('resetGame');

function startNewGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  feedbackElement.textContent = '';
  userGuessInput.value = '';
  submitGuessButton.disabled = false;
  resetGameButton.style.display = 'none';
  userGuessInput.disabled = false;
}

function checkGuess() {
  const userGuess = parseInt(userGuessInput.value);
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    feedbackElement.textContent = 'Please enter a number between 1 and 100.';
    return;
  }

  attempts++;

  if (userGuess === randomNumber) {
    feedbackElement.textContent = `Correct! You guessed the number in ${attempts} attempts.`;
    feedbackElement.style.color = '#4CAF50';
    userGuessInput.disabled = true;
    submitGuessButton.disabled = true;
    resetGameButton.style.display = 'block';
  } else if (userGuess < randomNumber) {
    feedbackElement.textContent = 'Too low! Try again.';
    feedbackElement.style.color = '#ff5733';
  } else {
    feedbackElement.textContent = 'Too high! Try again.';
    feedbackElement.style.color = '#ff5733';
  }
}

submitGuessButton.addEventListener('click', checkGuess);
resetGameButton.addEventListener('click', startNewGame);

// Initialize the game
startNewGame();
