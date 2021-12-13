import { Direction, Instruction } from './types';

function parseInstructions(instructions: string): Instruction[] {
  return instructions.split('\n').map((line) => {
    const [x, y] = line.split(' ').at(-1)!.split('=');

    return [x as Direction, Number(y)];
  });
}

export default parseInstructions;
