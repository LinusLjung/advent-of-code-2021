import { Line, Point } from './types';

export function drawLine(start: number, end: number): number[] {
  const numbers: number[] = [];

  for (let i = Math.min(start, end); i <= Math.max(start, end); i++) {
    numbers.push(i);
  }

  return end < start ? numbers.reverse() : numbers;
}

function extendArray<T>(arr: T[], length: number): T[] {
  const newArr = [...arr];

  while (newArr.length < length) {
    newArr.push(newArr[0]);
  }

  return newArr;
}

export function matchArrayLength<T>(arr1: T[], arr2: T[]): T[][] {
  if (arr1.length === arr2.length) {
    return [arr1, arr2];
  }

  if (arr1.length > arr2.length) {
    return [arr1, extendArray(arr2, arr1.length)];
  }

  return [extendArray(arr1, arr2.length), arr2];
}

function mapPoint(line: Line): Point[] {
  const [{ x: x1, y: y1 }, { x: x2, y: y2 }] = line;

  if (Math.abs(x1 - x2) === 1 || Math.abs(y1 - y2) === 1) {
    return [
      { x: x1, y: y1 },
      { x: x2, y: y2 },
    ];
  }

  const lines = matchArrayLength(drawLine(x1, x2), drawLine(y1, y2));

  const points: Point[] = lines[0].map((x) => ({ x, y: -1 }));
  lines[1].forEach((y, i) => (points[i].y = y));

  return points;
}

export default mapPoint;
