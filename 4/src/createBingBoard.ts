import { BingoBoard, BingoCell } from './types';

function createBingoBoard(grid: number[][]): BingoBoard {
  return grid.map((row) =>
    row.map<BingoCell>((cell) => ({
      marked: false,
      value: cell,
    }))
  );
}

export default createBingoBoard;
