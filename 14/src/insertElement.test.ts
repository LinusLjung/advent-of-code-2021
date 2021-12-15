import insertElement from './insertElement';

describe('insertElement()', () => {
  it('should insert an element in a pair', () => {
    expect(
      insertElement(
        'NN',
        'C',
        { NN: 1, NC: 1, CB: 1 },
        { NN: 1, NC: 2, CB: 1 },
        { N: 2, C: 2, B: 1 }
      )
    ).toEqual([
      { NN: 0, NC: 3, CB: 1, CN: 1 },
      { N: 2, C: 3, B: 1 },
    ]);

    expect(
      insertElement(
        'NN',
        'C',
        { NN: 2, NC: 1, CB: 1 },
        { NN: 2, NC: 0, CB: 1 },
        { N: 2, C: 1, B: 1 }
      )
    ).toEqual([
      { NN: 0, NC: 2, CB: 1, CN: 2 },
      { N: 2, C: 3, B: 1 },
    ]);
  });
});
