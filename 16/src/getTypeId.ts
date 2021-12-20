import { TYPE_ID } from './consts';
import { Packet } from './types';

function getTypeId(packet: Packet): TYPE_ID {
  return parseInt(packet.packet.substring(3, 6), 2);
}

export default getTypeId;
