import createNewPacket from './createNewPacket';
import getInclusiveHeader from './getInclusiveHeader';

describe('getInclusiveHeader()', () => {
  it.each([
    ['00010001010', '000100'],
    [
      '00000000000000000101100001000101010110001011001000100000000010000100011000111000110100',
      '0000000000000000010110',
    ],
    [
      '01100010000000001000000000000000000101100001000101010110001011001000100000000010000100011000111000110100',
      '011000100000000010',
    ],
  ])('should return the packet header and its meta data', (input, expected) => {
    expect(getInclusiveHeader(createNewPacket(input))).toBe(expected);
  });

  it.each([['00101200100101'], ['00110']])(
    'should throw if the header is invalid',
    (input) => {
      expect(() => getInclusiveHeader(createNewPacket(input))).toThrow();
    }
  );
});
