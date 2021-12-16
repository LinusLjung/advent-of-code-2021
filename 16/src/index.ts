import getBinaryFromHex from './getBinaryFromHex';
import getInput from './getInput';
import getLengthTypeId from './getLengthTypeId';
import getPackets from './getPackets';
import getTypeId from './getTypeId';
import getVersion from './getVersion';

const input = getInput();
const packet = getBinaryFromHex(input);
const version = getVersion(packet);
const typeId = getTypeId(packet);
const lengthTypeId = getLengthTypeId(packet);

console.log(`Input: ${input}`);
console.log(`Version: ${version}`);
console.log(`Type ID: ${typeId}`);
console.log(`Length type ID: ${lengthTypeId}`);
console.log('Packets:', getPackets(packet));
