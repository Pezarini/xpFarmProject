const { ticTacToe } = require('../src/index');

describe('Restrictions', () => {
	it('should return false when the input is not an array', () => {
		expect(ticTacToe('')).toBe(false);
	});

	it('should return false when the array length is different than 9', () => {
		const incorrectGameFormat = [
			'X', '',
			'', 'X', '',
			'', 'X', 'O',
		];
		expect(ticTacToe(incorrectGameFormat)).toBe(false);
	});

	it('should return false when the strings of array is not upper case', () => {
		const caseSensitive = [
			'X', '', 'o',
			'', 'X', '',
			'', 'X', 'O',
		];
		expect(ticTacToe(caseSensitive)).toBe(false);
	});
});

describe('Game Scenarios', () => {
	it('should return "Player X won!" when the input is a vertical line of "X"', () => {
		const verticalGamePlayerX = [
			'X', '', '',
			'X', 'O', '',
			'X', '', 'O',
		];
		expect(ticTacToe(verticalGamePlayerX)).toBe('Player X won!');
	});

	it('should return "Player O won!" when the input is a vertical line of "O"', () => {
		const verticalGamePlayerO = [
			'O', '', '',
			'O', 'X', '',
			'O', '', 'X',
		];
		expect(ticTacToe(verticalGamePlayerO)).toBe('Player O won!');
	});

	it('should return "Player X won!" when the input is a horizontal line of "X"', () => {
		const horizontalGamePlayerX = [
			'O', '', '',
			'X', 'X', 'X',
			'O', '', 'O',
		];
		expect(ticTacToe(horizontalGamePlayerX)).toBe('Player X won!');
	});

	it('should return "Player O won!" when the input is a horizontal line of "O"', () => {
		const horizontalGamePlayerO = [
			'X', '', '',
			'O', 'O', 'O',
			'X', '', 'X',
		];
		expect(ticTacToe(horizontalGamePlayerO)).toBe('Player O won!');
	});

	it('should return "Player X won!" when the input is a diagonal line of "X"', () => {
		const diagonalGamePlayerX = [
			'X', '', '',
			'O', 'X', '',
			'O', '', 'X',
		];
		expect(ticTacToe(diagonalGamePlayerX)).toBe('Player X won!');
	});

	it('should return "Player O won!" when the input is a diagonal line of "O"', () => {
		const diagonalGamePlayerO = [
			'O', '', '',
			'X', 'O', '',
			'X', '', 'O',
		];
		expect(ticTacToe(diagonalGamePlayerO)).toBe('Player O won!');
	});

	it('should return "Game ends with a draw!" when the input array has no winner', () => {
		const firstDrawGame = [
			'X', 'O', 'X',
			'O', 'O', 'X',
			'X', 'X', 'O',
		];

		const secondDrawGame = [
			'O', 'X', 'O',
			'X', 'X', 'O',
			'O', 'O', 'X',
		];
		expect(ticTacToe(firstDrawGame)).toBe('Game ends with a draw!');
		expect(ticTacToe(secondDrawGame)).toBe('Game ends with a draw!');
	});
});