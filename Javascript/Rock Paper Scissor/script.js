document.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const rockBtn = document.getElementById('rock');
    const paperBtn = document.getElementById('paper');
    const scissorsBtn = document.getElementById('scissors');
    const playerChoiceDisplay = document.getElementById('player-choice');
    const computerChoiceDisplay = document.getElementById('computer-choice');
    const resultDisplay = document.getElementById('result');
    const playerScoreDisplay = document.getElementById('player-score');
    const computerScoreDisplay = document.getElementById('computer-score');
    const drawsDisplay = document.getElementById('draws');
    const gameOverDiv = document.getElementById('game-over');
    const winnerMessage = document.getElementById('winner-message');
    const playAgainBtn = document.getElementById('play-again');
    
    // Game variables
    let playerScore = 0;
    let computerScore = 0;
    let draws = 0;
    let gameOver = false;
    
    // Event listeners for buttons
    rockBtn.addEventListener('click', () => playGame('rock'));
    paperBtn.addEventListener('click', () => playGame('paper'));
    scissorsBtn.addEventListener('click', () => playGame('scissors'));
    playAgainBtn.addEventListener('click', resetGame);
    
    // Main game function
    function playGame(playerSelection) {
        if (gameOver) return;
        
        // Computer's random selection
        const computerSelection = getComputerChoice();
        
        // Update display choices
        playerChoiceDisplay.textContent = `Your choice: ${capitalizeFirstLetter(playerSelection)}`;
        computerChoiceDisplay.textContent = `Computer's choice: ${capitalizeFirstLetter(computerSelection)}`;
        
        // Determine the winner
        const result = determineWinner(playerSelection, computerSelection);
        
        // Update result display
        resultDisplay.textContent = `Result: ${result}`;
        
        // Update scores
        if (result.includes('Win')) {
            playerScore++;
            playerScoreDisplay.textContent = `Your score: ${playerScore}`;
        } else if (result.includes('Lose')) {
            computerScore++;
            computerScoreDisplay.textContent = `Computer's score: ${computerScore}`;
        } else {
            draws++;
            drawsDisplay.textContent = `Draws: ${draws}`;
        }
        
        // Check if game is over
        checkGameOver();
    }
    
    // Computer's random choice
    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    }
    
    // Determine the winner
    function determineWinner(player, computer) {
        if (player === computer) {
            return 'Draw!';
        }
        
        if (
            (player === 'rock' && computer === 'scissors') ||
            (player === 'paper' && computer === 'rock') ||
            (player === 'scissors' && computer === 'paper')
        ) {
            return 'You Win!';
        } else {
            return 'You Lose!';
        }
    }
    
    // Check if game is over (first to 5 points)
    function checkGameOver() {
        if (playerScore >= 5 || computerScore >= 5) {
            gameOver = true;
            gameOverDiv.classList.remove('hidden');
            
            if (playerScore > computerScore) {
                winnerMessage.textContent = 'Congratulations! You won the game!';
            } else {
                winnerMessage.textContent = 'Game over! Computer won the game.';
            }
            
            // Disable game buttons
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;
        }
    }
    
    // Reset the game
    function resetGame() {
        playerScore = 0;
        computerScore = 0;
        draws = 0;
        gameOver = false;
        
        playerScoreDisplay.textContent = `Your score: 0`;
        computerScoreDisplay.textContent = `Computer's score: 0`;
        drawsDisplay.textContent = `Draws: 0`;
        
        playerChoiceDisplay.textContent = `Your choice: `;
        computerChoiceDisplay.textContent = `Computer's choice: `;
        resultDisplay.textContent = `Result: `;
        
        gameOverDiv.classList.add('hidden');
        
        // Enable game buttons
        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scissorsBtn.disabled = false;
    }
    
    // Helper function to capitalize first letter
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
});