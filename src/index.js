function ticTacToe(gameInput) {
	let playerWinner = '';

	if (!Array.isArray(gameInput) || gameInput.length !== 9) {
		return false;
	}

	for (let indexGame = 0; indexGame < gameInput.length; indexGame++) {
		if (gameInput[indexGame] === 'X') {
			if (gameInput[indexGame + 3] === 'X' && gameInput[indexGame + 6] === 'X') {
				playerWinner = 'Player X won!';
			}
		}
	};

	return playerWinner;
};

module.exports = {
	ticTacToe	
};