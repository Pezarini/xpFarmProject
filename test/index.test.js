const { ticTacToe } = require('../src/index');

describe('Restrictions', () => {
	it('should return false when the input is not an array', () => {
		expect(ticTacToe('')).toBe(false)
	});
});