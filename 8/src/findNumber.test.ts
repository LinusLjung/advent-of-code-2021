import findNumber from './findNumber';

describe('findNumber()', () => {
  it('should find all potential combinations for number', () => {
    const key = [
      'acedgfb',
      'cdfbe',
      'gcdfa',
      'fbcad',
      'dab',
      'cefabd',
      'cdfgeb',
      'eafb',
      'cagedb',
      'ab',
    ];

    expect(findNumber(1, key)).toEqual(['ab']);
    expect(findNumber(8, key)).toEqual(['acedgfb']);
    expect(findNumber(0, key)).toEqual(['cefabd', 'cdfgeb', 'cagedb']);
  });
});
