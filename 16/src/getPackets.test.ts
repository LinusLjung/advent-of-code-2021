import getBinaryFromHex from './getBinaryFromHex';
import getPackets from './getPackets';

describe('getPackets()', () => {
  it('should handle length type 0', () => {
    expect(getPackets(getBinaryFromHex('38006F45291200'))).toEqual([
      '11010001010',
      '0101001000100100',
    ]);
  });

  it('should handle length type 1', () => {
    expect(getPackets(getBinaryFromHex('EE00D40C823060'))).toEqual([
      '01010000001',
      '10010000010',
      '00110000011',
    ]);
  });
});
