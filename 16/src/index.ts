import getBinaryFromHex from './getBinaryFromHex';
import getInput from './getInput';
import getPackets from './getPackets';
import util from 'util';
import createNewPacket from './createNewPacket';
import flattenPackets from './flattenPackets';
import getVersion from './getVersion';

const input = getInput();
const packet = getBinaryFromHex(input);

console.log(`Input: ${input}`);

const packets = getPackets(createNewPacket(packet));

console.log(
  'Packets:',
  util.inspect(packets, {
    depth: 10,
    colors: true,
  })
);

console.log(
  'Flattened:',
  flattenPackets(packets).map((packet) => packet.originalPacket)
);

// 43
console.log(
  'Sum of versions:',
  flattenPackets(packets)
    .map((packet) => packet.originalPacket)
    .reduce((acc, curr) => acc + getVersion(createNewPacket(curr)), 0)
);
