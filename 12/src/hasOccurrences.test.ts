import hasOccurrences from './hasOccurrences';

describe('hasOccurrences()', () => {
  it.each([
    ['a', ['a'], 1, true],
    ['a', ['a'], 2, false],
    ['b', ['a'], 1, false],
    ['b', ['a', 'b', 'c', 'a'], 1, true],
    ['a', ['a', 'b', 'c', 'a'], 2, true],
    ['a', ['a', 'b', 'c', 'a'], 3, false],
  ])(
    'should check if the array has at least x number of occurrences',
    (input, arr, occurrences, expected) => {
      expect(hasOccurrences(input, arr, occurrences)).toBe(expected);
    }
  );
});
