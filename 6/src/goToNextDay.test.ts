import goToNextDay from './goToNextDay';

describe('goToNextDay', () => {
  it.each([
    [
      [3, 4, 3, 1, 2],
      [2, 3, 2, 0, 1],
    ],
    [
      [1, 2, 1, 6, 0, 1, 2, 3, 3, 4, 8],
      [0, 1, 0, 5, 6, 0, 1, 2, 2, 3, 7, 8],
    ],
    [
      [0, 1, 0, 5, 6, 0, 1, 2, 2, 3, 0, 1, 2, 2, 2, 3, 3, 4, 4, 5, 7, 8],
      [
        6, 0, 6, 4, 5, 6, 0, 1, 1, 2, 6, 0, 1, 1, 1, 2, 2, 3, 3, 4, 6, 7, 8, 8,
        8, 8,
      ],
    ],
  ])(
    'should reduce the timer of all fish and spawn new fish',
    (input, expected) => {
      expect(goToNextDay(input)).toEqual(expected);
    }
  );
});
