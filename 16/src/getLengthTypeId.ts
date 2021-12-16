import { HEADER_SIZE } from './consts';

function getLengthTypeId(packet: string): number {
  return Number(packet[HEADER_SIZE]);
}

export default getLengthTypeId;
