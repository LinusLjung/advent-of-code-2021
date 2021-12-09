import { POSITIONS } from './consts';

function findNumber(num: number, key: string[]) {
  return key.filter((k) => k.length === POSITIONS[num].length);
}

export default findNumber;
