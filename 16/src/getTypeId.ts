import { TYPE_ID } from './consts';

function getTypeId(packet: string): TYPE_ID {
  return parseInt(packet.substring(3, 6), 2);
}

export default getTypeId;
