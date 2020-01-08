const btn = document.querySelector(".btn");
const resultContainer = document.querySelector(".result__container");

resultContainer.innerHTML = "result";

let startGame = false;
let CHOICE_ROCK = "ROCK";
let CHOICE_PAPER = "PAPER";
let CHOICE_SCISSORS = "SCISSORS";
let DEFAULT_CHOICE = "ROCK";
let WINNING_CONDITION_DRAW = "Draw";
let WINNING_CONDITION_PLAYER_WINS = "player wins";
let WINNING_CONDITION_COMPUTER_WINS = "computer wins";

function getPlayersChoice() {
  const playerChoice = prompt("Choose Rock,Paper,Scissors").toUpperCase();

  if (
    playerChoice !== CHOICE_PAPER &&
    playerChoice !== CHOICE_ROCK &&
    playerChoice !== CHOICE_SCISSORS
  ) {
    alert("you have not chosen correctly ,so we give you ROCK");
    return DEFAULT_CHOICE;
  } else {
    return playerChoice;
  }
}

function getComputersChoice() {
  const randomNumber = Math.random();
  if (randomNumber <= 0.33) {
    return CHOICE_PAPER;
  } else if (randomNumber >= 0.33 && randomNumber <= 0.66) {
    return CHOICE_ROCK;
  } else {
    return CHOICE_SCISSORS;
  }
}

function whoWon(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return WINNING_CONDITION_DRAW;
  } else if (
    (playerChoice === CHOICE_PAPER && computerChoice === CHOICE_ROCK) ||
    (playerChoice === CHOICE_SCISSORS && computerChoice === CHOICE_PAPER) ||
    (playerChoice === CHOICE_ROCK && computerChoice === CHOICE_SCISSORS)
  ) {
    return WINNING_CONDITION_PLAYER_WINS;
  } else {
    return WINNING_CONDITION_COMPUTER_WINS;
  }
}

btn.addEventListener("click", function() {
  if (startGame) {
    return;
  }

  console.log("Game is Starting ....");

  startGame = true;

  //   players choice
  const playerChoice = getPlayersChoice();
  //   computers choice
  const computerChoice = getComputersChoice();
  //   winning
  const won = whoWon(playerChoice, computerChoice);

  let message = `you have chosen ${playerChoice} and the computer chose ${computerChoice} so therefore`;

  if (won === WINNING_CONDITION_DRAW) {
    message += ` it is a draw`;
  } else if (won === WINNING_CONDITION_PLAYER_WINS) {
    message += ` you won`;
  } else {
    message += ` computer won`;
  }

  resultContainer.innerHTML = message;
  startGame = false;
});
