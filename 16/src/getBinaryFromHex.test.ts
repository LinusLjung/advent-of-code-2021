import getBinaryFromHex from './getBinaryFromHex';

describe('getBinaryFromHex()', () => {
  it.each([
    [
      '0123456789ABCDEF',
      '0000000100100011010001010110011110001001101010111100110111101111',
    ],
    ['D2FE28', '110100101111111000101000'],
  ])(
    'should convert each hex character to a 4-bit binary',
    (input, expected) => {
      expect(getBinaryFromHex(input)).toBe(expected);
    }
  );
});
