import { Line, Point } from './types';

function createPoint(input: string): Point {
  const parsed = input.split(',').map(Number);

  return {
    x: parsed[0],
    y: parsed[1],
  };
}

function createLine(input: string): Line {
  return input.split(' -> ').map(createPoint) as Line;
}

function getLines(input: string): Line[] {
  return input.split('\n').map(createLine);
}

export default getLines;
