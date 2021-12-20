import {
  HEADER_SIZE,
  LENGTH_TYPE_ID,
  LENGTH_TYPE_ID_SIZE,
  LENGTH_TYPE_ID_SIZES,
  TYPE_ID,
} from './consts';
import getLengthTypeId from './getLengthTypeId';
import { getGroups } from './getLiteralValue';
import getPacketMeta from './getPacketMeta';
import getTypeId from './getTypeId';
import getVersion from './getVersion';

function getSubpackets(packet: string, i: number): [string, string[]] | null {
  const version = getVersion(packet);
  const lengthTypeId = getLengthTypeId(packet);
  const meta = getPacketMeta(packet);
  const subpackets: string[] = [];

  if (packet.length < HEADER_SIZE + 5) {
    console.log('[getSubpackets] breaking because packet too short');
    return null;
  }

  console.log(i);

  if (i > 10) {
    console.log('[getSubpackets] breaking');
    return null;
  }

  console.log('###############');
  console.log('[getSubpackets] packet', packet);
  console.log('[getSubpackets] version', version);
  console.log('[getSubpackets] lengthTypeId', lengthTypeId);
  console.log('[getSubpackets] meta', meta);
  console.log('###############');

  let j = 0;

  if (lengthTypeId === LENGTH_TYPE_ID.SUB_PACKETS_LENGTH) {
    const start =
      HEADER_SIZE +
      LENGTH_TYPE_ID_SIZE +
      LENGTH_TYPE_ID_SIZES.SUB_PACKETS_LENGTH;
    const end = start + meta;

    let rest = packet.slice(start, end);

    for (let i = 0; i < meta; i++) {
      if (j++ > 10) {
        console.log('Breaking while');
        break;
      }
      const version = getVersion(rest);
      const typeId = getTypeId(rest);
      let subpacket: string;

      console.log('-----------');
      console.log('rest', rest);
      console.log('version', version);
      console.log('typeId', typeId);
      console.log('-----------');

      if (typeId === TYPE_ID.LITERAL_VALUE) {
        const groups = getGroups(rest.slice(HEADER_SIZE));

        console.log('literal groups', groups);

        subpacket = groups.join('');

        const header = rest.slice(0, HEADER_SIZE);

        subpackets.push([header, ...groups].join(''));
        rest = rest.slice(HEADER_SIZE + subpacket.length);
      } else {
        const newSubpackets = getSubpackets(rest, i + 1);
        if (newSubpackets) {
          subpackets.push(...newSubpackets[1]);

          rest = rest.slice(
            HEADER_SIZE +
              newSubpackets[1].reduce((acc, curr) => acc + curr.length, 0)
          );
        }
      }
    }
  } else if (lengthTypeId === LENGTH_TYPE_ID.SUB_PACKETS_COUNT) {
    const start =
      HEADER_SIZE +
      LENGTH_TYPE_ID_SIZE +
      LENGTH_TYPE_ID_SIZES.SUB_PACKETS_COUNT;
    let rest = packet.slice(start);

    for (let i = 0; i < meta; i++) {
      if (j++ > 10) {
        console.log('Breaking while');
        break;
      }
      const typeId = getTypeId(rest);
      const version = getVersion(rest);

      console.log('-----------');
      console.log('rest', rest);
      console.log('version', version);
      console.log('typeId', typeId);

      let subpacket: string;

      if (typeId === TYPE_ID.LITERAL_VALUE) {
        const groups = getGroups(rest.slice(HEADER_SIZE));

        subpacket = groups.join('');

        const header = rest.slice(0, HEADER_SIZE);

        subpackets.push([header, ...groups].join(''));
        rest = rest.slice(HEADER_SIZE + subpacket.length);
      } else {
        const newSubpackets = getSubpackets(rest, i + 1);
        if (newSubpackets) {
          subpackets.push(...newSubpackets[1]);
          rest = rest.slice(
            HEADER_SIZE +
              newSubpackets[1].reduce((acc, curr) => acc + curr.length, 0)
          );
        }
      }

      console.log('subpackets', subpackets);
      console.log('-----------');
    }
  }

  return [packet, subpackets];
}

export default getSubpackets;
