import isUpperCase from './isUpperCase';

describe('isUpperCase()', () => {
  it.each([
    ['a', false],
    ['A', true],
    ['Aa', false],
    ['aA', false],
    ['AA', true],
  ])('should check if the string is all upper case', (input, expected) => {
    expect(isUpperCase(input)).toBe(expected);
  });
});
