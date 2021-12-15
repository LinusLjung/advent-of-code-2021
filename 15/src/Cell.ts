class Cell {
  visited = false;
  neighbours: Cell[] = [];
  risk = Infinity;
  riskFromStart = Infinity;
  previous: Cell | null = null;
  x: number;
  y: number;

  constructor(risk: number, x: number, y: number) {
    this.risk = risk;
    this.x = x;
    this.y = y;
  }
}

export default Cell;
