import calculatePolymerValue from './calculatePolymerValue';

describe('calculatePolymerValue()', () => {
  it('should calculate the difference between the highest and lowest value', () => {
    expect(calculatePolymerValue('NBCCNBBBCBHCB')).toBe(6 - 1);
  });
});
