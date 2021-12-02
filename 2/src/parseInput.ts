import Direction from './Direction.type';
import Instruction from './Instruction.type';

function parseInput(input: string): Instruction[] {
  return input
    .split('\n')
    .map((input) => input.trim())
    .filter((input) => input)
    .map((input) => {
      const [direction, length] = input.split(' ');

      return {
        direction: direction as Direction,
        length: Number(length),
      };
    });
}

export default parseInput;
