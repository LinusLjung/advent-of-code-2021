import calculatePolymerValue from './calculatePolymerValue';

describe('calculatePolymerValue()', () => {
  it('should calculate the difference between the highest and lowest value', () => {
    expect(calculatePolymerValue({ N: 2, B: 6, C: 6, H: 1 })).toBe(6 - 1);
  });
});
