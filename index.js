let options = ["Rock", "Paper", "Scissors"];
let scoreComputer = 0;
let scorePlayer = 0;
let message;

const rock_button = document.querySelector(".rock");
const paper_button = document.querySelector(".paper");
const scissors_button = document.querySelector(".scissors");

const playerText = document.querySelector("#playerInput");
playerText.innerHTML = "";

const computerText = document.querySelector("#computerInput");

const messageText = document.querySelector("#message");

const scoreText = document.querySelector("#scoreOutput");
const scoreBox = document.querySelector(".scoreBox");

rock_button.addEventListener("click", function(){
  displayPlayerinput("Rock");
});

paper_button.addEventListener("click", function(){
  displayPlayerinput("Paper");
});

scissors_button.addEventListener("click", function(){
  displayPlayerinput("Scissors");
});

function computerPlay() {
  let computerAnwser = options[Math.floor(Math.random() * options.length)];
  computerText.innerHTML = computerAnwser;
  return computerAnwser;
}

function displayPlayerinput(input){
  playerText.innerHTML = input;
  messageText.innerHTML = (playRound(input, computerPlay()));
  setTimeout(updateScore, 1000);
  setTimeout(clear, 3000);
}

function clear(){
  computerText.innerHTML = "";
  playerText.innerHTML = "";
}

function updateScore(){
  scoreText.innerHTML = scorePlayer + " - " + scoreComputer;
  if(scorePlayer < scoreComputer){
    scoreBox.style.cssText = "border : 4px red solid";
  }else if(scorePlayer > scoreComputer){
    scoreBox.style.cssText = "border : 4px green solid";
  }else if (scorePlayer === scoreComputer){
    scoreBox.style.cssText = "border : 4px black solid";
  }
}


//Add waiting when computer chooses
//Change border color depending on score

/*
function roundNumber(){
  let rounds = window.prompt("How many rounds would you like to play?");
  if(isNaN(rounds)){
    alert("This is not a number");
    rounds = window.prompt("How many rounds would you like to play?");
    return rounds;
  }else{
    return rounds;
  }
}
*/

function playRound(playerSelection, computerSelection) {
  if(playerSelection == computerSelection){
    message = "Tie!"
    return message;
  }else if(playerSelection == "Rock" && computerSelection == "Scissors"
  || playerSelection == "Paper" && computerSelection == "Rock"
  || playerSelection == "Scissors" && computerSelection == "Paper"){
    message = "You win! " + playerSelection + " beats " + computerSelection + "!"
    ++scorePlayer;
    return message;
  }else if(computerSelection == "Rock" && playerSelection == "Scissors"
  || computerSelection == "Paper" && playerSelection == "Rock"
  || computerSelection == "Scissors" && playerSelection == "Paper"){
    message = "You lose! " + computerSelection + " beats " + playerSelection + "!"
    ++scoreComputer;
    return message;
  }
}


/*

function scoreBoard(){
  alert("Player: " + scorePlayer + " Computer: " + scoreComputer);
  game();
}


function game(rounds){
  for (var i = 0; i < rounds; i++) {
    playRound(playerChoice(), computerPlay());
    alert(message);
    //display score
    scoreBoard();
  }
  if(i == rounds){
    alert("Final score:  Player: " + scorePlayer + " Computer: " + scoreComputer);
  }

}

game(roundNumber());
*/
