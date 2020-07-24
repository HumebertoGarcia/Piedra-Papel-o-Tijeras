//DOM Manipulating
let playerScore = 0;
let computerScore = 0;
let roundScore = 0;
const announce = document.querySelector('#announcement');
const computerSelection = computerPlay();
const top_Page = document.querySelector("#header");
const btns = document.querySelectorAll("img");
const cScore = document.getElementById("cScore");
const pScore = document.getElementById("pScore");
const round = document.getElementById("round");
pScore.textContent = `Player: ${playerScore}`; 
cScore.textContent = `Computer: ${computerScore}`; 


btns.forEach(input => {
  // and for each one we add a 'click' listener
  input.addEventListener("click", play);
});

//Functions Declaration
function playRound(playerSelection, computerSelection) {
  
  roundScore++;
  //Tie scenario
  if (playerSelection == computerSelection) {
    announce.textContent = "Tie";
  }
    
    if (playerSelection == "rock" && computerSelection == "paper") {
      computerScore++;
      cScore.innerHTML = `Computer: ${computerScore}`;
      announce.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
      computerScore++;
      cScore.innerHTML = `Computer: ${computerScore}`;
      announce.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
      computerScore++;
      cScore.innerHTML = `Computer: ${computerScore}`;
      announce.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    
    // Player wins scenarios
    else if (playerSelection == "rock" && computerSelection == "scissors") {
      playerScore++;
      pScore.innerHTML = `Player: ${playerScore}`;
    announce.textContent = `You Win! ${playerSelection} beats ${computerSelection} `;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    pScore.innerHTML = `Player: ${playerScore}`;
    announce.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    pScore.innerHTML = `Player: ${playerScore}`;
    announce.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    
  }
  return;
}

function computerPlay() {
  const myArray = ["rock", "paper", "scissors"];
  let random = myArray[Math.floor(Math.random() * myArray.length)];
  return random;
}

function gameWin () {
  
  if (playerScore == 5 || roundScore == 5 || computerScore == 5)  {
    if(playerScore === computerScore) {
      announce.textContent = `Draw! ${playerScore} - ${computerScore}`;
     
    } else if (playerScore > computerScore) {
      announce.textContent = `Player WIN! ${playerScore} - ${computerScore}`;
      pScore.innerHTML = `Player: ${playerScore}`;
      cScore.innerHTML = `Computer: ${computerScore}`;
      playerScore = 0;
      computerScore = 0;
      roundScore=0; 
      
    } else if (computerScore > playerScore) {
      announce.textContent = `Computer WIN! ${computerScore} - ${playerScore}`;
      pScore.innerHTML = `Player: ${playerScore}`;
      cScore.innerHTML = `Computer: ${computerScore}`;
      playerScore = 0;
      computerScore = 0;
      roundScore=0; 
      
    }
  } 
  round.textContent = `Round: ${roundScore}`;
  
  return;
  
}

// Calls Functions

function play(e) {
const player = e.target.id;
const computerSelection = computerPlay();
playRound(player, computerSelection);
gameWin();
    
  }

