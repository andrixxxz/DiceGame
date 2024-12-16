'use strict';
//Elements
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const player1Message = document.getElementById('name--0');
const player2Message = document.getElementById('name--1');
const currentScorePlayer1 = document.getElementById('current--0');
const currentScorePlayer2 = document.getElementById('current--1');
const score1Element = document.getElementById('score--0');
const score2Element = document.getElementById('score--1');
//Buttons
const holdButton = document.querySelector('.btn--hold');
const rollButton = document.querySelector('.btn--roll');
let roll = 0;
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let totalScorePlayer1 = 0;
let totalScorePlayer2 = 0;
const diceImage = document.querySelector('.dice');

const switchPlayer = function () {
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

//----------------------------------------------------------------------
//Starting conditions
score1Element.textContent = 0;
score2Element.textContent = 0;
diceImage.classList.add('hidden');

//Pressing Roll Dice Button
document.getElementById('generate').addEventListener('click', function () {
  roll = Number(Math.floor(Math.random() * 6) + 1);
  diceImage.classList.remove('hidden');
  console.log(roll);

  //Player 1 Playing
  if (player1.classList.contains('player--active')) {
    if (roll !== 1) {
      scorePlayer1 += roll;
      currentScorePlayer1.textContent = scorePlayer1;
    } else {
      currentScorePlayer1.textContent = 0;
      scorePlayer1 = 0;
      switchPlayer();
    }

    //Player 2 playing
  } else if (player2.classList.contains('player--active')) {
    if (roll !== 1) {
      scorePlayer2 += roll;
      currentScorePlayer2.textContent = scorePlayer2;
    } else {
      currentScorePlayer2.textContent = 0;
      scorePlayer2 = 0;
      switchPlayer();
    }
  }

  //Dice Image
  diceImage.src = `dice-${roll}.png`;
});

//Pressing Hold button
holdButton.addEventListener('click', function () {
  totalScorePlayer1 += scorePlayer1;
  totalScorePlayer2 += scorePlayer2;
  //Player 1 WIns
  if (totalScorePlayer1 >= 20) {
    score1Element.textContent = totalScorePlayer1;
    console.log('Player 1 Wins');
    holdButton.classList.add('hidden');
    rollButton.classList.add('hidden');
    player1Message.textContent = 'THE WINNER';
  }
  //Player 1 Presses Hold
  else if (
    player1.classList.contains('player--active') &&
    totalScorePlayer1 < 20
  ) {
    // totalScorePlayer1 += scorePlayer1;
    document.getElementById('score--0').textContent = totalScorePlayer1;
    switchPlayer();
    currentScorePlayer1.textContent = 0;
    scorePlayer1 = 0;
  }

  //Player 2 Wins
  else if (totalScorePlayer2 >= 20) {
    score2Element.textContent = totalScorePlayer2;
    console.log('Player 2 Wins');
    holdButton.classList.add('hidden');
    rollButton.classList.add('hidden');
    player2Message.textContent = 'THE WINNER';
  }
  //Player 2 presses Hold
  else {
    totalScorePlayer2 = totalScorePlayer2 + scorePlayer2;
    document.getElementById('score--1').textContent = totalScorePlayer2;
    switchPlayer();
    currentScorePlayer2.textContent = 0;
    scorePlayer2 = 0;
  }
});

//Pressing button new game
document.getElementById('new').addEventListener('click', function () {
  console.log('button NEw pressed');
  diceImage.classList.add('hidden');
  scorePlayer1 = 0;
  scorePlayer2 = 0;
  totalScorePlayer1 = 0;
  totalScorePlayer2 = 0;
  currentScorePlayer1.textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.getElementById('score--0').textContent = 0;
  currentScorePlayer2.textContent = 0;
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
  holdButton.classList.remove('hidden');
  rollButton.classList.remove('hidden');
  player1Message.textContent = 'PLAYER 1';
  player2Message.textContent = 'PLAYER 2';
});
