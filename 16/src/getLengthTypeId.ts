import { HEADER_SIZE, LENGTH_TYPE_ID_SIZE } from './consts';

function getLengthTypeId(packet: string): number {
  return parseInt(
    packet.slice(HEADER_SIZE, HEADER_SIZE + LENGTH_TYPE_ID_SIZE),
    2
  );
}

export default getLengthTypeId;
