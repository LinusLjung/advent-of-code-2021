import increaseNumber from './increaseNumber';

describe('increaseNumber()', () => {
  it('should increase and wrap', () => {
    expect(increaseNumber(9, 2, 10, 1)).toBe(2);
    expect(increaseNumber(9, 1, 10, 1)).toBe(1);
  });
});
