import reduceToSingleValue from './reduceToSingleValue';

describe('reduceToSingleValue()', () => {
  it('should return the value based on the measurement data and the significant bit', () => {
    const input = [
      [0, 0, 1, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 1, 1, 0],
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [0, 1, 1, 1, 1],
      [0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 1],
      [0, 0, 0, 1, 0],
      [0, 1, 0, 1, 0],
    ];

    expect(reduceToSingleValue(input, 1)).toBe(23);
    expect(reduceToSingleValue(input, 0)).toBe(10);
  });
});
