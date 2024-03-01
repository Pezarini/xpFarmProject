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

const verticalGamePlayerX = [
	'X', '', '',
	'X', 'O', '',
	'X', '', 'O',
];
const verticalGamePlayerO = [
	'O', '', '',
	'O', 'X', '',
	'O', '', 'X',
];
const horizontalGamePlayerX = [
	'O', '', '',
	'X', 'X', 'X',
	'O', '', 'O',
];
const horizontalGamePlayerO = [
	'X', '', '',
	'O', 'O', 'O',
	'X', '', 'X',
]

describe('Game Scenarios', () => {
	it('should return "Player X won!" when the input is a vertical line of "X"', () => {
		expect(ticTacToe(verticalGamePlayerX)).toBe('Player X won!');
	});

	it('should return "Player O won!" when the input is a vertical line of "O"', () => {
		expect(ticTacToe(verticalGamePlayerO)).toBe('Player O won!');
	});

	it('should return "Player X won!" when the input is a horizontal line of "X"', () => {
		expect(ticTacToe(horizontalGamePlayerX)).toBe('Player X won!');
	});

	it('should return "Player O won!" when the input is a horizontal line of "O"', () => {
		expect(ticTacToe(horizontalGamePlayerO)).toBe('Player O won!');
	});
});