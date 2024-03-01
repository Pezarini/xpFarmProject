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