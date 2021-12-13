import getBoundary from './getBoundary';
import { Dot } from './types';

function drawDots(dots: Dot[]) {
  const [maxX, maxY] = getBoundary(dots);

  let map = '';

  for (let y = 0; y <= maxY; y++) {
    for (let x = 0; x <= maxX; x++) {
      if (dots.some((dot) => dot[0] === x && dot[1] === y)) {
        map += '#';
      } else {
        map += '.';
      }
    }

    map += '\n';
  }

  return map.slice(0, -1);
}

export default drawDots;
