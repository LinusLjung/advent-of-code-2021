import runPairInsertions from './runPairInsertions';

describe('runPairInsertions()', () => {
  it('should run the pair insertions', () => {
    const input = `NNCB

CH -> B
HH -> N
CB -> H
NH -> C
HB -> C
HC -> B
HN -> C
NN -> C
BH -> H
NC -> B
NB -> B
BN -> B
BB -> N
BC -> B
CC -> N
CN -> C`;

    expect(runPairInsertions(input, 1)).toBe('NCNBCHB');
    expect(runPairInsertions(input, 2)).toBe('NBCCNBBBCBHCB');
    expect(runPairInsertions(input, 3)).toBe('NBBBCNCCNBBNBNBBCHBHHBCHB');
    expect(runPairInsertions(input, 4)).toBe(
      'NBBNBNBBCCNBCNCCNBBNBBNBBBNBBNBBCBHCBHHNHCBBCBHCB'
    );
  });
});
