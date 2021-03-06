import drawDots from './drawDots';
import fold from './fold';
import getInput from './getInput';
import parseInput from './parseInput';

const [dots, instructions] = parseInput(getInput());

console.log(`Number of dots: ${fold(dots, instructions[0]).length}`);

console.log(
  drawDots(
    instructions.reduce((acc, curr) => {
      return fold(acc, curr);
    }, dots)
  )
);
