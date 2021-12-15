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

    expect(runPairInsertions(input, 1)).toEqual({ B: 2, C: 2, H: 1, N: 2 });
    expect(runPairInsertions(input, 2)).toEqual({ N: 2, B: 6, C: 4, H: 1 });
    expect(runPairInsertions(input, 3)).toEqual({ N: 5, B: 11, C: 5, H: 4 });
  });
});
