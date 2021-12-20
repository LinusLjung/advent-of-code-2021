import { HEADER_SIZE, LENGTH_TYPE_ID, LENGTH_TYPE_ID_SIZE } from './consts';
import { Packet } from './types';

function getLengthTypeId(packet: Packet): LENGTH_TYPE_ID {
  return parseInt(
    packet.packet.slice(HEADER_SIZE, HEADER_SIZE + LENGTH_TYPE_ID_SIZE),
    2
  );
}

export default getLengthTypeId;
