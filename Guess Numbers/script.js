'use strict';

let ramNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const sentMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value); // console.log(guess, typeof guess);
    //WHEN NO INPUT
    if (!guess) {
        sentMessage('No number!');
    } else if (guess === ramNumber) {
        sentMessage('Correct Number!');
        document.querySelector('.number').textContent = ramNumber;

        // document.querySelector('body').style.background = 'linear-gradient(#e66465, #9198e5)';
        document.querySelector('body').style.background = 'url(https://images.pexels.com/photos/166360/pexels-photo-166360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2) no-repeat';
        // document.querySelector('body').style.backgroundPosition='left top';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').innerHTML = highscore;
        }
        //WHEN PLAYERS WIN
    } else if (guess !== ramNumber) {
        if (score > 1) {
            sentMessage(guess > ramNumber ? 'Too High!' : 'Too Low!')
            score--;
            document.querySelector('.current-score').innerHTML = score;
        } else {
            sentMessage('Game Loser!');
            document.querySelector('.current-score').innerHTML = 0;
        }
    }
});
//RESET THE GAME
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    ramNumber = Math.trunc(Math.random() * 20) + 1;
    sentMessage('Start guessing...');
    document.querySelector('.current-score').innerHTML = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.background = '#000';
});
