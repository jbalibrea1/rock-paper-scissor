const CHOICES = ['Rock', 'Paper', 'Scissor'];
let playerWinCount = 0;
let computerWinCount = 0;

function getComputerChoice() {
	return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function getPlayerChoice() {
	return prompt('Rock, Paper, or Scissor?');
}

function getWinner(playerChoice, computerChoice) {
	playerChoice = playerChoice.toLowerCase();
	computerChoice = computerChoice.toLowerCase();
	if (playerChoice === computerChoice) {
		return 'Draw';
	} else if (playerChoice === 'rock' && computerChoice === 'paper') {
		return 'You Win';
	} else if (playerChoice === 'paper' && computerChoice === 'scissor') {
		return 'You Win';
	} else if (playerChoice === 'scissor' && computerChoice === 'rock') {
		return 'You Win';
	} else {
		return 'You Lose';
	}
}

function playRound(playerChoice) {
	const divText = document.querySelector('#round-result');
	const score_player = document.querySelector('#player-result');
	const score_computer = document.querySelector('#computer-result');
	score_player.parentElement.style.backgroundColor = 'transparent';
	score_computer.parentElement.style.backgroundColor = 'transparent';

	if (playerWinCount >= 5) {
		divText.textContent = `You are the winner`;
		return;
	} else if (computerWinCount >= 5) {
		divText.textContent = `Computer is the winner`;
		return;
	}

	let computerChoice = getComputerChoice();
	let winner = getWinner(playerChoice, computerChoice);
	if (winner == 'Draw') {
		divText.textContent = "It's a draw";
		score_computer.parentElement.style.backgroundColor = 'yellow';
		score_player.parentElement.style.backgroundColor = 'yellow';
	} else if (winner == 'You Lose') {
		divText.textContent = 'Computer Win';
		computerWinCount++;
		score_computer.textContent = computerWinCount;
		score_computer.parentElement.style.backgroundColor = 'green';
	} else if (winner == 'You Win') {
		divText.textContent = 'You Win';
		playerWinCount++;
		score_player.textContent = playerWinCount;
		score_player.parentElement.style.backgroundColor = 'green';
	}
	text.textContent = `You Win ${playerWinCount} times and Computer Win ${computerWinCount} times`;
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
	button.textContent = button.id;
	button.addEventListener('click', function (e) {
		playRound(button.id);
	});
});
