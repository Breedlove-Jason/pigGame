'use strict';

// selecting the elements
const player0Element= document.querySelector('.player--0');
const player1Element= document.querySelector('.player--1');
const player1ScoreElement = document.getElementById('score--0');
const player2ScoreElement = document.getElementById('score--1');
const currentScoreElement0 = document.getElementById('current--0');
const currentScoreElement1 = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

// starting conditions
player1ScoreElement.textContent = 0;
player2ScoreElement.textContent = 0;
diceElement.classList.add('hidden')

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
// user rolls dice
btnRoll.addEventListener('click', function() {
    let diceRoll = Math.trunc(Math.random() * 6) + 1;
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${diceRoll}.png`;
    if (diceRoll !== 1){
        currentScore += diceRoll;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }else{

        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        player0Element.classList.toggle('player--active');
        player1Element.classList.toggle('player--active');
        }

});

// check if dice is a 1

// add dice roll to current score

// display new score

