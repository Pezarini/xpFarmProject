const { ticTacToe } = require('../src/index');

const incorrectGameFormat = [
	'X', '',
	'', 'X', '',
	'', 'X', 'O',
]
describe('Restrictions', () => {
	it('should return false when the input is not an array', () => {
		expect(ticTacToe('')).toBe(false)
	});

	it('should return false when the array length is different than 9', () => {
		expect(ticTacToe(incorrectGameFormat)).toBe(false)
	});
});

const verticalGameX = [
	'X', '', '',
	'X', 'O', '',
	'X', '', 'O',
];

describe('Game Scenarios', () => {
	it('should return "Player X won!" when the input is a vertical line of "X"', () => {
		expect(ticTacToe(verticalGameX)).toBe('Player X won!');
	});
});