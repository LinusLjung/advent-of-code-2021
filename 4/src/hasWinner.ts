import invertArrays from './invertArrays';
import { BingoBoard, BingoRow } from './types';

function checkRows(board: BingoBoard) {
  return board.some(
    (row) => row.filter(({ marked }) => marked).length === row.length
  );
}

export function checkBoard(board: BingoBoard) {
  const hasBingo = checkRows(board);

  if (hasBingo) {
    return hasBingo;
  }

  return checkRows(invertArrays(board));
}

function hasWinner(boards: BingoBoard[]) {
  return boards.some(checkBoard);
}

export default hasWinner;
