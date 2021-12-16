import Cell from './Cell';

function updateNeighbours(cell: Cell, unvisited: Cell[]) {
  cell.neighbours.forEach((neighbour) => {
    if (neighbour.visited) {
      return;
    }

    if (!unvisited.includes(neighbour)) {
      unvisited.push(neighbour);
    }

    const newRiskFromStart = cell.riskFromStart + neighbour.risk;

    if (newRiskFromStart < neighbour.riskFromStart) {
      neighbour.riskFromStart = newRiskFromStart;
      neighbour.previous = cell;
    }
  });
}

export default updateNeighbours;
