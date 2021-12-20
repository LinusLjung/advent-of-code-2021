import getLiteralValue, { getGroups } from './getLiteralValue';

describe('getLiteralValue()', () => {
  it('should parse the packet and return the value', () => {
    expect(getLiteralValue('110100101111111000101000')).toBe(2021);
  });
});

describe('getGroups()', () => {
  it.each([
    ['101111111000101000', ['10111', '11110', '00101']],
    ['001111111000101000', ['00111']],
    ['0101010110001011001000100000000010000100011000111000110100', ['01010']],
  ])('should return all groups of a literal value', (input, expected) => {
    expect(getGroups(input)).toEqual(expected);
  });
});
