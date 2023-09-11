const playerScore = document.getElementById("player-score");
const hands = document.getElementById("hands");
const resultDiv = document.getElementById("result");

const getComputerChoice = () => {
  const rpsChoice = ["Rock", "Paper", "Scissors"];
  const randomChoice = rpsChoice[Math.floor(Math.random() * 3)];
  return randomChoice;
};

const getResult = (playerChoice, computerChoice) => {
  let score;
  if (playerChoice === computerChoice) {
    score = 0;
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    score = 1;
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    score = 1;
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    score = 1;
  } else {
    score = -1;
  }
  return score;
};

const showResult = (score, playerChoice, ComputerChoice) => {
  switch (score) {
    case -1:
      resultDiv.innerText = "You Lost!";
      break;

    case 0:
      resultDiv.innerText = " its a Draw!";
      break;

    case 1:
      resultDiv.innerText = "You Won!";
      break;
  }
  playerScore.innerText = `${Number(playerScore.innerText) + score}`;
  hands.innerText = `👱 ${playerChoice} vs 🤖 ${ComputerChoice}`;
};

const clickRps = (playerChoice) => {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice, computerChoice);
  showResult(score, playerChoice, computerChoice);
};

const playGame = () => {
  const rpsButtons = document.querySelectorAll(".rpsButton");

  rpsButtons.forEach((rpsButton) => {
    rpsButton.onclick = () => clickRps(rpsButton.value);
  });

  const deleteBtn = document.getElementById("endGameButton");
  deleteBtn.onclick = () => {
    playerScore.innerText = "";
    hands.innerText = "";
    resultDiv.innerText = "";
  };
};
playGame();
