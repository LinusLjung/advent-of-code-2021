import getPaths from './getPaths';

describe('getPaths()', () => {
  it('should return all possible paths from a given starting point', () => {
    const input = `start-A
start-b
A-c
A-b
b-d
A-end
b-end`
      .split('\n')
      .map((line) => line.split('-'));

    expect(getPaths('start', input)).toEqual([
      ['start', 'A'],
      ['start', 'b'],
    ]);
    expect(getPaths('A', input)).toEqual([
      ['A', 'start'],
      ['A', 'c'],
      ['A', 'b'],
      ['A', 'end'],
    ]);
    expect(getPaths('b', input)).toEqual([
      ['b', 'start'],
      ['b', 'A'],
      ['b', 'd'],
      ['b', 'end'],
    ]);
  });
});
