import stringToNumberArray from './stringToNumberArray';

describe('stringToNumberArray()', () => {
  it('should convert a string to an array of numbers', () => {
    expect(stringToNumberArray('2199943210')).toEqual([
      2, 1, 9, 9, 9, 4, 3, 2, 1, 0,
    ]);
  });
});
