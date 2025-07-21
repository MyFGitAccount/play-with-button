let counter = document.getElementById("counter");
let button_counter = 0;
counter.addEventListener("click", () => {
    button_counter++;
    counter.textContent = `counter:${button_counter}`;
})

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");
let gameResult = document.getElementById("gameResult");
let countPlayerScore = document.getElementById("count-playerScore");
let countComScore = document.getElementById("count-comScore");
let playerScore = 0;
let comScore = 0;
const genComMove = () => {
    const move = ["rock", "paper", "scissor"]
    const moveLen = move.length;
    const comMoveIndex = Math.floor(Math.random() * moveLen);
    const comMove = move[comMoveIndex];
    return comMove;
}

const getResult = (playerMove, comMove) => {
    if (playerMove === "scissor" && comMove === "paper" || playerMove === "paper" && comMove === "rock" || playerMove === "rock" && comMove === "scissor") {
        playerScore++;
        gameResult.textContent = `Player choose ${playerMove} while computer choose ${comMove} so you win!!!`;
        countPlayerScore.innerText = `Player Score:${playerScore}`;
        gameResult.style.color = "red"
    }
    else if (playerMove === comMove) {
        gameResult.textContent = `Player choose ${playerMove} while computer choose ${comMove} so this round is draw!!!`;
        gameResult.style.color = "yellow";
    }
    else {
        comScore++;
        gameResult.textContent = `Player choose ${playerMove} while computer choose ${comMove} so computer win!!!`;
        gameResult.style.color = "green";
        countComScore.innerText = `Computer Score:${comScore}`;
    }
}

rockBtn.addEventListener("click", () => {
    const playerMove = "rock";
    const comMove = genComMove();
    getResult(playerMove, comMove);
})

paperBtn.addEventListener("click", () => {
    const playerMove = "paper";
    const comMove = genComMove();
    getResult(playerMove, comMove);
})

scissorBtn.addEventListener("click", () => {
    const playerMove = "scissor";
    const comMove = genComMove();
    getResult(playerMove, comMove);
})

const changeBackgroundColorBtn = document.getElementById("change-background-color-button");
let hintBackgroundColor = document.getElementById("hint-background-color");
let colorCounter = 0
function changeBackgroundColor(color, currentColor) {
    document.body.style.backgroundColor = color;
    colorCounter++;
    hintBackgroundColor.textContent = `Current background color:${currentColor}`;
}
const backgroundcolorArrValue=["#96b400","#ffb6c1","#0ba1ff","#0ba1ff","#cfede6","#c7d8c6"
,"#bcc5bc","#d433ff","#ff3378","ff3343","#33ffc6","#ccff33","#ffd133",
"ffad33","#ff7433","#ff5333","#ffcd33","#c8ff33","#33ff4d","#33d6ff",
"#ec33ff"
]
const backgroundcolorArrLen=backgroundcolorArrValue.length;
changeBackgroundColorBtn.addEventListener("click", () => {
   if(colorCounter<backgroundcolorArrLen){
    changeBackgroundColor(backgroundcolorArrValue[colorCounter],backgroundcolorArrValue[colorCounter].toUpperCase())
   }else{
    document.body.style.backgroundColor="white";
    colorCounter=0;
    hintBackgroundColor.textContent="";
   }
})

const audioButton=document.getElementById("audio-button");
const sounds=[
    new Audio("three-random-tunes-girl-200030.mp3"),
    new Audio("random-beep-76811.mp3"),
    new Audio("random-tbtx1-beeping-27363.mp3"),
    new Audio("random-kalimba-a-288207.mp3"),
    new Audio("random-dumb-sound-achieved-with-my-mouth-83132.mp3"),
    new Audio("wowowowowowowow-103214.mp3"),
    new Audio("aaah_yeete-47696.mp3"),
    new Audio("dice-142528.mp3"),
    new Audio("glass-clinking-241043.mp3"),
    new Audio("tech-house-vocal2-253458.mp3")
]

audioButton.addEventListener("click", () => {
    const index = Math.floor(Math.random() * sounds.length);
    sounds[index].play();
  });

  let footerTime=document.getElementById("footer-time");

  let timeNow=new Date();
  

  footerTime.textContent=timeNow.toString();
