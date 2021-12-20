import {
  HEADER_SIZE,
  LENGTH_TYPE_ID,
  LENGTH_TYPE_ID_SIZE,
  LENGTH_TYPE_ID_SIZES,
  TYPE_ID,
} from './consts';
import createNewPacket from './createNewPacket';
import getLengthTypeId from './getLengthTypeId';
import { getGroups } from './getLiteralValue';
import getPacketMeta from './getPacketMeta';
import getTypeId from './getTypeId';
import getVersion from './getVersion';
import { Packet } from './types';
import util from 'util';

let prevPacket: string;

function getPackets(packet: Packet): Packet {
  console.log(
    '[getPackets] packet',
    util.inspect(packet, { depth: 10, colors: true })
  );
  console.log('[getPackets] version', getVersion(packet));

  if (packet.packet === prevPacket) {
    console.log(
      '[getPackets] Exiting because of identical prev and curr packet'
    );
    process.exit(1);
  }

  prevPacket = packet.packet;

  const typeId = getTypeId(packet);
  console.log('[getPackets] typeId', typeId);

  if (typeId === TYPE_ID.LITERAL_VALUE) {
    const header = packet.packet.slice(0, HEADER_SIZE);
    const newPacket =
      header + getGroups(packet.packet.slice(HEADER_SIZE)).join('');

    return createNewPacket(newPacket);
  }

  const lengthTypeId = getLengthTypeId(packet);
  console.log('[getPackets] lengthTypeId', lengthTypeId);

  const meta = getPacketMeta(packet);
  console.log('[getPackets] meta', meta);

  // const packets: Packet[] = [];

  function doLoop(restPacket: Packet): Packet {
    const newPackets = getPackets(restPacket);

    // console.log('[doLoop] newPackets', newPackets);

    return {
      ...restPacket,
      packet: restPacket.packet.slice(newPackets.originalPacket.length),
      subpackets: [...(restPacket.subpackets || []), newPackets],
    };
    // return {
    //   ...restPacket,
    //   rest: restPacket.rest.slice(
    //     newPackets.reduce((acc, curr) => acc + curr.packet.length, 0)
    //   ),
    //   subpackets: [...(restPacket.subpackets || []), ...newPackets],
    // };

    // return {
    //   packet: restPacket.packet.slice(
    //     newPackets.reduce((acc, curr) => acc + curr.packet.length, 0)
    //   ),
    // };
  }

  if (lengthTypeId === LENGTH_TYPE_ID.SUB_PACKETS_LENGTH) {
    const start =
      HEADER_SIZE +
      LENGTH_TYPE_ID_SIZE +
      LENGTH_TYPE_ID_SIZES.SUB_PACKETS_LENGTH;
    const end = start + meta;
    const newPacket = packet.packet.slice(start, end);

    let restPacket: Packet = {
      originalPacket: packet.packet,
      packet: newPacket,
    };

    while (restPacket.packet.length || parseInt(restPacket.packet, 2)) {
      restPacket = doLoop(restPacket);
    }

    return restPacket;
  }

  if (lengthTypeId === LENGTH_TYPE_ID.SUB_PACKETS_COUNT) {
    const start =
      HEADER_SIZE +
      LENGTH_TYPE_ID_SIZE +
      LENGTH_TYPE_ID_SIZES.SUB_PACKETS_COUNT;
    const newPacket = packet.packet.slice(start);

    let restPacket: Packet = createNewPacket(newPacket);

    for (let i = 0; i < meta; i++) {
      restPacket = doLoop(restPacket);
    }

    return restPacket;
  }

  console.log('--------------');

  console.log('Exiting because of unhandled case');
  process.exit(2);
}

export default getPackets;
