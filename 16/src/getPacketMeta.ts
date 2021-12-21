import { HEADER_SIZE, LENGTH_TYPE_ID, LENGTH_TYPE_ID_SIZE } from './consts';
import getLengthTypeId from './getLengthTypeId';
import { Packet } from './types';

function getPacketMeta(packet: Packet): number {
  const lengthTypeId = getLengthTypeId(packet);
  const start = HEADER_SIZE + LENGTH_TYPE_ID_SIZE;

  if (lengthTypeId === LENGTH_TYPE_ID.SUB_PACKETS_LENGTH) {
    return parseInt(packet.packet.slice(start, start + 15), 2);
  }

  if (lengthTypeId === LENGTH_TYPE_ID.SUB_PACKETS_COUNT) {
    return parseInt(packet.packet.slice(start, start + 11), 2);
  }

  return 0;
}

export default getPacketMeta;