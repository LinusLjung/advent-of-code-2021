import { checkBoard } from './hasWinner';
import { BingoBoard } from './types';

function calculateScore(board: BingoBoard) {
  if (!checkBoard(board)) {
    return 0;
  }

  return board.reduce(
    (score, row) =>
      score +
      row.reduce((score, cell) => score + (cell.marked ? 0 : cell.value), 0),
    0
  );
}

export default calculateScore;
