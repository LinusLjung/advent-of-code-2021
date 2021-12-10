import calculateAutocompleteScore from './calculateAutocompleteScore';

describe('calculateAutocompleteScore()', () => {
  it.each([
    ['}}]])})]', 288957],
    [')}>]})', 5566],
    ['}}>}>))))', 1480781],
    [']]}}]}]}>', 995444],
    ['])}>', 294],
  ])(
    'should return the score of the autocompleted characters',
    (input, expected) => {
      expect(calculateAutocompleteScore(input)).toBe(expected);
    }
  );
});
