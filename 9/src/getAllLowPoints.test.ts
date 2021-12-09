import getAllLowPoints from './getAllLowPoints';

describe('getAllLowPoints()', () => {
  it('should get all low points', () => {
    const input = [
      '2199943210',
      '3987894921',
      '9856789892',
      '8767896789',
      '9899965678',
      '8889966678',
    ];

    expect(getAllLowPoints(input)).toEqual([1, 0, 5, 5]);
  });
});
