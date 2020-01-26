const btn = document.querySelector(".btn");
const resultContainer = document.querySelector(".result__container");

// game variables
let startGame = false;
let CHOICE = ["ROCK", "PAPER", "SCISSORS"];
let WINNING_CONDITION = ["Draw", "player wins", "computer wins"];
let DEFAULT_CHOICE = CHOICE[0];

function getPlayersChoice(value) {
  if (!CHOICE.includes(value)) {
    alert(
      "you have not chosen correctly ,so we give you ROCK as default choice"
    );
    return DEFAULT_CHOICE;
  } else {
    return value;
  }
}

function getComputersChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  return CHOICE[randomNumber];
}

function whoWon(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return WINNING_CONDITION[0];
  } else if (
    (playerChoice === CHOICE[1] && computerChoice === CHOICE[0]) ||
    (playerChoice === CHOICE[2] && computerChoice === CHOICE[1]) ||
    (playerChoice === CHOICE[0] && computerChoice === CHOICE[2])
  ) {
    return WINNING_CONDITION[1];
  } else {
    return WINNING_CONDITION[2];
  }
}
btn.addEventListener("click", function() {
  swal({
    icon: "success",
    title: "game is started"
  });

  swal("Choose Between ROCK,PAPER,SCISSORS", {
    content: "input"
  }).then(value => {
    const playerChoice = getPlayersChoice(value.toUpperCase());
    swal(`YOU HAVE CHOOSEN : ${playerChoice}`).then(not => {
      const computerChoice = getComputersChoice();
      const won = whoWon(playerChoice, computerChoice);

      let message = `you have chosen ${playerChoice} and the computer chose ${computerChoice} so therefore`;

      if (won === WINNING_CONDITION[0]) {
        message += ` it is a draw`;
      } else if (won === WINNING_CONDITION[1]) {
        message += ` you won`;
      } else {
        message += ` computer won`;
      }

      swal({
        title: message,
        icon: "success"
      });
    });
  });
});
