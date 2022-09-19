const startButton=document.querySelector('.start');
const resetButton=document.querySelector('.reset');
const startingGameImg=document.querySelector('.game-starting-img');
const chooseButtons=document.querySelectorAll('.buttons');
const chooseButtons2=document.querySelectorAll('.buttons2');
const computerPoints=document.querySelector('.score-1');
const playerPoints=document.querySelector('.score-2');
const message=document.querySelector('.message');
const animation=document.querySelector('.animationImg');
const userImg=document.querySelector('.userImg');
const computerImg=document.querySelector('.computerImg')
const playerHeading=document.querySelectorAll('.playerName')
const howPlayGame=document.querySelector('.btn');
let gameState=false;




let computerScore=0;
let playerScore=0;

setTimeout(function(){
    message.innerHTML="Press Start Button To Play Game."
},2000)


howPlayGame.addEventListener('click',function(){
    alert('Welcome To Stone, Paper, And Scissor Game. The Game Is Between Computer And Player(YOU), First One To Reach Five(5) Points Wins The Game.')
 })




////check winner................
const checkWinner=function(){
    if(computerScore===3){
       message.innerHTML=`Computer Wins By ${computerScore-playerScore} Points. Press Reset To Play Again.`;
       gameState=false;
    //    message.innerHTML="Press Reset To Play Again";
    }else if(playerScore===3){
       message.innerHTML=`Player Wins By ${playerScore-computerScore} Points. Press Reset To Play Again.`;
       gameState=false;
    //    message.innerHTML="Press Reset To Play Again";
    }
 }
 //check winner ends...........


 // reset functionality---------
 resetButton.addEventListener('click',function(){
    animation.classList.add('visibilityNone');
    computerImg.classList.add('visibilityNone');
    userImg.classList.add('visibilityNone');
       gameState=false;
       computerScore=0;
       playerScore=0;
       playerPoints.innerHTML=playerScore;
       computerPoints.innerHTML=computerScore;
       message.innerHTML="Welcome!---------";
       setTimeout(function(){
        message.innerHTML="Press Start Button To Play Game."
    },2000)

 })
 
 //reset functionality ends--------




    for(let x=0;x<chooseButtons.length;x++){
        chooseButtons[x].addEventListener('click',function(){
            chooseButtons[x].classList.add('noBoxShadow');
            console.log('hello');
            setTimeout(function(){
                chooseButtons[x].classList.remove('noBoxShadow');
            },200)
        })
};

for(let y=0;y<chooseButtons2.length;y++){
    chooseButtons2[y].addEventListener('click',function(){
        chooseButtons2[y].classList.add('noBoxShadow');
        console.log('hello');
        setTimeout(function(){
            chooseButtons2[y].classList.remove('noBoxShadow');
        },200)
    })
}

/// start buttom functionality---------------
startButton.addEventListener('click',function(){
    if(!gameState){
    for(let w=0;w<playerHeading.length;w++){
        playerHeading[w].classList.add('visibilityNone');
    }
    startingGameImg.classList.remove('displayNone');
    startingGameImg.src="images/introduction-img.gif";
    message.innerHTML="Starting Game-------"
    setTimeout(function(){
        startingGameImg.classList.add('displayNone');
        message.innerHTML="Choose From Stone, Paper or Scissor."
        gameState=true;
        for(let w=0;w<playerHeading.length;w++){
            playerHeading[w].classList.remove('visibilityNone');
        }
    },2000)
}})




for(let i=0;i<chooseButtons.length;i++){
    chooseButtons[i].addEventListener('click',function(){
       if(gameState){
       animation.classList.remove('visibilityNone')
       animation.src="images/321-go img.gif";
          setTimeout(function(){
                   if(i===0){
                      userImg.src="images/stone-bg remove.png";
                    }else if(i===1){
                     userImg.src="images/paper-bg-remove.png";
                    }else if(i===2){
                     userImg.src="images/scissor-bg-remove.png";
                    };
                    computerImg.classList.remove('visibilityNone');
                    userImg.classList.remove('visibilityNone');
 
           // change computer image
              const randomNumber =Math.trunc(Math.random()*3);
                  if(randomNumber===0){
                      computerImg.src="images/scissor-bg-remove.png"
                     }else if(randomNumber===1){
                      computerImg.src="images/stone-bg remove.png";
                     }else if(randomNumber===2){
                      computerImg.src="images/paper-bg-remove.png";
                     }
                     console.log(randomNumber);      
                     
          // changing animation
          if(i===0&&randomNumber===0){
                       message.innerHTML="Pkayer Wins a Point";
                       animation.src="images/stone-scissor-img.jpg";
                       playerScore++;
                       playerPoints.innerHTML=playerScore;
                    }else if(i===0&&randomNumber===1){
                     message.innerHTML="No One wins, Choose Again";
                     animation.src="images/introduction-img.gif";
                    }else if(i===0&&randomNumber===2){
                     message.innerHTML="Computer Wins a Point";
                     animation.src="images/rock-paper-img.gif";
                     computerScore++;
                     computerPoints.innerHTML=computerScore;
                    }else if(i===1&&randomNumber===0){
                     message.innerHTML="Computer Wins a Point"
                     animation.src="images/scissor cutting paper.gif";
                     computerScore++;
                     computerPoints.innerHTML=computerScore;
                  }else if(i===1&&randomNumber===1){
                   message.innerHTML="Player Wins a Point"
                   animation.src="images/rock-paper-img.gif";
                   playerScore++;
                       playerPoints.innerHTML=playerScore;
                  }else if(i===1&&randomNumber===2){
                   message.innerHTML="No One wins, Choose Again"
                   animation.src="images/introduction-img.gif";
                  }else if(i===2&&randomNumber===0){
                     message.innerHTML="No One wins, Choose Again";
                     animation.src="images/introduction-img.gif";
                  }else if(i===2&&randomNumber===1){
                   message.innerHTML="Computer Wins a Point";
                   animation.src="images/stone-scissor-img.jpg";
                   computerScore++;
                     computerPoints.innerHTML=computerScore;
                  }else if(i===2&&randomNumber===2){
                   message.innerHTML="Player Wins a Point";
                   animation.src="images/scissor cutting paper.gif";
                   playerScore++;
                   playerPoints.innerHTML=playerScore;
                }
                // dividing line
                checkWinner();
            },4000)
         }})
      };
      
