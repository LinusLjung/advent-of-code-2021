import goToNextDay from './goToNextDay';
import { FishCount } from './types';

describe('goToNextDay', () => {
  it.each([
    [
      { 3: 1, 4: 1, 1: 1, 2: 1 },
      { 2: 1, 3: 1, 0: 1, 1: 1 },
    ],
    [
      { 0: 2, 1: 1, 7: 3, 8: 1 },
      { 0: 1, 6: 5, 7: 1, 8: 2 },
    ],
  ])(
    'should reduce the timer of all fish and spawn new fish',
    (input: FishCount, expected: FishCount) => {
      expect(goToNextDay(input)).toEqual(expected);
    }
  );
});
