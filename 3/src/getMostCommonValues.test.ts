import getMostCommonValues from './getMostCommonValues';

describe('getMostCommonValues()', () => {
  it.each([
    [[1, 1, 0], [1]],
    [
      [1, 1, 0, 0],
      [1, 0],
    ],
    [[1, 1, 1], [1]],
    [[0, 0, 0], [0]],
    [[0, 0, 1], [0]],
    [[], []],
    [
      [1, 2, 3],
      [1, 2, 3],
    ],
  ])('should return the most common value in an array', (input, expected) => {
    const result = getMostCommonValues(input);

    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result.length).toBe(expected.length);
  });
});
