import createNewPacket from './createNewPacket';
import flattenPackets from './flattenPackets';

describe('flattenPackets()', () => {
  it('should return a flattened array of the packet hierarchy', () => {
    let packets = [...Array(7)].map((_, i) => createNewPacket(i.toString()));

    packets[4].subpackets = [packets[5], packets[6]];
    packets[3].subpackets = [packets[4]];
    packets[0].subpackets = [packets[3], packets[2]];

    expect(flattenPackets(packets[0])).toEqual(packets);
  });
});
