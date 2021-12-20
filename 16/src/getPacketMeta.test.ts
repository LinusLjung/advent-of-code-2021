import createNewPacket from './createNewPacket';
import getPacketMeta from './getPacketMeta';

describe('getPacketMeta()', () => {
  it.each([
    ['00111000000000000110111101000101001010010001001000000000', 27],
    ['11101110000000001101010000001100100000100011000001100000', 3],
  ])(
    'should return the meta bits based on the length type ID',
    (input, expected) => {
      expect(getPacketMeta(createNewPacket(input))).toBe(expected);
    }
  );
});
