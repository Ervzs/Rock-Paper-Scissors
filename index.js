// Rock Paper Scissors Game
const choices = ['rock', 'paper', 'scissors'];
const player1 = document.getElementById('player1');
const computer = document.getElementById('computer');
const resultDisplay = document.getElementById('resultDisplay');

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)]
    var playerChoice= playerChoice;
    console.log(computerChoice)

    if (playerChoice == 'rock' && computerChoice == 'scissors' || 
        playerChoice == 'paper' && computerChoice == 'rock' || 
        playerChoice == 'scissors' && computerChoice == 'paper') {
        console.log('Player wins!');
    }
    else if (playerChoice == computerChoice){
        console.log('It\'s a tie!');
    }
    else{
        console.log('Computer wins!');
    }
    
}
