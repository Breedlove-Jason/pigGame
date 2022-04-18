'use strict';

// selecting the elements
const player1ScoreElement = document.getElementById('score--0');
const player2ScoreElement = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');

// starting conditions
player1ScoreElement.textContent = 0;
player2ScoreElement.textContent = 0;
diceElement.classList.add('hidden')

// user rolls dice
// class dice
//generate random dice roll
let diceRoll = Math.trunc(Math.random() * 6) + 1;
console.log(diceRoll);
// show dice roll
let showDice = function(diceRoll){
    switch(diceRoll){
        case 1:
            return 'dice-1.png';
        case 2:
            return 'dice-2.png';
        case 3:
            return 'dice-3.png';
        case 4:
            return 'dice-4.png';
        case 5:
            return 'dice-5.png';
        case 6:
            return 'dice-6.png';
    }
};
// check if dice is a 1

// add dice roll to current score

// display new score

