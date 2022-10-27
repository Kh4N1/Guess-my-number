'use strict';

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 10;
let highscore = 0;
let guess = 0;

window.addEventListener('load',()=>document.querySelector('.guess').focus())

const checkTheGuess = function (){
    // THERE IS NO INPUT
    if (!guess) {
        displayMassage('No Number!');
        // WHEN PLAYER WINS
    } else if (guess === secretNumber) {
        displayMassage('Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if(guess != secretNumber){
        if (score > 1) {
            displayMassage(guess > secretNumber ? 'Too High!' : 'Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMassage('You lost the game');
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red'
        }
    }
    document.querySelector('.guess').value = '';
}

const displayMassage = function(massge) {
    document.querySelector('.message').textContent = massge;
};

document.querySelector('.again').addEventListener('click', function () {
    score = 10;
    secretNumber = Math.trunc(Math.random() * 100) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = ' ';
    // highscore = 0;
    // document.querySelector('.highscore').textContent = highscore;
});

document.addEventListener('keydown' , function(event){
    if (event.key === 'Enter') {
        guess = Number(document.querySelector('.guess').value);

        checkTheGuess();

    }
});


document.querySelector('.check').addEventListener('click', function () {
    guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);

    checkTheGuess();

});


