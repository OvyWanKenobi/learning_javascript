'use strict'

const playerOne = document.getElementById('player--1');
const playerTwo = document.getElementById('player--2');


const playerOneCurrent = document.getElementById('current--1');
const playerTwoCurrent = document.getElementById('current--2');

const playerOneScore = document.getElementById('score--1');
const playerTwoScore = document.getElementById('score--2');

const dice = document.querySelector('.dice');

const btnNewGame = document.querySelector('.new-game');
const btnRollDice = document.querySelector('.roll-dice');
const btnHold = document.querySelector('.hold');

playerOneScore.textContent = 0;
playerTwoScore.textContent = 0;

playerOneCurrent.textContent = 0;
playerTwoCurrent.textContent = 0;

dice.classList.add('hidden');

let currentPlayer = 1;
let currentScore = 0;

let totalPlayerOne = 0;
let totalPlayerTwo = 0;



const switchPlayer = function () {
    if (currentPlayer == 1) {
        playerOne.classList.remove('player-active');
        playerTwo.classList.add('player-active');
        currentPlayer = 2;
        currentScore = 0;
        playerOneCurrent.textContent = 0;
        console.log('player2 selected');
    } else if (currentPlayer == 2) {
        playerTwo.classList.remove('player-active');
        playerOne.classList.add('player-active');
        currentPlayer = 1;
        currentScore = 0;
        playerTwoCurrent.textContent = 0;
        console.log('player1 selected');
    }

}

const addToCurrent = function (diceRolled) {
    currentScore += diceRolled;
    if (currentPlayer == 1) {
        playerOneCurrent.textContent = currentScore;
    } else {
        playerTwoCurrent.textContent = currentScore;
    }
}

const declareWinner = function (player) {
    player.classList.add('player-winner');
    btnRollDice.style.display = 'none';
    btnHold.style.display = 'none';
}




btnRollDice.addEventListener('click', function () {


    const diceRolled = Math.trunc(Math.random() * 6) + 1;

    if (dice.classList.contains('hidden')) {
        dice.classList.remove('hidden');
    }

    console.log(diceRolled);

    dice.src = `dice-${diceRolled}.png`;

    if (diceRolled == 1) {
        switchPlayer();
    } else {
        addToCurrent(diceRolled);
    }

});


btnNewGame.addEventListener('click', function () {
    if (currentPlayer == 2) {
        switchPlayer();
    }
    playerOneScore.textContent = 0;
    playerTwoScore.textContent = 0;
    playerOneCurrent.textContent = 0;
    playerTwoCurrent.textContent = 0;
    currentScore = 0;
    totalPlayerOne = 0;
    totalPlayerTwo = 0;
    dice.classList.add('hidden');
    btnRollDice.style.display = 'block';
    btnHold.style.display = 'block';


    if (playerOne.classList.contains('player-winner')) {
        playerOne.classList.remove('player-winner');
    } else if (playerTwo.classList.contains('player-winner')) {
        playerTwo.classList.remove('player-winner');
    }



});

btnHold.addEventListener('click', function () {
    if (currentPlayer == 1) {
        totalPlayerOne += currentScore;
        playerOneScore.textContent = totalPlayerOne;
        if (totalPlayerOne >= 100) {
            declareWinner(playerOne);
        } else {
            switchPlayer();
        }

    } else {
        totalPlayerTwo += currentScore;
        playerTwoScore.textContent = totalPlayerTwo;
        if (totalPlayerTwo >= 100) {
            declareWinner(playerTwo);
        } else {
            switchPlayer();
        }

    }
});