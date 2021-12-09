import getRiskLevels from './getRiskLevels';

describe('getRiskLevels()', () => {
  it('should calculate the risk level of each point', () => {
    expect(getRiskLevels([-10, 1, 3, 7, 8, 10])).toEqual([-9, 2, 4, 8, 9, 11]);
  });
});
