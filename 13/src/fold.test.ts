import fold from './fold';
import parseDots from './parseDots';

describe('fold()', () => {
  it('should fold x and y', () => {
    const input = `6,10
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

    let expected = parseDots(`6,4
0,0
9,4
0,3
10,4
4,3
6,0
6,2
4,1
0,1
10,2
3,4
3,0
8,4
1,4
2,0
9,0`);

    let output = fold(parseDots(input), ['y', 7]);

    expect(output).toEqual(expect.arrayContaining(expected));
    expect(output.length).toBe(expected.length);

    expected = parseDots(`4,3
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
4,4`);

    output = fold(output, ['x', 5]);

    expect(output).toEqual(expect.arrayContaining(expected));
    expect(output.length).toBe(expected.length);
  });
});
