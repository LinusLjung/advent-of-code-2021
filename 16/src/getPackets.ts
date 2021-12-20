import { TYPE_ID } from './consts';
import getSubpackets from './getSubpackets';
import getTypeId from './getTypeId';

function getPackets(binaryPacket: string): any {
  const typeId = getTypeId(binaryPacket);

  if (typeId === TYPE_ID.LITERAL_VALUE) {
    return [binaryPacket];
  }

  return getSubpackets(binaryPacket, 0);
}

export default getPackets;
