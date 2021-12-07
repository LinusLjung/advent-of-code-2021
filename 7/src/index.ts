import calculateMostEfficientMoves from './calculateMostEfficientMoves';
import getInput from './getInput';

const input = getInput().split(',').map(Number);

console.log(calculateMostEfficientMoves(input));
