import { HEADER_SIZE } from './consts';

const GROUP_LENGTH = 5;

function getGroups(data: string): string[] {
  let groups: string[] = [];

  for (let i = 0; i < data.length; i += GROUP_LENGTH) {
    const start = i;
    const end = start + GROUP_LENGTH;

    let group = data.slice(start, end);

    groups.push(group.slice(1));

    if (group[0] === '0') {
      break;
    }
  }

  return groups;
}

function getLiteralValue(bits: string): number {
  const data = bits.slice(HEADER_SIZE);
  const groups = getGroups(data);

  return parseInt(groups.join(''), 2);
}

export default getLiteralValue;
