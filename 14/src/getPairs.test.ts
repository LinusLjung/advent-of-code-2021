import getPairs from './getPairs';

describe('getPairs()', () => {
  it('should return all pairs in a string', () => {
    expect(getPairs('NNCB')).toEqual(['NN', 'NC', 'CB']);
  });
});
