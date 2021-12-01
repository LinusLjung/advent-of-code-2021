import countIncreases from './countIncreases';

describe('countIncreases()', () => {
  it('should count increases', () => {
    expect(countIncreases([1, 2, 3, 4, 5])).toBe(4);
    expect(countIncreases([5, 4, 3, 2, 1])).toBe(0);
    expect(countIncreases([-1, 4, 3, 2, 6, 6, 7])).toBe(3);
  });
});
