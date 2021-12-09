import decodeNumbers from './decodeNumbers';

describe('decodeNumbers', () => {
  it('should deduce the code based on the input', () => {
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
    const code = ['cdfeb', 'fcadb', 'cdfeb', 'cdbaf'];

    expect(decodeNumbers(key, code)).toBe(5353);
  });
});
