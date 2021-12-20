import getBinaryFromHex from './getBinaryFromHex';
import getPackets from './getPackets';

describe('getPackets()', () => {
  it.each([
    [getBinaryFromHex('38006F45291200'), ['11010001010', '0101001000100100']],
  ])('should handle length type 0', (input, expected) => {
    expect(getPackets({ originalPacket: input, packet: input })).toEqual(
      expected.map((packet) => ({ packet, rest: packet }))
    );
  });

  it.each([
    [
      getBinaryFromHex('EE00D40C823060'),
      ['01010000001', '10010000010', '00110000011'],
    ],
  ])('should handle length type 1', (input, expected) => {
    expect(getPackets({ originalPacket: input, packet: input })).toEqual(
      expected.map((packet) => ({ packet, rest: packet }))
    );
  });
});
