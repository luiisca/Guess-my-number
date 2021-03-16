'use strict';
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const showMessage = message => document.querySelector('.message').textContent = message; 
const secretNumber = number => document.querySelector('.number').textContent = number;
const bacgroundBodyStyle = style => document.querySelector('body').style.backgroundColor = style;
const showScore = score => document.querySelector('.score').textContent = score;
const widthSecretNumberContainer = width => document.querySelector('.number').style.width = width;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    //When there is no input
    if (!guess) {
    showMessage('Wrong answer');

    //When user wins 
    } else if (guess === randomNumber) {
    // showMessage() = '🎉 Right answer';
    showMessage('🎉 Right answer');
    bacgroundBodyStyle('#60b347');
    secretNumber(randomNumber);
    widthSecretNumberContainer('30rem');

    if(score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is wrong
    } else if (guess !== randomNumber){
        if (score > 1) {
        showMessage(guess > randomNumber ? '📈 Too high!' : '📉 Too low!');
        score--;
        showScore(score); 
        } else {
        showMessage('You lost..');
        showScore(0); 
        }
    };
});

document.querySelector('.again').addEventListener('click', function(){
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    showMessage('Start guessing...');
    document.querySelector('.guess').value = '';
    bacgroundBodyStyle('#222');
    secretNumber('?');
    widthSecretNumberContainer('15rem');
    showScore('20');
    score = 20;
});

//Problem: now I need to implement a highscore functionality, this highscore would store the last value of score, but only if it is greater than the current value of this highscore.
//1)Understanding the problem
//- How identify if the higscore value is below than the score?
//- What if the highscore value is below than the score value.
//- When this solution would be executed?
//2)DIviding the problem
//- Write a if-then statement and evaluate if the higscore is less than the score value.
//- ONly when user wins the game