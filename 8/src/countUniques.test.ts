import countUniques from './countUniques';

describe('countUniques', () => {
  it.each([
    [['fdgacbe', 'cefdb', 'cefbgd', 'gcbe'], 2],
    [['fcgedb', 'cgb', 'dgebacf', 'gc'], 3],
    [['cg', 'cg', 'fdcagb', 'cbg'], 3],
    [['efabcd', 'cedba', 'gadfec', 'cb'], 1],
  ])(
    'should count the occurrences combinations with unique lengths',
    (input, expected) => {
      expect(countUniques(input)).toBe(expected);
    }
  );
});
