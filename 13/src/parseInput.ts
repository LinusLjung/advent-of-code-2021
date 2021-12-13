import parseDots from './parseDots';
import parseInstructions from './parseInstructions';
import { Dot, Instruction } from './types';

function parseInput(input: string): [Dot[], Instruction[]] {
  const [dots, instructions] = input.split('\n\n');

  return [parseDots(dots), parseInstructions(instructions)];
}

export default parseInput;
