'use strict';
// Selecting the document elements and save the in variables
const check = document.querySelector('.check');
const message = document.querySelector('.message');
const scoreBoard = document.querySelector('.score');
const highscoreBoard = document.querySelector('.highscore');
const number = document.querySelector('.number');

let secreteNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;

function guessNumber() {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    message.textContent = 'No Guess Number';
  } else if (guess == secreteNumber) {
    number.textContent = secreteNumber;
    message.textContent = '🎉 Excellent! Correct Number 🎉';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      highscoreBoard.textContent = highscore;
    }
  } else if (guess > secreteNumber) {
    if (score > 1) {
      message.textContent = 'Number is high! Try Another';
      score--;
      scoreBoard.textContent = score;
    } else {
      message.textContent = 'You Lost The Game!';
      scoreBoard.textContent = 0;
    }
  } else if (guess < secreteNumber) {
    if (score > 1) {
      message.textContent = 'Number is low! Try Another';
      score--;
      scoreBoard.textContent = score;
    } else {
      message.textContent = 'You Lost The Game!';
      scoreBoard.textContent = 0;
    }
  }
}
check.addEventListener('click', guessNumber);

// RESET THE GAME
const reset = document.querySelector('.again');

function resetGame() {
  score = 20;
  scoreBoard.textContent = score;

  number.textContent = '?';
  secreteNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.guess').value = '';
  message.textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
}

reset.addEventListener('click', resetGame);
