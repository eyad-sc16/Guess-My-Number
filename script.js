'use strict';

const generateSecretNumber = function () {
  const number = Math.trunc(Math.random() * 20) + 1;
  return number;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const numberContainerModified = function (width, text) {
  document.querySelector('.number').style.width = width;
  document.querySelector('.number').textContent = text;
};

const budyStatus = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

let secretNumber = generateSecretNumber();
//storing the score in a variable
let score = 20;
// seting highscore
let highscore = 0;

const hndlingCheckBt = function () {
  const guess = Number(document.querySelector('.guess').value);
  // when there is no input
  if (!guess) {
    displayMessage('⛔ No number !');

    // when the player wins
  } else if (guess === secretNumber) {
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    displayMessage('🎉 Correct Number');
    budyStatus('#60b347');
    numberContainerModified('30rem', secretNumber);

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too high' : '📉Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game 💥');
      displayScore(0);
    }
  }
};

// handling agian button
const handelAgainBt = function () {
  score = 20;
  secretNumber = generateSecretNumber();
  displayMessage('Start guessing...');
  numberContainerModified('15rem', '?');
  budyStatus('#222');
  displayScore(score);
  document.querySelector('.guess').value = null;
};

// handlilng events
document.querySelector('.check').addEventListener('click', hndlingCheckBt);
document.querySelector('.again').addEventListener('click', handelAgainBt);
