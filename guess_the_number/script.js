'use strict';

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random()*20)+1;

document.querySelector('.Check').addEventListener('click', function(){

    const guess = document.querySelector('.guess').value;
    
    if(!guess) {
        if(score > 0){
            displayMessage('⛔No Number!');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            displayMessage('😂 You lose!');
        }
       
    }
    
    else if (guess == secretNumber) { 
        document.querySelector('.num_box').textContent = secretNumber;
        displayMessage('🎊 Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.num_box').style.width = "25rem";
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        
    }

    else if(guess !== secretNumber){
        if(score > 0){
            displayMessage(guess > secretNumber ? '👀 Too High!' : '😁 Too Low!');
        score--;
        document.querySelector('.score').textContent = score;
        }
        else {
            displayMessage('😂 You lose!');
        }
        
    }
})


document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.num_box').textContent = '?';
    displayMessage("Start guessing...");
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.num_box').style.width = "15rem";
    document.querySelector('.guess').value = '';
    
})
