import { TYPE_ID } from './consts';
import getLengthTypeId from './getLengthTypeId';
import getVersion from './getVersion';

function getPackets(packet: string): string[] {
  const version = getVersion(packet);
  const typeId = getVersion(packet);

  if (typeId === TYPE_ID.LITERAL_VALUE) {
    return [packet];
  }

  const lengthTypeId = getLengthTypeId(packet);

  return [];
}

export default getPackets;
