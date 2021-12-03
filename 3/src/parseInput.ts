import splitOnNewline from '../../shared/splitOnNewline';
import { Data } from './types';

function parseInput(input: string): Data {
  const rows = splitOnNewline(input).map((bits) =>
    bits.split('').map((bit) => Number(bit))
  );

  return rows;
}

export default parseInput;
