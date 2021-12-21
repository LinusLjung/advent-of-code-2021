import { Packet } from './types';

function flattenPackets(packet: Packet): Packet[] {
  if (!packet.subpackets?.length) {
    return [packet];
  }

  return [
    packet,
    ...packet.subpackets.reduce<Packet[]>(
      (acc, curr) => [...acc, ...flattenPackets(curr)],
      []
    ),
  ];
}

export default flattenPackets;
