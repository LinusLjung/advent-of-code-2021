import Instruction from './Instruction.type';
import parseInput from './parseInput';

describe('parseInput()', () => {
  it('should return an array of instructions based on input', () => {
    const data = `
      forward 5
      down 5
      forward 8
      up 3
      down 8  
      forward 2
    `;

    const expected: Instruction[] = [
      { direction: 'forward', length: 5 },
      { direction: 'down', length: 5 },
      { direction: 'forward', length: 8 },
      { direction: 'up', length: 3 },
      { direction: 'down', length: 8 },
      { direction: 'forward', length: 2 },
    ];

    expect(parseInput(data)).toEqual(expected);
  });
});
