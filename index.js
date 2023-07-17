function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
function playRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase();
  const computerChoice = computerSelection.toLowerCase();

  // Check for a tie
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  }

  // Check for player wins
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win! " + playerSelection + " beats " + computerSelection;
  }

  // If it's not a tie or player win, computer wins
  return "You lose! " + computerSelection + " beats " + playerSelection;
}
function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "Enter your choice: Rock, Paper, or Scissors"
    );
    const computerSelection = getComputerChoice();

    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    // Update scores
    if (result.startsWith("You win")) {
      playerScore++;
    } else if (result.startsWith("You lose")) {
      computerScore++;
    }
  }

  // Report winner or loser
  if (playerScore > computerScore) {
    console.log("Congratulations! You win the game.");
  } else if (playerScore < computerScore) {
    console.log("Sorry! You lose the game.");
  } else {
    console.log("It's a tie game.");
  }
}

// Start the game
game();
