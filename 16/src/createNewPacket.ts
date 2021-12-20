import { Packet } from './types';

function createNewPacket(packet: string): Packet {
  return {
    originalPacket: packet,
    packet,
  };
}

export default createNewPacket;
