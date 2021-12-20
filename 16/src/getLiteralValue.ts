import { HEADER_SIZE } from './consts';

const GROUP_LENGTH = 5;

export function getGroups(data: string): string[] {
  let groups: string[] = [];

  for (let i = 0; i < data.length; i += GROUP_LENGTH) {
    const start = i;
    const end = start + GROUP_LENGTH;

    let group = data.slice(start, end);

    groups.push(group);

    if (group[0] === '0') {
      break;
    }
  }

  return groups;
}

export function getLiteralBitValue(packet: string) {
  const data = packet.slice(HEADER_SIZE);
  const groups = getGroups(data);

  return groups.map((group) => group.slice(1)).join('');
}

function getLiteralValue(packet: string): number {
  return parseInt(getLiteralBitValue(packet), 2);
}

export default getLiteralValue;
