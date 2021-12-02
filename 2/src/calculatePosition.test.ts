import calculatePosition from './calculatePosition';
import Instruction from './Instruction.type';
import Position from './Position.type';

describe('calculatePosition()', () => {
  it('should calculate the position', () => {
    const instructions: Instruction[] = [
      { direction: 'forward', length: 5 },
      { direction: 'down', length: 5 },
      { direction: 'forward', length: 8 },
      { direction: 'up', length: 3 },
      { direction: 'down', length: 8 },
      { direction: 'forward', length: 2 },
    ];

    const expectedPosition: Position = {
      horizontal: 15,
      depth: 10,
    };

    expect(calculatePosition(instructions)).toEqual(expectedPosition);
  });
});
