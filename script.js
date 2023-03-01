"use strict"

let secretNumber = Math.trunc(Math.random()*20)+1;
// console.log(secretNumber);
// document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highScore = Number.MIN_SAFE_INTEGER;
document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    if(guess <1 || guess> 20)
    {
        document.querySelector('.message').textContent = "Enter The Number Between The Given Range(1 to 20)....";
    }
    else if(!guess)
    {
        
        document.querySelector('.message').textContent = "😭 No Number....";
    }
    else if(guess===secretNumber){
        document.querySelector('.message').textContent = "🎉🎊✨Correct Number!";
        highScore = Math.max(highScore,score);
        document.querySelector('.highscore').textContent = highScore;
        document.body.style.backgroundColor = "green";
        document.querySelector('.number').textContent = secretNumber;
        
    }else if(guess > secretNumber){
        if(score>1)
        {
            document.querySelector('.message').textContent = "Number too high..";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else
        {
            score--;
            if(score===0)
            {
                document.querySelector('.score').textContent = score;
                document.body.style.backgroundColor = "red";
                document.querySelector('.message').textContent = "You Loose The Game Try Again..";
            }
            
        }
        
    }else if(guess < secretNumber){
        if(score > 1)
        {
            document.querySelector('.message').textContent = "Number too low..";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else
        {
            score--;
            if(score===0)
            {
                document.querySelector('.score').textContent = score;
                document.body.style.backgroundColor = "red";
                document.querySelector('.message').textContent = "You Loose The Game Try Again..";
            }
            
        }
    }

});

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    // console.log(secretNumber);
    highScore = Number.MIN_SAFE_INTEGER;
    document.querySelector('.message').textContent = "Start Guessing..";
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.body.style.backgroundColor = "#222";
    document.querySelector('.number').textContent = "?";
    document.querySelector('.number').style.width = "15rem";
    
});

