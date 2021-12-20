import {
  HEADER_SIZE,
  LENGTH_TYPE_ID,
  LENGTH_TYPE_ID_SIZE,
  LENGTH_TYPE_ID_SIZES,
  TYPE_ID,
} from './consts';
import getLengthTypeId from './getLengthTypeId';
import { getGroups } from './getLiteralValue';
import getPacketMeta from './getPacketMeta';
import getTypeId from './getTypeId';
import getVersion from './getVersion';

let prevPacket: string;

function getPackets(packet: string): string[] {
  console.log('[getPackets] packet', packet);
  console.log('[getPackets] version', getVersion(packet));

  if (packet === prevPacket) {
    console.log(
      '[getPackets] Exiting because of identical prev and curr packet'
    );
    process.exit(1);
  }

  prevPacket = packet;

  const typeId = getTypeId(packet);
  console.log('[getPackets] typeId', typeId);

  if (typeId === TYPE_ID.LITERAL_VALUE) {
    const header = packet.slice(0, HEADER_SIZE);

    return [header + getGroups(packet.slice(HEADER_SIZE)).join('')];
  }

  const lengthTypeId = getLengthTypeId(packet);
  console.log('[getPackets] lengthTypeId', lengthTypeId);

  const meta = getPacketMeta(packet);
  console.log('[getPackets] meta', meta);

  const packets: string[] = [];

  function doLoop(restPacket: string) {
    const newPackets = getPackets(restPacket);

    console.log('[doLoop] newPackets', newPackets);

    packets.push(...newPackets);

    return restPacket.slice(
      newPackets.reduce((acc, curr) => acc + curr.length, 0)
    );
  }

  if (lengthTypeId === LENGTH_TYPE_ID.SUB_PACKETS_LENGTH) {
    const start =
      HEADER_SIZE +
      LENGTH_TYPE_ID_SIZE +
      LENGTH_TYPE_ID_SIZES.SUB_PACKETS_LENGTH;
    const end = start + meta;

    let restPacket = packet.slice(start, end);

    while (restPacket.length || parseInt(restPacket, 2)) {
      restPacket = doLoop(restPacket);
    }
  }

  if (lengthTypeId === LENGTH_TYPE_ID.SUB_PACKETS_COUNT) {
    const start =
      HEADER_SIZE +
      LENGTH_TYPE_ID_SIZE +
      LENGTH_TYPE_ID_SIZES.SUB_PACKETS_COUNT;

    let restPacket = packet.slice(start);

    for (let i = 0; i < meta; i++) {
      restPacket = doLoop(restPacket);
    }
  }

  console.log('--------------');

  return packets;
}

export default getPackets;
