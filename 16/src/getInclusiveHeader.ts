import {
  HEADER_SIZE,
  LENGTH_TYPE_ID,
  LENGTH_TYPE_ID_SIZE,
  LENGTH_TYPE_ID_SIZES,
  TYPE_ID,
} from './consts';
import getLengthTypeId from './getLengthTypeId';
import getTypeId from './getTypeId';
import { Packet } from './types';

function isBinary(string: string): boolean {
  return !string.split('').some((char) => char !== '0' && char !== '1');
}

function getInclusiveHeader(packet: Packet): string {
  const typeId = getTypeId(packet);

  if (!isBinary(packet.packet)) {
    throw new Error(`Packet is not binary: ${packet.packet}`);
  }

  if (isNaN(typeId) || packet.packet.length < HEADER_SIZE) {
    throw new Error(`Packet does not have a valid header: ${packet.packet}`);
  }

  if (typeId === TYPE_ID.LITERAL_VALUE) {
    return packet.packet.slice(0, HEADER_SIZE);
  }

  const lengthTypeId = getLengthTypeId(packet);

  return packet.packet.slice(
    0,
    HEADER_SIZE +
      LENGTH_TYPE_ID_SIZE +
      (lengthTypeId === LENGTH_TYPE_ID.SUB_PACKETS_COUNT
        ? LENGTH_TYPE_ID_SIZES.SUB_PACKETS_COUNT
        : LENGTH_TYPE_ID_SIZES.SUB_PACKETS_LENGTH)
  );
}

export default getInclusiveHeader;
