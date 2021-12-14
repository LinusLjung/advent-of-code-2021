import joinPairs from './joinPairs';

describe('joinPairs()', () => {
  it('should join the pairs without duplicates', () => {
    expect(joinPairs(['NCN', 'NBC', 'CHB'])).toBe('NCNBCHB');
  });
});
