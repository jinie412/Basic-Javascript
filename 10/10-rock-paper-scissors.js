let scores = JSON.parse(localStorage.getItem("score")) || {
  Win: 0,
  Lose: 0,
  Tie: 0,
};

updateScoreElement();

console.log(scores);
function resetScores() {
  scores.Win = 0;
  scores.Lose = 0;
  scores.Tie = 0;
  localStorage.removeItem("score");
}
function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let announcement = "";
  if (playerMove === computerMove) {
    announcement = "Tie.";
  } else if (playerMove === "rock") {
    if (computerMove === "paper") {
      announcement = "You lose.";
    } else {
      announcement = "You win.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      announcement = "You win.";
    } else {
      announcement = "You lose.";
    }
  } else {
    if (computerMove === "rock") {
      announcement = "You lose.";
    } else if (computerMove === "paper") {
      announcement = "You win.";
    }
  }

  if (announcement === "You win.") {
    scores.Win += 1;
  } else if (announcement === "You lose.") {
    scores.Lose += 1;
  } else {
    scores.Tie += 1;
  }

  localStorage.setItem("score", JSON.stringify(scores));

  updateScoreElement();
  document.querySelector(".js-result").innerHTML = announcement;

  document.querySelector(".js-moves").innerHTML = `You
      <img src="../images/${playerMove}-emoji.png" class="move-icon" />
      <img src="../images/${computerMove}-emoji.png" class="move-icon" />
      Computer`;
}
function pickComputerMove() {
  let computerMove;
  const randomNumber = Math.random();

  if (randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber < 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }
  return computerMove;
}
function updateScoreElement() {
  document.querySelector(".js-score").innerHTML = `
      Scores: Wins: ${scores.Win}, Losses: ${scores.Lose}, Ties: ${scores.Tie}.`;
}
