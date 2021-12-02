import Instruction from './Instruction.type';
import Position from './Position.type';

function calculatePosition(inputs: Instruction[]): Position {
  return inputs.reduce<Position>(
    ({ depth, horizontal, aim }, { direction, length }) => {
      switch (direction) {
        case 'forward':
          return {
            horizontal: horizontal + length,
            depth: depth + length * aim,
            aim,
          };

        case 'down':
          return {
            horizontal,
            depth,
            aim: aim + length,
          };

        case 'up':
          return {
            horizontal,
            depth,
            aim: aim - length,
          };
      }

      return { depth, horizontal, aim };
    },
    {
      horizontal: 0,
      depth: 0,
      aim: 0,
    }
  );
}

export default calculatePosition;
