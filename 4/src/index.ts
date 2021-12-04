import eol from 'eol';
import getInput from '../../shared/getInput';
import calculateScore from './calculateScore';
import createBingoBoard from './createBingBoard';
import getNumbers from './getNumbers';
import hasWinner, { checkBoard } from './hasWinner';
import markBoard from './markBoard';
import textGridToArray from './textGridToArray';

const input = getInput();

const parsedInput = eol.lf(input).split('\n\n');

let boards = parsedInput.slice(1).map(textGridToArray).map(createBingoBoard);
const numbers = getNumbers(parsedInput[0]);

let i = 0;

for (; i < numbers.length && !hasWinner(boards); i++) {
  const drawnNumber = numbers[i];

  boards = boards.map((board) => markBoard(board, drawnNumber));
}

const winner = boards.find(checkBoard);

if (!winner) {
  console.log('No winning board');
  process.exit(0);
}

const boardScore = calculateScore(winner);

console.log(`Winning board score: ${boardScore * numbers[i - 1]}`);
