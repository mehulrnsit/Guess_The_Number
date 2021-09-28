'use strict';



//defining the secret number
let secretNumber = Math.floor(Math.random()*20) + 1;

//storing the score in javacScript variable
let score = 20;

let highscore = 0;

//event listener for check button
document.querySelector('.check').addEventListener('click', () => {

    //getting the number from the user to a javaScript variable
    const guess = Number(document.querySelector('.guess').value);

    if(!guess)
    {
        document.querySelector('.message').textContent = '❌ No number!';
    }
    
    else if(guess === secretNumber){

        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = '✌ Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'

        if(score > highscore)
        {   highscore = score
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if(guess !== secretNumber){
        if(score > 1){

            document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!' : 'Too Low';
            score--;
            document.querySelector('.score').textContent = score;
            
        }
        else{

            document.querySelector('.message').textContent = 'You Lost the Game!';
            document.querySelector('.score').textContent = 0;
        }
    }
    // else if(guess > secretNumber){

    //     if(score > 1){
    //         document.querySelector('.message').textContent = 'Too high!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent = 'You Lost the Game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
        
    // }
    // else if(guess < secretNumber){

    //     if(score > 1)
    //     {
    //         document.querySelector('.message').textContent = 'Too Low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent = 'You Lost the Game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
        
    // }

});

//adding the functionality to resrt
document.querySelector('.again').addEventListener('click', () => {

    secretNumber = Math.floor(Math.random()*20) + 1;

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

    score = 20;

    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';

    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

});
