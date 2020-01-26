const buttons = document.querySelectorAll(".choice__btn");
const resultContainer = document.querySelector(".result");
const scoreContainer = document.querySelector(".score");

class Game {
  constructor() {
    this.playerChoice = null;
    this.computerChoice = null;
    this.choices = ["rock", "paper", "scissors"];
    this.winningMessage = ["Draw", "You Won", "You Lost"];
    this.score = {
      player: 0,
      computer: 0
    };
  }

  getPlayerChoice(choice) {
    this.playerChoice = choice.toLowerCase();
    return this.playerChoice;
  }

  getComputerChoice() {
    this.random = Math.floor(Math.random() * 3);
    this.computerChoice = this.choices[this.random];
    return this.computerChoice;
  }

  getGameWinner(scoreUpdateFunction) {
    if (this.playerChoice === this.computerChoice) {
      return this.winningMessage[0];
    } else if (
      (this.playerChoice === this.choices[1] &&
        this.computerChoice === this.choices[0]) ||
      (this.playerChoice === this.choices[2] &&
        this.computerChoice === this.choices[1]) ||
      (this.playerChoice === this.choices[0] &&
        this.computerChoice === this.choices[2])
    ) {
      this.score.player++;
      scoreUpdateFunction();
      localStorage.clear();
      localStorage.setItem("winner", JSON.stringify(this.winningMessage[1]));
      this.redirectGameWinner();
      return this.winningMessage[1];
    } else {
      this.score.computer++;
      scoreUpdateFunction();
      localStorage.clear();
      localStorage.setItem("winner", JSON.stringify(this.winningMessage[2]));
      this.redirectGameWinner();
      return this.winningMessage[2];
    }
  }

  redirectGameWinner() {
    if (this.score.player === 10) {
      window.location.href = "/result.html";
    } else if (this.score.computer === 10) {
      window.location.href = "/result.html";
    }
  }

  scoreUpdate() {
    return `
        <h3 class="score__player score__same">
            <span class="score__player--number">${this.score.player}</span>
            <span class="score__player--name">Player</span>
        </h3>
        <h3 class="score__computer score__same">
            <span class="score__computer--number">${this.score.computer}</span>
            <span class="score__computer--name">Computer</span>
        </h3>
      
      `;
  }

  showResult(playerChoice, computerChoice, winnerMessage) {
    return `
        <div class="result__container">
        <div class="result__player">
          <div class=" choice__btn--style">
            <i class="far fa-hand-${playerChoice}"></i>
          </div>
        </div>
        <div class="result__text">
          
          ${winnerMessage}
        </div>
        <div class="result__computer">
          <div class=" choice__btn--style">
            <i class="far fa-hand-${computerChoice}"></i>
          </div>
        </div> 
      </div>
        `;
  }
}

const game = new Game();

buttons.forEach(btn => {
  btn.addEventListener("click", function() {
    const player = game.getPlayerChoice(this.value);
    const computer = game.getComputerChoice();
    const gameWinner = game.getGameWinner(
      () => (scoreContainer.innerHTML = game.scoreUpdate())
    );

    showResultDepandancy(player, computer, gameWinner);
  });
});

function showResultDepandancy(player, computer, winnerMessage) {
  resultContainer.innerHTML = game.showResult(player, computer, winnerMessage);
}
