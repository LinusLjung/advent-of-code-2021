import drawDots from './drawDots';
import parseDots from './parseDots';

describe('drawDots()', () => {
  it('should draw a map of all dots', () => {
    const input = `4,3
0,0
1,4
0,3
0,4
4,0
4,2
4,1
0,1
0,2
3,4
3,0
2,4
2,0
1,0,
4,4`;

    const expected = `#####
#...#
#...#
#...#
#####`;

    expect(drawDots(parseDots(input))).toBe(expected);
  });
});
