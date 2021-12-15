import Cell from './Cell';

function createCells(input: string): Cell[] {
  const grid = input.split('\n').map((line) => line.split('').map(Number));
  const cells = grid.map((row, y) =>
    row.map((risk, x) => new Cell(risk, x, y))
  );

  cells.forEach((row, i) => {
    row.forEach((cell, j) => {
      cell.neighbours = [
        cells[i - 1]?.[j],
        row[j - 1],
        row[j + 1],
        cells[i + 1]?.[j],
      ].filter((cell) => cell);
    });
  });

  return cells.reduce<Cell[]>((cells, row) => {
    return [...cells, ...row];
  }, []);
}

export default createCells;
