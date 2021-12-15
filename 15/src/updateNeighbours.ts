import Cell from './Cell';

function updateNeighbours(cell: Cell) {
  cell.neighbours.forEach((neighbour) => {
    if (neighbour.visited) {
      return;
    }

    const newRiskFromStart = cell.riskFromStart + neighbour.risk;

    if (newRiskFromStart < neighbour.riskFromStart) {
      neighbour.riskFromStart = newRiskFromStart;
      neighbour.previous = cell;
    }
  });
}

export default updateNeighbours;
