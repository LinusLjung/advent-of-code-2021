import countGrowth from './countGrowth';

describe('countGrowth', () => {
  it.each([
    ['3,4,3,1,2', 18, 26],
    ['3,4,3,1,2', 80, 5934],
  ])(
    'should count the number of fish after n days',
    (input, days, expected) => {
      expect(countGrowth(input, days)).toBe(expected);
    }
  );
});
