import { Packet } from './types';

function getVersion(packet: Packet): number {
  return parseInt(packet.packet.substring(0, 3), 2);
}

export default getVersion;
