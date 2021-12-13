import { Dot } from './types';

function parseDots(dots: string): Dot[] {
  return dots.split('\n').map((line) => {
    const [x, y] = line.split(',').map(Number);

    return [x, y];
  });
}

export default parseDots;
