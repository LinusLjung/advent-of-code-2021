import { Line, Point } from './types';

function drawLine(start: number, end: number): number[] {
  const numbers: number[] = [];

  for (let i = Math.min(start, end); i <= Math.max(start, end); i++) {
    numbers.push(i);
  }

  return numbers;
}

function mapPoint(line: Line): Point[] {
  const [{ x: x1, y: y1 }, { x: x2, y: y2 }] = line;

  if (x1 !== x2 && y1 !== y2) {
    return [];
  }

  if (Math.abs(x1 - x2) === 1 || Math.abs(y1 - y2) === 1) {
    return [
      { x: x1, y: y1 },
      { x: x2, y: y2 },
    ];
  }

  if (x1 === x2) {
    return drawLine(y1, y2).map((y) => ({ x: x1, y }));
  }

  return drawLine(x1, x2).map((x) => ({ x, y: y1 }));
}

export default mapPoint;
