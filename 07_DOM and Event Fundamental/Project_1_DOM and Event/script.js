'user strict';


// console.log( document.querySelector('.message').textContent);



let score = 20;
let highscore = 0

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

const resetTarget = function () {
    newtarget = Math.trunc(Math.random() * 20) + 1;
    console.log(newtarget);
    return newtarget;
}

let target = resetTarget();


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess, typeof guess);

    if (!guess) {
        displayMessage('Invalid. No Number');
    } else if (guess === target) {
        displayMessage('Correct Guess!');
        document.querySelector('.number').textContent = target;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore) {
            highscore = score;
        }
        document.querySelector('.highscore').textContent = highscore;
    } else {
        (guess > target) ? displayMessage('Too High') : displayMessage('Too Low');

        if (score > 1) {
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You Lost the Game!');
            document.querySelector('.score').textContent = 0;
        }

    }

});


document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    target = resetTarget();
    document.querySelector('.score').textContent = 20;
    displayMessage('Start Guessing...')
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '8rem';
    document.querySelector('.highscore').textContent = highscore;
});