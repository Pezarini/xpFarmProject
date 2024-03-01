function ticTacToe(gameInput) {
	return Array.isArray(gameInput) && gameInput.length === 9;
};

module.exports = {
	ticTacToe
};