function ticTacToe(gameInput) {
	let playerWinner = '';

	if (!Array.isArray(gameInput) || gameInput.length !== 9) {
		return false;
	}

	for (let indexGame = 0; indexGame < gameInput.length; indexGame++) {
		const upperCaseInput = gameInput[indexGame].toUpperCase();

		if (upperCaseInput !== gameInput[indexGame]) {
			return false;
		}
		if (gameInput[indexGame] === 'X') {
			if (gameInput[indexGame + 3] === 'X' && gameInput[indexGame + 6] === 'X') {
				playerWinner = 'Player X won!';
			}
			if (gameInput[indexGame + 1] === 'X' && gameInput[indexGame + 2] === 'X') {
				playerWinner = 'Player X won!';
			}
		}
		if (gameInput[indexGame] === 'O') {
			if (gameInput[indexGame + 3] === 'O' && gameInput[indexGame + 6] === 'O') {
				playerWinner = 'Player O won!';
			}
			if (gameInput[indexGame + 1] === 'O' && gameInput[indexGame + 2] === 'O') {
				playerWinner = 'Player O won!';
			}
		}
	};

	return playerWinner;
};

module.exports = {
	ticTacToe	
};