import eol from 'eol';
import getInput from '../../shared/getInput';
import calculateScore from './calculateScore';
import createBingoBoard from './createBingBoard';
import getNumbers from './getNumbers';
import hasWinner, { checkBoard } from './hasWinner';
import markBoard from './markBoard';
import textGridToArray from './textGridToArray';
import { BingoBoard } from './types';

const input = getInput();

const parsedInput = eol.lf(input).split('\n\n');

let boards = parsedInput.slice(1).map(textGridToArray).map(createBingoBoard);
const numbers = getNumbers(parsedInput[0]);

let boardsWithBingo: { board: BingoBoard; winningNumber: number }[] = [];

for (let i = 0; i < numbers.length && boards.length > 0; i++) {
  const drawnNumber = numbers[i];

  boards = boards.map((board) => markBoard(board, drawnNumber));

  const winners = boards.filter(checkBoard);

  if (winners.length) {
    boardsWithBingo = boardsWithBingo.concat(
      winners.map((board) => ({ board, winningNumber: drawnNumber }))
    );

    // Remove winners from boards in play
    winners.forEach((winner) => {
      const i = boards.findIndex((board) => board === winner);

      boards = [...boards.slice(0, i), ...boards.slice(i + 1)];
    });
  }
}

const winner = boardsWithBingo[0];

if (!winner) {
  console.log('No winning board');
  process.exit(0);
}

const lastWinner = boardsWithBingo.at(-1)!;

const winningBoardScore = calculateScore(winner.board);
const lastWinnerBoardScore = calculateScore(lastWinner.board);

console.log(`Winning board score: ${winningBoardScore * winner.winningNumber}`);
console.log(
  `Last winning board score: ${lastWinnerBoardScore * lastWinner.winningNumber}`
);
