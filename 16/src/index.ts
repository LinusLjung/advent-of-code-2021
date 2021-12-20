import getBinaryFromHex from './getBinaryFromHex';
import getInput from './getInput';
import getPackets from './getPackets';
import util from 'util';

const input = getInput();
const packet = getBinaryFromHex(input);
// const version = getVersion(packet);
// const typeId = getTypeId(packet);
// const lengthTypeId = getLengthTypeId(packet);

console.log(`Input: ${input}`);
// console.log(`Version: ${version}`);
// console.log(`Type ID: ${typeId}`);
// console.log(`Length type ID: ${lengthTypeId}`);
console.log(
  'Packets:',
  util.inspect(getPackets({ originalPacket: packet, packet }), {
    depth: 10,
    colors: true,
  })
);
