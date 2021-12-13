import getBoundary from './getBoundary';
import parseDots from './parseDots';

describe('getBoundary()', () => {
  it('should return the highest x and y positions', () => {
    let input = `4,3
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

    expect(getBoundary(parseDots(input))).toEqual([4, 4]);

    input = `6,10
0,14
9,10
0,3
10,4
4,11
6,0
6,12
4,1
0,13
10,12
3,4
3,0
8,4
1,10
2,14
8,10
9,0`;

    expect(getBoundary(parseDots(input))).toEqual([10, 14]);
  });
});
