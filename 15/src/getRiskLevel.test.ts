import getRiskLevel from './getRiskLevel';

describe('getRiskLevel()', () => {
  it('should find the safest path', () => {
    expect(
      getRiskLevel(`1163751742
1381373672
2136511328
3694931569
7463417111
1319128137
1359912421
3125421639
1293138521
2311944581`)
    ).toBe(40);
  });
});
