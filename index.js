let options = ["Rock", "Paper", "Scissors"];
let scoreComputer = 0;
let scorePlayer = 0;
let message;

//const playerAnwser = document.querySelector(".player_anwser");


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

function playerChoice(){
  let rawInput = window.prompt("Choose Rock, Paper or Scissors: ");
  let input = rawInput.toLowerCase();
  return input.charAt(0).toUpperCase() + input.slice(1);
}

function computerPlay() {
  let computerAnwser = options[Math.floor(Math.random() * options.length)];
  return computerAnwser;
}

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
  //Add undefined anwser

}

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
