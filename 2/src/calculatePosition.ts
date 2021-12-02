import Instruction from './Instruction.type';
import Position from './Position.type';

function calculatePosition(inputs: Instruction[]): Position {
  return inputs.reduce<Position>(
    ({ depth, horizontal }, { direction, length }) => {
      switch (direction) {
        case 'forward':
          return {
            horizontal: horizontal + length,
            depth,
          };

        case 'down':
          return {
            horizontal,
            depth: depth + length,
          };

        case 'up':
          return {
            horizontal,
            depth: depth - length,
          };
      }

      return { depth, horizontal };
    },
    {
      horizontal: 0,
      depth: 0,
    }
  );
}

export default calculatePosition;
