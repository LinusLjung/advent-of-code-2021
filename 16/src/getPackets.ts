import { HEADER_SIZE, LENGTH_TYPE_ID, TYPE_ID } from './consts';
import createNewPacket from './createNewPacket';
import getInclusiveHeader from './getInclusiveHeader';
import getLengthTypeId from './getLengthTypeId';
import { getGroups } from './getLiteralValue';
import getPacketMeta from './getPacketMeta';
import getTypeId from './getTypeId';
import { Packet } from './types';

let prevPacket: string;

function getPackets(packet: Packet): Packet {
  if (packet.packet === prevPacket) {
    console.log(
      '[getPackets] Exiting because of identical prev and curr packet'
    );
    process.exit(1);
  }

  prevPacket = packet.packet;

  const typeId = getTypeId(packet);

  if (typeId === TYPE_ID.LITERAL_VALUE) {
    const header = packet.packet.slice(0, HEADER_SIZE);
    const newPacket =
      header + getGroups(packet.packet.slice(HEADER_SIZE)).join('');

    return createNewPacket(newPacket);
  }

  const lengthTypeId = getLengthTypeId(packet);
  const meta = getPacketMeta(packet);

  function doLoop(restPacket: Packet): Packet {
    const newPackets = getPackets({ ...restPacket });

    function getLength(packet: Packet): number {
      if (getTypeId(packet) === 4) {
        return packet.originalPacket.length;
      }

      return (
        getInclusiveHeader({ ...newPackets, packet: newPackets.originalPacket })
          .length +
        packet.subpackets!.reduce(
          (acc, curr) => acc + curr.originalPacket.length,
          0
        )
      );
    }

    return {
      ...restPacket,
      packet: restPacket.packet.slice(getLength(newPackets)),
      subpackets: [...(restPacket.subpackets || []), newPackets],
    };
  }

  if (lengthTypeId === LENGTH_TYPE_ID.SUB_PACKETS_LENGTH) {
    const header = getInclusiveHeader(packet);
    const start = header.length;
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
    const header = getInclusiveHeader(packet);
    const start = header.length;
    const newPacket = packet.packet.slice(start);

    let restPacket: Packet = {
      originalPacket: packet.packet,
      packet: newPacket,
    };

    for (let i = 0; i < meta; i++) {
      restPacket = doLoop(restPacket);
    }

    return restPacket;
  }

  console.log(`Exiting because of unhandled case. Packet: ${packet.packet}`);
  process.exit(2);
}

export default getPackets;
